<template>
  <section class="space-y-10">
    <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
      <span class="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">{{ $t('contact.sectionTag') }}</span>
      <h1 class="mt-5 text-4xl font-bold text-slate-900 dark:text-white">{{ $t('contact.title') }}</h1>
      <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{{ $t('contact.description') }}</p>
    </div>

    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">{{ $t('contact.getInTouchTitle') }}</h3>
        <p class="mt-4 text-slate-600 dark:text-slate-300">{{ $t('contact.getInTouchDescription') }}</p>

        <ul class="mt-8 space-y-6">
          <li class="flex gap-4">
            <span class="text-2xl">✉️</span>
            <div>
              <div class="text-sm font-semibold text-slate-500 dark:text-slate-400">{{ $t('contact.labels.email') }}</div>
              <a href="mailto:bezagenieariella@gmail.com" class="text-slate-900 dark:text-slate-100">bezagenieariella@gmail.com</a>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="text-2xl">📷</span>
            <div>
              <div class="text-sm font-semibold text-slate-500 dark:text-slate-400">{{ $t('contact.labels.instagram') }}</div>
              <a href="https://instagram.com/mp_450.lise" target="_blank" rel="noopener" class="text-slate-900 dark:text-slate-100">@mp_450.lise</a>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="text-2xl">📍</span>
            <div>
              <div class="text-sm font-semibold text-slate-500 dark:text-slate-400">{{ $t('contact.labels.location') }}</div>
              <span class="text-slate-900 dark:text-slate-100">{{ $t('contact.values.location') }}</span>
            </div>
          </li>
        </ul>

        <div class="mt-10 flex gap-3 text-2xl">
          <a href="mailto:bezagenieariella@gmail.com" aria-label="Email">✉️</a>
          <a href="https://instagram.com/mp_450.lise" target="_blank" rel="noopener" aria-label="Instagram">📷</a>
        </div>
      </div>

      <form @submit.prevent="sendEmail" class="rounded-3xl border border-gray-200 bg-white/90 p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div class="space-y-6">
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {{ $t('contact.form.nameLabel') }}
            <input v-model="name" type="text" required :placeholder="$t('contact.form.namePlaceholder')" class="mt-3 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-white" />
          </label>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {{ $t('contact.form.emailLabel') }}
            <input v-model="email" type="email" required :placeholder="$t('contact.form.emailPlaceholder')" class="mt-3 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-white" />
          </label>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {{ $t('contact.form.subjectLabel') }}
            <input v-model="subject" type="text" :placeholder="$t('contact.form.subjectPlaceholder')" class="mt-3 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-white" />
          </label>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {{ $t('contact.form.messageLabel') }}
            <textarea v-model="message" rows="5" required :placeholder="$t('contact.form.messagePlaceholder')" class="mt-3 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-white"></textarea>
          </label>
          <button type="submit" class="inline-flex w-full items-center justify-center rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">{{ $t('contact.form.button') }}</button>
          <p v-if="status" class="text-sm text-slate-500 dark:text-slate-400">{{ status }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    const name = ref('')
    const email = ref('')
    const subject = ref('')
    const message = ref('')
    const status = ref('')

    function sendEmail() {
      const subjectText = encodeURIComponent(subject.value || t('contact.form.defaultSubject'))
      const body = encodeURIComponent(`From: ${name.value} <${email.value}>

${message.value}`)
      window.location.href = `mailto:bezagenieariella@gmail.com?subject=${subjectText}&body=${body}`
      status.value = t('contact.form.statusOpening')
      name.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
    }

    return { name, email, subject, message, status, sendEmail }
  }
}
</script>
