import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 0.84, 0.32, 1] },
  },
};

export default function Section({ id, alt = false, tag, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section${alt ? ' alt' : ''} ${className}`.trim()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
    >
      <div className="section-inner">
        {tag && <span className="sec-tag">{tag}</span>}
        {children}
      </div>
    </motion.section>
  );
}
