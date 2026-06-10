# Relatório de Auditoria WCAG 2.2 AA — Portfolio Jennifer Sousa

**Data:** 09/06/2026  
**Escopo:** Todas as 5 páginas HTML + CSS + JavaScript do portfolio  
**Objetivo:** Conformidade WCAG 2.2 nível AA sem alterar layout visual ou conteúdo

---

## Arquivos alterados

| Arquivo | Tipo de alteração |
|---------|-------------------|
| `styles.css` | Contraste, skip link, focus-visible, scroll-padding, reduced-motion |
| `case.css` | Focus-visible para lightbox e botões de imagem |
| `app.js` | Focus trap no lightbox, reduced-motion no parallax, foco no dialog |
| `i18n.js` | Suporte a tradução de aria-label, atualização automática de aria-labels do lightbox |
| `index.html` | Skip link, `<main>`, aria-labelledby, aria-hidden em SVGs, rel noopener noreferrer |
| `Case DesignOps.html` | Skip link, `<main>`, aria-hidden, lightbox i18n, rel noopener noreferrer |
| `Case Smart Checkout.html` | Skip link, `<main>`, aria-hidden, lightbox i18n, rel noopener noreferrer |
| `Case Loop.html` | Skip link, `<main>`, aria-hidden, lightbox i18n, rel noopener noreferrer |
| `Sobre mim.html` | Skip link, `<main>`, aria-hidden, rel, correção do id="top" |

---

## Problemas encontrados e correções aplicadas

### 1. Estrutura semântica

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| Ausência de `<main>` em todas as páginas | 1.3.1, 2.4.1 | Adicionado `<main id="main-content">` envolvendo conteúdo principal em todas as 5 páginas |
| Seções sem aria-labelledby na home | 1.3.1 | Adicionado `aria-labelledby` nas 4 seções principais (highlights, numeros, cases, contato) com ids nos headings |
| `<div class="progress">` sem semântica | 4.1.2 | Adicionado `role="presentation" aria-hidden="true"` (barra decorativa) |
| `<body id="top">` em Sobre mim.html (id semântico incorreto) | — | Movido `id="top"` para o `<header>` interno |

### 2. Idioma

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| `aria-label` de elementos não era traduzido no modo EN | 3.1.2 | Criado suporte `data-i18n-label` no i18n.js para traduzir aria-label |
| Lightbox: aria-labels dos botões (Fechar, Anterior, Próxima) não traduziam | 3.1.2 | Adicionado `data-i18n-label` nos 4 elementos do lightbox + chaves EN no i18n.js |
| Aria-labels dos triggers de lightbox ("Ampliar: ...") não traduziam | 3.1.2 | Lógica automática no i18n.js: atualiza aria-label com prefixo "Enlarge:" baseado no data-cap traduzido |
| Nav sem nome acessível traduzível | 3.1.2 | Adicionado `aria-label="Navegação principal"` + `data-i18n-label="s.nav.aria"` |

### 3. Navegação por teclado

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| Ausência de skip link | 2.4.1 | Adicionado `<a class="skip-link" href="#main-content">` em todas as 5 páginas com estilo visível no foco |
| Sem `:focus-visible` definido | 2.4.7, 2.4.11 | Adicionado outline com `var(--accent)` e `outline-offset: 3px` para todos elementos; estilos específicos para pills/botões |
| Header fixo poderia esconder foco ao navegar | 2.4.11 | Adicionado `scroll-padding-top: 90px` no `html` |

### 4. Lightbox / Modal

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| Modal não prendia foco (focus trap) | 2.4.3 | Adicionado trap de foco via Tab/Shift+Tab ciclando entre os 3 botões do lightbox |
| Modal não recebia foco ao abrir | 2.4.3 | Foco automático no botão "Fechar" ao abrir o lightbox |
| Modal já devolvia foco ao fechar | ✅ | Já implementado (`lastFocused.focus()`) — mantido |
| Modal já fecha com Esc | ✅ | Já implementado — mantido |
| `role="dialog"` e `aria-modal="true"` | ✅ | Já implementado — mantido |

### 5. Imagens e assets

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| SVGs decorativos sem aria-hidden | 1.1.1 | Adicionado `aria-hidden="true" focusable="false"` em todos os SVGs inline decorativos (icons em links, botões, nav) |
| Imagens informativas | ✅ | Já possuíam `alt` descritivo — mantido |
| `figcaption` presente nas imagens dos cases | ✅ | Já implementado — mantido |

### 6. Links e botões

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| Links externos sem `rel="noreferrer"` | Segurança / 4.1.2 | Atualizado `rel="noopener"` → `rel="noopener noreferrer"` em todos os links `target="_blank"` |
| Botões de navegação entre cases | ✅ | Já incluem nome do case (ex: "Próximo case: Smart Checkout") — mantido |
| Triggers de lightbox são `<button>` | ✅ | Já implementado com `type="button"` — mantido |

