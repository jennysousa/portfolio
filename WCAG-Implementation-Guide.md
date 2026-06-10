# WCAG 2.2 AA — Guia de Implementação para o Portfolio

**Site:** https://jennysousa.github.io/portfolio/  
**Data:** 09/06/2026

---

## 1. Auditoria objetiva — o que está errado hoje

### 🔴 Prioridade Alta (impacto direto em conformidade AA)

| # | Problema | Critério WCAG | Onde |
|---|---------|---------------|------|
| 1 | **Sem skip link** — não há forma de pular a navegação | 2.4.1 Bypass Blocks | Todas as 5 páginas |
| 2 | **Sem landmark `<main>`** — leitor de tela não identifica conteúdo principal | 1.3.1, 2.4.1 | Todas as 5 páginas |
| 3 | **Lightbox sem focus trap** — Tab sai do modal aberto para o conteúdo por trás | 2.4.3 Focus Order | 3 case pages |
| 4 | **Lightbox não move foco ao abrir** — foco fica no trigger, não no dialog | 2.4.3 | 3 case pages |
| 5 | **Sem `:focus-visible`** — nenhum estilo de foco visível definido | 2.4.7 Focus Visible | Global (CSS) |
| 6 | **Contraste `--muted-2` falha AA** — `#6B6B74` sobre `#000` = 4.01:1 (mínimo 4.5:1) | 1.4.3 Contrast | Global (CSS) |
| 7 | **Parallax ignora `prefers-reduced-motion`** — hero continua com parallax mesmo com preferência ativa | 2.3.3 Motion | app.js |

### 🟡 Prioridade Média (acessibilidade parcial)

| # | Problema | Critério WCAG | Onde |
|---|---------|---------------|------|
| 8 | **SVGs decorativos sem `aria-hidden`** — lidos como conteúdo pelo leitor de tela | 1.1.1 Non-text | Todas as páginas |
| 9 | **Nav sem `aria-label`** — leitor de tela não identifica a navegação | 1.3.1 | Todas as páginas |
| 10 | **Seções sem `aria-labelledby`** na home | 1.3.1 | index.html |
| 11 | **Progress bar decorativa** sem `aria-hidden` | 4.1.2 | Todas as páginas |
| 12 | **`prefers-reduced-motion` incompleto** — só cancela `.reveal`, não cobre todas as transições | 2.3.3 | styles.css |
| 13 | **Header fixo pode esconder foco** — sem `scroll-padding-top` | 2.4.11 Focus Not Obscured | styles.css |

### 🟢 Prioridade Baixa (boas práticas / segurança)

| # | Problema | Critério WCAG | Onde |
|---|---------|---------------|------|
| 14 | **Links externos sem `rel="noreferrer"`** — apenas `noopener` | Segurança | Todas as páginas |
| 15 | **Lightbox aria-labels não traduzem** quando idioma muda para EN | 3.1.2 Language | i18n.js + HTML |
| 16 | **Nav `aria-label` não traduz** em EN | 3.1.2 | i18n.js + HTML |
| 17 | **`id="top"` no `<body>`** em Sobre mim.html (semântica incorreta) | — | Sobre mim.html |

---

## 2. Lista priorizada — ordem de implementação

```
1. [CSS]  Adicionar skip link styles + :focus-visible global
2. [CSS]  Corrigir contraste --muted-2 (#6B6B74 → #7B7B85)
3. [CSS]  Adicionar scroll-padding-top: 90px
4. [CSS]  Expandir prefers-reduced-motion
5. [CSS]  Focus-visible para lightbox buttons e ph__frame
6. [JS]   Focus trap no lightbox + foco no close ao abrir
7. [JS]   Parallax respeitar prefers-reduced-motion
8. [JS]   i18n: suporte a data-i18n-label para aria-labels
9. [JS]   i18n: atualizar aria-labels dos triggers de lightbox
10. [HTML] Adicionar skip link em todas as 5 páginas
11. [HTML] Adicionar <main id="main-content"> em todas as 5 páginas
12. [HTML] aria-hidden="true" focusable="false" em todos os SVGs decorativos
13. [HTML] aria-label + data-i18n-label na nav
14. [HTML] role="presentation" aria-hidden="true" na progress bar
15. [HTML] aria-labelledby nas seções da home
16. [HTML] data-i18n-label no lightbox dialog e botões
17. [HTML] rel="noopener noreferrer" em links target="_blank"
18. [HTML] Mover id="top" do body para header em Sobre mim.html
```

