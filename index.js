const app = Vue.createApp({})

app.component('hejsan', {
  data() {
    return {}
  },
  template: '<p>Hello world!</p>'
})

app.mount('#app')
