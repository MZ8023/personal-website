<template>
  <div class="top-nav">
    <div class="top-nav-poster-warpper">
      <div class="top-nav-poster d-flex justify-space-between align-center">
        <div class="top-nav-left-info">
          <p class="top-nav-left-info-title">{{ topNavInfo.title }}</p>
          <p class="top-nav-left-info-comment">{{ topNavInfo.comment }}</p>
        </div>
        <div class="top-nav-right-keyword d-flex justify-space-between align-center">
          <p
            v-for="item in topNavInfo.keyWords"
            :key="item.text"
            :style="{ 'background': item.background, 'color': item.color }"
          >{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="top-nav-bar-warpper">
      <div class="top-nav-bar d-flex">
        <p
          v-for="item in topNavBar"
          :key="item"
          class="top-nav-bar-item"
        >{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import topNavMixin from './mixins/topNavMixin.js'
export default {
  mixins: [topNavMixin],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
.top-nav
  .top-nav-poster-warpper
    background-color #BBDEFB
    height 120px
    .top-nav-poster
      width 990px
      height 120px
      margin 0 auto
      font-family 'KaiTi'
      font-weight 900
      .top-nav-left-info
        color #004D40
        text-align center
        .top-nav-left-info-title
          font-size 40px
        .top-nav-left-info-comment
          font-size 20px
      .top-nav-right-keyword p
        width 200px
        height 80px
        line-height 80px
        font-size 30px
        text-align center
        border-radius 5px
        background #3F51B5
        color #fff
        margin-left 10px
  .top-nav-bar-warpper
    background-color #5C6BC0
    border 1px solid #5C6BC0
    height 32px
    .top-nav-bar
      width 990px
      height 30px
      margin 0 auto
      .top-nav-bar-item
        height 30px
        font-size 16px
        font-weight 900
        line-height 30px
        cursor pointer
        padding 0 20px
        color #fff
        &:hover
          background #3F51B5
</style>
