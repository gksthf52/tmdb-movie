<template>
  <!--<PopularMovie :poster="poster" :swiperOptions="swiperOptions" />
  <NowPlayingMovie :poster1="poster1" :swiperOptions="swiperOptions" />
  <UpcomingMovie :poster2="poster2" :swiperOptions="swiperOptions" /> -->

  <div class="movieWrap" v-for="(thiscate,i) in cates" :key="i">
      <MovielistTitle :title="thiscate.title"/>
      <MovielistCnt :thiscate="thiscate.data" :cates="cates" :swiperOptions="swiperOptions"/>
      <!-- <swiper
      :breakpoints="swiperOptions.breakpoints"
      :modules="modules"
      :slides-per-view="8"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange">
        <swiper-slide @click="modalOpen(); " v-for='(thisposter,i) in thiscate.data' :key='i'>
          <div class="poster">
            <div class="poster-img">
              <img :src='`https://www.themoviedb.org/t/p/w300${thisposter.poster_path}`' alt="" style="width:100%">
            </div>
            <div class="poster-con">
              <h5>{{thisposter.title}}</h5>     
              <span>{{thisposter.release_date}}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper> -->
    </div>
</template>

<script>

import axios from 'axios';

//컴포넌트
import MovielistTitle from './components/MovielistTitle.vue'
import MovielistCnt from './components/MovielistCnt.vue'
// import MoviePopup from './components/modal/MoviePopup.vue'

// import PopularMovie from './components/PopularMovie.vue'
// import UpcomingMovie from './components/UpcomingMovie.vue'
// import NowPlayingMovie from './components/NowPlayingMovie.vue'

export default {
  name: 'App',
  components: {
    MovielistTitle : MovielistTitle,
    MovielistCnt : MovielistCnt,
    // PopularMovie : PopularMovie,
    // UpcomingMovie : UpcomingMovie,
    // NowPlayingMovie : NowPlayingMovie,
  },
  data () {
    return {
      apikey:'eee59ded3d3f9fb38792c3a4c12362a5',
      modal : 0,
      // poster : [],
      // poster1 : [],
      // poster2 : [],
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
      },
      cates : [],
      requestPop : {
        title:'인기영화',
        data:''
      },
      requestNow : {
        title:'현재상영중',
        data:''
      },
      requestUpcom : {
        title:'개봉예정',
        data:''
      }, 
    }
  },
  methods: {

    modalOpen(){
      this.modal = 1
    },

  },
  mounted () {
    let pop = 'https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1';
    let now = 'https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1';
    let upcom = 'https://api.themoviedb.org/3/movie/upcoming?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1';

    const requestPop = axios.get(pop);
    const requestNow = axios.get(now);
    const requestUpcom = axios.get(upcom);
    
    axios
      .all([requestPop,requestNow,requestUpcom])
      .then(
        axios.spread((...responses) => {
          this.requestPop.data = responses[0].data.results;
          this.requestNow.data = responses[1].data.results;
          this.requestUpcom.data = responses[2].data.results;   
          
          this.cates.push(this.requestPop, this.requestNow, this.requestUpcom)

          console.log(this.cates)
        })
      )

    // axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
    //  .then( 결과 => {
    //   this.poster = 결과.data.results
    //   //  console.log(this.poster, this.주제);
    //  })
    // axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
    //  .then( 결과1 => {
    //   this.poster1 = 결과1.data.results
    //   //  console.log(this.poster1);
    //  })
    // axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
    //  .then( 결과2 => {
    //   this.poster2 = 결과2.data.results
    //   //  console.log(this.poster2);
    //  })

  },
 actions : {

 }
}

</script>

<style>

</style>