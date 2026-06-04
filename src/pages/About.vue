<template>
  <section class="space-y-10">
    <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
        <p class="text-sm uppercase tracking-[0.25em] text-cyan-600">{{ $t('about.tag') }}</p>
        <h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">{{ $t('about.title') }}</h1>
        <p class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{{ $t('about.subtitle') }}</p>
      </div>
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div class="overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">
          <img src="/POLYTE.png" :alt="$t('about.imageAlt')" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
      <p>{{ $t('about.paragraph1') }}</p>

      <p class="mt-6">{{ $t('about.paragraph2') }}</p>

      <p class="mt-6">{{ $t('about.paragraph3') }}</p>

      <p class="mt-6">{{ $t('about.paragraph4') }}</p>

      <p class="mt-6 text-slate-600 dark:text-slate-400">{{ $t('about.paragraph5') }}</p>

      <div class="mt-8 flex flex-wrap gap-3">
        <span class="rounded-full border border-gray-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-950 dark:text-slate-200">{{ $t('about.badge1') }}</span>
        <span class="rounded-full border border-gray-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-950 dark:text-slate-200">{{ $t('about.badge2') }}</span>
        <span class="rounded-full border border-gray-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-950 dark:text-slate-200">{{ $t('about.badge3') }}</span>
        <span class="rounded-full border border-gray-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-950 dark:text-slate-200">{{ $t('about.badge4') }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
