# vue-book
'고양이도 할 수 있는 Vue.js' 를 읽고 Vue에 대한 기본 개념을 파악하자

## Section 1 ~ 5

```html
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="main.css">
</head>

<body>

  <div id="app">
    <!-- 텍스트 바인딩 -->
    <p>{{ message }}</p>
    <!-- 반복 렌더링 -->
    <ol>
      <li v-for="item in list">{{ item }}</li>
    </ol>
    <!-- 이벤트 사용하기 -->
    <button v-on:click="handleClick">Click</button>
    <!-- 입력 양식과 동기화하기 -->
    <p>{{ message2 }}</p>
    <input type="text" v-model="message2">
    <!-- number 장식자 -->
    <p>{{count}}</p>
    <input v-model.number="count">
    <!-- 조건 분기 -->
    <p v-if="show">Hello Vue.js!</p>
    <!-- 트랜지션과 애니메이션 -->
    <button v-on:click="show=!show">변경하기</button>
    <transition>
      <p v-if="show">Hello Vue.js!</p>
    </transition>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
  <script src="main.js"></script>
</body>

</html>
```

```js
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

```

```css
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
```
