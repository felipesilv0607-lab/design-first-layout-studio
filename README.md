# Felipe Luz Cunha — Portfólio

> Portfólio profissional de Felipe Luz Cunha — Desenvolvedor Full Stack.

![Felipe Luz Cunha — Desenvolvedor Full Stack](public/og-image.jpg)

## Apresentação do projeto

Este repositório contém o código-fonte do meu portfólio pessoal. O site reúne quem sou, os projetos que desenvolvi, as tecnologias com que trabalho e as formas de contato, com foco em oportunidades de estágio em desenvolvimento.

O portfólio é uma página única com cinco seções:

1. **Início**: nome, área de atuação e disponibilidade.
2. **Sobre mim**: apresentação, formação, atuação, localização e interesses.
3. **Projetos**: os três projetos em destaque, com capturas reais das demonstrações publicadas.
4. **Tecnologias**: ferramentas agrupadas por área, sem níveis de proficiência.
5. **Contato**: e-mail, LinkedIn, GitHub e WhatsApp.

O site também tem um **assistente de perguntas** para recrutadores, aberto por um botão fixo no canto da tela. Ele responde com base apenas nas informações publicadas no portfólio e avisa quando algo não está no site. As conversas ficam somente na aba aberta e não são armazenadas.

## Demonstração online

**https://design-first-layout-studio.lovable.app**

## Tecnologias utilizadas

| Área | Tecnologias |
|---|---|
| Interface | React 19, TypeScript, Tailwind CSS v4, Radix UI |
| Framework e build | TanStack Start (rotas, renderização no servidor e rotas de API), TanStack Router, Vite |
| Assistente de perguntas | Vercel AI SDK (`ai`, `@ai-sdk/openai`, `@ai-sdk/react`), com respostas transmitidas em tempo real |
| Testes | Vitest |
| Qualidade de código | ESLint, Prettier |

## Estrutura do projeto

```
public/                        ícones, imagem de compartilhamento, manifest e robots.txt
src/
  content/portfolio.ts         conteúdo do site: perfil, projetos, tecnologias, contatos e metadados
  components/portfolio/        seções da página (Hero, About, Projects, Technologies, Contact)
  components/portfolio/assistant/   assistente de perguntas para recrutadores
  components/ui/               componentes de interface reutilizáveis
  hooks/                       animações de entrada e destaque da seção ativa no menu
  lib/portfolio-knowledge.ts   base de conhecimento do assistente, gerada a partir do conteúdo do site
  lib/portfolio-chat.server.ts lógica do assistente executada no servidor
  routes/index.tsx             página inicial
  routes/api/chat.ts           rota de API do assistente
  routes/sitemap[.]xml.ts      mapa do site para buscadores
  styles.css                   cores, fontes e escalas tipográficas
  test/                        testes de conteúdo, assistente, identidade e rotas
```

Todo o conteúdo fica em `src/content/portfolio.ts`. Os componentes apenas exibem esses dados. Por isso, atualizar textos, projetos ou contatos não exige mexer no layout. O assistente usa o mesmo arquivo como fonte de informação.

## Como executar localmente

Pré-requisitos: Node.js 20.19+ ou 22.12+, com npm, ou Bun.

```sh
git clone <url-deste-repositorio>
cd <pasta-do-repositorio>
npm install
npm run dev
```

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Executa o build de produção localmente |
| `npm test` | Executa os testes |
| `npm run lint` | Verifica o código com ESLint |

O assistente de perguntas exige a variável de ambiente `LOVABLE_API_KEY` no servidor. Sem ela, o restante do site funciona normalmente e o assistente exibe uma mensagem de indisponibilidade.

## Projetos apresentados

| Projeto | Descrição | Tecnologias | Links |
|---|---|---|---|
| **Agentes** (projeto principal) | Central de operações com escritório virtual 3D para visualizar a equipe de agentes, acompanhar tarefas e consultar a atividade do agente selecionado. | React, TypeScript, Vite, Three.js | [Demonstração](https://felipesilv0607-lab.github.io/agentes/) · [Código](https://github.com/felipesilv0607-lab/agentes) |
| **Finance System** | Aplicação de gestão financeira com interface React, API em Node.js/Express e persistência de dados com PostgreSQL e Prisma. | React, Vite, Express, PostgreSQL, Prisma | [Demonstração](https://felipesilv0607-lab.github.io/finance-system/) · [Código](https://github.com/felipesilv0607-lab/finance-system) |
| **Weather App** | Aplicação de clima com front-end web e backend Node.js/Express atuando como proxy para a API OpenWeather. | JavaScript, Node.js, Express, REST API | [Demonstração](https://felipesilv0607-lab.github.io/weather-app/) · [Código](https://github.com/felipesilv0607-lab/weather-app) |

## Informações de contato

**Felipe Luz Cunha**, desenvolvedor Full Stack em Teresina (PI).

- Site: https://design-first-layout-studio.lovable.app
- GitHub: https://github.com/felipesilv0607-lab
- LinkedIn: https://www.linkedin.com/in/felipeluz-dev
- E-mail: felipesilv0607@gmail.com
