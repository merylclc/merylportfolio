// --- Theme toggle ---
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });
})();

// Exemple de projets (à personnaliser)
const projects = [
  {
    name: "infra-active-directory",
    title: "Infrastructure Active Directory",
    img: "active-directory.png",
    desc: "Mise en place d'une infrastructure Active Directory complète sous Windows Server : création d'un domaine, gestion des utilisateurs et groupes via des Unités d'Organisation (OU), déploiement de stratégies de groupe (GPO) et intégration des services DHCP et DNS.",
    link: "#",
    cat: "reseau"
  },
  {
    name: "segmentation-vlan",
    title: "Segmentation Réseau VLAN",
    img: "vlan-reseau.png",
    desc: "Conception et configuration d'une infrastructure réseau segmentée avec des VLANs sur switches managés. Mise en place du routage inter-VLAN, configuration des ports trunk/access et des ACL pour isoler les différents périmètres (admin, utilisateurs, serveurs).",
    link: "#",
    cat: "reseau"
  },
  {
    name: "firewall-pfsense",
    title: "Pare-feu & Sécurité Réseau",
    img: "pfsense.png",
    desc: "Déploiement et configuration d'un pare-feu pfSense : définition des règles de filtrage par interface, mise en place du NAT, configuration d'un VPN et supervision du trafic réseau en temps réel pour sécuriser un périmètre LAN/WAN.",
    link: "#",
    cat: "reseau"
  },
  {
    name: "nmap-scanner",
    title: "Mini Scanner TCP",
    img: "nmap-scanner.png",
    desc: "Scanner de ports TCP développé en Python, inspiré de Nmap. Permet de détecter les ports ouverts, fermés ou filtrés sur localhost grâce au multi-threading, avec export JSON et affichage en tableau console.",
    link: "#",
    cat: "dev reseau"
  },
  {
    name: "mes-outils-scolaires",
    title: "Mes outils Scolaires",
    img: "mesoutilsscolaires.png",
    desc: "Site vitrine interactif pour étudiants, réalisé en HTML, CSS et JavaScript : calcul de moyenne, simulation de résultats du Bac ou du Brevet, et outils pratiques pour réussir sa scolarité. Design moderne, intuitif et accessible à tous !",
    link: "#",
    cat: "dev"
  },
  {
    name: "flashworld-website",
    title: "FlashWorld",
    img: "flashworld.png",
    desc: "Site vitrine conçu exclusivement pour FlashWorld, un grand serveur GTA RP rassemblant une communauté de plus de 50 000 personnes, réalisé en HTML, CSS et JavaScript",
    link: "#",
    cat: "dev"
  },
  {
    name: "can-sniffer",
    title: "CAN Sniffer",
    img: "can-sniffer.png",
    desc: "Application développée en Python permettant de récupérer, afficher et analyser en temps réel les trames CAN via une interface graphique conçue avec PyQt6.",
    link: "#",
    cat: "dev reseau"
  },
  {
    name: "solar-panel-db-api",
    title: "Base de données & API Panneau Photovoltaïque",
    img: "solar-panel.png",
    desc: "Conception d’une base de données MySQL centralisant les trames CAN et les mesures d’un panneau photovoltaïque, accompagnée d’une API PHP sécurisée pour l’accès, la gestion et l’analyse des données.",
    link: "#",
    cat: "dev reseau"
  },
  {
    name: "deadly-terror",
    title: "Deadly Terror",
    img: "deadlyterror.png",
    desc: "Jeu vidéo développé en C# avec Unity3D dans le cadre de ma première année de BTS CIEL. Le joueur affronte des vagues de monstres de plus en plus redoutables !",
    link: "#",
    cat: "dev"
  },
  {
    name: "snoozly",
    title: "Snoozly",
    img: "snoozly.png",
    desc: "Application mobile développée en C# avec .NET MAUI pour aider les utilisateurs à optimiser leur sommeil. Snoozly calcule les meilleurs moments pour se réveiller ou s’endormir afin de respecter les cycles de sommeil et se réveiller plus reposé.",
    link: "#",
    cat: "dev"
  },
  {
    name: "youtube-downloader",
    title: "YouTube Downloader",
    img: "youtube-downloader.png",
    desc: "Site web développé en Python et HTML permettant de télécharger des vidéos YouTube en MP4 ou de les convertir en MP3. L’objectif était de créer un outil simple et rapide d’utilisation, avec une interface accessible et une gestion optimisée des conversions.",
    link: "#",
    cat: "dev"
  },
  {
    name: "password-manager",
    title: "Gestionnaire de mots de passe",
    img: "password-manager.png",
    desc: "Application développée en C++ pour stocker et gérer en toute sécurité des mots de passe. Elle permet de centraliser les identifiants, de les protéger grâce au chiffrement et de simplifier leur gestion au quotidien. L’objectif était de créer un outil personnel fiable, sécurisé et pratique.",
    link: "#",
    cat: "dev"
  }
];

