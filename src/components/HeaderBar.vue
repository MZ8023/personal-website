<template>
  <div class="header-bar d-flex justify-space-between align-center">
    <div class="d-flex">
      <img alt="logo" class="header-logo" src="@/assets/logo.png">
      <div class="d-flex header-info-box">
        <p class="header-name headline">{{ name }}</p>
        <div class="header-info d-flex">
          <div v-for="item in headerInfo" :key="item.title" class="header-info-item">
            <div class="header-info-title">{{ item.title }}</div>
            <p class="header-info-score">{{ item.score }}<span>↑</span></p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '张兴华',
      headerInfo: [
        { title: '能 力', score: '4.8' },
        { title: '能 力', score: '4.9' },
        { title: '能 力', score: '5.0' }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.header-bar
  border-bottom 1px solid #c8baaa
  width 100%
  height 115px
  padding 0 8%
  .header-logo
    width 162px
    height 100px
  .header-info-box
    padding 15px 0 0
    .header-name
      height 38px
      width auto
      font-size 28px
      font-weight 600
      padding 0 10px
      border-left 1px solid #f0f0f0
    .header-info
      height 38px
      font-weight 400
      padding 0 10px
      border-left 1px dotted #f0f0f0
      .header-info-item
        color #999
        width 40px
        height 36px
        font-family tahoma,arial,"\5b8b\4f53"
        .header-info-title
          text-align center
          font-family "\5b8b\4f53"
        .header-info-score
          color #1f7700
          width 32px
          padding-left 5px
          height 18px
</style>
