import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const projectName = require('./package.json').name

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [vue()]
})

export default({ command, mode }) => {
  if (command === 'build') {
    const configMerges = mergeConfig(config, {
      base: `/${projectName}/`
    })
    return configMerges
  }
  return config
}