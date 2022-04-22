<template>
  <router-link to="/">홈</router-link>
  <router-link to="/detail">상세페이지</router-link>
  <div>
  <!-- <video src="https://www.youtube.com/watch?v=BdJKm16Co6M" width="400" controls autoplay ref="video"></video> -->
  
  <!-- <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/1HqBaI-FV7Y?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe> -->

  </div>

    <PopularMovie :poster="poster" :swiperOptions="swiperOptions" />
    <NowPlayingMovie :poster1="poster1" :swiperOptions="swiperOptions" />
    <UpcomingMovie :poster2="poster2" :swiperOptions="swiperOptions" />

    <Movie v-for="(thisposter,i) in posters" :key="i" :posters="posters" :thisposter="thisposter" :swiperOptions="swiperOptions"/>
    
  <!-- <router-view></router-view> -->
</template>


<script>
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/navigation';

import PopularMovie from './components/PopularMovie.vue'
import UpcomingMovie from './components/UpcomingMovie.vue'
import NowPlayingMovie from './components/NowPlayingMovie.vue'
import Movie from './components/Movie.vue'

export default {
  name: 'App',
  computed:{
  },
  components: {
    PopularMovie : PopularMovie,
    UpcomingMovie : UpcomingMovie,
    NowPlayingMovie : NowPlayingMovie,
    Movie : Movie
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
      posters : [{
        title : '인기영화',
        poster : axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
          .then( 결과 => {
            console.log(this.poster);
            return this.poster = 결과.data.results
          })
      },{
        title : '상영중',
        poster : axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
          .then( 결과 => {
             console.log(this.poster);
            return this.poster = 결과.data.results
          })
      },{
        title : '개봉예정',
        poster : axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
          .then( 결과 => {
             console.log(this.poster);
            return this.poster = 결과.data.results
          })

      }],
      어떤영상인지 : '',
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
     .then( 결과 =>{
      this.poster = 결과.data.results
      //  console.log(this.poster, this.주제);
     })
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
     .then( 결과1 =>{
      this.poster1 = 결과1.data.results
      //  console.log(this.poster1);
     })
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
     .then( 결과2 =>{
      this.poster2 = 결과2.data.results
      //  console.log(this.poster2);
     })
  },
  methods: {

    allmovieVideo(어떤영상인지) {
      axios.get(`https://api.themoviedb.org/3/movie/${어떤영상인지}?api_key=${this.apikey}&language=ko&page=1`)
      .then( 결과는 =>{
        this.cate = 결과는.data.results
        //  console.log();
      })

    }

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
