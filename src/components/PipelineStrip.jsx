import { motion } from 'framer-motion';
import Icon from './Icon.jsx';
import './PipelineStrip.css';

const NODES = [
  { icon: 'antenna', label: '01 · ingest',  title: 'IoT services',      sub: '20+ services · gateways' },
  { icon: 'queue',   label: '02 · queue',   title: 'AWS · streams',     sub: 'backpressure · retries' },
  { icon: 'service', label: '03 · service', title: 'Java · Spring Boot', sub: 'k8s · containerized', active: true },
  { icon: 'observe', label: '04 · observe', title: 'Datadog · metrics', sub: 'alerts that mean something' },
  { icon: 'spark',   label: '05 · augment', title: 'LLM tooling',       sub: 'PR summaries · MCP', soft: true },
];

const Connector = () => (
  <div className="pipe-connector" aria-hidden="true">
    <svg viewBox="0 0 60 24" preserveAspectRatio="none">
      <path d="M0 12 L52 12" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <path
        d="M48 7 L54 12 L48 17"
        stroke="currentColor" strokeWidth="1.2" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  </div>
);

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const nodeVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 0.84, 0.32, 1] } },
};

function Node({ node }) {
  const cls = ['pipe-node', node.active && 'active', node.soft && 'soft']
    .filter(Boolean)
    .join(' ');
  return (
    <motion.div className={cls} variants={nodeVariants}>
      <div className="pn-top">
        <Icon name={node.icon} className="pn-ico" />
        <span className="pn-label">{node.label}</span>
      </div>
      <div className="pn-v">{node.title}</div>
      <div className="pn-sub">{node.sub}</div>
    </motion.div>
  );
}

export default function PipelineStrip() {
  return (
    <div className="pipeline">
      <div className="strip-cap">
        <span className="title">
          <span className="pre">
            <svg width="9" height="9" viewBox="0 0 16 16" aria-hidden="true">
              <use href="#i-bolt" />
            </svg>
          </span>
          What I work on
        </span>
        <span className="right">
          <span className="t-mono muted">simplified pipeline</span>
          <span className="t-mono" style={{ color: 'var(--ink-3)' }}>
            devices ➝ services ➝ humans
          </span>
        </span>
      </div>

      <motion.div
        className="pipe-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Node node={NODES[0]} />
        <Connector />
        <Node node={NODES[1]} />
        <Connector />
        <Node node={NODES[2]} />
        <div className="pipe-divider" aria-hidden="true" />
        <Node node={NODES[3]} />
        <Node node={NODES[4]} />
      </motion.div>
    </div>
  );
}
