<template lang="pug">
div
  mu-flexbox
    mu-flexbox-item
      mu-sub-header WORKS
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='新增' icon='add' @click='dialogAdd')
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='刷新' icon='refresh' @click='refresh')
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='设置' icon='settings')
    mu-flexbox-item(grow=0 basis='auto' style={width:'auto'})
      mu-icon-button(tooltip='更多' icon='more_horiz')
  mu-paper.works(:zDepth=2)
    mu-list
      mu-list-item(v-for='work in works' @click='debug(work._id)' :key="work['_id']" :title="work['name']" :describeText='work.description')
        mu-badge.percent(:content=" work.complete_degree + '%'" primary slot="right")
        mu-icon-button(slot='left' icon='home' )
  mu-dialog(:open='addForm' scrollable @close="closeAdd" )
    mu-sub-header(slot='actions')  Track new Work
    mu-flat-button(primary label="确定" slot="actions")
    mu-flat-button(primary label="关闭" @click="closeAdd" slot="actions")
    mu-row(gutter)
      mu-col(width="100" tablet="40" desktop="50")
        mu-text-field(label="作品名称" :labelFloat='true' v-model='formData.name' :required='true' :errorText='validName')
        br
        mu-text-field(label="描述" :labelFloat='true' v-model='formData.description' :rows='3' :rowsMax="6" :multiLine='true')
        br
      mu-col(width="100" tablet="60" desktop="50")
        mu-content-block 名称，描述，时间，标签，范围
        mu-text-field(label='Url_Repo' v-model='formData.url')
        br
        mu-text-field(label='Url_预览' v-model='formData.preview')

    label 完成进度
      mu-slider(v-model='formData.percent' :step='5')

</template>
<script>
export default {
  name: 'work-list-in-allpage',
  props: ['works'],
  data() {
    return {
      addForm: false,
      formData: {
        name: '',
        description: '',
        trackDate: '',
        trackTime: '',
        percent: 0
      }
    }
  },
  methods: {
    debug(...x) {
      console.info('test_el_works.vue ', x)
    },
    refresh() {
      this.$emit('refresh')
    },
    dialogAdd() {
      this.addForm = true
    },
    closeAdd() {
      this.addForm = false
    }
  },
  computed: {
    validName() {
      return this.formData.name.trim() ? '' : '必输项'
    }
  }
}
</script>

