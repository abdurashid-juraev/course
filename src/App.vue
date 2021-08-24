<template>
  <div id="app">
    <div class="container">
      <p v-if="show">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem
        iure nobis quae dolores, nesciunt qui minima reiciendis inventore
        consequuntur ea quisquam sapiente. Necessitatibus, atque iure quae
        facilis nihil voluptatem!
      </p>
      <button @click="show = !show">click me</button>
    </div>
    <div class="container">
      <ol>
        <li v-for="text in texts" :key="text.id">
          {{ text.text }}
        </li>
      </ol>
      <p>{{ message }}</p>
      <input type="text" v-model="message" />
      <div>
        <compTest class="m-t-50" v-if="testBeforeDestroyed"></compTest>
        <button
          class="m-t-50"
          @click="testBeforeDestroyed = !testBeforeDestroyed"
        >
          beforeDestroy
        </button>
      </div>

      <div class="row">
        <compCard
          text="props bilan ishlash"
          testText="bu props orqali text1"
          propImg="http://picsum.photos/401/300"
        ></compCard>
        <compCard
          text="props bilan test"
          testText="bu props orqali text2"
          propImg="http://picsum.photos/404/300"
        ></compCard>
        <compCard
          text="props bilan componentlarga alohida qiymat berish"
          testText="bu props orqali text3"
          propImg="http://picsum.photos/402/300"
        >
        </compCard>
      </div>
      <div class="m-t-50">
        <p :class="{ test: test }">
          Computeddan boshlang'ich tushunchalar "{{ someMsg }}"
        </p>
        <p :class="{ test2: test2 }">
          Computeddan qo'shimcha tushunchalar "{{ reverseSomeMsg }}"
        </p>
        <p>Coputed test: "{{ now }}"</p>

        <p v-if="true">{{ fullName }}</p>
        <p v-else-if="false">{{ lastFullName }}</p>
        <button @click="watch()">watch btn</button>

        <p v-if="hide">FooBar</p>
        <p v-else>Jon</p>
        <button @click="hide = !hide">watch btn</button>

        <div>
          <p>
            Задайте вопрос, на который можно ответить «да» или «нет»:
            <input type="text" v-model="question" />
          </p>
          <p>
            {{ answer }}
          </p>
        </div>

        <!-- <div class="v-if">
          <div v-if="Math.random() > 0.5">Сейчас меня видно</div>
          <div v-else>А теперь — нет</div>
        </div> -->
      </div>

      <div class="m-t-50">
        <template v-if="loginType">
          <label for="">Имя пользователя </label>
          <input type="text" placeholder="Введите имя пользователя" />
        </template>
        <template v-else>
          <label for="">Email </label>
          <input type="text" placeholder="Введите адрес email" />
        </template>
      </div>
      <button class="m-t-50" @click="loginType = !loginType">
        Переключить тип логина
      </button>
      <div class="m-t-50">
        <p v-if="isMorning">Xayrli tong!</p>
        <p v-else-if="isAfternoon">Xayrli kun!</p>
        <p v-else-if="isEvening">Xayrli kech!</p>
        <p v-else>Xayrli tun</p>
      </div>
      <div>
        <p>The second dog is {{ dogs[1] }}</p>
        <p>All dogs are {{ dogs }}</p>
      </div>
      <div>
        <ol>
          <li v-for="dog in dogs" :key="dog.id">{{ dog }}</li>
        </ol>
      </div>
      <div class="m-t-50">
        <p>{{ seconds }} seconds have elapsed since you opened the page.</p>
        <label><input type="radio" v-model="value" value="two" /> Two</label>
        <label
          ><input type="radio" v-model="value" value="three" /> Three</label
        >
      </div>
      <div class="m-t-50">
        <input
          class="inp"
          v-model="newItem"
          type="text"
          placeholder="nimadir yozib add inputni bos"
        />
        <!-- <button @click="addItem">add input</button> -->
      </div>
      <ol>
        <li v-for="item in items" :key="item.id">{{ item }}</li>
      </ol>
      <ol>
        <li v-for="n in evenNumbers" :key="n.id">{{ n }}</li>
      </ol>
      <p v-for="n in 5" :key="n.id">{{ n }}</p>
      <div>
        <pageTest></pageTest>
        <compBtn></compBtn>
        <compBtn></compBtn>
        <compBlogPost></compBlogPost>
      </div>
      <div>
        <form v-on:submit.prevent="addNewTodo">
          <label for="new-todo">Добавить задачу</label>
          <input
            class="inp"
            v-model="newTodoText"
            id="new-todo"
            placeholder="kunlik bajarish uchun vazifalar"
          />
          <button>Добавить</button>
        </form>
        <ul>
          <li
            is="compTodo"
            v-for="(todo, index) in todos"
            :key="todo.id"
            :title="todo.title"
            v-on:remove="todos.splice(index, 1)"
          ></li>
        </ul>
        <button @click="counter += 1">count btn</button>
        <p>Кнопка выше была нажата {{ counter }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import compCard from "./components/Card-item";
import compTest from "@/components/Testcomp.vue";
import compTodo from "@/components/Todo.vue";
import compBtn from "@/components/BtnCounter.vue";
import compBlogPost from "@/components/BlogPost.vue";
var hours = new Date().getHours();
export default {
  name: "App",
  data() {
    return {
      counter: 0,
      newTodoText: "",
      todos: [
        { id: 1, title: "har kuni 1 soat ingliz tili" },
        { id: 2, title: "har kuni 3 soat vue.js" },
        { id: 3, title: "har kuni 2 soat javascript" },
        { id: 4, title: "test todo list" },
      ],
      nextTodoId: 4,
      numbers: [1, 2, 3, 4, 5, 6],
      newItem: "",
      items: [
        // '"10 party hats", "2 board games",  "20 cups"',
      ],

      value: true,
      seconds: 0,
      dogs: ["Buldog", "Rotveller", "Pitbull"],
      isMorning: hours >= 6 && hours <= 12,
      isAfternoon: hours >= 12 && hours <= 18,
      isEvening: hours >= 18 && hours <= 24,
      isNight: hours >= 24 && hours <= 6,
      loginType: true,
      usernamw: false,
      test2: true,
      test: true,
      question: "",
      answer: "Пока вы не зададите вопрос, я не могу ответить!",
      hide: false,
      firstName: "foo",
      lastName: "bar",
      fullName: "foo bar",
      lastFullName: "jon don",
      someMsg: "haqida",
      testBeforeDestroyed: true,
      testHookUpdated: "Bu update hooki",
      testHookBeforeUpdate: "Bu beforeUpdate hooki",
      testHookMounted: "Bu mounted hooki",
      testHookBeforeMount: "Bu beforeMount hooki",
      testHookCreated: "Bu created hooki",
      show: true,
      texts: [
        {
          text: "text v-for bilan takrorlangan ",
        },
        {
          text: "text v-for bilan takrorlangan",
        },
        {
          text: "text v-for bilan takrorlangan",
        },
        {
          text: "text v-for bilan takrorlangan",
        },
      ],
      message: "bu v-model orqali inputga ulangan",
    };
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = " Ожидаю, когда вы закончите печатать...";
      this.debouncedGetAnswer();
      console.log(newQuestion);
      console.log(oldQuestion);
    },
  },
  created: function () {
    console.log(this.testHookCreated);
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    setInterval(() => {
      // this.seconds++;
    }, 1000);
    clearInterval(this.seconds < 10);
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({ id: this.nextTodo++, title: this.newTodoText });
    },
    watch() {
      this.fullName = this.lastFullName;
      console.log("watch ishladiyov");
    },

    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Вопросы обычно заканчиваются вопросительным знаком. ;-)";
        return;
      }
      this.answer = "Думаю...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = "Ошибка! Не могу связаться с API. " + error;
        });
    },
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 1;
      });
    },
    reverseSomeMsg: function () {
      return this.someMsg.split("").reverse().join("");
    },
    now: function () {
      return new Date(Date.now());
    },
  },
  components: {
    compBlogPost,
    compBtn,
    compTodo,
    compCard,
    compTest,
  },
  beforeDestroy: function () {
    console.log(this.testBeforeDestroy);
  },
  updated: function () {
    console.log(this.testHookUpdated);
  },
  beforeUpdate: function () {
    console.log(this.testHookBeforeUpdate);
  },
  mounted: function () {
    console.log(this.testHookMounted);
  },
  beforeMount: function () {
    console.log(this.testHookBeforeMount);
  },
  beforeCreate: function () {
    console.log(
      "Bu beforeCreate hooki, bu hook browser o'zgaruvchilarni tanishidan oldingi jarayon "
    );
  },
};
</script>

<style>
@import "./assets/style.css";
.row {
  display: flex;
  justify-content: space-between;
}
body {
  background: blueviolet;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: azure;
  margin-top: 60px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
ol,
ul li {
  text-align: left;
  font-size: 25px;
}
.m-t-50 {
  margin-top: 50px;
}
button {
  background: #000;
  color: aqua;
  font-size: 25px;
  padding: 15px 25px;
  border-radius: 25px;
  outline: none;
}
input,
label {
  font-size: 25px;
  margin-top: 15px;
}
.inp {
  margin-left: 10px;
  width: 400px;
}
.v-if {
  font-size: 25px;
  color: darkorange;
}
.inputs {
  display: flex;
  justify-content: space-between;
}
</style>
