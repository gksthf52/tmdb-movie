<template>
  <div class="modal-full" v-if="modal == 1">
    <div class="modal-area">
      <div class="modal-bg" :style="{ backgroundImage: `url(${imageurl(poster1[pick].backdrop_path)})`}"></div>
      <div class="modal-cnt">
        <div class="modal-img">
          <img :src='imageurl(poster1[pick].poster_path)' alt="" style="">
        </div>
        <div class="modal-text">
          <h1 class="modal-movie-tit">{{poster1[pick].title}}</h1>     
          <p class="modal-movie-date">{{poster1[pick].release_date }}</p>     
          <p class="overview" :class="{short : full}" @click="more">{{poster1[pick].overview}}</p>     
        </div>        
        <iframe id="ytplayer" type="text/html" :src='youtubeurl(poster1[pick].id)' frameborder="0"></iframe>
      </div>      
      <button class="close-btn" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props : {
    poster1 : Array,
    modal : Number,
    pick : Number,
  },
  data () {
    return{
      full : true,
      movieKey :'',
      경로:''
    }
  },
  methods:{
    more() {
      this.full = !this.full
    },
//backdrop_path
    imageurl(img) {
      return `https://www.themoviedb.org/t/p/w300${img}`
    },

    // bgurl(img) {
    //   return `https://www.themoviedb.org/t/p/w300${img}`
    // },

    youtubeurl(movieId) {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=eee59ded3d3f9fb38792c3a4c12362a5`)
        .then (결과 => {
          this.movieKey = 결과.data.results[0].key
          // console.log('영화 id : '+movieId, ', 영화 key : '+this.movieKey);
        })

      return `https://www.youtube.com/embed/${this.movieKey}?autoplay=1&origin=http://example.com`
    }
  },

  mounted(){

  },
  }
</script>

<style>
  
</style>