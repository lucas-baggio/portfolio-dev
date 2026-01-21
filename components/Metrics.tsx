"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChartLine, FaCheckCircle, FaClock, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

const latencyData = [
  { time: "00:00", p95: 120, p99: 180 },
  { time: "04:00", p95: 115, p99: 175 },
  { time: "08:00", p95: 125, p99: 185 },
  { time: "12:00", p95: 118, p99: 178 },
  { time: "16:00", p95: 122, p99: 182 },
  { time: "20:00", p95: 119, p99: 179 },
];

const rpsData = [
  { time: "00:00", value: 1250 },
  { time: "04:00", value: 980 },
  { time: "08:00", value: 2100 },
  { time: "12:00", value: 1850 },
  { time: "16:00", value: 1950 },
  { time: "20:00", value: 1650 },
];

const errorRateData = [
  { time: "00:00", value: 0.12 },
  { time: "04:00", value: 0.08 },
  { time: "08:00", value: 0.15 },
  { time: "12:00", value: 0.10 },
  { time: "16:00", value: 0.11 },
  { time: "20:00", value: 0.09 },
];

export default function Metrics() {
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

  const metrics = [
    {
      label: t("metrics.coverage.label"),
      value: "86%",
      target: "100%",
      icon: FaCheckCircle,
      color: "accent-success",
      description: t("metrics.coverage.desc"),
      details: [
        { layer: t("metrics.domain"), coverage: "100%" },
        { layer: t("metrics.application"), coverage: "100%" },
        { layer: t("metrics.infrastructure"), coverage: "75%" },
      ],
    },
    {
      label: t("metrics.latency.label"),
      value: "118ms",
      target: "< 200ms",
      icon: FaClock,
      color: "accent-info",
      description: t("metrics.latency.desc"),
    },
    {
      label: t("metrics.error.label"),
      value: "0.10%",
      target: "< 0.5%",
      icon: FaExclamationTriangle,
      color: "accent-success",
      description: t("metrics.error.desc"),
    },
    {
      label: t("metrics.rps.label"),
      value: "1,650",
      target: "> 1,000",
      icon: FaChartLine,
      color: "accent-info",
      description: t("metrics.rps.desc"),
      tooltip: t("metrics.rps.tooltip"),
    },
  ];

  return (
    <section
      id="metrics"
      className="py-32 relative overflow-hidden bg-dark-bg"
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
            {t("metrics.title")}
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            {t("metrics.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="metric-card rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses].bg} flex items-center justify-center border ${colorClasses[metric.color as keyof typeof colorClasses].border}`}
                  >
                    <Icon className={`w-6 h-6 ${colorClasses[metric.color as keyof typeof colorClasses].text}`} />
                  </div>
                  <span className="text-xs font-mono text-dark-muted">
                    {t("metrics.live")}
                  </span>
                </div>
                <h3 className="text-sm text-dark-muted mb-1 font-mono">
                  {metric.label}
                </h3>
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-bold text-dark-text">
                    {metric.value}
                  </span>
                </div>
                <p className="text-xs text-dark-muted mb-3">
                  {metric.description}
                </p>
                {metric.tooltip && (
                  <div className="mb-3 flex items-start space-x-2 p-2 rounded bg-dark-bg border border-dark-border">
                    <FaInfoCircle className="w-3 h-3 text-accent-info mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-dark-muted font-mono leading-relaxed">
                      {metric.tooltip}
                    </p>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-dark-muted">
                    {t("metrics.target")}: {metric.target}
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></div>
                  </div>
                </div>
                {metric.details && (
                  <div className="mt-4 pt-4 border-t border-dark-border">
                    {metric.details.map((detail) => (
                      <div
                        key={detail.layer}
                        className="flex items-center justify-between text-xs mb-2"
                      >
                        <span className="text-dark-muted font-mono">
                          {detail.layer}
                        </span>
                        <span className="text-accent-success font-semibold">
                          {detail.coverage}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="metric-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-dark-text">
                Latência (P95/P99)
              </h3>
              <span className="text-xs font-mono text-dark-muted">24h</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={latencyData}>
                <defs>
                  <linearGradient id="colorP95" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="#3b82f6"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="#3b82f6"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient id="colorP99" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="#10b981"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="#10b981"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#252b45" />
                <XAxis
                  dataKey="time"
                  stroke="#94a3b8"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1f3a",
                    border: "1px solid #252b45",
                    borderRadius: "8px",
                    color: "#e2e8f0",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="p95"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorP95)"
                />
                <Area
                  type="monotone"
                  dataKey="p99"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorP99)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent-info"></div>
                <span className="text-xs text-dark-muted font-mono">P95</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent-success"></div>
                <span className="text-xs text-dark-muted font-mono">P99</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="metric-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-dark-text">
                Requests por Segundo
              </h3>
              <span className="text-xs font-mono text-dark-muted">24h</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={rpsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#252b45" />
                <XAxis
                  dataKey="time"
                  stroke="#94a3b8"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1f3a",
                    border: "1px solid #252b45",
                    borderRadius: "8px",
                    color: "#e2e8f0",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <span className="text-xs text-dark-muted font-mono">
                Média: 1,650 RPS
              </span>
              <p className="text-xs text-dark-muted font-mono mt-1 opacity-75">
                Teste de carga: k6 simulando pico de acessos
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="metric-card rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-dark-text">
              Taxa de Erro (5xx)
            </h3>
            <span className="text-xs font-mono text-dark-muted">24h</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={errorRateData}>
              <defs>
                <linearGradient id="colorError" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#10b981"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="#10b981"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#252b45" />
              <XAxis
                dataKey="time"
                stroke="#94a3b8"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1f3a",
                  border: "1px solid #252b45",
                  borderRadius: "8px",
                  color: "#e2e8f0",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorError)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="text-center mt-4">
            <span className="text-xs text-dark-muted font-mono">
              Média: 0.10% (Target: &lt; 0.5%)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
