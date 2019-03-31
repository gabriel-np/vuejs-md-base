<template>
  <div class="basic">
    <h1>Here is the Basic component</h1>
    <p>Learn more about <a target="_blank" href="https://vuematerial.io/">Vue Material (vuematerial.io)</a></p>
    <Multilanguage />
  </div>
</template>

<script>
  import Multilanguage from '@/components/Multilanguage.vue'

  export default {
    name: 'Basic',
    components: {
      Multilanguage
    },
    props: {},
    data: () => ({
    }),
    computed: {}
  }
</script>

<style lang="scss" scoped>
</style>
