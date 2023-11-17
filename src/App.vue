<template>
  <div id="app">
    <main-page />

    <span style="
      bottom: 12px;
      font-size: 12px;
      color: #999;
      margin-top: 10px;
    ">
      <a href="https://weibo.com/6571509464" target="_blank">@苍旻白轮</a>
      <a href="https://ngabbs.com/read.php?tid=38418345&rand=41" target="_blank">算法来自[数据讨论]基于matlab的梦幻岛清空商店体力最佳优化</a>
      <a href="https://ngabbs.com/nuke.php?func=ucp&uid=62459644" target="_blank">感谢NGA@Repo_Kristx的算法</a>
      <a href="https://forum.gamer.com.tw/C.php?bsn=38898&snA=1848" target="_blank">感谢巴哈姆特@hikariawa20的加成图</a>
    </span>
  </div>
</template>

<script>
import MainPage from "./views/MainPage";

export default {
  name: "App",
  components: {
    MainPage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #7b8692 !important;
  text-decoration: none !important;
  margin-left: 16px !important;
}

a:first-child {
  margin-left: 0 !important;
}
</style>
