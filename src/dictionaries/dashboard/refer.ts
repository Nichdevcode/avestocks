  export interface IPageContent {
    title: string;
    refer: string;
    copy: string;
    how_it_works: string;
    works_1: string;
    works_2: string;
    works_3: string;
    works_4: string;

  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const DashboardReferContent: ITranslations = {
    en: {
      title: 'Referral Program: Share and Earn Together',
      refer: 'Total Referral',
      copy: 'Copy',
      how_it_works: 'How it works',
      works_1: 'Copy Your Unique Referral Link Above',
      works_2: 'Spread the Word',
      works_3: 'Your Friends Sign U',
      works_4: 'You Earn Rewards',
    },
    es: {
      title: 'Programa de referencia: comparta y gane juntos',
      refer: 'Referencia total',
      copy: 'Copia',
      how_it_works: 'Cómo funciona',
      works_1: 'Copie su enlace de referencia único anterior',
      works_2: 'Corre la voz',
      works_3: 'Tus amigos se registran',
      works_4: 'Ganas recompensas',
    },
    de: {
      title: 'Empfehlungsprogramm: Teilen und gemeinsam verdienen',
      refer: 'Gesamtverweis',
      copy: 'Kopieren',
      how_it_works: 'Wie es funktioniert',
      works_1: 'Kopieren Sie Ihren eindeutigen Empfehlungslink oben',
      works_2: 'Verbreite das Wort',
      works_3: 'Ihre Freunde melden sich an',
      works_4: 'Sie verdienen Belohnungen',
    },
    zh: {
      title: '推荐计划：共享和共同赚钱',
      refer: '总推荐',
      copy: '复制',
      how_it_works: '它是如何工作的',
      works_1: '复制上面的唯一推荐链接',
      works_2: '传播消息',
      works_3: '您的朋友注册',
      works_4: '您赚取奖励',
    },
    ko: {
      title: '추천 프로그램 : 함께 공유하고 수익 창출',
      refer: '총 추천',
      copy: '부',
      how_it_works: '작동 방식',
      works_1: '위의 고유 한 추천 링크 복사',
      works_2: '소문을 퍼 뜨립니다',
      works_3: '친구가 가입',
      works_4: '보상을 얻습니다',
    },
    tr: {
      title: 'Yönlendirme Programı: Birlikte Paylaşın ve Kazanın',
      refer: 'Toplam Yönlendirme',
      copy: 'Kopya',
      how_it_works: 'Nasıl çalışır',
      works_1: 'Yukarıdaki Benzersiz Yönlendirme Bağlantınızı Kopyalayın',
      works_2: 'Haberi Yayın',
      works_3: 'Arkadaşlarınız Kaydolur',
      works_4: 'Ödüller Kazanın',
    },
  }