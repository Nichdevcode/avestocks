export interface LanguageData {
    hero: {
    cta: string;
      slides: {
          title: string;
          text: string;
      }[];
    };
    howItWorks: {
      title: string;
      content: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    investmentPlans: {
      title: string;
      content: string;
      cta: string;
    };
    qualities: {
        title: string;
        content: string;
        tools:
            {
                title: string;
                content: string;
            }[];
    //   cuttingEdgeTechnology: string;
    //   expertManagement: string;
    //   diverseOptions: string;
    //   security: string;
    };
    cryptocurrencies: {
      title: string;
      content: string;
    };
    customerTestimonials: {
      title: string;
      content: string;
      testimonials: {
        name: string;
        testimonial: string;
      }[];
    };
  }
  
 export interface LanguageContent {
    [key: string]: LanguageData;
  }
  
 export interface Translations {
    en: LanguageData;
    es: LanguageData;
    de: LanguageData;
    // it: LanguageData;
    zh: LanguageData;
    ko: LanguageData;
    tr: LanguageData;
  }
  
  