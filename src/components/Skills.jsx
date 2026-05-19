import { motion } from 'framer-motion';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import './Skills.css';

const PANELS = [
  {
    key: 'lang',
    icon: 'code',
    label: 'Languages',
    span: 'col-span-4',
    chips: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C++', 'SQL', 'HTML / CSS'],
  },
  {
    key: 'be',
    icon: 'service',
    label: 'Backend',
    span: 'col-span-4',
    chips: ['Spring Boot', 'Node.js', 'Express', 'REST APIs', 'JUnit', { name: 'MCP', soft: true }],
  },
  {
    key: 'fe',
    icon: 'monitor',
    label: 'Frontend',
    span: 'col-span-4',
    chips: ['React', 'TypeScript', 'HTML / CSS', 'JavaScript'],
  },
  {
    key: 'cloud',
    icon: 'cloud',
    label: 'Cloud · DevOps',
    span: 'col-span-7',
    chips: [
      'AWS', 'Docker', 'Kubernetes', 'Terraform',
      'Datadog', 'GitHub Actions', 'CI / CD', 'Git',
    ],
  },
  {
    key: 'db',
    icon: 'db',
    label: 'Databases',
    span: 'col-span-5',
    chips: ['PostgreSQL', 'MongoDB', 'SQLite'],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const panelVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 0.84, 0.32, 1] } },
};

function Panel({ panel }) {
  return (
    <motion.div className={panel.span} variants={panelVariants}>
      <div className="skills-panel">
        <div className="sp-head">
          <div className="left">
            <span className="ico-wrap"><Icon name={panel.icon} /></span>
            <span className="label">{panel.label}</span>
          </div>
          <span className="count">
            {String(panel.chips.length).padStart(2, '0')}
          </span>
        </div>
        <div className="chips">
          {panel.chips.map((c) => {
            const isObj = typeof c === 'object';
            const name = isObj ? c.name : c;
            return (
              <span key={name} className={`chip${isObj && c.soft ? ' soft' : ''}`}>
                {name}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" tag="05 · skills">
      <div className="sec-head">
        <div>
          <p className="eyebrow">Tech stack</p>
          <h2 className="t-h1">What I reach for</h2>
        </div>
        <div className="rule" />
        <span className="t-mono muted">organized · not exhaustive</span>
      </div>

      <motion.div
        className="col-1-12 skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {PANELS.map((p) => (
          <Panel key={p.key} panel={p} />
        ))}
      </motion.div>

      <div className="col-1-12 skills-learning">
        <div className="learning-strip">
          <span className="t-label learning-label">
            <Icon name="bolt" className="learning-bolt" />
            Currently into →
          </span>
          <div className="row-2" style={{ gap: 4 }}>
            <span className="chip soft">Applied AI / LLM tooling</span>
            <span className="chip soft">MCP workflows</span>
            <span className="chip soft">Distributed systems</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
