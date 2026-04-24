


// Liste des projets (mêmes infos que dans script.js)
const competences = [
  "Développement web (Full Stack)",
  "Programmation C++ / C# / C",
  "Programmation Python", 
  "Langage SQL",
  "Programmation Windev",
  "Électronique Arduino / Raspberry",
  "Programmation Full Stack",
  "Active Directory",
  "Maintenance informatique"
];

const projects = [
  {
    name: "infra-active-directory",
    title: "Infrastructure Active Directory",
    banner: "active-directory.png",
    img: "active-directory.png",
    desc: "Mise en place d'une infrastructure Active Directory complète sous Windows Server dans le cadre d'un environnement d'entreprise simulé. Le projet couvre la création du domaine, la structuration des Unités d'Organisation (OU), la gestion centralisée des comptes utilisateurs et la configuration des services réseau associés (DHCP, DNS).",
    vision: "Maîtriser l'administration d'un domaine Windows en entreprise et comprendre comment les GPO permettent de standardiser et sécuriser les postes de travail à grande échelle, compétence clé dans tout environnement professionnel.",
    stack: ["Windows Server", "Active Directory", "GPO", "DHCP", "DNS"],
    features: [
      "Création et configuration d'un domaine Active Directory",
      "Structuration des Unités d'Organisation (OU) par service",
      "Gestion des utilisateurs, groupes et permissions",
      "Déploiement de stratégies de groupe (GPO) : fond d'écran, restrictions, scripts de connexion",
      "Configuration du service DHCP avec plages d'adresses et réservations",
      "Configuration du serveur DNS avec zones de recherche directe et inversée",
      "Jonction de postes clients au domaine",
      "Délégation d'administration et gestion des droits"
    ],
    link: "#"
  },
  {
    name: "segmentation-vlan",
    title: "Segmentation Réseau VLAN",
    banner: "vlan-reseau.png",
    img: "vlan-reseau.png",
    desc: "Conception et mise en œuvre d'une infrastructure réseau segmentée avec deux VLANs sur switches managés Cisco 2960, reliés par un lien trunk. Le projet couvre la création des VLANs (VLAN 10 — réseau 10.0.0.0/24 et VLAN 20 — réseau 172.16.0.0/24), la configuration des ports access pour les postes clients et la mise en place du lien trunk avec trames taggées entre les deux switches.",
    vision: "Comprendre et appliquer la segmentation réseau comme levier de sécurité et de performance, en isolant des périmètres distincts pour limiter la propagation des menaces et maîtriser les flux entre équipements.",
    stack: ["Cisco IOS", "Cisco 2960", "VLAN", "Trunk 802.1Q", "Packet Tracer"],
    features: [
      "Création de deux VLANs : VLAN 10 (10.0.0.0/24) et VLAN 20 (172.16.0.0/24)",
      "Configuration des ports access sur chaque switch pour affecter les postes clients au bon VLAN",
      "Mise en place du lien trunk 802.1Q (Tagged Frames) entre Switch1 et Switch2 via F0/24",
      "Les PCs du même VLAN communiquent entre switches via le trunk",
      "Isolation complète entre VLAN 10 et VLAN 20 — aucun flux direct possible",
      "Tests de connectivité intra-VLAN validés par ping entre PC1↔PC2 et PC3↔PC4",
      "Simulation réalisée sous Cisco Packet Tracer"
    ],
    link: "#"
  },
  {
    name: "firewall-pfsense",
    title: "Pare-feu & Sécurité Réseau",
    banner: "pfsense.png",
    img: "pfsense.png",
    desc: "Déploiement et configuration d'un pare-feu pfSense avec remontée des logs vers Grafana pour la supervision et l'analyse du trafic réseau. Les données pfSense sont collectées et visualisées dans un dashboard Grafana offrant une cartographie GeoIP des IPs bloquées, l'analyse des ports les plus ciblés et le suivi des alertes en temps réel.",
    vision: "Appréhender la sécurité périmétrique en conditions réelles : apprendre à configurer un pare-feu open source et à exploiter ses logs via un outil de visualisation professionnel comme Grafana, pour surveiller, analyser et réagir aux menaces réseau.",
    stack: ["pfSense", "Grafana", "NAT", "GeoIP", "Règles de filtrage"],
    features: [
      "Configuration du pare-feu pfSense : interfaces WAN, LAN, règles de filtrage",
      "Configuration du NAT pour l'accès internet des postes clients",
      "Remontée des logs pfSense vers Grafana pour la centralisation et la visualisation",
      "Dashboard Grafana avec graphiques de trafic réseau en temps réel",
      "Cartographie GeoIP des adresses IP sources bloquées par pays",
      "Analyse des Top Source Ports et Destination Ports les plus ciblés",
      "Suivi des 10 principales sources d'alertes (Top 10 Alert Generators)",
      "Blocage de plages IP et réduction de la surface d'attaque"
    ],
    link: "#"
  },
  {
    name: "nmap-scanner",
    title: "Mini Scanner TCP",
    banner: "nmap-scanner.png",
    img: "nmap-scanner.png",
    desc: "Scanner de ports TCP développé en Python, inspiré de Nmap. L'outil permet de détecter l'état des ports (open, closed, filtered) sur localhost via des connexions TCP parallèles, avec un affichage en tableau console et un export JSON optionnel. Conçu dans une optique pédagogique, il respecte les limites légales en se restreignant à la cible 127.0.0.1.",
    vision: "Explorer les bases du réseau et de la cybersécurité à travers la programmation Python. Ce projet m'a permis de comprendre le fonctionnement des sockets TCP, la gestion de la concurrence avec ThreadPoolExecutor, et les concepts de scan de ports utilisés en sécurité informatique.",
    stack: ["Python", "Socket", "ThreadPoolExecutor", "JSON"],
    features: [
      "Scan TCP connect() pour détecter les ports open / closed / filtered",
      "Scan multi-threadé (ThreadPoolExecutor) pour des performances élevées",
      "Parsing flexible de plages de ports (ex : 22,80,443 ou 1-1024)",
      "Affichage en tableau console avec état, RTT et détail de chaque port",
      "Export optionnel des résultats au format JSON",
      "Résumé final : nombre de ports open, closed, filtered et durée du scan",
      "Gardes-fous pédagogiques : cible limitée à localhost, max 2048 ports, timeout contrôlé",
      "Support IPv4 et IPv6 via getaddrinfo"
    ],
    link: "#"
  },
  {
    name: "mes-outils-scolaires",
    title: "Mes outils Scolaires",
    banner: "mesoutilsscolaires-banner.png",
    img: "mesoutilsscolaires.png",
    desc: "Mes outils Scolaires est un site vitrine interactif destiné à tous les étudiants, réalisé en HTML, CSS et JavaScript. Il te permet de calculer ta moyenne, simuler tes résultats du Bac ou du Brevet, et d’accéder à des outils pratiques pour réussir ta scolarité. L’objectif du projet est de créer une véritable communauté d’entraide autour du partage d’outils et de conseils scolaires, pour progresser ensemble et faciliter le parcours de chacun.",
    vision: "Ce projet vise à rassembler une communauté d’étudiants motivés, qui s’entraident et partagent leurs astuces et outils pour la réussite scolaire. L’idée est de proposer une plateforme moderne, intuitive et gratuite, où chacun peut trouver de l’aide, partager ses propres outils, et avancer plus sereinement dans ses études.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Calcul automatique de moyenne",
      "Simulation des résultats du Bac et du Brevet",
      "Interface simple et interactive",
      "Mode sombre pour plus de confort visuel",
      "Aide à la réussite scolaire",
      "Espace pour le partage d’outils et de conseils",
      "Responsive (affichage adapté sur téléphone et tablette)"
    ],
    link: "#"
  },
  {
    name: "flashworld-website", 
    title: "FlashWorld",
    banner: "flashworld-banner.png",
    img: "flashworld.png",
    desc: "Site vitrine conçu exclusivement pour FlashWorld, un grand serveur GTA RP rassemblant une communauté de plus de 50 000 personnes. Développé en HTML, CSS et JavaScript, à la demande du fondateur de FlashWorld, ce site avait pour objectif de centraliser les différents Discord des entreprises présentes dans le jeu. Il servait à aider les joueurs dans leur recherche de travail virtuel et renforçait l’immersion RP. Ce site a été utilisé activement pendant environ 4 mois par la communauté.",
    vision: "Créer un outil immersif et pratique pour les joueurs de FlashWorld, leur permettant de trouver plus facilement des entreprises et de s’intégrer pleinement dans l’univers du serveur.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Centralisation des Discord des entreprises",
      "Aide à la recherche de travail in-game",
      "Interface claire et immersive",
      "Expérience renforçant le RP",
      "Utilisé pendant 4 mois par la communauté",
      "Responsive (affichage adapté sur téléphone et tablette)"
    ],
    link: "#"
  },

  {
    name: "can-sniffer", 
    title: "CAN Sniffer",
    banner: "can-sniffer-banner.png",
    img: "can-sniffer.png",
    desc: "Développement d’un CAN Sniffer en Python dans le cadre d’un projet de groupe (3 personnes). Le travail sur le CAN Sniffer m’a été confié comme tâche optionnelle après avoir finalisé la base de données et l’API. Cet outil permet de récupérer, afficher et analyser les trames CAN circulant sur un réseau embarqué, afin de faciliter le diagnostic, le débogage et la compréhension des échanges entre modules. Il communique via un port série connecté au module CAN H/F du panneau.",
    vision: "Fournir un outil de surveillance et d’analyse en temps réel des communications CAN, avec une interface simple, ergonomique et personnalisable. L’objectif était d’améliorer l’immersion des étudiants dans l’apprentissage des systèmes embarqués et de leur offrir un outil de diagnostic pratique.",
    stack: ["Python", "PyQt6", "PySerial"],
    features: [
      "Interface graphique moderne et ergonomique (PyQt6)",
      "Affichage en temps réel des trames CAN (ID, longueur, type, données)",
      "Filtres par identifiant et options de personnalisation",
      "Envoi manuel de trames CAN depuis l’interface",
      "Mode clair et mode sombre dynamiques",
      "Connexion et configuration du port série (COM, vitesse, etc.)",
      "Enregistrement des trames reçues dans un fichier texte",
      "Gestion des favoris pour sauvegarder et réutiliser des trames",
      "Affichage en mode brut ou sous forme de tableau"
    ],
    link: "#"
  },

  {
    name: "solar-panel-db-api",
    title: "Base de données & API Panneau Photovoltaïque",
    banner: "solar-panel-banner.jpg",
    img: "solar-panel.png",
    desc: "Conception d’une base de données MySQL centralisant les trames CAN et les mesures d’un panneau photovoltaïque, accompagnée d’une API PHP sécurisée pour l’accès, la gestion et l’analyse des données. Le projet inclut le cryptage des mots de passe et un système de réinitialisation sécurisé.",
    vision: "Fournir une infrastructure fiable et sécurisée pour la collecte et l’exploitation des données du panneau photovoltaïque, facilitant le suivi, l’analyse et l’intégration avec des interfaces web ou applications de supervision.",
    stack: ["MySQL", "PHP", "WampServer", "MySQL Workbench"],
    features: [
      "Centralisation des données CAN et mesures du panneau",
      "API REST sécurisée pour accéder et gérer les données",
      "Gestion des utilisateurs avec cryptage des mots de passe",
      "Réinitialisation sécurisée des mots de passe",
      "Tests et développement en local via WampServer",
      "Conception et gestion graphique avec MySQL Workbench",
      "Support des requêtes GET, POST, PUT, DELETE pour la base",
      "Optimisation de la structure pour performance et lisibilité"
    ],
    link: "#"
  },

  {
    name: "deadly-terror",
    title: "Deadly Terror",
    banner: "deadly-terror-banner.png",
    img: "deadly-terror.png",
    desc: "FPS immersif développé en C# avec Unity3D dans le cadre de ma première année de BTS CIEL. Le joueur affronte des vagues de monstres de plus en plus redoutables et peut utiliser des power-ups dispersés sur la map pour survivre.",
    vision: "Créer une expérience intense et stratégique où chaque décision compte, offrant un gameplay addictif et progressif avec des ennemis variés, des armes diversifiées et des bonus temporaires pour enrichir l’immersion.",
    stack: ["C#", "Unity3D"],
    features: [
      "Vagues de monstres de difficulté croissante avec comportements spécifiques",
      "Arsenal varié allant du pistolet au fusil à pompe, chaque arme avec ses caractéristiques",
      "Power-ups stratégiques (ex : SpeedUp doublant la vitesse du joueur temporairement)",
      "Mode Survie Infini avec progression et augmentation de la difficulté",
      "Interface et contrôles intuitifs pour une prise en main rapide",
      "Gestion des collisions et animations des ennemis et projectiles",
      "Optimisation des performances pour un gameplay fluide sur PC",
      "Graphismes et environnement immersifs via Unity3D"
      
    ],
    link: "#",
  documentationLink: "documentation.pdf",
  gameplayVideoLink: "https://www.youtube.com/embed/k569otaSMp4",
  },
  {
    name: "snoozly",
    title: "Snoozly",
    banner: "snoozly-banner.png",
    img: "snoozly.png",
    desc: "Application mobile développée en C# avec .NET MAUI pour aider à optimiser le sommeil. J’ai initialement créé Snoozly pour résoudre mes propres problèmes de sommeil, et elle est maintenant partagée avec plusieurs amis. L’application calcule les meilleurs moments pour se réveiller ou s’endormir afin de respecter les cycles naturels du corps.",
    vision: "Offrir un outil pratique et personnel qui aide chacun à mieux dormir et se réveiller reposé, en utilisant les cycles naturels du sommeil. L’objectif est de partager cette solution avec mes amis et potentiellement un plus large public.",
    stack: ["C#", ".NET MAUI"],
    features: [
      "Calcul des meilleurs moments pour se réveiller ou s’endormir",
      "Respect des cycles de sommeil pour un réveil plus naturel",
      "Interface mobile intuitive et conviviale",
      "Notifications personnalisables pour les alertes de sommeil",
      "Affichage clair des horaires optimaux",
      "Design moderne et adapté aux plateformes mobiles",
      "Possibilité de suivre l’historique des nuits et cycles"
    ],
    link: "#"
  },

  {
    name: "youtube-downloader",
    title: "YouTube Downloader",
    banner: "youtube-downloader-banner.png",
    img: "youtube-downloader.png",
    desc: "Site web développé en Python et HTML permettant de télécharger des vidéos YouTube en MP4 ou de les convertir en MP3. Ce projet est né de mon envie de créer un outil simple et efficace pour centraliser mes téléchargements, et je l’ai ensuite partagé avec plusieurs amis qui l’utilisent régulièrement.",
    vision: "Proposer une solution rapide et accessible pour convertir et télécharger des vidéos YouTube, tout en offrant une interface claire et intuitive. L’objectif est de simplifier l’accès aux contenus multimédias hors ligne.",
    stack: ["Python", "HTML"],
    features: [
      "Téléchargement des vidéos YouTube en MP4",
      "Conversion en MP3 pour extraire uniquement l’audio",
      "Interface simple et ergonomique",
      "Choix du format de sortie (audio ou vidéo)",
      "Gestion optimisée des conversions pour un gain de temps",
      "Compatibilité avec plusieurs navigateurs",
      "Design minimaliste pour une utilisation intuitive"
    ],
    link: "#"
  },
  {
    name: "password-manager",
    title: "Gestionnaire de mots de passe",
    banner: "password-manager-banner.png",
    img: "password-manager.png",
    desc: "Application développée en C++ avec .NET et WinForms pour stocker et gérer en toute sécurité des mots de passe. L’outil centralise les identifiants, les protège grâce au chiffrement et simplifie leur gestion au quotidien.",
    vision: "Offrir un gestionnaire sécurisé et facile à utiliser pour centraliser tous les mots de passe d’un utilisateur, en garantissant confidentialité et praticité.",
    stack: ["C++", ".NET", "WinForms"],
    features: [
      "Stockage sécurisé des mots de passe avec chiffrement",
      "Interface graphique claire et intuitive via WinForms",
      "Ajout, modification et suppression d’identifiants",
      "Recherche rapide des comptes et mots de passe",
      "Protection des données sensibles contre les accès non autorisés",
      "Possibilité de générer des mots de passe forts aléatoires",
      "Gestion centralisée pour tous les comptes de l’utilisateur",
      "Mode sombre pour plus de confort visuel"
    ],
    link: "#"
  }
  
  
  
  
];

  // Tu peux ajouter d'autres projets ici si besoin

