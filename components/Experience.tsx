"use client";

import { motion } from "framer-motion";
import { FaJava, FaLaravel, FaDocker, FaChartBar, FaCode, FaShieldAlt, FaGithub, FaBuilding, FaGlobe, FaDatabase, FaCreditCard, FaBox, FaLanguage, FaClock, FaUserCheck, FaRocket } from "react-icons/fa";
import { SiSpringboot, SiGrafana, SiPrometheus, SiAngular, SiMysql, SiStripe } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectFeature {
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface TechStackItem {
  name: string;
  icon: any;
  color: string;
  highlight?: boolean;
}

interface Project {
  name: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  features: ProjectFeature[];
  techStack: TechStackItem[];
  githubUrl?: string;
  status: "production" | "development";
  location?: string;
  impact?: string[];
}

export default function Experience() {
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

  const projects: Project[] = [
    {
      name: t("experience.tecos.name"),
      subtitle: t("experience.tecos.subtitle"),
      description: t("experience.tecos.description"),
      challenge: t("experience.tecos.challenge"),
      solution: t("experience.tecos.solution"),
      features: [
        {
          title: t("experience.tecos.feature1.title"),
          description: t("experience.tecos.feature1.desc"),
          icon: FaCode,
          color: "accent-info",
        },
        {
          title: t("experience.tecos.feature2.title"),
          description: t("experience.tecos.feature2.desc"),
          icon: FaShieldAlt,
          color: "accent-success",
        },
        {
          title: t("experience.tecos.feature3.title"),
          description: t("experience.tecos.feature3.desc"),
          icon: FaChartBar,
          color: "accent-warning",
        },
      ],
      techStack: [
        { name: "Java 17+", icon: FaJava, color: "accent-error", highlight: true },
        { name: "Maven 3.6+", icon: FaBox, color: "accent-info" },
        { name: "Spring Boot", icon: SiSpringboot, color: "accent-success" },
        { name: "Docker", icon: FaDocker, color: "accent-info" },
        { name: "Docker Compose", icon: FaDocker, color: "accent-info" },
        { name: "Grafana", icon: SiGrafana, color: "accent-warning" },
        { name: "Prometheus", icon: SiPrometheus, color: "accent-error" },
      ],
      githubUrl: "https://github.com/lucas-baggio/TecOS-backend-springboot",
      status: "production",
    },
    {
      name: t("experience.atl.name"),
      subtitle: t("experience.atl.subtitle"),
      description: t("experience.atl.description"),
      challenge: t("experience.atl.challenge"),
      solution: t("experience.atl.solution"),
      impact: [
        t("experience.atl.impact1"),
        t("experience.atl.impact2"),
        t("experience.atl.impact3"),
        t("experience.atl.impact4"),
      ],
      features: [
        {
          title: t("experience.atl.feature1.title"),
          description: t("experience.atl.feature1.desc"),
          icon: FaCode,
          color: "accent-info",
        },
        {
          title: t("experience.atl.feature2.title"),
          description: t("experience.atl.feature2.desc"),
          icon: FaUserCheck,
          color: "accent-success",
        },
        {
          title: t("experience.atl.feature3.title"),
          description: t("experience.atl.feature3.desc"),
          icon: FaCreditCard,
          color: "accent-warning",
        },
      ],
      techStack: [
        { name: "Laravel", icon: FaLaravel, color: "accent-error", highlight: true },
        { name: "Angular", icon: SiAngular, color: "accent-error", highlight: true },
        { name: "MySQL", icon: SiMysql, color: "accent-info" },
        { name: "Stripe", icon: SiStripe, color: "accent-success" },
        { name: "Docker", icon: FaDocker, color: "accent-info" },
      ],
      status: "production",
      location: "Estados Unidos",
    },
  ];

  return (
    <section
      id="experience"
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
            {t("experience.title")}
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: projectIndex * 0.2 }}
              className="metric-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-info/10 via-transparent to-accent-success/10"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-dark-text break-words">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <p className="text-dark-muted font-mono text-sm">
                        {project.subtitle}
                      </p>
                      {project.location && (
                        <>
                          <span className="text-dark-muted hidden sm:inline">•</span>
                          <div className="flex items-center space-x-1 text-dark-muted">
                            <FaGlobe className="w-3 h-3 flex-shrink-0" />
                            <span className="text-xs font-mono">{project.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                    {project.location === "Estados Unidos" && (
                      <div className="mt-4 p-4 md:p-5 rounded-lg bg-gradient-to-r from-accent-info/15 to-accent-success/15 border-2 border-accent-info/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-info/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-4">
                            <div className="px-3 py-2 rounded-full bg-accent-info/20 border border-accent-info text-center sm:text-left">
                              <span className="text-xs font-bold text-accent-info font-mono">
                                {t("experience.international.us")}
                              </span>
                            </div>
                            <div className="px-3 py-2 rounded-full bg-accent-success/20 border border-accent-success text-center sm:text-left">
                              <span className="text-xs font-bold text-accent-success font-mono">
                                {t("experience.international.paid")}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
                            <FaLanguage className="w-5 h-5 text-accent-info flex-shrink-0" />
                            <span className="text-sm font-bold text-accent-info">
                              {t("experience.international.communication")}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            <div className="flex items-center space-x-2">
                              <FaGlobe className="w-4 h-4 text-accent-success flex-shrink-0" />
                              <span className="text-xs text-dark-muted font-mono">{t("experience.international.delivery")}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaUserCheck className="w-4 h-4 text-accent-success flex-shrink-0" />
                              <span className="text-xs text-dark-muted font-mono">{t("experience.international.autonomy")}</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:col-span-2 md:col-span-1">
                              <FaClock className="w-4 h-4 text-accent-success flex-shrink-0" />
                              <span className="text-xs text-dark-muted font-mono">{t("experience.international.timezone")}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-dark-bg border border-accent-info text-accent-info hover:bg-accent-info/10 transition-all"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span className="text-sm font-mono">{t("experience.viewCode")}</span>
                      </motion.a>
                    )}
                    <div className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-accent-success/20 border border-accent-success">
                      <div className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></div>
                      <span className="text-xs font-mono text-accent-success">
                        {project.status === "production" ? t("experience.production") : "DEVELOPMENT"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                  <div className="p-6 rounded-lg bg-dark-bg border border-dark-border">
                    <h4 className="text-lg font-semibold mb-3 text-accent-warning">
                      {t("experience.challenge")}
                    </h4>
                    <p className="text-dark-muted text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-dark-bg border border-dark-border">
                    <h4 className="text-lg font-semibold mb-3 text-accent-success">
                      {t("experience.solution")}
                    </h4>
                    <p className="text-dark-muted text-sm leading-relaxed">
                      {project.solution}
                    </p>
                    {project.impact && (
                      <div className="mt-4 pt-4 border-t border-dark-border">
                        <h5 className="text-sm font-semibold mb-2 text-accent-info">
                          {t("experience.impact")}
                        </h5>
                        <ul className="space-y-1.5">
                          {project.impact?.map((item: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2 text-xs text-dark-muted">
                              <span className="text-accent-success mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {project.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="p-6 rounded-lg bg-dark-bg border border-dark-border hover:border-accent-info transition-all"
                      >
                        <div
                          className={`w-12 h-12 rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses].bg} flex items-center justify-center mb-4 border ${colorClasses[feature.color as keyof typeof colorClasses].border}`}
                        >
                          <Icon className={`w-6 h-6 ${colorClasses[feature.color as keyof typeof colorClasses].text}`} />
                        </div>
                        <h5 className="font-semibold mb-2 text-dark-text">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-dark-muted">
                          {feature.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="border-t border-dark-border pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-dark-text">
                      {t("experience.techStack")}
                    </h4>
                    {project.techStack.some((tech) => tech.highlight) && (
                      <span className="text-xs font-mono text-dark-muted">
                        {project.name === "TecOS" 
                          ? "Java 17+ | Maven 3.6+"
                          : "Laravel + Angular"}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                            tech.highlight
                              ? `${colorClasses[tech.color as keyof typeof colorClasses].bg} ${colorClasses[tech.color as keyof typeof colorClasses].border}`
                              : "bg-dark-bg border-dark-border hover:border-accent-info"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${colorClasses[tech.color as keyof typeof colorClasses].text}`} />
                          <span className="text-sm font-mono text-dark-text">
                            {tech.name}
                          </span>
                          {tech.highlight && (
                            <span className="text-xs text-accent-success">★</span>
                          )}
                        </motion.div>
                      );
                    })}
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
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-lg bg-dark-card border border-dark-border">
            <h4 className="font-semibold mb-3 text-accent-info">
              {t("experience.quality.title")}
            </h4>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.quality.domain")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.quality.application")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.quality.methodology")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.quality.jacoco")}</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-dark-card border border-dark-border">
            <h4 className="font-semibold mb-3 text-accent-success">
              {t("experience.observability.title")}
            </h4>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.observability.grafana")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.observability.red")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.observability.latency")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-success">✓</span>
                <span>{t("experience.observability.business")}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
