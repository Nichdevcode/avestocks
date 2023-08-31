  export interface IPageContent {
    title: string;
    regular: string;
    earnings: string;
    investment: string;
    invest: string;
    bonus: string;
    deposits: string;
    withdrawals: string;
    referrals: string;
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const DashboardAccountContent: ITranslations = {
    en: {
      title: 'Account',
      regular: 'Current Balance',
      earnings: 'Total Profit',
      investment: 'Capital', 
      invest: 'Start Investment',
      bonus: 'Bonus',
      deposits: 'Total Deposits',
      withdrawals: 'Total Withdrawals',
      referrals: 'Total Referrals',
    },
    es: {
      title: 'Cuenta',
      regular: 'Saldo actual',
      earnings: 'Ganancias totales',
      investment: "inversión",
      invest: 'Inversión inicial',
      bonus: 'Bono',
      deposits: 'Depósitos totales',
      withdrawals: 'Retiros totales',
      referrals: 'Referencias totales',
    },
    de: {
      title: 'Konto',
      regular: 'Aktueller Kontostand',
      earnings: 'Gesamtgewinn',
      investment: 'Gesamtkapital',
      invest: 'Startinvestition', 
      bonus: 'Bonus',
      deposits: 'Gesamteinlagen',
      withdrawals: 'Gesamtabhebungen',
      referrals: 'Gesamtverweise',
    },
    zh: {
      title: '帐户',
      regular: '当前余额',
      earnings: '总收益',
      investment: '总投资',
      invest: '开始投资',
      bonus: '奖金',
      deposits: '总存款',
      withdrawals: '总提款',
      referrals: '总推荐',
    },
    ko: {
      title: '계정',
      regular: '현재 잔액',
      earnings: '총 수익',
      investment: '총 투자',
      invest: '투자 시작',
      bonus: '보너스',
      deposits: '총 예금액',
      withdrawals: '총 인출',
      referrals: '총 추천',
    },
    tr: {
      title: 'Hesap',
      regular: 'Mevcut Bakiye',
      earnings: 'Toplam Kazanç',
      investment: 'Toplam Yatırım',
      invest: 'Yatırıma Başla',
      bonus: 'Bonus',
      deposits: 'Toplam Mevduat',
      withdrawals: 'Toplam Çekilen',
      referrals: 'Toplam Yönlendirmeler',
    },
  };