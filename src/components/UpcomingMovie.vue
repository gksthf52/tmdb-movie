<template>

  <h2>개봉 예정 영화</h2>

  <swiper
  :breakpoints="swiperOptions.breakpoints"
  :modules="modules"
  :slides-per-view="8"
  navigation
  @swiper="onSwiper"
  @slideChange="onSlideChange">
    <swiper-slide @click="modal=1; pick=i" v-for='(a,i) in poster2' :key='i'>
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

  <ModalUp @closeModal="modal--;" :modal="modal" :poster2="poster2" :pick="pick"/>
</template>

<script>
import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import ModalUp from './modal/Modal-upcoming.vue'

export default {
  components:{
    Swiper,
    SwiperSlide,
    ModalUp : ModalUp
  },
  data (){
    return {
      modal : 0,
      pick : 0
    }
  },
  props : {
    poster2 : Array,
    swiperOptions : Object,
  },
  setup() {
    return {
      modules: [ Navigation,   ]
    };
  },
}

</script>

<style>


</style>