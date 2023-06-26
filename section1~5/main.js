let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!!',
    list: ['사과', '바나나', '딸기'],
    message2: '',
    count: 0,
    show: true,
  },
  methods: {
    handleClick: function (event) {
      alert(event.target)
    }
  }
})


console.log(app.list)