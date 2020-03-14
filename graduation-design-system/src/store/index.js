import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './action-Types'
import Service from '../utils/service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: sessionStorage.getItem('userInfo') || {}
  },
  mutations: {
    [types.LOGIN_OK] (state, action) {
      console.log(action, 111)
    }
  },
  actions: {
    // 登录
    async login ({commit}, action) {
      const res = await Service.post('/', action.payload)
      if (res.code === 200) {
        // 注： 登录成功后将后端返回的用户信息进行本地存储
        // sessionStorage.setItem(...)
        commit({
          type: types.LOGIN_OK,
          payload: res.data.data
        })
      }
    },
    // 注册
    async register ({commit}, action) {
      const res = await Service.post('/', action.payload)
      if (res.code === 200) {
        // 基于信息安全原则，用户注册成功后，还需要进行一次登录操作
        history.go(0)
      }
    }
  }
})
