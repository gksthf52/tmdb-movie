<template>
  <div class="modal-full" v-if="modal == 1">
    <div class="modal-area">
      <div class="modal-img">
        <img :src='`https://www.themoviedb.org/t/p/w300${poster[pick].poster_path}`' alt="" style="">
      </div>
      <div></div>

      <!-- <video :src="`https://www.youtube.com/watch?v=${movievideo[pick].key}`"></video> -->
      <!-- <a :href='`https://www.youtube.com/watch?v=${movievideo[pick].key}`' target="_blank">유트브</a> -->

      <p class="modal-movie-tit">영화 제목 : {{poster[pick].title }}</p>     
      <p class="modal-movie-date">개봉 일자 : {{poster[pick].release_date }}</p>     
      <p class="overview" :class="{short : full}" @click="more">{{poster[pick].overview}}</p>     
      <button class="close-btn" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  props : {
    poster : Array,
    modal : Number,
    pick : Number,
    movievideo : Array,

  },
  data () {
    return{
      full : true
    }
  },
  methods:{
    more() {
      this.full = !this.full
      // console.log(this.full)
    }
  },
  mounted: function(){
    gsap.to('.modal-movie-tit', {duration:0.3, opacity:0.5})
  }
}
</script>

<style>
.modal-full{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.modal-area{
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px;
}
.modal-area p{
  margin: 0;
  font-size: 14px;
}
.modal-area p.overview{
  width: 100%;
  margin: 20px 0 40px;
}
.modal-area p.overview.short{
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.close-btn{
  color: #000;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: none;
  background: #fff;
}
</style>