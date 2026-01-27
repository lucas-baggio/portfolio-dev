"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20"
      style={{ overflowX: "clip" }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-info/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-success/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

      <div className="w-full mx-auto px-0 sm:px-2 md:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-4">
              <div className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></div>
              <span className="text-xs font-mono text-dark-muted">
                {t("hero.badge")}
              </span>
            </div>
          </motion.div>

          <div className="w-full overflow-visible" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-9xl font-bold mb-12 leading-tight text-accent-info"
              style={{
                display: "inline-block",
                margin: "0 auto",
              }}
            >
              Lucas Baggio
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-dark-muted mb-4 mt-8 font-light max-w-3xl mx-auto px-4 sm:px-0"
          >
            {t("hero.subtitle")}{" "}
            <span className="text-accent-info font-semibold">
              {t("hero.subtitle.enterprise")}
            </span>{" "}
            {t("hero.subtitle.and")}{" "}
            <span className="text-accent-success font-semibold">
              {t("hero.subtitle.sre")}
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-base text-dark-muted mb-12 font-mono max-w-2xl mx-auto"
          >
            {t("hero.skills")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center space-x-6 mb-16"
          >
            <motion.a
              href="https://github.com/lucas-baggio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-lg bg-dark-card border border-dark-border hover:border-accent-info transition-all glow-effect"
            >
              <FaGithub className="w-6 h-6 text-dark-text" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lucasbaggios/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-lg bg-dark-card border border-dark-border hover:border-accent-info transition-all glow-effect"
            >
              <FaLinkedin className="w-6 h-6 text-dark-text" />
            </motion.a>
            <motion.a
              href="https://github.com/lucas-baggio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 rounded-lg bg-gradient-to-r from-accent-info to-accent-success text-dark-bg font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <FaCode />
              <span>{t("hero.viewCode")}</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-dark-muted font-mono mb-2">
              {t("hero.scroll")}
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiArrowDown className="w-6 h-6 text-dark-muted" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
