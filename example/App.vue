<template>
  <div id="app">
    <Input v-for="key of elements" :key="key" @remove="removeElement(key)" />
    <button @click="addElement">加一个输入框</button>
  </div>
</template>

<script>
import Input from './Input'

export default {
  name: 'app',
  components: { Input },
  data() {
    return {
      elements: [1]
    }
  },
  methods: {
    addElement() {
      this.elements.push(this.elements.length + 1)
    },
    removeElement(key) {
      this.elements = this.elements.filter(k => k !== key)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  width: 100vw;
  max-width: 500px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  transition: all 0.2s;
}

button:active,
button:focus {
  outline: none;
}

button:hover {
  background-color: #00b777;
  border-color: #00b777;
  cursor: pointer;
}
</style>
