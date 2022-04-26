<template>

  <h2>인기 영화</h2>

  <swiper
  :breakpoints="swiperOptions.breakpoints"
  :modules="modules"
  :slides-per-view="8"
  navigation
  @swiper="onSwiper"
  @slideChange="onSlideChange">    
    <swiper-slide @click=" run(); pick=i; " v-for='(a,i) in poster' :key='i'>
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

  <transition name="fade">
    <ModalPop 
    ref="modalani"
     @closeModal="modal--;" :modal="modal" :poster="poster" :pick="pick"/>  
  </transition>

</template>

<script>

import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import { gsap } from 'gsap';    

import 'swiper/css';
import 'swiper/css/navigation';
import ModalPop from './modal/Modal-popular.vue'

// let masterTL = gsap.timeline();

export default {
  components:{
    Swiper,
    SwiperSlide,
    ModalPop : ModalPop
  },
  props : {
    poster : Array,
    swiperOptions : Object,
  },
  data (){
    return {
      modal : 0,
      pick : 0,
    }
  },

  mounted() {
  },

  methods:{
    run() {
      console.log(this.$refs.modalani)
        this.modal=1
        this.$refs.modalani.alert1()
        // modal=1;
    },
    // alert(){
    //   alert();
    //   let tl = gsap.timeline();
    //   tl.to('.poster-img',{y:50,duration:0.5})
    //   tl.to('.poster-con',{y:50,duration:0.5})
    //   tl.to('.modal-movie-tit',{y:50,opacity:0.5,duration:0.5})
    //   tl.to('.modal-movie-date',{y:50,duration:0.5})
    //   tl.to('.modal',{y:50,duration:0.5})

    //   return tl;
    // }
    
  },
  setup() {
    return {
      modules: [ Navigation ]
    };
  },
}
</script>
<style>

</style>