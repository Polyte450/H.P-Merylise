<template>
  <section class="space-y-10">
    <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
      <div class="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <span class="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">{{ $t('home.heroBadge') }}</span>
          <h1 class="mt-5 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">{{ $t('home.heroTitle') }}</h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{{ $t('home.heroDescription') }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <router-link to="/projects" class="rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">{{ $t('home.heroProjects') }}</router-link>
            <router-link to="/contact" class="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-800 dark:text-slate-200 dark:hover:bg-gray-900">{{ $t('home.heroContact') }}</router-link>
          </div>
        </div>
        <div class="mx-auto w-full max-w-[420px]">
          <div class="overflow-hidden rounded-[32px] border border-gray-200 bg-gray-50 shadow-xl shadow-cyan-100/30 dark:border-gray-800 dark:bg-gray-950">
            <img src="/POLYTE.png" :alt="$t('home.heroImageAlt')" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{{ $t('home.stats.yearsLabel') }}</p>
        <p class="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">{{ $t('home.stats.yearsValue') }}</p>
      </div>
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{{ $t('home.stats.projectsLabel') }}</p>
        <p class="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">{{ $t('home.stats.projectsValue') }}</p>
      </div>
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{{ $t('home.stats.toolsLabel') }}</p>
        <p class="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">{{ $t('home.stats.toolsValue') }}</p>
      </div>
    </div>

    <div class="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div class="flex flex-col gap-6 md:flex-row md:justify-between">
        <div class="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-950">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">JS</div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{{ $t('home.cards.web.title') }}</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">{{ $t('home.cards.web.description') }}</p>
        </div>
        <div class="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-950">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">Py</div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{{ $t('home.cards.python.title') }}</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">{{ $t('home.cards.python.description') }}</p>
        </div>
        <div class="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-950">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">UI</div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{{ $t('home.cards.design.title') }}</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">{{ $t('home.cards.design.description') }}</p>
        </div>
      </div>
    </div>

    <div class="space-y-8">
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div class="grid gap-6 md:grid-cols-2">
          <article class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <img src="/POPO.png" :alt="$t('home.project1.title')" class="h-64 w-full object-cover" />
            <div class="p-6">
              <div class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">{{ $t('home.project1.label') }}</div>
              <h3 class="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{{ $t('home.project1.title') }}</h3>
              <p class="mt-4 text-slate-600 dark:text-slate-300">{{ $t('home.project1.description') }}</p>
              <div class="mt-5 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">{{ $t('home.project1.tags') }}</div>
            </div>
          </article>
          <article class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <div class="bg-slate-950 p-10 text-center text-2xl text-slate-300">{{ $t('home.project2.imageAlt') }}</div>
            <div class="p-6">
              <div class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">{{ $t('home.project2.label') }}</div>
              <h3 class="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{{ $t('home.project2.title') }}</h3>
              <p class="mt-4 text-slate-600 dark:text-slate-300">{{ $t('home.project2.description') }}</p>
              <div class="mt-5 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">{{ $t('home.project2.tags') }}</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
