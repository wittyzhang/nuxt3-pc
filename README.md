# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

- .nuxt               // 自动生成的目录，用于展示结果
- node_modules        // 项目依赖包存放目录
- .gitignore          // Git的配置目录，比如一些文件不用Git管理就可以在这个文件中配置
- app.vue             // 项目入口文件，你可以在这里配置路由的出口
- nuxt.config.ts      // nuxt项目的配置文件 ，这个里边可以配置Nuxt项目的方法面面
- package-lock.json   // 锁定安装时包的版本，以保证其他人在 npm install时和你保持一致
- package.json        // 包的配置文件和项目的启动调式命令配置
- README.md           // 项目的说明文件
- tsconfig.json       // TypeScript的配置文件
- 
- pages               // 开发的页面目录
- assets              // 静态资源
  -- styles           // 样式文件
- components          // 组件目录 （Nuxt3的所有自定义组件，必须写在`components`目录下，写在这个目录下他会自动加载到页面中，而不用我们自己不断的重复引入到每个页面中。）
- composables         // 业务逻辑组件目录 （在开发中我们经常会有一些通用的业务逻辑代码，需要模块化管理，这时候就可以试用Composable 这个文件夹来编写。比如我们常用的显示当前时间，这种常用的通用代码，就可以编写成一个单独的代码段，然后在每个页面进行使用。）
- layouts             // 项目布局目录

===============请求==================
Nuxt3中提供了四种方法：useAsyncData 、useFetch 、useLazyFetch 、useLazyAsyncData 。提供的四个方法，都是获取后台数据的，但是使用场景和使用方法有所不同。
<template>
  <div class=""></div>
</template>

<script setup>
import {} from "vue";

const res = await useAsyncData("getList", () =>
  $fetch("http://121.36.81.61:8000/getTenArticleList")
);
console.log(res);
</script>

<style scoped></style>
useAsycData 文档： https://v3.nuxtjs.org/api/composables/use-async-data
$fetch( )方法是nuxt3提供的内置方法，我们直接可以使用。