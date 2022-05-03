<template>
  <transition name="fade">
    <div class="modal-full" v-if="modal == 1">
      <div class="modal-area">
        <div class="modal-bg" :style="{ backgroundImage: `url(${imageurl(thiscate[pick].backdrop_path)})`}"></div>
        <div class="modal-cnt">
          <div class="modal-img" ref="box">
            <img :src='imageurl(thiscate[pick].poster_path)' alt="" style="">
          </div>
          <div class="modal-text">
            <h1 class="modal-movie-tit">{{thiscate[pick].title}}</h1>     
            <p class="modal-movie-date">{{thiscate[pick].release_date }} </p>     
            <p class="overview" :class="{short : full}" @click="more">{{thiscate[pick].overview}}</p>     
          </div>
          <iframe id="ytplayer" type="text/html" :src='youtubeurl(thiscate[pick].id)' frameborder="0"></iframe>
        </div>      
        <button class="close-btn" @click="$emit('closeModal')">닫기</button>
      </div>
    </div>  
  </transition>
</template>

<script>
import { gsap } from 'gsap';    
import axios from 'axios';

export default {
  props : {
    thiscate:Array,
    modal : Number,
    pick : Number,
  },
  data () {
    return{
      full : true,
      movieKey :'',
    }
  },
  // watch :{
  //   modal(a) {
  //     if(a == 1) {
  //       alert();
  //       this.modalani()
  //     } 
  //   }
  // },

  updated(){
    this.$nextTick(function () {
      gsap.to('.modal-movie-tit', { y:-20 , duration:0.5 })
  })
  },

  mounted(){
    // this.modalani()
  },
  
  methods:{
    // modalani(){
    //   return gsap.to('.modal-movie-tit', { y:-20 , duration:0.5 }), gsap.to('.poster-img', { y:50 , duration:0.5 })
    // },

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

    // 영화 설명 간추려서 보여주기
    more() {
      this.full = !this.full
    }
  },
}
</script>

<style>


</style>