---

## 3. Prompt para Claude Code

Cole este prompt no Claude Code dentro do repositório do seu portfolio:

---

```
Aplique correções de acessibilidade WCAG 2.2 AA no meu portfolio. Não altere layout, textos visíveis, identidade visual ou funcionalidades existentes. Mantenha analytics (Clarity, GA, Hotjar) funcionando.

## ALTERAÇÕES EM styles.css

### A) Contraste — trocar --muted-2
Linha: `--muted-2: #6B6B74;`
Trocar por: `--muted-2: #7B7B85;   /* WCAG AA ≥4.5:1 on #000 */`

### B) scroll-padding-top
Linha: `html { background: var(--bg); color: var(--ink); scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }`
Trocar por: `html { background: var(--bg); color: var(--ink); scroll-behavior: smooth; scroll-padding-top: 90px; -webkit-text-size-adjust: 100%; }`

### C) Adicionar DEPOIS de `::selection { ... }` e ANTES de `a { color: var(--link); ... }`:

```css
/* ---------- Skip link ---------- */
.skip-link {
  position: absolute; left: -9999px; top: auto;
  width: 1px; height: 1px; overflow: hidden; z-index: 999;
  font-family: var(--font-ui); font-weight: 700; font-size: 14px;
  text-decoration: none; color: #001018;
  background: var(--accent); border-radius: 8px; padding: 12px 24px;
  white-space: nowrap;
}
.skip-link:focus {
  position: fixed; top: 12px; left: 12px;
  width: auto; height: auto;
  z-index: 9999;
}

/* ---------- Focus-visible ---------- */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 3px;
}
:focus:not(:focus-visible) { outline: none; }
.nav__cta:focus-visible,
.clink:focus-visible,
.lang-toggle:focus-visible,
.btn-ghost:focus-visible,
.case:focus-visible {
  outline-offset: 4px;
  border-radius: 999px;
}
```

