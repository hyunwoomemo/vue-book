# vue-book

'고양이도 할 수 있는 Vue.js' 를 읽고 Vue에 대한 기본 개념을 파악하자

## Vue.js 프레임워크의 기초

### Section 1 ~ 6

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="main.css" />
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
      <input type="text" v-model="message2" />
      <!-- number 장식자 -->
      <p>{{count}}</p>
      <input v-model.number="count" />
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
  el: "#app",
  data: {
    message: "Hello Vue.js!!",
    list: ["사과", "바나나", "딸기"],
    message2: "",
    count: 0,
    show: true,
  },
  methods: {
    handleClick: function (event) {
      alert(event.target);
    },
  },
});
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

```js
let app = new Vue({
  el: "#app", // 마운트할 요소
  data: {
    message: "Vue.js",
  }, // 애플리케이션에서 사용할 데이터
  computed: {
    computedMessage: function () {
      return this.message + "!";
    },
  }, // 산출 속성
  created: function () {
    //..하고싶은 처리
  }, // 라이프 사이클 훅
  methods: {
    myMethod: function () {
      // ..하고싶은 처리
    },
  }, // 애플리케이션에서 사용할 메서드
});
```

```js
new Vue({
  el: "#app",
  created: function () {
    // 이 인스턴스의 생성과 초기화가 종료되었을 때
    console.log("created");
  },
});
```

Vue 인스턴스가 생성되고, 데이터 감시 등의 리액티브 시스템과 관련된 초기화가 끝났을 때, created 메서드가 자동으로 호출됩니다.

data와 methods는 자유롭게 정의할 수 있지만, 라이프 사이클 훅은 사용할 수 있는 메서드가 정해져 있다.

- beforeCreate : 인스턴스가 생성되고, 리액티브 초기화 일어나기 전
- created : 인스턴스가 생성되고, 리액티브 초기화가 일어난 후
- beforeMount : 인스턴스가 마운트되기 전
- mounted : 인스턴스가 마운트된 후
- beforeUpdate : 데이터가 변경되어 DOM에 적용되기 전
- updated : 데이터가 변경되어 DOM에 적용된 후
- beforeDestroy : Vue 인스턴스가 제거되기 전

> 언제 어디서 `new Vue()`를 사용하는 것이 좋을까 ?

기본적으로는 조작하고 싶은 모든 부분을 포함하고 있는 요소 한 개에만 new Vue()를 적용하고, 이외의 것들을 컴포넌트로 UI 부품으로서 하나하나 추가하여 추가하며 프로그램을 만들어 나갑니다.

> 정리

- Vue.js의 경우 DOM 구조 본체는 자바스크립트 데이터로 되어 있습니다.
- 디렉티브 값은 자바스크립트 식으로 되어 있습니다.
- HTML 코딩을 위해 컴포넌트를 사용하면 좋습니다.
- 필요한 데이터와 메서드는 옵션으로 정의합니다.
- new Vue() 한 개만 만들고, 컴포넌트로 UI를 구축합니다.
