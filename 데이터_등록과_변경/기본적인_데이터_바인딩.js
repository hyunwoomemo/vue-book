
let state = { count: 0 };
const app = new Vue({
  el: "#app",
  data: {
    message: "Vue.js!", // 이렇게 정의한 message는 변화를 감지할 수 있게 됨
    state: state
  },
});

state.count++

