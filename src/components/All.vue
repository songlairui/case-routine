<template lang="pug">
div
  mu-sub-header 所有
  mu-paper.usr(:zDepth=1)
    mu-list
      mu-list-item( :title='identity.username' @click='debug' :to="{name:'profile'}")
        mu-avatar(slot='left' icon='folder' color='cyan' backgroundColor='sliver')
        span(slot='default') common description
        mu-icon-button(slot='right' icon='keyboard_arrow_right')
      mu-divider
      mu-list-item(title='hello')
      mu-list-item
        span( slot='default' ) {{ identity.username }}
  Works(:works='works' @refresh='refresh')
  SkillArticle
  Consuming
</template>
<style lang="stylus" scoped>

</style>
<script>
import axios from 'axios'
import Works from './Works'
import SkillArticle from './SkillArticle'
import Consuming from './Consuming'

export default {
  name: 'all-list',
  data() {
    return {
      msg: '',
      identity: {
        username: 'UserName'
      },
      btn_works: {
        'refresh': false,
        'add': false,
        'settings': false
      },
      trigger: null,
      works: []
    }
  },
  created() {
    this.refresh()
  },
  methods: {
    debug(...x) {
      console.info('test_thing', x)
    },
    refresh() {
      axios.get('https://easy-mock.com/mock/59d9d05e9d342f449f308beb/caseStudy/works').then(({ data }) => {
        console.info('【mock result】：', data)
        if (!data.works) return
        this.works = data.works
      })
        .catch(e => console.error(e))
    }
  },
  components: {
    Works, SkillArticle, Consuming
  }

}
</script>
