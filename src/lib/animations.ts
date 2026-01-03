/**
 * Comprehensive animation configurations and utilities
 * Using motion/react (Framer Motion) for sophisticated animations
 */

export const SPRING_CONFIG = {
  smooth: { type: "spring", stiffness: 50, damping: 20 },
  bouncy: { type: "spring", stiffness: 200, damping: 10 },
  snappy: { type: "spring", stiffness: 300, damping: 30 },
  slow: { type: "spring", stiffness: 30, damping: 25 },
};

export const TRANSITION_CONFIG = {
  fast: { duration: 0.3 },
  normal: { duration: 0.6 },
  slow: { duration: 0.8 },
  verySlow: { duration: 1.2 },
};

// Stagger container for sequenced animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fade in from top
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ...SPRING_CONFIG.smooth },
  },
};

// Fade in from bottom
export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ...SPRING_CONFIG.smooth },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ...SPRING_CONFIG.smooth },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ...SPRING_CONFIG.smooth },
  },
};

// Scale and fade in
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ...SPRING_CONFIG.bouncy },
  },
};

// Rotate and fade in
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ...SPRING_CONFIG.bouncy },
  },
};

// Floating animation
export const floating = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Glow animation
export const glow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.6)",
      "0 0 20px rgba(59, 130, 246, 0.3)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Shimmer/gradient animation
export const shimmer = {
  animate: {
    backgroundPosition: ["0% center", "100% center", "0% center"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotate animation
export const rotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Float and rotate
export const floatRotate = {
  animate: {
    y: [0, -30, 0],
    rotate: [0, 360, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Hover effects
export const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3 } },
};

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 20px 50px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 },
  },
};

// Tap effects
export const tapScale = {
  whileTap: { scale: 0.95 },
};

// Title animation with character-by-character reveal
export const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const charVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Card animation
export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Skill bar animation
export const skillBarVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (width: number) => ({
    width: `${width}%`,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  }),
};

// Badge animation
export const badgeVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

// Gradient shift animation (for gradient backgrounds)
export const gradientShift = {
  animate: {
    backgroundPosition: ["0% center", "100% center"],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

// Bounce animation
export const bounce = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Slide in animations
export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ...SPRING_CONFIG.smooth },
  },
};

export const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ...SPRING_CONFIG.smooth },
  },
};

// Icon animation
export const iconPulse = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Text underline animation
export const underlineVariants = {
  initial: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3 } },
};

// Button ripple effect
export const ripple = {
  animate: {
    scale: [0, 1],
    opacity: [1, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

// Stagger list animation
export const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Number counter animation would be used with a custom hook
export const numberCounterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
