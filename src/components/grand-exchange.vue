<script>
  export default {
    data() {
      return {
        itemList: null,
      }
    },

    methods: {
      //GET request till 'https://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=24&alpha=e&page=Z'
      //category=24 är vilken kategori som anropas
      //alpha=e är vilken bokstav som alla items ska börja på
      //page=Z är vilken sida som ska visas. 12 items/sida
      //svaret är ett objekt med en lista
      fetchItemList(){
        fetch('https://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=24&alpha=e&page=Z')
        .then((response) => response.json())
        .then((itemList) => {
          this.itemList = itemList.items
        })
      }
    }
  }
</script>

<template>
  <!-- Skapar en knapp som kör fetchItemList när den blir klickad-->
  <input type="button" value="Search" v-on:click="fetchItemList">

  <!-- Om itemList är tom så visas ett p-element med ett meddelande-->
  <!-- Annars visas en ol med 12 items, där en ikon, namnet på den, och en description visas -->
  <ol v-if="itemList !== null">
    <li id="array-li" v-for="item in itemList"><img :src="item.icon">{{ item.name }} | {{item.description}}</li>
  </ol>
  <p v-else> Klicka på knappen för hämta alla hög-level närstridsvapen som börjar på E!</p>

</template>

<style lang="scss" scoped>
  #array-li {
    background-color: #13202D;
    color: #ffffff;
  }

  p {
    color: white;
  }
</style>
