import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";
import profile from "../assets/images/profile.jpg";
import { ThreeJSBackground } from "./ThreeJSBackground";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const roles = useMemo(
    () => [
      "Software Engineer",
      "Frontend Engineer",
      "Backend Engineer",
      "Mobile Engineer",
    ],
    []
  );

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000; // Pause before deleting

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ThreeJSBackground />
      <section
        ref={ref}
        id="home"
        className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div className="absolute inset-0 -z-10" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </motion.div>

        <motion.div className="max-w-6xl mx-auto w-full" style={{ opacity }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <span className="text-blue-600 dark:text-blue-400">
                  Hi there, I'm
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-900 dark:text-white"
                style={{
                  fontSize: "clamp(1rem, 7vw, 3rem)",
                  lineHeight: "1.2",
                }}
              >
                {["Balogun ", "Al-ameen"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="h-12 sm:h-16 md:h-20 flex items-center"
              >
                <h2
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)" }}
                >
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-6 sm:h-8 md:h-12 bg-gradient-to-b from-blue-600 to-purple-600 ml-1"
                  />
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-gray-600 dark:text-gray-400 max-w-2xl"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.125rem)",
                  lineHeight: "1.75",
                }}
              >
                A passionate developer crafting scalable, user-friendly web
                experiences. I turn ideas into elegant solutions with clean code
                and modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("projects")}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full sm:w-auto"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl" />
                <img
                  src={profile}
                  alt="Al-ameen Balogun"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-blue-200 dark:border-blue-800"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.5 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
