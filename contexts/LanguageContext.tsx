"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "portfolio-language",
    ) as Language;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const translations: Record<Language, Record<string, string>> = {
    pt: {
      "nav.home": "Início",
      "nav.architecture": "Arquitetura",
      "nav.metrics": "Métricas",
      "nav.experience": "Experiência",
      "nav.recommendations": "Recomendações",
      "nav.contact": "Contato",
      "hero.badge": "DESENVOLVEDOR FULL STACK",
      "hero.subtitle": "Construindo sistemas de alta escalabilidade com",
      "hero.subtitle.enterprise": "arquitetura enterprise-ready",
      "hero.subtitle.and": "e mentalidade de",
      "hero.subtitle.sre": "Site Reliability Engineering",
      "hero.skills":
        "Especialista em Java/Spring Boot & PHP/Laravel • Clean Architecture • TDD/BDD • Observabilidade",
      "hero.scroll": "SCROLL PARA EXPLORAR",
      "hero.viewCode": "Ver Código no GitHub",
      "architecture.title": "Arquitetura Limpa",
      "architecture.subtitle":
        "Separação rigorosa de responsabilidades garantindo testabilidade, manutenibilidade e escalabilidade",
      "architecture.why.title":
        "Por que Use Cases em vez de Services Gigantes?",
      "architecture.why.description":
        "A escolha por Use Cases ao invés de Services monolíticos não é apenas uma questão de organização, mas uma decisão arquitetural estratégica que impacta diretamente na manutenibilidade e escalabilidade do sistema.",
      "architecture.java.title": "Java 21 & Virtual Threads",
      "architecture.java.subtitle": "Performance de próxima geração",
      "architecture.java.description":
        "O projeto utiliza Java 21 com Virtual Threads, a feature mais revolucionária do Java moderno. Virtual Threads permitem escalabilidade massiva de I/O sem o overhead de threads tradicionais, suportando milhões de requisições concorrentes com recursos mínimos.",
      "architecture.why.single": "Responsabilidade Única",
      "architecture.why.single.desc":
        "Cada Use Case tem uma responsabilidade clara e bem definida, facilitando testes unitários isolados e manutenção futura.",
      "architecture.why.testability": "Testabilidade",
      "architecture.why.testability.desc":
        "Com Use Cases isolados, conseguimos 100% de cobertura no domínio e application, algo impossível com Services gigantes.",
      "architecture.why.evolution": "Evolução Independente",
      "architecture.why.evolution.desc":
        "Mudanças em uma regra de negócio não afetam outras, permitindo evolução contínua sem acoplamento.",
      "architecture.why.documentation": "Documentação Viva",
      "architecture.why.documentation.desc":
        "O código se torna auto-documentado: cada Use Case representa uma funcionalidade específica do sistema.",
      "architecture.why.viewCode": "Ver implementação no GitHub",
      "architecture.java.throughput": "Throughput 10x",
      "architecture.java.throughput.desc":
        "Virtual Threads eliminam o overhead de context switching, permitindo muito mais requisições simultâneas.",
      "architecture.java.costs": "Redução de Custos",
      "architecture.java.costs.desc":
        "Menos recursos necessários = menor custo de infraestrutura, especialmente em ambientes cloud.",
      "architecture.java.simple": "Código Simples",
      "architecture.java.simple.desc":
        "Mesmo código síncrono, performance assíncrona. Sem necessidade de mudar para programação reativa.",
      "architecture.principle.inversion": "Dependency Inversion",
      "architecture.principle.inversion.desc":
        "Camadas externas dependem de abstrações definidas nas camadas internas",
      "architecture.principle.testability": "Testabilidade",
      "architecture.principle.testability.desc":
        "100% de cobertura no domínio e application através de testes unitários isolados",
      "architecture.principle.scalability": "Escalabilidade",
      "architecture.principle.scalability.desc":
        "Arquitetura preparada para crescimento horizontal e vertical",
      "metrics.title": "Observabilidade & Qualidade",
      "metrics.subtitle":
        "Métricas em tempo real seguindo o método RED (Rate, Errors, Duration) e cobertura de testes garantida",
      "metrics.coverage.label": "Cobertura de Testes",
      "metrics.coverage.desc": "Domínio + Application",
      "metrics.latency.label": "Latência P95",
      "metrics.latency.desc": "Percentil 95",
      "metrics.error.label": "Taxa de Erro",
      "metrics.error.desc": "Erros 5xx",
      "metrics.rps.label": "RPS Médio",
      "metrics.rps.desc": "Requests por segundo",
      "metrics.rps.tooltip":
        "Métricas obtidas via teste de carga com k6 simulando pico de acessos",
      "metrics.live": "LIVE",
      "metrics.target": "Meta",
      "metrics.domain": "Domain",
      "metrics.application": "Application",
      "metrics.infrastructure": "Infrastructure",
      "metrics.coverage": "Cobertura",
      "experience.title": "Projetos em Destaque",
      "experience.subtitle":
        "Sistemas enterprise-ready desenvolvidos com Clean Architecture e foco em qualidade",
      "experience.challenge": "O Desafio",
      "experience.solution": "A Solução",
      "experience.impact": "Impacto Alcançado:",
      "experience.techStack": "Stack Tecnológico",
      "experience.viewCode": "Ver Código",
      "experience.international.badge": "Projeto Freelance Internacional",
      "experience.international.us": "Empresa baseada nos EUA",
      "experience.international.paid": "Freelance internacional pago",
      "experience.international.communication":
        "Comunicação direta com cliente (EN)",
      "experience.international.delivery": "Entrega remota",
      "experience.international.autonomy": "Autonomia completa",
      "experience.international.timezone": "Gerenciamento de fuso horário",
      "experience.production": "EM PRODUÇÃO",
      "experience.tecos.name": "TecOS",
      "experience.tecos.subtitle": "Gerenciador de Ordens de Serviço",
      "experience.tecos.description":
        "Sistema enterprise-ready com arquitetura robusta",
      "experience.tecos.challenge":
        "Migração de um MVP em Laravel para uma arquitetura robusta em Spring Boot capaz de suportar alta carga e garantir escalabilidade horizontal. O sistema precisava manter disponibilidade durante a transição e garantir zero downtime.",
      "experience.tecos.solution":
        "Implementação de Clean Architecture com separação rigorosa de camadas, isolamento de regras de negócio em Use Cases e inversão de dependências. Desenvolvido com Java 17+ e Maven 3.6+ para gerenciamento de dependências. Containerização com Docker e Docker Compose para facilitar deploy e ambiente de desenvolvimento. Cada camada testada isoladamente garantindo manutenibilidade e evolução contínua.",
      "experience.tecos.feature1.title": "Migração Arquitetural",
      "experience.tecos.feature1.desc":
        "Transição de MVP Laravel para arquitetura robusta em Spring Boot com Clean Architecture",
      "experience.tecos.feature2.title": "Testes Garantidos",
      "experience.tecos.feature2.desc":
        "100% de cobertura no Domínio e Application através de TDD/BDD com JUnit 5 e Mockito",
      "experience.tecos.feature3.title": "Observabilidade",
      "experience.tecos.feature3.desc":
        "Dashboard customizado no Grafana monitorando métricas RED e métricas de negócio",
      "experience.atl.name": "ATL All Seasons HVAC",
      "experience.atl.subtitle": "Gerenciador de Ordens de Serviço",
      "experience.atl.description":
        "Sistema de gestão para manutenção de ar condicionado",
      "experience.atl.challenge":
        "Desenvolvimento de um sistema completo de gestão de ordens de serviço para uma empresa de manutenção de HVAC (Heating, Ventilation, and Air Conditioning) nos Estados Unidos. O sistema precisava gerenciar clientes, técnicos, agendamentos, histórico de serviços e relatórios financeiros.",
      "experience.atl.solution":
        "Centralizou a operação de campo, eliminando controles manuais e permitindo faturamento online integrado. Sistema desenvolvido com Laravel no backend e Angular no frontend, garantindo separação clara de responsabilidades e escalabilidade. Implementação de funcionalidades específicas do setor HVAC como histórico de equipamentos, agendamento inteligente de técnicos e integração completa com Stripe para processamento de pagamentos. Interface responsiva e intuitiva para uso em campo pelos técnicos.",
      "experience.atl.impact1":
        "Redução de retrabalho através de centralização de dados",
      "experience.atl.impact2":
        "Automação completa de pagamentos com integração Stripe",
      "experience.atl.impact3":
        "Melhoria operacional com eliminação de controles manuais",
      "experience.atl.impact4":
        "Faturamento online integrado eliminando processos offline",
      "experience.atl.feature1.title": "Arquitetura de API",
      "experience.atl.feature1.desc":
        "API REST versionada com autenticação JWT, controle de acesso por roles e segurança de pagamentos PCI-compliant",
      "experience.atl.feature2.title": "Autonomia End-to-End",
      "experience.atl.feature2.desc":
        "Atuei de ponta a ponta: levantamento de requisitos, decisões de stack, arquitetura, implementação, entrega em produção e manutenção pós-go-live",
      "experience.atl.feature3.title": "Integração Stripe",
      "experience.atl.feature3.desc":
        "Processamento de pagamentos seguro e completo integrado com Stripe para transações online, eliminando processos manuais de faturamento",
      "experience.quality.title": "Qualidade Garantida",
      "experience.quality.domain": "100% de cobertura no Domínio",
      "experience.quality.application": "100% de cobertura na Application",
      "experience.quality.methodology": "TDD/BDD como metodologia",
      "experience.quality.jacoco": "Jacoco para análise de cobertura",
      "experience.observability.title": "Observabilidade Ativa",
      "experience.observability.grafana": "Dashboard customizado no Grafana",
      "experience.observability.red": "Métricas RED (Rate, Errors, Duration)",
      "experience.observability.latency": "Latência P95/P99 monitorada",
      "experience.observability.business": "Métricas de negócio em tempo real",
      "recommendations.title": "Recomendações",
      "recommendations.subtitle":
        "Depoimentos de profissionais que trabalharam e colaboraram comigo",
      "recommendations.viewAll": "Ver todas as recomendações no LinkedIn",
      "recommendations.paulo.name": "Paulo André Freddi da Silva",
      "recommendations.paulo.position": "Designer",
      "recommendations.paulo.text":
        "Acompanhei de perto a evolução do Lucas desde o início na programação e posso afirmar que ele alia responsabilidade, senso crítico e crescimento técnico consistente. Destaca-se pela capacidade de transformar problemas complexos em soluções eficientes, além de ser colaborativo, ético e confiável em equipe.",
      "recommendations.joao.name": "João Victor Fernandes Skrzypczak",
      "recommendations.joao.position": "Desenvolvedor Full Stack",
      "recommendations.joao.text":
        "Trabalhei com o Lucas durante nosso estágio na Geminis Soluções e sempre o vi atuar com proatividade, competência técnica e foco em resultados. Sua capacidade de resolver problemas e colaborar com o time fez diferença real nos projetos em que atuamos juntos.",
      "recommendations.celso.name": "Celso Junior",
      "recommendations.celso.position": "Full Stack Developer",
      "recommendations.celso.company": "VM Agro",
      "recommendations.celso.text":
        "Mesmo sem termos trabalhado diretamente juntos, acompanhei o desempenho do Lucas como aluno destaque na ETEC e recebi excelentes recomendações sobre sua postura e dedicação. É um profissional comprometido, com forte domínio em Angular e Laravel, e evidente disciplina no aprendizado contínuo.",
      "recommendations.abner.name": "Abner Davi Lima e Silva",
      "recommendations.abner.position": "Desenvolvedor Full Stack",
      "recommendations.abner.company": "Next_Code",
      "recommendations.abner.text":
        "Lucas sempre demonstrou profundo interesse pela área, aliado a uma dedicação constante ao estudo e à aplicação prática do conhecimento. Destacou-se como aluno pela maturidade técnica e pela disposição em ajudar colegas, dedicando tempo real para compartilhar conhecimento sempre que necessário.",
      "contact.title": "Vamos Conversar",
      "contact.subtitle":
        "Interessado em trabalhar juntos? Entre em contato através do formulário ou redes sociais",
      "contact.form.title": "Envie uma Mensagem",
      "contact.form.name": "NOME",
      "contact.form.email": "EMAIL",
      "contact.form.message": "MENSAGEM",
      "contact.form.send": "Enviar Mensagem",
      "contact.form.sent": "Enviado!",
      "contact.form.messagePlaceholder": "Sua mensagem...",
      "contact.whatsapp.message": "Olá! Meu nome é",
      "contact.info.title": "Informações de Contato",
      "contact.availability.title": "Disponibilidade",
      "contact.availability.text":
        "Aberto para oportunidades Pleno/Sênior em desenvolvimento de software, com foco em arquitetura e qualidade.",
      "contact.availability.status": "DISPONÍVEL PARA PROJETOS",
      "footer.copyright": "© 2024 Lucas Baggio. Todos os direitos reservados.",
      "footer.built": "BUILT WITH NEXT.JS & TAILWIND CSS",
    },
    en: {
      "nav.home": "Home",
      "nav.architecture": "Architecture",
      "nav.metrics": "Metrics",
      "nav.experience": "Experience",
      "nav.recommendations": "Recommendations",
      "nav.contact": "Contact",
      "hero.badge": "FULL STACK SOFTWARE ENGINEER",
      "hero.subtitle": "Building highly scalable systems with",
      "hero.subtitle.enterprise": "enterprise-ready architecture",
      "hero.subtitle.and": "and",
      "hero.subtitle.sre": "Site Reliability Engineering mindset",
      "hero.skills":
        "Specialist in Java/Spring Boot & PHP/Laravel • Clean Architecture • TDD/BDD • Observability",
      "hero.scroll": "SCROLL TO EXPLORE",
      "hero.viewCode": "View Code on GitHub",
      "architecture.title": "Clean Architecture",
      "architecture.subtitle":
        "Rigorous separation of responsibilities ensuring testability, maintainability and scalability",
      "architecture.why.title": "Why Use Cases Instead of Giant Services?",
      "architecture.why.description":
        "Choosing Use Cases over monolithic Services is not just a matter of organization, but a strategic architectural decision that directly impacts system maintainability and scalability.",
      "architecture.java.title": "Java 21 & Virtual Threads",
      "architecture.java.subtitle": "Next-generation performance",
      "architecture.java.description":
        "The project uses Java 21 with Virtual Threads, the most revolutionary feature of modern Java. Virtual Threads enable massive I/O scalability without the overhead of traditional threads, supporting millions of concurrent requests with minimal resources.",
      "architecture.why.single": "Single Responsibility",
      "architecture.why.single.desc":
        "Each Use Case has a clear and well-defined responsibility, facilitating isolated unit tests and future maintenance.",
      "architecture.why.testability": "Testability",
      "architecture.why.testability.desc":
        "With isolated Use Cases, we achieve 100% coverage in domain and application layers, something impossible with giant Services.",
      "architecture.why.evolution": "Independent Evolution",
      "architecture.why.evolution.desc":
        "Changes in one business rule don't affect others, allowing continuous evolution without coupling.",
      "architecture.why.documentation": "Living Documentation",
      "architecture.why.documentation.desc":
        "Code becomes self-documented: each Use Case represents a specific system functionality.",
      "architecture.why.viewCode": "View implementation on GitHub",
      "architecture.java.throughput": "10x Throughput",
      "architecture.java.throughput.desc":
        "Virtual Threads eliminate context switching overhead, allowing many more simultaneous requests.",
      "architecture.java.costs": "Cost Reduction",
      "architecture.java.costs.desc":
        "Fewer resources needed = lower infrastructure costs, especially in cloud environments.",
      "architecture.java.simple": "Simple Code",
      "architecture.java.simple.desc":
        "Same synchronous code, asynchronous performance. No need to switch to reactive programming.",
      "architecture.principle.inversion": "Dependency Inversion",
      "architecture.principle.inversion.desc":
        "External layers depend on abstractions defined in internal layers",
      "architecture.principle.testability": "Testability",
      "architecture.principle.testability.desc":
        "100% coverage in domain and application through isolated unit tests",
      "architecture.principle.scalability": "Scalability",
      "architecture.principle.scalability.desc":
        "Architecture prepared for horizontal and vertical growth",
      "metrics.title": "Observability & Quality",
      "metrics.subtitle":
        "Real-time metrics following the RED method (Rate, Errors, Duration) and guaranteed test coverage",
      "metrics.coverage.label": "Test Coverage",
      "metrics.coverage.desc": "Domain + Application",
      "metrics.latency.label": "P95 Latency",
      "metrics.latency.desc": "95th Percentile",
      "metrics.error.label": "Error Rate",
      "metrics.error.desc": "5xx Errors",
      "metrics.rps.label": "Average RPS",
      "metrics.rps.desc": "Requests per second",
      "metrics.rps.tooltip":
        "Metrics obtained via load testing with k6 simulating peak traffic",
      "metrics.live": "LIVE",
      "metrics.target": "Target",
      "metrics.domain": "Domain",
      "metrics.application": "Application",
      "metrics.infrastructure": "Infrastructure",
      "metrics.coverage": "Coverage",
      "experience.title": "Featured Projects",
      "experience.subtitle":
        "Enterprise-ready systems developed with Clean Architecture and focus on quality",
      "experience.challenge": "The Challenge",
      "experience.solution": "The Solution",
      "experience.impact": "Impact Achieved:",
      "experience.techStack": "Tech Stack",
      "experience.viewCode": "View Code",
      "experience.international.badge": "International Freelance Project",
      "experience.international.us": "US-based company",
      "experience.international.paid": "Paid international freelance",
      "experience.international.communication":
        "Direct client communication (EN)",
      "experience.international.delivery": "Remote delivery",
      "experience.international.autonomy": "Full autonomy",
      "experience.international.timezone": "Time zone management",
      "experience.production": "IN PRODUCTION",
      "experience.tecos.name": "TecOS",
      "experience.tecos.subtitle": "Service Order Manager",
      "experience.tecos.description":
        "Enterprise-ready system with robust architecture",
      "experience.tecos.challenge":
        "Migration from a Laravel MVP to a robust Spring Boot architecture capable of supporting high load and ensuring horizontal scalability. The system needed to maintain availability during the transition and ensure zero downtime.",
      "experience.tecos.solution":
        "Implementation of Clean Architecture with rigorous layer separation, isolation of business rules in Use Cases and dependency inversion. Developed with Java 17+ and Maven 3.6+ for dependency management. Containerization with Docker and Docker Compose to facilitate deployment and development environment. Each layer tested in isolation ensuring maintainability and continuous evolution.",
      "experience.tecos.feature1.title": "Architectural Migration",
      "experience.tecos.feature1.desc":
        "Transition from Laravel MVP to robust Spring Boot architecture with Clean Architecture",
      "experience.tecos.feature2.title": "Guaranteed Tests",
      "experience.tecos.feature2.desc":
        "100% coverage in Domain and Application through TDD/BDD with JUnit 5 and Mockito",
      "experience.tecos.feature3.title": "Observability",
      "experience.tecos.feature3.desc":
        "Custom Grafana dashboard monitoring RED metrics and business metrics",
      "experience.atl.name": "ATL All Seasons HVAC",
      "experience.atl.subtitle": "Service Order Manager",
      "experience.atl.description":
        "Management system for air conditioning maintenance",
      "experience.atl.challenge":
        "Development of a complete service order management system for an HVAC (Heating, Ventilation, and Air Conditioning) maintenance company in the United States. The system needed to manage customers, technicians, scheduling, service history and financial reports.",
      "experience.atl.solution":
        "Centralized field operations, eliminating manual controls and enabling integrated online billing. System developed with Laravel backend and Angular frontend, ensuring clear separation of responsibilities and scalability. Implementation of HVAC-specific features such as equipment history, intelligent technician scheduling and complete Stripe integration for payment processing. Responsive and intuitive interface for field use by technicians.",
      "experience.atl.impact1": "Reduced rework through data centralization",
      "experience.atl.impact2":
        "Complete payment automation with Stripe integration",
      "experience.atl.impact3":
        "Operational improvement with elimination of manual controls",
      "experience.atl.impact4":
        "Integrated online billing eliminating offline processes",
      "experience.atl.feature1.title": "API Architecture",
      "experience.atl.feature1.desc":
        "Versioned REST API with JWT authentication, role-based access control and PCI-compliant payment security",
      "experience.atl.feature2.title": "End-to-End Autonomy",
      "experience.atl.feature2.desc":
        "I worked end-to-end: requirements gathering, stack decisions, architecture, implementation, production delivery and post-go-live maintenance",
      "experience.atl.feature3.title": "Stripe Integration",
      "experience.atl.feature3.desc":
        "Secure and complete payment processing integrated with Stripe for online transactions, eliminating manual billing processes",
      "experience.quality.title": "Guaranteed Quality",
      "experience.quality.domain": "100% coverage in Domain",
      "experience.quality.application": "100% coverage in Application",
      "experience.quality.methodology": "TDD/BDD as methodology",
      "experience.quality.jacoco": "Jacoco for coverage analysis",
      "experience.observability.title": "Active Observability",
      "experience.observability.grafana": "Custom dashboard in Grafana",
      "experience.observability.red": "RED Metrics (Rate, Errors, Duration)",
      "experience.observability.latency": "P95/P99 Latency monitored",
      "experience.observability.business": "Real-time business metrics",
      "recommendations.title": "Recommendations",
      "recommendations.subtitle":
        "Testimonials from professionals who worked and collaborated with me",
      "recommendations.viewAll": "View all recommendations on LinkedIn",
      "recommendations.paulo.name": "Paulo André Freddi da Silva",
      "recommendations.paulo.position": "Designer",
      "recommendations.paulo.text":
        "I have closely followed Lucas's evolution since the beginning of his programming journey and can affirm that he combines responsibility, critical thinking and consistent technical growth. He stands out for his ability to transform complex problems into efficient solutions, in addition to being collaborative, ethical and reliable in a team.",
      "recommendations.joao.name": "João Victor Fernandes Skrzypczak",
      "recommendations.joao.position": "Full Stack Developer",
      "recommendations.joao.text":
        "I worked with Lucas during our internship at Geminis Soluções and always saw him act with proactivity, technical competence and focus on results. His ability to solve problems and collaborate with the team made a real difference in the projects we worked on together.",
      "recommendations.celso.name": "Celso Junior",
      "recommendations.celso.position": "Full Stack Developer",
      "recommendations.celso.company": "VM Agro",
      "recommendations.celso.text":
        "Even though we haven't worked directly together, I followed Lucas's performance as a standout student at ETEC and received excellent recommendations about his attitude and dedication. He is a committed professional, with strong expertise in Angular and Laravel, and evident discipline in continuous learning.",
      "recommendations.abner.name": "Abner Davi Lima e Silva",
      "recommendations.abner.position": "Full Stack Developer",
      "recommendations.abner.company": "Next_Code",
      "recommendations.abner.text":
        "Lucas has always demonstrated deep interest in the area, combined with constant dedication to study and practical application of knowledge. He stood out as a student for his technical maturity and willingness to help colleagues, dedicating real time to share knowledge whenever necessary.",
      "contact.title": "Let's Talk",
      "contact.subtitle":
        "Interested in working together? Get in touch through the form or social networks",
      "contact.form.title": "Send a Message",
      "contact.form.name": "NAME",
      "contact.form.email": "EMAIL",
      "contact.form.message": "MESSAGE",
      "contact.form.send": "Send Message",
      "contact.form.sent": "Sent!",
      "contact.form.messagePlaceholder": "Your message...",
      "contact.whatsapp.message": "Hello! My name is",
      "contact.info.title": "Contact Information",
      "contact.availability.title": "Availability",
      "contact.availability.text":
        "Open to Mid/Senior opportunities in software development, with focus on architecture and quality.",
      "contact.availability.status": "AVAILABLE FOR PROJECTS",
      "footer.copyright": "© 2024 Lucas Baggio. All rights reserved.",
      "footer.built": "BUILT WITH NEXT.JS & TAILWIND CSS",
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
