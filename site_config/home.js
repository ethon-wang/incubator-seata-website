export default {
  'zh-cn': {
    brand: {
      brandName: 'Fescar',
      briefIntroduction: 'Fescar是阿里巴巴开源的分布式事务中间件，以高效并且对业务0侵入的方式，解决微服务场景下面临的分布式事务问题',
      buttons: [
        {
          text: '快速入门',
          link: '/zh-cn/docs/quickstart.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/alibaba/fescar',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '什么是 Fescar？',
      desc: 'Fescar是由阿里巴巴开源的基于Java的高性能、高吞吐量的分布式消息和流计算平台，于2016年捐赠给Apache Software Foundation，2017年9月25日成为Apache 顶级项目。前身是阿里巴巴2011年诞生的数据消息引擎 — MetaQ，并且于2012年对外开源为Fescar 3.0。低延时、高可靠、弹性扩缩等特性，使得Apache Fescar在分布式计算领域受到企业和个人用户青睐。',
      img: 'https://img.alicdn.com/tfs/TB1rDpkJAvoK1RjSZPfXXXPKFXa-794-478.png',
    },
    features: {
      title: '特色功能',
      list: [
        {
          icon: 'feature-1',
          title: '弹性扩缩',
          content: 'Brokers, producers, consumers, name servers都采用了特殊的部署和处理方式，具备很强的横向扩展能力。',
        },
        {
          icon: 'feature-2',
          title: '分布式事务',
          content: 'TBD',
        },
        {
          icon: 'feature-3',
          title: '快速存储和持久化',
          content: 'TBD',
        },
        {
          icon: 'feature-4',
          title: '消息过滤',
          content: 'TBD',
        },
        {
          icon: 'feature-5',
          title: '回溯消费',
          content: 'TBD',
        },
        {
          icon: 'feature-6',
          title: '定时消息',
          content: 'TBD',
        },
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Fescar',
      briefIntroduction: 'Fescar is a distributed transaction solution with high performance and ease of use for microservices architecture',
      buttons: [
        {
          text: 'Get Started',
          link: '/en-us/docs/quickstart.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/alibaba/fescar',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'What is Fescar?',
      desc: 'Fescar is a distributed messaging and streaming computing platform with high performance and high throughput. It is an open source project from Alibaba, which has been donated to the Apache Software Foundation in 2016. On September 25, 2017, it became an Apache top-level project. Its predecessor was MetaQ, a data messaging engine created by Alibaba in 2011. And it was created as an open source project known as Fescar 3.0 in 2012. Low latency, high reliability, and scalability make Apache Fescar popular among enterprises and individuals in the distributed computing field.',
      img: 'https://img.alicdn.com/tfs/TB1rDpkJAvoK1RjSZPfXXXPKFXa-794-478.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          icon: 'feature-1',
          title: 'Scalability',
          content: 'Brokers, producers, consumers, and name servers adopt special deployment and processing methods that bring strong scale-out ability. ',
        },
        {
          icon: 'feature-2',
          title: 'Distributed transaction',
          content: 'Fescar implements a function similar to distributed transaction processing of X/Open XA, which allows multiple resources to be accessed within the same transaction.',
        },
        {
          icon: 'feature-3',
          title: 'Cache and Cache Maintenance',
          content: 'Fescar makes the best use of system memory cache to maintain data to the file system through flushing either synchronously or asynchronously.',
        },
        {
          icon: 'feature-4',
          title: 'Message filtering',
          content: 'Apache Fescar supports flexible syntax expressions to filter messages, which reduces transmission of useless messages to consumers.',
        },
        {
          icon: 'feature-5',
          title: 'Consumer offset',
          content: 'Based on the message storage model of Apache Fescar, consumer offset can be reset by the time, accurate to a millisecond. Messages can be re-consumed from the earliest offset and the latest offset.',
        },
        {
          icon: 'feature-6',
          title: 'Timed messaging',
          content: 'Apache Fescar supports timed messaging, but the time precision has specific levels. ',
        },
      ]
    },
  },
};
