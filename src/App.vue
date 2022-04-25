<template>
  <router-link to="/">홈</router-link>
  <router-link to="/detail">상세페이지</router-link>

    <PopularMovie :poster="poster" :swiperOptions="swiperOptions" />
    <NowPlayingMovie :poster1="poster1" :swiperOptions="swiperOptions" />
    <UpcomingMovie :poster2="poster2" :swiperOptions="swiperOptions" />
    
  <!-- <router-view></router-view> -->
</template>


<script>
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/navigation';
import './assets/style.css';

import PopularMovie from './components/PopularMovie.vue'
import UpcomingMovie from './components/UpcomingMovie.vue'
import NowPlayingMovie from './components/NowPlayingMovie.vue'

export default {
  name: 'App',
  computed:{
  },
  components: {
    PopularMovie : PopularMovie,
    UpcomingMovie : UpcomingMovie,
    NowPlayingMovie : NowPlayingMovie,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data () {
    return {
      apikey:'eee59ded3d3f9fb38792c3a4c12362a5',
      주제 : 'popular',
      poster : [],
      poster1 : [],
      poster2 : [],
      swiperOptions: {
        breakpoints: {
          1024: {
          slidesPerView: 7,
          },
          680: {
          slidesPerView: 5,
          },
          320: {
          slidesPerView: 3,
          }
        }
      }   
    }
  },
  mounted () {

    axios.get(`https://api.themoviedb.org/3/movie/${this.주제}?api_key=${this.apikey}&language=ko&page=1`)
     .then( 결과 => {
      this.poster = 결과.data.results
       console.log(this.poster, this.주제);
     })
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
     .then( 결과1 => {
      this.poster1 = 결과1.data.results
      //  console.log(this.poster1);
     })
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
     .then( 결과2 => {
      this.poster2 = 결과2.data.results
      //  console.log(this.poster2);
     })

  },
  methods: {


  },
 actions : {

 }
}


</script>


<style>
</style>
