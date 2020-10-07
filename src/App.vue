<template @touchmove.prevent>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
}
html,body,#app{
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
}
</style>
