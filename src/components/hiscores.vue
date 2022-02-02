<script>
  export default {
    //GET request till 'https://secure.runescape.com/m=hiscore/ranking.json?table=0&category=0&size=10'
    //table=0 visar Overall level
    //size=10 visar top 10. Size kan gå upp till 50
    //svaret är en array med värdena "name", "score", "rank"
    created() {
      fetch('https://secure.runescape.com/m=hiscore/ranking.json?table=0&category=0&size=10')
        .then((response) => response.json())
        .then((players) => {
          this.players = players
        })
    },
    data() {
      return {
        //skillSelected ändras med ett <select> element
        skillSelected: 0,

        //Options är en lista med ett nummer för varje skill som finns.
        options: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28
        ],

        players: null,

        //skillIcon är en lista som följer alla options och skills i ordning
        //till exempel så är 1=attack, 9=woodcutting
        skillIcon: ['https://runescape.wiki/images/Melee-icon.png?65246',
        'https://runescape.wiki/images/Attack-icon.png?41578',
        'https://runescape.wiki/images/Defence-icon.png?94c29',
        'https://runescape.wiki/images/Strength-icon.png?e67dd',
        'https://runescape.wiki/images/Constitution-icon.png?0d583',
        'https://runescape.wiki/images/Ranged-icon.png?4d319',
        'https://runescape.wiki/images/Prayer-icon.png?0e5f2',
        'https://runescape.wiki/images/Magic-icon.png?5d9e2',
        'https://runescape.wiki/images/Cooking-icon.png?97407',
        'https://runescape.wiki/images/Woodcutting-icon.png?50c97',
        'https://runescape.wiki/images/Fletching-icon.png?fc52a',
        'https://runescape.wiki/images/Fishing-icon.png?caf92',
        'https://runescape.wiki/images/Firemaking-icon.png?3274d',
        'https://runescape.wiki/images/Crafting-icon.png?0d033',
        'https://runescape.wiki/images/Smithing-icon.png?e8764',
        'https://runescape.wiki/images/Mining-icon.png?77dbc',
        'https://runescape.wiki/images/Herblore-icon.png?fbbf2',
        'https://runescape.wiki/images/Agility-icon.png?22224',
        'https://runescape.wiki/images/Thieving-icon.png?96b5d',
        'https://runescape.wiki/images/Slayer-icon.png?9269d',
        'https://runescape.wiki/images/Farming-icon.png?d69c9',
        'https://runescape.wiki/images/Runecrafting-icon.png?1ccda',
        'https://runescape.wiki/images/Hunter-icon.png?ef6d8',
        'https://runescape.wiki/images/Construction-icon.png?abbac',
        'https://runescape.wiki/images/Summoning-icon.png?202f5',
        'https://runescape.wiki/images/Dungeoneering-icon.png?f8c30',
        'https://runescape.wiki/images/Divination-icon.png?e8ed7',
        'https://runescape.wiki/images/Invention-icon.png?35add',
        'https://runescape.wiki/images/Archaeology-icon.png?48b2f'
        ],

        //skillNames följer samma ordning som Options och skillIcon
        skillNames: ['Overall', 'Attack', 'Defence', 'Strength', 'Constitution', 'Ranged', 'Prayer', 'Magic', 'Cooking', 'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting', 'Smithing', 'Mining', 'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming', 'Runecrafting', 'Hunter', 'Construction', 'Summoning','Dungeoneering', 'Divination', 'Invention', 'Archaeology']
      }
    },

    methods: {
      //fetchSkills() skickar GET request med rätt nummer för vilken skill som ska visas
      fetchSkills(){
        fetch(`https://secure.runescape.com/m=hiscore/ranking.json?table=${this.skillSelected}&category=0&size=10`)
        .then((response) => response.json())
        .then((players) => {
          this.players = players
        })
      }
    }
  }
</script>

<template>
<!-- skillSelected väljer vilket nummer som ska skickas med i fetchSkills()-->
<select v-model="skillSelected" v-on:change="fetchSkills">
  <option v-for="option in options" :value="option">
    {{ option }}
  </option>
</select>

<!-- visar vilken skillName som ska visas-->
<h2>Top 10 spelare i {{skillNames[skillSelected]}} level</h2>

<!-- skapar en li i en ol med en bild och namnet för varje spelare-->
<ol>
  <li id="array-li" v-for="player in players"><img v-bind:src="skillIcon[this.skillSelected]" alt="runescape skill icon">{{ player.name }} {{player.score}} xp</li>
</ol>

</template>

<style lang="scss" scoped>
  #array-li {
    background-color: #13202D;
    color: #ffffff;
  }
</style>