### D) Substituir o bloco `@media (prefers-reduced-motion: reduce)` no final do arquivo por:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
  .lines span > i { transform: none !important; }
  .hero__cue svg { animation: none; }
}
```

## ALTERAÇÕES EM case.css

### E) Focus-visible no lightbox — DEPOIS de `.lb__btn:hover { ... }` adicionar:
```css
.lb__btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
```

### F) Focus-visible nos botões de imagem — DEPOIS de `.ph--img .ph__frame { ... }` adicionar:
```css
.ph__frame:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: var(--r-md); }
```

## ALTERAÇÕES EM app.js

### G) Parallax respeitar reduced-motion — substituir:
```js
if (hero && !animOff() && y < window.innerHeight) {
```
por:
```js
var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (hero && !animOff() && !reducedMotion && y < window.innerHeight) {
```

### H) Lightbox: foco no close ao abrir — substituir a função openAt:
```js
function openAt(i) {
  current = i;
  lastFocused = document.activeElement;
  lb.hidden = false;
  render();
  requestAnimationFrame(function () {
    lb.classList.add("open");
    lb.querySelector('.lb__close').focus();
  });
  document.body.style.overflow = "hidden";
}
```

### I) Lightbox: focus trap — substituir o keydown listener:
```js
document.addEventListener("keydown", function (e) {
  if (lb.hidden) return;
  if (e.key === "Escape") close();
  else if (e.key === "ArrowRight") go(1);
  else if (e.key === "ArrowLeft") go(-1);
  else if (e.key === "Tab") {
    var focusable = lb.querySelectorAll('button:not([disabled])');
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
});
```

## ALTERAÇÕES EM i18n.js

### J) Adicionar chaves EN no início do objeto `en`:
Depois de `'s.cta.back': 'Back to homepage',` adicionar:
```js
's.skip':            'Skip to main content',
's.nav.aria':        'Main navigation',
's.lb.dialog':       'Image viewer',
's.lb.close':        'Close',
's.lb.prev':         'Previous image',
's.lb.next':         'Next image',
```

### K) No final da função applyLang, DEPOIS do bloco 5 (Update toggle button) e ANTES do `}` que fecha applyLang, adicionar:

```js
/* 6. Translate aria-label attributes via data-i18n-label */
var labelEls = document.querySelectorAll('[data-i18n-label]');
for (var m = 0; m < labelEls.length; m++) {
  var lel = labelEls[m];
  var lk = lel.getAttribute('data-i18n-label');
  if (!lel.hasAttribute('data-i18n-label-pt')) {
    lel.setAttribute('data-i18n-label-pt', lel.getAttribute('aria-label') || '');
  }
  if (lang === 'en' && en[lk]) {
    lel.setAttribute('aria-label', en[lk]);
  } else if (lang === 'pt') {
    lel.setAttribute('aria-label', lel.getAttribute('data-i18n-label-pt') || '');
  }
}

/* 7. Auto-update lightbox trigger aria-labels from data-cap */
var lbTriggers = document.querySelectorAll('[data-lightbox]');
var enlargePrefix = lang === 'en' ? 'Enlarge: ' : 'Ampliar: ';
for (var n = 0; n < lbTriggers.length; n++) {
  var trig = lbTriggers[n];
  var capVal = trig.getAttribute('data-cap') || '';
  trig.setAttribute('aria-label', enlargePrefix + capVal);
}
```

## ALTERAÇÕES EM TODAS AS 5 PÁGINAS HTML

### L) Logo após a tag `<body...>` em cada página, adicionar:
```html
<a class="skip-link" href="#main-content" data-i18n="s.skip">Ir para o conteúdo principal</a>
```

### M) Na progress bar, trocar:
```html
<div class="progress" id="progress"></div>
```
por:
```html
<div class="progress" id="progress" role="presentation" aria-hidden="true"></div>
```

### N) Na tag `<nav>`, trocar:
```html
<nav class="nav" id="nav">
```
por:
```html
<nav class="nav" id="nav" aria-label="Navegação principal" data-i18n-label="s.nav.aria">
```

### O) Envolver o conteúdo principal com `<main id="main-content">`:
- **index.html**: abrir `<main id="main-content">` depois do `</nav>`, fechar `</main>` antes do `<footer>`
- **Case pages**: abrir depois do `.casebar` (breadcrumb), fechar antes do `<footer>`
- **Sobre mim.html**: abrir depois do `.casebar`, fechar antes do `<footer>`

### P) Em todos os SVGs inline que são decorativos (dentro de links, botões com texto, nav), adicionar:
```
aria-hidden="true" focusable="false"
```

### Q) Em links `target="_blank"`, trocar `rel="noopener"` por `rel="noopener noreferrer"`

### R) Apenas em index.html — adicionar aria-labelledby e ids nos headings das 4 seções:
- `<section id="highlights" aria-labelledby="hl-heading">` + `<h2 id="hl-heading" ...>`
- `<section id="numeros" aria-labelledby="num-heading">` + `<h2 id="num-heading" ...>`
- `<section id="cases" aria-labelledby="cases-heading">` + `<h2 id="cases-heading" ...>`
- `<section id="contato" aria-labelledby="contact-heading">` + `<h2 id="contact-heading" ...>`

### S) Nas 3 case pages — adicionar data-i18n-label no lightbox:
```html
<div class="lb" id="lightbox" role="dialog" aria-modal="true" aria-label="Visualizador de imagens" data-i18n-label="s.lb.dialog" hidden>
  <button class="lb__btn lb__close" type="button" aria-label="Fechar" data-i18n-label="s.lb.close">
  <button class="lb__btn lb__prev" type="button" aria-label="Imagem anterior" data-i18n-label="s.lb.prev">
  <button class="lb__btn lb__next" type="button" aria-label="Próxima imagem" data-i18n-label="s.lb.next">
```

### T) Em Sobre mim.html — mover id="top" do `<body>` para o `<header>`:
Trocar `<body id="top" ...>` por `<body ...>` e adicionar `id="top"` no `<header class="section case-hero">`.

Não altere textos, não remova classes, não mude IDs de analytics. Mantenha todo o resto igual.
```

---

## 4. Checklist de validação

### Teclado
- [ ] Pressionar Tab na home — skip link aparece como primeiro elemento focável (turquesa)
- [ ] Ativar skip link — foco pula para o conteúdo principal
- [ ] Tab navega: nav links → hero → cards → cases → contato → footer na ordem visual
- [ ] Todos os links e botões têm outline turquesa visível no foco
- [ ] Lightbox: abrir com Enter/Space no thumbnail → foco vai para botão Fechar
- [ ] Lightbox: Tab cicla apenas entre Fechar / Anterior / Próximo (não escapa)
- [ ] Lightbox: setas ← → navegam entre imagens
- [ ] Lightbox: Esc fecha e foco volta para o thumbnail que abriu
- [ ] Repetir em todas as 5 páginas

### Leitor de tela (VoiceOver ou NVDA)
- [ ] Landmarks anunciados: "navigation", "main", "contentinfo" (footer)
- [ ] Skip link é anunciado como primeiro item
- [ ] Imagens leem alt descritivo
- [ ] SVGs decorativos são ignorados
- [ ] Lightbox anuncia "dialog" com nome "Visualizador de imagens"
- [ ] Botão de idioma anuncia "Switch to English" / "Mudar para Português"
- [ ] Hierarquia de headings: h1 → h2 → h3 sem pulos

### Contraste
- [ ] Rodar axe DevTools — 0 erros de contraste
- [ ] Textos `--muted-2` (#7B7B85) sobre preto passam 4.5:1
- [ ] Textos `--link` (#FF8000) sobre preto passam 4.5:1
- [ ] Textos `--accent` (#52C2E8) sobre preto passam 4.5:1

### Zoom e responsividade
- [ ] Chrome 200% zoom — sem scroll horizontal, conteúdo legível
- [ ] Chrome 400% zoom — reflow para coluna única, sem perda de conteúdo
- [ ] Viewport 320px — layout não quebra
- [ ] Lightbox funciona em telas pequenas (touch swipe)

### Movimento
- [ ] Em macOS: System Preferences → Accessibility → Reduce Motion ON
- [ ] Recarregar — sem parallax no hero, sem animação de reveal, scroll instantâneo
- [ ] Cue "Role para explorar" sem bounce

### Idioma (EN)
- [ ] Clicar EN — todo conteúdo visível traduz
- [ ] Lightbox botões traduzem para "Close", "Previous image", "Next image"
- [ ] Triggers de imagem: aria-label muda de "Ampliar:" para "Enlarge:"
- [ ] Nav aria-label muda para "Main navigation"
- [ ] Title e meta description em inglês

### Ferramentas automáticas
- [ ] Lighthouse Accessibility ≥ 95
- [ ] axe DevTools — 0 critical/serious issues
- [ ] WAVE — 0 errors (warnings são aceitáveis)

---

## 5. Exemplos técnicos dos pontos principais

### Skip Link (HTML + CSS)

```html
<!-- Primeira coisa depois de <body> -->
<a class="skip-link" href="#main-content" data-i18n="s.skip">
  Ir para o conteúdo principal
</a>

<!-- Depois do nav, envolvendo o conteúdo -->
<main id="main-content">
  ...
</main>
```

```css
.skip-link {
  position: absolute; left: -9999px; top: auto;
  width: 1px; height: 1px; overflow: hidden; z-index: 999;
  font-family: var(--font-ui); font-weight: 700; font-size: 14px;
  text-decoration: none; color: #001018;
  background: var(--accent); border-radius: 8px; padding: 12px 24px;
}
.skip-link:focus {
  position: fixed; top: 12px; left: 12px;
  width: auto; height: auto; z-index: 9999;
}
```

### Focus Visible global (CSS)

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 3px;
}
:focus:not(:focus-visible) { outline: none; }

/* Pill-shaped elements get rounded outline */
.nav__cta:focus-visible,
.clink:focus-visible,
.lang-toggle:focus-visible,
.btn-ghost:focus-visible,
.case:focus-visible {
  outline-offset: 4px;
  border-radius: 999px;
}
```

### Lightbox Focus Trap (JS)

```js
// Ao abrir: mover foco para o botão fechar
function openAt(i) {
  current = i;
  lastFocused = document.activeElement;
  lb.hidden = false;
  render();
  requestAnimationFrame(function () {
    lb.classList.add("open");
    lb.querySelector('.lb__close').focus(); // ← NOVO
  });
  document.body.style.overflow = "hidden";
}

// No keydown: prender Tab dentro do modal
if (e.key === "Tab") {
  var focusable = lb.querySelectorAll('button:not([disabled])');
  var first = focusable[0];
  var last = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault(); last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }
}
```

### prefers-reduced-motion completo (CSS + JS)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; }
  .lines span > i { transform: none !important; }
  .hero__cue svg { animation: none; }
}
```

```js
// Parallax no app.js — checar antes de aplicar
var reducedMotion = window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (hero && !animOff() && !reducedMotion && y < window.innerHeight) {
  hero.style.transform = "translateY(" + (y * 0.14) + "px)";
  // ...
}
```

### i18n: traduzir aria-labels (JS)

```js
// Suporte genérico: qualquer elemento com data-i18n-label="chave"
var labelEls = document.querySelectorAll('[data-i18n-label]');
for (var m = 0; m < labelEls.length; m++) {
  var lel = labelEls[m];
  var lk = lel.getAttribute('data-i18n-label');
  // salva o PT original na primeira vez
  if (!lel.hasAttribute('data-i18n-label-pt')) {
    lel.setAttribute('data-i18n-label-pt',
      lel.getAttribute('aria-label') || '');
  }
  if (lang === 'en' && en[lk]) {
    lel.setAttribute('aria-label', en[lk]);
  } else if (lang === 'pt') {
    lel.setAttribute('aria-label',
      lel.getAttribute('data-i18n-label-pt') || '');
  }
}

// Lightbox triggers: atualiza automaticamente com base no data-cap traduzido
var lbTriggers = document.querySelectorAll('[data-lightbox]');
var prefix = lang === 'en' ? 'Enlarge: ' : 'Ampliar: ';
for (var n = 0; n < lbTriggers.length; n++) {
  var trig = lbTriggers[n];
  trig.setAttribute('aria-label', prefix + (trig.getAttribute('data-cap') || ''));
}
```

### Contraste corrigido

```
ANTES: --muted-2: #6B6B74  → 4.01:1 sobre #000 ❌ falha AA
DEPOIS: --muted-2: #7B7B85 → 5.02:1 sobre #000 ✅ passa AA

Diferença visual: cinza ~10% mais claro, imperceptível no uso normal.
```

---

## Nota importante

**Todas essas correções já estão aplicadas nos arquivos deste projeto.** Você pode baixar os arquivos corrigidos e substituir diretamente no seu repositório GitHub, ou usar o prompt da seção 3 para que o Claude Code aplique as mesmas mudanças no repo.

Arquivos modificados para copiar:
- `styles.css`
- `case.css`
- `app.js`
- `i18n.js`
- `index.html`
- `Case DesignOps.html`
- `Case Smart Checkout.html`
- `Case Loop.html`
- `Sobre mim.html`
