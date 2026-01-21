"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-dark-card border border-dark-border hover:border-accent-info transition-all"
        aria-label="Change language"
      >
        <FaGlobe className="w-4 h-4 text-dark-text" />
        <span className="text-sm font-mono text-dark-text uppercase">
          {language === "pt" ? "PT" : "EN"}
        </span>
      </motion.button>
    </div>
  );
}
