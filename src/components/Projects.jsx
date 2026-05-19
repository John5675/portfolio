import { motion } from 'framer-motion';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import './Projects.css';

const HABITIZER_CELLS = [
  '',  'f', 'f', '',  'h', 'f', 'f', 'f', '',  'h',
  'f', 'f', 'f', 'f', '',  'f', 'f', '',  'h', 'f',
  'h', 'f', 'f', 'f', 'f', 'a', 'a', 'a', 'a', 'a',
  '',  '',  'f', 'f', 'f', 'h', '',  '',  '',  '',
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 0.84, 0.32, 1] } },
};

function ProjectShell({ children, className = '', style }) {
  return (
    <motion.article
      className={`project ${className}`.trim()}
      style={style}
      variants={cardVariants}
    >
      {children}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" alt tag="04 · projects">
      <div className="sec-head">
        <div>
          <p className="eyebrow">Selected projects</p>
          <h2 className="t-h1">Project mosaic</h2>
        </div>
        <div className="rule" />
        <a
          href="https://github.com/John5675"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          full list on github <span className="arr"><Icon name="arrow" /></span>
        </a>
      </div>

      <motion.div
        className="col-1-12 project-mosaic"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Habitizer — Android routine manager */}
        <ProjectShell className="project--habitizer">
          <div className="thumb">
            <div className="cover cover-habitizer">
              <div className="grid">
                {HABITIZER_CELLS.map((c, i) => (
                  <span key={i} className={`cell${c ? ' ' + c : ''}`} />
                ))}
              </div>
              <span className="cv-label">routine grid</span>
            </div>
          </div>
          <div className="body">
            <div className="meta-row">
              <span className="num">
                01 · class
                <span className="platform"><Icon name="phone" />android</span>
              </span>
              <span className="status-pill shipped">shipped</span>
            </div>
            <div className="name">
              Habitizer <span className="project-arrow">↗</span>
            </div>
            <p className="desc">
              Android routine-manager built with dynamic task lists, integrated timers, and an
              MVP architecture — validated end-to-end with story-driven acceptance tests.
            </p>
            <div className="row-2" style={{ gap: 4 }}>
              <span className="chip">Java</span>
              <span className="chip">Android</span>
              <span className="chip">MVP</span>
              <span className="chip">GitHub Actions</span>
            </div>
            <div className="links">
              <a
                href="https://github.com/John5675"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="gh" />github
              </a>
            </div>
          </div>
        </ProjectShell>

        {/* Anime Rating Predictor — ML / data analysis */}
        <ProjectShell className="project--liftlab">
          <div className="thumb">
            <div className="cover cover-analytics">
              <svg
                viewBox="0 0 160 150"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                {/* axes */}
                <g stroke="#d6dce3" strokeWidth="1">
                  <line x1="22" y1="20" x2="22" y2="125" />
                  <line x1="22" y1="125" x2="148" y2="125" />
                </g>
                {/* tick marks */}
                <g stroke="#d6dce3" strokeWidth="1" opacity="0.6">
                  <line x1="19" y1="40" x2="22" y2="40" />
                  <line x1="19" y1="60" x2="22" y2="60" />
                  <line x1="19" y1="80" x2="22" y2="80" />
                  <line x1="19" y1="100" x2="22" y2="100" />
                </g>
                {/* regression line (accent) */}
                <line
                  x1="28" y1="115" x2="142" y2="32"
                  stroke="#1f4d7a" strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* scatter dots */}
                <g fill="#0f1419">
                  <circle cx="36" cy="106" r="2.4" />
                  <circle cx="46" cy="96" r="2.4" />
                  <circle cx="55" cy="102" r="2.4" />
                  <circle cx="65" cy="84" r="2.4" />
                  <circle cx="76" cy="90" r="2.4" />
                  <circle cx="86" cy="68" r="2.4" />
                  <circle cx="96" cy="62" r="2.4" />
                  <circle cx="106" cy="70" r="2.4" />
                  <circle cx="116" cy="52" r="2.4" />
                  <circle cx="128" cy="44" r="2.4" />
                  <circle cx="138" cy="38" r="2.4" />
                </g>
                {/* R² annotation */}
                <text
                  x="78" y="22"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  fill="#1f4d7a"
                  fontWeight="600"
                >
                  R² · 0.74
                </text>
              </svg>
              <span className="cv-label">rating predictor</span>
            </div>
          </div>
          <div className="body">
            <div className="meta-row">
              <span className="num">
                02 · class
                <span className="platform"><Icon name="term" />python</span>
              </span>
              <span className="status-pill shipped">shipped</span>
            </div>
            <div className="name">
              Anime Rating Predictor <span className="project-arrow">↗</span>
            </div>
            <p className="desc">
              RandomForestRegressor over anime metadata — R² 0.74 after RandomizedSearchCV tuning
              and feature-importance analysis.
            </p>
            <div className="row-2" style={{ gap: 4 }}>
              <span className="chip">Python</span>
              <span className="chip">scikit-learn</span>
              <span className="chip">Pandas</span>
            </div>
            <div className="links">
              <a
                href="https://github.com/John5675"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="gh" />github
              </a>
            </div>
          </div>
        </ProjectShell>

        {/* Data Compressor — Huffman coding in C++ */}
        <ProjectShell className="project--csn">
          <div className="thumb">
            <div className="cover cover-compressor">
              <svg
                viewBox="0 0 160 150"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                {/* tree edges */}
                <g stroke="#d6dce3" strokeWidth="1" fill="none">
                  <line x1="80" y1="35" x2="50" y2="78" />
                  <line x1="80" y1="35" x2="110" y2="78" />
                  <line x1="50" y1="78" x2="30" y2="120" />
                  <line x1="50" y1="78" x2="70" y2="120" />
                  <line x1="110" y1="78" x2="90" y2="120" />
                  <line x1="110" y1="78" x2="130" y2="120" />
                </g>
                {/* 0 / 1 edge labels */}
                <g
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="8"
                  fill="#7e8794"
                  textAnchor="middle"
                >
                  <text x="60" y="58">0</text>
                  <text x="100" y="58">1</text>
                  <text x="36" y="102">0</text>
                  <text x="66" y="102">1</text>
                  <text x="94" y="102">0</text>
                  <text x="124" y="102">1</text>
                </g>
                {/* nodes */}
                <circle cx="80" cy="35" r="6" fill="#1f4d7a" />
                <circle cx="50" cy="78" r="5" fill="#0f1419" />
                <circle cx="110" cy="78" r="5" fill="#0f1419" />
                <circle cx="30" cy="120" r="4" fill="#0f1419" />
                <circle cx="70" cy="120" r="4" fill="#0f1419" />
                <circle cx="90" cy="120" r="4" fill="#0f1419" />
                <circle cx="130" cy="120" r="4" fill="#0f1419" />
              </svg>
              <span className="cv-label">huffman tree</span>
            </div>
          </div>
          <div className="body">
            <div className="meta-row">
              <span className="num">
                03 · class
                <span className="platform"><Icon name="term" />cli</span>
              </span>
              <span className="status-pill shipped">shipped</span>
            </div>
            <div className="name">
              Data Compressor <span className="project-arrow">↗</span>
            </div>
            <p className="desc">
              C++ file compressor using Huffman coding — up to 30% smaller with custom
              data structures tuned for larger inputs.
            </p>
            <div className="row-2" style={{ gap: 4 }}>
              <span className="chip">C++</span>
              <span className="chip">Huffman</span>
            </div>
            <div className="links">
              <a
                href="https://github.com/John5675"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="gh" />github
              </a>
            </div>
          </div>
        </ProjectShell>

        {/* ReleaseOps Backend — wide WIP card */}
        <ProjectShell className="project--wip">
          <div className="thumb cover-wip wip-thumb">
            <svg
              viewBox="0 0 280 140"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <g fill="none" stroke="#7e8794" strokeWidth="1.2" strokeDasharray="4 3">
                <path d="M50 70 L110 70" />
                <path d="M170 70 L230 70" />
              </g>
              <g fill="#fbfcfd" stroke="#0f1419" strokeWidth="1.2">
                <rect x="20" y="50" width="40" height="40" rx="4" />
                <rect x="110" y="40" width="60" height="60" rx="4" />
                <rect x="220" y="50" width="40" height="40" rx="4" />
              </g>
              <g
                fill="#0f1419"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                textAnchor="middle"
              >
                <text x="40" y="74">service</text>
                <text x="140" y="74">release</text>
                <text x="240" y="74">deploy</text>
              </g>
              <g fill="#1f4d7a">
                <circle cx="140" cy="58" r="2" />
                <circle cx="146" cy="58" r="2" opacity="0.6" />
                <circle cx="134" cy="58" r="2" opacity="0.6" />
                <circle cx="140" cy="86" r="2.4" />
              </g>
              <g
                fill="#a07238"
                fontFamily="JetBrains Mono, monospace"
                fontSize="7"
                letterSpacing="1"
              >
                <text x="80" y="65">CHECK</text>
                <text x="200" y="65">GATE</text>
              </g>
            </svg>
            <span className="cv-label">in progress</span>
          </div>
          <div className="body wip-body">
            <div className="meta-row">
              <span className="num">
                04 · in progress
                <span className="platform"><Icon name="service" />backend</span>
              </span>
              <span className="status-pill wip">building in public</span>
            </div>
            <div className="name wip-name">
              ReleaseOps Backend
              <span className="t-mono muted wip-tag">[WIP]</span>
              <span className="project-arrow">↗</span>
            </div>
            <p className="desc wip-desc">
              A Spring Boot release-management service tracking services, releases, readiness
              checks, deployment status, and documentation links through RESTful APIs. Layered
              architecture with controllers, services, repositories, DTOs, validation, and
              centralized exception handling — Flyway migrations, Dockerized local dev, and
              JUnit/Mockito tests up next.
            </p>
            <div className="row-2" style={{ gap: 4 }}>
              <span className="chip soft">Java</span>
              <span className="chip soft">Spring Boot</span>
              <span className="chip soft">PostgreSQL</span>
              <span className="chip soft">Docker</span>
              <span className="chip soft">Flyway</span>
              <span className="chip soft">JUnit · Mockito</span>
            </div>
            <div className="links">
              <a
                href="https://github.com/John5675"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="gh" />github
              </a>
            </div>
          </div>
        </ProjectShell>
      </motion.div>
    </Section>
  );
}
