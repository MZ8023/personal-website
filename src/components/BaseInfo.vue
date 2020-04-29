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
              <p class="base-info-content-old-price-label">价格</p>
              <p class="base-info-content-old-price-text">¥ {{ baseInfo.oldPrice }}</p>
            </div>
            <div class="base-info-content-new-price d-flex">
              <p class="base-info-content-new-price-label">活动价</p>
              <p class="base-info-content-new-price-text">
                ¥ {{ baseInfo.newPrice }}
                <span v-if="baseInfo.newPriceComment" class="base-info-content-new-price-comment">{{ baseInfo.newPriceComment }}</span>
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <span>运费</span>
              <span>{{ baseInfo.nowAdress }} 至 你那里</span>
              <span>快递：0.00</span>
            </div>
            <div>
              <span>原产地：</span>
              <span>{{ baseInfo.baseAdress }}</span>
            </div>
          </div>
          <div>
            <span>功能</span>
            <span
              v-for="(skill, skillIndex) in baseInfo.skills"
              :key="'skill' + skillIndex"
            >{{ skill }}</span>
          </div>
          <div class="d-flex">
            <span>数量</span>
            <el-input-number value="1" controls-position="right" :min="1" :max="1"></el-input-number>
            <span> 件</span>
            <span>库存仅剩 {{ baseInfo.stock }} 件，欲购从速！！！</span>
          </div>
          <div class="d-flex">
            <button>立即购买</button>
            <button>加入购物车</button>
          </div>
          <div class="d-flex">
            <span>服务承诺</span>
            <span
              v-for="(serviceTag, serviceTagIndex) in baseInfo.serviceTags"
              :key="'serviceTag' + serviceTagIndex"
            >{{ serviceTag }}</span>
          </div>
        </div>
      </div>
      <div>
        <div>购买历史</div>
        <div
          v-for="(work, workIndex) in baseInfo.workHistory"
          :key="'work' + workIndex"
          class="red-input-warpper"
        >
          <p>{{ work.company }}</p>
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
      baseInfo: {
        imgSrc: require('@/assets/logo.png'),
        imgList: [
          require('@/assets/logo.png'),
          require('@/assets/logo.png'),
          require('@/assets/logo.png'),
          require('@/assets/logo.png'),
          require('@/assets/logo.png')
        ],
        title: '前端开发工程师-张兴华-MarsXH.Chang',
        priceTitle: '此商品活动中，请尽快购买！',
        oldPrice: '99999.00',
        newPrice: '????0.00',
        newPriceComment: '就是你想的那个价格！！！',
        nowAdress: '上海',
        baseAdress: '黑龙江',
        skills: ['Vue', 'Node', 'MongoDB', 'Docker', 'Echarts', '装不下了...'],
        stock: '1',
        serviceTags: ['正品保证', '极速送货', '永久免费咨询服务'],
        workHistory: [
          {
            company: '上海英业达科技有限公司',
            time: '2019.04 ~ 2020.05',
            position: '前端开发'
          },
          {
            company: '上海汉得信息技术股份有限公司',
            time: '2017.11 ~ 2019.02',
            position: '前端开发'
          }
        ]
      }
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
          border 1px solid rgba(0,0,0,.05)
          .base-info-img-item-img
            width 100%
            height 100%
</style>
