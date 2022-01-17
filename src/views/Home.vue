<template lang="pug">
#home
  #bg-left
  #bg-top
  #bg-right
  #bg-bottom

  //- 清單按鈕
  router-link(to='/list')
    #menu

  //-代辦事項輸入欄位
  #additem
    b-form-input.input(v-model="newinput" @keydown.enter="additem" :state="newinputstate" invalid-feedback="字數太少" placeholder="Add a new mission...")
    b-btn.btn
      b-icon(icon="plus" @click="additem")

  //- 倒數計時
  countingAlarm

  //- 功能按鈕
  #btn-group
    router-link(to='/list')#listbtn
    router-link(to='/chart')#chartbtn
    router-link(to='/settings')#settingsbtn
</template>

<script>
import countingAlarm from '../components/countingAlarm.vue'
export default {
  name: 'Home',
  components: {
    countingAlarm
  },
  data () {
    return {
      newinput: '',
      fields: [
        { key: 'name', label: '名稱' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput === 0 ? null : false
    }
  },
  methods: {
    additem () {
      // 如果輸入大於2再執行
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        // 輸入完畢即清空
        this.newinput = ''
      }
    }
  }
}

</script>
