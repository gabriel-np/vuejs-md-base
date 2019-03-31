<template>
  <div id="app">
    <md-toolbar id="nav" class="md-primary">
      <span class="md-title">
        <router-link to="/">Home</router-link> |
      </span>
      <span class="md-title">
        <router-link to="/about">About</router-link>
      </span>
    </md-toolbar>

    <md-content>
      <router-view/>
    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  @import '@/components/scss/index.scss';
</style>
