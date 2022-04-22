<template>
  <div class="modal-full" v-if="modal == 1">
    <div class="modal-area">
      <div class="modal-img">
        <img :src='imageurl(poster[pick].poster_path)' alt="" style="">
      </div>
      <iframe id="ytplayer" type="text/html" width="100%" :src='youtubeurl(poster[pick].id)' frameborder="0"></iframe>

      <p class="modal-movie-tit">영화 제목 : {{poster[pick].title }}</p>     
      <p class="modal-movie-date">개봉 일자 : {{poster[pick].release_date }}</p>     
      <p class="overview" :class="{short : full}" @click="more">{{poster[pick].overview}}</p>     
      <button class="close-btn" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { gsap } from 'gsap';    
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
    more() {
      this.full = !this.full
    },

    imageurl(img) {
      return `https://www.themoviedb.org/t/p/w300${img}`
    },

    youtubeurl(movieId) {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=eee59ded3d3f9fb38792c3a4c12362a5`)
        .then (결과4 => {
          this.movieKey = 결과4.data.results[0].key
          // console.log('영화 id : '+movieId, ', 영화 key : '+this.movieKey);
        })

      return `https://www.youtube.com/embed/${this.movieKey}?autoplay=1&origin=http://example.com`
    }
  },

  mounted(){
    gsap.to('.modal-movie-tit', {duration:0.3, opacity:0.5})    
  },
  }
</script>

<style>
.modal-full{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(49, 37, 37, 0.7);
  z-index: 100;
}
.modal-area{
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px;
}
.modal-area p{
  margin: 0;
  font-size: 14px;
}
.modal-area p.overview{
  width: 100%;
  margin: 20px 0 40px;
}
.modal-area p.overview.short{
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.close-btn{
  color: #000;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: none;
  background: #fff;
}
</style>