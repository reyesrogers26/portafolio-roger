/**
 * LÓGICA PRINCIPAL DEL PORTAFOLIO - ROGER JOEL RAMIREZ REYES
 * Ahora carga los datos desde Sanity CMS (con respaldo local en data.js).
 */

let currentData = null;

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initNavigation();
  initModalEvents();

  // Cargar datos: desde Sanity si está configurado, si no desde data.js
  currentData = await loadPortfolioData();

  if (!currentData) {
    console.error('No se pudieron cargar los datos del portafolio.');
    return;
  }

  renderProfileData();
  renderMetrics();
  renderServices();
  renderMethodology();
  renderCategoryFilters();
  renderProjects('todos');
  renderTestimonials();
  initCounterObserver();
  initContactForm();

  // Re-render Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================
   TEMA CLARO / OSCURO (THEME SWITCHER)
   ========================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileThemeToggleBtn = document.getElementById('theme-toggle-mobile');
  const html = document.documentElement;

  // Cargar preferencia guardada o preferencia del sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    html.classList.add('light');
    updateThemeIcons(true);
  } else {
    html.classList.remove('light');
    updateThemeIcons(false);
  }

  function toggle() {
    const isLight = html.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcons(isLight);
    if (window.lucide) window.lucide.createIcons();
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggle);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggle);
}

function updateThemeIcons(isLight) {
  const iconMarkup = isLight
    ? '<i data-lucide="moon" class="w-5 h-5 text-amber-500"></i>'
    : '<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>';

  const desktopBtn = document.getElementById('theme-toggle');
  const mobileBtn = document.getElementById('theme-toggle-mobile');

  if (desktopBtn) desktopBtn.innerHTML = iconMarkup;
  if (mobileBtn) mobileBtn.innerHTML = iconMarkup;
}

/* ==========================================
   NAVEGACIÓN Y MENÚ MÓVIL
   ========================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link-item');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Header blur and shadow on scroll
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-lg', 'border-b', 'border-slate-800/80');
    } else {
      header.classList.remove('shadow-lg', 'border-b', 'border-slate-800/80');
    }
  });
}

/* ==========================================
   CARGA DE DATOS DE PERFIL
   ========================================== */
function renderProfileData() {
  const p = currentData.profile;

  // Hero y encabezados
  setTextIfExists('profile-name', p.name);
  setTextIfExists('profile-headline', p.headline);
  setTextIfExists('profile-tagline', p.tagline);
  setTextIfExists('profile-bio', p.bio);
  setTextIfExists('profile-status', p.statusBadge);
  setTextIfExists('profile-location', p.location);

  // Botones de WhatsApp en Hero y Contacto
  const heroWhatsappBtn = document.getElementById('hero-whatsapp-btn');
  if (heroWhatsappBtn) {
    heroWhatsappBtn.href = getWhatsAppLink(
      "Hola Roger Joel, estuve revisando tu portafolio profesional y me gustaría coordinar una conversación comercial."
    );
  }

  const directWhatsappBtn = document.getElementById('direct-whatsapp-btn');
  if (directWhatsappBtn) {
    directWhatsappBtn.href = getWhatsAppLink(
      "Hola Roger Joel, quiero solicitar una asesoría en ventas y estructuración de proyectos."
    );
  }

  // Enlaces de contacto
  const emailLink = document.getElementById('profile-email-link');
  if (emailLink) {
    emailLink.href = `mailto:${p.email}`;
    emailLink.textContent = p.email;
  }

  const phoneLink = document.getElementById('profile-phone-link');
  if (phoneLink) {
    phoneLink.href = `tel:${p.phone.replace(/[^0-9+]/g, '')}`;
    phoneLink.textContent = p.phone;
  }
}

