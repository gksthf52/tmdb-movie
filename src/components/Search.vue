<template>
  <div class="searchWrap">
    <input type="text" @input=" search($event.target.value) ">
      <!-- <p>{{movietitle}}</p> -->
    <div class="poster" v-for="a in movietitle" :key="a">
        <div class="poster-img">
          <img :src='`https://www.themoviedb.org/t/p/w200${a.poster_path}`' alt="">
        </div>
        <div class="poster-con">
          <h5>{{a.title}}</h5>     
          <span>{{a.release_date}}</span>
        </div>
      </div>
  </div>
</template>

<script>
// import { gsap } from 'gsap';    
import {onMounted , ref} from 'vue';
import axios from 'axios';

export default {
  props:{

  },
  setup(){

    // 인풋에 입력하면 실행해주세요~ 함수로 만들어서 첨부 / 함수작성, 리턴, 사용
    // 데이터 중심 개발 
    let movietitle = ref([]);
    let originalmovietitle = ref([]);

    onMounted(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=2`)
      .then( a => {
        movietitle.value = a.data.results;
        originalmovietitle.value = [...a.data.results]
      })
    })

    // 함수 작성
    function search(text) {
      // console.log(movietitle.value);
      // console.log(movietitle.value[0].title);      

      let newMovie = originalmovietitle.value.filter((a)=>{
        console.log(a.title)
        return a.title.indexOf(text) != -1
      });

      movietitle.value = [...newMovie]

      console.log(movietitle)
    }
    return {movietitle , search}
  },
  data(){
    return {
      
    }
  },  

  mounted(){
    
  }




//프롭스 사용법
  // setup(props){
  //   let movietitle = ref([]);
  //   let test = reactive({name:'kim'});

  //   props; //실시간 반영 안됨
  //   let 프롭스 = ref(props);
  //   let 프롭스 = toRefs(props);
  //   let { one, two} = toRefs(props);  프롭스들 하나씩 적어줌 
  //   one.value //사용

  //감시
  // watch(one,()=>{ //데이터 적어줌
    //코드 적어줌 one 변경 될 때마다 실행
  // })

  //데이터 연산결과 저장
  // let 결과 = computed( ()=>{return follower.value.length} )
  // console.log(결과.value)

  //   return {프롭스}
  // },
}
</script>

<style scope>
  p{color: #fff;}
</style>