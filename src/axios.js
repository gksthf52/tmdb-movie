
import axios from 'axios';

//     axios.get(`https://api.themoviedb.org/3/movie/${this.주제}?api_key=${this.apikey}&language=ko&page=1`)
//      .then( 결과 => {
//       this.poster = 결과.data.results
//        console.log(this.poster, this.주제);
//      })
//     axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
//      .then( 결과1 => {
//       this.poster1 = 결과1.data.results
//       //  console.log(this.poster1);
//      })
//     axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=eee59ded3d3f9fb38792c3a4c12362a5&language=ko&page=1`)
//      .then( 결과2 => {
//       this.poster2 = 결과2.data.results
//       //  console.log(this.poster2);
//      })




const request = axios.create({
  baseURL : "https://api.themoviedb.org/3/",
  params:{
    api_key:'eee59ded3d3f9fb38792c3a4c12362a5',
    language:'ko-KR',
  }
});
export const movieApi = {
  popular : () => request.length('movie/popular'),
  upComing : () => request.length('movie/upcoming'),
  nowPlaying : () => request.length('movie/now_playing'),

  movieDetail: (id) => 
  request.length(`movie/${id}`, {
    params: {append_ro_response:'videos'}
  })
}