  export interface IPageContent {
    title: string;
    identity: string;
    identity_click: string;
    verification_steps: string;
    step_1: string;
    step_2: string;
    step_3: string;
    important: string;
    note_1: string;
    note_2: string;
    note_3: string;
    choose_doc: string;
    make_sure: string;
    front: string;
    back: string;
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
  
  export const DashboardKycContent: ITranslations = {
    en: {
      title: 'Upload KYC Documents: Verify Your Identity',
      identity: 'Identity Verification',
      identity_click: 'Click here to verify your identity',
      verification_steps: 'Verification Steps',
      step_1: 'Prepare your KYC documents',
      step_2: 'Upload Your Documents',
      step_3: 'Wait to be verified',
      important: 'Important Notes',
      note_1: 'Ensure the uploaded documents are valid and not expired.',
      note_2: 'Documents should be in a standard format (JPEG, PNG, PDF, etc.).',
      note_3: 'We take your privacy seriously. Your documents will be securely stored and used solely for verification purposes',
      choose_doc: 'Choose Document',
      make_sure: 'Make sure the document shows your photo, full name, date of birth and date of issue.',
      front: 'Front',
      back: 'Back',
      submit: 'Submit',
    },
    es: {
      title: 'Cargar documentos KYC: verifique su identidad',
      identity: 'Verificación de identidad',
      identity_click: 'Haga clic aquí para verificar su identidad',
      verification_steps: 'Pasos de verificación',
      step_1: 'Prepare sus documentos KYC',
      step_2: 'Cargue sus documentos',
      step_3: 'Espere a ser verificado',
      important: 'Notas importantes',
      note_1: 'Asegúrese de que los documentos cargados sean válidos y no hayan caducado.',
      note_2: 'Los documentos deben estar en un formato estándar (JPEG, PNG, PDF, etc.).',
      note_3: 'Nos tomamos su privacidad en serio. Sus documentos se almacenarán de forma segura y se utilizarán únicamente con fines de verificación',
      choose_doc: 'Elegir documento',
      make_sure: 'Asegúrese de que el documento muestre su foto, nombre completo, fecha de nacimiento y fecha de emisión.',
      front: 'Frente',
      back: 'Espalda',
      submit: 'Enviar',
    },
    de: {
      title: 'Laden Sie KYC-Dokumente hoch: Überprüfen Sie Ihre Identität',
      identity: 'Identitätsprüfung',
      identity_click: 'Klicken Sie hier, um Ihre Identität zu überprüfen',
      verification_steps: 'Verifizierungsschritte',
      step_1: 'Bereiten Sie Ihre KYC-Dokumente vor',
      step_2: 'Laden Sie Ihre Dokumente hoch',
      step_3: 'Warten Sie, bis Sie verifiziert wurden',
      important: 'Wichtige Hinweise',
      note_1: 'Stellen Sie sicher, dass die hochgeladenen Dokumente gültig und nicht abgelaufen sind.',
      note_2: 'Dokumente sollten in einem Standardformat (JPEG, PNG, PDF usw.) vorliegen.',
      note_3: 'Wir nehmen Ihre Privatsphäre ernst. Ihre Dokumente werden sicher gespeichert und ausschließlich für Verifizierungszwecke verwendet',
      choose_doc: 'Dokument auswählen',
      make_sure: 'Stellen Sie sicher, dass das Dokument Ihr Foto, Ihren vollständigen Namen, Ihr Geburtsdatum und das Ausstellungsdatum anzeigt.',
      front: 'Vorderseite',
      back: 'Zurück',
      submit: 'einreichen',
    },
    zh: {
      title: '上传KYC文件：验证您的身份',
      identity: '身份验证',
      identity_click: '点击此处验证您的身份',
      verification_steps: '验证步骤',
      step_1: '准备您的KYC文件',
      step_2: '上传您的文件',
      step_3: '等待验证',
      important: '重要说明',
      note_1: '确保上传的文件有效且未过期。',
      note_2: '文件应为标准格式（JPEG，PNG，PDF等）。',
      note_3: '我们严格保护您的隐私。 您的文件将被安全地存储并仅用于验证目的',
      choose_doc: '选择文件',
      make_sure: '确保该文件显示您的照片，全名，出生日期和发行日期。',
      front: '正面',
      back: '背部',
      submit: '提交',
    },
    ko: {
      title: 'KYC 문서 업로드 : 신원 확인',
      identity: '신원 확인',
      identity_click: '여기를 클릭하여 신원을 확인하십시오',
      verification_steps: '확인 단계',
      step_1: 'KYC 문서 준비',
      step_2: '문서 업로드',
      step_3: '확인 대기 중',
      important: '중요 노트',
      note_1: '업로드 한 문서가 유효하고 만료되지 않았는지 확인하십시오.',
      note_2: '문서는 표준 형식 (JPEG, PNG, PDF 등)이어야합니다.',
      note_3: '개인 정보를 중요시합니다. 문서는 안전하게 보관되며 확인 목적으로만 사용됩니다.',
      choose_doc: '문서 선택',
      make_sure: '문서에 사진, 전체 이름, 생년월일 및 발행일이 표시되어 있는지 확인하십시오.',
      front: '앞면',
      back: '뒤로',
      submit: '제출',
    },
    tr: {
      title: 'KYC Belgelerini Yükle: Kimliğinizi Doğrulayın',
      identity: 'Kimlik Doğrulama',
      identity_click: 'Kimliğinizi doğrulamak için buraya tıklayın',
      verification_steps: 'Doğrulama Adımları',
      step_1: 'KYC belgelerinizi hazırlayın',
      step_2: 'Belgelerinizi Yükleyin',
      step_3: 'Doğrulanmayı bekleyin',
      important: 'Önemli Notlar',
      note_1: 'Yüklenen belgelerin geçerli ve süresi dolmamış olduğundan emin olun.',
      note_2: 'Belgeler standart bir formatta (JPEG, PNG, PDF vb.) Olmalıdır.',
      note_3: 'Gizliliğinizi ciddiye alıyoruz. Belgeleriniz güvenli bir şekilde saklanacak ve yalnızca doğrulama amaçlı kullanılacaktır',
      choose_doc: 'Belge Seç',
      make_sure: 'Belgenin fotoğrafınızı, tam adınızı, doğum tarihinizi ve çıkış tarihinizi gösterdiğinden emin olun.',
      front: 'Ön',
      back: 'Geri',
      submit: 'Sunmak',
    },
  }