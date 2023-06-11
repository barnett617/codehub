<template>
  <h1>mix</h1>
</template>
<script>
import { ref, computed, watch, watchEffect, nextTick } from 'vue'

const mixDemo = () => {
  const v = ref(100);
  const c = computed(() => v.value * 2);
  const c2 = computed(() => c.value * 2);
  const v2 = ref(10);

  const w = watch(c2, (v) => {
    v2.value = v;
  })

  let ctr = 0;
  const we = watchEffect(() => {
    const v = c.value + v2.value;
  });

  v.value += 50;
  console.log('mix of dependent refs, computed, watch and watchEffect')
  nextTick(() => console.log('mix next tick', v.value));
}

console.log('-----mix start-----')
mixDemo()
console.log('-----mix end-----')
</script>
