<template>
  <div class="header-bar d-flex justify-space-between align-center">
    <div class="d-flex">
      <img alt="logo" class="header-logo" :src="logoSrc">
      <div class="d-flex header-info-box">
        <el-popover
          v-model="isShowInfoPopover"
          popper-class="header-info-popover"
          placement="bottom"
          width="255"
          trigger="hover">
          <div slot="reference" class="d-flex">
            <p class="header-name">{{ name }}<br />{{ ename }}</p>
            <div class="header-info d-flex align-center">
              <div v-for="item in headerInfo" :key="item.title" class="header-info-item">
                <div class="header-info-title">{{ item.title }}</div>
                <p class="header-info-score">{{ item.score }}<i class="el-icon-top font-weight-black header-info-score-icon"></i></p>
              </div>
              <p class="header-info-more ml-2">
                <i v-if="isShowInfoPopover" class="el-icon-caret-top header-info-score-icon"></i>
                <i v-else class="el-icon-caret-bottom header-info-score-icon"></i>
              </p>
            </div>
          </div>
          <div>
            <div v-for="item in headerInfoDetail" :key="item.title" class="header-info-popover-item">
              <p class="header-info-popover-item-label"><i class="el-icon-star-on header-info-score-icon"></i>{{ item.title }}：</p>
              <p class="header-info-popover-item-text">{{ item.text }}</p>
            </div>
          </div>
        </el-popover>
        <el-popover
          v-if="isShowQrCode"
          v-model="isShowQrCodePopover"
          popper-class="header-qrcode-popover"
          placement="bottom-start"
          width="160"
          trigger="hover">
          <div slot="reference" class="header-qrcode">
            <div class="header-qrcode-title">订阅号</div>
            <p class="header-qrcode-icons">
              <img alt="QR Code" class="header-qrcode-small-img" :src="qrCodeSrc">
              <i v-if="isShowQrCodePopover" class="el-icon-caret-top header-qrcode-icon"></i>
              <i v-else class="el-icon-caret-bottom header-qrcode-icon"></i>
            </p>
          </div>
          <div>
            <img alt="QR Code" class="header-qrcode-popover-img" :src="qrCodeSrc">
            <p class="header-qrcode-popover-text">扫一扫，关注订阅号</p>
          </div>
        </el-popover>
      </div>
    </div>
    <div class="d-flex">
      <div class="red-input-warpper">
        <el-input placeholder="搜索 某猫 xx/xx/xx" class="red-input" clearable size="small">
          <template slot="append">
            <button class="red-input-btn">搜某猫</button>
          </template>
        </el-input>
      </div>
      <button class="right-search-btn ml-2">搜本页</button>
    </div>
  </div>
</template>

<script>
import headerBarMixin from './mixins/headerBarMixin.js'
export default {
  mixins: [headerBarMixin],
  data () {
    return {
      isShowInfoPopover: false,
      isShowQrCodePopover: false
    }
  }
}
</script>

<style scoped lang="stylus">
.header-bar
  border-bottom 1px solid #c8baaa
  width 1190px
  margin 0 auto
  height 85px
  .header-logo
    width 162px
    height 60px
  .header-info-box
    padding 15px 0 0
    .header-name
      height 38px
      width auto
      color #999
      font-size 12px
      font-weight 400
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
          color #ff0036
          width 32px
          padding-left 7px
          height 18px
          .header-info-score-icon
            width 8px
      .header-info-more
        cursor pointer
        color #ccc
    .header-qrcode
      height 38px
      font-weight 400
      padding 0 10px
      border-left 1px dotted #f0f0f0
      .header-qrcode-title
        text-align center
        color #999
        font-weight 400
      .header-qrcode-small-img
        width 24px
        height 24px
      .header-qrcode-icon
        color #ccc
        vertical-align super
        cursor pointer
  .red-input-warpper
    background #ff0036
    .red-input
      border 2px solid #ff0036
      >>> input.el-input__inner
        border-radius 0
        padding 5px 3px 5px 5px
        width 367px!important
        &::-webkit-input-placeholder
          color: #666
          font-size: 14px
        &:focus
          &::-webkit-input-placeholder
            color: #B0BEC5
            font-size: 14px
      >>> .el-input-group__append
        background #ff0036
        border 0
        .red-input-btn
          border 0
          font-size 16px
          font-family '\5FAE\8F6F\96C5\9ED1',arial,"\5b8b\4f53"
          background #ff0036
          color #fff
  .right-search-btn
    border 0
    width 80px
    font-size 16px
    font-family '\5FAE\8F6F\96C5\9ED1',arial,"\5b8b\4f53"
    background #333
    color #fff
</style>

<style lang="stylus">
.header-info-popover.el-popover
  padding 10px
  .header-info-popover-item
    margin-bottom 5px
    font-weight 400
    display flex
    .header-info-popover-item-label
      width 60px
      min-width 60px
      color red
    .header-info-popover-item-text
      color #9E958C
      font-size 12px
.header-qrcode-popover.el-popover
  padding 0
  .header-qrcode-popover-img
    width 140px
    height 140px
    margin 10px 10px 0
  .header-qrcode-popover-text
    width 160px
    text-align center
    color #9E958C
    margin-bottom 10px
</style>
