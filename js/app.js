// ============================================================
// ЛОГИКА САЙТА BALI
// ============================================================

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const fmt = (n) => n.toLocaleString("ru-RU") + " ₽";
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---------- Контакты и шапка ----------
function renderContacts() {
  $("#c-address").textContent = RESTAURANT.address;
  $("#c-booking").textContent = RESTAURANT.phones.booking;
  $("#c-booking").href = "tel:" + RESTAURANT.phones.booking.replace(/[^\d+]/g, "");
  $("#c-banquet").innerHTML = RESTAURANT.phones.banquet
    .map((p) => `<a href="tel:${p.replace(/[^\d+]/g, "")}">${p}</a>`).join("<br>");
  $("#c-email").textContent = RESTAURANT.email;
  $("#c-email").href = "mailto:" + RESTAURANT.email;
  $("#c-hours").innerHTML = Object.entries(RESTAURANT.hours)
    .map(([d, t]) => `${d}: ${t}`).join("<br>");
  const socialNames = { telegram: "Telegram", whatsapp: "WhatsApp", vk: "VK", max: "MAX", youtube: "YouTube" };
  $("#c-socials").innerHTML = Object.entries(RESTAURANT.socials)
    .map(([k, url]) => `<a class="social" href="${url}" target="_blank" rel="noopener">${socialNames[k]}</a>`).join("");
  $("#year").textContent = new Date().getFullYear();
}

