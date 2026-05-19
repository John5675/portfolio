import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon.jsx';
import './RecruiterCard.css';

export default function RecruiterCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="recruiter"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.01,
              rotateX: 1.2,
              rotateY: -1.4,
              boxShadow: 'var(--shadow-lift)',
            }
      }
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 0.84, 0.32, 1] }}
    >
      <motion.div
        className="rc-glow"
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0.2, scale: 0.92 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.2, 0.42, 0.28],
                scale: [0.92, 1.06, 0.98],
                x: [0, -10, 6, 0],
              }
        }
        transition={{
          duration: 9,
          repeat: shouldReduceMotion ? 0 : Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
      <div className="rc-head">
        <span className="status">
          <span className="dot" />Open to work · new grad
        </span>
        <span>2026</span>
      </div>
      <div className="rc-body">
        <div className="rc-row">
          <span className="k">Role</span>
          <span className="v"><b>Software Engineer</b> — backend, applied AI</span>
        </div>
        <div className="rc-row roles">
          <span className="k">Titles</span>
          <span className="v">
            <span className="chip">Backend</span>
            <span className="chip">AI</span>
          </span>
        </div>
        <div className="rc-row">
          <span className="k">Location</span>
          <span className="v">
            San Diego, CA
            <span className="t-mono" style={{ display: 'block', marginTop: 2 }}>
              remote-friendly · open to relocate (SF · NYC · Seattle)
            </span>
          </span>
        </div>
        <div className="rc-row">
          <span className="k">Eligibility</span>
          <span className="v">US citizen · no sponsorship required</span>
        </div>
        <div className="rc-row">
          <span className="k">Start</span>
          <span className="v">Immediate</span>
        </div>
      </div>
      <div className="rc-foot">
        <span className="email">
          <Icon name="mail" className="ico rc-mail-ico" />
          johnhuynh238@gmail.com
        </span>
        <a className="link" href="#contact">
          linkedin · github
          <span className="arr"><Icon name="arrow" /></span>
        </a>
      </div>
    </motion.div>
  );
}
