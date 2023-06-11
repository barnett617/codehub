<template>
  <h1>watch effect</h1>
</template>
<script>
import { ref, watchEffect, nextTick } from 'vue'

const createWatchEffect = () => {
  const we = watchEffect(() => {})
  console.log('create watcher effect', we);
}

const watchEffectDemo = () => {
  let c = 0;
  const v = ref(100);
  const w = watchEffect(v, (v) => {
    const v2 = v.value
  });
  let i = 0;
  v.value = i++;
  console.log('update ref to trigger watchEffect (schedule but not executed)');
}

const watchEffectDemo2 = () => {
  let c = 0;
  const v = ref(100);
  const w = watchEffect(v, (v) => {
    const v2 = v.value;
  });
  let i = 0;
  v.value = i++;
  nextTick(() => console.log('watch effect next tick'));
  console.log('update ref to trigger watchEffect (executed)');
} 

console.log('-----watch effect start-----')
createWatchEffect()
watchEffectDemo()
watchEffectDemo2()
console.log('-----watch effect end-----')

</script>