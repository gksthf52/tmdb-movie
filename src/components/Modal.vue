<template>
  <div class="modal-full" v-if="modal == 1">
    <div class="modal-con">
      <img :src='`https://www.themoviedb.org/t/p/w300${poster[2].poster_path}`' alt="" style="width:100%">
      <!-- <p>{{poster[pick].overview}}</p>       -->
      <button class="close-btn" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
    }
  },
  props : {
    poster : Array,
    modal : Number,
    pick : Number

  },

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
.modal-con{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px;
  font-size: 12px;
}
.close-btn{
  color: #000;
}
</style>