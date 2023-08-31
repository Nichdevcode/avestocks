export interface IPageContent {
    title: string;
    content: string;
    first_name: string;
    last_name: string;
    phone: string;
    nationality: string;
    currency: string;
    email: string;
    password: string;
    register: string;
    login: string;
    loginLink: string;
    privacy: string;
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const RegisterContent: ITranslations = {
    en: {
        title: 'Create an Account',
        content: 'Create an account to Get Started',
        first_name: 'First Name',
        last_name: 'Last Name',
        phone: "Phone Number",
        email: 'Email Address',
        password: 'Password',
        register: 'Register',
        login: 'Already have an account?',
        loginLink: 'Login',
        nationality:  "Nationality",
        currency: "Currency",
        privacy: "I agree to Avestocks' Terms & Conditions and Privacy Policy"
    },
    es: {
        title: 'Crear una cuenta',
        content: 'Crea una cuenta para comenzar',
        first_name: 'Nombre',
        last_name: 'Apellido',
        phone: "Número de teléfono",
        email: 'Correo electrónico',
        password: 'Contraseña',
        register: 'Registrarse',
        login: '¿Ya tienes una cuenta?',
        loginLink: 'Iniciar sesión',
        nationality:  "Nacionalidad",
        currency: "Moneda",
        privacy: 'Acepto los Términos y Condiciones y la Política de Privacidad de Avestocks'
    },
    de: {
        title: 'Konto erstellen',
        content: 'Erstellen Sie ein Konto, um loszulegen',
        first_name: 'Vorname',
        last_name: 'Nachname',
        phone: "Telefonnummer",
        email: 'E-Mail-Addresse',
        password: 'Passwort',
        register: 'Registrieren',
        login: 'Sie haben bereits ein Konto?',
        loginLink: 'Anmeldung',
        nationality:  "Nationalität",
        currency: "Währung",
        privacy: 'Ich akzeptiere die Allgemeinen Geschäftsbedingungen und die Datenschutzrichtlinie von Avestocks'
    },
    zh: {
        title: '创建帐号',
        content: '创建帐户开始',
        first_name: '名字',
        last_name: '姓',
        phone: "电话号码",
        email: '电子邮件地址',
        password: '密码',
        register: '寄存器',
        login: '已经有一个帐户？',
        loginLink: '登錄',
        nationality:  "国籍",
        currency: "货币",
        privacy: '我同意Avestocks的条款和条件以及隐私政策'
    },
    ko: {
        title: '계정 생성',
        content: '시작하려면 계정을 만드십시오',
        first_name: '이름',
        last_name: '성',
        phone: "전화 번호",
        email: '이메일 주소',
        password: '암호',
        register: '레지스터',
        login: '계정이 이미 있습니까?',
        loginLink: '로그인',
        nationality:  "국적",
        currency: "통화",
        privacy: 'Avestocks의 약관 및 개인 정보 보호 정책에 동의합니다'
    },
    tr: {
        title: 'Hesap oluştur',
        content: 'Başlamak için bir hesap oluşturun',
        first_name: 'Ad',
        last_name: 'Soyad',
        phone: "Telefon numarası",
        email: 'E-posta adresi',
        password: 'Parola',
        register: 'Kayıt ol',
        login: 'Zaten bir hesabınız var mı?',
        loginLink: 'Oturum aç',
        nationality:  "Milliyet",
        currency: "Para birimi",
        privacy: 'Avestocks Gizlilik Politikası ve Şartlar ve Koşullarını kabul ediyorum'
    }
  }
      
      
      
      
      
      
  