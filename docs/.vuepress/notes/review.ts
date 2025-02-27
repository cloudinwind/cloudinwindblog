import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'review',
  link: '/review/',
  sidebar:[
    {
      text: '八股文复习',
      collapsed: true,
      items: [
        '八股文复习/计算机操作系统',
        '八股文复习/计算机网络',
        '八股文复习/金典题'
      ]
    },
    {
      text: '算法刷题',
      collapsed: true,
      items: [
        '算法刷题/1.数组.md',
        '算法刷题/2.链表.md',
        '算法刷题/3.哈希表.md',
        '算法刷题/4.字符串.md',
        '算法刷题/5.双指针法.md',
        '算法刷题/6.栈和队列.md',
        '算法刷题/7.二叉树.md',
        '算法刷题/8.动态规划.md',
      ]
    },
    {
    text: '面试经验',
    collapsed: true,
        items: [
        '面试经验/360.md',
        '面试经验/58同城.md',
        '面试经验/OPPO.md',
        '面试经验/Shopee 虾皮',
        '面试经验/TCL.md',
        '面试经验/Vivo.md',
        '面试经验/中兴.md',
        '面试经验/中国网安.md',
        '面试经验/华为.md',
        '面试经验/小米.md',
        '面试经验/小红书.md',
        '面试经验/帆软.md',
        '面试经验/招商银行.md',
        '面试经验/拼多多.md',
        '面试经验/携程集团.md',
        '面试经验/海信.md',
        '面试经验/海光信息.md',
        '面试经验/海康威视.md',
        '面试经验/深信服.md',
        '面试经验/百度.md',
        '面试经验/科大讯飞.md',
        '面试经验/美团.md',
        '面试经验/联想.md',
        '面试经验/荣耀.md',
        '面试经验/面试总结.md',
        '面试经验/顺风科技'
        ]
      }
  ],
})