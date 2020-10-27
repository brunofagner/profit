import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
export const Neo = axios.create({
  baseURL: 'https://profit-fe922.firebaseio.com/'
})
