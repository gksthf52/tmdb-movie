<template>
  <h2>현재 상영 영화</h2>
  <swiper
  :breakpoints="swiperOptions.breakpoints"
  :modules="modules"
  :slides-per-view="8"
  navigation
  @swiper="onSwiper"
  @slideChange="onSlideChange">
      <swiper-slide v-for='a in poster1' :key='a'>
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
</template>

<script>
import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components:{
    Swiper,
    SwiperSlide,
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
}

</script>

<style>

</style>