<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="base-layout">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const author = "Ulug'bek Mo'minjonov"
    return {
      author
    }
  }
})
</script>
<style lang="scss" scoped>
  .base-layout {
    background-color: #739aff;
  }

</style>
