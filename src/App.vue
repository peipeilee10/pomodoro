<template lang="pug">
#app
  Header
  keep-alive
    router-view

</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Header

  }
}

</script>
