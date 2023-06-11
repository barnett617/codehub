<template>
  <div>
    <p>open devtool and refresh to see what happens</p>
    <use-ref></use-ref>
    <use-computed></use-computed>
    <use-watch></use-watch>
    <use-watch-effect></use-watch-effect>
    <use-mix></use-mix>
    <use-reactive-object></use-reactive-object>
    <use-reactive-map></use-reactive-map>
  </div>
</template>

<script setup>
import UseRef from './components/UseRef.vue'
import UseComputed from './components/UseComputed.vue'
import UseWatch from './components/UseWatch.vue'
import UseWatchEffect from './components/UseWatchEffect.vue'
import UseMix from './components/UseMix.vue'
import UseReactiveObject from './components/UseReactiveObject.vue'
import UseReactiveMap from './components/UseReactiveMap.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
