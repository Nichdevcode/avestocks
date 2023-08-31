export interface IPageContent {
  title: string;
  subtitle: string;
  sub1: string;
  sub1_content: string;
  sections: string[];
  sub2: string;
  sub2_content: {
    title: string;
    description: string;
  }[] 
}

interface ITranslations {
  en: IPageContent;
  es: IPageContent;
  de: IPageContent;
  zh: IPageContent;
  ko: IPageContent;
  tr: IPageContent;
}

export const PrivacyContent: ITranslations = {
  en: {
    title: 'Privacy Policy',
    subtitle: 'Last updated: 2021-08-01',
    sub1: 'Introduction',
    sub1_content: 'Avestock (in incorporation) (&quot;us,&quot; &quot;we,&quot; or &quot;Company&quot;) values your privacy and is dedicated to safeguarding the privacy of users (each, &quot;you&quot; or &quot;User&quot;) who access, download, install, or register for our mobile application (the &quot;Application&quot;), website, or any other online services (collectively: the &quot;Services&quot;). This Privacy Policy outlines our practices concerning collecting, using, and disclosing your information during your use of the Services. We encourage you to carefully read and use this Privacy Policy to make informed decisions. By using the Services, you agree to this Privacy Policy&apos;s terms, and your continued use constitutes ongoing agreement. This policy is part of our Terms of Service and is incorporated by reference. In this Privacy Policy, you&apos;ll learn about:',
    sections: [
      "What information we collect",
      "Cookies and Google Analytics",
      "How we use your information",
      'Sharing information and purposes',
      'Retention duration',
      'Information security measures',
      'Advertisements',
      'Advertising ID and Advertising Identifier'
    ],
    sub2: "Guidelines",
    sub2_content: [
      {
        "title": "Privacy Policy: Safeguarding Your Data",
        "description": "Our Privacy Policy outlines how we collect, use, and protect your personal information. Your privacy is a priority, and this policy provides insights into how we handle your data."
      },
      {
        "title": "Terms and Conditions: Your Agreement with Us",
        "description": "Our Terms and Conditions serve as the foundation for your engagement with our platform. These terms cover essential aspects such as account creation, usage, intellectual property, user conduct, payment, refunds, and liability."
      },
      {
        "title": "Refund Policy: Transparency in Our Refund Process",
        "description": "Our Refund Policy provides a clear view of the circumstances under which refunds for our services are applicable. This policy outlines the process and criteria to ensure fairness and clarity."
      },
      {
        "title": "Cookies Policy: Enhancing Your Browsing Experience",
        "description": "Our Cookies Policy elucidates how we utilize cookies and similar technologies to optimize your browsing experience. This policy details the mechanics of cookies and empowers you to manage their usage."
      },
      {
        "title": "Community Guidelines: Fostering a Positive Community",
        "description": "Our Community Guidelines define the conduct we expect from all users within our community. Rooted in respect and collaboration, these guidelines ensure a positive and safe environment for everyone."
      },
      {
        "title": "Copyright and DMCA Policy: Safeguarding Intellectual Property",
        "description": "Our Copyright and DMCA Policy addresses concerns regarding copyright infringement. This policy outlines reporting procedures for intellectual property rights violations, underscoring our commitment to protecting creative works."
      },
      {
        "title": "Anti-Spam Policy: Upholding a Spam-Free Environment",
        "description": "Our Anti-Spam Policy underscores our stance against unsolicited messages and spam. We are committed to maintaining a spam-free ecosystem that prioritizes meaningful interactions."
      },
      {
        "title": "Security Policy: Ensuring Data and Transaction Security",
        "description": "Our Security Policy sheds light on the measures we've established to safeguard your data and transactions. We prioritize the security of your information and transactions, and this policy details our practices and protocols."
      },
      {
        "title": "Data Retention Policy: Retaining Your Personal Data",
        "description": "Learn about how long we retain your personal data and the factors that influence data retention periods."
      },
      {
        "title": "User Responsibilities: Your Role as a User",
        "description": "Understand your responsibilities as a user of our platform, including compliance with laws, respectful conduct, and accurate information."
      },
      {
        "title": "Termination of Accounts: Consequences of Account Violations",
        "description": "Discover the circumstances under which we may suspend or terminate user accounts due to violations of our terms or policies."
      },
      {
        "title": "Modification of Policies: Updates to Our Terms and Policies",
        "description": "Find out how and when we may update our policies and the methods through which you'll be notified of such changes."
      },
      {
        "title": "Dispute Resolution: Handling Disputes and Conflicts",
        "description": "Learn about the procedures and mechanisms in place to handle disputes that may arise between users and Avestock."
      },
      {
        "title": "Limitation of Liability: Our Responsibility for Damages",
        "description": "Understand the limitations on our liability for any damages arising from your use of our platform."
      },
      {
        "title": "Indemnification: Your Responsibilities to Hold Harmless",
        "description": "Learn about your responsibilities to indemnify and hold Avestock harmless from any claims or liabilities."
      },
      {
        "title": "Governing Law and Jurisdiction: Legal Framework",
        "description": "Discover the laws and jurisdiction that govern our terms, policies, and any potential legal disputes."
      },
      {
        "title": "Updates and Notifications: Staying Informed About Changes",
        "description": "Learn how we communicate updates, changes, and notifications to users regarding our policies, features, and services."
      },
      {
        "title": "Accessibility: Ensuring Inclusivity for All Users",
        "description": "Understand our commitment to making our platform accessible to all users, including those with disabilities."
      },
      {
        "title": "Contact Information: Reaching Out for Support",
        "description": "Find comprehensive contact details for inquiries, feedback, support, and any matters related to our policies and terms."
      },
      {
        "title": "Effective Date: When Our Policies Take Effect",
        "description": "Learn when our policies and terms come into effect and the version history of these documents."
      },
      {
        "title": "User Account Deactivation: Process and Implications",
        "description": "Understand the process and implications of deactivating your user account, including data retention and reactivation."
      },
      {
        "title": "Communication Channels: How We Interact with You",
        "description": "Explore the various communication channels we use to interact with users, including email notifications, in-app messages, and updates."
      },
      {
        "title": "Compliance with Industry Regulations: Meeting Standards",
        "description": "Discover how our platform complies with industry-specific regulations and standards to ensure a secure and trustworthy environment."
      },
      {
        "title": "Children's Online Privacy Protection: Safeguarding Minors",
        "description": "Learn about our commitment to protecting the privacy of children and our adherence to the Children's Online Privacy Protection Act (COPPA) and similar regulations."
      },
      {
        "title": "User Feedback and Contributions: Contributing to Improvement",
        "description": "Understand how user feedback, suggestions, and contributions to our platform are managed and potentially used for improvement."
      },
      {
        "title": "International Data Transfers: Transferring Your Data Safely",
        "description": "Learn about the potential transfer of your data to other countries and regions and the safeguards we have in place to protect your information."
      },
      {
        "title": "Disclaimer of Endorsement: Third-Party References",
        "description": "Understand that references and links to third-party products, services, or websites on our platform do not imply endorsement by Avestock."
      },
      {
        "title": "Relationship with Third Parties: User-Third Party Interactions",
        "description": "Discover how our policies and terms apply to relationships between users and third parties, and the extent of Avestock's liability."
      },
      {
        "title": "Waiver of Rights: Enforcement of Policies",
        "description": "Learn about our waiver of rights and how any failure on our part to enforce policies does not constitute a waiver of our rights to enforce them in the future."
      },
      {
        "title": "Severability: Enforceability of Individual Provisions",
        "description": "Understand the principle of severability, which allows individual provisions of our policies and terms to be enforceable even if others are not."
      }
    ]
  },
  es: {
    title: 'Política de privacidad',
    subtitle: 'Última actualización: 2021-08-01',
    sub1: 'Introducción',
    sub1_content: 'Avestock (en constitución) (&quot;nosotros&quot;, &quot;nos&quot; o &quot;Compañía&quot;) valora su privacidad y se dedica a salvaguardar la privacidad de los usuarios (cada uno, &quot;usted&quot; o &quot;Usuario&quot;) que acceden, descargan, instalan o se registran para nuestra aplicación móvil (la &quot;Aplicación&quot;), sitio web o cualquier otro servicio en línea (colectivamente: los &quot;Servicios&quot;). Esta Política de Privacidad describe nuestras prácticas con respecto a la recopilación, el uso y la divulgación de su información durante su uso de los Servicios. Le recomendamos que lea y utilice esta Política de privacidad con cuidado para tomar decisiones informadas. Al utilizar los Servicios, usted acepta los términos de esta Política de privacidad, y su uso continuado constituye un acuerdo continuo. Esta política es parte de nuestros Términos de servicio y se incorpora por referencia. En esta Política de privacidad, aprenderá sobre:',
    sections: [
      "Qué información recopilamos",
      "Cookies y Google Analytics",
      "Cómo usamos su información",
      'Compartir información y propósitos',
      'Duración de la retención',
      'Medidas de seguridad de la información',
      'Anuncios',
      'ID de publicidad e identificador de publicidad'
    ],
    sub2: "Directrices",
    sub2_content: [
      {
        "title": "Política de Privacidad: Salvaguardando tus Datos",
        "description": "Nuestra Política de Privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal. Tu privacidad es una prioridad y esta política ofrece información sobre cómo manejamos tus datos."
      },
      {
        "title": "Términos y Condiciones: Tu Acuerdo con Nosotros",
        "description": "Nuestros Términos y Condiciones sirven como base para tu interacción con nuestra plataforma. Estos términos abarcan aspectos esenciales como la creación de cuentas, el uso, la propiedad intelectual, la conducta del usuario, el pago, los reembolsos y la responsabilidad."
      },
      {
        "title": "Política de Reembolso: Transparencia en Nuestro Proceso de Reembolso",
        "description": "Nuestra Política de Reembolso proporciona una vista clara de las circunstancias en las que son aplicables los reembolsos por nuestros servicios. Esta política detalla el proceso y los criterios para garantizar la equidad y claridad."
      },
      {
        "title": "Política de Cookies: Mejorando tu Experiencia de Navegación",
        "description": "Nuestra Política de Cookies aclara cómo utilizamos cookies y tecnologías similares para optimizar tu experiencia de navegación. Esta política detalla los mecanismos de las cookies y te capacita para gestionar su uso."
      },
      {
        "title": "Directrices de la Comunidad: Fomentando una Comunidad Positiva",
        "description": "Nuestras Directrices de la Comunidad definen la conducta que esperamos de todos los usuarios dentro de nuestra comunidad. Basadas en el respeto y la colaboración, estas directrices garantizan un entorno positivo y seguro para todos."
      },
      {
        "title": "Política de Derechos de Autor y DMCA: Salvaguardando la Propiedad Intelectual",
        "description": "Nuestra Política de Derechos de Autor y DMCA aborda inquietudes sobre infracción de derechos de autor. Esta política describe los procedimientos de informe para violaciones de derechos de propiedad intelectual, subrayando nuestro compromiso de proteger las obras creativas."
      },
      {
        "title": "Política Anti-Spam: Manteniendo un Entorno Libre de Spam",
        "description": "Nuestra Política Anti-Spam subraya nuestra postura contra mensajes no solicitados y el spam. Estamos comprometidos con mantener un ecosistema libre de spam que prioriza interacciones significativas."
      },
      {
        "title": "Política de Seguridad: Garantizando la Seguridad de Datos y Transacciones",
        "description": "Nuestra Política de Seguridad arroja luz sobre las medidas que hemos establecido para proteger tus datos y transacciones. Priorizamos la seguridad de tu información y transacciones, y esta política detalla nuestras prácticas y protocolos."
      },
      {
        "title": "Política de Retención de Datos: Conservando tus Datos Personales",
        "description": "Aprende cuánto tiempo conservamos tus datos personales y los factores que influyen en los períodos de retención de datos."
      },
      {
        "title": "Responsabilidades del Usuario: Tu Rol como Usuario",
        "description": "Comprende tus responsabilidades como usuario de nuestra plataforma, incluido el cumplimiento de las leyes, la conducta respetuosa y la información precisa."
      },
      {
        "title": "Terminación de Cuentas: Consecuencias de Violaciones de Cuentas",
        "description": "Descubre las circunstancias en las que podemos suspender o dar por terminadas las cuentas de usuario debido a violaciones de nuestros términos o políticas."
      },
      {
        "title": "Modificación de Políticas: Actualizaciones a Nuestros Términos y Políticas",
        "description": "Descubre cómo y cuándo podemos actualizar nuestras políticas y los métodos a través de los cuales se te notificarán tales cambios."
      },
      {
        "title": "Resolución de Disputas: Manejo de Disputas y Conflictos",
        "description": "Aprende sobre los procedimientos y mecanismos establecidos para manejar disputas que puedan surgir entre los usuarios y [Nombre de tu Empresa]."
      },
      {
        "title": "Limitación de Responsabilidad: Nuestra Responsabilidad por Daños",
        "description": "Comprende las limitaciones de nuestra responsabilidad por cualquier daño que surja de tu uso de nuestra plataforma."
      },
      {
        "title": "Indemnización: Tus Responsabilidades de Mantener Inofensivo",
        "description": "Aprende sobre tus responsabilidades de indemnizar y mantener inofensiva a [Nombre de tu Empresa] ante cualquier reclamo o responsabilidad."
      },
      {
        "title": "Ley y Jurisdicción: Marco Legal",
        "description": "Descubre las leyes y la jurisdicción que rigen nuestros términos, políticas y posibles disputas legales."
      },
      {
        "title": "Actualizaciones y Notificaciones: Mantente Informado sobre Cambios",
        "description": "Aprende cómo comunicamos actualizaciones, cambios y notificaciones a los usuarios sobre nuestras políticas, características y servicios."
      },
      {
        "title": "Accesibilidad: Garantizando la Inclusión para Todos los Usuarios",
        "description": "Comprende nuestro compromiso de hacer que nuestra plataforma sea accesible para todos los usuarios, incluidos aquellos con discapacidades."
      },
      {
        "title": "Información de Contacto: Comunicarte para Obtener Soporte",
        "description": "Encuentra detalles de contacto completos para consultas, comentarios, soporte y cualquier asunto relacionado con nuestras políticas y términos."
      },
      {
        "title": "Fecha de Entrada en Vigor: Cuándo Nuestras Políticas Toman Efecto",
        "description": "Aprende cuándo entran en vigencia nuestras políticas y términos, y la historia de versiones de estos documentos."
      },
      {
        "title": "Desactivación de Cuenta de Usuario: Proceso e Implicaciones",
        "description": "Comprende el proceso y las implicaciones de desactivar tu cuenta de usuario, incluida la retención y reactivación de datos."
      },
      {
        "title": "Canales de Comunicación: Cómo Interactuamos Contigo",
        "description": "Explora los diversos canales de comunicación que utilizamos para interactuar con los usuarios, incluidas las notificaciones por correo electrónico, mensajes en la aplicación y actualizaciones."
      },
      {
        "title": "Cumplimiento de Regulaciones de la Industria: Cumplimiento de Estándares",
        "description": "Descubre cómo nuestra plataforma cumple con las regulaciones y estándares específicos de la industria para garantizar un entorno seguro y confiable."
      },
      {
        "title": "Protección de la Privacidad en Línea de los Niños: Salvaguardando a los Menores",
        "description": "Aprende sobre nuestro compromiso de proteger la privacidad de los niños y nuestro cumplimiento de la Ley de Protección de la Privacidad en Línea de los Niños (COPPA) y regulaciones similares."
      },
      {
        "title": "Comentarios y Contribuciones de los Usuarios: Contribuyendo a la Mejora",
        "description": "Comprende cómo se gestionan los comentarios, sugerencias y contribuciones de los usuarios a nuestra plataforma y cómo se pueden utilizar para mejorarla."
      },
      {
        "title": "Transferencias Internacionales de Datos: Transferir tus Datos de Manera Segura",
        "description": "Aprende sobre la posible transferencia de tus datos a otros países y regiones, y las salvaguardias que tenemos en marcha para proteger tu información."
      },
      {
        "title": "Descargo de Responsabilidad de Endoso: Referencias de Terceros",
        "description": "Comprende que las referencias y enlaces a productos, servicios o sitios web de terceros en nuestra plataforma no implican el respaldo de [Nombre de tu Empresa]."
      },
      {
        "title": "Relación con Terceros: Interacciones Usuario-Tercero",
        "description": "Descubre cómo se aplican nuestras políticas y términos a las relaciones entre los usuarios y terceros, y la extensión de la responsabilidad de [Nombre de tu Empresa]."
      },
      {
        "title": "Renuncia de Derechos: Aplicación de Políticas",
        "description": "Aprende sobre nuestra renuncia de derechos y cómo cualquier falta de nuestra parte para aplicar políticas no constituye una renuncia de nuestros derechos de hacerlo en el futuro."
      },
      {
        "title": "Divisibilidad: Aplicabilidad de Disposiciones Individuales",
        "description": "Comprende el principio de la divisibilidad, que permite que las disposiciones individuales de nuestras políticas y términos sean aplicables incluso si otras no lo son."
      }
    ]
  },
  de: {
    title: 'Datenschutz-Bestimmungen',
    subtitle: 'Letzte Aktualisierung: 2021-08-01',
    sub1: 'Einführung',
    sub1_content: 'Avestock (in Gründung) (&quot;uns,&quot; &quot;wir,&quot; oder &quot;Unternehmen&quot;) legt Wert auf Ihre Privatsphäre und ist bestrebt, die Privatsphäre der Benutzer (jeder, &quot;Sie&quot; oder &quot;Benutzer&quot;) zu schützen, die auf unsere mobile Anwendung (die &quot;Anwendung&quot;), Website oder andere Online-Dienste zugreifen, sie herunterladen, installieren oder sich für sie registrieren (zusammen: die &quot;Dienste&quot;). Diese Datenschutzrichtlinie beschreibt unsere Praktiken in Bezug auf die Erhebung, Nutzung und Offenlegung Ihrer Informationen während der Nutzung der Dienste. Wir empfehlen Ihnen, diese Datenschutzrichtlinie sorgfältig zu lesen und zu verwenden, um fundierte Entscheidungen zu treffen. Durch die Nutzung der Dienste erklären Sie sich mit den Bedingungen dieser Datenschutzrichtlinie einverstanden, und Ihre fortgesetzte Nutzung stellt eine fortlaufende Vereinbarung dar. Diese Richtlinie ist Teil unserer Nutzungsbedingungen und wird durch Verweis eingebunden. In dieser Datenschutzrichtlinie erfahren Sie:',
    sections: [
      "Welche Informationen wir sammeln",
      "Cookies und Google Analytics",
      "Wie wir Ihre Informationen verwenden",
      'Informationen teilen und Zwecke',
      'Aufbewahrungsdauer',
      'Informationssicherheitsmaßnahmen',
      'Werbung',
      'Werbekennung und Werbekennung'
    ],
    sub2: "Richtlinien",
    sub2_content:[
      {
        "title": "Datenschutzrichtlinie: Schutz Ihrer Daten",
        "description": "Unsere Datenschutzrichtlinie erläutert, wie wir Ihre persönlichen Informationen sammeln, verwenden und schützen. Ihre Privatsphäre hat höchste Priorität, und diese Richtlinie gibt Einblicke in unsere Handhabung Ihrer Daten."
      },
      {
        "title": "Nutzungsbedingungen: Ihre Vereinbarung mit uns",
        "description": "Unsere Nutzungsbedingungen bilden das Fundament für Ihre Interaktion mit unserer Plattform. Diese Bedingungen decken wichtige Aspekte wie Kontoerstellung, Nutzung, geistiges Eigentum, Nutzerverhalten, Zahlung, Rückerstattung und Haftung ab."
      },
      {
        "title": "Rückerstattungsrichtlinie: Transparenz in unserem Rückerstattungsprozess",
        "description": "Unsere Rückerstattungsrichtlinie bietet einen klaren Überblick darüber, wann Rückerstattungen für unsere Dienstleistungen möglich sind. Diese Richtlinie umreißt den Prozess und die Kriterien, um Fairness und Klarheit zu gewährleisten."
      },
      {
        "title": "Cookie-Richtlinie: Verbesserung Ihres Browsing-Erlebnisses",
        "description": "Unsere Cookie-Richtlinie erläutert, wie wir Cookies und ähnliche Technologien verwenden, um Ihr Browsing-Erlebnis zu optimieren. Diese Richtlinie erläutert die Funktionsweise von Cookies und ermöglicht es Ihnen, deren Verwendung zu verwalten."
      },
      {
        "title": "Community-Richtlinien: Förderung einer positiven Community",
        "description": "Unsere Community-Richtlinien definieren das Verhalten, das wir von allen Benutzern innerhalb unserer Community erwarten. Basierend auf Respekt und Zusammenarbeit gewährleisten diese Richtlinien eine positive und sichere Umgebung für alle."
      },
      {
        "title": "Urheberrechts- und DMCA-Richtlinie: Schutz des geistigen Eigentums",
        "description": "Unsere Urheberrechts- und DMCA-Richtlinie behandelt Bedenken hinsichtlich Urheberrechtsverletzungen. Diese Richtlinie beschreibt Meldungsverfahren für Verletzungen von Urheberrechten und betont unser Engagement zum Schutz kreativer Werke."
      },
      {
        "title": "Anti-Spam-Richtlinie: Schaffung einer spamfreien Umgebung",
        "description": "Unsere Anti-Spam-Richtlinie unterstreicht unsere Haltung gegenüber unerwünschten Nachrichten und Spam. Wir setzen uns für ein spamfreies Umfeld ein, das sinnvolle Interaktionen priorisiert."
      },
      {
        "title": "Sicherheitsrichtlinie: Gewährleistung von Datensicherheit und Transaktionen",
        "description": "Unsere Sicherheitsrichtlinie beleuchtet die Maßnahmen, die wir getroffen haben, um Ihre Daten und Transaktionen zu schützen. Wir legen Wert auf die Sicherheit Ihrer Informationen und Transaktionen, und diese Richtlinie enthält Details zu unseren Praktiken und Protokollen."
      },
      {
        "title": "Datenaufbewahrungsrichtlinie: Aufbewahrung Ihrer persönlichen Daten",
        "description": "Erfahren Sie, wie lange wir Ihre persönlichen Daten aufbewahren und welche Faktoren die Aufbewahrungsfristen beeinflussen."
      },
      {
        "title": "Benutzerpflichten: Ihre Rolle als Benutzer",
        "description": "Verstehen Sie Ihre Pflichten als Benutzer unserer Plattform, einschließlich der Einhaltung von Gesetzen, respektvollem Verhalten und genauen Informationen."
      },
      {
        "title": "Kontosperrung: Konsequenzen bei Verstoß gegen die Nutzungsbedingungen",
        "description": "Erfahren Sie, unter welchen Umständen wir Benutzerkonten aufgrund von Verstößen gegen unsere Nutzungsbedingungen sperren oder löschen können."
      },
      {
        "title": "Änderung der Richtlinien: Aktualisierungen unserer Bedingungen",
        "description": "Erfahren Sie, wie und wann wir unsere Richtlinien aktualisieren und wie Sie über solche Änderungen benachrichtigt werden."
      },
      {
        "title": "Streitbeilegung: Umgang mit Streitigkeiten und Konflikten",
        "description": "Erfahren Sie mehr über die Verfahren und Mechanismen, die festgelegt wurden, um Streitigkeiten zu behandeln, die zwischen Benutzern und [Ihrem Firmennamen] auftreten können."
      },
      {
        "title": "Haftungsbeschränkung: Unsere Haftung für Schäden",
        "description": "Verstehen Sie die Einschränkungen unserer Haftung für Schäden, die durch Ihre Nutzung unserer Plattform entstehen."
      },
      {
        "title": "Haftungsfreistellung: Ihre Pflicht zur Freistellung",
        "description": "Erfahren Sie mehr über Ihre Pflicht zur Freistellung und Schadloshaltung von [Ihrem Firmennamen] in Bezug auf Ansprüche oder Haftung."
      },
      {
        "title": "Recht und Gerichtsbarkeit: Rechtlicher Rahmen",
        "description": "Erfahren Sie mehr über die Gesetze und Gerichtsbarkeiten, die unsere Bedingungen, Richtlinien und mögliche rechtliche Streitigkeiten regeln."
      },
      {
        "title": "Aktualisierungen und Benachrichtigungen: Informiert über Änderungen",
        "description": "Erfahren Sie, wie wir Aktualisierungen, Änderungen und Benachrichtigungen an Benutzer zu unseren Richtlinien, Funktionen und Dienstleistungen kommunizieren."
      },
      {
        "title": "Barrierefreiheit: Inklusion für alle Benutzer",
        "description": "Verstehen Sie unser Engagement, unsere Plattform für alle Benutzer zugänglich zu machen, einschließlich solcher mit Behinderungen."
      },
      {
        "title": "Kontaktinformationen: Kommunikation für Support",
        "description": "Finden Sie vollständige Kontaktinformationen für Anfragen, Feedback, Unterstützung und alle Angelegenheiten in Bezug auf unsere Richtlinien und Bedingungen."
      },
      {
        "title": "Inkrafttreten: Wann unsere Richtlinien in Kraft treten",
        "description": "Erfahren Sie, wann unsere Richtlinien und Bedingungen in Kraft treten und die Versionshistorie dieser Dokumente."
      },
      {
        "title": "Deaktivierung von Benutzerkonten: Ablauf und Auswirkungen",
        "description": "Verstehen Sie den Ablauf und die Auswirkungen der Deaktivierung Ihres Benutzerkontos, einschließlich der Aufbewahrung und Wiederaktivierung von Daten."
      },
      {
        "title": "Kommunikationskanäle: Wie wir mit Ihnen interagieren",
        "description": "Erkunden Sie die verschiedenen Kommunikationskanäle, die wir verwenden, um mit Benutzern zu interagieren, einschließlich E-Mail-Benachrichtigungen, App-Nachrichten und Updates."
      },
      {
        "title": "Einhaltung von Branchenvorschriften: Einhaltung von Standards",
        "description": "Erfahren Sie, wie unsere Plattform den spezifischen Branchenvorschriften und -standards entspricht, um eine sichere und vertrauenswürdige Umgebung zu gewährleisten."
      },
      {
        "title": "Online-Datenschutz für Kinder: Schutz von Minderjährigen",
        "description": "Erfahren Sie mehr über unser Engagement, den Datenschutz von Kindern zu schützen, und unsere Einhaltung des Kinder Online Privacy Protection Act (COPPA) und ähnlicher Vorschriften."
      },
      {
        "title": "Benutzerfeedback und -beiträge: Beitrag zur Verbesserung",
        "description": "Verstehen Sie, wie Benutzerfeedback, Vorschläge und Beiträge auf unserer Plattform verwaltet werden und wie sie zur Verbesserung genutzt werden können."
      },
      {
        "title": "Internationale Datenübertragung: Sichere Übertragung Ihrer Daten",
        "description": "Erfahren Sie mehr über die mögliche Übertragung Ihrer Daten in andere Länder und Regionen sowie die Vorkehrungen, die wir zum Schutz Ihrer Informationen getroffen haben."
      },
      {
        "title": "Haftungsausschluss: Verweise auf Dritte",
        "description": "Verstehen Sie, dass Verweise und Links zu Produkten, Dienstleistungen oder Websites Dritter auf unserer Plattform keine Unterstützung von [Ihrem Firmennamen] implizieren."
      },
      {
        "title": "Beziehung zu Dritten: Interaktionen zwischen Benutzern und Dritten",
        "description": "Erfahren Sie, wie unsere Richtlinien und Bedingungen auf Beziehungen zwischen Benutzern und Dritten angewendet werden und inwieweit [Ihrem Firmennamen] haftbar ist."
      },
      {
        "title": "Verzicht auf Rechte: Durchsetzung von Richtlinien",
        "description": "Verstehen Sie unseren Verzicht auf Rechte und wie ein Nichtdurchsetzen unserer Richtlinien durch uns in keiner Weise einen Verzicht auf unser Recht zur zukünftigen Durchsetzung darstellt."
      },
      {
        "title": "Teilbarkeit: Durchsetzbarkeit einzelner Bestimmungen",
        "description": "Erfahren Sie mehr über das Prinzip der Teilbarkeit, das es ermöglicht, dass einzelne Bestimmungen unserer Richtlinien und Bedingungen auch dann durchsetzbar sind, wenn andere es nicht sind."
      }
    ] 
  },
  zh: {
    title: '隐私政策',
    subtitle: '最后修订日期：2021-08-01',
    sub1: '介绍',
    sub1_content: 'Avestock (在组建中) (&quot;我们&quot;，&quot;我们&quot;或&quot;公司&quot;) 重视您的隐私，并致力于保护访问、下载、安装或注册我们的移动应用程序(“应用程序”)、网站或任何其他在线服务(统称为“服务”)的用户(每个用户，&quot;您&quot;或&quot;用户&quot;)的隐私。本隐私政策概述了我们在您使用服务期间收集、使用和披露您的信息的做法。我们鼓励您仔细阅读和使用本隐私政策，以便做出明智的决定。通过使用服务，您同意本隐私政策的条款，您的持续使用构成持续协议。本政策是我们的服务条款的一部分，并通过引用纳入。在本隐私政策中，您将了解到:',
    sections: [
      "我们收集哪些信息",
      "Cookie和Google Analytics",
      "我们如何使用您的信息",
      '共享信息和目的',
      '保留期限',
      '信息安全措施',
      '广告',
      '广告ID和广告标识符'
    ],
    sub2: "指南",
    sub2_content: [
        {
          "title": "隐私政策：保护您的数据",
          "description": "我们的隐私政策详细介绍了我们如何收集、使用和保护您的个人信息。您的隐私是我们的首要任务，此政策提供了有关我们如何处理您的数据的信息。"
        },
        {
          "title": "条款和条件：您与我们的协议",
          "description": "我们的条款和条件为您与我们平台的互动提供了基础。这些条款涵盖了账户创建、使用、知识产权、用户行为、付款、退款和责任等重要方面。"
        },
        {
          "title": "退款政策：透明的退款流程",
          "description": "我们的退款政策清楚地阐明了我们的服务何时适用退款。此政策详细说明了退款流程和标准，以确保公平和透明。"
        },
        {
          "title": "Cookie政策：优化您的浏览体验",
          "description": "我们的Cookie政策详解了我们如何利用Cookie和类似技术来优化您的浏览体验。此政策详细说明了Cookie的工作机制，并使您能够管理其使用。"
        },
        {
          "title": "社区准则：营造积极社区",
          "description": "我们的社区准则规定了我们对社区内所有用户行为的期望。基于尊重和协作，这些准则确保为所有人营造积极安全的环境。"
        },
        {
          "title": "版权和DMCA政策：保护知识产权",
          "description": "我们的版权和DMCA政策解决了有关版权侵权的问题。此政策概述了知识产权侵权报告程序，强调我们保护创意作品的承诺。"
        },
        {
          "title": "反垃圾邮件政策：维护无垃圾邮件环境",
          "description": "我们的反垃圾邮件政策强调我们反对未经请求的信息和垃圾邮件。我们致力于维护一个无垃圾邮件的生态系统，重视有意义的互动。"
        },
        {
          "title": "安全政策：确保数据和交易安全",
          "description": "我们的安全政策介绍了我们建立的措施，以保护您的数据和交易的安全。我们优先考虑您的信息和交易的安全，并详细说明了我们的做法和协议。"
        },
        {
          "title": "数据保留政策：保留您的个人数据",
          "description": "了解我们保留您的个人数据的时间长度以及影响数据保留期的因素。"
        },
        {
          "title": "用户责任：作为用户的角色",
          "description": "了解您作为我们平台用户的责任，包括遵守法律、尊重的行为和准确的信息。"
        },
        {
          "title": "账户终止：账户违规的后果",
          "description": "了解我们在用户违反条款或政策的情况下可能暂停或终止用户账户的情况。"
        },
        {
          "title": "政策修改：条款和政策的更新",
          "description": "了解我们何时以及如何更新我们的政策，以及您将如何被通知这些变更。"
        },
        {
          "title": "争议解决：处理争议和冲突",
          "description": "了解处理用户和[您公司名称]之间可能出现的争议的程序和机制。"
        },
        {
          "title": "责任限制：对损害的责任",
          "description": "了解我们对由您使用我们平台引起的任何损害的责任限制。"
        },
        {
          "title": "赔偿：保护免受责任",
          "description": "了解您的责任，您需要赔偿并使[您公司名称]免受任何索赔或责任。"
        },
        {
          "title": "适用法律和司法管辖：法律框架",
          "description": "了解适用于我们的条款、政策和任何潜在法律争议的法律和司法管辖区。"
        },
        {
          "title": "更新和通知：了解变更",
          "description": "了解我们如何就我们的政策、功能和服务的变更、更新和通知与用户沟通。"
        },
        {
          "title": "可访问性：确保包容性",
          "description": "了解我们致力于使我们的平台适用于所有用户，包括残疾人士。"
        },
        {
          "title": "联系信息：获取支持",
          "description": "在需要咨询、反馈、支持或涉及我们的政策和条款的任何问题时，找到全面的联系方式。"
        },
        {
          "title": "生效日期：政策生效日期",
          "description": "了解我们的政策和条款何时生效，以及这些文件的版本历史。"
        },
        {
          "title": "用户账户注销：流程和影响",
          "description": "了解注销用户账户的流程和影响，包括数据保留和重新激活。"
        },
        {
          "title": "沟通渠道：我们如何与您互动",
          "description": "探索我们与用户互动的各种沟通渠道，包括电子邮件通知、应用内消息和更新。"
        },
        {
          "title": "遵守行业法规：满足标准",
          "description": "了解我们的平台如何遵守行业特定的法规和标准，以确保安全和可信赖的环境。"
        },
        {
          "title": "儿童在线隐私保护：保护未成年人",
          "description": "了解我们保护儿童隐私的承诺，以及我们遵守《儿童在线隐私保护法》（COPPA）等相关法规。"
        },
        {
          "title": "用户反馈和贡献：促进改进",
          "description": "了解用户反馈、建议和对我们平台的贡献如何管理，并有可能用于改进。"
        },
        {
          "title": "国际数据传输：安全传输您的数据",
          "description": "了解您的数据可能传输到其他国家和地区，以及我们为保护您信息而采取的安全措施。"
        },
        {
          "title": "免责声明：第三方引用",
          "description": "了解我们平台上对第三方产品、服务或网站的引用和链接并不意味着[您公司名称]的认可。"
        },
        {
          "title": "与第三方的关系：用户与第三方的互动",
          "description": "了解我们的政策和条款如何适用于用户与第三方之间的关系，以及[您公司名称]的责任范围。"
        },
        {
          "title": "放弃权利：政策执行",
          "description": "了解我们放弃权利的情况，以及我们未能执行政策并不构成我们将来执行这些政策权利的放弃。"
        },
        {
          "title": "可分性：单独条款的适用性",
          "description": "了解可分性原则，即使其他条款无效，个别政策和条款的条款仍然具有适用性。"
        }
      ]
  },
  ko: {
    title: '개인 정보 보호 정책',
    subtitle: '최종 수정일: 2021-08-01',
    sub1: '소개',
    sub1_content: 'Avestock (설립 중) (&quot;우리&quot;, &quot;우리&quot; 또는 &quot;회사&quot;)는 사용자(각각 &quot;당신&quot; 또는 &quot;사용자&quot;)가 모바일 애플리케이션(앱), 웹 사이트 또는 기타 온라인 서비스(통칭 &quot;서비스&quot;)에 접속, 다운로드, 설치 또는 등록하는 사용자(각각 &quot;당신&quot; 또는 &quot;사용자&quot;)의 개인 정보를 보호하기 위해 노력하고 있습니다. 이 개인 정보 보호 정책은 서비스 이용 중 수집, 사용 및 공개하는 정보에 대한 저희의 관행을 설명합니다. 이 개인 정보 보호 정책을 주의 깊게 읽고 사용하여 합리적인 결정을 내리기를 권장합니다. 서비스를 이용함으로써 당신은 이 개인 정보 보호 정책의 조건에 동의하며, 계속적인 사용은 계속적인 동의를 의미합니다. 이 정책은 저희의 서비스 약관의 일부이며, 참조를 통해 포함됩니다. 이 개인 정보 보호 정책에서는 다음과 같은 내용을 알 수 있습니다:',
    sections: [
      "저희가 수집하는 정보",
      "쿠키 및 Google Analytics",
      "정보 사용 방법",
      '정보 공유 및 목적',
      '보관 기간',
      '정보 보안 조치',
      '광고',
      '광고 ID 및 광고 식별자'
    ],
    sub2: "지침",
    sub2_content: [
      {
            "title": "개인정보처리방침: 데이터 보호",
            "description": "개인정보처리방침은 개인정보를 어떻게 수집, 이용 및 보호하는지에 대해 상세히 설명합니다. 개인정보 보호는 최우선 사항이며, 이 정책은 데이터 처리 방식에 대한 통찰을 제공합니다."
          },
          {
            "title": "이용약관: 당사와의 계약",
            "description": "이용약관은 플랫폼과의 상호 작용을 위한 기반이 됩니다. 이 약관은 계정 생성, 이용, 지적재산권, 사용자 행동, 결제, 환불 및 책임과 같은 중요한 측면을 다룹니다."
          },
          {
            "title": "환불 정책: 투명한 환불 절차",
            "description": "환불 정책은 우리의 서비스에 대한 환불이 언제 가능한지에 대한 명확한 개요를 제공합니다. 이 정책은 공정성과 명확성을 유지하기 위한 절차와 기준을 설명합니다."
          },
          {
            "title": "쿠키 정책: 브라우징 경험 개선",
            "description": "쿠키 정책은 쿠키와 유사한 기술을 어떻게 사용하여 브라우징 경험을 최적화하는지 설명합니다. 이 정책은 쿠키의 작동 방식을 설명하고 사용을 관리할 수 있게 합니다."
          },
          {
            "title": "커뮤니티 지침: 긍정적인 커뮤니티 조성",
            "description": "커뮤니티 지침은 커뮤니티 내 모든 사용자에게 기대하는 행동을 정의합니다. 존중과 협력을 기반으로 이러한 지침은 모두를 위한 긍정적이고 안전한 환경을 보장합니다."
          },
          {
            "title": "저작권 및 DMCA 정책: 지적 재산권 보호",
            "description": "저작권 및 DMCA 정책은 저작권 침해에 대한 우려 사항을 다룹니다. 이 정책은 저작권 침해 신고 절차를 설명하며 창의적인 작품 보호 의지를 강조합니다."
          },
          {
            "title": "스팸 방지 정책: 스팸 없는 환경 조성",
            "description": "스팸 방지 정책은 불필요한 메시지와 스팸에 대한 태도를 강조합니다. 의미 있는 상호 작용을 우선시하는 스팸 없는 환경 조성에 대한 우리의 헌신을 보여줍니다."
          },
          {
            "title": "보안 정책: 데이터 및 거래 보안",
            "description": "보안 정책은 데이터와 거래를 어떻게 보호하는지에 대한 조치를 밝혀줍니다. 정보와 거래 보안을 중요시하며, 이 정책은 우리의 관행과 프로토콜에 대한 세부 정보를 포함합니다."
          },
          {
            "title": "데이터 보관 정책: 개인 데이터 저장",
            "description": "개인 데이터를 얼마나 오래 보관하는지와 보관 기간에 영향을 주는 요소에 대해 알아보세요."
          },
          {
            "title": "사용자 책임: 사용자로서의 역할",
            "description": "플랫폼 사용자로서의 책임을 이해하고, 이는 법을 준수하는 행동, 예의 바른 행동 및 정확한 정보를 포함합니다."
          },
          {
            "title": "계정 비활성화: 이용약관 위반에 따른 결과",
            "description": "이용약관 위반으로 인해 계정을 어떻게 비활성화하거나 삭제할 수 있는지에 대해 알아보세요."
          },
          {
            "title": "정책 업데이트: 조건의 갱신",
            "description": "정책과 조건을 어떻게 언제, 어떻게 갱신하는지 및 이러한 변경 사항에 대한 통지 방법을 알아보세요."
          },
          {
            "title": "분쟁 해결: 분쟁 및 갈등 처리",
            "description": "사용자와 [회사명] 사이에 발생할 수 있는 분쟁을 어떻게 처리하는지에 대한 절차와 매커니즘을 알아보세요."
          },
          {
            "title": "책임 한계: 손해에 대한 책임",
            "description": "플랫폼 이용으로 인한 손해에 대한 책임의 한계를 이해하세요."
          },
          {
            "title": "면책 및 보호: 보상 의무",
            "description": "보상 의무를 이해하고, [회사명]에 대한 어떠한 청구나 책임에서 보호되어야 할 의무를 파악하세요."
          },
          {
            "title": "적용 법률 및 관할권: 법적 틀",
            "description": "조건, 정책 및 가능한 법적 분쟁을 규제하는 법률 및 관할권에 대해 알아보세요."
          },
          {
            "title": "업데이트 및 통지: 변경 사항 알림",
            "description": "조건, 정책, 기능 및 서비스에 대한 업데이트, 변경 사항 및 통지를 사용자에게 어떻게 전달하는지 알아보세요."
          },
          {
            "title": "접근성: 모든 사용자를 위한 포용성",
            "description": "장애를 가진 사용자를 포함한 모든 사용자를 위해 플랫폼을 접근 가능하게 만들기 위한 우리의 노력을 이해하세요."
          },
          {
            "title": "연락처 정보: 지원을 위한 커뮤니케이션",
            "description": "문의, 피드백, 지원 및 정책 및 조건과 관련된 모든 문제에 대한 완전한 연락처 정보를 찾아보세요."
          },
          {
            "title": "시행일: 조건의 적용일",
            "description": "정책 및 조건이 언제 시행되며 이러한 문서의 버전 기록을 알아보세요."
          },
          {
            "title": "사용자 계정 비활성화: 절차와 영향",
            "description": "사용자 계정 비활성화 절차와 영향, 데이터 보존 및 재활성화에 대해 알아보세요."
          },
          {
            "title": "통신 채널: 사용자와의 상호 작용 방법",
            "description": "사용자와 상호 작용하기 위해 사용하는 다양한 통신 채널을 탐색해보세요. 이메일 통지, 앱 메시지 및 업데이트를 포함합니다."
          },
          {
            "title": "산업 규정 준수: 안전한 환경을 위한 준수",
            "description": "플랫폼이 안전하고 신뢰할 수 있는 환경을 제공하기 위해 특정 산업 규정과 표준을 어떻게 준수하는지 알아보세요."
          },
          {
            "title": "온라인 어린이 개인정보보호: 어린이 보호",
            "description": "아동 개인정보 보호를 위한 헌신과 어린이 온라인 개인정보 보호 법 (COPPA) 및 유사한 규정을 어떻게 준수하는지 알아보세요."
          },
          {
            "title": "사용자 피드백 및 기여: 개선에 기여",
            "description": "사용자 피드백, 제안 및 기여가 플랫폼에서 어떻게 관리되고 개선에 활용되는지 이해하세요."
          },
          {
            "title": "국제 데이터 이전: 데이터 안전한 이전",
            "description": "데이터를 다른 국가 및 지역으로 이전하는 가능성 및 정보 보호를 위한 조치를 어떻게 취했는지 알아보세요."
          },
          {
            "title": "면책 조항: 제3자 참조",
            "description": "플랫폼에서 제3자 제품, 서비스 또는 웹 사이트에 대한 참조 및 링크가 [회사명]의 지지를 의미하지 않는다는 점을 이해하세요."
          },
          {
            "title": "제3자와의 관계: 사용자와 제3자 간 상호 작용",
            "description": "정책 및 조건이 사용자와 제3자 간 관계에 어떻게 적용되며 [회사명]이 어느 정도의 책임을 질지에 대해 알아보세요."
          },
          {
            "title": "권리 포기: 정책 시행",
            "description": "권리 포기를 이해하고, 우리의 정책을 시행하지 않음으로써 향후 시행 권리를 포기하는 것은 아니라는 점을 이해하세요."
          },
          {
            "title": "분할 가능성: 개별 조항의 시행 가능성",
            "description": "분할 가능성 원칙을 이해하고, 다른 조항이 유효하지 않더라도 개별 정책 및 조건이 여전히 유효할 수 있다는 사실을 이해하세요."
          }
        ]
  },
  tr: {
    title: 'Gizlilik Politikası',
    subtitle: 'Son Güncelleme: 2021-08-01',
    sub1: 'Giriş',
    sub1_content: 'Avestock (kuruluş aşamasında) (&quot;biz&quot;, &quot;biz&quot; veya &quot;Şirket&quot;) kullanıcıların (her biri, &quot;siz&quot; veya &quot;Kullanıcı&quot;) mobil uygulamamıza (Uygulama), web sitemize veya herhangi bir diğer çevrimiçi hizmetimize erişmesi, indirmesi, kurması veya kaydolması (birlikte: &quot;Hizmetler&quot;) için gizliliğinizi önemsemekte ve korumak için çaba sarf etmektedir. Bu Gizlilik Politikası, Hizmetlerin kullanımı sırasında bilgilerinizi toplama, kullanma ve açıklama uygulamalarımızı açıklamaktadır. Bilinçli kararlar vermenize yardımcı olmak için bu Gizlilik Politikasını dikkatlice okumanızı ve kullanmanızı öneririz. Hizmetleri kullanarak, bu Gizlilik Politikasının koşullarını kabul etmiş olursunuz ve devam eden kullanım, sürekli bir anlaşma oluşturur. Bu politika, Hizmet Şartlarımızın bir parçasıdır ve referans yoluyla dahil edilir. Bu Gizlilik Politikasında, aşağıdakiler hakkında bilgi edineceksiniz:',
    sections: [
      "Hangi bilgileri topluyoruz",
      "Çerezler ve Google Analytics",
      "Bilgilerinizi nasıl kullanıyoruz",
      'Bilgi paylaşımı ve amaçları',
      'Saklama süresi',
      'Bilgi güvenliği önlemleri',
      'Reklamlar',
      'Reklam Kimliği ve Reklam Kimliği'
    ],
    sub2: "Kılavuzlar",
    sub2_content: [
          {
            "title": "Gizlilik Politikası: Verilerinizin Korunması",
            "description": "Gizlilik politikamız, kişisel bilgilerinizi nasıl topladığımızı, kullanığımızı ve koruduğumuzu ayrıntılı bir şekilde açıklar. Gizliliğiniz en yüksek önceliğimizdir ve bu politika, verilerinizin nasıl işlendiği hakkında bilgi sağlar."
          },
          {
            "title": "Kullanım Koşulları: Bizimle Yapılan Anlaşma",
            "description": "Kullanım koşullarımız, platformumuzla etkileşiminiz için temel oluşturur. Bu koşullar, hesap oluşturma, kullanım, fikri mülkiyet, kullanıcı davranışı, ödeme, iade ve sorumluluk gibi önemli konuları kapsar."
          },
          {
            "title": "İade Politikası: Şeffaf İade Süreci",
            "description": "İade politikamız, hizmetlerimiz için ne zaman iade yapılabileceği konusunda net bir genel bakış sunar. Bu politika, adil ve açık bir şekilde süreci ve kriterleri belirler."
          },
          {
            "title": "Çerez Politikası: Göz Atma Deneyiminizi Geliştirme",
            "description": "Çerez politikamız, çerezleri ve benzer teknolojileri nasıl kullandığımızı ve göz atma deneyiminizi nasıl optimize ettiğimizi açıklar. Bu politika, çerezlerin nasıl çalıştığını açıklar ve kullanımınızı yönetmenizi sağlar."
          },
          {
            "title": "Topluluk Kuralları: Olumlu Bir Topluluk Oluşturma",
            "description": "Topluluk kurallarımız, topluluk içindeki tüm kullanıcılardan beklediğimiz davranışı tanımlar. Saygı ve işbirliğine dayalı olarak, bu kurallar herkes için pozitif ve güvenli bir ortam sağlar."
          },
          {
            "title": "Telif Hakkı ve DMCA Politikası: Fikri Mülkiyetin Korunması",
            "description": "Telif hakkı ve DMCA politikamız, telif hakkı ihlali endişelerini ele alır. Bu politika, telif hakkı ihlali bildirimi sürecini açıklar ve yaratıcı eserleri koruma taahhüdümüzü vurgular."
          },
          {
            "title": "Spam Karşıtı Politika: Spam'sız Bir Ortamın Oluşturulması",
            "description": "Spam karşıtı politikamız, istenmeyen iletilere ve spamlara karşı tutumumuzu vurgular. Anlamlı etkileşimleri önceliklendiren bir spam'sız bir ortam yaratma konusunda taahhüdümüz vardır."
          },
          {
            "title": "Güvenlik Politikası: Veri ve İşlem Güvenliğinin Sağlanması",
            "description": "Güvenlik politikamız, verilerinizi ve işlemlerinizi nasıl koruduğumuza dair aldığımız önlemleri aydınlatır. Bilgilerinizin ve işlemlerinizin güvenliği bizim için önceliklidir ve bu politika uygulamalarımızın ayrıntılarını içerir."
          },
          {
            "title": "Veri Saklama Politikası: Kişisel Verilerin Saklanması",
            "description": "Kişisel verilerinizi ne kadar süre sakladığımızı ve saklama süresini etkileyen faktörleri öğrenin."
          },
          {
            "title": "Kullanıcı Sorumlulukları: Kullanıcı Olarak Siz",
            "description": "Platformumuzun bir kullanıcısı olarak sizin sorumluluklarınızı anlayın, bu da yasalara uyumlu davranış, saygılı davranış ve doğru bilgi içerir."
          },
          {
            "title": "Hesap Devre Dışı Bırakma: Kullanım Koşulları İhlalinin Sonuçları",
            "description": "Kullanım koşullarımıza ihlal nedeniyle hesapları nasıl askıya alabileceğimiz veya silebileceğimiz hakkında bilgi edinin."
          },
          {
            "title": "Politika Değişiklikleri: Koşullarımızın Güncellenmesi",
            "description": "Politika ve koşullarımızı nasıl ve ne zaman güncellediğimize ve bu tür değişikliklerin nasıl bildirileceğine dair bilgi edinin."
          },
          {
            "title": "Anlaşmazlık Çözümü: Anlaşmazlıklarla Başa Çıkma",
            "description": "Kullanıcılar ve [Firmanızın Adı] arasında ortaya çıkabilecek anlaşmazlıkların nasıl ele alınacağına dair prosedürleri ve mekanizmaları öğrenin."
          },
          {
            "title": "Sorumluluk Sınırlaması: Zararlar İçin Sorumluluk",
            "description": "Platformumuzu kullanımınızdan kaynaklanan herhangi bir zarar için sorumluluğumuzun sınırlamalarını anlayın."
          },
          {
            "title": "Tazminat: Sorumluluktan Koruma",
            "description": "Tazminat yükümlülüğünüzü ve [Firmanızın Adı]'ı herhangi bir iddia veya sorumluluktan koruma gereksiniminizi öğrenin."
          },
          {
            "title": "Uygulanabilir Kanunlar ve Yargı Yetkisi: Hukuki Çerçeve",
            "description": "Şartlarımız, politikalarımız ve olası yasal anlaşmazlıklar için geçerli olan yasaları ve yargı yetkilerini öğrenin."
          },
          {
            "title": "Güncellemeler ve Bildirimler: Değişikliklerden Haberdar Olma",
            "description": "Şartlarımız, politikalarımız, özelliklerimiz ve hizmetlerimizdeki değişiklikleri, güncellemeleri ve bildirimleri nasıl ilettiğimiz hakkında bilgi edinin."
          },
          {
            "title": "Erişilebilirlik: Tüm Kullanıcılar İçin Kapsayıcılık",
            "description": "Tüm kullanıcılar, özellikle engelliler için platformumuzu erişilebilir hale getirme taahhüdümüzü anlayın."
          },
          {
            "title": "İletişim Bilgileri: Destek İçin İletişim",
            "description": "Sorular, geri bildirimler, destek veya politika ve şartlarımızla ilgili konularda eksiksiz iletişim bilgilerini bulun."
          },
          {
            "title": "Yürürlük Tarihi: Politika Yürürlüğe Girme Tarihi",
            "description": "Politika ve şartlarımızın ne zaman yürürlüğe girdiğini ve bu belgelerin versiyon tarihçesini öğrenin."
          },
          {
            "title": "Kullanıcı Hesap İptali: Süreç ve Etkiler",
            "description": "Kullanıcı hesabınızın iptal süreci ve etkileri, veri saklama ve yeniden etkinleştirme hakkında bilgi edinin."
          },
          {
            "title": "İletişim Kanalları: Sizlerle Nasıl İletişim Kuruyoruz",
            "description": "Kullanıcılarla iletişim kurduğumuz farklı iletişim kanallarını keşfedin; e-posta bildirimleri, uygulama içi mesajlar ve güncellemeler dahil."
          },
          {
            "title": "Sektör Düzenlemelerine Uygunluk: Standartları Karşılama",
            "description": "Platformumuzun güvenli ve güvenilir bir ortam sağlamak için belirli sektör düzenlemelerine ve standartlarına nasıl uyumlu olduğunu öğrenin."
          },
          {
            "title": "Çocukların Çevrimiçi Gizliliği: Miniklerin Korunması",
            "description": "Çocukların gizliliğini koruma taahhüdümüzü ve Çocuk Çevrimiçi Gizlilik Koruma Yasası (COPPA) ve benzer düzenlemelere nasıl uyum sağladığımızı öğrenin."
          },
          {
            "title": "Kullanıcı Geri Bildirimleri ve Katkıları: İyileştirmeye Katkıda Bulunma",
            "description": "Kullanıcı geri bildirimi, öneriler ve platformumuza yapılan katkıların nasıl yönetildiğini ve nasıl iyileştirmelerde kullanılabileceğini anlayın."
          },
          {
            "title": "Uluslararası Veri Aktarımı: Verilerinizin Güvenli Aktarımı",
            "description": "Verilerinizin başka ülkelere ve bölgelere aktarılmasının mümkün olduğu durumları ve bilgilerinizi korumak için aldığımız güvenlik önlemlerini öğrenin."
          },
          {
            "title": "İhtar Edilmeyen Ürün ve Hizmetler: Üçüncü Taraf Referansları",
            "description": "Platformumuzda üçüncü taraf ürünleri, hizmetleri veya web sitelerine yapılan referanslar ve bağlantıların [Firmanızın Adı] tarafından onaylandığı anlamına gelmediğini anlayın."
          },
          {
            "title": "Üçüncü Taraflarla İlişkiler: Kullanıcıların Üçüncü Taraflarla Etkileşimi",
            "description": "Politika ve koşullarımızın kullanıcıların üçüncü taraflarla ilişkilerine nasıl uygulandığını ve [Firmanızın Adı]'ın ne kadar sorumlu olduğunu öğrenin."
          },
          {
            "title": "Haklardan Feragat: Politika Uygulanması",
            "description": "Haklardan feragatimizi anlayın ve politikalarımızı uygulamamamızın gelecekte bu politikaları uygulamama hakkımızdan feragat anlamına gelmediğini öğrenin."
          },
          {
            "title": "Bölünebilirlik: Tek Başına Hüküm İhtimali",
            "description": "Bölünebilirlik ilkesini öğrenin; diğer hükümler geçerli olmasa bile tek tek politika ve koşulların hala geçerli olabileceği."
          }
        ]
  },
}

