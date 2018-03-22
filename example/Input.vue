<template>
  <div class="container">
    <input autofocus v-model="value" type="text" v-on-modify="onModify">
    <p>你刚刚修改了 {{count}} 次。</p>
    <span class="icon-delete" @click="$emit('remove')"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      count: 0
    }
  },

  methods: {
    onModify() {
      this.count++
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 84px);
  margin: 0 auto;
}

input {
  appearance: none;
  width: calc(100% - 84px);
  height: 42px;
  display: block;
  margin-left: -10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 10px 40px 10px 10px;
  color: #333;
  font-size: 16px;
  transition: all 0.25s;
}

input:active,
input:focus {
  outline: none;
  border-color: #4fc08d;
}

.icon-delete {
  position: absolute;
  right: 0;
  top: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("./assets/delete.svg") center/contain no-repeat;
  transition: all 0.25s;
}

.icon-delete:hover {
  background: url("./assets/delete-green.svg") center/contain no-repeat;
  cursor: pointer;
}
</style>

