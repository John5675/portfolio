import Section from './Section.jsx';
import Icon from './Icon.jsx';
import './Experience.css';

const TIMELINE = [
  {
    year: '2025 — present',
    title: 'ResMed · SWE Intern',
    sub: 'Metrics platform, IoT observability, deployments.',
    now: true,
  },
  {
    year: '2022 — 2026',
    title: 'UC San Diego',
    sub: 'B.S. Mathematics–Computer Science.',
  },
];

export default function Experience() {
  return (
    <Section id="experience" tag="03 · experience">
      <div className="sec-head">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="t-h1">Where I've shipped</h2>
        </div>
        <div className="rule" />
        <span className="t-mono muted">03 / 06</span>
      </div>

      <div className="col-1-8">
        <div className="exp-feature">
          <div className="exp-head">
            <div className="badge">RM</div>
            <div className="top">
              <div>
                <h3 className="t-h2 role">Software Engineering Intern</h3>
                <div className="org">
                  <span><b>ResMed</b></span>
                  <span className="sep">·</span>
                  <span>San Diego, CA</span>
                  <span className="sep">·</span>
                  <span>IoT platform</span>
                </div>
              </div>
              <span className="date-tag">
                <Icon name="cal" />
                Jun 2025 – Present
              </span>
            </div>
          </div>

          <div className="exp-body">
            <p className="t-body exp-blurb">
              Full-stack and platform work supporting ResMed's connected device fleet — building
              internal tooling, hardening observability, and untangling deployment infrastructure
              that other engineers depend on every day.
            </p>

            <div className="check-list">
              <div className="check">
                <span className="marker"><Icon name="check" /></span>
                <span className="t">
                  Built an <b>engineering-metrics platform</b> (React · TypeScript · Spring Boot ·
                  MongoDB) surfacing review quality, response times, and approval patterns — with{' '}
                  <span className="metric">AI-powered</span> PR summarization so reviewers land
                  on the right context first.
                </span>
              </div>
              <div className="check">
                <span className="marker"><Icon name="check" /></span>
                <span className="t">
                  Automated <b>release documentation</b> for IoT microservices with TypeScript
                  tooling, <span className="metric">MCP workflows</span>, and internal APIs —
                  eliminating per-release manual effort.
                </span>
              </div>
              <div className="check">
                <span className="marker"><Icon name="check" /></span>
                <span className="t">
                  Consolidated Datadog observability across{' '}
                  <span className="metric">20+ IoT services</span> into reusable Terraform
                  templates and shipped <span className="metric">12 new monitors</span> on
                  data-ingestion endpoints.
                </span>
              </div>
              <div className="check">
                <span className="marker"><Icon name="check" /></span>
                <span className="t">
                  Refactored IoT ingestion deployments from per-endpoint to grouped deployments by
                  restructuring <b>Kubernetes ConfigMaps</b>, YAML manifests, GitHub Actions build
                  matrices, and gateway routing.
                </span>
              </div>
            </div>

            <div className="exp-foot">
              <div className="row-2" style={{ gap: 4 }}>
                <span className="chip">Java</span>
                <span className="chip">Spring Boot</span>
                <span className="chip">TypeScript</span>
                <span className="chip">React</span>
                <span className="chip">MongoDB</span>
                <span className="chip">Kubernetes</span>
                <span className="chip">Terraform</span>
                <span className="chip">Datadog</span>
                <span className="chip soft">MCP</span>
              </div>
              <a href="#" className="link" onClick={(e) => e.preventDefault()}>
                case study <span className="arr"><Icon name="arrow" /></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-9-4 exp-timeline-wrap">
        <p className="t-label exp-timeline-label">Timeline · recent first</p>
        <div className="timeline">
          {TIMELINE.map((t) => (
            <div key={t.title} className={`tl-item${t.now ? ' now' : ''}`}>
              <div className="y">{t.year}</div>
              <div className="t">{t.title}</div>
              <div className="s">{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
