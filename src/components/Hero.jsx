import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Icon from './Icon.jsx';
import RecruiterCard from './RecruiterCard.jsx';
import PipelineStrip from './PipelineStrip.jsx';
import './Hero.css';

const resumeHref = `${import.meta.env.BASE_URL}John-Huynh-Resume.pdf`;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 0.84, 0.32, 1] } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 18]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -16]);
  const pipelineY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 28]);

  return (
    <section ref={sectionRef} className="section hero-section" id="top">
      <div className="section-inner">
        <motion.div
          className="hero-ambient"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0.42, scale: 0.94 }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.42, 0.62, 0.5],
                  scale: [0.94, 1.04, 0.98],
                  x: [0, 18, -8, 0],
                  y: [0, -10, 6, 0],
                }
          }
          transition={{
            duration: 13,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="col-1-7 stack-5 hero-title-block"
          style={{ y: titleY }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="t-label"
            style={{ color: 'var(--accent)' }}
            variants={rise}
          >
            software engineer · backend · applied ai
          </motion.p>
          <motion.h1 className="t-display" variants={rise}>
            I build <span className="hl">reliable backend systems</span>
            <br />
            and useful AI tools.
          </motion.h1>
          <motion.p className="t-body lede" variants={rise}>
            Backend services, internal tooling, and the observability that keeps them honest.
            Currently: full-stack work on the IoT team at <b>Resmed</b>. Math–CS,{' '}
            <b>UC San Diego '26</b>.
          </motion.p>
          <motion.div
            className="row-3"
            style={{ marginTop: 'var(--s-2)' }}
            variants={rise}
          >
            <a href="#projects" className="btn">
              View Projects
              <span className="ico-trail"><Icon name="arrow" /></span>
            </a>
            <a href={resumeHref} className="btn ghost" download>
              Download Resume <Icon name="arrow-down" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="col-8-5 hero-card-wrap" style={{ y: cardY }}>
          <RecruiterCard />
        </motion.div>

        <motion.div
          className="col-1-12 hero-pipeline-wrap"
          style={{ y: pipelineY }}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 0.84, 0.32, 1] }}
        >
          <PipelineStrip />
        </motion.div>
      </div>
    </section>
  );
}
