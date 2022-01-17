<template lang="pug">
#pages
  #bg-1
  #bg-2
  #icons-function
    router-link(to='/list')#listbtn
    router-link(to='/chart')#chartbtn
    router-link(to='/settings')#settingsbtn

  #close
    router-link(to='/')
      b-icon.closeicon(icon="x")

  countingAlarm.position
</template>

<script>
import countingAlarm from './countingAlarm.vue'
export default {
  components: {
    countingAlarm
  }
}

</script>