function setTextIfExists(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function getWhatsAppLink(customMessage) {
  const rawNum = currentData.profile.whatsapp;
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${rawNum}?text=${encodedText}`;
}

/* ==========================================
   MÉTRICAS Y CONTADORES ANIMADOS
   ========================================== */
function renderMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container) return;

  container.innerHTML = currentData.metrics.map(m => `
    <div class="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
      <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
      <div>
        <div class="flex items-baseline gap-1 mb-2">
          <span class="text-3xl sm:text-4xl font-extrabold text-emerald-400 metric-prefix">${m.prefix || ''}</span>
          <span class="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight counter-val" data-target="${m.value}">0</span>
          <span class="text-3xl sm:text-4xl font-extrabold text-emerald-400 metric-suffix">${m.suffix || ''}</span>
        </div>
        <h4 class="text-lg font-bold text-slate-200 mt-1 mb-2">${m.title}</h4>
      </div>
      <p class="text-xs sm:text-sm text-slate-400 mt-2">${m.description}</p>
    </div>
  `).join('');
}

function initCounterObserver() {
  const metricsSection = document.getElementById('metricas');
  if (!metricsSection) return;

  let executed = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !executed) {
        executed = true;
        animateCounters();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(metricsSection);
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter-val');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
    let current = 0;
    const duration = 1600; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, stepTime);
  });
}

/* ==========================================
   SERVICIOS Y ESPECIALIDADES
   ========================================== */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = currentData.services.map(s => `
    <div class="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300">
      <div>
        <div class="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-inner">
          <i data-lucide="${s.icon}" class="w-7 h-7"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-100 mb-3">${s.title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">${s.description}</p>
      </div>
      <div class="border-t border-slate-800/80 pt-4 mt-2">
        <div class="flex flex-wrap gap-2">
          ${s.highlights.map(h => `
            <span class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/60 text-emerald-300 border border-slate-700/50">
              <i data-lucide="check" class="w-3 h-3 mr-1 text-emerald-400"></i> ${h}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   METODOLOGÍA EN 4 FASES
   ========================================== */
function renderMethodology() {
  const container = document.getElementById('methodology-grid');
  if (!container) return;

  container.innerHTML = currentData.methodology.map(m => `
    <div class="relative glass-panel p-6 sm:p-7 rounded-2xl border-l-4 border-l-emerald-500 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl font-black text-emerald-400/90 font-mono">${m.step}</span>
          <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </div>
        </div>
        <h3 class="text-lg font-bold text-slate-100 mb-2">${m.title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed">${m.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   FILTRADO Y RENDER DE PROYECTOS / CASOS
   ========================================== */
function renderCategoryFilters() {
  const container = document.getElementById('categories-filter');
  if (!container) return;

  container.innerHTML = currentData.categories.map((cat, idx) => `
    <button 
      class="filter-btn ${idx === 0 ? 'active' : ''}" 
      data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  const buttons = container.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const catId = btn.getAttribute('data-category');
      renderProjects(catId);
    });
  });
}

function renderProjects(category) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = category === 'todos'
    ? currentData.projects
    : currentData.projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300">
      <div class="p-6 sm:p-7">
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="badge-tag">
            <i data-lucide="bookmark" class="w-3 h-3"></i>
            ${getCategoryName(item.category)}
          </span>
          <div class="text-right">
            <span class="text-emerald-400 font-extrabold text-base tracking-tight">${item.metric}</span>
          </div>
        </div>

        <h3 class="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-2">${item.title}</h3>
        <p class="text-emerald-300/80 text-xs font-semibold uppercase tracking-wider mb-4">${item.subtitle}</p>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">${item.summary}</p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${item.tags.map(t => `<span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">${t}</span>`).join('')}
        </div>
      </div>

      <div class="p-6 sm:p-7 pt-0">
        <button 
          onclick="openProjectModal('${item.id}')"
          class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-emerald-600 hover:text-white text-slate-200 text-sm font-semibold transition-all duration-200 border border-slate-700/80 hover:border-emerald-500">
          <span>Ver Caso de Éxito</span>
          <i data-lucide="external-link" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getCategoryName(catId) {
  const found = currentData.categories.find(c => c.id === catId);
  return found ? found.name : 'Caso Comercial';
}

/* ==========================================
   MODAL DE DETALLE DE CASO DE ÉXITO
   ========================================== */
function initModalEvents() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

window.openProjectModal = function(projectId) {
  const project = currentData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const bodyEl = document.getElementById('modal-body');
  if (!modal || !bodyEl) return;

  bodyEl.innerHTML = `
    <div>
      <div class="flex items-center gap-3 mb-3">
        <span class="badge-tag">${getCategoryName(project.category)}</span>
        <span class="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          ${project.metric} (${project.metricLabel})
        </span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2">${project.title}</h2>
      <p class="text-emerald-400 text-sm font-medium mb-6">${project.subtitle}</p>

      <div class="space-y-6">
        <div class="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
          <h4 class="text-sm font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2 mb-2">
            <i data-lucide="alert-circle" class="w-4 h-4"></i> El Desafío Comercial
          </h4>
          <p class="text-slate-300 text-sm leading-relaxed">${project.challenge}</p>
        </div>

        <div class="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
          <h4 class="text-sm font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 mb-2">
            <i data-lucide="zap" class="w-4 h-4"></i> Estrategia y Solución Implementada
          </h4>
          <p class="text-slate-300 text-sm leading-relaxed">${project.solution}</p>
        </div>

        <div class="bg-emerald-950/20 p-5 rounded-xl border border-emerald-500/20">
          <h4 class="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
            <i data-lucide="check-circle" class="w-4 h-4"></i> Resultados Clave Logrados
          </h4>
          <ul class="space-y-2">
            ${project.results.map(r => `
              <li class="flex items-start gap-2.5 text-slate-200 text-sm">
                <i data-lucide="check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${r}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2">
          ${project.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">${t}</span>`).join('')}
        </div>
        <a 
          href="${getWhatsAppLink(`Hola Roger Joel, me interesó mucho el caso de '${project.title}'. ¿Podemos conversar sobre cómo aplicar algo similar a mi negocio?`)}"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>Consultar por WhatsApp</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ==========================================
   TESTIMONIOS
   ========================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = currentData.testimonials.map(t => `
    <div class="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative">
      <div class="flex items-center gap-1 text-amber-400 mb-4">
        ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>').join('')}
      </div>
      <p class="text-slate-300 text-sm sm:text-base italic leading-relaxed mb-6">"${t.quote}"</p>
      <div class="border-t border-slate-800 pt-4 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
          ${t.author.charAt(0)}
        </div>
        <div>
          <h5 class="text-slate-100 font-bold text-sm">${t.author}</h5>
          <p class="text-slate-400 text-xs">${t.role} &bull; <span class="text-emerald-400">${t.company}</span></p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   FORMULARIO DE CONTACTO & NOTIFICACIONES
   ========================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const serviceSelect = document.getElementById('contact-service-select');
  const whatsappDynamicBtn = document.getElementById('whatsapp-form-trigger');

  // Actualizar botón de WhatsApp dinámicamente si se selecciona un servicio
  if (serviceSelect && whatsappDynamicBtn) {
    serviceSelect.addEventListener('change', () => {
      const selected = serviceSelect.value || "Asesoría General";
      whatsappDynamicBtn.href = getWhatsAppLink(
        `Hola Roger Joel, me interesa recibir información y cotización sobre el servicio de: ${selected}.`
      );
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const service = serviceSelect ? serviceSelect.value : 'General';
      const message = document.getElementById('form-message').value;

      // Crear mensaje para WhatsApp inmediato
      const fullText = `*Nuevo Mensaje desde el Portafolio*%0A%0A*Nombre:* ${encodeURIComponent(name)}%0A*Correo:* ${encodeURIComponent(email)}%0A*Interés:* ${encodeURIComponent(service)}%0A*Mensaje:* ${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/${currentData.profile.whatsapp}?text=${fullText}`;

      // Mostrar toast de confirmación y abrir WhatsApp
      showToast('¡Gracias por tu mensaje! Redirigiendo a WhatsApp para atención directa...');
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
        form.reset();
      }, 1200);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) return;

  const msgSpan = toast.querySelector('.toast-message');
  if (msgSpan) msgSpan.textContent = message;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}