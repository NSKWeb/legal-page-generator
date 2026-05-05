const fill = (str, fields) =>
  str.replace(/\{\{(\w+)\}\}/g, (_, k) => fields[k] || `[${k}]`)

const fmtDate = (val) => {
  if (!val) return '[Date]'
  const d = new Date(val + 'T12:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

/* ─── Privacy Policy ──────────────────────────────────────────── */
function privacyPolicy(f) {
  const cookieParagraph = f.cookiesUsed === 'no'
    ? 'We do not use cookies on this website.'
    : f.cookiesUsed === 'essential'
    ? 'We use only essential cookies necessary for the proper functioning of this website. These cookies cannot be disabled.'
    : 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You may instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'

  const thirdParties = f.thirdParties
    ? `<p>We may share your information with third-party service providers, including: <strong>${f.thirdParties}</strong>. These providers are contractually obligated to keep your information confidential and use it only as directed by us.</p>`
    : '<p>We do not share your personal information with third parties except as required by law.</p>'

  const sections = [
    {
      title: '1. Information We Collect',
      body: `<p>We collect information you provide directly to us and information collected automatically through your use of our services. This may include: <strong>${f.dataTypes || '[list of data types]'}</strong>.</p>`,
    },
    {
      title: '2. How We Use Your Information',
      body: `<p>We use the information we collect to: <strong>${f.dataUse || '[describe use]'}</strong>.</p>`,
    },
    {
      title: '3. Cookies and Tracking Technologies',
      body: `<p>${cookieParagraph}</p>`,
    },
    {
      title: '4. Sharing of Information',
      body: thirdParties,
    },
    {
      title: '5. Data Retention',
      body: `<p>We retain personal information for as long as necessary to provide our services and comply with our legal obligations. When data is no longer needed, we securely delete or anonymize it.</p>`,
    },
    {
      title: '6. Your Rights',
      body: `<p>Depending on your jurisdiction (${f.country || '[Country]'}), you may have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <strong>${f.contactEmail || '[email]'}</strong>.</p>`,
    },
    {
      title: '7. Data Security',
      body: `<p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>`,
    },
    {
      title: '8. Children\'s Privacy',
      body: `<p>Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>`,
    },
    {
      title: '9. Changes to This Policy',
      body: `<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date below.</p>`,
    },
    {
      title: '10. Contact Us',
      body: `<p>If you have questions about this Privacy Policy, please contact us at: <strong>${f.contactEmail || '[email]'}</strong>.<br/>Website: <strong>${f.websiteUrl || '[url]'}</strong></p>`,
    },
  ]

  return { title: 'Privacy Policy', companyName: f.companyName, websiteUrl: f.websiteUrl, effectiveDate: fmtDate(f.effectiveDate), sections }
}

/* ─── Terms of Service ────────────────────────────────────────── */
function termsOfService(f) {
  const paymentSection = f.subscriptionType === 'free'
    ? '<p>Our service is provided free of charge. We reserve the right to introduce paid features in the future with appropriate notice.</p>'
    : f.subscriptionType === 'subscription'
    ? '<p>Access to our service requires a paid subscription. Subscriptions are billed on a recurring basis. You may cancel at any time; cancellation takes effect at the end of the current billing period. We do not offer prorated refunds for unused subscription time unless required by applicable law.</p>'
    : '<p>Certain features or products require a one-time payment. All sales are final unless otherwise stated in our Refund Policy.</p>'

  const sections = [
    {
      title: '1. Acceptance of Terms',
      body: `<p>By accessing or using <strong>${f.websiteUrl || '[website]'}</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you may not use our services.</p>`,
    },
    {
      title: '2. Description of Service',
      body: `<p>${f.serviceDescription || '[Describe service here]'}</p>`,
    },
    {
      title: '3. User Eligibility',
      body: `<p>You must be at least <strong>${f.ageRequirement || '18'} years old</strong> to use our services. By using our services, you represent and warrant that you meet this requirement.</p>`,
    },
    {
      title: '4. Prohibited Uses',
      body: `<p>You agree not to use our services for: <strong>${f.prohibitedUses || '[list prohibited uses]'}</strong>, or any activity that violates applicable law.</p>`,
    },
    {
      title: '5. Payment Terms',
      body: paymentSection,
    },
    {
      title: '6. Intellectual Property',
      body: `<p>All content, features, and functionality on our platform are the exclusive property of <strong>${f.companyName || '[Company]'}</strong> and are protected by applicable intellectual property laws.</p>`,
    },
    {
      title: '7. Termination',
      body: `<p>We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to our users or us.</p>`,
    },
    {
      title: '8. Disclaimer of Warranties',
      body: `<p>Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.</p>`,
    },
    {
      title: '9. Limitation of Liability',
      body: `<p>To the fullest extent permitted by law, <strong>${f.companyName || '[Company]'}</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>`,
    },
    {
      title: '10. Governing Law',
      body: `<p>These Terms shall be governed by and construed in accordance with the laws of <strong>${f.country || '[Jurisdiction]'}</strong>, without regard to its conflict of law provisions.</p>`,
    },
    {
      title: '11. Contact',
      body: `<p>For questions about these Terms, contact us at <strong>${f.contactEmail || '[email]'}</strong>.</p>`,
    },
  ]

  return { title: 'Terms of Service', companyName: f.companyName, websiteUrl: f.websiteUrl, effectiveDate: fmtDate(f.effectiveDate), sections }
}

/* ─── Cookie Policy ───────────────────────────────────────────── */
function cookiePolicy(f) {
  const consentText = f.consentMechanism === 'banner'
    ? 'When you first visit our website, you will be presented with a cookie consent banner. By clicking "Accept," you consent to our use of cookies as described in this policy.'
    : f.consentMechanism === 'settings'
    ? 'You can manage your cookie preferences through your browser settings or account preferences at any time.'
    : 'We only use essential cookies that are strictly necessary for the operation of this website. These do not require your consent.'

  const sections = [
    {
      title: '1. What Are Cookies?',
      body: `<p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>`,
    },
    {
      title: '2. Cookies We Use',
      body: `<p>We use the following types of cookies: <strong>${f.cookieTypes || '[list cookie types]'}</strong>.</p>`,
    },
    {
      title: '3. Cookie Duration',
      body: `<p>${f.cookieDuration || 'Some cookies are session-based and expire when you close your browser. Others persist for a set period of time.'}</p>`,
    },
    {
      title: '4. Your Consent',
      body: `<p>${consentText}</p>`,
    },
    {
      title: '5. Managing Cookies',
      body: `<p>Most browsers allow you to refuse or delete cookies. The methods for doing so vary from browser to browser and from version to version. You can obtain up-to-date information about blocking and deleting cookies via your browser's help documentation.</p><p>Please note that blocking all cookies may impact the functionality of some parts of our website.</p>`,
    },
    {
      title: '6. Contact Us',
      body: `<p>If you have questions about our use of cookies, please contact us at <strong>${f.contactEmail || '[email]'}</strong>.</p>`,
    },
  ]

  return { title: 'Cookie Policy', companyName: f.companyName, websiteUrl: f.websiteUrl, effectiveDate: fmtDate(f.effectiveDate), sections }
}

/* ─── Disclaimer ──────────────────────────────────────────────── */
function disclaimer(f) {
  const contentWarning = {
    financial: 'The information on this website is for general informational purposes only and does not constitute financial, investment, or tax advice. Always consult a qualified financial advisor before making investment decisions.',
    medical: 'The information on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before making health decisions.',
    legal: 'The information on this website is for general informational purposes only and does not constitute legal advice. Always consult a qualified attorney for advice specific to your situation.',
    general: 'The information on this website is provided for general informational purposes only and makes no representation or warranty of any kind.',
  }[f.contentType || 'general']

  const externalSection = f.externalLinks === 'yes'
    ? '<p>Our website may contain links to external websites. We have no control over the content and availability of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>'
    : ''

  const sections = [
    {
      title: '1. General Disclaimer',
      body: `<p>${contentWarning}</p>${f.disclaimerDetails ? `<p>${f.disclaimerDetails}</p>` : ''}`,
    },
    {
      title: '2. Accuracy of Information',
      body: `<p>While we strive to keep the information on <strong>${f.websiteUrl || '[website]'}</strong> up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information provided.</p>`,
    },
    {
      title: '3. Limitation of Liability',
      body: `<p><strong>${f.companyName || '[Company]'}</strong> will not be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from the use of information on this website.</p>`,
    },
    ...(externalSection ? [{ title: '4. External Links', body: externalSection }] : []),
    {
      title: externalSection ? '5. Contact Us' : '4. Contact Us',
      body: `<p>If you have any questions about this disclaimer, please contact us at <strong>${f.contactEmail || '[email]'}</strong>.</p>`,
    },
  ]

  return { title: 'Disclaimer', companyName: f.companyName, websiteUrl: f.websiteUrl, effectiveDate: fmtDate(f.effectiveDate), sections }
}

/* ─── Refund Policy ───────────────────────────────────────────── */
function refundPolicy(f) {
  const productDesc = {
    digital: 'digital products and downloads',
    saas: 'SaaS subscriptions and software licenses',
    physical: 'physical products',
    service: 'services and consulting engagements',
  }[f.productType || 'digital']

  const sections = [
    {
      title: '1. Overview',
      body: `<p>We stand behind our ${productDesc}. If you are not satisfied with your purchase, you may be eligible for a refund under the conditions outlined below.</p>`,
    },
    {
      title: '2. Refund Window',
      body: `<p>Refund requests must be submitted within <strong>${f.refundWindow || '30'} days</strong> of the original purchase date. Requests submitted after this period will not be eligible for a refund.</p>`,
    },
    {
      title: '3. Eligibility Conditions',
      body: `<p>${f.refundConditions || 'To be eligible for a refund, the product or service must meet our standard return conditions. Please contact our support team to initiate a request.'}</p>`,
    },
    ...(f.nonRefundable ? [{
      title: '4. Non-Refundable Items',
      body: `<p>The following are not eligible for refunds: <strong>${f.nonRefundable}</strong>.</p>`,
    }] : []),
    {
      title: f.nonRefundable ? '5. How to Request a Refund' : '4. How to Request a Refund',
      body: `<p>To request a refund, email us at <strong>${f.contactEmail || '[email]'}</strong> with your order number and reason for the request. We will review your request and respond within 2 business days.</p>`,
    },
    {
      title: f.nonRefundable ? '6. Processing Time' : '5. Processing Time',
      body: `<p>Approved refunds will be processed within <strong>${f.processTime || '5–7 business days'}</strong> and issued to the original payment method.</p>`,
    },
    {
      title: f.nonRefundable ? '7. Contact Us' : '6. Contact Us',
      body: `<p>For questions about our refund policy, contact us at <strong>${f.contactEmail || '[email]'}</strong>.</p>`,
    },
  ]

  return { title: 'Refund Policy', companyName: f.companyName, websiteUrl: f.websiteUrl, effectiveDate: fmtDate(f.effectiveDate), sections }
}

/* ─── EULA ────────────────────────────────────────────────────── */
function eula(f) {
  const licenseScope = {
    single: 'a single individual on a single device',
    multi: 'multiple users within a single organization',
    enterprise: 'unlimited users within a single enterprise organization',
  }[f.licenseType || 'single']

  const sections = [
    {
      title: '1. Grant of License',
      body: `<p><strong>${f.companyName || '[Company]'}</strong> grants you a non-exclusive, non-transferable, limited license to install and use <strong>${f.productName || '[Product]'}</strong> for ${licenseScope}, subject to the terms of this Agreement.</p>`,
    },
    {
      title: '2. Restrictions',
      body: `<p>You may not: ${f.restrictions || 'copy, modify, distribute, sell, or lease any part of the software; reverse engineer or attempt to extract the source code; sublicense or transfer the software to another party.'}</p>`,
    },
    {
      title: '3. Intellectual Property',
      body: `<p>The software and all intellectual property rights therein are and shall remain the property of <strong>${f.companyName || '[Company]'}</strong>. This Agreement does not convey to you any rights of ownership in or related to the software.</p>`,
    },
    {
      title: '4. Updates and Support',
      body: `<p><strong>${f.companyName || '[Company]'}</strong> may, at its sole discretion, provide updates, patches, or new versions of the software. Such updates may be subject to additional terms.</p>`,
    },
    {
      title: '5. Termination',
      body: `<p>This Agreement is effective until terminated. Your rights under this Agreement will terminate automatically without notice if you fail to comply with any term herein. Upon termination, you must destroy all copies of the software.</p>`,
    },
    {
      title: '6. Disclaimer of Warranties',
      body: `<p>The software is provided "as is," without warranty of any kind. <strong>${f.companyName || '[Company]'}</strong> disclaims all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>`,
    },
    {
      title: '7. Limitation of Liability',
      body: `<p>To the fullest extent permitted by law, <strong>${f.companyName || '[Company]'}</strong> shall not be liable for any damages arising out of the use or inability to use the software.</p>`,
    },
    {
      title: '8. Governing Law',
      body: `<p>This Agreement shall be governed by the laws of <strong>${f.country || '[Jurisdiction]'}</strong>.</p>`,
    },
    {
      title: '9. Contact',
      body: `<p>For licensing inquiries, contact <strong>${f.contactEmail || '[email]'}</strong>.</p>`,
    },
  ]

  return { title: `End User License Agreement — ${f.productName || '[Product]'}`, companyName: f.companyName, websiteUrl: f.websiteUrl, effectiveDate: fmtDate(f.effectiveDate), sections }
}

/* ─── About Us ────────────────────────────────────────────────── */
function aboutUs(f) {
  const companyTypeLabel = {
    startup:   'startup',
    smb:       'small business',
    enterprise:'enterprise organisation',
    nonprofit: 'non-profit organisation',
    freelance: 'independent professional',
  }[f.companyType || 'startup']

  const storySection = f.ourStory
    ? [{ title: '3. Our Story', body: `<p>${f.ourStory}</p>` }]
    : []

  const valuesSection = f.coreValues
    ? [{ title: `${storySection.length ? '4' : '3'}. Our Values`, body: `<p>${f.coreValues}</p>` }]
    : []

  const teamSection = f.teamSize && f.teamSize !== ''
    ? [{
        title: `${storySection.length + valuesSection.length + 3}. Our Team`,
        body: `<p>We are a ${f.teamSize === '1' ? 'solo-founded' : `team of ${f.teamSize} people`}${f.headquartersLocation ? `, based in ${f.headquartersLocation}` : ''}. Every member of our team is driven by the same goal: ${f.missionStatement ? f.missionStatement.split('.')[0].toLowerCase() + '.' : 'delivering exceptional results for our customers.'}</p>`,
      }]
    : []

  const socialSection = f.socialLinks
    ? [{
        title: `${storySection.length + valuesSection.length + teamSection.length + 3}. Connect With Us`,
        body: `<p>Stay up to date and get in touch through our social channels:</p><p>${f.socialLinks.replace(/\n/g, '<br/>')}</p>`,
      }]
    : []

  const nextNum = (base) => base + storySection.length + valuesSection.length + teamSection.length + socialSection.length

  const sections = [
    {
      title: '1. Who We Are',
      body: `<p><strong>${f.companyName || '[Company]'}</strong>${f.foundedYear ? `, founded in ${f.foundedYear},` : ''} is a ${companyTypeLabel}${f.headquartersLocation ? ` headquartered in ${f.headquartersLocation}` : ''}.${f.tagline ? ` <em>${f.tagline}</em>` : ''}</p>`,
    },
    {
      title: '2. Our Mission',
      body: `<p>${f.missionStatement || '[Mission statement]'}</p>`,
    },
    {
      title: storySection.length ? '—' : '3. What We Do',
      body: `<p>${f.whatWeDo || '[Description of products and services]'}</p>`,
    },
    ...storySection,
    ...valuesSection,
    ...teamSection,
    ...socialSection,
    {
      title: `${nextNum(3)}. Get In Touch`,
      body: `<p>We'd love to hear from you. Reach us at <strong>${f.contactEmail || '[email]'}</strong> or visit us at <strong>${f.websiteUrl || '[url]'}</strong>.</p>`,
    },
  ].filter(s => s.title !== '—')

  return {
    title: `About ${f.companyName || 'Us'}`,
    companyName: f.companyName,
    websiteUrl: f.websiteUrl,
    effectiveDate: fmtDate(new Date().toISOString().split('T')[0]),
    sections,
  }
}

/* ─── Contact Us ──────────────────────────────────────────────── */
function contactUs(f) {
  const supportEmail = f.supportEmail || f.generalEmail

  const phoneSection = f.phoneNumber
    ? [{ title: '3. Phone', body: `<p>You can also reach us by phone at <strong>${f.phoneNumber}</strong>${f.officeHours ? ` during ${f.officeHours}` : ''}.</p>` }]
    : []

  const addressSection = f.physicalAddress
    ? [{
        title: `${phoneSection.length + 3}. Mailing Address`,
        body: `<p>To contact us by post:<br/><strong>${f.companyName || '[Company]'}</strong><br/>${f.physicalAddress.replace(/\n/g, '<br/>')}</p>`,
      }]
    : []

  const channelsSection = f.supportChannels
    ? [{
        title: `${phoneSection.length + addressSection.length + 3}. Additional Channels`,
        body: `<p>You can also reach us through the following channels:</p><p>${f.supportChannels.replace(/\n/g, '<br/>')}</p>`,
      }]
    : []

  const noteSection = f.contactFormNote
    ? [{
        title: `${phoneSection.length + addressSection.length + channelsSection.length + 3}. Before You Write`,
        body: `<p>${f.contactFormNote}</p>`,
      }]
    : []

  const sections = [
    {
      title: '1. General Enquiries',
      body: `<p>For general questions about <strong>${f.companyName || '[Company]'}</strong> or our services, email us at <strong>${f.generalEmail || '[email]'}</strong>.${f.responseTime ? ` We typically respond within <strong>${f.responseTime}</strong>.` : ''}</p>`,
    },
    {
      title: '2. Customer Support',
      body: `<p>If you need help with a product or service, our support team is ready to assist. Email us at <strong>${supportEmail || '[email]'}</strong>${f.officeHours ? ` — available ${f.officeHours}` : ''}.</p>`,
    },
    ...phoneSection,
    ...addressSection,
    ...channelsSection,
    ...noteSection,
    {
      title: `${phoneSection.length + addressSection.length + channelsSection.length + noteSection.length + 3}. About Our Website`,
      body: `<p>For more information about <strong>${f.companyName || '[Company]'}</strong>, visit us at <strong>${f.websiteUrl || '[url]'}</strong>.</p>`,
    },
  ]

  return {
    title: `Contact ${f.companyName || 'Us'}`,
    companyName: f.companyName,
    websiteUrl: f.websiteUrl,
    effectiveDate: fmtDate(new Date().toISOString().split('T')[0]),
    sections,
  }
}

/* ─── Main generator ──────────────────────────────────────────── */
export function generateDocument(template, rawFields) {
  const f = {}
  for (const key of Object.keys(rawFields)) {
    f[key] = rawFields[key]
  }

  let doc
  switch (template.id) {
    case 'privacy-policy':   doc = privacyPolicy(f);   break
    case 'terms-of-service': doc = termsOfService(f);  break
    case 'cookie-policy':    doc = cookiePolicy(f);    break
    case 'disclaimer':       doc = disclaimer(f);      break
    case 'refund-policy':    doc = refundPolicy(f);    break
    case 'eula':             doc = eula(f);            break
    case 'about-us':         doc = aboutUs(f);         break
    case 'contact-us':       doc = contactUs(f);       break
    default:                 doc = { title: template.name, sections: [] }
  }

  const sectionsHtml = doc.sections
    .map(s => `<div class="doc-section-title">${s.title}</div><div class="doc-body">${s.body}</div>`)
    .join('\n')

  const previewHtml = `
    <div style="max-width:720px; margin:0 auto;">
      <div style="text-align:center; padding-bottom: 24px; border-bottom: 1px solid #d4c9b8; margin-bottom: 8px;">
        <div class="doc-heading" style="font-size:28px; font-weight:700; margin-bottom:6px;">${doc.title}</div>
        <div style="font-size:12px; color:#6a5848; font-family:'DM Mono',monospace; letter-spacing:0.05em;">
          ${doc.companyName || ''} ${doc.websiteUrl ? `· ${doc.websiteUrl}` : ''}
        </div>
        <div style="font-size:12px; color:#9a8878; margin-top:4px; font-family:'DM Mono',monospace;">
          Effective Date: ${doc.effectiveDate}
        </div>
      </div>
      ${sectionsHtml}
      <div style="margin-top:36px; padding-top:16px; border-top:1px solid #d4c9b8; text-align:center; font-size:11px; color:#b0a898; font-family:'DM Mono',monospace; letter-spacing:0.04em;">
        © ${new Date().getFullYear()} ${doc.companyName || '[Company]'}. All rights reserved.
      </div>
    </div>
  `

  const plainSections = doc.sections
    .map(s => `${s.title}\n${s.body.replace(/<[^>]+>/g, '').trim()}`)
    .join('\n\n')

  const text = `${doc.title}\n${'─'.repeat(doc.title.length)}\n${doc.companyName || ''} | ${doc.websiteUrl || ''}\nEffective Date: ${doc.effectiveDate}\n\n${plainSections}\n\n© ${new Date().getFullYear()} ${doc.companyName || '[Company]'}. All rights reserved.`

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${doc.title} — ${doc.companyName || ''}</title>
  <style>
    body { font-family: Georgia, 'Times New Roman', serif; max-width: 800px; margin: 40px auto; padding: 0 24px; color: #1a1510; line-height: 1.8; }
    h1 { font-size: 2em; margin-bottom: 4px; }
    .meta { font-size: 13px; color: #6a5848; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 2px solid #d4c9b8; }
    h2 { font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #8b1a1a; border-bottom: 1px solid #e4d9c8; padding-bottom: 6px; margin-top: 32px; }
    p { margin: 0 0 12px; color: #3a3028; }
    footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #d4c9b8; font-size: 12px; color: #9a8878; text-align: center; }
  </style>
</head>
<body>
  <h1>${doc.title}</h1>
  <div class="meta">
    ${doc.companyName ? `<strong>${doc.companyName}</strong>` : ''}
    ${doc.websiteUrl ? ` &middot; <a href="${doc.websiteUrl}">${doc.websiteUrl}</a>` : ''}<br>
    Effective Date: ${doc.effectiveDate}
  </div>
  ${doc.sections.map(s => `<h2>${s.title}</h2>\n  <div>${s.body}</div>`).join('\n  ')}
  <footer>&copy; ${new Date().getFullYear()} ${doc.companyName || '[Company]'}. All rights reserved.</footer>
</body>
</html>`

  return { previewHtml, html, text }
}
