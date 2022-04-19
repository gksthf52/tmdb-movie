<template>

  <h2>인기 영화</h2>

  <swiper
  :breakpoints="swiperOptions.breakpoints"
  :modules="modules"
  :slides-per-view="8"
  navigation
  @swiper="onSwiper"
  @slideChange="onSlideChange">    
    <swiper-slide @click="modal=1" v-for='(a,i) in poster' :key='i'>
      <!-- <router-link to="/detail"></router-link> -->
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

  <Modal @closeModal="modal--; pick = i" :modal="modal" :poster="poster"/>

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
    a : Object
  },
  data (){
    return {
      modal : 0
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


</style>