<template>
  <router-link to="/">홈</router-link>
  <router-link to="/detail">상세페이지</router-link>

    <PopularMovie :poster="poster" :swiperOptions="swiperOptions" />
    <NowPlayingMovie :poster1="poster1" :swiperOptions="swiperOptions" />
    <UpcomingMovie :poster2="poster2" :swiperOptions="swiperOptions" />
    
  <!-- <router-view></router-view> -->
</template>


<script>
import axios from 'axios'

import 'swiper/css';
import 'swiper/css/navigation';

import PopularMovie from './components/PopularMovie.vue'
import UpcomingMovie from './components/UpcomingMovie.vue'
import NowPlayingMovie from './components/NowPlayingMovie.vue'

export default {
  name: 'App',
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

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
     .then( 결과 =>{
      this.poster = 결과.data.results
       console.log(this.poster);
     })
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
     .then( 결과1 =>{
      this.poster1 = 결과1.data.results
       console.log(this.poster1);
     })
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
     .then( 결과2 =>{
      this.poster2 = 결과2.data.results
       console.log(this.poster2);
     })
     
  },
 methods: {
   
  //  more() {
  //    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=en-US&page=1`)
  //    .then( 결과 =>{
  //      //  this.imgurl = 결과.data
  //     this.apikey = 'eee59ded3d3f9fb38792c3a4c12362a5'
  //     this.poster = 결과.data.results
  //      this.imgurl = 결과.data.results[0].backdrop_path 
  //      console.log(this.poster);
  //    })
  //  }
   
 },
 actions : {

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
}

.swiper{
  padding: 20px;
}

.poster{
  margin-right: 20px;
  /* border-radius: 10px;
  box-shadow: 0px 0px 5px #94949466;
  overflow: hidden; */
  color: #fff;
}

.poster-con{
  text-align: left;
  height: 50px;
  line-height: 14px;
  padding: 5px;
}

.poster-con span{
  font-size: 10px;
}

body{
  margin: 0;
  background: #141414;
}

:root{
  --swiper-theme-color :#000
}
h2{
  color: #fff;
  margin: 30px 0 0 0;
  padding-left: 20px;
  text-align: left
}
h5{
  margin: 0 0 5px 0;
  font-size: 12px;
}

.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after,
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
  color: #fff;
}
</style>
