"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaShieldAlt, FaCogs, FaDatabase, FaLightbulb, FaRocket } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Architecture() {
  const { t } = useLanguage();
  const colorClasses = {
    "accent-info": {
      bg: "bg-accent-info/20",
      border: "border-accent-info",
      text: "text-accent-info",
    },
    "accent-success": {
      bg: "bg-accent-success/20",
      border: "border-accent-success",
      text: "text-accent-success",
    },
    "accent-warning": {
      bg: "bg-accent-warning/20",
      border: "border-accent-warning",
      text: "text-accent-warning",
    },
    "accent-error": {
      bg: "bg-accent-error/20",
      border: "border-accent-error",
      text: "text-accent-error",
    },
  };

  const layers = [
    {
      name: "Presentation",
      icon: FaLayerGroup,
      color: "accent-info",
      description: "Controllers REST, DTOs, Validação",
      tech: "Spring MVC, Bean Validation",
    },
    {
      name: "Application",
      icon: FaCogs,
      color: "accent-success",
      description: "Use Cases, Orquestração de Negócio",
      tech: "Clean Architecture, SOLID",
    },
    {
      name: "Domain",
      icon: FaShieldAlt,
      color: "accent-warning",
      description: "Entidades, Regras de Negócio Puras",
      tech: "DDD, Value Objects",
    },
    {
      name: "Infrastructure",
      icon: FaDatabase,
      color: "accent-error",
      description: "Repositórios, APIs Externas, Persistência",
      tech: "JPA, Spring Data, External APIs",
    },
  ];

  return (
    <section
      id="architecture"
      className="py-32 relative overflow-hidden bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-info to-accent-success bg-clip-text text-transparent">
            {t("architecture.title")}
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            {t("architecture.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-full bg-gradient-to-b from-accent-info via-accent-success via-accent-warning to-accent-error opacity-20"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="metric-card rounded-xl p-6 relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${colorClasses[layer.color as keyof typeof colorClasses].bg} flex items-center justify-center mb-4 border-2 ${colorClasses[layer.color as keyof typeof colorClasses].border}`}
                    >
                      <Icon className={`w-8 h-8 ${colorClasses[layer.color as keyof typeof colorClasses].text}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-dark-text">
                      {layer.name}
                    </h3>
                    <p className="text-sm text-dark-muted mb-3">
                      {layer.description}
                    </p>
                    <div className="px-3 py-1 rounded-full bg-dark-bg border border-dark-border">
                      <span className="text-xs font-mono text-dark-muted">
                        {layer.tech}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-dark-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 mb-12"
        >
          <div className="metric-card rounded-xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-info/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent-info/20 flex items-center justify-center border border-accent-info flex-shrink-0">
                  <FaLightbulb className="w-6 h-6 text-accent-info" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-text">
                  {t("architecture.why.title")}
                </h3>
              </div>
              <p className="text-dark-muted mb-4 leading-relaxed text-sm sm:text-base">
                {t("architecture.why.description")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-dark-bg border border-dark-border">
                  <h4 className="font-semibold mb-2 text-accent-success text-sm">
                    {t("architecture.why.single")}
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {t("architecture.why.single.desc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg border border-dark-border">
                  <h4 className="font-semibold mb-2 text-accent-success text-sm">
                    {t("architecture.why.testability")}
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {t("architecture.why.testability.desc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg border border-dark-border">
                  <h4 className="font-semibold mb-2 text-accent-success text-sm">
                    {t("architecture.why.evolution")}
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {t("architecture.why.evolution.desc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg border border-dark-border">
                  <h4 className="font-semibold mb-2 text-accent-success text-sm">
                    {t("architecture.why.documentation")}
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {t("architecture.why.documentation.desc")}
                  </p>
                </div>
              </div>
              <motion.a
                href="https://github.com/lucas-baggio/tecos"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center sm:justify-start space-x-2 mt-6 px-4 py-2 rounded-lg bg-accent-info/10 border border-accent-info text-accent-info hover:bg-accent-info/20 transition-all text-sm font-mono w-full sm:w-auto"
              >
                <span>{t("architecture.why.viewCode")}</span>
                <span>→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="metric-card rounded-xl p-4 sm:p-6 md:p-8 relative overflow-hidden border-2 border-accent-success/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-success/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent-success/20 flex items-center justify-center border border-accent-success flex-shrink-0">
                  <FaRocket className="w-6 h-6 text-accent-success" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-text">
                    {t("architecture.java.title")}
                  </h3>
                  <p className="text-sm text-dark-muted font-mono">
                    {t("architecture.java.subtitle")}
                  </p>
                </div>
              </div>
              <p className="text-dark-muted mb-4 leading-relaxed text-sm sm:text-base">
                {t("architecture.java.description")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-dark-bg border border-dark-border">
                  <h4 className="font-semibold mb-2 text-accent-success text-sm">
                    {t("architecture.java.throughput")}
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {t("architecture.java.throughput.desc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg border border-dark-border">
                  <h4 className="font-semibold mb-2 text-accent-success text-sm">
                    {t("architecture.java.costs")}
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {t("architecture.java.costs.desc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg border border-dark-border sm:col-span-2 md:col-span-1">
                  <h4 className="font-semibold mb-2 text-accent-success text-sm">
                    {t("architecture.java.simple")}
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {t("architecture.java.simple.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            {
              title: t("architecture.principle.inversion"),
              description: t("architecture.principle.inversion.desc"),
            },
            {
              title: t("architecture.principle.testability"),
              description: t("architecture.principle.testability.desc"),
            },
            {
              title: t("architecture.principle.scalability"),
              description: t("architecture.principle.scalability.desc"),
            },
          ].map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="p-6 rounded-lg bg-dark-card border border-dark-border"
            >
              <h4 className="font-semibold mb-2 text-accent-info">
                {principle.title}
              </h4>
              <p className="text-sm text-dark-muted">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
