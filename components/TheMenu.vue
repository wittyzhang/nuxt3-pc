<!--
 * @Author: zhangxiaorong zhangxiaorong@mia.com
 * @Date: 2023-04-13 16:35:17
 * @LastEditors: zhangxiaorong zhangxiaorong@mia.com
 * @LastEditTime: 2023-04-13 16:36:58
 * @FilePath: /nuxt3-pc/components/TheMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <ul class='menu-box'>
      <li><NuxtLink to="/home" class="active">Home</NuxtLink></li>
      <li><NuxtLink to="/aboutUs">Products</NuxtLink></li>
      <li><NuxtLink to="/aboutUs">Reviews</NuxtLink></li>
      <li><NuxtLink to="/aboutUs">About Us</NuxtLink></li>
    </ul>
</template>

<script setup>
import {} from 'vue'
</script>

<style scoped lang="scss">
.menu-box{
  display: flex;
  gap: 1rem;
  align-self: center;
  li{
    list-style: none;
    float:left;
    cursor: pointer;
    a{
      text-decoration: none;
      color: $logoTextColor;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: block;
      padding: 7px 25px;
      border-radius: 25px;
      line-height: 1.2;
      font-weight: bold;
      &:hover{
        background: $menuActiveBgColor;
        color: $menuTextColor;
      }
      &.active{
        background: $menuActiveBgColor;
        color: $menuTextColor;
      }
    }
  }
}
</style>