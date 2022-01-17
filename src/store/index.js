import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const time = parseInt(process.env.VUE_APP_TIME)
const timebreak = parseInt(process.env.VUE_APP_TIMEBREAK)

export default new Vuex.Store({
  state: {
    music: 'alarm.mp3',
    items: [],
    current: '',
    // nextText: '',
    finished: [],
    timeleft: time,
    sounds: false,
    break: false,
    checked: false

  },
  mutations: {
    additem (state, data) {
      state.items.push({
        name: data,
        edit: false,
        model: data,
        checked: false
      })
    },
    // nextText (state) {
    //   state.items.slice(1, 1).name
    // },
    soundSelect (state, data) {
      state.sounds = data
    },
    start (state) {
      // 先判斷目前適不是休息時間，若不是休息時間，顯示陣列第一個的名字
      state.current = state.break ? '休息一下' : state.items.shift().name
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state) {
      if (!state.break) {
        state.finished.push(state.current)
      }
      state.current = ''
      if (state.items.length > 0) {
        state.break = !state.break
      }
      state.timeleft = state.break ? timebreak : time
    },
    checked (state, data) {
      state.items[data].checked = false
    },
    checkedyet (state, data) {
      state.items[data].checked = true
    },
    submitedit (state, data) {
      state.items[data].name = state.items[data].model
      state.items[data].edit = false
    },
    canceledit (state, data) {
      state.items[data].model = state.items[data].name
      state.items[data].edit = false
    },
    edititem (state, data) {
      state.items[data].edit = true
    },
    delitem (state, data) {
      state.items.splice(data, 1)
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({ key: 'pomodoro' })
  ]
})
