<template>
  <h2>현재 상영 영화</h2>
  <swiper
  :breakpoints="swiperOptions.breakpoints"
  :modules="modules"
  :slides-per-view="8"
  navigation
  @swiper="onSwiper"
  @slideChange="onSlideChange">
      <swiper-slide @click="modal=1; pick=i" v-for='(a,i) in poster1' :key='i'>
      <router-link to="/detail"></router-link>
      <div class="poster">          
          <div class="poster-img">
          <img :src='`https://www.themoviedb.org/t/p/w300${a.poster_path}`' alt="" style="width:100%">
          </div>
          <div class="poster-con">
          <h5>{{a.title}}</h5>     
          <span>{{a.release_date}}</span>         
          </div>
      </div>
      </swiper-slide>
  </swiper>


  <ModalNow @closeModal="modal--;" :modal="modal" :poster1="poster1" :pick="pick"/>
</template>

<script>
import gsap from 'gsap';
// import {onMounted} from 'vue';
import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import ModalNow from './modal/Modal-nowplaying.vue'

export default {
  components:{
    Swiper,
    SwiperSlide,
    ModalNow : ModalNow
  },
  data (){
    return {
      modal : 0,
      pick : 0
    }
  },
  props : {
    poster1 : Array,
    swiperOptions : Object,
  },
  setup() {
    return {
      modules: [ Navigation,   ]
    };
  },
  methods : {

  },
  mounted () {
    gsap.to('.swiper-slide',{
      x:100
    })
  }
}

</script>

<style>

</style>