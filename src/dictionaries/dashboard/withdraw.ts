  export interface IPageContent {
    title: string;
    subtitle?: string;
    subtitle_text?: string;
    via_bank?: string;
    bank: string;
    transactions: string;
    sent_withdraw: string;
    no_transactions: string;
    amount: string;
    wallet: string;
    bank_name?: string;
    account_name?: string;
    account_number?: string;
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
  
  export const DashboardWithdrawContent: ITranslations = {
    en: {
      title: 'Withdrawal',
      subtitle: 'Withdraw Fund Via Wallets',
      subtitle_text: 'click to initiate withdrawal',
      via_bank: 'Withdraw Funds Via Bank',
      bank: 'Bank',
      transactions: 'Recent Transactions',
      sent_withdraw: 'sent withdrawal request',
      no_transactions: 'No Recent transactions',
      amount: 'Enter Amount',
      wallet: 'Enter BTC Wallet',
      bank_name: 'Enter Bank Name',
      account_name: 'Enter Account Name',
      account_number: 'Enter Account Number',
      submit: 'Submit',
    },
    es: {
      title: 'Retiro',
      subtitle: 'Retirar fondos a través de billeteras',
      subtitle_text: 'haga clic para iniciar el retiro',
      via_bank: 'Retirar fondos a través del banco',
      bank: 'Banco',
      transactions: 'Transacciones recientes',
      sent_withdraw: 'solicitud de retiro enviada',
      no_transactions: 'No hay transacciones recientes',
      amount: 'Ingrese la cantidad',
      wallet: 'Ingrese la billetera',
      bank_name: 'Ingrese el nombre del banco',
      account_name: 'Ingrese el nombre de la cuenta',
      account_number: 'Ingrese el número de cuenta',
      submit: 'Enviar',
    },
    de: {
      title: 'Auszahlung',
      subtitle: 'Geld abheben über Brieftaschen',
      subtitle_text: 'Klicken Sie hier, um die Auszahlung zu starten',
      via_bank: 'Geld über die Bank abheben',
      // bank translation in de is the same as in en
      bank: 'Bank', 
      transactions: 'Letzte Transaktionen',
      sent_withdraw: 'Auszahlungsanfrage gesendet',
      no_transactions: 'Keine aktuellen Transaktionen',
      amount: 'Menge eingeben',
      wallet: 'Geldbörse eingeben',
      bank_name: 'Banknamen eingeben',
      account_name: 'Kontoname eingeben',
      account_number: 'Kontonummer eingeben',
      submit: 'einreichen',
    },
    zh: {
      title: '提款',
      subtitle: '通过钱包提款',
      subtitle_text: '点击以发起提款',
      via_bank: '通过银行提取资金',
      bank: '银行',
      transactions: '最近的交易',
      sent_withdraw: '发送提款请求',
      no_transactions: '没有最近的交易',
      amount: '输入金额',
      wallet: '输入钱包',
      bank_name: '输入银行名称',
      account_name: '输入帐户名称',
      account_number: '输入帐号',
      submit: '提交',
    },
    ko: {
      title: '인출',
      subtitle: '지갑을 통해 인출',
      subtitle_text: '인출을 시작하려면 클릭하십시오.',
      via_bank: '은행을 통해 자금 인출',
      bank: '은행',
      transactions: '최근 거래',
      sent_withdraw: '출금 요청 보냄',
      no_transactions: '최근 거래 없음',
      amount: '금액 입력',
      wallet: '지갑 입력',
      bank_name: '은행 이름 입력',
      account_name: '계정 이름 입력',
      account_number: '계좌 번호 입력',
      submit: '제출',
    },
    tr: {
      title: 'Para Çekme',
      subtitle: 'Cüzdanlar Aracılığıyla Para Çekme',
      subtitle_text: 'Para çekmek için tıklayın',
      via_bank: 'Banka Aracılığıyla Para Çekme',
      bank: 'Banka',
      transactions: 'Son İşlemler',
      sent_withdraw: 'çekim isteği gönderildi',
      no_transactions: 'Son işlem yok',
      amount: 'Miktar Girin',
      wallet: 'Cüzdan Girin',
      bank_name: 'Banka Adı Girin',
      account_name: 'Hesap Adı Girin',
      account_number: 'Hesap Numarası Girin',
      submit: 'Sunmak',
    },
  };
  