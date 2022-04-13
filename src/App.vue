<template>
  <router-link to="/">홈</router-link>
  <router-link to="/detail">상세페이지</router-link>
    <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="10"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">

      <swiper-slide v-for="a in 6" :key="a">
        <router-link to="/detail">클릭</router-link>
        <div>
          <img src="http://files.tmdb.org/p/exports/movie_ids_04_28_2017.json.gz" alt="">
        </div>
      </swiper-slide>

    </swiper>
  <router-view></router-view>
</template>


<script>
import { Navigation, Pagination,  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
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
      modules: [ Navigation, Pagination,   ]
    };
  },
  data () {
  return {
   query: '',
   results: ''
  }
 },
 methods: {
  getResult() {
   axios.get('https://api.themoviedb.org/3/search/movie?  api_key=eee59ded3d3f9fb38792c3a4c12362a5').then(response => { this.results = response.data.results })
     console.log(this.results)
   }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.movie , .swiper-slide{
  height: 150px;
  /* background: #000; */
}
</style>
