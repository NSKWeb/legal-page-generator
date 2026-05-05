import { useState, useRef, useEffect } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { generateDocument } from './generator'
import { TEMPLATES } from './templates'

/* ── tiny icon set ── */
const icons = {
  scale: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v18M3 9l9-6 9 6M3 15l9 6 9-6"/>
    </svg>
  ),
  copy: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="1"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  print: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6,9 6,2 18,2 18,9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
      <rect x="6" y="14" width="12" height="8"/>
    </svg>
  ),
  check: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  ),
  arrow: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
    </svg>
  ),
  mail: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  info: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  ),
  sun: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  moon: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
}

/* ════════════════════════════════════════════════
   ABOUT US PAGE
   ════════════════════════════════════════════════ */
function AboutPage() {
  const features = [
    {
      num: '01',
      title: 'Six Legal Instruments',
      body: 'Privacy Policies, Terms of Service, Cookie Policies, Disclaimers, Refund Policies, and EULAs — all the core pages a modern website requires.',
    },
    {
      num: '02',
      title: 'Guided Field-by-Field Forms',
      body: 'Every template is broken into clearly labelled fields with contextual hints, so you always know exactly what information is needed.',
    },
    {
      num: '03',
      title: 'Instant Preview & Export',
      body: 'See your finished document in a clean typeset layout, then copy raw HTML or plain text for direct embedding into any site.',
    },
    {
      num: '04',
      title: 'Print-Ready Output',
      body: 'Every generated page renders cleanly for print or PDF export — suitable for compliance records and offline filing.',
    },
  ]

  return (
    <div className="fade-in" style={{ background: 'var(--paper)', flex: 1, display: 'flex', flexDirection: 'column' }}>

      {/* Hero band */}
      <div style={{
        borderBottom: 'var(--border)',
        padding: '56px 64px 48px',
        background: 'var(--sky-0)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background ornament */}
        <div style={{
          position: 'absolute', top: '-20px', right: '48px',
          fontFamily: 'var(--display)', fontStyle: 'italic',
          fontSize: '180px', color: 'var(--sky-1)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}>§§</div>

        <div style={{
          fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px',
        }}>About LexCraft</div>

        <h1 style={{
          fontFamily: 'var(--display)', fontStyle: 'italic',
          fontSize: '54px', color: 'var(--ink)',
          margin: '0 0 20px', letterSpacing: '-0.03em', lineHeight: 1.05,
          maxWidth: '680px',
        }}>
          Legal pages, drafted in minutes — not hours.
        </h1>

        <p style={{
          fontFamily: 'var(--serif)', fontSize: '15px', lineHeight: 1.85,
          color: 'var(--ink-soft)', maxWidth: '560px', margin: 0,
        }}>
          LexCraft is a free, open-use legal page generator designed for founders,
          developers, and small business owners who need compliant, professional legal
          documents without the billable-hour overhead.
        </p>
      </div>

      {/* Mission block */}
      <div style={{
        padding: '48px 64px',
        borderBottom: '1px solid var(--sky-2)',
        display: 'grid', gridTemplateColumns: '200px 1fr', gap: '48px', alignItems: 'start',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '10px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sky-5)',
          }}>Mission</div>
          <div style={{
            width: '32px', height: '2px', background: 'var(--accent)',
            marginTop: '8px',
          }} />
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '14px', lineHeight: 1.9,
            color: 'var(--ink-mid)', margin: '0 0 16px',
          }}>
            Legal compliance shouldn't be a luxury. Too many small sites go live without
            a Privacy Policy, Terms of Service, or Cookie Policy — not because their
            owners don't care, but because drafting those pages is intimidating and
            expensive when done through a solicitor.
          </p>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '14px', lineHeight: 1.9,
            color: 'var(--ink-mid)', margin: 0,
          }}>
            LexCraft gives you structured, jurisdiction-aware templates that ask the right
            questions, generate clean HTML, and let you go from zero to compliant in a
            single session. The output is always yours — no account required, no data stored.
          </p>
        </div>
      </div>

      {/* Features grid */}
      <div style={{ padding: '48px 64px', borderBottom: '1px solid var(--sky-2)' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--sky-5)', marginBottom: '32px',
        }}>
          What's included
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', border: 'var(--border)', background: 'var(--ink)' }}>
          {features.map(f => (
            <div key={f.num} style={{
              background: 'var(--sky-0)', padding: '28px 32px',
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '10px',
              }}>{f.num}</div>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '13px',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: 'var(--ink)', marginBottom: '10px',
              }}>{f.title}</div>
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '13px', lineHeight: 1.75,
                color: 'var(--ink-soft)', margin: 0,
              }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer note */}
      <div style={{
        padding: '32px 64px 48px',
        display: 'flex', alignItems: 'flex-start', gap: '20px',
      }}>
        <div style={{
          flexShrink: 0, width: '36px', height: '36px',
          border: 'var(--border)', borderColor: 'var(--accent-hot)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent-hot)',
        }}>
          <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '14px' }}>!</span>
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--accent-hot)', marginBottom: '8px',
          }}>Important Disclaimer</div>
          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '13px',
            lineHeight: 1.8, color: 'var(--ink-soft)', margin: 0, maxWidth: '600px',
          }}>
            LexCraft generates template documents for informational purposes only. The
            output does not constitute legal advice, does not create a solicitor–client
            relationship, and may not be suitable for every jurisdiction or use case.
            Always consult a qualified legal professional for advice specific to your situation.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════
   CONTACT US PAGE
   ════════════════════════════════════════════════ */
