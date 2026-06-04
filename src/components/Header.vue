<template>
  <header class="flex items-center justify-between py-4">
    <div class="flex items-center gap-3">
      <img src="/logo.svg" alt="logo" class="w-10 h-10" />
      <h1 class="text-xl font-semibold">Polyte</h1>
    </div>
    <nav class="flex flex-wrap items-center gap-2">
      <router-link to="/" v-slot="{ isActive }" :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200']">{{ $t('nav.home') }}</router-link>
      <router-link to="/about" v-slot="{ isActive }" :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200']">{{ $t('nav.about') }}</router-link>
      <router-link to="/projects" v-slot="{ isActive }" :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200']">{{ $t('nav.projects') }}</router-link>
      <router-link to="/skills" v-slot="{ isActive }" :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200']">{{ $t('nav.skills') }}</router-link>
      <router-link to="/experience" v-slot="{ isActive }" :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200']">{{ $t('nav.experience') }}</router-link>
      <router-link to="/materials" v-slot="{ isActive }" :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200']">{{ $t('nav.materials') }}</router-link>
      <router-link to="/contact" v-slot="{ isActive }" :class="['px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-gray-100 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200']">{{ $t('nav.contact') }}</router-link>
      <div class="ml-auto flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
export default { components: { ThemeToggle, LanguageSwitcher } }
</script>
