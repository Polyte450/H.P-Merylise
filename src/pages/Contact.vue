<template>
  <section class="space-y-10">

    <!-- Header -->
    <div class="rounded-3xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 p-10 shadow-sm">
      <span class="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
        {{ $t('contact.sectionTag') }}
      </span>

      <h1 class="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
        {{ $t('contact.title') }}
      </h1>

      <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
        {{ $t('contact.description') }}
      </p>
    </div>

    <!-- Content -->
    <div class="grid gap-8 lg:grid-cols-2">

      <!-- Contact Info -->
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">
          {{ $t('contact.getInTouchTitle') }}
        </h3>

        <p class="mt-4 text-slate-600 dark:text-slate-300">
          {{ $t('contact.getInTouchDescription') }}
        </p>

        <div class="mt-8 space-y-4 text-slate-900 dark:text-white">
          <p>✉️ {{ emailAddress }}</p>
          <p>📷 @mp_450.lise</p>
          <p>📍 {{ $t('contact.values.location') }}</p>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="sendEmail"
        class="rounded-3xl border border-gray-200 bg-white/90 p-10 shadow-sm dark:border-gray-800 dark:bg-gray-950">

        <div class="space-y-6">

          <input
            v-model="name"
            type="text"
            required
            :placeholder="$t('contact.form.namePlaceholder')"
            class="input"
          />

          <input
            v-model="email"
            type="email"
            required
            :placeholder="$t('contact.form.emailPlaceholder')"
            class="input"
          />

          <input
            v-model="subject"
            type="text"
            :placeholder="$t('contact.form.subjectPlaceholder')"
            class="input"
          />

          <textarea
            v-model="message"
            rows="5"
            required
            :placeholder="$t('contact.form.messagePlaceholder')"
            class="input"
          />

          <button
            type="submit"
            class="w-full rounded-full bg-cyan-600 px-5 py-3 text-white font-semibold hover:bg-cyan-500"
          >
            {{ $t('contact.form.button') }}
          </button>

          <p v-if="status" class="text-sm text-gray-500">
            {{ status }}
          </p>

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

    const emailAddress = 'bezagenieariella@gmail.com'

    function sendEmail() {
      const subjectText = encodeURIComponent(
        subject.value || t('contact.form.defaultSubject')
      )

      const body = encodeURIComponent(
        `From: ${name.value} <${email.value}>\n\n${message.value}`
      )

      window.location.href =
        `mailto:${emailAddress}?subject=${subjectText}&body=${body}`

      status.value = t('contact.form.statusOpening')

      name.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
    }

    return {
      name,
      email,
      subject,
      message,
      status,
      sendEmail,
      emailAddress
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  color: #0f172a;
}
</style> 