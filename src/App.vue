<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><a href="/">Banana</a></el-menu-item>
      <el-menu-item index="2" ><a href="/pose">Pose</a></el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
