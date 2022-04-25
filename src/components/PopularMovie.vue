<template>

  <h2>인기 영화</h2>

  <swiper
  :breakpoints="swiperOptions.breakpoints"
  :modules="modules"
  :slides-per-view="8"
  navigation
  @swiper="onSwiper"
  @slideChange="onSlideChange">    
    <swiper-slide @click="modal=1, pick=i" v-for='(a,i) in poster' :key='i'>
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
    <ModalPop @closeModal="modal--;" :modal="modal" :poster="poster" :pick="pick"/>  
  </transition>

</template>

<script>

import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import ModalPop from './modal/Modal-popular.vue'


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
  methods:{

  },
  setup() {
    return {
      modules: [ Navigation ]
    };
  },
  mounted() {

  }
}
</script>
<style>

</style>