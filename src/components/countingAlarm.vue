<template lang="pug">
#countingAlarm
  #alarm-container.d-flex.flex-column.justify-content-between.align-items-center.py-5
    //- 顯示目前正在進行的事情
    #title.mt-5 {{currentText}}
    //- 顯示時間
    #time {{timeText}}
    //- 靜音、開始、跳過按鈕
    #function-btn.d-flex.mb-5
      //- 鈴聲(如果sounds = true 出現)
      .ring-btn.mr-3(v-if='!sounds' @click='soundSelect(true)')
      //- 靜音(如果sounds = false 出現)
      .mute-btn.mr-3(v-if='sounds' @click='soundSelect(false)')
      //- 播放(如果狀態不等於倒數中出現)
      .play-btn.mr-3(v-if='status !== 1' @click='start')
      //- 暫停(如果狀態等於倒數中出現)
      .pause-btn.mr-3(v-else @click='pause')
      //- 跳過
      .skip-btn.mr-3(v-if='current.length > 0' @click='finish(true)')

  #nextText
    |Next:{{nextText}}

</template>

<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.items.length > 0 ? '點擊開始' : '沒有事項'
    },
    nextText () {
      return this.$store.state.items[0]?.name || '無事項'
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m}:${s}`
    },
    sounds () {
      return this.$store.state.sounds
    }
  },
  methods: {
    // 靜音或非靜音
    soundSelect (id) {
      this.$store.commit('soundSelect', id)
    },
    // 點選開始
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      } if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    // 點選暫停
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    // 點選跳過
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')
      // 如果不是跳過
      if (!skip) {
        const audio = new Audio()
        // 如果聲音不是false
        if (this.$store.state.sounds !== false) {
          audio.src = require('@/assets/' + this.$store.state.music)
          audio.play()
        }
      }

      if (this.items.length > 0) {
        this.start()
      }
    }
  }
}

</script>
