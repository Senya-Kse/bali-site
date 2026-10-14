:root {
  --bg: #fbf8f3;
  --alt: #f3ede3;
  --text: #2a2622;
  --muted: #7a7166;
  --accent: #b5562b;
  --accent-dark: #8f4220;
  --card: #ffffff;
  --border: #e5ddd0;
  --radius: 14px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
}
h1, h2, h3 { line-height: 1.2; margin: 0 0 .5em; }
h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); }
a { color: var(--accent); }
.container { width: min(1140px, 92%); margin: 0 auto; }
.narrow { max-width: 720px; }
.muted { color: var(--muted); }
.small { font-size: .9rem; }
.hidden { display: none !important; }
.full { width: 100%; text-align: center; }

.section { padding: 72px 0; }
.section.alt { background: var(--alt); }

/* Шапка */
.site-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(251, 248, 243, .95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.nav-wrap { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.logo { font-weight: 800; letter-spacing: .15em; font-size: 1.3rem; color: var(--text); text-decoration: none; }
.nav { display: flex; gap: 22px; }
.nav a { color: var(--text); text-decoration: none; font-weight: 500; }
.nav a:hover { color: var(--accent); }
.nav-toggle { display: none; background: none; border: 0; font-size: 1.6rem; cursor: pointer; }

/* Hero */
.hero {
  min-height: 70vh;
  display: flex; align-items: center; justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #2a2622 0%, #5a3a24 60%, #b5562b 100%);
  color: #fff;
}
.hero h1 { font-size: clamp(3.5rem, 10vw, 7rem); letter-spacing: .2em; margin: 0; }
.hero-sub { font-size: 1.25rem; opacity: .9; margin: 12px 0 28px; }
.hero-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

/* Кнопки */
.btn {
  display: inline-block; padding: 12px 22px; border-radius: 999px;
  font-weight: 600; text-decoration: none; border: 2px solid transparent;
  cursor: pointer; font-size: 1rem; font-family: inherit;
  transition: transform .15s, background .2s;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-dark); }
.btn-outline { border-color: #fff; color: #fff; }
.btn-outline:hover { background: rgba(255,255,255,.12); }

/* Меню */
.menu-controls { display: flex; flex-direction: column; gap: 14px; margin: 24px 0; }
#menu-search, input, select, textarea {
  font: inherit; padding: 12px 14px; border: 1px solid var(--border);
  border-radius: 10px; background: #fff; width: 100%;
}
.filters, .tabs { display: flex; flex-wrap: wrap; gap: 8px; }
.tab, .chip {
  padding: 8px 16px; border-radius: 999px; border: 1px solid var(--border);
  background: #fff; cursor: pointer; font: inherit; font-size: .95rem;
}
.tab.active, .chip.active { background: var(--text); color: #fff; border-color: var(--text); }
.chip { font-size: .85rem; }

.menu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px;
  transition: box-shadow .2s, transform .2s;
}
.card:hover { box-shadow: 0 8px 24px rgba(0,0,0,.07); transform: translateY(-2px); }
.card-top { display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; }
.card-top h3 { font-size: 1.05rem; margin: 0; }
.price { font-weight: 700; color: var(--accent); white-space: nowrap; }
.card-bottom { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-top: 12px; flex-wrap: wrap; }

.tag {
  display: inline-block; font-size: .75rem; padding: 3px 8px; border-radius: 6px;
  margin-left: 4px; background: var(--alt); color: var(--text);
}
.tag-veg { background: #e3f1e0; }
.tag-spicy { background: #fbe0d6; }
.tag-glutenfree { background: #e0ebf8; }
.tag-new { background: #fff1c7; }

/* Ланч */
.lunch-box { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
.price-badge {
  background: var(--accent); color: #fff; border-radius: var(--radius);
  padding: 28px 36px; text-align: center; font-size: 2rem; font-weight: 800;
}
.price-badge small { display: block; font-size: .9rem; font-weight: 400; opacity: .9; }
.check-list { list-style: none; padding: 0; margin: 16px 0; }
.check-list li { padding: 6px 0 6px 26px; position: relative; }
.check-list li::before { content: "✓"; position: absolute; left: 0; color: var(--accent); font-weight: 700; }

/* Залы */
.hall-detail { margin-top: 24px; }
.hall-card {
  display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px;
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px;
}
.hall-stats { display: flex; flex-direction: column; gap: 20px; justify-content: center; }
.hall-stats .big { display: block; font-size: 1.8rem; font-weight: 800; color: var(--accent); }
.hall-stats small { color: var(--muted); }

/* Калькулятор */
.calc { display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px; margin-top: 24px; }
.calc-form, .calc-result {
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px;
}
.calc-form label { display: block; margin-bottom: 18px; font-weight: 500; }
.calc-form input[type=range] { width: 80%; padding: 0; border: 0; accent-color: var(--accent); }
.calc-form fieldset { border: 1px solid var(--border); border-radius: 10px; padding: 12px 16px; }
.calc-form legend { padding: 0 6px; color: var(--muted); }
.calc-result { text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; }
.calc-result .total { font-size: 2.4rem; font-weight: 800; color: var(--accent); }
.calc-result ul { text-align: left; padding-left: 18px; width: 100%; }
.calc-result .note { font-style: italic; list-style: none; margin-left: -18px; }

/* Формы */
.form { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; display: flex; flex-direction: column; gap: 16px; }
.form label { display: flex; flex-direction: column; gap: 6px; font-weight: 500; font-size: .95rem; }
.form label.checkbox { flex-direction: row; align-items: center; font-weight: 400; }
.form label.checkbox input { width: auto; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.status { min-height: 1.4em; margin: 0; }
.status.ok { color: #2e7d32; }
.status.error { color: #c62828; }

/* Контакты */
.contacts-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; align-items: start; }
.map-wrap iframe { width: 100%; height: 380px; border: 0; border-radius: var(--radius); }
.socials { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.social {
  padding: 8px 14px; border-radius: 999px; border: 1px solid var(--border);
  background: #fff; text-decoration: none; color: var(--text); font-size: .9rem;
}
.social:hover { border-color: var(--accent); color: var(--accent); }

.site-footer { padding: 24px 0; text-align: center; color: var(--muted); border-top: 1px solid var(--border); }

/* Адаптив */
@media (max-width: 860px) {
  .nav-toggle { display: block; }
  .nav {
    display: none; position: absolute; top: 64px; left: 0; right: 0;
    flex-direction: column; gap: 0; background: var(--bg); border-bottom: 1px solid var(--border);
  }
  .nav.open { display: flex; }
  .nav a { padding: 14px 4%; border-top: 1px solid var(--border); }
  .calc, .hall-card, .contacts-grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .grid-2 { grid-template-columns: 1fr; }
  .section { padding: 48px 0; }
}
