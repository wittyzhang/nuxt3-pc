<!--
 * @Author: zhangxiaorong zhangxiaorong@mia.com
 * @Date: 2023-04-13 15:23:52
 * @LastEditors: zhangxiaorong zhangxiaorong@mia.com
 * @LastEditTime: 2023-04-13 16:27:51
 * @FilePath: /nuxt3-pc/pages/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="">
    {{ time }}
  </div>
</template>

<script setup>
import {ref} from 'vue'


const time = ref(getTime())
</script>

<style scoped></style>
