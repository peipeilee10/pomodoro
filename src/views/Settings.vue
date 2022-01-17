<template lang="pug">
#settings
  pages

  #SettingContainer
    #timeSetting.mb-5
      p.mb-4.text20 Time Setting
      b-row.timeSettingContent.d-flex.borderbottom.my-4
        b-col(cols="4")
          p Working Time
        b-col(cols="8")
          select.form-select.bg-transparent
            option(selected) 25 min
            option(value='1') 15 min
            option(value='2') 10 min
          //- b-form-select.mb-3(v-model='selected')
          //-   b-form-select-option.text-primary.selected(:value='null') 25 min
          //-   b-form-select-option.text-primary(value='a') 15 min
          //-   b-form-select-option.text-primary(value='b') 10 min
      b-row.restTimeSettingContent.borderbottom.my-4
        b-col(cols="4")
          p Resting Time
        b-col(cols="8")
          select.form-select.bg-transparent
            option(selected) 15 min
            option(value='1') 10 min
            option(value='2') 5 min

    #alarm
      p.text20 Alarm
      b-row.sound.d-flex.borderbottom.my-4
        b-col(cols="4")
          p Sound
        b-col(cols="8")
          div
            b-form-checkbox(v-model='checked' name='check-button' switch)

      b-row.restTimeSettingContent.d-flex.borderbottom.my-4
        b-col(cols="4")
          p Audio
        b-col(cols="8")
          select.form-select.bg-transparent
            option(selected) Yay

</template>
<script>
import pages from '../components/pages.vue'

export default {
  name: 'list',
  components: {
    pages
  }
}

</script>
