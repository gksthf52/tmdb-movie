<template>
    <div class="modal-full" v-if="modal == 1">
      <div class="modal-area">
        <div class="modal-bg" :style="{ backgroundImage: `url(${imageurl(poster[pick].backdrop_path)})`}"></div>
        <div class="modal-cnt">
          <div class="modal-img">
            <img :src='imageurl(poster[pick].poster_path)' alt="" style="">
          </div>
          <div class="modal-text">
            <h1 class="modal-movie-tit">{{poster[pick].title}}</h1>     
            <p class="modal-movie-date">{{poster[pick].release_date }} </p>     
            <p class="overview" :class="{short : full}" @click="more">{{poster[pick].overview}}</p>     
          </div>
          <iframe id="ytplayer" type="text/html" :src='youtubeurl(poster[pick].id)' frameborder="0"></iframe>
        </div>      
        <button class="close-btn" @click="$emit('closeModal')">닫기</button>
      </div>
    </div>  
</template>

<script>
import { gsap } from 'gsap';    
import axios from 'axios';

export default {
  props : {
    poster : Array,
    modal : Number,
    pick : Number,
  },
  data () {
    return{
      full : true,
      movieKey :''
    }
  },
  methods:{
    alert1(){

      alert();

      let tl = gsap.timeline();
      tl.to('.poster-img',{y:50,duration:0.5})
      tl.from('.poster-con',{y:50,duration:0.5})
      tl.from('.modal-movie-tit',{y:50,opacity:0.5,duration:0.5})
      tl.to('.modal-movie-date',{y:50,duration:0.5})
      tl.to('.modal',{y:50,duration:0.5})

      return tl;
    },

    // 영화 설명 간추려서 보여주기
    more() {
      this.full = !this.full
    },
    // 이미지
    imageurl(img) {
      return `https://www.themoviedb.org/t/p/w300${img}`
    },
    // 유튜브 불러오기
    youtubeurl(movieId) {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=eee59ded3d3f9fb38792c3a4c12362a5`)
        .then (결과 => {
          this.movieKey = 결과.data.results[0].key
          // console.log('영화 id : '+movieId, ', 영화 key : '+this.movieKey);
        })

      return `https://www.youtube.com/embed/${this.movieKey}?autoplay=1&origin=http://example.com`
    },

  },
  setup() {
    

    
  },

  mounted(){    
    
    
  },
  created(){
    // this.alert1()
  }
}
</script>

<style>


</style>