<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
    <Header />
    <main class="max-w-4xl mx-auto p-6">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default { components: { Header } }
</script>
