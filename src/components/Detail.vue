<template>
  <div class="detail">
    <p class="detail-detail-title detail-title">商品详情</p>
    <div class="detail-content">
      <p
        v-for="(item, itemIndex) in detail.detail"
        :key="'detail' + itemIndex"
        class="detail-content-item"
      >
        <span class="detail-content-label">{{ item.label }}：</span>
        <span v-html="item.value">{{ item.value }}</span>
      </p>
    </div>
    <p class="detail-ability-title detail-title">计算机能力</p>
    <div class="detail-content">
      <p
        v-for="(item, itemIndex) in detail.ability"
        :key="'ability' + itemIndex"
        class="detail-content-item"
      >
        <i class="el-icon-star-on detail-star"></i>
        <span>{{ item }}</span>
      </p>
    </div>
    <p class="detail-evaluate-title detail-title">自我评价</p>
    <div class="detail-content">
      <p
        v-for="(item, itemIndex) in detail.evaluate"
        :key="'evaluate' + itemIndex"
        class="detail-content-item"
      >
        <i class="el-icon-star-on detail-star"></i>
        <span>{{ item }}</span>
      </p>
    </div>
    <p class="detail-project-title detail-title">项目经历</p>
    <div class="detail-content">
      <div
        v-for="(item, itemIndex) in detail.project"
        :key="'project' + itemIndex"
        class="detail-project-item"
      >
        <p class="d-flex mb-2"><span class="detail-content-label">项目名称：</span>{{ item.projectName }}</p>
        <p class="d-flex mb-2"><span class="detail-content-label">项目时间：</span>{{ item.projectTime }}</p>
        <p class="d-flex mb-2"><span class="detail-content-label">项目环境：</span><span v-html="item.projectEnvironment"></span></p>
        <p class="d-flex mb-2"><span class="detail-content-label">项目描述：</span><span v-html="item.projectDetail"></span></p>
        <el-divider v-if="itemIndex < detail.project.length - 1"></el-divider>
      </div>
    </div>
    <p class="detail-contact-title detail-title">联系方式</p>
    <div class="detail-content">
      <p
        v-for="(item, itemIndex) in detail.contact"
        :key="'contact' + itemIndex"
        class="detail-content-item"
      >
        <span class="detail-content-label">{{ item.label }}：</span>
        <span>{{ item.value }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import detailMixin from './mixins/detailMixin.js'
export default {
  mixins: [detailMixin],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
.detail
  width 1190px
  margin 20px auto
  padding-right 200px
  .detail-title
    height 47px
    line-height 47px
    border 1px solid #dfdfdf
    font-size 20px
    color: #FF0036
    font-weight: 700
    padding: 0 20px
  .detail-content
    border 1px solid #dfdfdf
    background #E0F7FA
    padding: 20px
    margin-bottom 20px
    .detail-content-item
      display flex
      font-size 16px
      line-height 22px
      margin-bottom 10px
      font-weight 500
      .detail-star
        color red
        font-size 20px
        margin-right 5px
    .detail-project-item
      font-size 16px
    .detail-content-label
      display block
      width 100px
      min-width 100px
      height 100%
      font-weight 700
      line-height 22px
      color #999
      font-size 16px
</style>