function getProjectByName(name) {
  return projects.find(p => p.name === name);
}

function renderProjectDetail(proj) {
  const container = document.getElementById('project-detail');
  if (!proj) {
    container.innerHTML = '<p>Projet introuvable.</p>';
    return;
  }
  container.innerHTML = `
  ${proj.gameplayVideoLink ? `
    <div style="margin: 2rem 0;">
      <h3>Vidéo de Gameplay</h3>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px;">
        <iframe 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          src="${proj.gameplayVideoLink}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </div>` : ''}
  
  ${proj.documentationLink ? `
    <div style="margin: 1.5rem 0;">
      <h3>Documentation</h3>
      <a href="${proj.documentationLink}" target="_blank" style="display: inline-block; margin-top: 0.5rem; padding: 0.5rem 1rem; background-color: #2d3748; color: white; border-radius: 4px; text-decoration: none;">
        Télécharger la documentation (PDF)
      </a>
    </div>` : ''}
    <div style="background:#222b3a;padding:1rem 0.5rem 1rem 0.5rem;border-radius:1rem;margin-bottom:1.5rem;">
      <div style="color:lime;font-size:1.1rem;"></div>
      <div style="margin-bottom:2.5rem;">
        <img src="${proj.banner || proj.img}" alt="Bannière" style="width:100%; max-width:900px; display:block; margin:auto; border-radius:1.5rem; box-shadow:0 6px 40px rgba(48,86,211,0.10); object-fit:cover;">
      </div>
      <h2 style="margin-bottom:1.2rem;">${proj.title}</h2>
      <div style="margin-bottom:1.1rem;">
        ${proj.stack.map(tech => `<span class="badge-tech">${tech}</span>`).join(' ')}
      </div>
      <p style="font-size:1.13rem; margin-bottom:1.3rem;">${proj.desc}</p>
      <div style="margin-bottom:1.5rem;">
        <strong>Vision communautaire :</strong><br>
        <span style="font-size:1.05rem; color:var(--primary)">${proj.vision || ''}</span>
      </div>
      <div style="margin-bottom:1.2rem;">
        <strong>Fonctionnalités principales :</strong>
        <ul>${proj.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      ${proj.link && proj.link !== "#" ? `<a href="${proj.link}" class="contact-links" target="_blank">Accéder au projet</a>` : ''}
    </div>
  `;
}

// Récupère le paramètre ?name=...
function getProjectNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('name');
}

// Ajoute un minimum de style pour les badges
(function addBadgeStyle() {
  const style = document.createElement('style');
  style.innerHTML = `.badge-tech {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    border-radius: 1rem;
    padding: 0.2em 0.9em;
    margin-right: 0.5em;
    font-size: 0.97em;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 0.2em;
  }`;
  document.head.appendChild(style);
})();

// Affichage au chargement
window.addEventListener('DOMContentLoaded', () => {
  const name = getProjectNameFromURL();
  const container = document.getElementById('project-detail');
  if (!container) {
    document.body.innerHTML += '<div style="color:red;font-size:2rem;">ERREUR : #project-detail introuvable</div>';
    return;
  }
  container.innerHTML = `<div style='color:#7ba5ff;font-size:1.2rem;margin-bottom:1rem;'>Paramètre name reçu : <b>${name}</b></div>`;
  const proj = getProjectByName(name);
  if (!proj) {
    container.innerHTML += '<p style="color:red;font-size:1.5rem;">Projet introuvable : vérifie le paramètre <b>name</b> dans l’URL et dans le JS.</p>';
    return;
  }
  container.innerHTML += '<div style="color:lime;font-size:1.1rem;margin-bottom:1rem;">Projet chargé !</div>';
  renderProjectDetail(proj);
});