// <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl font-argentinum">
// Privacy Policy
// </h1>
// <p className='max-w-lg text-sm'>
// Last Revised: May 12, 2021
// </p>
// </section>
// <section className='justify-start px-12 py-20 text-left text-black bg-white lg:px-24'>
// <h2 className='mb-6 text-3xl font-semibold text-primary'>
// Introduction
// </h2>
// <div className='mb-8'>
// <p className='mb-4'>
// Avestock (in incorporation) (&quot;us,&quot; &quot;we,&quot; or &quot;Company&quot;) values your privacy and is dedicated to safeguarding the privacy of users (each, &quot;you&quot; or &quot;User&quot;) who access, download, install, or register for our mobile application (the &quot;Application&quot;), website, or any other online services (collectively: the &quot;Services&quot;). 
// This Privacy Policy outlines our practices concerning collecting, using, and disclosing your information during your use of the Services. We encourage you to carefully read and use this Privacy Policy to make informed decisions. By using the Services, you agree to this Privacy Policy&apos;s terms, and your continued use constitutes ongoing agreement. This policy is part of our Terms of Service and is incorporated by reference. In this Privacy Policy, you&apos;ll learn about:
// </p>
// <ul className='flex flex-col gap-3'>
//   <li className='pl-2 ml-10 list-disc'>
//     What information we collect
//   </li>
//   <li className='pl-2 ml-10 list-disc'>
//     Cookies and Google Analytics
//   </li>
//   <li className='pl-2 ml-10 list-disc'>
//     How we use your information
//   </li>
//   <li className='pl-2 ml-10 list-disc'>
//     Sharing information and purposes
//   </li>
//   <li className='pl-2 ml-10 list-disc'>
//     Retention duration
//   </li>
//   <li className='pl-2 ml-10 list-disc'>
//     Information security measures
//   </li>
//   <li className='pl-2 ml-10 list-disc'>
//     Advertisements
//   </li>
//   <li className='pl-2 ml-10 list-disc'>
//     Advertising ID and Advertising Identifier
//   </li>
// </ul>
// </div>
// <h2 className='mt-4 mb-6 text-3xl font-semibold text-primary'>
// Guidelines
// </h2>
// <div className='flex flex-col gap-6'>
// {
//   data.sections.map((section, index) => (
//     <div key={index} className='flex flex-col gap-3 pb-6 border-b border-gray-200'>
//       <h1 className='text-xl font-semibold text-gray-800 text-pr'>{section.title}</h1>
//       <p className='max-w-lg text-sm text-gray-600'>{section.description}</p>
//     </div>
//   ))
  
// }
// </div>
// </section>

