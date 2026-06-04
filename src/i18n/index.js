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
    home: {
      heroBadge: 'Front-end developer',
      heroTitle: 'Hi, I’m AKOGUTETA H.P Merylise — building thoughtful websites and apps.',
      heroDescription: 'I create modern digital experiences using JavaScript, Vue, and clean design. Browse my portfolio to see projects, skills, and how to get in touch.',
      heroProjects: 'View projects',
      heroContact: 'Contact me',
      heroImageAlt: 'AKOGUTETA H.P Merylise profile photo',
      stats: {
        yearsLabel: 'Experience',
        yearsValue: '2+ Years',
        projectsLabel: 'Projects',
        projectsValue: '8+ Completed',
        toolsLabel: 'Tools',
        toolsValue: 'Vue / Tailwind'
      },
      cards: {
        web: {
          title: 'Web development',
          description: 'Building responsive and accessible websites with modern front-end tools.'
        },
        python: {
          title: 'Python projects',
          description: 'Automating tasks and exploring data with Python scripts and simple APIs.'
        },
        design: {
          title: 'Design systems',
          description: 'Creating clean interfaces and consistent visual systems for digital products.'
        }
      },
      project1: {
        label: 'Featured project · 2025',
        title: 'Learnify',
        description: 'A learning platform designed to help students study smarter with interactive lessons and progress tracking.',
        tags: 'EdTech · JavaScript · UI'
      },
      project2: {
        label: 'Collaboration · 2025',
        title: 'CareBridge',
        description: 'A healthcare coordination platform built with empathy, connecting families and caregivers more easily.',
        tags: 'HealthTech · Teamwork · JavaScript',
        imageAlt: 'CareBridge app preview'
      }
    },
    about: {
      tag: 'About me',
      title: 'Software developer, student, and problem solver.',
      subtitle: 'I build useful digital experiences while learning new tools and sharpening my skills.',
      imageAlt: 'AKOGUTETA H.P Merylise portrait',
      paragraph1: 'Hi — I’m AKOGUTETA H.P Merylise, a software developer from Rwanda studying at SOS Technical High School.',
      paragraph2: 'My coding journey began in Senior 3 after I joined a competition organized by AmaliTech. That moment showed me how powerful and rewarding building software can be.',
      paragraph3: 'I also attended development sessions at the US Embassy, where I strengthened my programming knowledge and connected with other young developers.',
      paragraph4: 'Today I focus on JavaScript and Python, turning projects like Learnify and CareBridge into real experiences with clean design and practical features.',
      paragraph5: 'When I am not coding, I enjoy studying, helping friends learn, and planning what to build next.',
      badge1: 'Rwanda',
      badge2: 'SOS Technical High School',
      badge3: 'JavaScript & Python',
      badge4: 'Building with care'
    },
    projects: {
      sectionTag: 'Projects',
      title: 'Things I’ve built.',
      description: 'A selection of projects I’ve designed and developed — solo and in teams.',
      project1: {
        label: 'Solo project · 2025',
        title: 'Learnify',
        description: 'A learning platform built with interactive lessons, clear progress tracking, and a distraction-free interface.',
        tags: 'EdTech · JavaScript · Full-stack'
      },
      project2: {
        label: 'Group project · 2025',
        title: 'CareBridge',
        description: 'A collaborative healthcare platform connecting caregivers, patients, and families with empathy at the center.',
        tags: 'HealthTech · Teamwork · JavaScript',
        imageAlt: 'CareBridge overview graphic'
      },
      cta: 'Get in touch →'
    },
    skills: {
      sectionTag: 'Skills',
      title: 'Tools I love working with.',
      description: 'Languages and technologies I use to bring ideas to life — with honest proficiency levels.',
      languages: {
        title: 'Languages',
        javascript: 'JavaScript',
        python: 'Python',
        html: 'HTML5',
        css: 'CSS3'
      },
      concepts: {
        title: 'Concepts',
        responsive: 'Responsive design',
        problemSolving: 'Problem solving',
        versionControl: 'Version control (Git)',
        teamwork: 'Team collaboration'
      },
      tools: {
        title: 'Tools & technologies',
        javascript: 'JavaScript',
        python: 'Python',
        html: 'HTML5',
        css: 'CSS3',
        git: 'Git & GitHub',
        vscode: 'VS Code',
        node: 'Node.js',
        figma: 'Figma'
      },
      soft: {
        title: 'Soft skills',
        communication: 'Communication',
        curiosity: 'Curiosity',
        discipline: 'Discipline',
        adaptability: 'Adaptability',
        teamwork: 'Teamwork',
        time: 'Time management'
      },
      levels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        strong: 'Strong'
      }
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
    },
    experience: {
      title: 'Experience',
      description: 'Professional roles and brief descriptions.'
    },
    materials: {
      title: 'Materials',
      description: 'Resources and learning materials I use while building projects.'
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
    },
    home: {
      title: 'Bem-vindo ao meu portfólio',
      description: 'Um portfólio moderno em Vue.js com Tailwind CSS'
    },
    about: {
      title: 'Sobre',
      description: 'Esta é a página sobre. Substitua pelo seu currículo e histórico.'
    },
    projects: {
      title: 'Projetos',
      description: 'Liste seus projetos aqui. Cada projeto pode linkar para um repositório ou demo.'
    },
    skills: {
      title: 'Habilidades',
      description: 'Habilidades e ferramentas principais.',
      frontend: ['Vue 3', 'JavaScript (ES6+)', 'HTML & CSS', 'Tailwind CSS'],
      tools: ['Vite', 'Git / GitHub', 'Vercel', 'NPM']
    },
    experience: {
      title: 'Experiência',
      description: 'Cargos profissionais e descrições breves.'
    },
    contact: {
      title: 'Contato',
      description: 'Adicione seus detalhes de contato ou um formulário aqui.'
    }
  },
  zh: {
    nav: { home: '首页', about: '关于', projects: '项目', skills: '技能', experience: '经验', materials: '材料', contact: '联系' },
    home: { title: '欢迎来到我的作品集', description: '一个使用 Tailwind CSS 的现代 Vue.js 作品集' },
    about: { title: '关于', description: '这是关于页面。用你的简历替换。' },
    projects: { title: '项目', description: '在此列出你的项目。每个项目可链接到仓库或演示。' },
    skills: { title: '技能', description: '核心技能和工具。', frontend: ['Vue 3', 'JavaScript (ES6+)', 'HTML & CSS', 'Tailwind CSS'], tools: ['Vite', 'Git / GitHub', 'Vercel', 'NPM'] },
    experience: { title: '经验', description: '职业角色和简要描述。' },
    contact: { title: '联系', description: '在此添加你的联系信息或联系表单。' }
  },
  ja: {
    nav: { home: 'ホーム', about: '概要', projects: 'プロジェクト', skills: 'スキル', experience: '経験', materials: '資料', contact: '連絡' },
    home: { title: 'ポートフォリオへようこそ', description: 'Tailwind CSS を使用したモダンな Vue.js ポートフォリオ' },
    about: { title: '概要', description: 'これは概要ページです。あなたの経歴や背景に置き換えてください。' },
    projects: { title: 'プロジェクト', description: 'ここにプロジェクトを一覧にしてください。各プロジェクトはリポジトリやデモにリンクできます。' },
    skills: { title: 'スキル', description: 'コアスキルとツール。', frontend: ['Vue 3', 'JavaScript (ES6+)', 'HTML & CSS', 'Tailwind CSS'], tools: ['Vite', 'Git / GitHub', 'Vercel', 'NPM'] },
    experience: { title: '経験', description: '職務と簡単な説明。' },
    contact: { title: '連絡', description: 'ここに連絡先情報やお問い合わせフォームを追加してください。' }
  },
  ko: {
    nav: { home: '홈', about: '소개', projects: '프로젝트', skills: '기술', experience: '경력', materials: '자료', contact: '연락처' },
    home: { title: '내 포트폴리오에 오신 것을 환영합니다', description: 'Tailwind CSS로 구성된 모던 Vue.js 포트폴리오' },
    about: { title: '소개', description: '이 페이지는 소개 페이지입니다. 이력서와 배경으로 교체하세요.' },
    projects: { title: '프로젝트', description: '여기에 프로젝트를 나열하세요. 각 프로젝트는 저장소나 데모로 연결될 수 있습니다.' },
    skills: { title: '기술', description: '핵심 기술 및 도구.', frontend: ['Vue 3', 'JavaScript (ES6+)', 'HTML & CSS', 'Tailwind CSS'], tools: ['Vite', 'Git / GitHub', 'Vercel', 'NPM'] },
    experience: { title: '경력', description: '직무와 간단한 설명.' },
    contact: { title: '연락처', description: '여기에 연락처 정보나 문의 양식을 추가하세요.' }
  },
  hi: {
    nav: { home: 'होम', about: 'बारे में', projects: 'प्रोजेक्ट्स', skills: 'कौशल', experience: 'अनुभव', materials: 'सामग्री', contact: 'संपर्क' },
    home: { title: 'मेरे पोर्टफोलियो में आपका स्वागत है', description: 'Tailwind CSS के साथ आधुनिक Vue.js पोर्टफोलियो' },
    about: { title: 'बारे में', description: 'यह बारे में पेज है। इसे अपने बायो और पृष्ठभूमि से बदलें।' },
    projects: { title: 'प्रोजेक्ट्स', description: 'यहां अपने प्रोजेक्ट सूचीबद्ध करें। प्रत्येक प्रोजेक्ट रैपोजिटरी या लाइव डेमो लिंक कर सकता है।' },
    skills: { title: 'कौशल', description: 'मुख्य कौशल और उपकरण।', frontend: ['Vue 3', 'JavaScript (ES6+)', 'HTML & CSS', 'Tailwind CSS'], tools: ['Vite', 'Git / GitHub', 'Vercel', 'NPM'] },
    experience: { title: 'अनुभव', description: 'पेशेवर भूमिकाएँ और सारांश वर्णन।' },
    contact: { title: 'संपर्क', description: 'यहाँ अपना संपर्क विवरण या संपर्क फ़ॉर्म जोड़ें।' }
  },
  rw: {
    nav: { home: 'Ahabanza', about: 'Ibyerekeye', projects: 'Imishinga', skills: 'Ubumenyi', experience: 'Uburambe', materials: 'Ibikoresho', contact: 'Vugana' },
    home: { title: 'Ikaze kuri porutifolio yanjye', description: 'Porutifolio ya Vue.js igezweho hamwe na Tailwind CSS' },
    about: { title: 'Ibyerekeye', description: 'Iyi ni paji yerekana ubuzima bwawe. Simbuza n\'amakuru y\'ubuzima bwawe.' },
    projects: { title: 'Imishinga', description: 'Tondeka imishinga yawe hano. Buri mushinga ushobora guhuzwa na repository cyangwa demo.' },
    skills: { title: 'Ubumenyi', description: 'Ubumenyi n\'ibikoresho by\'ingenzi.', frontend: ['Vue 3', 'JavaScript (ES6+)', 'HTML & CSS', 'Tailwind CSS'], tools: ['Vite', 'Git / GitHub', 'Vercel', 'NPM'] },
    experience: { title: 'Uburambe', description: 'Imirimo n\'ibisobanuro bigufi.' },
    contact: { title: 'Vugana', description: 'Shyiramo amakuru yawe yo kuvugana cyangwa ifishi hano.' }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
