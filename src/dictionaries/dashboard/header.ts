export interface IPageContent {
    home: string;
    account: string;
    invest: string;
    deposit: string;
    withdraw: string;
    settings: string;
    logout: string;
    dashboard: string;
    
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
        account: 'Account',
        invest: 'Invest',
        deposit: 'Deposit',
        withdraw: 'Withdrawal',
        settings: 'Settings',
        logout: 'Logout',
        dashboard: 'Dashboard',
    },
    es: {
        "home": "Inicio",
        "account": "Cuenta",
        "invest": "Invertir",
        "deposit": "Depositar",
        "withdraw": "Retirar",
        "settings": "Configuraciones",
        "logout": "Cerrar sesión",
        "dashboard": "Tablero",
      },
    de: {
        "home": "Zuhause",
        "account": "Konto",
        "invest": "Investieren",
        "deposit": "Hinterlegen",
        "withdraw": "Abheben",
        "settings": "die Einstellungen",
        "logout": "Ausloggen",
        "dashboard": "Instrumententafel",
      },
      zh: {
        "home": "家",
        "account": "帐户",
        "invest": "投资",
        "deposit": "存款",
        "withdraw": "撤回",
        "settings": "设置",
        "logout": "登出",
        "dashboard": "仪表板",
        },
        ko: {
        "home": "집",
        "account": "계정",
        "invest": "투자하다",
        "deposit": "예금",
        "withdraw": "철수", 
        "settings": "설정",
        "logout": "로그 아웃",
        "dashboard": "계기반",
        },
        tr: {
        "home": "Ev",
        "account": "Hesap",
        "invest": "Yatırım",
        "deposit": "Depozito",
        "withdraw": "Para çekmek",
        "settings": "Ayarlar",
        "logout": "Çıkış Yap",
        "dashboard": "Gösterge Paneli",
        }
  }