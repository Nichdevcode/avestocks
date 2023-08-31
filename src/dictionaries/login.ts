  export interface IPageContent {
    title: string;
    content: string;
    email: string;
    password: string;
    forgotPassword: string;
    login: string;
    register: string;
    registerLink: string;
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const LoginContent: ITranslations = {
    en: {
      title: 'Welcome Back!',
      content: 'Sign in to continue to Avestock',
      email: 'Email Address',
      password: 'Password',
      forgotPassword: 'Forgot Password?',
      login: 'Sign In',
      register: 'Register',
      registerLink: 'Don\'t have an account?'
    },
    es: {
      title: 'Bienvenido de nuevo!',
      content: 'Inicia sesión para continuar con Avestock',
      email: 'Correo electrónico',
      password: 'Contraseña',
      forgotPassword: '¿Olvidaste tu contraseña?',
      login: 'Iniciar sesión',
      register: 'Registrarse',
      registerLink: '¿No tienes una cuenta?'
    },
    de: {
      title: 'Willkommen zurück!',
      content: 'Bitte melden Sie sich an, um fortzufahren',
      email: 'Email',
      password: 'Passwort',
      forgotPassword: 'Passwort vergessen?',
      login: 'Anmeldung',
      register: 'Registrieren',
      registerLink: 'Sie haben noch keinen Account?'
    },
    zh: {
      title: '歡迎回來！',
      content: '登錄以繼續',
      email: '電子郵件',
      password: '密碼',
      forgotPassword: '忘記密碼？',
      login: '登錄',
      register: '寄存器',
      registerLink: '沒有帳戶？'
    },
    ko: {
      title: '다시 오신 것을 환영합니다!',
      content: '계속하려면 로그인하십시오',
      email: '이메일',
      password: '암호',
      forgotPassword: '비밀번호를 잊으 셨나요?',
      login: '로그인',
      register: '레지스터',
      registerLink: '계정이 없으십니까?'
    },
    tr: {
      title: 'Tekrar Hoşgeldiniz!',
      content: 'Devam etmek için giriş yapın',
      email: 'E-posta',
      password: 'Parola',
      forgotPassword: 'Parolanızı mı unuttunuz?',
      login: 'Oturum aç',
      register: 'Kayıt ol',
      registerLink: 'Hesabınız yok mu?'
    }
  }
      
      
      
      
      
      
  