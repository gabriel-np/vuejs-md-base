<template lang="html">
  <div class="multilanguage">
    <md-content class="md-elevation-4">
      <h1>Multilanguage Example</h1>
      <h2 v-text="$ml.with('VueJS').get('msg')" />
      <p v-text="$ml.get('Phrase')" />
      <md-button v-for="lang in $ml.list"
      :key="lang" @click="$ml.change(lang)" class="md-raised">
        {{lang}}
      </md-button>
    </md-content>
  </div>
</template>

<script>
import { MLBuilder } from 'vue-multilanguage'
export default {
  name: 'multilanguage',
  data: () => ({
    friends: 8
  }),
  computed: {
    mlPhrase () {
      return new MLBuilder('phrase').with('f', this.friends).with('l', 42)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
