import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';

const variants = {
  up: { opacity: 0, y: 34, filter: 'blur(10px)' },
  down: { opacity: 0, y: -28, filter: 'blur(10px)' },
  left: { opacity: 0, x: -34, filter: 'blur(10px)' },
  right: { opacity: 0, x: 34, filter: 'blur(10px)' },
  scale: { opacity: 0, scale: 0.96, filter: 'blur(10px)' },
};

export default function Reveal({
  children,
  className,
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      initial={variants[direction] || variants.up}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.24, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
