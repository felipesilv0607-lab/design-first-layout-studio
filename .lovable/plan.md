# Identidade própria do portfólio: análise e proposta

## 1. Análise: onde o Lovable aparece hoje

**O que os visitantes veem (será trocado):**

| Item | Situação atual |
|---|---|
| Ícone da aba (favicon) | Ícone padrão do Lovable |
| Título da página | "Felipe Luz Cunha — Desenvolvedor Full Stack" |
| Imagem ao compartilhar o link | Não existe. A hospedagem usa um print automático da página |
| README do GitHub | Texto padrão do Lovable ("This project was built with Lovable…"), com uma frase solta de um pedido antigo |
| Nome do projeto | "Design First Layout Studio", que também aparece no endereço `design-first-layout-studio.lovable.app` |

**Partes técnicas que ficam (invisíveis ao visitante e necessárias):**
- **Ferramenta de build do site.** Removê-la quebra a publicação.
- **Conexão com a IA do assistente**, incluindo o endereço do serviço e a chave. Sem ela, o assistente para de responder.
- **Módulo de relatório de erros do editor.** Só funciona dentro do editor e não aparece para recrutadores.
- **Pasta `.lovable/` e o bloco de regras gerenciado no `AGENTS.md`.** O editor usa esses arquivos para manter o projeto sincronizado.
- **Comentários técnicos em arquivos de configuração.** Não aparecem no site.

**Selo "Edit with Lovable":** no plano gratuito ele continua aparecendo. Não vou escondê-lo nem contorná-lo.

**Ponto de atenção sobre a hospedagem:** o assistente de perguntas precisa de um servidor. Por isso, ele funciona na hospedagem do Lovable, mas não funcionaria no GitHub Pages, que só serve arquivos estáticos. A proposta mantém a hospedagem do Lovable.

## 2. Alterações propostas

**Favicon "FL."**
- Monograma "FL" na tipografia do site, em off-white sobre grafite, com o ponto em laranja queimado. É a mesma marca já usada no assistente.
- Versão vetorial nítida e versão para tela inicial do celular. O ícone padrão do Lovable é apagado.

**Título e metadados**
- Título: **Felipe Luz | Desenvolvedor Full Stack**.
- Descrição (~155 caracteres): "Portfólio de Felipe Luz Cunha, desenvolvedor Full Stack em Teresina (PI). Projetos com React, TypeScript, Node.js e PostgreSQL. Disponível para estágio."
- Metadados de compartilhamento:
  - nome do site "Felipe Luz";
  - idioma pt-BR;
  - endereço oficial da página.
- Dados estruturados para buscadores (perfil de pessoa), apenas com fatos já publicados no site:
  - nome e cargo;
  - Teresina (PI);
  - Uninassau;
  - links do GitHub e do LinkedIn.
- Arquivo de instalação no celular (nome "Felipe Luz" e cores do site), mapa do site para buscadores e cor da barra do navegador.

**Imagem de compartilhamento (1200×630)**
- Será composta com as fontes e cores reais do site. Não será gerada por IA, então o nome não sai com letras erradas.
- Conteúdo:
  - "Felipe Luz Cunha." em destaque;
  - "Desenvolvedor Full Stack · Teresina, PI";
  - a linha `~/felipe-luz $ stack` com as tecnologias principais;
  - o marcador "Disponível para estágio".
- Vale para WhatsApp, LinkedIn e X. Só aparece depois da próxima publicação.

**README do GitHub, em português**
- Apresentação curta e link do site.
- Tabela dos três projetos com demonstração e código.
- Tecnologias usadas no portfólio e funcionamento do assistente de perguntas.
- Como rodar localmente e onde editar o conteúdo (um único arquivo).
- Estrutura de pastas.
- Sem menção ao Lovable e sem licença inventada. Se quiser uma licença, você escolhe.

**Identidade consistente**
- Mesma marca "FL." no cabeçalho, no favicon, no assistente e na imagem de compartilhamento.
- Páginas de erro e "página não encontrada" no visual do site, com textos em português (hoje usam o estilo genérico).
- Nenhuma mudança em projetos, links, textos profissionais, seções, assistente ou arquitetura.

## 3. Decisões para você

1. **Nome do projeto:** posso renomear para "Felipe Luz — Portfólio". Isso não muda o endereço sozinho. Antes de mexer, verifico se é possível trocar o endereço publicado (por exemplo, `felipeluz.lovable.app`).
2. **Endereço oficial nos metadados:** uso o endereço publicado atual, ou o novo, se você trocar.
3. **Licença no README:** sem licença (padrão) ou MIT.

## Detalhes técnicos

- `public/favicon.svg` e `public/apple-touch-icon.png`; remover `public/favicon.ico`; atualizar os links em `__root.tsx`.
- `__root.tsx`: valores padrão do site (`og:site_name`, `theme-color`, manifest) e erros e 404 com tokens do design.
- `index.tsx`: título, descrição, `og:*`, `twitter:*`, canonical, `og:image` absoluto e JSON-LD `Person` gerado a partir de `src/content/portfolio.ts`.
- `public/og-image.jpg`: renderizado em 1200×630 a partir de HTML com as fontes do site, depois otimizado.
- `public/site.webmanifest`, `src/routes/sitemap[.]xml.ts` e `robots.txt` apontando para o sitemap.
- Teste: o título é exatamente "Felipe Luz | Desenvolvedor Full Stack" e o JSON-LD usa só os links verificados.
