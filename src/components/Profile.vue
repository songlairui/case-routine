<template lang="pug">
div
  mu-sub-header( @click.native='$router.go(-1)') &lt;&nbsp;返回
  mu-divider
  mu-sub-header 个人资料
  mu-paper.profile
    pre line
</template>
<script>
export default {
  name: 'profile'
}
</script>
<style lang="stylus" scoped>
  .profile
    border thin solid red
</style>
