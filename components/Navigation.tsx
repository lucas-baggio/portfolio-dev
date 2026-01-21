"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Arquitetura", href: "#architecture" },
    { label: "Métricas", href: "#metrics" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-surface/95 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 rounded-full bg-accent-success animate-pulse-slow"></div>
            <span className="font-mono text-sm font-semibold text-dark-text">
              LB
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-sm text-dark-muted hover:text-accent-info transition-colors font-mono"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-4"
          >
            <div className="hidden md:flex items-center space-x-2 text-xs text-dark-muted font-mono">
              <div className="w-2 h-2 rounded-full bg-accent-success"></div>
              <span>ONLINE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
