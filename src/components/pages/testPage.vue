<template>
  <div class="page">
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
      <button @click="pushTest()">btn push</button>
      <li class="m-t-50"></li>
      <li v-for="(value, name, index) in object" :key="value.id">
        {{ name }}: {{ index }} - {{ value }}
      </li>
    </ul>
    <button @click="say('hi')">Say hi</button>
    <button @click="say('what is')">Say What</button>
    <button v-on:click="warn('Форма не может быть отправлена.', $event)">
      Отправить
    </button>
    <input v-model="input" placeholder="v-model test, nimadir yoz" />
    <p>{{ input }}</p>
    <input class="check" type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <div>
      <input
        class="check"
        type="checkbox"
        id="jack"
        value="Джек"
        v-model="checkedNames"
      />
      <label for="jack">Джек</label>
      <input
        class="check"
        type="checkbox"
        id="john"
        value="Джон"
        v-model="checkedNames"
      />
      <label for="john">Джон</label>
      <input
        class="check"
        type="checkbox"
        id="mike"
        value="Майк"
        v-model="checkedNames"
      />
      <label for="mike">Майк</label>
      <span>Отмеченные имена: {{ checkedNames }} </span><br /><br />
      <div class="dw">
        <input type="radio" id="one" value="Один" v-model="picked" />
        <label for="one">Один</label><br />
        <input type="radio" id="two" value="Два" v-model="picked" />
        <label for="two">Два</label>
        <span>Выбрано: {{ picked }} </span>
      </div>
      <div>
        
        <select v-model="selected">
          <option
            v-for="option in options"
            :value="option.value"
            :key="option.id"
          >
            {{ option.text }}
          </option>
        </select>
        <span>Выбрано: {{ selected }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "A",
      options: [
        { text: "Один", value: "А" },
        { text: "Два", value: "Б" },
        { text: "Три", value: "В" },
      ],
      picked: true,
      checkedNames: [],
      checked: true,
      input: "",
      say: function (message) {
        alert(message);
      },
      parentMessage: "Parent",
      items: [
        { message: "Foo" },
        { message: "Bar" },
        { message: "Test" },
        { message: "Test2" },
      ],
      object: {
        title: "Vueda v-for directivasi bilan har hil test",
        author: "Jon Doe",
        publishedAt: "21.06.2021",
      },
    };
  },
  methods: {
    warn: function (message, event) {
      // теперь у нас есть доступ к нативному событию
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    pushTest: function () {
      this.items.push({ message: "testPush" });
      // this.items.pop({ message: "testPush" });
      // this.items.shift({ message: "testPush" });
      // this.items.unshift({ message: "testPush" });
      // this.items.splice({ message: "testPush" });
      // this.items.reverse({ message: "testPush" });
    },
  },
};
</script>

<style>
.check {
  width: 40px;
  height: 40px;
}
.page {
  background: lightcoral;
}
label,
span {
  font-size: 25px;
}
.dw {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>