"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5517981379835?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            Vamos Conversar
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            Interessado em trabalhar juntos? Entre em contato através do
            formulário ou redes sociais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="metric-card rounded-xl p-6 md:p-8 w-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-text">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono text-dark-muted mb-2"
                >
                  NOME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-info transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono text-dark-muted mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-info transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-dark-muted mb-2"
                >
                  MENSAGEM
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full min-w-0 box-border px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-dark-text placeholder-dark-muted focus:outline-none focus:border-accent-info transition-all resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-accent-info to-accent-success text-dark-bg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
              >
                {submitted ? (
                  <span>Enviado!</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="metric-card rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark-text">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:lucas.baggio.silva@gmail.com"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-dark-bg border border-dark-border hover:border-accent-info transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-info/20 flex items-center justify-center border border-accent-info group-hover:bg-accent-info/30 transition-all">
                    <FaEnvelope className="w-6 h-6 text-accent-info" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-dark-muted mb-1">
                      EMAIL
                    </p>
                    <p className="text-dark-text font-semibold">
                      lucas.baggio.silva@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/lucas-baggio"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-dark-bg border border-dark-border hover:border-accent-info transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-info/20 flex items-center justify-center border border-accent-info group-hover:bg-accent-info/30 transition-all">
                    <FaGithub className="w-6 h-6 text-accent-info" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-dark-muted mb-1">
                      GITHUB
                    </p>
                    <p className="text-dark-text font-semibold">
                    github.com/lucas-baggio
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/lucasbaggios"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-dark-bg border border-dark-border hover:border-accent-info transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-info/20 flex items-center justify-center border border-accent-info group-hover:bg-accent-info/30 transition-all">
                    <FaLinkedin className="w-6 h-6 text-accent-info" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-dark-muted mb-1">
                      LINKEDIN
                    </p>
                    <p className="text-dark-text font-semibold">
                      linkedin.com/in/lucasbaggios
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-dark-card border border-dark-border">
              <h4 className="font-semibold mb-3 text-accent-success">
                Disponibilidade
              </h4>
              <p className="text-sm text-dark-muted mb-2">
                Aberto para oportunidades Pleno/Sênior em desenvolvimento de
                software, com foco em arquitetura e qualidade.
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></div>
                <span className="text-xs font-mono text-dark-muted">
                  DISPONÍVEL PARA PROJETOS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-dark-muted font-mono mb-4 md:mb-0">
              © 2024 Lucas Baggio. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></div>
              <span className="text-xs font-mono text-dark-muted">
                BUILT WITH NEXT.JS & TAILWIND CSS
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
