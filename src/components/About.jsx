import { motion } from 'framer-motion';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import './About.css';

const PRINCIPLES = [
  {
    num: '01',
    icon: 'gear',
    title: 'Automate the boring.',
    desc: "If I've done it twice, the third time deserves a script — and a runbook.",
  },
  {
    num: '02',
    icon: 'observe',
    title: 'Reliability & observability.',
    desc: "Logs, metrics, traces — non-negotiable. If you can't see it, you can't trust it.",
  },
  {
    num: '03',
    icon: 'bolt',
    title: 'Learn fast, ship anyway.',
    desc: 'New stack on Monday, useful PR by Friday is the bar I set for myself.',
  },
  {
    num: '04',
    icon: 'compass',
    title: 'Practical & maintainable.',
    desc: 'Boring tech, sharp boundaries, kind code reviews.',
  },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 0.84, 0.32, 1] } },
};

export default function About() {
  return (
    <Section id="about" alt tag="02 · about">
      <div className="sec-head">
        <div>
          <p className="eyebrow">About + principles</p>
          <h2 className="t-h1">I like building the systems behind the product.</h2>
        </div>
        <div className="rule" />
        <span className="t-mono muted">02 / 06</span>
      </div>

      <div className="col-1-7 stack-4">
        <p className="t-body lede">
          I'm a software engineer drawn to backend and systems work — building reliable services,
          improving observability, and automating workflows so teams can move faster with less
          operational overhead.
        </p>
        <p className="t-body lede">
          Lately I've been pairing that instinct with applied AI: small, focused agents that take
          something tedious off a developer's plate without becoming the next thing to babysit.
        </p>

        <div className="row-3" style={{ marginTop: 'var(--s-3)' }}>
          <span className="chip solid">Backend</span>
          <span className="chip solid">Cloud / DevOps</span>
          <span className="chip solid">Applied AI</span>
          <span className="chip">Developer experience</span>
          <span className="chip">IoT / edge</span>
        </div>
      </div>

      <motion.div
        className="col-8-5 stack-3"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="t-label" style={{ marginBottom: 'var(--s-1)' }}>
          How I work · 4 principles
        </p>

        {PRINCIPLES.map((p) => (
          <motion.div key={p.num} className="principle" variants={itemVariants}>
            <span className="num">{p.num}</span>
            <span className="ico-wrap">
              <Icon name={p.icon} />
            </span>
            <div className="body">
              <div className="t-h3">{p.title}</div>
              <p>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
