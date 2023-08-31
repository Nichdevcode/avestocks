"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useTranslation } from '@/hooks/useTranslationContext'
import { IPageContent } from '@/dictionaries/privacy'
import { PrivacyContent } from '@/dictionaries/privacy'
import { useEffect, useState } from 'react'

const PrivacyPolicy = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = useState<IPageContent | null>(null)

  useEffect(() => {
    setTranslated(PrivacyContent[language])
  }, [language])

  return (

    <div className='overflow-hidden'>
        <Header />
        <section className='flex flex-col items-center justify-center gap-3 px-12 pt-40 text-center text-white bg-white py-28 lg:px-24 grad-to-right'>
            <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl font-argentinum">
              {t?.title || "Privacy Policy"}
            </h1>
            <p className='max-w-lg text-sm'>
              {t?.subtitle || "Last Revised: May 12, 2021"}
            </p>
        </section>
        <section className='justify-start px-12 py-20 text-left text-black bg-white lg:px-24'>
            <h2 className='mb-6 text-3xl font-semibold text-primary'>
              {t?.sub1 || "Introduction"}
            </h2>
            <div className='mb-8'>
              <p className='mb-4'>
             {t?.sub1_content || "Avestock (in incorporation) (&quot;us,&quot; &quot;we,&quot; or &quot;Company&quot;) values your privacy and is dedicated to safeguarding the privacy of users (each, &quot;you&quot; or &quot;User&quot;) who access, download, install, or register for our mobile application (the &quot;Application&quot;), website, or any other online services (collectively: the &quot;Services&quot;).This Privacy Policy outlines our practices concerning collecting, using, and disclosing your information during your use of the Services. We encourage you to carefully read and use this Privacy Policy to make informed decisions. By using the Services, you agree to this Privacy Policy&apos;s terms, and your continued use constitutes ongoing agreement. This policy is part of our Terms of Service and is incorporated by reference. In this Privacy Policy, you&apos;ll learn about:"}
              </p>
              <ul className='flex flex-col gap-3'>
                {
                  t?.sections.map((item, index) => (
                    <li key={index} className='pl-2 ml-10 list-disc'>{item}</li>
                  ))
                }
              </ul>
            </div>
            <h2 className='mt-4 mb-6 text-3xl font-semibold text-primary'>
              {t?.sub2 || "Guidelines"}
            </h2>
            <div className='flex flex-col gap-6'>
              {
                t?.sub2_content.map((section, index) => (
                  <div key={index} className='flex flex-col gap-3 pb-6 border-b border-gray-200'>
                    <h1 className='text-xl font-semibold text-gray-800 text-pr'>{section.title}</h1>
                    <p className='max-w-lg text-sm text-gray-600'>{section.description}</p>
                  </div>
                ))
                
              }
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default PrivacyPolicy

// Avestock (in incorporation) ("us," "we," or "Company") values your privacy and is dedicated to safeguarding the privacy of users (each, "you" or "User") who access, download, install, or register for our mobile application (the "Application"), website, or any other online services (collectively: the "Services"). This Privacy Policy outlines our practices concerning collecting, using, and disclosing your information during your use of the Services. We encourage you to carefully read and use this Privacy Policy to make informed decisions. By using the Services, you agree to this Privacy Policy's terms, and your continued use constitutes ongoing agreement. This policy is part of our Terms of Service and is incorporated by reference. In this Privacy Policy, you'll learn about:

// What information we collect
// Cookies and Google Analytics
// How we use your information
// Sharing information and purposes
// Retention duration
// Information security measures
// Advertisements
// Advertising ID and Advertising Identifier
// Thank you for choosing Avestock as your partner in privacy.


const data = {
  "sections": [
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
}
