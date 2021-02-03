<template>
  <div id="counter">
    Counter: {{ counter }}
    Data: {{ data }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// const Counter = {
//   data() {
//     return {
//       counter: 0
//     }
//   }
// }

const data = 'abc';
interface twoString {
  a: string,
  b: string,
}

const data2: twoString = {
  a: 'aa',
  b: 'bb',
}
export default Vue.extend({
  data() {
    return {
      counter: 0,
      data,
      data2
    }
  }
})
</script>