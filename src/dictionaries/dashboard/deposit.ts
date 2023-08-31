  export interface IPageContent {
    title: string;
    via_crypto: string;
    via_crypto_text: string;
    via_bank: string;
    via_bank_text: string;
    submit_proof: string;
    submit_proof_text: string;
    transactions_title: string;
    transactions_text: string;
    no_transactions: string;
    cryto_wallets: string;
    choose_wallet: string;
    click_to_copy: string;
    exact_crypto: string;
    bank_title: string;
    choose_bank: string;
    bank_transfer: string;
    next: string;
    payment_proof: string;
    choose_method: string;
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
  
  export const DashboardDepositContent: ITranslations = {
    en: {
      title: 'Deposit',
      via_crypto: 'Fund Via Cryto Wallet',
      via_crypto_text: 'click to view address details',
      via_bank: 'Fund Via Bank Transfer',
      via_bank_text: 'click to view bank details',
      submit_proof: 'Submit Proof of Payment',
      submit_proof_text: 'click to submit proof of payment',
      transactions_title: 'Recent Transactions',
      transactions_text: 'sent proof of payment',
      no_transactions: 'No recent transactions',
      cryto_wallets: 'Crypto Wallets',
      choose_wallet: 'Choose a payment method',
      click_to_copy: 'Click the icon below to copy the wallet address or scan the QR-code and procced to payment',
      exact_crypto: ' Make sure you send the exact amount of BTC as indicated above, otherwise your deposit will not be credited to your account.',
      bank_title: 'Bank Transfer',
      choose_bank: 'Choose a bank',
      bank_transfer: 'Make a transfer or deposit to the details below',
      next: 'Next',
      payment_proof: 'Payment Proof',
      choose_method: 'Choose a payment method',
      submit: 'Submit',
    },
    es: {
      title: 'Depositar',
      via_crypto: 'Fondo a través de Cryto Wallet',
      via_crypto_text: 'haga clic para ver los detalles de la dirección',
      via_bank: 'Fondo a través de transferencia bancaria',
      via_bank_text: 'haga clic para ver los detalles del banco',
      submit_proof: 'Enviar comprobante de pago',
      submit_proof_text: 'haga clic para enviar el comprobante de pago',
      transactions_title: 'Transacciones recientes',
      transactions_text: 'envió comprobante de pago',
      no_transactions: 'No hay transacciones recientes',
      cryto_wallets: 'Billeteras de criptomonedas',
      choose_wallet: 'Elija un método de pago',
      click_to_copy: 'Haga clic en el icono a continuación para copiar la dirección de la billetera o escanee el código QR y proceda al pago',
      exact_crypto: ' Asegúrese de enviar la cantidad exacta de BTC como se indica arriba, de lo contrario, su depósito no se acreditará en su cuenta.',
      bank_title: 'Transferencia bancaria',
      choose_bank: 'Elija un banco',
      bank_transfer: 'Realice una transferencia o depósito a los detalles a continuación',
      next: 'Siguiente',
      payment_proof: 'Comprobante de pago',
      choose_method: 'Elija un método de pago',
      submit: 'Enviar',
    },
    de: {
      title: 'Hinterlegen',
      via_crypto: 'Fonds über Cryto Wallet',
      via_crypto_text: 'Klicken Sie hier, um die Adressdetails anzuzeigen',
      via_bank: 'Fonds über Banküberweisung',
      via_bank_text: 'Klicken Sie hier, um die Bankdaten anzuzeigen',
      submit_proof: 'Zahlungsnachweis einreichen',
      submit_proof_text: 'Klicken Sie hier, um den Zahlungsnachweis einzureichen',
      transactions_title: 'Letzte Transaktionen',
      transactions_text: 'hat den Zahlungsnachweis gesendet',
      no_transactions: 'Keine aktuellen Transaktionen',
      cryto_wallets: 'Krypto-Brieftaschen',
      choose_wallet: 'Wählen Sie eine Zahlungsmethode',
      click_to_copy: 'Klicken Sie auf das Symbol unten, um die Wallet-Adresse zu kopieren, oder scannen Sie den QR-Code und fahren Sie mit der Zahlung fort',
      exact_crypto: ' Stellen Sie sicher, dass Sie den genauen Betrag an BTC senden, wie oben angegeben. Andernfalls wird Ihre Einzahlung nicht auf Ihr Konto gutgeschrieben.',
      bank_title: 'Banküberweisung',
      choose_bank: 'Wählen Sie eine Bank',
      bank_transfer: 'Tätigen Sie eine Überweisung oder Einzahlung an die unten angegebenen Details',
      next: 'Nächster',
      payment_proof: 'Zahlungsnachweis',
      choose_method: 'Wählen Sie eine Zahlungsmethode',
      submit: 'Einreichen',
    },
    zh: {
      title: '存款',
      via_crypto: '通过Cryto钱包提供资金',
      via_crypto_text: '点击查看地址详细信息',
      via_bank: '通过银行转账提供资金',
      via_bank_text: '点击查看银行详细信息',
      submit_proof: '提交付款证明',
      submit_proof_text: '点击提交付款证明',
      transactions_title: '最近的交易',
      transactions_text: '发送付款证明',
      no_transactions: '最近没有交易',
      cryto_wallets: '加密钱包',
      choose_wallet: '选择付款方式',
      click_to_copy: '单击下面的图标以复制钱包地址或扫描QR码并继续付款',
      exact_crypto: ' 请确保您发送的BTC金额与上面指示的金额完全相同，否则您的存款将不会记入您的帐户。',
      bank_title: '银行转账',
      choose_bank: '选择一家银行',
      bank_transfer: '向下面的详细信息转账或存款',
      next: '下一个',
      payment_proof: '付款证明',
      choose_method: '选择付款方式',
      submit: '提交',
    },
    ko: {
      title: '예금',
      via_crypto: '크립토 지갑을 통한 자금',
      via_crypto_text: '주소 세부 정보 보기를 클릭하십시오',
      via_bank: '은행 송금을 통한 자금',
      via_bank_text: '은행 세부 정보 보기를 클릭하십시오',
      submit_proof: '결제 증명서 제출',
      submit_proof_text: '결제 증명서 제출을 클릭하십시오',
      transactions_title: '최근 거래',
      transactions_text: '결제 증명서를 보냈습니다',
      no_transactions: '최근 거래 없음',
      cryto_wallets: '크립토 지갑',
      choose_wallet: '결제 방법 선택',
      click_to_copy: '지갑 주소를 복사하려면 아래 아이콘을 클릭하거나 QR 코드를 스캔하고 결제를 진행하십시오',
      exact_crypto: ' 위에 표시된 BTC 금액과 정확히 일치하는지 확인하십시오. 그렇지 않으면 예금이 계정에 입금되지 않습니다.',
      bank_title: '은행 송금',
      choose_bank: '은행 선택',
      bank_transfer: '아래의 세부 정보로 송금 또는 입금',
      next: '다음 것',
      payment_proof: '결제 증명서',
      choose_method: '결제 방법 선택',
      submit: '제출',
    },
    tr: {
      title: 'Mevduat',
      via_crypto: 'Cryto Cüzdan Aracılığıyla Fon',
      via_crypto_text: 'adres ayrıntılarını görüntülemek için tıklayın',
      via_bank: 'Banka Havalesi Yoluyla Fon',
      via_bank_text: 'banka ayrıntılarını görüntülemek için tıklayın',
      submit_proof: 'Ödeme Kanıtı Gönder',
      submit_proof_text: 'ödeme kanıtı göndermek için tıklayın',
      transactions_title: 'Son İşlemler',
      transactions_text: 'ödeme kanıtı gönderdi',
      no_transactions: 'Son işlem yok',
      cryto_wallets: 'Kripto Cüzdanlar',
      choose_wallet: 'Bir ödeme yöntemi seçin',
      click_to_copy: 'Cüzdan adresini kopyalamak için aşağıdaki simgeye tıklayın veya QR kodunu tarayın ve ödemeye devam edin',
      exact_crypto: ' Yukarıda belirtilen BTC tutarını tam olarak gönderdiğinizden emin olun, aksi takdirde mevduatınız hesabınıza alınmayacaktır.',
      bank_title: 'Banka Havalesi',
      choose_bank: 'Bir banka seçin',
      bank_transfer: 'Aşağıdaki ayrıntılara göre transfer veya depozito yapın',
      next: 'Sonraki',
      payment_proof: 'Ödeme Kanıtı',
      choose_method: 'Bir ödeme yöntemi seçin',
      submit: 'Sunmak',
    },
  }