### 7. Contraste e estados visuais

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| `--muted-2: #6B6B74` com contraste 4.01:1 no preto (falha AA para texto normal) | 1.4.3 | Atualizado para `#7B7B85` (≈5:1 no preto) |
| Falta de estados `:focus-visible` | 2.4.7 | Adicionado outline `var(--accent)` em todos elementos interativos |
| Demais cores (`--muted`, `--accent`, `--link`) | ✅ | Já passam AA — `--muted` 7.8:1, `--accent` ~9:1, `--link` ~5.5:1 |

### 8. Responsividade e zoom

| Estado | Nota |
|--------|------|
| ✅ Layout usa `clamp()`, grids responsivos, e breakpoints | Já implementado |
| ✅ `overflow-x: hidden` no body | Já implementado |
| ✅ Fontes usam `clamp()` para escalar | Já implementado |

### 9. Movimento

| Problema | Critério WCAG | Correção |
|----------|---------------|----------|
| Parallax do hero não respeitava `prefers-reduced-motion` | 2.3.3 | Adicionado check `reducedMotion` no app.js — parallax desativado quando preferência ativa |
| `prefers-reduced-motion` genérico insuficiente | 2.3.3 | Expandido para cobrir `animation-duration`, `transition-duration` e `scroll-behavior` globalmente |
| Animação de scroll-reveal | ✅ | Já respeitava `data-anim="off"` e `prefers-reduced-motion` — mantido |

### 10. Formulários / contato

| Estado | Nota |
|--------|------|
| ℹ️ | O site não possui formulários — contato é feito por links diretos (email, LinkedIn, WhatsApp). Não se aplicam correções de labels, autocomplete ou aria-invalid. |

### 11. Metadados

| Estado | Nota |
|--------|------|
| ✅ Cada página tem `<title>` único e descritivo | Já implementado |
| ✅ Cada página tem `<meta name="description">` | Já implementado |
| ✅ Title e description traduzidos via i18n | Já implementado no i18n.js |

---

## O que ainda exige validação manual

1. **Teste com leitor de tela (NVDA / VoiceOver):** verificar se a ordem de leitura das seções, lightbox e navegação entre cases é compreensível e coerente.

2. **Teste de contraste em imagens dos cases:** as imagens PNG/SVG contêm texto e diagramas — verificar se há informação acessível apenas visualmente que precise de descrição textual complementar.

3. **Teste de zoom 200%–400%:** verificar se não há overflow horizontal ou sobreposição de elementos em viewports estreitos com zoom alto.

4. **Teste em 320px de largura:** no mobile, o nav esconde links de navegação (só mostra CTA + brand). Verificar se a navegação completa é acessível — considerar adicionar menu hamburger.

5. **Lightbox com leitor de tela:** verificar se a navegação entre imagens e os anúncios de caption/contagem são compreensíveis.

6. **Teste do skip link:** verificar se o foco realmente chega ao conteúdo principal ao ativar o skip link em diferentes navegadores.

7. **Touch targets em mobile:** verificar se todos os botões e links têm pelo menos 44×44px de área de toque (WCAG 2.5.8).

8. **Teste de linguagem:** no modo EN, verificar manualmente se todas as informações acessíveis (alt, aria-label, data-cap) estão corretamente traduzidas.

---

## Checklist final de testes manuais

### Teclado
- [ ] Tab navega todos os elementos interativos na ordem visual
- [ ] Skip link aparece no primeiro Tab e pula para o conteúdo
- [ ] Focus visible está claro em todos os links, botões e cards
- [ ] Lightbox abre com Enter/Space, fecha com Esc
- [ ] Lightbox navega com setas ← →
- [ ] Foco fica preso dentro do lightbox enquanto aberto
- [ ] Foco volta ao trigger ao fechar o lightbox
- [ ] Botão "Voltar ao topo" funciona por teclado
- [ ] Links entre cases navegam corretamente

### Leitor de tela
- [ ] Landmarks detectados: nav, main, footer, sections com aria-labelledby
- [ ] Skip link é anunciado
- [ ] Imagens têm alt descritivo lido corretamente
- [ ] SVGs decorativos são ignorados (aria-hidden)
- [ ] Lightbox anuncia role="dialog" e título
- [ ] Botões do lightbox têm nomes acessíveis
- [ ] Botão de idioma anuncia estado atual
- [ ] Headings seguem hierarquia h1 > h2 > h3

### Contraste
- [ ] Textos em `--muted-2` (#7B7B85) legíveis sobre fundo preto
- [ ] Links `--link` (#FF8000) legíveis sobre fundo preto
- [ ] Accent `--accent` (#52C2E8) legível sobre fundo preto
- [ ] Estados de hover e focus mantêm contraste adequado
- [ ] Verificar contraste de texto sobre imagens dos cases (se aplicável)

### Zoom e responsividade
- [ ] 200% de zoom: conteúdo legível sem scroll horizontal
- [ ] 400% de zoom: conteúdo acessível (pode reflow para coluna única)
- [ ] 320px de largura: layout não quebra
- [ ] Lightbox funcional em telas pequenas
- [ ] Touch targets ≥ 44px em mobile

### Movimento
- [ ] Com `prefers-reduced-motion: reduce`: sem animações de reveal, sem parallax, sem scroll suave
- [ ] Cue de scroll ("Role para explorar") sem animação bounce
- [ ] Transições de hover respeitam preferência de movimento reduzido