function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.email.trim())   e.email   = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.subject.trim()) e.subject = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const channels = [
    {
      label: 'General Enquiries',
      value: 'hello@lexcraft.app',
      mono: 'EMAIL',
      icon: icons.mail,
    },
    {
      label: 'Legal & Compliance',
      value: 'legal@lexcraft.app',
      mono: 'EMAIL',
      icon: icons.scale,
    },
    {
      label: 'GitHub',
      value: 'github.com/lexcraft',
      mono: 'OPEN SOURCE',
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="fade-in" style={{ background: 'var(--paper)', flex: 1, display: 'flex', flexDirection: 'column' }}>

      {/* Hero band */}
      <div style={{
        borderBottom: 'var(--border)',
        padding: '56px 64px 48px',
        background: 'var(--sky-0)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10px', right: '48px',
          fontFamily: 'var(--display)', fontStyle: 'italic',
          fontSize: '180px', color: 'var(--sky-1)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>✉</div>

        <div style={{
          fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px',
        }}>Get in Touch</div>

        <h1 style={{
          fontFamily: 'var(--display)', fontStyle: 'italic',
          fontSize: '54px', color: 'var(--ink)',
          margin: '0 0 20px', letterSpacing: '-0.03em', lineHeight: 1.05,
          maxWidth: '600px',
        }}>
          We'd love to hear from you.
        </h1>

        <p style={{
          fontFamily: 'var(--serif)', fontSize: '15px', lineHeight: 1.85,
          color: 'var(--ink-soft)', maxWidth: '520px', margin: 0,
        }}>
          Questions, feedback, or a template request? Drop us a line and we'll
          respond within one business day.
        </p>
      </div>

      {/* Two-column layout */}
      <div style={{
        flex: 1, display: 'grid',
        gridTemplateColumns: '1fr 340px',
        borderBottom: '1px solid var(--sky-2)',
      }}>

        {/* ─── Form ─── */}
        <div style={{ padding: '48px 56px', borderRight: 'var(--border)' }}>
          {submitted ? (
            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'flex-start', gap: '16px',
              padding: '40px 0',
            }}>
              <div style={{
                width: '48px', height: '48px', border: 'var(--border)',
                borderColor: 'var(--accent-sage)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage)',
              }}>
                {icons.check}
              </div>
              <div style={{
                fontFamily: 'var(--display)', fontStyle: 'italic',
                fontSize: '28px', color: 'var(--ink)', lineHeight: 1.1,
              }}>Message received.</div>
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '14px', lineHeight: 1.8,
                color: 'var(--ink-soft)', margin: 0, maxWidth: '420px',
              }}>
                Thank you for reaching out, <strong style={{ color: 'var(--ink)' }}>{form.name}</strong>.
                We'll get back to you at <em>{form.email}</em> within one business day.
              </p>
              <button
                className="action-btn"
                style={{ marginTop: '8px' }}
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="victorian-rule" style={{ marginBottom: '28px' }}>
                <span>◆ Send a Message ◆</span>
              </div>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                {[
                  { key: 'name',  label: 'Full Name',      type: 'text',  ph: 'Jane Smith' },
                  { key: 'email', label: 'Email Address',  type: 'email', ph: 'jane@example.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="field-label">
                      {f.label} <span className="field-required">*</span>
                    </label>
                    <input
                      type={f.type}
                      className="legal-input"
                      placeholder={f.ph}
                      value={form[f.key]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      style={errors[f.key] ? { borderColor: 'var(--accent-hot)' } : {}}
                    />
                    {errors[f.key] && (
                      <p style={{ fontFamily: 'var(--mono)', fontSize: '9.5px', color: 'var(--accent-hot)', margin: '5px 0 0', letterSpacing: '0.06em' }}>
                        {errors[f.key]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '24px' }}>
                <label className="field-label">
                  Subject <span className="field-required">*</span>
                </label>
                <input
                  type="text"
                  className="legal-input"
                  placeholder="Template request, bug report, general question…"
                  value={form.subject}
                  onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  style={errors.subject ? { borderColor: 'var(--accent-hot)' } : {}}
                />
                {errors.subject && (
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '9.5px', color: 'var(--accent-hot)', margin: '5px 0 0', letterSpacing: '0.06em' }}>
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '32px' }}>
                <label className="field-label">
                  Message <span className="field-required">*</span>
                </label>
                <textarea
                  className="legal-input"
                  rows={6}
                  placeholder="Tell us what's on your mind…"
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ resize: 'vertical', ...(errors.message ? { borderColor: 'var(--accent-hot)' } : {}) }}
                />
                {errors.message && (
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '9.5px', color: 'var(--accent-hot)', margin: '5px 0 0', letterSpacing: '0.06em' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="generate-btn">
                {icons.mail}
                Send Message
                <span style={{ marginLeft: '4px', opacity: 0.6 }}>→</span>
              </button>
            </form>
          )}
        </div>

        {/* ─── Contact channels sidebar ─── */}
        <div style={{ padding: '48px 36px', background: 'var(--sky-0)', display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--sky-5)',
            borderBottom: '1px solid var(--sky-2)', paddingBottom: '12px', marginBottom: '0',
          }}>
            Direct Channels
          </div>

          {channels.map((ch, i) => (
            <div key={i} style={{
              padding: '20px 0',
              borderBottom: '1px solid var(--sky-2)',
              display: 'flex', flexDirection: 'column', gap: '6px',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--accent)',
              }}>
                {ch.icon} {ch.mono}
              </div>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-soft)',
              }}>
                {ch.label}
              </div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '11px',
                color: 'var(--ink)', letterSpacing: '0.02em',
              }}>
                {ch.value}
              </div>
            </div>
          ))}

          {/* Office hours block */}
          <div style={{ marginTop: '28px', padding: '20px', border: 'var(--border)', borderColor: 'var(--sky-3)', background: 'var(--sky-1)' }}>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--sky-5)', marginBottom: '12px',
            }}>
              Response Times
            </div>
            {[
              { day: 'Mon – Fri', time: 'Within 24 hours' },
              { day: 'Saturday',  time: 'Within 48 hours' },
              { day: 'Sunday',    time: 'Next business day' },
            ].map(r => (
              <div key={r.day} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '7px 0',
                borderBottom: '1px solid var(--sky-2)',
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-soft)', letterSpacing: '0.04em' }}>{r.day}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink)', letterSpacing: '0.04em' }}>{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════════ */
export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('lx-theme') === 'dark' } catch { return false }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    try { localStorage.setItem('lx-theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  const [page, setPage] = useState('generator') // 'generator' | 'about' | 'contact'
  const [activeTemplate, setActiveTemplate] = useState('privacy-policy')
  const [fields, setFields] = useState({})
  const [generatedDoc, setGeneratedDoc] = useState(null)
  const [copied, setCopied] = useState(false)
  const [tab, setTab] = useState('form')
  const previewRef = useRef(null)

  const template = TEMPLATES.find(t => t.id === activeTemplate)

  const handleFieldChange = (key, value) => {
    setFields(prev => ({ ...prev, [key]: value }))
  }

  const handleGenerate = () => {
    const doc = generateDocument(template, fields)
    setGeneratedDoc(doc)
    setTab('preview')
  }

  const handleCopyHTML = async () => {
    if (!generatedDoc) return
    await navigator.clipboard.writeText(generatedDoc.html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleCopyText = async () => {
    if (!generatedDoc) return
    await navigator.clipboard.writeText(generatedDoc.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handlePrint = () => window.print()

  const today = new Date().toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const switchTemplate = (id) => {
    setActiveTemplate(id)
    setFields({})
    setGeneratedDoc(null)
    setTab('form')
  }

  const navPages = [
    { id: 'generator', label: 'Generator' },
    { id: 'about',     label: 'About'     },
    { id: 'contact',   label: 'Contact'   },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ══════════ MASTHEAD HEADER ══════════ */}
      <header className="site-header no-print">
        <div className="site-header__inner">

          {/* Left — edition tag */}
          <div className="site-header__flag">
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--sky-5)',
              border: '1px solid var(--sky-3)', padding: '3px 8px',
            }}>
              Vol. I
            </span>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--sky-4)',
            }}>
              Legal Instruments
            </span>
          </div>

          {/* Centre — masthead */}
          <div className="masthead">
            <div
              className="masthead__name"
              onClick={() => setPage('generator')}
              style={{ cursor: 'pointer' }}
            >
              LexCraft
            </div>
            <span className="masthead__sub">The Legal Page Generator</span>
          </div>

          {/* Right — page nav + dark toggle + date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-end' }}>
            <nav style={{ display: 'flex', gap: '2px' }}>
              {navPages.map(p => (
                <button
                  key={p.id}
                  onClick={() => setPage(p.id)}
                  style={{
                    fontFamily: 'var(--mono)', fontSize: '9.5px', letterSpacing: '0.14em',
                    textTransform: 'uppercase', background: 'transparent', border: 'none',
                    cursor: 'pointer', padding: '6px 12px',
                    color: page === p.id ? 'var(--ink)' : 'var(--sky-4)',
                    fontWeight: page === p.id ? 700 : 400,
                    borderBottom: page === p.id ? '2px solid var(--accent)' : '2px solid transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  {p.id === 'about'   && <span style={{ marginRight: '5px', opacity: 0.7 }}>{icons.info}</span>}
                  {p.id === 'contact' && <span style={{ marginRight: '5px', opacity: 0.7 }}>{icons.mail}</span>}
                  {p.label}
                </button>
              ))}
            </nav>

            {/* Dark mode toggle */}
            <button
              className="theme-toggle"
              onClick={() => setDark(d => !d)}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="theme-toggle__icon theme-toggle__icon--sun">{icons.sun}</span>
              <span className="theme-toggle__icon theme-toggle__icon--moon">{icons.moon}</span>
            </button>

            <div className="header-meta" style={{ borderLeft: '1px solid var(--sky-2)', paddingLeft: '16px' }}>
              {today}
            </div>
          </div>
        </div>
      </header>

      {/* ══════════ PAGE ROUTING ══════════ */}
      {page === 'about'   && <AboutPage />}
      {page === 'contact' && <ContactPage />}

      {/* ══════════ GENERATOR ══════════ */}
      {page === 'generator' && (
        <div className="app-grid">

          {/* ─── SIDEBAR ─── */}
          <aside className="sidebar no-print">
            <div className="sidebar__section-label">Select Instrument</div>

            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {TEMPLATES.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => switchTemplate(t.id)}
                  className={`doc-nav-item ${activeTemplate === t.id ? 'active' : ''}`}
                >
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.08em',
                    color: activeTemplate === t.id ? 'var(--accent)' : 'var(--sky-4)',
                    marginRight: '10px', minWidth: '16px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {t.name}
                  <span className="nav-icon">{activeTemplate === t.id ? '▶' : '›'}</span>
                </button>
              ))}
            </nav>

            {/* Victorian-flavoured disclaimer block */}
            <div className="sidebar__disclaimer">
              <p>
                Templates are for informational purposes only and do not constitute
                legal advice. Consult a qualified solicitor for your jurisdiction.
              </p>
            </div>
          </aside>

          {/* ─── MAIN ─── */}
          <main className="main-content">

            {/* Content header */}
            <div className="content-header no-print">
              <div>
                <h2 className="content-header__title">{template?.name}</h2>
                <p className="content-header__desc">{template?.description}</p>
              </div>

              {/* Step indicators */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {['Configure', 'Preview', 'Export'].map((s, i) => (
                  <span key={s} style={{
                    fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: i === ['form','preview','html'].indexOf(tab) ? 'var(--ink)' : 'var(--sky-4)',
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    <span style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      border: `1.5px solid ${i === ['form','preview','html'].indexOf(tab) ? 'var(--accent)' : 'var(--sky-3)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '8px', color: i === ['form','preview','html'].indexOf(tab) ? 'var(--accent)' : 'var(--sky-4)',
                      fontWeight: 700, flexShrink: 0,
                    }}>{i + 1}</span>
                    {s}
                    {i < 2 && <span style={{ color: 'var(--sky-3)', fontSize: '10px', marginLeft: '2px' }}>›</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Tab strip */}
            <div className="tab-strip no-print">
              {[
                { id: 'form',    label: '① Configure' },
                { id: 'preview', label: '② Preview'   },
                { id: 'html',    label: '③ HTML Export'},
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`tab-strip__btn ${tab === t.id ? 'active' : ''}`}
                >
                  {t.label}
                </button>
              ))}
              <div style={{ flex: 1, borderBottom: '2px solid var(--ink)', marginBottom: '-2px' }} />
            </div>

            {/* ══ FORM TAB ══ */}
            {tab === 'form' && (
              <div className="form-panel fade-in">
                <div className="victorian-rule" style={{ marginBottom: '28px' }}>
                  <span>◆ Enter Details ◆</span>
                </div>

                <div className="form-grid">
                  {template?.fields.map(field => (
                    <div key={field.key} className={`form-field ${field.wide ? 'wide' : ''}`}>
                      <label className="field-label">
                        {field.label}
                        {field.required && <span className="field-required">*</span>}
                      </label>

                      {field.type === 'textarea' ? (
                        <textarea
                          className="legal-input"
                          rows={4}
                          placeholder={field.placeholder || ''}
                          value={fields[field.key] || ''}
                          onChange={e => handleFieldChange(field.key, e.target.value)}
                          style={{ resize: 'vertical' }}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          className="legal-input"
                          value={fields[field.key] || ''}
                          onChange={e => handleFieldChange(field.key, e.target.value)}
                        >
                          <option value="">Select…</option>
                          {field.options.map(o => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type || 'text'}
                          className="legal-input"
                          placeholder={field.placeholder || ''}
                          value={fields[field.key] || ''}
                          onChange={e => handleFieldChange(field.key, e.target.value)}
                        />
                      )}

                      {field.hint && (
                        <p className="field-hint">{field.hint}</p>
                      )}
                    </div>
                  ))}
                </div>

                <button className="generate-btn" onClick={handleGenerate}>
                  {icons.scale}
                  Generate {template?.name}
                  <span style={{ marginLeft: '4px', opacity: 0.6 }}>→</span>
                </button>
              </div>
            )}

            {/* ══ PREVIEW TAB ══ */}
            {tab === 'preview' && (
              <div className="preview-panel fade-in">
                {!generatedDoc ? (
                  <div className="empty-state">
                    <span className="empty-state__glyph">§</span>
                    <p className="empty-state__title">No instrument drafted yet</p>
                    <p className="empty-state__sub">Fill in the form to generate your document</p>
                    <button className="action-btn" onClick={() => setTab('form')} style={{ marginTop: '20px' }}>
                      {icons.arrow} Go to form
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="preview-toolbar no-print">
                      <div className="preview-toolbar__meta">
                        <span>Generated {today}</span>
                        <span style={{ color: 'var(--sky-3)' }}>|</span>
                        <span>{template?.name}</span>
                      </div>
                      <div className="preview-actions">
                        <button className="action-btn" onClick={handleCopyText}>
                          {copied ? icons.check : icons.copy}
                          {copied ? 'Copied' : 'Copy text'}
                        </button>
                        <button className="action-btn action-btn--primary" onClick={handlePrint}>
                          {icons.print} Print / PDF
                        </button>
                      </div>
                    </div>
                    <div
                      ref={previewRef}
                      className="document-paper"
                      dangerouslySetInnerHTML={{ __html: generatedDoc.previewHtml }}
                      style={{ padding: '52px 60px 60px' }}
                    />
                  </>
                )}
              </div>
            )}

            {/* ══ HTML EXPORT TAB ══ */}
            {tab === 'html' && (
              <div className="html-panel fade-in">
                {!generatedDoc ? (
                  <div className="empty-state">
                    <span className="empty-state__glyph" style={{ fontSize: '52px', fontStyle: 'normal', fontFamily: 'var(--mono)' }}>{'</>'}</span>
                    <p className="empty-state__title">No document generated yet</p>
                    <p className="empty-state__sub">Configure and generate first</p>
                    <button className="action-btn" onClick={() => setTab('form')} style={{ marginTop: '20px' }}>
                      {icons.arrow} Go to form
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div>
                        <div style={{
                          fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '11px',
                          letterSpacing: '0.16em', textTransform: 'uppercase',
                          color: 'var(--ink)', marginBottom: '4px',
                        }}>Ready-to-embed HTML</div>
                        <div style={{
                          fontFamily: 'var(--mono)', fontSize: '10px',
                          color: 'var(--sky-5)', letterSpacing: '0.06em',
                        }}>Paste directly into your website's HTML</div>
                      </div>
                      <button className="action-btn action-btn--primary" onClick={handleCopyHTML}>
                        {copied ? icons.check : icons.copy}
                        {copied ? 'Copied!' : 'Copy HTML'}
                      </button>
                    </div>
                    <div className="victorian-rule" style={{ marginBottom: '16px' }}>
                      <span>◇ Source ◇</span>
                    </div>
                    <pre className="code-block">{generatedDoc.html}</pre>
                  </>
                )}
              </div>
            )}
          </main>
        </div>
      )}

      {/* ══════════ FOOTER ══════════ */}
      <footer className="no-print" style={{
        borderTop: 'var(--border)', borderTopColor: 'var(--sky-3)',
        background: 'var(--sky-0)', padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--sky-4)',
        }}>
          LexCraft · Legal Page Generator · Not Legal Advice
        </span>

        <div style={{ display: 'flex', gap: '16px' }}>
          {navPages.map(p => (
            <button
              key={p.id}
              onClick={() => setPage(p.id)}
              style={{
                fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.12em',
                textTransform: 'uppercase', background: 'none', border: 'none',
                cursor: 'pointer', color: page === p.id ? 'var(--accent)' : 'var(--sky-4)',
                transition: 'color 0.15s',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <span style={{
          fontFamily: 'var(--display)', fontStyle: 'italic',
          fontSize: '14px', color: 'var(--sky-3)',
        }}>
          Fiat Lex
        </span>
      </footer>
      <SpeedInsights />
    </div>
  )
}
