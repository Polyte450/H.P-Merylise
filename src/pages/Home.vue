<template>
  <section class="space-y-10">
    <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
      <div class="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <span class="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">Available for new projects</span>
          <h1 class="mt-5 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Hi, I'm <span class="text-gradient">AKOGUTETA H.P Merylise</span> — a software developer.</h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">I build clean, thoughtful web experiences using JavaScript and Python. Currently studying at SOS Technical High School and shipping projects like <strong class="text-slate-900 dark:text-white">Learnify</strong> and <strong class="text-slate-900 dark:text-white">CareBridge</strong>.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <router-link to="/projects" class="rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">View my work →</router-link>
            <router-link to="/contact" class="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-800 dark:text-slate-200 dark:hover:bg-gray-900">Get in touch</router-link>
          </div>
        </div>
        <div class="mx-auto w-full max-w-[420px]">
          <div class="overflow-hidden rounded-[32px] border border-gray-200 bg-gray-50 shadow-xl shadow-cyan-100/30 dark:border-gray-800 dark:bg-gray-950">
            <img src="/POLYTE.png" alt="AKOGUTETA H.P Merylise" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Years coding</p>
        <p class="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">2+</p>
      </div>
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Featured projects</p>
        <p class="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">2</p>
      </div>
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Languages & tools</p>
        <p class="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">3+</p>
      </div>
    </div>

    <div class="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div class="flex flex-col gap-6 md:flex-row md:justify-between">
        <div class="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-950">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">JS</div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-white">Web Development</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">I build modern, responsive websites and web apps with JavaScript, HTML and CSS.</p>
        </div>
        <div class="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-950">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">Py</div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-white">Python Scripts</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">Automation, problem solving and small tools that make everyday work easier.</p>
        </div>
        <div class="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-950">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">UI</div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-white">Thoughtful Design</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">I care about the small details — typography, spacing, and motion that feel right.</p>
        </div>
      </div>
    </div>

    <div class="space-y-8">
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div class="grid gap-6 md:grid-cols-2">
          <article class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <img src="/learnify.png" alt="Learnify screenshot" class="h-180 w-full object-cover" />
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.24em] text-cyan-600">Solo project</p>
              <h3 class="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Learnify</h3>
              <p class="mt-3 text-slate-600 dark:text-slate-300">A learning platform that makes studying feel approachable — interactive lessons and progress tracking for students.</p>
              <div class="mt-4 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">EdTech · JavaScript · Full-stack</div>
            </div>
          </article>
          <article class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <div class="bg-slate-950 p-10 text-center text-2xl text-slate-300">Image coming soon</div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.24em] text-cyan-600">Group project</p>
              <h3 class="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">CareBridge</h3>
              <p class="mt-3 text-slate-600 dark:text-slate-300">A collaborative platform connecting caregivers, patients and families with empathy at the center.</p>
              <div class="mt-4 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">HealthTech · Team work · Web app</div>
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
