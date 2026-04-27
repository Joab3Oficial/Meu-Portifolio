// ============ NAVBAR SCROLL ============
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ============ MENU MOBILE ============
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============ ACTIVE LINK ON SCROLL ============
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  navItems.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ============ TYPING EFFECT ============
const roles = ['Web Designer', 'Desenvolvedor Front-end', 'Apaixonado por código', 'HTML • CSS • JavaScript'];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
  }
  let speed = isDeleting ? 50 : 100;
  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1800; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }
  setTimeout(type, speed);
}
type();

// ============ REVEAL ON SCROLL ============
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animar barras de progresso
      entry.target.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = bar.dataset.progress + '%';
      });

      // Animar contadores de estatísticas
      entry.target.querySelectorAll('.stat-number').forEach(stat => {
        if (stat.dataset.animated) return;
        stat.dataset.animated = 'true';
        const target = parseInt(stat.dataset.target);
        const duration = 1500;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          stat.textContent = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(animate);
          else stat.textContent = target;
        };
        requestAnimationFrame(animate);
      });
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ============ TOAST ============
const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ============ FORMULÁRIO DE CONTATO ============
const form = document.getElementById('form-contato');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    showToast('Preencha todos os campos!');
    return;
  }

  // Monta a mensagem para o WhatsApp do Joabe
  const texto = `Olá Joabe! Meu nome é ${nome} (${email}).\n\n${mensagem}`;
  const url = `https://wa.me/5577991889227?text=${encodeURIComponent(texto)}`;

  showToast('Abrindo WhatsApp... Obrigado pelo contato!');
  setTimeout(() => window.open(url, '_blank'), 800);
  form.reset();
});

// ============ ANO DINÂMICO NO FOOTER ============
const yearEl = document.querySelector('.footer p');
if (yearEl) {
  const currentYear = new Date().getFullYear();
  yearEl.innerHTML = yearEl.innerHTML.replace('2026', currentYear);
}
