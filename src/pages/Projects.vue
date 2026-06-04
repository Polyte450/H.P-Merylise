<template>
  <section class="space-y-8">
    <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
      <span class="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">{{ $t('projects.sectionTag') }}</span>
      <h1 class="mt-5 text-4xl font-bold text-slate-900 dark:text-white">{{ $t('projects.title') }}</h1>
      <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{{ $t('projects.description') }}</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <article class="rounded-3xl overflow-hidden border border-gray-200 bg-white/90 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img src="/learnify.png" :alt="$t('projects.project1.title')" class="h-180 w-full object-cover" />
        <div class="p-6">
          <div class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">{{ $t('projects.project1.label') }}</div>
          <h3 class="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{{ $t('projects.project1.title') }}</h3>
          <p class="mt-4 text-slate-600 dark:text-slate-300">{{ $t('projects.project1.description') }}</p>
          <div class="mt-5 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">{{ $t('projects.project1.tags') }}</div>
        </div>
      </article>

      <article class="rounded-3xl overflow-hidden border border-gray-200 bg-white/90 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div class="h-64 bg-slate-950 p-10 text-center text-2xl text-slate-300">{{ $t('projects.project2.imageAlt') }}</div>
        <div class="p-6">
          <div class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">{{ $t('projects.project2.label') }}</div>
          <h3 class="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{{ $t('projects.project2.title') }}</h3>
          <p class="mt-4 text-slate-600 dark:text-slate-300">{{ $t('projects.project2.description') }}</p>
          <div class="mt-5 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">{{ $t('projects.project2.tags') }}</div>
        </div>
      </article>
    </div>

    <div class="text-center">
      <router-link to="/contact" class="inline-flex rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">{{ $t('projects.cta') }}</router-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>
