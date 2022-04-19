<template>
  <div class="modal-full" v-if="modal == 1">
    <div class="modal-con">
      <p>이건 모달 창</p>
      <!-- <img :src='`https://www.themoviedb.org/t/p/w300${a.poster_path}`' alt="" style="width:100%"> -->
      
      <button class="close-btn" @click="$emit('closeModal')">
        닫기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    poster : Array,
    modal : Number,
    a: Object,
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
  padding: 50px;
}
.close-btn{
  color: #000;
}
</style>