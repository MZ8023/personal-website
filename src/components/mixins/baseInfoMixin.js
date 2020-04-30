export default {
  data() {
    return {
      baseInfo: {
        imgSrc: require('@/assets/img/photo1.jpg'),
        imgList: [
          require('@/assets/img/photo1.jpg'),
          require('@/assets/img/photo2.jpg'),
          require('@/assets/img/photo3.jpg'),
          require('@/assets/img/photo4.jpg'),
          require('@/assets/img/photo5.jpg')
        ],
        title: '前端开发工程师-3年-张兴华-MarsXH.Chang-本科',
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