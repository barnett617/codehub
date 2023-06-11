<template>
  <h1>reactive object</h1>
</template>
<script>
import { reactive, computed } from 'vue'

const createReactiveObject = () => {
  const r = reactive({a: 1});
}

const writeReactiveObjectProperty = () => {
  let i = 0;
  const r = reactive({a: 1});
  r.a = i++;
  console.log('write reactive obj property', r);
}

const writeReactiveDemo = () => {
  const r = reactive({a: 1});
  const c = computed(() => {
    return r.a * 2
  });
  let i = 0;
  r.a = i++;
  console.log(`write reactive obj, don't read computed (never invoked)`)
}

const writeReactiveDemo2 = () => {
  const r = reactive({a: 1});
  const c = computed(() => {
    return r.a * 2
  });
  const cv = c.value;
  let i = 0;
  r.a = i++;
  console.log(`write reactive obj, don't read computed (invoked)`)
}

const writeReactiveDemo3 = () => {
  const r = reactive({a: 1});
  const c = computed(() => {
    return r.a * 2
  });
  let i = 0;
  r.a = i++;
  const cv = c.value;
  console.log('write reactive obj, read computed', cv)
}

const writeReactiveDemo4 = () => {
  const r = reactive({a: 1});
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return r.a * 2
    });
    computeds.push(c);
  }
  let i = 0;
  r.a = i++;
  console.log(`write reactive obj, don't read 1000 computeds (never invoked)`)
}

const writeReactiveDemo5 = () => {
  const r = reactive({a: 1});
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return r.a * 2
    });
    const cv = c.value;
    computeds.push(c);
  }
  let i = 0;
  r.a = i++;
  console.log(`write reactive obj, don't read 1000 computeds (invoked)`)
}

const writeReactiveDemo6 = () => {
  const r = reactive({a: 1});
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return r.a * 2
    });
    computeds.push(c);
  }
  let i = 0;
  r.a = i++;
  computeds.forEach(c => c.value);
  console.log('write reactive obj, read 1000 computeds')
}

const writeReactiveDemo7 = () => {
  const reactives = [];
  for (let i = 0, n = 1000; i < n; i++) {
    reactives.push(reactive({a: i}));
  }
  const c = computed(() => {
    let total = 0;
    reactives.forEach(r => total += r.a);
    return total;
  })
  let i = 0;
  const n = reactives.length;
  reactives[i++ % n].a++;
  const v = c.value;
  console.log('1000 reactive objs, 1 computed', v);
}

console.log('-----reactive object start-----')
createReactiveObject()
writeReactiveObjectProperty()
writeReactiveDemo()
writeReactiveDemo2()
writeReactiveDemo3()
writeReactiveDemo4()
writeReactiveDemo5()
writeReactiveDemo6()
writeReactiveDemo7()
console.log('-----reactive object end-----')

</script>
