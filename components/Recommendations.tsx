"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

interface Recommendation {
  name: string;
  position: string;
  company: string;
  text: string;
}

export default function Recommendations() {
  const { t } = useLanguage();
  const recommendations: Recommendation[] = [
    {
      name: t("recommendations.paulo.name"),
      position: t("recommendations.paulo.position"),
      company: "",
      text: t("recommendations.paulo.text"),
    },
    {
      name: t("recommendations.joao.name"),
      position: t("recommendations.joao.position"),
      company: "",
      text: t("recommendations.joao.text"),
    },
    {
      name: t("recommendations.celso.name"),
      position: t("recommendations.celso.position"),
      company: t("recommendations.celso.company"),
      text: t("recommendations.celso.text"),
    },
    {
      name: t("recommendations.abner.name"),
      position: t("recommendations.abner.position"),
      company: t("recommendations.abner.company"),
      text: t("recommendations.abner.text"),
    },
  ];

  return (
    <section
      id="recommendations"
      className="py-32 relative overflow-hidden bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-info to-accent-success bg-clip-text text-transparent">
            {t("recommendations.title")}
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            {t("recommendations.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="metric-card rounded-xl p-6 md:p-8 relative"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent-info/20 flex items-center justify-center border border-accent-info">
                    <FaQuoteLeft className="w-6 h-6 text-accent-info" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-dark-muted text-sm leading-relaxed mb-6">
                    {recommendation.text}
                  </p>
                  <div className="border-t border-dark-border pt-4">
                    <h4 className="font-semibold text-dark-text mb-1">
                      {recommendation.name}
                    </h4>
                    <p className="text-sm text-dark-muted font-mono">
                      {recommendation.position}
                      {recommendation.company && ` • ${recommendation.company}`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/lucasbaggios/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-dark-card border border-accent-info text-accent-info hover:bg-accent-info/10 transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="font-mono text-sm">{t("recommendations.viewAll")}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
