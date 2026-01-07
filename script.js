// Exemple de projets (à personnaliser)
const projects = [
  {
    name: "mes-outils-scolaires",
    title: "Mes outils Scolaires",
    img: "mesoutilsscolaires.png",
    desc: "Site vitrine interactif pour étudiants, réalisé en HTML, CSS et JavaScript : calcul de moyenne, simulation de résultats du Bac ou du Brevet, et outils pratiques pour réussir sa scolarité. Design moderne, intuitif et accessible à tous !",
    link: "#"
  },
  {
    name: "flashworld-website", 
    title: "FlashWorld",
    img: "flashworld.png",
    desc: "Site vitrine conçu exclusivement pour FlashWorld, un grand serveur GTA RP rassemblant une communauté de plus de 50 000 personnes, réalisé en HTML, CSS et JavaScript",
    link: "#"
  },
  {
    name: "can-sniffer",
    title: "CAN Sniffer",
    img: "can-sniffer.png",
    desc: "Application développée en Python permettant de récupérer, afficher et analyser en temps réel les trames CAN via une interface graphique conçue avec PyQt6.",
    link: "#"
  },
  {
    name: "solar-panel-db-api",
    title: "Base de données & API Panneau Photovoltaïque",
    img: "solar-panel.png",
    desc: "Conception d’une base de données MySQL centralisant les trames CAN et les mesures d’un panneau photovoltaïque, accompagnée d’une API PHP sécurisée pour l’accès, la gestion et l’analyse des données.",
    link: "#"
  },
  {
    name: "deadly-terror",
    title: "Deadly Terror",
    img: "deadlyterror.png",
    desc: "Jeu vidéo développé en C# avec Unity3D dans le cadre de ma première année de BTS CIEL. Le joueur affronte des vagues de monstres de plus en plus redoutables !",
    link: "#"
  },

  {
    name: "snoozly",
    title: "Snoozly",
    img: "snoozly.png",
    desc: "Application mobile développée en C# avec .NET MAUI pour aider les utilisateurs à optimiser leur sommeil. Snoozly calcule les meilleurs moments pour se réveiller ou s’endormir afin de respecter les cycles de sommeil et se réveiller plus reposé.",
    link: "#"
  },
  {
    name: "youtube-downloader",
    title: "YouTube Downloader",
    img: "youtube-downloader.png",
    desc: "Site web développé en Python et HTML permettant de télécharger des vidéos YouTube en MP4 ou de les convertir en MP3. L’objectif était de créer un outil simple et rapide d’utilisation, avec une interface accessible et une gestion optimisée des conversions.",
    link: "#"
  },
  {
    name: "password-manager",
    title: "Gestionnaire de mots de passe",
    img: "password-manager.png",
    desc: "Application développée en C++ pour stocker et gérer en toute sécurité des mots de passe. Elle permet de centraliser les identifiants, de les protéger grâce au chiffrement et de simplifier leur gestion au quotidien. L’objectif était de créer un outil personnel fiable, sécurisé et pratique.",
    link: "#"
  }
  

];

function displayProjects() {
  const gallery = document.getElementById('projects-gallery');
  gallery.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    // Génère le lien projet.html dynamiquement si 'name' existe
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

// --- Mobile nav toggle (hamburger) ---
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');

  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', function(e) {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-label', !expanded ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('open');
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