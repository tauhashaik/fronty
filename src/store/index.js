import { createStore } from 'vuex'
import axios from 'axios'

 let baseUrl = 'https://node-eomp-api.onrender.com'
export default createStore({
  state: {
    product:[]
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.product = data;
    },
  },
  actions: {
    async getProduct({commit}){
      try{
        const {data}= await axios.get(baseUrl+'/product');
        console.log(data);
        commit("setProducts",data);
      } catch(error){
        console.error('Error fetching products',error)
      }
    },

  },
  modules: {
  }
})
