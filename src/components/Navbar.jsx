import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon.jsx';
import './Navbar.css';

const resumeHref = `${import.meta.env.BASE_URL}John-Huynh-Resume.pdf`;

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 0.84, 0.32, 1] }}
    >
      <div className="nav-inner">
        <a className="nav-logo-wrap" href="#top" onClick={() => setOpen(false)}>
          <div className="nav-logo-mark">JH</div>
          <span className="nav-logo-text">John Huynh</span>
          <span className="nav-crumb">// software engineer</span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={resumeHref}
            className="btn tiny ghost"
            download
            onClick={() => setOpen(false)}
          >
            Resume <Icon name="arrow-down" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
