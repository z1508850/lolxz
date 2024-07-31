---
layoutClass: m-nav-layout
outline: [2, 3, 4]
comment: false
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"> </style>

# 下载导航 
::: tip
当前游戏版本: **14.15**
更新时间: **2024年8月1日**
预计下版本更新时间: **2024年8月15日**

未找到新FF或地址失效反馈邮箱 [xzwplol@outlook.com](mailto:xzwplol@outlook.com)
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>





