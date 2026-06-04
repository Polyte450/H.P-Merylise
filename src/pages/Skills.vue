<template>
  <section class="space-y-8">
    <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
      <span class="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">{{ $t('skills.sectionTag') }}</span>
      <h1 class="mt-5 text-4xl font-bold text-slate-900 dark:text-white">{{ $t('skills.title') }}</h1>
      <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{{ $t('skills.description') }}</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white"><span class="inline-block h-3 w-3 rounded-full bg-cyan-500 mr-3 align-middle"></span>{{ $t('skills.languages.title') }}</h3>
        <div class="space-y-6 mt-6">
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span class="inline-flex items-center gap-2"><span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F7DF1E] text-xs font-semibold text-slate-900">JS</span>{{ $t('skills.languages.javascript') }}</span>
              <span>{{ $t('skills.levels.advanced') }}</span>
            </div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:85%"></div></div>
          </div>
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span class="inline-flex items-center gap-2"><span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD43B] text-xs font-semibold text-slate-900">Py</span>{{ $t('skills.languages.python') }}</span>
              <span>{{ $t('skills.levels.intermediate') }}</span>
            </div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:70%"></div></div>
          </div>
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span class="inline-flex items-center gap-2"><span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E34F26] text-xs font-semibold text-white mr-2">HTML</span>{{ $t('skills.languages.html') }}</span>
              <span>{{ $t('skills.levels.advanced') }}</span>
            </div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:90%"></div></div>
          </div>
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span class="inline-flex items-center gap-2"><span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1572B6] text-xs font-semibold text-white mr-2">CSS</span>{{ $t('skills.languages.css') }}</span>
              <span>{{ $t('skills.levels.advanced') }}</span>
            </div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:85%"></div></div>
          </div>
        </div>
      </div>

      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white"><span class="inline-block h-3 w-3 rounded-full bg-cyan-500 mr-3 align-middle"></span>{{ $t('skills.concepts.title') }}</h3>
        <div class="space-y-6 mt-6">
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400"><span>{{ $t('skills.concepts.responsive') }}</span><span>{{ $t('skills.levels.strong') }}</span></div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:85%"></div></div>
          </div>
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400"><span>{{ $t('skills.concepts.problemSolving') }}</span><span>{{ $t('skills.levels.strong') }}</span></div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:80%"></div></div>
          </div>
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400"><span>{{ $t('skills.concepts.versionControl') }}</span><span>{{ $t('skills.levels.intermediate') }}</span></div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:65%"></div></div>
          </div>
          <div>
            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400"><span>{{ $t('skills.concepts.teamwork') }}</span><span>{{ $t('skills.levels.strong') }}</span></div>
            <div class="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800"><div class="h-full rounded-full bg-cyan-600" style="width:85%"></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-3xl border border-gray-200 bg-white/90 p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-3xl border border-gray-200 bg-slate-50 p-6 dark:border-gray-800 dark:bg-gray-950">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ $t('skills.tools.title') }}</h3>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F7DF1E] text-[10px] font-semibold text-slate-900 mr-2">JS</span>{{ $t('skills.tools.javascript') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD43B] text-[10px] font-semibold text-slate-900 mr-2">Py</span>{{ $t('skills.tools.python') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E34F26] text-[10px] font-semibold text-white mr-2">HTML</span>{{ $t('skills.tools.html') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1572B6] text-[10px] font-semibold text-white mr-2">CSS</span>{{ $t('skills.tools.css') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.tools.git') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.tools.vscode') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.tools.node') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.tools.figma') }}</span>
          </div>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-slate-50 p-6 dark:border-gray-800 dark:bg-gray-950">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ $t('skills.soft.title') }}</h3>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.soft.communication') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.soft.curiosity') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.soft.discipline') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.soft.adaptability') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.soft.teamwork') }}</span>
            <span class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-200">{{ $t('skills.soft.time') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
