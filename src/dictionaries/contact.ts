  export interface IPageContent {
    title: string;
    content: string;
    address: {
        title: string;
        phone: string;
        email: string;
    };
    contact: {
        title: string;
        name: string;
        email: string;
        message: string;
        cta: string;
    };
  }
  
  interface ITranslations {
    en: IPageContent;
    es: IPageContent;
    de: IPageContent;
    zh: IPageContent;
    ko: IPageContent;
    tr: IPageContent;
  }
  
  export const ContactContent: ITranslations = {
    en: {
        title: "Contact Us",
        content: "We value your inquiries, feedback, and collaboration opportunities",
        address: {
          title: "Office Address",
          phone: "Phone Number",
          email: "Email/Website Address"
        },
        contact: {
          title: "SEND US A MESSAGE",
          name: "Full Name",
          email: "Email",
          message: "Message",
          cta: "Submit"
        }
      },
        es: {
            title: "Contáctenos",
            content: "Valoramos sus consultas, comentarios y oportunidades de colaboración",
            address: {
                title: "Dirección de la Oficina",
                phone: "Número de Teléfono",
                email: "Dirección de Correo Electrónico/Sitio Web"
              },
            contact: {
              title: "ENVIARNOS UN MENSAJE",
              name: "Nombre Completo",
              email: "Correo Electrónico",
              message: "Mensaje",
              cta: "Enviar"
            }
        },
        de: {
            title: "Kontaktieren Sie uns",
            content: "Wir schätzen Ihre Anfragen, Rückmeldungen und Zusammenarbeitsmöglichkeiten",
            address: {
                title: "Büroadresse",
                phone: "Telefonnummer",
                email: "E-Mail/Website Adresse"
            },              
            contact: {
              title: "SCHICKEN SIE UNS EINE NACHRICHT",
              name: "Vollständiger Name",
              email: "E-Mail",
              message: "Nachricht",
              cta: "Senden"
            }
          },
            zh: {
                title: "联系我们",
                content: "我们重视您的查询、反馈和合作机会",
                address: {
                    title: "办公地址",
                    phone: "电话号码",
                    email: "电子邮件/网址"
                  },                  
                contact: {
                  title: "发送消息给我们",
                  name: "全名",
                  email: "电子邮件",
                  message: "信息",
                  cta: "提交"
                }
              },
                ko: {
                    title: "문의하기",
                    content: "문의 사항, 피드백 및 협업 기회를 소중히 여깁니다",
                    address: {
                        title: "사무실 주소",
                        phone: "전화번호",
                        email: "이메일/웹사이트 주소"
                    },                      
                    contact: {
                      title: "메시지 보내기",
                      name: "성함",
                      email: "이메일",
                      message: "메시지",
                      cta: "제출하기"
                    }
                  },
                tr: {
                    title: "Bizimle İletişime Geçin",
                    content: "Sorularınızı, geri bildirimleri ve işbirliği fırsatlarını değerli buluyoruz",
                    address: {
                        title: "Ofis Adresi",
                        phone: "Telefon Numarası",
                        email: "E-posta/Website Adresi"
                      },                      
                    contact: {
                      title: "BİZE MESAJ GÖNDER",
                      name: "Adınız Soyadınız",
                      email: "E-Posta",
                      message: "Mesajınız",
                      cta: "Gönder"
                    }
                  }
};
      
      
      
      
      
      
  