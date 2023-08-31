  export interface IPageContent {
    title: string;
    status: string[];
    unverified: string;
    verify_now: string;
    balance_title: string;
    deposit: string;
    referral_title: string;
    refer: string;
    table_title: string;
    withdraw: string;
    invest: string;
    currency: string;
    action: string;
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const DashboardHomeContent: ITranslations = {
    en: {
      title: 'Welcome',
      status: ['Unverified', 'Verified', 'Pending'],
      unverified: 'Your account is not verified. Please verify your account to access all features',
      verify_now: 'Verify Now',
      balance_title: 'My Balance',
      deposit: 'Deposit',
      referral_title: 'Invite Friends & get extra income!',
      refer: 'Earn More',
      table_title: 'Deposit Wallets',
      withdraw: 'Withdraw',
      invest: 'Invest',
      currency: 'Currency',
      action: 'Action',
    },
    es: {
      title: 'Bienvenido',
      status: ['No verificado', 'Verificado', 'Pendiente'],
      unverified: 'Su cuenta no está verificada. Verifique su cuenta para acceder a todas las funciones',
      verify_now: 'Verificar ahora',
      balance_title: 'Mi saldo',
      deposit: 'Depositar',
      referral_title: '¡Invita a tus amigos y obtén ingresos adicionales!',
      refer: 'Ganar más',
      table_title: 'Billeteras de depósito',
      withdraw: 'Retirar',
      invest: 'Invertir',
      currency: 'Moneda',
      action: 'Acción',
    },
    de: {
      title: 'Willkommen',
      status: ['Nicht verifiziert', 'Verifiziert', 'Ausstehend'],
      unverified: 'Ihr Konto ist nicht verifiziert. Bitte verifizieren Sie Ihr Konto, um auf alle Funktionen zugreifen zu können',
      verify_now: 'Jetzt überprüfen',
      balance_title: 'Mein Gleichgewicht',
      deposit: 'Hinterlegen',
      referral_title: 'Laden Sie Freunde ein und erhalten Sie zusätzliches Einkommen!',
      refer: 'Verdienen Sie mehr',
      table_title: 'Einzahlungsbrieftaschen',
      withdraw: 'Abheben',
      invest: 'Investieren',
      currency: 'Währung',
      action: 'Aktion',
    },
    zh: {
      title: '欢迎',
      status: ['未验证', '已验证', '待定'],
      unverified: '您的帐户尚未验证。 请验证您的帐户以访问所有功能',
      verify_now: '立即验证',
      balance_title: '我的余额',
      deposit: '存款',
      referral_title: '邀请朋友并获得额外收入！',
      refer: '赚更多',
      table_title: '存款钱包',
      withdraw: '撤回',
      invest: '投资',
      currency: '货币',
      action: '行动',
    },
    ko: {
      title: '환영합니다',
      status: ['미인증', '인증 됨', '대기 중'],
      unverified: '귀하의 계정은 인증되지 않았습니다. 모든 기능에 액세스하려면 계정을 인증하십시오',
      verify_now: '지금 확인',
      balance_title: '내 잔액',
      deposit: '예금',
      referral_title: '친구를 초대하고 추가 수입을 올리세요!',
      refer: '더 많이 벌기',
      table_title: '입금 지갑',
      withdraw: '철수',
      invest: '투자',
      currency: '통화',
      action: '동작',
    },
    tr: {
      title: 'Hoşgeldiniz',
      status: ['Doğrulanmadı', 'Doğrulanmış', 'Beklemede'],
      unverified: 'Hesabınız doğrulanmadı. Tüm özelliklere erişmek için hesabınızı doğrulayın',
      verify_now: 'Şimdi doğrula',
      balance_title: 'Bakiyem',
      deposit: 'Yatırma',
      referral_title: 'Arkadaşlarınızı davet edin ve ek gelir elde edin!',
      refer: 'Daha fazla kazan',
      table_title: 'Depozito Cüzdanları',
      withdraw: 'Para çekmek',
      invest: 'Yatırım',
      currency: 'Para birimi',
      action: 'Aksiyon',
    },
  }
      
      
  