  export interface IPageContent {
    title: string;
    investment: string;
    plans: string;
    plan: string;
    range: string;
    duration: string;
    roi: string;
    principal: string;
    withdraw: string;
    days: string;
    invest_now: string;
    wallet_balance: string;
    minimum: string;
    maximum: string;
    invest: string;
    amount: string;
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const DashboardInvestContent: ITranslations = {
    en: {
      title: 'Live Investments',
      investment: 'Investments',
      plans: 'Plans',
      plan: 'Plan',
      range: 'Investment Range',
      duration: 'Duration',
      roi: 'ROI',
      principal: 'Principal Return after completion',
      withdraw: 'Withdraw Principal at any time 10% fee will be charged',
      days: 'Days',
      invest_now: 'Invest Now',
      wallet_balance: 'Wallet Balance',
      minimum: 'Minimum Deposit',
      maximum: 'Maximum Deposit',
      invest: 'Invest',
      amount: 'Enter Amount',
    },
    es: {
      title: 'Inversiones en vivo',
      investment: 'Inversiones',
      plans: 'Planes',
      plan: 'Plan',
      range: 'Rango de inversión',
      duration: 'Duración',
      roi: 'ROI',
      principal: 'Retorno de capital principal después de la finalización',
      withdraw: 'Retirar el principal en cualquier momento se cobrará una tarifa del 10%',
      days: 'Dias',
      invest_now: 'Invierte ahora',
      wallet_balance: 'Saldo de la billetera',
      minimum: 'Depósito mínimo',
      maximum: 'Depósito máximo',
      invest: 'Invertir',
      amount: 'Ingrese la cantidad',
    },
    de: {
      title: 'Live-Investitionen',
      investment: 'Investitionen',
      plans: 'Pläne',
      plan: 'Plan',
      range: 'Investitionsbereich',
      duration: 'Dauer',
      roi: 'ROI',
      principal: 'Hauptkapitalrückgabe nach Abschluss',
      withdraw: 'Ziehen Sie das Hauptkapital jederzeit ab. Es wird eine Gebühr von 10% erhoben',
      days: 'Tage',
      invest_now: 'Jetzt investieren',
      wallet_balance: 'Brieftaschenguthaben',
      minimum: 'Mindesteinlage',
      maximum: 'Maximale Einzahlung',
      invest: 'Investieren',
      amount: 'Geben Sie den Betrag ein',
    },
    zh: {
      title: '实时投资',
      investment: '投资',
      plans: '计划',
      plan: '计划',
      range: '投资范围',  
      duration: '持续时间',
      roi: '投资回报率',
      principal: '完成后的本金回报',
      withdraw: '随时提取本金，将收取10％的费用',
      days: '天',
      invest_now: '立即投资',
      wallet_balance: '钱包余额',
      minimum: '最低存款',
      maximum: '最高存款',
      invest: '投资',
      amount: '输入金额',
    },
    ko: {
      title: '실시간 투자',
      investment: '투자',
      plans: '계획',
      plan: '계획',
      range: '투자 범위',
      duration: '기간',
      roi: '투자 수익률',
      principal: '완료 후 원금 반환',
      withdraw: '원금을 언제든지 인출하고 10 %의 수수료가 부과됩니다.',
      days: '일',
      invest_now: '지금 투자',
      wallet_balance: '지갑 잔액',
      minimum: '최소 입금',
      maximum: '최대 입금',
      invest: '투자',
      amount: '금액 입력',
    },
    tr: {
      title: 'Canlı Yatırımlar',
      investment: 'Yatırımlar',
      plans: 'Planlar',
      plan: 'Plan',
      range: 'Yatırım Aralığı',
      duration: 'Süre',
      roi: 'ROI',
      principal: 'Tamamlanma sonrası ana sermaye iadesi',
      withdraw: 'Ana sermayeyi herhangi bir zamanda çekin, %10 ücret alınacaktır',
      days: 'Günler',
      invest_now: 'Şimdi yatırım yapın',
      wallet_balance: 'Cüzdan Bakiyesi',
      minimum: 'Minimum Depozito',
      maximum: 'Maksimum Depozito',
      invest: 'Yatırım',
      amount: 'Miktarı girin',
    },
  }