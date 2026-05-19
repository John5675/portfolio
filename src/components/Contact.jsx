import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import './Contact.css';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 0.84, 0.32, 1] } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 2400);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" alt tag="06 · contact">
      <motion.div
        className="col-1-6 stack-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={rise} className="t-label" style={{ color: 'var(--accent)' }}>
          Contact
        </motion.p>
        <motion.h2 variants={rise} className="t-h1 contact-heading">
          Let's build something useful.
        </motion.h2>
        <motion.p variants={rise} className="t-body lede">
          I reply within ~24 hours. Happy to nerd out about pipelines, debugging stories, or the
          right amount of YAML.
        </motion.p>

        <motion.div variants={rise} className="row-3" style={{ marginTop: 'var(--s-2)' }}>
          <a href="mailto:johnhuynh238@gmail.com" className="btn">
            <Icon name="mail" />
            Email
            <span className="ico-trail"><Icon name="arrow" /></span>
          </a>
          <a
            href="https://www.linkedin.com/in/johnhuynh238/"
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            <Icon name="li" />
            LinkedIn
          </a>
          <a
            href="https://github.com/John5675"
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            <Icon name="gh" />
            GitHub
          </a>
        </motion.div>

        <motion.div variants={rise} className="stack-2 contact-handles">
          <div className="t-mono">
            <Icon name="mail" className="contact-line-ico" />
            johnhuynh238@gmail.com
          </div>
          <div className="t-mono">
            <Icon name="phone" className="contact-line-ico" />
            714-909-5675
          </div>
          <div className="t-mono">
            <Icon name="li" className="contact-line-ico" />
            linkedin.com/in/johnhuynh238
          </div>
          <div className="t-mono">
            <Icon name="gh" className="contact-line-ico" />
            github.com/John5675
          </div>
          <div className="t-mono">
            <Icon name="pin" className="contact-line-ico" />
            San Diego, CA · PST
          </div>
        </motion.div>
      </motion.div>

      <div className="col-7-6">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="contact-form-head">
            <p className="t-label">Drop a quick note</p>
            <span className="t-mono muted">replies within ~24h</span>
          </div>
          <div className="stack-3">
            <input
              className="field"
              placeholder="Your name"
              value={form.name}
              onChange={onChange('name')}
              required
            />
            <input
              className="field"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={onChange('email')}
              required
            />
            <textarea
              className="field tall"
              placeholder="What you're working on — and what you'd want help with…"
              value={form.message}
              onChange={onChange('message')}
              required
            />
            <div className="row-3 contact-form-foot">
              <span className="t-mono muted">no spam, ever · plain text replies</span>
              <button type="submit" className="btn accent">
                {status === 'sent' ? 'Sent ✓' : 'Send'}
                {status !== 'sent' && (
                  <span className="ico-trail"><Icon name="arrow" /></span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
