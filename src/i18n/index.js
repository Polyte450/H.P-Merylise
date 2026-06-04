import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      materials: 'Materials',
      contact: 'Contact'
    },
    contact: {
      sectionTag: 'Contact',
      title: 'Let’s build something together.',
      description: 'Whether you have a question, a project idea, or just want to say hi — my inbox is open.',
      getInTouchTitle: 'Get in touch',
      getInTouchDescription: 'The fastest way to reach me is email. I usually reply within a day.',
      labels: {
        email: 'Email',
        instagram: 'Instagram',
        location: 'Location'
      },
      values: {
        location: 'Rwanda'
      },
      form: {
        nameLabel: 'Your name',
        emailLabel: 'Your email',
        subjectLabel: 'Subject',
        messageLabel: 'Message',
        namePlaceholder: 'Jane Doe',
        emailPlaceholder: 'jane@example.com',
        subjectPlaceholder: 'Project collaboration',
        messagePlaceholder: 'Tell me about your idea...',
        button: 'Send message →',
        defaultSubject: 'Hello from your portfolio',
        statusOpening: '✓ Opening your email client...'
      }
    }
  },

  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      experience: 'Experiência',
      materials: 'Materiais',
      contact: 'Contato'
    }
  },

  zh: {
    nav: { home: '首页', about: '关于', projects: '项目', skills: '技能', experience: '经验', materials: '材料', contact: '联系' }
  },

  ja: {
    nav: { home: 'ホーム', about: '概要', projects: 'プロジェクト', skills: 'スキル', experience: '経験', materials: '資料', contact: '連絡' }
  },

  ko: {
    nav: { home: '홈', about: '소개', projects: '프로젝트', skills: '기술', experience: '경력', materials: '자료', contact: '연락처' }
  },

  hi: {
    nav: { home: 'होम', about: 'बारे में', projects: 'प्रोजेक्ट्स', skills: 'कौशल', experience: 'अनुभव', materials: 'सामग्री', contact: 'संपर्क' }
  },

  rw: {
    nav: { home: 'Ahabanza', about: 'Ibyerekeye', projects: 'Imishinga', skills: 'Ubumenyi', experience: 'Uburambe', materials: 'Ibikoresho', contact: 'Vugana' }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n