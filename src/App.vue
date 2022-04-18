<template>
  <router-link to="/">홈</router-link>
  <router-link to="/detail">상세페이지</router-link>
    <swiper
    :breakpoints="swiperOptions.breakpoints"
    :modules="modules"
    :slides-per-view="8"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">

      <swiper-slide v-for='a in poster' :key='a'>
        <router-link to="/detail">
          <!-- <img class="poster" :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="">         -->
        </router-link>
        <div class="poster">          
          <div class="poster-img">
            <img :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="" style="width:100%">
          </div>
          <div class="poster-con">
            <h5>{{a.title}}</h5>     
            <span>{{a.release_date}}</span>         
          </div>
          <!-- <img :src='imgurl' alt=""> -->
          <!-- <img :src='`https://www.themoviedb.org/t/p/w220_and_h330_face/${imgurl}`' alt=""> -->
        </div>
      </swiper-slide>
    </swiper>

    <swiper
    :breakpoints="swiperOptions.breakpoints"
    :modules="modules"
    :slides-per-view="8"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">

      <swiper-slide v-for='a in poster1' :key='a'>
        <router-link to="/detail">
          <!-- <img class="poster" :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="">         -->
        </router-link>
        <div class="poster">          
          <div class="poster-img">
            <img :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="" style="width:100%">
          </div>
          <div class="poster-con">
            <h5>{{a.title}}</h5>     
            <span>{{a.release_date}}</span>         
          </div>
          <!-- <img :src='imgurl' alt=""> -->
          <!-- <img :src='`https://www.themoviedb.org/t/p/w220_and_h330_face/${imgurl}`' alt=""> -->
        </div>
      </swiper-slide>
    </swiper>

    <swiper
    :breakpoints="swiperOptions.breakpoints"
    :modules="modules"
    :slides-per-view="8"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">

      <swiper-slide v-for='a in poster2' :key='a'>
        <router-link to="/detail">
          <!-- <img class="poster" :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="">         -->
        </router-link>
        <div class="poster">          
          <div class="poster-img">
            <img :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="" style="width:100%">
          </div>
          <div class="poster-con">
            <h5>{{a.title}}</h5>     
            <span>{{a.release_date}}</span>         
          </div>
          <!-- <img :src='imgurl' alt=""> -->
          <!-- <img :src='`https://www.themoviedb.org/t/p/w220_and_h330_face/${imgurl}`' alt=""> -->
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
// import 'swiper/css/pagination';
// import func from 'vue-editor-bridge';



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
      apikey : '',
      imgurl : '',
      poster : [],
      poster1 : [],
      poster2 : [],
      swiperOptions: {
          breakpoints: {
            1024: {
            slidesPerView: 7,
            // spaceBetween: 10
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
       //  this.imgurl = 결과.data
      // this.apikey = 'eee59ded3d3f9fb38792c3a4c12362a5' 634649
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

.poster-img{
  height: 230px;
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

h5{
  margin: 0 0 5px 0;
  font-size: 12px;
}
</style>
