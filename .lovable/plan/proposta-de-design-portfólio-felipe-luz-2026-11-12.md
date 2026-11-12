# Proposta de design — Portfólio Felipe Luz

## 1. Análise do estado atual

Revisei o documento, a versão publicada (desktop e celular) e os links:

- Os links do GitHub, do portfólio, do Agentes, do Finance System e do Weather App respondem normalmente. O LinkedIn bloqueia verificação automática, então precisa ser conferido manualmente.
- **Pontos fortes do site atual:** fundo escuro, textos dos projetos bem escritos e honestos, tipografia legível.
- **O que impede um resultado profissional:**
  - Os três projetos aparecem em cartões iguais, sem a hierarquia pedida (Agentes deveria ter mais destaque).
  - As imagens parecem fotos da tela tiradas com celular (perspectiva, reflexo, cortes). Em vez de "reais", passam aspecto amador.
  - A janela de código com três bolinhas coloridas é um recurso comum em templates.
  - O laranja está mais para pêssego do que para laranja queimado.
  - A numeração começa em "Sobre" e não existe a seção "01 — Início".
- **Divergências em relação ao documento** (preciso que você confirme):
  - O site atual cita "projetos freelance" e "VS Code"; o documento não menciona nenhum dos dois.
  - "Fundamentos de Cloud" está no documento, mas não aparece no site atual.

## 2. Direção visual

Editorial tecnológico + minimalista premium. Aparência de revista técnica: tipografia grande, grade assimétrica, linhas finas e um único destaque em laranja.

**Cores**

| Papel | Cor |
|---|---|
| Fundo grafite | #121110 |
| Superfície (molduras de imagem) | #1A1917 |
| Linhas / divisões | #2B2926 |
| Texto principal off-white | #EEEBE5 |
| Texto secundário cinza | #8E8A83 |
| Laranja queimado (botões, marcadores) | #C4561F |
| Laranja para texto pequeno (contraste AA) | #DB6A2E |

O laranja aparece apenas em: botão principal, numeração das seções, link ativo e um detalhe do nome. Sem gradientes, brilhos ou vidro.

**Tipografia**
- Títulos: Archivo em versão expandida e peso 800, com bastante presença editorial.
- Texto: IBM Plex Sans, que é neutro e muito legível.
- Rótulos e detalhes técnicos: IBM Plex Mono, usado com moderação (numeração, tecnologias, metadados).

**Elemento de programação (único e com função):** no Início, uma linha discreta em fonte mono no estilo `~/felipe-luz — full-stack · teresina, pi · disponível para estágio`. Ela substitui a janela de código decorativa.

**Movimento:** textos aparecem com um leve deslocamento ao entrar na tela, as linhas finas se desenham e os links ganham sublinhado ao passar o mouse. Não há efeitos seguindo o cursor, e tudo é desativado quando o sistema pede movimento reduzido.

## 3. Layout desktop (grade de 12 colunas, largura máxima de 1320px)

```text
┌────────────────────────────────────────────────────────────────┐
│ Felipe Luz ●                01 Início 02 Sobre 03 Projetos     │
│                             04 Tecnologias 05 Contato          │
├────────────────────────────────────────────────────────────────┤
│ 01 — INÍCIO                                                    │
│                                                                │
│ FELIPE                                                         │
│ LUZ CUNHA.                         Desenvolvedor Full Stack.   │
│ (nome gigante, ~8 colunas)         Texto curto de foco (2-3    │
│                                    linhas).                    │
│                                    [Explorar projetos]  GitHub↗│
│ ────────────────────────────────────────────────────────────── │
│ ~/felipe-luz — full-stack · teresina, pi · disponível p/ estágio│
├────────────────────────────────────────────────────────────────┤
│ 02 — SOBRE   │  Frase de abertura grande (estilo editorial),   │
│ (rótulo fixo │  seguida de 2 parágrafos.                       │
│  à esquerda) │  ──────────┬──────────┬──────────┬────────────  │
│              │  Formação  │ Atuação  │ Local    │ Interesses   │
│              │  ADS·Unin. │ Full St. │ Teresina │ Web, APIs,   │
│              │  EAD·2028  │          │ e região │ BD, automação│
├────────────────────────────────────────────────────────────────┤
│ 03 — PROJETOS                                         (03)     │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │      IMAGEM AGENTES — largura total, sem cortar a          │ │
│ │      interface (moldura grafite)                           │ │
│ └────────────────────────────────────────────────────────────┘ │
│ P/01  AGENTES        Descrição objetiva   │ Tecnologias │ Demo↗│
│                      (2-3 linhas)         │ (mono)      │ Code↗│
│ ────────────────────────────────────────────────────────────── │
│ ┌───────────────────────────────┐   ┌──────────────────────┐   │
│ │ IMAGEM FINANCE (7 colunas)    │   │ IMAGEM WEATHER       │   │
│ └───────────────────────────────┘   │ (5 colunas, mais     │   │
│ P/02 Finance System                 │  abaixo — assimétrico)│  │
│ descrição · tecnologias · links     └──────────────────────┘   │
│                                     P/03 Weather App ...       │
├────────────────────────────────────────────────────────────────┤
│ 04 — TECNOLOGIAS                                               │
│ 04.1 Front-end       HTML5 / CSS3 / JavaScript / TypeScript /  │
│                      React / Vite                              │
│ ────────────────────────────────────────────────────────────── │
│ 04.2 Back-end        Node.js / Express / APIs REST             │
│ 04.3 Banco de dados  PostgreSQL / Prisma ORM                   │
│ 04.4 Ferramentas     Git / GitHub / Linux                      │
│ 04.5 Outros          Fundamentos de Cloud                      │
│ (lista editorial, sem barras ou níveis)                        │
├────────────────────────────────────────────────────────────────┤
│ 05 — CONTATO                                                   │
│ Vamos conversar sobre                                          │
│ uma oportunidade de estágio?      ● Disponível para estágio    │
│ ────────────────────────────────────────────────────────────── │
│ E-mail      felipesilv0607@gmail.com              [copiar]  ↗  │
│ LinkedIn    /in/felipeluz-dev                               ↗  │
│ GitHub      /felipesilv0607-lab                             ↗  │
│ WhatsApp    (86) 99511-7228                                 ↗  │
├────────────────────────────────────────────────────────────────┤
│ © 2026 Felipe Luz Cunha                       Voltar ao topo ↑ │
└────────────────────────────────────────────────────────────────┘
```

