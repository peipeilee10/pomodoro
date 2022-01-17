<template lang="pug">
#list
  pages
  #textinput
    b-row
      //- 輸入事項bar
      b-col#additem.mb-3(cols="12")
        b-form-input#newinput(placeholder="Add a new mission..." v-model="newinput" :state="newinputstate" @keydown.enter="additem")
      b-btn.plusicon
        b-icon(icon="plus" @keydown.enter="additem" @click="additem")

      //- 顯示日期
      b-col(cols="12")
        .calendar.d-flex.align-items-center.py-2
          b-icon.ml-2(icon="calendar3")
          .datecontent.d-flex.align-items-center.m-auto
            b-icon.mr-3(icon="caret-left-fill")
            .date July.15 2019
            b-icon.ml-3(icon="caret-right-fill")

      //- 顯示清單
      b-col(cols="12")
        b-table(:items="items" :fields="fields" show-empty striped)
          //- 沒有項目
          template(#empty)
            p.text-center 沒有項目
          //- 完成
          template(#cell(check)="data")
            //- | {{data}}
            span(v-if="data.item.checked")
              b-btn
                b-icon.checkedicon(icon="check2-circle" @click="checked(data.index)")
            span(v-else)
              b-btn
                b-icon.checkedicon(icon="circle" @click="checkedyet(data.index)")
          //- 事項
          template(#cell(name)="data")
            //- | {{data}}
            b-form-input(v-if="data.item.edit" v-model="data.item.model")
            span(v-else).valuecolor {{data.value}}
          template(#cell(action)="data")
            span(v-if="data.item.edit")
              b-btn
                b-icon(icon="check" @click="submitedit(data.index)")
              b-btn
                b-icon(icon="arrow-counterclockwise" @click="canceledit(data.index)")
            span(v-else)
              b-btn
                b-icon(icon="pencil" @click="edititem(data.index)")
              b-btn
                b-icon(icon="trash" @click="delitem(data.index)")

</template>
<script>
import pages from '../components/pages.vue'

export default {
  name: 'list',
  components: {
    pages
  },
  data () {
    return {
      newinput: '',
      fields: [
        { key: 'check', label: '完成' },
        { key: 'name', label: '名稱' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        // 清空
        this.newinput = ''
      }
    },
    checked (i) {
      this.$store.commit('checked', i)
    },
    checkedyet (i) {
      this.$store.commit('checkedyet', i)
    },
    submitedit (index) {
      if (this.items[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    }

  }
}

</script>
