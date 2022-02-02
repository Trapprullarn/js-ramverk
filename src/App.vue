<script>
  //importera komponenter
  import Home from './components/home.vue'
  import Hiscores from './components/hiscores.vue'
  import GrandExchange from './components/grand-exchange.vue'

  export default {
    components: {
      Home,
      Hiscores,
      GrandExchange,
    }
  }
</script>

<template>
<!-- basic html för en navbar-->
  <nav>
    <ul>
      <li class="nav-li">
        <router-link to="/">Till startsidan!</router-link>
      </li>
      <li class="nav-li">
        <router-link to="/hiscores">Till Hiscores!</router-link>
      </li>
      <li class="nav-li">
        <router-link to="/grandexchange">Till Grand Exchange!</router-link>
      </li>
    </ul>
  </nav>
  <!-- router-view för vue-router-->
  <router-view />
</template>

<style lang="scss">
  $bgc: #050C12;
  body {
    background-color: $bgc;
    padding-left: 50px;
  }

  h2 {
    color: white;
  }

  .nav-li {
    display: inline;
    padding: 8px;
    background-color: #242D34;
    color: white;
  }

  .nav-li:hover {
    background-color: $bgc;
  }

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    height: 25px;
  }
</style>
