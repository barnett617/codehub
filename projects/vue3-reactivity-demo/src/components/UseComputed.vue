<template>
  <h1>computed</h1>
</template>
<script>
import { ref, computed } from 'vue'

const createComputed = () => {
  console.time('createComputed');
  const c = computed(() => 100);
  console.timeEnd('createComputed');
  console.log('createComputed', c.value);
}

const writeIndependentRefDep = () => {
  let i = 0;
  const o = ref(100);
  o.value = i;
  console.log('write independent ref dep', o.value);
}

const writeRefDemo1 = () => {
  const v = ref(100);
  const c = computed(() => {
    return v.value * 2
  });
  let i = 0;
  v.value = i++;
  console.log(`write ref, don't read computed (never invoked)`);
}

const writeRefDemo2 = () => {
  const v = ref(100);
  const c = computed(() => {
    return v.value * 2
  });
  const cv = c.value;
  let i = 0;
  v.value = i++;
  console.log(`write ref, don't read computed (invoked)`);
}

const writeRefDemo3 = () => {
  const v = ref(100);
  const c = computed(() => {
    return v.value * 2
  });
  let i = 0;
  v.value = i++;
  const cv = c.value;
  console.log('write ref, read computed', cv);
}

const writeRefDemo4 = () => {
  const v = ref(100);
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return v.value * 2
    });
    computeds.push(c);
  }
  let i = 0;
  v.value = i++;
  console.log(`write ref, don't read 1000 computeds (never invoked)`);
}

const writeRefDemo5 = () => {
  const v = ref(100);
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return v.value * 2;
    })
    const cv = c.value;
    computeds.push(c);
  }
  let i = 0;
  v.value = i++;
  console.log(`write ref, don't read 1000 computeds (invoked)`);
}

const writeRefDemo6 = () => {
  const v = ref(100);
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return v.value * 2
    });
    const cv = c.value;
    computeds.push(c);
  }
  let i = 0;
  v.value = i++;
  computeds.forEach(c => c.value);
  console.log('write ref, read 1000 computeds');
}

const writeRefDemo7 = () => {
  const refs = [];
  for (let i = 0, n = 1000; i < n; i++) {
    refs.push(ref(i));
  }
  const c = computed(() => {
    let total = 0;
    refs.forEach(ref => total += ref.value);
    return total;
  });
  let i = 0;
  const n = refs.length;
  refs[i++ % n].value++;
  const v = c.value;
  console.log('1000 refs, 1 computed', v);
  console.log('0~999 sum', (0 + 999) * 1000 / 2);
}

console.log('-----computed start-----')
createComputed()
writeIndependentRefDep()
writeRefDemo1()
writeRefDemo2()
writeRefDemo3()
writeRefDemo4()
writeRefDemo5()
writeRefDemo6()
writeRefDemo7()
console.log('-----computed end-----')

</script>