function setupNav() {
  const toggle = $(".nav-toggle");
  const nav = $(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$(".nav a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

// ---------- Меню ----------
let activeCat = "all";
let activeTags = new Set();

function renderMenuTabs() {
  const tabs = [{ id: "all", title: "Всё" }, ...MENU_CATEGORIES];
  $("#menu-tabs").innerHTML = tabs.map((t) =>
    `<button class="tab ${t.id === activeCat ? "active" : ""}" data-cat="${t.id}">${t.title}</button>`
  ).join("");
  $$("#menu-tabs .tab").forEach((b) => b.addEventListener("click", () => {
    activeCat = b.dataset.cat;
    renderMenuTabs();
    renderMenu();
  }));
}

function renderMenuFilters() {
  $("#menu-filters").innerHTML = Object.entries(TAG_LABELS).map(([k, label]) =>
    `<button class="chip ${activeTags.has(k) ? "active" : ""}" data-tag="${k}">${label}</button>`
  ).join("");
  $$("#menu-filters .chip").forEach((b) => b.addEventListener("click", () => {
    const t = b.dataset.tag;
    activeTags.has(t) ? activeTags.delete(t) : activeTags.add(t);
    renderMenuFilters();
    renderMenu();
  }));
}

function renderMenu() {
  const q = $("#menu-search").value.trim().toLowerCase();
  const items = MENU_ITEMS.filter((it) => {
    if (activeCat !== "all" && it.cat !== activeCat) return false;
    if (activeTags.size && ![...activeTags].every((t) => it.tags.includes(t))) return false;
    if (q && !(it.name + " " + it.desc).toLowerCase().includes(q)) return false;
    return true;
  });

  $("#menu-empty").classList.toggle("hidden", items.length > 0);
  $("#menu-list").innerHTML = items.map((it) => {
    const cat = MENU_CATEGORIES.find((c) => c.id === it.cat);
    const tags = it.tags.map((t) => `<span class="tag tag-${t}">${TAG_LABELS[t]}</span>`).join("");
    return `
      <article class="card menu-card">
        <div class="card-top">
          <h3>${esc(it.name)}</h3>
          <span class="price">${fmt(it.price)}</span>
        </div>
        <p class="muted">${esc(it.desc)}</p>
        <div class="card-bottom">
          <small class="muted">${esc(cat ? cat.title : "")} · ${esc(it.weight)}</small>
          <div>${tags}</div>
        </div>
      </article>`;
  }).join("");
}

function setupMenu() {
  renderMenuTabs();
  renderMenuFilters();
  renderMenu();
  $("#menu-search").addEventListener("input", renderMenu);
}

// ---------- Бизнес-ланч ----------
function renderLunch() {
  $("#lunch-hours").textContent = BUSINESS_LUNCH.hours;
  $("#lunch-includes").innerHTML = BUSINESS_LUNCH.includes.map((i) => `<li>${esc(i)}</li>`).join("");
  $("#lunch-price").textContent = fmt(BUSINESS_LUNCH.price);
}

// ---------- Залы ----------
function renderHalls(activeId = HALLS[0].id) {
  $("#hall-tabs").innerHTML = HALLS.map((h) =>
    `<button class="tab ${h.id === activeId ? "active" : ""}" data-hall="${h.id}">${esc(h.name)}</button>`
  ).join("");
  const h = HALLS.find((x) => x.id === activeId);
  $("#hall-detail").innerHTML = `
    <div class="hall-card">
      <div class="hall-info">
        <h3>${esc(h.name)}</h3>
        <p>${esc(h.description)}</p>
        <ul class="check-list">${h.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      </div>
      <div class="hall-stats">
        <div><span class="big">до ${h.capacity}</span><small>гостей</small></div>
        <div><span class="big">${fmt(h.minCheck)}</span><small>средний чек на гостя (ориентир)</small></div>
      </div>
    </div>`;
  $$("#hall-tabs .tab").forEach((b) => b.addEventListener("click", () => renderHalls(b.dataset.hall)));
}

function setupHallSelect() {
  const sel = $("#booking-hall");
  HALLS.forEach((h) => sel.insertAdjacentHTML("beforeend", `<option value="${h.id}">${esc(h.name)}</option>`));
}

// ---------- Калькулятор банкета ----------
function setupCalc() {
  $("#calc-format").innerHTML = BANQUET_FORMATS.map((f) =>
    `<option value="${f.id}">${esc(f.name)}</option>`).join("");
  $("#calc-extras").innerHTML = EXTRA_SERVICES.map((s) =>
    `<label class="checkbox"><input type="checkbox" value="${s.id}"> ${esc(s.name)} — ${fmt(s.price)}</label>`).join("");

  const update = () => {
    const guests = +$("#calc-guests").value;
    $("#calc-guests-val").textContent = guests;
    const format = BANQUET_FORMATS.find((f) => f.id === $("#calc-format").value);
    const food = guests * format.pricePerGuest;
    const extras = $$("#calc-extras input:checked").map((i) => EXTRA_SERVICES.find((s) => s.id === i.value));
    const extrasSum = extras.reduce((s, e) => s + (e.id === "cake" ? 0 : e.price), 0);
    const total = food + extrasSum;
    $("#calc-total").textContent = fmt(total);
    $("#calc-breakdown").innerHTML = [
      `<li>${esc(format.name)}: ${guests} гост. × ${fmt(format.pricePerGuest)} = ${fmt(food)}</li>`,
      ...extras.map((e) => `<li>${esc(e.name)}: ${fmt(e.price)}</li>`),
      `<li class="note">Торт рассчитывается отдельно по весу.</li>`
    ].join("");
  };

  ["#calc-format", "#calc-guests"].forEach((s) => $(s).addEventListener("input", update));
  $$("#calc-extras input").forEach((i) => i.addEventListener("change", update));
  update();
}

// ---------- Форма бронирования ----------
function setupForm() {
  const form = $("#booking-form");
  const status = $("#booking-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const phoneOk = /^\+?[\d\s()-]{10,}$/.test(data.phone || "");
    if (!form.checkValidity() || !phoneOk) {
      status.className = "status error";
      status.textContent = "Заполните обязательные поля, телефон укажите полностью.";
      return;
    }
    if (!RESTAURANT.formEndpoint) {
      // Демо-режим: заявка не отправляется
      status.className = "status ok";
      status.textContent = `Демо: заявка на ${data.date} в ${data.time} принята (не отправлена, нужен endpoint).`;
      form.reset();
      return;
    }
    status.className = "status";
    status.textContent = "Отправка…";
    try {
      const res = await fetch(RESTAURANT.formEndpoint, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });
      if (!res.ok) throw new Error();
      status.className = "status ok";
      status.textContent = "Спасибо! Мы свяжемся с вами для подтверждения.";
      form.reset();
    } catch {
      status.className = "status error";
      status.textContent = `Не удалось отправить. Позвоните: ${RESTAURANT.phones.booking}`;
    }
  });
}

// ---------- Старт ----------
document.addEventListener("DOMContentLoaded", () => {
  renderContacts();
  setupNav();
  setupMenu();
  renderLunch();
  renderHalls();
  setupHallSelect();
  setupCalc();
  setupForm();
});