function displayProjects() {
  const gallery = document.getElementById('projects-gallery');
  gallery.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.dataset.cat = project.cat || 'dev';
    const projectLink = project.name ? `projet.html?name=${project.name}` : (project.link || "#");
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="${projectLink}">Voir le projet</a>
    `;
    gallery.appendChild(card);
  });
}

displayProjects();

// Animation d'apparition au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

// Ajoute fade-in à toutes les sections principales
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.presentation-container, .project-card, section, header, footer').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// Animation de la barre de navigation au défilement
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const heroSection = document.querySelector('.hero-section');
  let lastScroll = 0;
  let ticking = false;

  function updateHeaderVisibility() {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 20) {  // Si on a défilé de 20px
      // Faire apparaître la barre
      header.classList.add('visible');
    } else {
      // Cacher la barre si on est tout en haut
      header.classList.remove('visible');
    }
    


    lastScroll = scrollPosition;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderVisibility);
      ticking = true;
    }
  });

  // Vérifier la position au chargement
  updateHeaderVisibility();
});

// --- Animation de frappe (hero tagline) ---
(function() {
  const phrases = [
    "Cybersécurité & Réseau & Programmation",
    "L'avenir est numérique"
  ];
  const el = document.querySelector('.typing-text');
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const SPEED_TYPE   = 55;
  const SPEED_DELETE = 30;
  const PAUSE_FULL   = 2200;
  const PAUSE_EMPTY  = 400;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE_FULL);
        return;
      }
      setTimeout(tick, SPEED_TYPE);
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_EMPTY);
        return;
      }
      setTimeout(tick, SPEED_DELETE);
    }
  }

  el.textContent = '';
  tick();
})();

// --- Filtre compétences & projets ---
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;

      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Compétences
      document.querySelectorAll('.skills-list li').forEach(function(li) {
        const cat = li.dataset.cat || '';
        li.classList.toggle('filter-hidden', filter !== 'all' && !cat.includes(filter));
      });

      // Projets
      document.querySelectorAll('.project-card').forEach(function(card) {
        const cat = card.dataset.cat || '';
        card.classList.toggle('filter-hidden', filter !== 'all' && !cat.includes(filter));
      });

      // Outils
      document.querySelectorAll('.tool-card').forEach(function(card) {
        const cat = card.dataset.cat || '';
        card.classList.toggle('filter-hidden', filter !== 'all' && !cat.includes(filter));
      });
    });
  });
});

// --- Mobile nav toggle (hamburger) ---
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');

  if (!navToggle || !nav) return;

  function closeNav() {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Ouvrir le menu');
  }

  navToggle.addEventListener('click', function(e) {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-label', !expanded ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('open');
  });

  // Fermer le menu quand on clique sur un lien
  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeNav);
  });

  // Fermer le menu si on clique en dehors
  document.addEventListener('click', function(e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Ouvrir le menu');
    }
  });

  // Fermer le menu au redimensionnement si on dépasse le breakpoint mobile
  window.addEventListener('resize', function() {
    if (window.innerWidth > 600 && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Ouvrir le menu');
    }
  });
});