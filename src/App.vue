<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search</router-link>
  </nav>

  <router-view></router-view>
  
</template>


<script>
// import { gsap } from 'gsap';    
import './assets/style.css';

export default {
  mounted(){
    // gsap.to('.swiper-slide', { y:20 , duration:0.3 })
    
  },
  methods:{

  }
}

</script>


<style>

</style>
