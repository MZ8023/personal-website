export default {
  data() {
    return {
      logoSrc: require('@/assets/logo.png'),
      name: '张兴华',
      ename: 'MarsXH.Chang',
      headerInfo: [
        { title: '经 验', score: '4.8' },
        { title: '协 作', score: '5.0' },
        { title: '自 学', score: '4.8' }
      ],
      headerInfoDetail: [
        { title: '经验', text: '3年前端开发经验，开发过微信公众号、中小型管理系统、H5-APP等多种项目，大多独立开发前端，参与过后端开发、产品设计、项目的部署维护；' },
        { title: '协作', text: '团队协作能力，带领过新人，做过技术分享；' },
        { title: '自学', text: '自我学习能力，除前端技能外，还自学了Docker、Gitlab-CI、MongoDB等；' },
        { title: '其他', text: '自己开发过一些小项目，包括简单的全栈项目；有自己的服务器。有技术博客(21万+访问量)' }
      ],
      isShowQrCode: true,
      qrCodeSrc: require('@/assets/logo.png')
    }
  }
}