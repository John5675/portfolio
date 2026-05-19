import { motion } from 'framer-motion';
import Icon from './Icon.jsx';
import './RecruiterCard.css';

export default function RecruiterCard() {
  return (
    <motion.div
      className="recruiter"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 0.84, 0.32, 1] }}
    >
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
