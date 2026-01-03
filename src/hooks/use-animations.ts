import { useEffect, useState } from "react";

/**
 * Custom hook for number counter animations
 * Smoothly animates from 0 to target value
 */
export function useCounterAnimation(
  target: number,
  duration: number = 1000,
  shouldAnimate: boolean = true
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(target);
      return;
    }

    let intervalId: ReturnType<typeof setTimeout> | null = null;
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(progress * target);
      setCount(currentValue);

      if (progress < 1) {
        intervalId = setTimeout(animate, 16);
      }
    };

    animate();

    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, [target, duration, shouldAnimate]);

  return count;
}

/**
 * Custom hook for text reveal animations
 * Reveals text character by character
 */
export function useTextReveal(
  text: string,
  speed: number = 50,
  shouldAnimate: boolean = true
) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayedText(text);
      return;
    }

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, shouldAnimate]);

  return displayedText;
}

/**
 * Custom hook for scroll-triggered animations
 * Returns visibility state based on element's position in viewport
 */
export function useScrollVisibility(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    return () => observer.disconnect();
  }, [threshold]);

  return { isVisible, hasAnimated };
}

/**
 * Custom hook for mouse position tracking
 * Useful for parallax and follow effects
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}

/**
 * Custom hook for scroll position
 * Returns current scroll position and direction
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    let previousScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      if (currentScrollY > previousScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < previousScrollY) {
        setScrollDirection("up");
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollPosition, scrollDirection };
}

/**
 * Custom hook for window size
 * Returns current window dimensions
 */
export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

/**
 * Custom hook for fade in on scroll
 * Element fades in when scrolled into view
 */
export function useFadeInOnScroll(triggerOnce: boolean = true) {
  const [hasTriggered, setHasTriggered] = useState(!triggerOnce);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    return () => observer.disconnect();
  }, [triggerOnce]);

  return hasTriggered;
}
