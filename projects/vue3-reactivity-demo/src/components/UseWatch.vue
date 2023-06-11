<template>
  <h1>watch</h1>
</template>
<script>
import { ref, watch, nextTick } from 'vue'

const createWatcher = () => {
  const v = ref(100);
  const w = watch(v, (v) => {});
  console.log('create watcher', w);
}

const watchDemo = () => {
  let c = 0;
  const v = ref(100);
  const w = watch(v, (v) => {});
  let i = 0;
  v.value = i++;
  console.log('update ref to trigger watcher (schedule but not executed)');
}

const watchDemo2 = () => {
  let c = 0;
  const v = ref(100);
  const w = watch(v, (v) => {});
  let i = 0;
  v.value = i++;
  console.log('nextTick', nextTick)
  nextTick(() => console.log('watch next tick'));
  console.log('update ref to trigger watcher (executed)');
} 

console.log('-----watch start-----')
createWatcher()
watchDemo()
watchDemo2()
console.log('-----watch end-----')

</script>