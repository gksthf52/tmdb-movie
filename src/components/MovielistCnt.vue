<template>
  <swiper
      :breakpoints="swiperOptions.breakpoints"
      :modules="modules"
      :slides-per-view="8"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange">
        <swiper-slide @click="pick=i; modalOpen(); " v-for='(a,i) in thiscate' :key='i'>
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
    <MoviePopup @closeModal="modal--;" :modal="modal" :pick="pick" :thiscate='thiscate' />
    <!-- <ModalPop 
    ref="modalani"
     @closeModal="modal--;" :modal="modal" :poster="poster" :pick="pick"/>   -->
  </transition>
</template>

<script>
import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import MoviePopup from './modal/MoviePopup.vue'

export default {
  components:{
    Swiper,
    SwiperSlide,    
    MoviePopup : MoviePopup,

  },
  props : {
    poster : Array,
    swiperOptions : Object,
    thisdata : Array,
    cates : Array,
    thisposter : Array,
    thiscate:Array
  },
  data (){
    return {
      modal : 0,
      pick : 0,
    }
  },
  setup() {
    return {
      modules: [ Navigation ]
    };
  },
  methods:{
    

    modalOpen(){
      this.modal = 1
    },
  }
}
</script>

<style>

</style>