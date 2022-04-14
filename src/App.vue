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
          <!-- <img :src='`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1${imgname}`' alt=""> -->
          <p>{{imgname.data.results[0].poster_path}}</p>
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
      results: '',
      imgname : '',
      // apikey : 'eee59ded3d3f9fb38792c3a4c12362a5'
    }
  },
 methods: {
   
 },
 actions : {

 }
}

axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=en-US&page=1`)
.then(movie => {
  console.log(movie)
  console.log(movie.data.results[0].poster_path)
  this.imgname = movie
})
// const url = "https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=en-US&page=1";


// axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1${imgname}`)
// .then(movie => {
//   console.log(movie)
//   console.log(movie.data.results[0].poster_path)
//   this.imgname = movie.data.results[0].poster_path
// })

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

.swiper-slide{
  height: 150px;
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>
