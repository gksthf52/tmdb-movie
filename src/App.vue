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

      <swiper-slide v-for='a in poster' :key='a'>
        <router-link to="/detail">클릭</router-link>
        <div>
          
          <img class="poster" :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="">
          <!-- <img :src='imgurl' alt=""> -->
          <!-- <img :src='`https://www.themoviedb.org/t/p/w220_and_h330_face/${imgurl}`' alt=""> -->
        </div>
      </swiper-slide>


    </swiper>
  <router-view></router-view>
  
      <!-- <img :src='imgurl' alt=""> -->
      <!-- <p>{{imgurl}}</p> -->
      <button @click="more">이미지 가져와</button>
</template>


<script>
import { Navigation, Pagination,  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
      poster : []
    }
  },
  mounted () {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=en-US&page=1`)
     .then( 결과 =>{
       //  this.imgurl = 결과.data
      // this.apikey = 'eee59ded3d3f9fb38792c3a4c12362a5' 634649
      this.poster = 결과.data.results
       this.imgurl = 결과.data.results[0].poster_path 
       console.log(this.poster);
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
  margin-top: 60px;
}

.swiper-slide{
  /* height: 150px; */
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>
