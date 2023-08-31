

interface Subsection {
  title: string;
  content: string;
}

interface Section {
  title?: string;
  content?: string;
  subsections: Subsection[];
}


export interface IPageContent {
  title: string;
  content: string;
  joinUs: Section;
  history: Section;
}

interface ITranslations {
  en: IPageContent;
  es: IPageContent;
  de: IPageContent;
  // it: IPageContent;
  zh: IPageContent;
  ko: IPageContent;
  tr: IPageContent;
}

export const AboutContent: ITranslations = {
    en: {
      title: "About Us",
      content: "Empowering Financial Growth Through Expertise, Innovation, and Community Engagement: Discover the Heart of Avestock",
      joinUs: {
          title: "Empowering Your Financial Journey",
          content: "Join us on this journey towards financial growth and prosperity.",
          subsections: [
            {
              title: "Our Mission",
              content: "To empower individuals and businesses to achieve financial prosperity through innovative investment solutions. We strive to democratize wealth-building by making reliable investment opportunities accessible to all"
            },
            {
              title: "Our Vision",
              content: "We envision a future where financial growth is within everyone's reach. Through cutting-edge technology, expert insights, and a commitment to transparency, we aim to transform the landscape of investments, creating a world where financial success is attainable for all"
            }
          ]
        },
        history:       {
          title: "Our Trading Company In Numbers",
          content: "Trace the history of our company since its foundation in 2016",
          subsections: [
            {
              title: "37,456,523",
              content: "REGISTERED USERS"
            },
            {
              title: "$15,543,973",
              content: "AVERAGE WITHDRAWN BY TRADERS PER MONTH"
            },
            {
              title: "$234,354,290",
              content: "AVERAGE TRADING VOLUME PER MONTH"
            },
            {
              title: "$424,555,634",
              content: "AVERAGE MONTHLY TRADE TURNOVER"
            }
          ]
        }
    },
    es: {
      "title": "Sobre Nosotros",
      "content": "Potenciando el Crecimiento Financiero a través de la Experiencia, Innovación y Compromiso Comunitario: Descubre el Corazón de Avestock",
      "joinUs": {
        "title": "Potenciando Tu Trayectoria Financiera",
        "content": "Únete a nosotros en este viaje hacia el crecimiento financiero y la prosperidad.",
        "subsections": [
          {
            "title": "Nuestra Misión",
            "content": "Empoderar a individuos y empresas para lograr la prosperidad financiera a través de soluciones de inversión innovadoras. Nos esforzamos por democratizar la construcción de riqueza al hacer que las oportunidades de inversión confiables estén al alcance de todos."
          },
          {
            "title": "Nuestra Visión",
            "content": "Visualizamos un futuro en el que el crecimiento financiero esté al alcance de todos. A través de tecnología de vanguardia, conocimientos expertos y un compromiso con la transparencia, aspiramos a transformar el panorama de las inversiones, creando un mundo en el que el éxito financiero sea alcanzable para todos."
          }
        ]
      },
      "history": {
        "title": "Nuestra Empresa de Trading en Números",
        "content": "Rastrea la historia de nuestra empresa desde su fundación en 2016",
        "subsections": [
          {
            "title": "37,456,523",
            "content": "USUARIOS REGISTRADOS"
          },
          {
            "title": "$15,543,973",
            "content": "PROMEDIO RETIRADO POR TRADERS POR MES"
          },
          {
            "title": "$234,354,290",
            "content": "VOLUMEN PROMEDIO DE NEGOCIACIÓN POR MES"
          },
          {
            "title": "$424,555,634",
            "content": "ROTACIÓN PROMEDIO DE OPERACIONES MENSUALES"
          }
        ]
      }
    },
    de: {
      "title": "Über Uns",
      "content": "Finanzielles Wachstum durch Fachwissen, Innovation und Gemeinschaftsengagement ermöglichen: Entdecken Sie das Herz von Avestock",
      "joinUs": {
        "title": "Ihre Finanzielle Reise Stärken",
        "content": "Begleiten Sie uns auf dieser Reise des finanziellen Wachstums und des Wohlstands.",
        "subsections": [
          {
            "title": "Unsere Mission",
            "content": "Individuen und Unternehmen befähigen, finanziellen Wohlstand durch innovative Investmentlösungen zu erreichen. Wir streben danach, den Aufbau von Wohlstand zu demokratisieren, indem wir verlässliche Investmentchancen für alle zugänglich machen."
          },
          {
            "title": "Unsere Vision",
            "content": "Wir stellen uns eine Zukunft vor, in der finanzielles Wachstum für jeden erreichbar ist. Durch modernste Technologie, Expertenwissen und Engagement für Transparenz streben wir danach, die Landschaft der Investitionen zu verändern und eine Welt zu schaffen, in der finanzieller Erfolg für alle erreichbar ist."
          }
        ]
      },
      "history": {
        "title": "Unsere Handelsunternehmen in Zahlen",
        "content": "Verfolgen Sie die Geschichte unseres Unternehmens seit seiner Gründung im Jahr 2016",
        "subsections": [
          {
            "title": "37,456,523",
            "content": "REGISTRIERTE BENUTZER"
          },
          {
            "title": "$15,543,973",
            "content": "DURCHSCHNITTLICHE AUSZAHLUNG DURCH HÄNDLER PRO MONAT"
          },
          {
            "title": "$234,354,290",
            "content": "DURCHSCHNITTLICHES HANDELSVOLUMEN PRO MONAT"
          },
          {
            "title": "$424,555,634",
            "content": "DURCHSCHNITTLICHER MONATLICHER HANDELSUMSATZ"
          }
        ]
      }
    },
    zh: {
      "title": "关于我们",
      "content": "通过专业知识、创新和社区参与赋予财务增长力量：探索Avestock的核心",
      "joinUs": {
        "title": "赋予您的财务之旅",
        "content": "加入我们，踏上财务增长和繁荣之旅。",
        "subsections": [
          {
            "title": "我们的使命",
            "content": "通过创新的投资解决方案赋予个人和企业实现财务繁荣的能力。我们致力于通过使可靠的投资机会可供所有人获取，从而实现财富的民主化建设。"
          },
          {
            "title": "我们的愿景",
            "content": "我们设想一个财务增长对每个人来说都是可能的未来。通过尖端技术、专业洞察力和对透明度的承诺，我们的目标是改变投资领域的面貌，创造一个所有人都能够实现财务成功的世界。"
          }
        ]
      },
      "history": {
        "title": "我们的交易公司数据",
        "content": "从2016年成立以来追溯我们公司的历史",
        "subsections": [
          {
            "title": "37,456,523",
            "content": "注册用户数"
          },
          {
            "title": "$15,543,973",
            "content": "平均每月交易者提款额"
          },
          {
            "title": "$234,354,290",
            "content": "平均每月交易量"
          },
          {
            "title": "$424,555,634",
            "content": "平均每月交易额"
          }
        ]
      }
    }
    ,
    ko: {
      "title": "우리에 대하여",
      "content": "전문성, 혁신 및 커뮤니티 참여를 통한 금융 성장의 발판: 에이브스탁의 핵심을 발견하세요",
      "joinUs": {
        "title": "금융 여정을 함께하세요",
        "content": "금융 성장과 번영을 향한 이 여정에 함께 참여해보세요.",
        "subsections": [
          {
            "title": "우리의 미션",
            "content": "혁신적인 투자 솔루션을 통해 개인과 기업이 금융 번영을 실현할 수 있도록 지원하는 것이 우리의 미션입니다. 신뢰할 수 있는 투자 기회를 모든 사람에게 제공하여 부의 구축을 민주화하기 위해 노력합니다."
          },
          {
            "title": "우리의 비전",
            "content": "금융 성장이 모두의 손에 닿을 수 있는 미래를 상상합니다. 선도적인 기술, 전문가의 통찰력, 투명성에 대한 헌신으로 투자의 지혜를 변화시키고, 모든 사람이 재무적 성공을 이룰 수 있는 세상을 만들어 가려고 합니다."
          }
        ]
      },
      "history": {
        "title": "우리의 거래 회사 소개",
        "content": "2016년 창립 이래 우리 회사의 역사를 추적하세요.",
        "subsections": [
          {
            "title": "37,456,523",
            "content": "등록된 사용자"
          },
          {
            "title": "$15,543,973",
            "content": "월별 트레이더 평균 인출 금액"
          },
          {
            "title": "$234,354,290",
            "content": "월별 평균 거래량"
          },
          {
            "title": "$424,555,634",
            "content": "월별 평균 거래 회전율"
          }
        ]
      }
    }
    ,
    tr: {
      "title": "Hakkımızda",
      "content": "Uzmanlık, İnovasyon ve Topluluk Katılımıyla Finansal Büyümeyi Güçlendirmek: Avestock'un Kalbini Keşfedin",
      "joinUs": {
        "title": "Finansal Yolculuğunuzu Güçlendirin",
        "content": "Finansal büyüme ve refah yolculuğuna bizimle katılın.",
        "subsections": [
          {
            "title": "Misyonumuz",
            "content": "Bireylerin ve işletmelerin yenilikçi yatırım çözümleri aracılığıyla finansal refahı elde etmelerine güç vermek. Güvenilir yatırım fırsatlarını herkese erişilebilir kılarak zenginlik oluşturmayı demokratikleştirmeyi amaçlıyoruz."
          },
          {
            "title": "Vizyonumuz",
            "content": "Finansal büyümenin herkesin erişebileceği bir geleceğini hayal ediyoruz. Son teknoloji, uzman bilgisi ve şeffaflık taahhüdü ile yatırımların manzarasını değiştirmeyi hedefliyor, finansal başarının herkes için ulaşılabilir olduğu bir dünya yaratmayı amaçlıyoruz."
          }
        ]
      },
      "history": {
        "title": "Şirketimizin Sayılarla Tarihi",
        "content": "2016'da kuruluşundan bu yana şirketimizin geçmişini takip edin",
        "subsections": [
          {
            "title": "37,456,523",
            "content": "KAYITLI KULLANICILAR"
          },
          {
            "title": "$15,543,973",
            "content": "AYLIK ORTALAMA TÜCCAR ÇEKİMİ"
          },
          {
            "title": "$234,354,290",
            "content": "AYLIK ORTALAMA TİCARET HACMİ"
          },
          {
            "title": "$424,555,634",
            "content": "AYLIK ORTALAMA TİCARET DEVİR HIZI"
          }
        ]
      }
    }    
};
