<template>

  <h2>인기 영화</h2>

  <swiper
  :breakpoints="swiperOptions.breakpoints"
  :modules="modules"
  :slides-per-view="8"
  navigation
  @swiper="onSwiper"
  @slideChange="onSlideChange">    
    <swiper-slide @click="modal=1; pick=i ;" v-for='(a,i) in poster' :key='i'>
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
    <Modal @closeModal="modal--;" :modal="modal" :poster="poster" :movievideo="movievideo" :pick="pick"/>  
  </transition>

</template>

<script>

import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from './Modal.vue'

export default {
  components:{
    Swiper,
    SwiperSlide,
    Modal : Modal
  },
  props : {
    poster : Array,
    swiperOptions : Object,
  },
  data (){
    return {
      modal : 0,
      pick : 0
    }
  },
  setup() {
    return {
      modules: [ Navigation ]
    };
  },
}
</script>
<style>
.fade-enter-from{opacity: 0;}
.fade-enter-active{transition: all 0.5s;}
.fade-enter-to{opacity: 1;}
.fade-leave-from{opacity: 1;}
.fade-leave-active{transition: all 0.5s;}
.fade-leave-to{opacity: 0;}


</style>