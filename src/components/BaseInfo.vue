<template>
  <div class="base-info-warpper d-flex justify-space-between align-center">
    <div class="base-info d-flex justify-space-between">
      <div class="d-flex">
        <div class="base-info-img-warpper">
          <img alt="logo" class="base-info-view-img" :src="baseInfo.imgSrc">
          <ul class="base-info-img-ul d-flex justify-space-around align-center">
            <li
              v-for="(img, imgIndex) in baseInfo.imgList"
              :key="'img' + imgIndex"
              class="base-info-img-item"
              @click="changeImg(imgIndex)"
            >
              <img alt="logo" class="base-info-img-item-img" :src="img">
            </li>
          </ul>
        </div>
        <div class="base-info-content">
          <h1 class="base-info-content-title">{{ baseInfo.title }}</h1>
          <div class="base-info-content-price">
            <p class="base-info-content-price-title">{{ baseInfo.priceTitle }}</p>
            <div class="base-info-content-old-price d-flex">
              <p class="base-info-content-label">价格</p>
              <p class="base-info-content-old-price-text">
                <span style="font-family: arial;">¥ </span>
                <span style="text-decoration: line-through;font-size: 14px;">{{ baseInfo.oldPrice }}</span>
              </p>
            </div>
            <div class="base-info-content-new-price d-flex">
              <p class="base-info-content-label">活动价</p>
              <p class="base-info-content-new-price-text">
                <span style="font-family: arial;font-size: 18px;">¥</span> {{ baseInfo.newPrice }}
                <span class="base-info-content-new-price-triangle"></span>
                <span v-if="baseInfo.newPriceComment" class="base-info-content-new-price-comment">{{ baseInfo.newPriceComment }}</span>
              </p>
            </div>
          </div>
          <div class="base-info-content-freight d-flex justify-space-between">
            <div>
              <span class="base-info-content-label">运费</span>
              <span class="base-info-content-freight-text mr-3">{{ baseInfo.nowAdress }}&nbsp;&nbsp;至&nbsp;&nbsp;你那里</span>
              <span class="base-info-content-freight-text">快递：0.00</span>
            </div>
            <div>
              <span class="base-info-content-label">原产地：</span>
              <span class="base-info-content-freight-text">{{ baseInfo.baseAdress }}</span>
            </div>
          </div>
          <div>
            <span class="base-info-content-label">功能</span>
            <span
              v-for="(skill, skillIndex) in baseInfo.skills"
              :key="'skill' + skillIndex"
              class="base-info-content-function-tag"
            >{{ skill }}</span>
          </div>
          <div class="base-info-content-count d-flex align-center">
            <span class="base-info-content-label">数量</span>
            <el-input-number value="1" controls-position="right" size="mini" class="base-info-content-count-input" :min="1" :max="1"></el-input-number>
            <span class="mx-2">件</span>
            <span class="base-info-content-count-triangle"></span>
            <span class="base-info-content-count-comment">库存仅剩 {{ baseInfo.stock }} 件，欲购从速！！！</span>
          </div>
          <div class="base-info-submit d-flex">
            <button class="base-info-submit-buy" @click="buyNow">立即购买</button>
            <button class="base-info-submit-add" @click="buyNow">
              <i class="el-icon-shopping-cart-full"></i>
              加入购物车
            </button>
          </div>
          <div class="base-info-content-service d-flex">
            <span class="base-info-content-label">服务承诺</span>
            <span
              v-for="(serviceTag, serviceTagIndex) in baseInfo.serviceTags"
              :key="'serviceTag' + serviceTagIndex"
              class="base-info-content-service-item"
            >{{ serviceTag }}</span>
          </div>
        </div>
      </div>
      <div class="base-info-history">
        <div class="base-info-history-title">
          <span class="base-info-history-title-line"></span>
          <span class="base-info-history-title-text">购买历史</span>
          <span class="base-info-history-title-line"></span>
        </div>
        <div
          v-for="(work, workIndex) in baseInfo.workHistory"
          :key="'work' + workIndex"
          class="base-info-history-item"
        >
          <p style="font-size: 16px;">{{ work.company }}</p>
          <p>{{ work.time }}</p>
          <p>{{ work.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseInfoMixin from './mixins/baseInfoMixin.js'
export default {
  mixins: [baseInfoMixin],
  data () {
    return {
    }
  },
  methods: {
    changeImg (index) {
      this.$set(this.baseInfo, 'imgSrc', this.baseInfo.imgList[index])
    },
    buyNow () {
      document.documentElement.scrollTop = document.querySelector('.detail-contact-title').offsetTop
    }
  }
}
</script>

<style scoped lang="stylus">
.base-info-warpper
  .base-info
    width 1190px
    margin 20px auto
    .base-info-img-warpper
      margin 0 20px
      .base-info-view-img
        width 418px
        height 418px
        margin 20px auto 0
        border 1px solid rgba(0,0,0,.05)
      .base-info-img-ul
        margin-top 22px
        .base-info-img-item
          display inline-block
          width 60px
          height 60px
          border 2px solid rgba(0,0,0,.05)
          cursor pointer
          &:hover
            border 2px solid #000
          .base-info-img-item-img
            width 100%
            height 100%
    .base-info-content
      width 530px
      padding-right 20px
      border-right 1px solid #f2f2f2
      .base-info-content-label
        display inline-block
        width 70px
        margin-left 8px
        color #999
        font-size 12px
      .base-info-content-title
        padding 20px 10px 12px
        line-height 1
        font-size 16px
        font-weight 700
        color #000
      .base-info-content-price
        .base-info-content-price-title
          height 30px
          line-height 30px
          background #FF1744
          font-size 14px
          color #fff
          padding-left 20px
        .base-info-content-old-price
          background #FCE4EC
          padding 10px 0 5px 0
          color #333
          align-items center
        .base-info-content-new-price
          background #FCE4EC
          padding 5px 0 10px 0
          color #FF0036
          align-items center
          .base-info-content-new-price-text
            font-size 30px
            font-family Arial
          .base-info-content-new-price-triangle
            position relative
            left 0
            bottom 0
            width 0
            display inline-block
            font-size 0
            height 0
            border 3px solid #f47a86
            border-color transparent #f47a86 #f47a86 transparent
          .base-info-content-new-price-comment
            display inline-block
            background #f47a86
            border-radius 1px
            font-size 12px
            color #fff
            padding 0 5px
      .base-info-content-freight
        height 37px
        align-items center
        border-bottom 1px dotted #c9c9c9
        .base-info-content-freight-text
          color #333
          line-height 24px
          margin 9px 0
      .base-info-content-function-tag
        display inline-block
        height 32px
        line-height 28px
        margin 10px 10px 10px 0
        cursor pointer
        padding 0 9px
        border 2px solid #FF0036
      .base-info-content-count
        margin 5px 0 10px 0
        .base-info-content-count-input
          width 65px
          >>> .el-input__inner
            padding 0
            width 32px
        .base-info-content-count-triangle
          position relative
          left 0
          bottom 0
          width 0
          display inline-block
          font-size 0
          height 0
          border 3px solid #f47a86
          border-color transparent #f47a86 #f47a86 transparent
        .base-info-content-count-comment
          display inline-block
          background #f47a86
          border-radius 1px
          font-size 12px
          color #fff
          padding 0 5px
      .base-info-submit
        margin 40px 0
        display flex
        justify-content center
        .base-info-submit-buy,
        .base-info-submit-add
          width 180px
          height 40px
          margin 0 5px
          color #FF0036
          font-size 16px
          border 1px solid #FF0036
          font-family 'Microsoft Yahei'
        .base-info-submit-add
          color #fff
          background #ff0036
          i
            vertical-align text-bottom
      .base-info-content-service
        .base-info-content-service-item
          color #666
          margin 0 15px 5px 0
          cursor pointer
    .base-info-history
      .base-info-history-title
        .base-info-history-title-line
          display inline-block
          width 34px
          height 0
          border-top 1px #c9c9c9 dotted
        .base-info-history-title-text
          display inline-block
          width 72px
          text-align center
      .base-info-history-item
        display flex
        flex-direction column
        justify-content space-between
        width 140px
        height 140px
        margin 10px 0
        border 1px #c9c9c9 dotted
        border-radius 5px
        padding 5px
        background-color #F06292
        color #fff
        font-size 12px
        font-weight 600
</style>
