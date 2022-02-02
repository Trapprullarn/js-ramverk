<script>
  //importera komponent
  import Prop from './prop.vue'

  export default {
    components: {
      Prop
    }
  }

</script>

<template>
  <!-- Enkel startsida-->
  <h1>RuneScape Information</h1>
  <prop startpagemessage="Den här PWA:n är skapad för ett skolprojekt"></prop>
</template>

<style>
  h1 {
    color: white;
  }

  p {
    color: white;
  }
</style>
