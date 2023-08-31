export interface IPageContent {
    home: string;
    about: string;
    contact: string;
    login: string;
    register: string;
    logout: string;
    other_page: string;
    faq: string;
    terms: string;
    privacy: string;
    contact_us: string;
    up_to_date: string;
    close_watch: string;
    submit: string;
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const HeaderContent: ITranslations = {
    en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
        register: 'Register',
        logout: 'Logout',
        other_page: 'Other Page',
        faq: 'FAQ',
        terms: 'Terms of Service',
        privacy: 'Privacy',
        contact_us: 'Contact Us',
        up_to_date: 'Stay Updated',
        close_watch: 'Keep a close watch on your favourite Currencies',
        submit: 'Submit'
    },
    es: {
        "home": "Inicio",
        "about": "Acerca de",
        "contact": "Contacto",
        "login": "Iniciar sesión",
        "register": "Registrarse",
        "logout": "Cerrar sesión",
        "other_page": "Otra página",
        "faq": "Preguntas más frecuentes",
        "terms": "Términos",
        "privacy": "Intimidad",
        "contact_us": "Contáctenos",
        "up_to_date": "Manténgase actualizado",
        "close_watch": "Manténgase atento a sus monedas favoritas",
        "submit": "Enviar"
      },
    de: {
        "home": "Zuhause",
        "about": "Über",
        "contact": "Kontakt",
        "login": "Anmeldung",
        "register": "Registrieren",
        "logout": "Ausloggen",
        "other_page": "Andere Seite",
        "faq": "FAQ",
        "terms": "Bedingungen",
        "privacy": "Privatsphäre",
        "contact_us": "Kontaktiere uns",
        "up_to_date": "Bleiben Sie auf dem Laufenden",
        "close_watch": "Behalten Sie Ihre Lieblingswährungen im Auge",
        "submit": "einreichen"
        },
        zh: {
        "home": "家",
        "about": "关于",
        "contact": "联系",
        "login": "登录",
        "register": "寄存器",
        "logout": "登出",
        "other_page": "其他页面",
        "faq": "常见问题",
        "terms": "条款",
        "privacy": "隐私",
        "contact_us": "联系我们",
        "up_to_date": "保持更新",
        "close_watch": "密切关注您最喜欢的货币",
        "submit": "提交"
        },
        ko: {
        "home": "집",
        "about": "약",
        "contact": "접촉",
        "login": "로그인",
        "register": "레지스터",
        "logout": "로그 아웃",
        "other_page": "다른 페이지",
        "faq": "자주 묻는 질문",
        "terms": "조건",
        "privacy": "은둔",
        "contact_us": "연락처",
        "up_to_date": "최신 정보 유지",
        "close_watch": "좋아하는 통화를 주시하십시오.",
        "submit": "제출"
        },
        tr: {
        "home": "Ev",
        "about": "hakkında",
        "contact": "İletişim",
        "login": "Oturum aç",
        "register": "Kayıt olmak",
        "logout": "Çıkış Yap",
        "other_page": "Diğer sayfa",
        "faq": "SSS",
        "terms": "Koşullar",
        "privacy": "Gizlilik",
        "contact_us": "Bize Ulaşın",
        "up_to_date": "Güncel Kal",
        "close_watch": "Favori Para Birimlerinizi Yakından Takip Edin",
        "submit": "Sunmak"
        }
  }