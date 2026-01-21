# Portfólio - Lucas Baggio

Portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS, demonstrando expertise em arquitetura de software, engenharia de sistemas escaláveis e práticas de desenvolvimento enterprise-ready.

## Stack Tecnológico

- **Next.js 14** - Framework React com App Router e Server Components
- **TypeScript** - Tipagem estática para maior segurança e manutenibilidade
- **Tailwind CSS** - Estilização utilitária com design system customizado
- **Framer Motion** - Animações e transições performáticas
- **Recharts** - Visualizações de dados e métricas em tempo real

## Arquitetura e Decisões Técnicas

### Design System
- Sistema de cores customizado inspirado em dashboards de monitoramento (Grafana/Datadog)
- Tipografia: Inter (sans-serif) e Roboto Mono (monospace)
- Dark mode nativo com suporte completo
- Componentes reutilizáveis com padrões consistentes

### Performance
- Otimização de imagens e assets via Next.js
- Code splitting automático
- Lazy loading de componentes pesados
- Animações otimizadas com Framer Motion

### Acessibilidade
- Navegação por teclado
- Contraste adequado (WCAG AA)
- Estrutura semântica HTML5
- Labels descritivos em formulários

## Estrutura do Projeto

```
portfolio/
├── app/
│   ├── layout.tsx      # Layout principal com configuração de fontes
│   ├── page.tsx        # Página inicial com composição de componentes
│   └── globals.css     # Estilos globais e utilitários CSS
├── components/
│   ├── Navigation.tsx  # Navegação fixa com scroll suave
│   ├── Hero.tsx        # Seção hero com apresentação profissional
│   ├── Architecture.tsx # Demonstração de Clean Architecture
│   ├── Metrics.tsx     # Visualização de métricas estilo Grafana
│   ├── Experience.tsx  # Projetos e experiência profissional
│   └── Contact.tsx      # Formulário de contato integrado com WhatsApp
└── public/             # Assets estáticos
```

## Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000)

### Build de Produção
```bash
npm run build
npm start
```

### Análise de Código
```bash
npm run lint
```

## Destaques Técnicos

### Clean Architecture
Demonstração visual de arquitetura em camadas com separação de responsabilidades, dependency inversion e isolamento de regras de negócio.

### Observabilidade
Visualização de métricas em tempo real seguindo o método RED (Rate, Errors, Duration), simulando dashboards profissionais de monitoramento.

### Responsividade
Design totalmente responsivo com breakpoints otimizados para mobile, tablet e desktop, garantindo experiência consistente em todos os dispositivos.

### Integração com WhatsApp
Formulário de contato integrado com WhatsApp Business API, permitindo comunicação direta via mensagens formatadas.

## Personalização

### Informações Pessoais
Edite os componentes em `components/` para atualizar:
- Dados pessoais e profissionais
- Links de redes sociais
- Projetos e experiências
- Informações de contato

### Design System
Ajuste as cores e estilos em:
- `tailwind.config.ts` - Configuração do Tailwind
- `app/globals.css` - Variáveis CSS e utilitários customizados

### Conteúdo
Modifique textos e dados diretamente nos componentes TypeScript para fácil manutenção.

## Deploy

### Vercel (Recomendado)
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod
```

### Build Estático
Para gerar arquivos estáticos, adicione `output: 'export'` em `next.config.js` e execute:
```bash
npm run build
```
Os arquivos estarão na pasta `out/`.

## Licença

Este projeto é de uso pessoal e profissional.

## Contato

- Email: lucas.baggio.silva@gmail.com
- GitHub: [github.com/lucas-baggio](https://github.com/lucas-baggio)
- LinkedIn: [linkedin.com/in/lucasbaggios](https://www.linkedin.com/in/lucasbaggios)
