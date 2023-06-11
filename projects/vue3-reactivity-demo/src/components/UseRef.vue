<template>
  <h1>ref</h1>
</template>

<script setup>
import { ref } from 'vue'

const createRef = () => {
  console.time('createRef');
  const v = ref(100);
  console.timeEnd('createRef');
}

const writeRef = () => {
  let i = 0;
  const v = ref(100);
  v.value = i++;
  console.log('write ref', v.value);
}

const readRef = () => {
  const v = ref(100);
  const i = v.value;
  console.log('read ref', i);
}

const writeReadRef = () => {
  let i = 0;
  const v = ref(100);
  v.value = i++;
  const q = v.value;
  console.log('write/read ref', v.value, q)
}

console.log('-----ref start-----')
createRef()
writeRef()
readRef()
writeReadRef()
console.log('-----ref end-----')

</script>