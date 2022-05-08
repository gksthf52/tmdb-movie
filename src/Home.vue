<template>

  <div class="movieWrap" v-for="(movielist,i) in moviecate" :key="i">
      <MovielistTitle :title="movielist.title"/>
      <MovielistCnt :movielist="movielist.data" :moviecate="moviecate" :swiperOptions="swiperOptions"/>
    </div>
</template>

<script>

import axios from 'axios';

//컴포넌트
import MovielistTitle from './components/MovielistTitle.vue'
import MovielistCnt from './components/MovielistCnt.vue'

export default {
  name: 'Home',
  components: {
    MovielistTitle : MovielistTitle,
    MovielistCnt : MovielistCnt,
  },
  data () {
    return {
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

      moviecate : [],

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
          
          this.moviecate.push(this.requestPop, this.requestNow, this.requestUpcom)
          // console.log(this.moviecate)
        })
      )

  },
 actions : {

 }
}

</script>

<style>

</style>