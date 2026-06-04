<template>
  <button @click="toggle" :aria-pressed="isDark" class="p-2 rounded bg-gray-200 dark:bg-gray-800">
    <span v-if="isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const isDark = ref(false)
    onMounted(() => {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        isDark.value = true
      }
    })
    function toggle() {
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
    return { isDark, toggle }
  }
}
</script>
