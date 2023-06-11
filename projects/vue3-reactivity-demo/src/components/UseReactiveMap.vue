<template>
  <h1>reactive map</h1>
</template>
<script>
import { reactive, computed } from 'vue'

function createMap(obj) {
  const map = new Map();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      map.set(key, obj[key]);
    }
  }
  return map;
}

const createReactiveMap = () => {
  const r = reactive((createMap({a: 1})));
  console.log('create reactive map', r);
}

const writeReactiveMapProperty = () => {
  let i = 0;
  const r = reactive(createMap({a: 1}));
  r.set("a", i++);
  console.log('write reactive map property', r);
}

const writeReactiveMapDemo = () => {
  const r = reactive(createMap({a: 1}));
  const c = computed(() => {
    return r.get('a') * 2
  });
  let i = 0;
  r.set('a', i++);
  console.log(`write reactive map, don't read computed (never invoked)`);
}

const writeReactiveMapDemo2 = () => {
  const r = reactive(createMap({a: 1}));
  const c = computed(() => {
    return r.get('a') * 2
  });
  const cv = c.value;
  let i = 0;
  r.set('a', i++);
  console.log(`write reactive map, don't read computed (invoked)`);
}

const writeReactiveMapDemo3 = () => {
  const r = reactive(createMap({a: 1}));
  const c = computed(() => {
    return r.get('a') * 2
  });
  let i = 0;
  r.set('a', i++);
  const cv = c.value
  console.log('write reactive map, read computed');
}

const writeReactiveMapDemo4 = () => {
  const _m = new Map();
  for (let i = 0, n = 1000; i < n; i++) {
    _m.set(i, i);
  }
  const r = reactive(_m);
  const c = computed(() => {
    let total = 0;
    r.forEach((value, key) => {
      total += value;
    });
    return total;
  })
  let i = 0;
  r.set(5000, r.get(5000) + 1);
  const cv = c.value;
  console.log(`write reactive map (10'000 items), read computed`);
}

const writeReactiveMapDemo5 = () => {
  const r = reactive(createMap({a: 1}));
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return r.get('a') * 2
    })
    computeds.push(c);
  }
  let i = 0;
  r.set('a', i++);
  console.log(`write reactive map, don't read 1000 computeds (never invoked)`);
}

const writeReactiveMapDemo6 = () => {
  const r = reactive(createMap({a: 1}));
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return r.get('a') * 2
    })
    const cv = c.value;
    computeds.push(c);
  }
  let i = 0;
  r.set('a', i++);
  console.log(`write reactive map, don't read 1000 computeds (invoked)`);
}

const writeReactiveMapDemo7 = () => {
  const r = reactive(createMap({a: 1}));
  const computeds = [];
  for (let i = 0, n = 1000; i < n; i++) {
    const c = computed(() => {
      return r.get('a') * 2
    })
    computeds.push(c);
  }
  let i = 0;
  r.set('a', i++);
  computeds.forEach(c => c.value);
  console.log('write reactive map, read 1000 computeds');
}

const writeReactiveMapDemo8 = () => {
  const reactives = [];
  for (let i = 0, n = 1000; i < n; i++) {
    reactives.push(reactive(createMap({a: i})));
  }
  const c = computed(() => {
    let total = 0;
    reactives.forEach(r => total += r.get('a'));
    return total;
  })
  let i = 0;
  const n = reactives.length;
  reactives[i++ % n].set('a', reactives[i++ % n].get('a') + 1);
  const v = c.value;
  console.log('1000 reactive maps, 1 computed', v);
}

console.log('-----reactive map start-----')
createReactiveMap()
writeReactiveMapProperty()
writeReactiveMapDemo()
writeReactiveMapDemo2()
writeReactiveMapDemo3()
writeReactiveMapDemo4()
writeReactiveMapDemo5()
writeReactiveMapDemo6()
writeReactiveMapDemo7()
writeReactiveMapDemo8()
console.log('-----reactive map end-----')

</script>