## 4. Layout mobile (390px)

```text
┌──────────────────────────┐   Menu aberto (tela cheia)
│ Felipe Luz ●       Menu  │   ┌──────────────────────────┐
├──────────────────────────┤   │ Felipe Luz ●     Fechar  │
│ 01 — INÍCIO              │   │ 01 Início                │
│ FELIPE                   │   │ 02 Sobre                 │
│ LUZ                      │   │ 03 Projetos              │
│ CUNHA.                   │   │ 04 Tecnologias           │
│ Desenvolvedor Full Stack │   │ 05 Contato               │
│ Texto curto              │   │ ──────────────────────── │
│ [ Explorar projetos   ]  │   │ E-mail · LinkedIn ·      │
│ [ GitHub ↗            ]  │   │ GitHub · WhatsApp        │
│ ~/felipe-luz · estágio   │   └──────────────────────────┘
├──────────────────────────┤
│ 02 — SOBRE               │
│ Frase de abertura        │
│ Parágrafos               │
│ Formação ─────────────── │
│ Atuação ──────────────── │
│ Local ────────────────── │
│ Interesses ───────────── │
├──────────────────────────┤
│ 03 — PROJETOS            │
│ ┌──────────────────────┐ │
│ │ IMAGEM AGENTES        │ │
│ │ (inteira, sem corte)  │ │
│ └──────────────────────┘ │
│ P/01 AGENTES             │
│ descrição · tecnologias  │
│ [Demo ↗] [Código ↗]      │
│ ┌──────────────────────┐ │
│ │ IMAGEM FINANCE        │ │
│ └──────────────────────┘ │
│ P/02 ...                 │
│ ┌──────────────────────┐ │
│ │ IMAGEM WEATHER        │ │
│ └──────────────────────┘ │
├──────────────────────────┤
│ 04 — TECNOLOGIAS         │
│ Front-end                │
│ HTML5 / CSS3 / JS ...    │
│ ──────────────────────── │
├──────────────────────────┤
│ 05 — CONTATO             │
│ Linhas de toque grandes  │
│ (mínimo de 48px)         │
└──────────────────────────┘
```

O tablet usa a grade de 8 colunas: o Agentes continua em largura total e os outros dois projetos ficam lado a lado em tamanhos iguais.

## 5. Decisões necessárias antes de começar

1. **Tecnologia (decisão principal):** o documento pede para manter HTML/CSS/JS e não migrar para React sem autorização. Este ambiente só constrói sites em React. Você tem duas opções:
   - (a) autorizar a construção aqui em React, com o mesmo design e conteúdo e publicação pelo Lovable; ou
   - (b) usar esta proposta só como referência visual e aplicá-la no seu projeto HTML/CSS/JS fora daqui.
2. **Arquivos:** o pacote de reformulação (`index.html`, `styles.css`, `script.js`) e as três imagens não foram enviados. Este projeto está vazio. Envie-os, ou autorize que eu capture screenshots reais e nítidos das três demos publicadas, o que resolve o problema das fotos de tela.
3. **Textos:** sugiro reaproveitar os textos atuais do site, que são honestos e bem escritos. Confirme se "projetos freelance" e "VS Code" ficam ou saem.
4. **Código-fonte:** informe os links dos repositórios de cada projeto. Sem eles, mostro apenas "Ver demonstração".
5. **Disponibilidade:** confirme a modalidade (remoto, híbrido ou presencial). Sem essa informação, uso apenas "Disponível para oportunidades de estágio".

## Detalhes técnicos (para quando aprovado)

- Página única com âncoras, menu fixo com indicação da seção ativa e menu mobile acessível (fecha com Esc, foco preso dentro do menu, aria-expanded).
- Imagens com `object-fit: contain` no Agentes, formatos modernos, carregamento sob demanda fora da primeira tela e dimensões fixas para evitar saltos.
- Animações feitas com recursos nativos do navegador, sem GSAP, para evitar dependência desnecessária. Esses efeitos só funcionam quando não há pedido de movimento reduzido.
- SEO: título, descrição, Open Graph, idioma pt-BR e HTML semântico com um único h1.
- Verificações após implementar: capturas em 1440, 1024, 768 e 390px, todos os links testados, console sem erros e relatório separando o que foi testado do que ficou pendente.
