let app = new Vue({
  el: '#app', // 마운트할 요소
  data: {
    message: 'Vue.js'
  }, // 애플리케이션에서 사용할 데이터
  computed: {
    computedMessage: function () {
      return this.message + '!'
    }
  }, // 산출 속성
  created: function () {
    //..하고싶은 처리
  }, // 라이프 사이클 훅
  methods: {
    myMethod: function () {
      // ..하고싶은 처리
    }
  } // 애플리케이션에서 사용할 메서드
})

new Vue({
  el: '#app',
  created: function () {
    // 이 인스턴스의 생성과 초기화가 종료되었을 때
    console.log('created')
  }
})

