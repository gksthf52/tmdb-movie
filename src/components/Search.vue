<template>
  <div class="searchWrap">
    <input type="text" @input="search($event.target.value)">

  </div>
</template>

<script>
// import { gsap } from 'gsap';    
  import axios from 'axios';

export default {
  data(){
    return {
      searchdata : String, 
      searchdataori : String, 
    }
  },  

  methods: {
    search(검색어){
      console.log(검색어)


    }
  },

  mounted(){
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
      .then( 결과 => {
        this.searchdata.value = 결과.data
        console.log(this.searchdata)
     })
  }
}
</script>

<style>

</style>