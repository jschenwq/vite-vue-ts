<script setup lang="ts">
import { defineComponent, ref } from 'vue';
  export default defineComponent({
  setup() {
    return {
      value: ref<string[]>([]),
    };
  },
});
</script>

<template>
  

  <div>
    <h1>测试页面</h1>
    <a-input v-model:value="value"></a-input>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
