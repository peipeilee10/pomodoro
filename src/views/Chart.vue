<template lang="pug">
#chart
  pages

  #content
    #data.d-flex.text-center.justify-content-between
      #today
        div Today
        div 7
      #weekly
        div Weekly
        div 60
      #totally
        div Totally
        div 102

  chart2
</template>
<script>
import pages from '../components/pages.vue'
import chart2 from '../components/chart.vue'

export default {
  name: 'chart',
  components: {
    pages,
    chart2
  }
}

</script>
