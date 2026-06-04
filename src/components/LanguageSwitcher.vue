<template>
  <select v-model="current" class="p-2 rounded bg-gray-100 dark:bg-gray-800 text-sm">
    <option value="en">English</option>
    <option value="pt">Português</option>
    <option value="zh">中文</option>
    <option value="ja">日本語</option>
    <option value="ko">한국어</option>
    <option value="hi">हिंदी</option>
    <option value="rw">Kinyarwanda</option>
  </select>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n()
    const current = computed({
      get: () => locale.value,
      set: val => { locale.value = val }
    })
    return { current }
  }
}
</script>
