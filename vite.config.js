import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/js-ramverk',
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.png', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        background_color: '#050C12',
        display: 'standalone',
        name: 'RuneScape information',
        short_name: 'RS info',
        start_url: '.',
        theme_color: 'white',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          },
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [
          {//alla länkar är för hiscores.vue förutom den sista
            //länkarna är för GET requests och ikoner som hämtas via länkar
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=0&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=1&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=2&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=3&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=4&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=5&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=6&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=7&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=8&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=9&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=10&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=11&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=12&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=13&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=14&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=15&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=16&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=17&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=18&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=19&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=20&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=21&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=22&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=23&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=24&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=25&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=26&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=27&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://secure.runescape.com/m=hiscore/ranking.json?table=28&category=0&size=10'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Melee-icon.png?65246'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Attack-icon.png?41578'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Defence-icon.png?94c29'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Strength-icon.png?e67dd'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Constitution-icon.png?0d583'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Ranged-icon.png?4d319'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Prayer-icon.png?0e5f2'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Magic-icon.png?5d9e2'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Cooking-icon.png?97407'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Woodcutting-icon.png?50c97'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Fletching-icon.png?fc52a'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Fishing-icon.png?caf92'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Firemaking-icon.png?3274d'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Crafting-icon.png?0d033'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Smithing-icon.png?e8764'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Mining-icon.png?77dbc'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Herblore-icon.png?fbbf2'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Agility-icon.png?22224'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Thieving-icon.png?96b5d'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Slayer-icon.png?9269d'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Farming-icon.png?d69c9'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Runecrafting-icon.png?1ccda'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Hunter-icon.png?ef6d8'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Construction-icon.png?abbac'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Summoning-icon.png?202f5'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Dungeoneering-icon.png?f8c30'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Divination-icon.png?e8ed7'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Invention-icon.png?35add'
          },
          {
            handler: 'NetworkFirst',
            urlPattern: 'https://runescape.wiki/images/Archaeology-icon.png?48b2f'
          },
          { //den här länken är för grand-exchange.vue
            handler: 'NetworkFirst',
            urlPattern: 'https://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=24&alpha=e&page=Z'
          }
        ]
      }
    })
  ]
})
