<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,400i,500,500i,600,600i,700,700i,800,900&display=swap');
  @import "@/css/reset.scss";
  @import "@/css/global.scss";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
