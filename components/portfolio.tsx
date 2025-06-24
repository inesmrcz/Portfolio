"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Smartphone,
  Database,
  Star,
  Zap,
  Heart,
  Coffee,
  Building,
  Users,
  Target,
  Award,
  BookOpen,
  Briefcase,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  detailedDescription?: string
  context: string
  technologies: string[]
  competences: string[]
  github?: string
  demo?: string
  image: string
  gradient: string
}

interface Competence {
  id: number
  title: string
  description: string
  icon: LucideIcon
  color: string
  projets: string[]
}

interface ContactInfo {
  icon: LucideIcon
  text: string
  color: string
}

interface SocialLink {
  icon: LucideIcon
  href: string
  color: string
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const competences: Competence[] = [
    {
      id: 1,
      title: "Réaliser un développement d'application",
      description: "Conception et développement d'applications web et mobiles",
      icon: Code,
      color: "from-blue-500 to-indigo-600",
      projets: ["Application Vélib", "Calculatrice Java", "Plateforme DevOps"],
    },
    {
      id: 2,
      title: "Optimiser des applications informatiques",
      description: "Amélioration des performances et optimisation du code",
      icon: Zap,
      color: "from-green-500 to-emerald-600",
      projets: ["Application Vélib", "Algorithmes Python"],
    },
    {
      id: 3,
      title: "Administrer des systèmes informatiques communicants",
      description: "Gestion et administration de systèmes et réseaux",
      icon: Database,
      color: "from-purple-500 to-violet-600",
      projets: ["Plateforme DevOps", "Application Vélib"],
    },
    {
      id: 4,
      title: "Gérer des données de l'information",
      description: "Conception et gestion de bases de données",
      icon: Smartphone,
      color: "from-orange-500 to-red-600",
      projets: ["Plateforme DevOps", "Application Vélib"],
    },
    {
      id: 5,
      title: "Conduire un projet",
      description: "Gestion de projet et méthodologies agiles",
      icon: Target,
      color: "from-cyan-500 to-blue-600",
      projets: ["Stage IO.SYS.2.21", "Site web client", "Application Vélib"],
    },
    {
      id: 6,
      title: "Travailler dans une équipe informatique",
      description: "Collaboration et travail en équipe",
      icon: Users,
      color: "from-pink-500 to-rose-600",
      projets: ["Stage IO.SYS.2.21", "Tous les projets en binôme"],
    },
  ]

  const projects: Project[] = [
    {
      title: "Application web de suivi de vélos en temps réel",
      description:
        "Développement d'une application web utilisant l'API Open Paris pour permettre la réservation de vélos (type Vélib).",
      detailedDescription: `Notre projet le plus ambitieux jusqu'à présent ! Créer en équipe une application type Vélib avec des données temps réel, ça c'est du concret qui sert vraiment aux gens.

Le défi technique : Faire dialoguer l'API Open Paris avec notre app pour afficher en live les vélos disponibles. Entre Django pour le backend, ReactJS pour une interface fluide, Docker pour le déploiement et Redis pour booster les performances... on a eu l'impression de jongler avec tout l'écosystème du développement moderne !

Ce qui m'a vraiment marquée ? Découvrir le TDD (Test-Driven Development) et l'appliquer en équipe. Écrire les tests avant le code, ça semblait bizarre au début, mais quelle révélation ! Notre code est devenu bien plus fiable et maintenable. Plus jamais de "ça marchait sur ma machine" ! 😅

Ma plus grande fierté : Maîtriser l'architecture modulaire du projet et apprendre à coordonner notre travail. Comprendre comment chaque pièce s'emboîte, gérer les tâches asynchrones avec Celery, tout en synchronisant nos efforts d'équipe... J'ai vraiment eu l'impression de passer au niveau supérieur en tant que développeuse.

Cette SAÉ nous a prouvé qu'on peut mener un projet full-stack complexe de A à Z, avec des technologies professionnelles. Un vrai boost de confiance ! 🚀`,
      context: "Projet de groupe - SAÉ S4",
      technologies: ["Django", "ReactJS", "Docker", "Celery", "Redis", "API REST", "TDD"],
      competences: [
        "Réaliser un développement",
        "Optimiser des applications",
        "Administrer des systèmes",
        "Gérer des données",
        "Conduire un projet",
        "Travailler en équipe",
      ],
      github: "https://github.com/inesmrcz/SAE-S301-Team-New-York",
      demo: "/develo.mp4",
      image: "/develogo.png?height=5&width=10",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Plateforme DevOps - Stage IO.SYS.2.21",
      description:
        "Développement d'un référentiel backend pour une plateforme de déploiement automatisé d'applicatifs.",
      detailedDescription: `J'ai eu la chance de travailler sur un projet concret : développer un référentiel backend pour une plateforme DevOps. Ce qui m'a le plus marquée ? L'autonomie qui m'a été accordée - j'ai pu avancer sur le projet à 80% seule, ce qui m'a permis de vraiment prendre confiance en mes capacités.

Le défi technique était de taille : concevoir une API REST complète avec PHP et Symfony, gérer une base de données MariaDB, et tout documenter proprement. Chaque étape m'a appris quelque chose de nouveau et m'a confortée dans mon choix de carrière.

L'encadrement était parfait : mon tuteur m'a fait confiance tout en restant disponible quand j'avais besoin de conseils. Cette expérience m'a prouvé que je peux mener un projet technique de bout en bout avec rigueur et autonomie.`,
      context: "Stage professionnel - 10 semaines",
      technologies: ["PHP", "Symfony", "MariaDB", "API REST"],
      competences: [
        "Réaliser un développement",
        "Administrer des systèmes",
        "Gérer des données",
        "Conduire un projet",
        "Travailler en équipe",
      ],
      image: "/ingedevops.jpg?height=200&width=300",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Recueil de besoins - Site web client",
      description:
        "Conception d'un site web en plusieurs phases, en partant d'un cahier des charges fourni par le client. Travail en itérations, avec retours fréquents du client et ajustements pour répondre à ses besoins spécifiques.",
      detailedDescription: `Ce projet m'a ouvert les yeux sur un aspect essentiel du développement : comprendre ce que veut vraiment le client ! Parce qu'entre ce qu'il dit, ce qu'il pense vouloir et ce dont il a réellement besoin... il y a parfois un monde !

J'ai découvert l'art délicat de poser les bonnes questions, d'écouter entre les lignes et de transformer des idées floues en spécifications techniques précises. C'est un peu comme être traductrice entre deux langues : le "client" et le "développeur".

Le plus enrichissant ? Comprendre qu'un bon logiciel commence par une bonne écoute. J'ai appris à structurer chaque étape du cycle de développement en gardant toujours l'utilisateur final en tête.

Ce que je veux perfectionner : Mon écoute active (parce qu'on peut toujours mieux écouter !) et la méthode Agile pour m'adapter aux changements d'avis inévitables des clients. 😉`,
      context: "SAÉ S1.05 - Projet individuel",
      technologies: ["Wix", "Design web", "Gestion de projet", "Relation client"],
      competences: ["Conduire un projet"],
      demo: "https://inesmarcisz.wixsite.com/jouez--encore-et-tou",
      image: "/entretien.jpg?height=50&width=100",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Implémentation d'un besoin client en Python",
      description:
        "Conception de fonctions pour calculer les distances entre villes et optimisation des parcours via des algorithmes d'inversion.",
      detailedDescription: `Ce projet a été mon premier vrai contact avec la réalité du développement ! L'objectif ? Apprendre à transformer les besoins d'un client en solution concrète.

Mon défi le plus marquant : optimiser la tournée du Père Noël ! Derrière ce projet ludique se cachait un vrai casse-tête algorithmique. J'ai dû prendre en compte les différentes contraintes et créer un algorithme qui trouve le chemin le plus efficace. Voir mon code fonctionner et calculer une tournée optimisée, c'était magique !

Cette expérience m'a appris l'importance de bien comprendre le besoin avant de coder, et surtout de tester rigoureusement mes solutions pour m'assurer qu'elles répondent vraiment aux attentes.

Mes prochains objectifs : Creuser l'optimisation algorithmique (j'ai adoré cette partie !) et découvrir les méthodes agiles pour livrer des projets encore plus efficacement. 🚀`,
      context: "SAÉ S1.01 - Projet en binôme",
      technologies: ["Python", "Algorithmes", "Optimisation"],
      competences: ["Réaliser un développement", "Optimiser des applications", "Travailler en équipe"],
      github: "https://github.com/inesmrcz/SAE-S101---Impl-mentation-d-un-besoin-client",
      image: "/python.jpg?height=200&width=300",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Application calculatrice en Java",
      description:
        "Développement d'une calculatrice avec modélisation UML effectuant des opérations sur des nombres entiers.",
      detailedDescription: `Mon premier vrai plongeon dans le backend Java ! Ce projet m'a fait découvrir les joies (et parfois les galères 😅) de la logique pure et dure.

L'objectif semblait simple : créer une calculatrice. Mais derrière cette apparente simplicité se cachait tout un univers à explorer ! Comment gérer les priorités d'opérations ? Comment traiter les erreurs de calcul ? Comment structurer proprement mon code pour qu'il soit maintenable ?

J'ai adoré cette partie "cerveau" du développement où tout se passe en coulisses : créer des algorithmes robustes, gérer les exceptions, optimiser les performances... C'est là que j'ai vraiment compris que programmer, c'est comme construire une machine parfaitement huilée, invisible mais essentielle.

Mon plus grand apprentissage : L'importance de tester, re-tester et encore tester ! Parce qu'une calculatrice qui fait 2+2=5, ça pose problème... 🤓`,
      context: "SAÉ S2.01 - Projet en binôme",
      technologies: ["Java", "UML", "POO"],
      competences: ["Réaliser un développement", "Travailler en équipe"],
      github: "https://github.com/inesmrcz/SAE-S201",
      image: "/calculatrice.png?height=50&width=75",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Site Portfolio Personnel",
      description:
        "Conception et développement de ce portfolio avec Next.js et TypeScript pour présenter mon parcours et mes compétences.",
      context: "Projet personnel - BUT 2",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      competences: ["Réaliser un développement", "Conduire un projet"],
      github: "#",
      demo: "#",
      image: "/portfolio.webp?height=200&width=300",
      gradient: "from-cyan-500/20 to-blue-600/20",
    },
  ]

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const navigationSections: string[] = ["accueil", "presentation", "competences", "experience", "talents", "contact"]

  const contactInfo: ContactInfo[] = [
    { icon: Mail, text: "inesmarcisz@gmail.com", color: "from-blue-500 to-cyan-500" },
    { icon: Phone, text: "07 55 61 20 62", color: "from-indigo-500 to-blue-500" },
    { icon: MapPin, text: "Garges-Lès-Gonesse, France", color: "from-cyan-500 to-blue-500" },
  ]

  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/inesmrcz", color: "hover:bg-gray-100" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ines-marcisz/", color: "hover:bg-blue-50" },
    { icon: Mail, href: "mailto:inesmarcisz@gmail.com", color: "hover:bg-cyan-50" },
  ]

  const scrollToProject = (projectTitle: string): void => {
    const projectElements = document.querySelectorAll("[data-project-title]")
    const targetElement = Array.from(projectElements).find(
      (el) => el.getAttribute("data-project-title") === projectTitle,
    )
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed w-6 h-6 bg-blue-500/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-blue-100/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 group"
                >
                  {section.charAt(0).toUpperCase() +
                    section
                      .slice(1)
                      .replace("presentation", "Présentation")
                      .replace("competences", "Compétences")
                      .replace("experience", "Expérience")
                      .replace("talents", "Talents")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-lg mb-4 border border-blue-100/50">
              {navigationSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Étudiante BUT Informatique - 2ème année, en recherche d'alternance
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Bonjour, je suis{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    Inès Marcisz
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light">
                  Future développeuse passionnée par la{" "}
                  <span className="text-blue-600 font-medium">création d'applications</span>
                </p>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                  Bienvenue dans mon univers numérique ! J'ai 19 ans et je suis passionnée par l'informatique depuis que
                  j'ai découvert ce domaine fascinant. Découvrez mon parcours, mes projets et ma vision de
                  l'informatique.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("competences")}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Découvrir mes compétences
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                >
                  <a href="/Ines_Marcisz_cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger CV
                  </a>
                </Button>
              </div>

              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center relative -mt-20">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce" />
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full opacity-30 animate-bounce delay-1000" />
                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-25 animate-pulse" />

                {/* Main profile image */}
                <div className="relative w-56 h-56 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20" />
                  <Image
                    src="/image2.jpg"
                    alt="Photo de profil"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 right-8 bg-white rounded-full p-3 shadow-lg animate-float">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="absolute bottom-8 -left-4 bg-white rounded-full p-3 shadow-lg animate-float delay-1000">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation personnelle */}
      <section id="presentation" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Coffee className="w-4 h-4 mr-2" />
              Présentation personnelle
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
              Mon parcours et mes ambitions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De BUT 1 à BUT 3 : évolution, découvertes et perspectives d'avenir
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <BookOpen className="mr-3 h-5 w-5 text-blue-600" />
                  Mon parcours
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Actuellement, je poursuis un BUT Informatique avec une spécialisation en Réalisation d'applications.
                    Ce qui m'a menée ici ? Un baccalauréat général où j'ai choisi les spécialités Mathématiques et NSI
                    (Numérique et Sciences Informatiques).
                  </p>
                  <p className="leading-relaxed">
                    Ces matières ont été une véritable révélation - elles m'ont non seulement permis de développer mes
                    premières compétences techniques, mais aussi de tomber amoureuse de la programmation et de la
                    résolution de problèmes.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Sparkles className="mr-3 h-5 w-5 text-purple-600" />
                  Pourquoi l'informatique ?
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Mon coup de cœur pour l'informatique a commencé au lycée avec ma spécialité NSI. Dès mes premières
                    lignes de code, j'ai su que j'avais trouvé ma voie ! Cette sensation magique de voir mes idées
                    prendre vie à travers la programmation.
                  </p>
                  <p className="leading-relaxed">
                    Ce qui me fascine le plus ? L'évolution constante. Chaque jour apporte son lot de nouvelles
                    technologies, de frameworks révolutionnaires ou de langages innovants. Dans ce métier, je sais que
                    je passerai ma carrière à apprendre et à me réinventer.
                  </p>
                  <p className="leading-relaxed">
                    Mais ce qui me motive vraiment, c'est le pouvoir de création. Résoudre des problèmes complexes en
                    concevant des solutions élégantes, c'est comme résoudre un puzzle géant où chaque pièce compte.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Target className="mr-3 h-5 w-5 text-green-600" />
                  Mes rêves professionnels
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Mon objectif :</strong> Devenir développeuse d'applications mobiles ou ingénieure logiciel.
                    J'ai une vraie fascination pour la création d'applications qui simplifient la vie des utilisateurs.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Mon plan :</strong> Décrocher mon BUT puis me spécialiser en "Informatique et applications"
                    dans une école comme l'ESIEE Paris. J'ai déjà commencé à explorer cette voie et je suis vraiment
                    motivée par les perspectives qu'elle offre.
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Briefcase className="mr-3 h-5 w-5 text-orange-600" />
                  L'aventure de l'alternance
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    En ce moment, je suis en pleine recherche d'un contrat d'apprentissage pour septembre 2025. Ce
                    serait un contrat de 12 mois avec un rythme de 2 semaines en entreprise et 2 semaines en formation -
                    le parfait équilibre entre théorie et pratique !
                  </p>
                  <p className="leading-relaxed">
                    J'avoue que cette recherche, je l'aborde avec une détermination particulière. L'année dernière,
                    j'avais déjà tenté de décrocher une alternance pour septembre 2024 sans succès, et cette expérience
                    m'a appris l'importance de s'y prendre tôt et de multiplier les approches. Cette fois, je suis mieux
                    préparée et plus motivée que jamais !
                  </p>
                  <p className="leading-relaxed">
                    Pour moi, cette alternance représente bien plus qu'un simple stage. C'est l'opportunité de mettre en
                    application tout ce que j'apprends à l'école, de découvrir le monde professionnel de l'intérieur, et
                    surtout de vivre une vraie expérience dans le domaine qui me passionne. J'ai hâte de relever de
                    nouveaux défis et d'apprendre aux côtés de professionnels expérimentés.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Mon évolution du BUT 1 au BUT 3</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700">BUT 1 - Découverte</h4>
                    <p className="text-sm">
                      Acquisition des bases de la programmation et découverte de l'écosystème informatique. Première
                      approche des bonnes pratiques de développement.
                    </p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-indigo-700">BUT 2 - Approfondissement & Stage</h4>
                    <p className="text-sm">
                      Spécialisation en développement d'applications. Premier stage professionnel chez IO.SYS.2.21.
                      Prise de conscience de l'importance du travail en équipe et confirmation de mon choix de
                      formation.
                    </p>
                  </div>
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-semibold text-cyan-700">BUT 3 - Professionnalisation</h4>
                    <p className="text-sm">
                      Recherche d'alternance pour une immersion complète dans le monde professionnel. Développement de
                      l'autonomie et acquisition d'un niveau assez solide pour pouvoir poursuivre mes études sereinement.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Ma quête d'apprentissage continue</h3>
                <p className="text-gray-700 leading-relaxed">
                  Au-delà des cours, je cultive ma passion en explorant différentes facettes de l'informatique par
                  moi-même. Je travaille constamment sur mes soft skills, notamment ma capacité à collaborer en équipe
                  et mon adaptabilité face aux situations nouvelles. L'informatique évolue si vite que rester curieuse
                  et flexible me semble essentiel pour réussir dans ce domaine !
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bilan des compétences */}
      <section id="competences" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Bilan des compétences
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
              Les 6 compétences du BUT Informatique
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Développement et maîtrise des compétences à travers les projets SAÉ
            </p>
          </div>

          {/* Compétences techniques et savoir-être */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <Code className="mr-3 h-5 w-5 text-blue-600" />
                Compétences techniques
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "PHP",
                  "Symfony",
                  "HTML/CSS",
                  "Tailwind CSS",
                  "Git/GitHub",
                  "Docker",
                  "API REST",
                  "MariaDB",
                  "MongoDB",
                  "UML",
                ].map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <Heart className="mr-3 h-5 w-5 text-pink-600" />
                Savoir-être
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Curiosité",
                  "Persévérance",
                  "Autonomie",
                  "Travail d'équipe",
                  "Communication",
                  "Adaptabilité",
                  "Rigueur",
                  "Créativité",
                  "Résolution de problèmes",
                ].map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-pink-200 text-pink-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Compétences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {competences.map((competence) => {
              const Icon = competence.icon
              return (
                <Card
                  key={competence.id}
                  className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${competence.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {competence.id}. {competence.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{competence.description}</p>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-gray-500">Projets mobilisant cette compétence :</p>
                        {competence.projets.map((projet, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs bg-blue-50 text-blue-700 mr-1 mb-1 cursor-pointer hover:bg-blue-100 transition-colors"
                            onClick={() => scrollToProject(projet)}
                          >
                            {projet}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Projets SAÉ */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Mes projets SAÉ et réalisations</h3>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  data-project-title={project.title}
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="relative overflow-hidden lg:col-span-1">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-gray-800 group-hover:text-blue-700 transition-colors text-xl">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {project.context}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>

                      {project.detailedDescription && (
                        <div className="mb-6 p-4 bg-blue-50/50 rounded-lg border-l-4 border-blue-500">
                          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                            {project.detailedDescription}
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Technologies utilisées :</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Compétences mobilisées :</p>
                          <div className="flex flex-wrap gap-1">
                            {project.competences.map((comp, compIndex) => (
                              <Badge
                                key={compIndex}
                                variant="outline"
                                className="text-xs border-green-200 text-green-700"
                              >
                                {comp}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {(project.github || project.demo) && (
                          <div className="flex space-x-3 pt-2">
                            {project.github && (
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                              >
                                <Link href={project.github}>
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </Link>
                              </Button>
                            )}
                            {project.demo && (
                              <Button
                                size="sm"
                                asChild
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300"
                              >
                                <Link href={project.demo}>
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Demo
                                </Link>
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Découverte du monde professionnel */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <Building className="w-4 h-4 mr-2" />
              La découverte du monde professionnel
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
              Mon expérience chez IO.SYS.2.21
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stage de 10 semaines - Développeur Backend</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Briefcase className="mr-3 h-5 w-5 text-purple-600" />
                  Mon expérience professionnelle la plus récente
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-700">Développeur Backend</h4>
                    <p className="text-sm text-gray-600">Stage chez IO.SYS.2.21 - 10 semaines</p>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      • Analyse des besoins et rédaction des spécifications fonctionnelles pour un prototype de
                      plateforme de déploiement automatisé d'applicatifs (type DevOps)
                    </p>
                    <p>
                      • Conception et développement d'un référentiel backend centralisant les informations clients, le
                      catalogue logiciel et la gestion des licences
                    </p>
                    <p>
                      • Implémentation d'API REST sous PHP avec Symfony et MariaDB, de l'intégration à la
                      documentation technique
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["PHP", "Symfony", "MariaDB", "API REST", "DevOps"].map((tech, index) => (
                      <Badge key={index} className="bg-purple-50 text-purple-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Découvertes personnelles</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Autonomie :</strong> J'ai découvert ma capacité à gérer un projet de bout en bout, de
                    l'analyse des besoins à la documentation technique.
                  </p>
                  <p>
                    <strong>Adaptabilité :</strong> L'apprentissage rapide de nouvelles technologies (Symfony, MariaDB)
                    m'a confirmé ma facilité d'adaptation.
                  </p>
                  <p>
                    <strong>Rigueur :</strong> La rédaction de spécifications fonctionnelles et du code m'a confimé l'importance de
                    la précision et de la documentation.
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Environnement de travail</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Aspects marquants :</strong> La liberté d'initiative accordée aux stagiaires, les réunions
                    techniques quotidiennes et l'approche agile des projets.
                  </p>
                  <p>
                    <strong>Méthodes de travail :</strong> Découverte des méthodologies agiles, utilisation d'outils
                    collaboratifs et importance de la communication technique.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Travail en équipe</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Communication :</strong> Apprentissage de la communication technique, présentation de mes
                    avancées et demande d'aide quand nécessaire.
                  </p>
                  <p>
                    <strong>Partage de connaissances :</strong> Participation active aux sessions de partage technique
                    et contribution à la documentation d'équipe.
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Bilan de stage</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Ce stage a été un véritable déclic pour moi ! Plonger dans la gestion de données, créer ma première
                    API, concevoir une base de données... J'ai enfin pu entrer dans le vif du sujet sur un projet
                    concret et ça m'a passionnée.
                  </p>
                  <p>
                    Au-delà de la technique, j'ai découvert l'importance cruciale de la planification et de l'analyse
                    des besoins. Une belle leçon qui me servira toute ma carrière !
                  </p>
                  <p>
                    Un encadrement en or : Monsieur Souvannavong a été le tuteur idéal. Bienveillant, pédagogue, il m'a
                    fait confiance en me laissant une grande autonomie tout en restant disponible quand j'en avais
                    besoin. Le fait qu'il souhaite continuer à travailler avec moi ? C'est la plus belle des récompenses
                    et ça booste ma confiance ! 🚀
                  </p>
                  <p>
                    Cette expérience m'a prouvé que je peux surmonter les défis techniques les plus coriaces avec de la
                    persévérance et de l'adaptabilité. Chaque obstacle franchi m'a rendue plus forte et plus sûre de mes
                    compétences.
                  </p>
                  <p>
                    <strong>Le verdict ?</strong> Ce stage a confirmé mon amour pour le développement web et m'a donné
                    une base solide pour la suite. J'ai hâte de continuer sur cette lancée !
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Talents */}
      <section id="talents" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-orange-700 text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Ma plus belle réalisation !
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-orange-800 bg-clip-text text-transparent">
              Ce dont je suis le plus fière
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ma réalisation la plus aboutie</p>
          </div>

          <div className="flex justify-center">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group max-w-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mon Portfolio Personnel</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ce portfolio représente l'aboutissement de mon parcours jusqu'à présent. Conçu par mes soins avec Next.js et TypeScript, il reflète non seulement mes compétences
                  techniques mais aussi ma capacité à créer une expérience utilisateur soignée et professionnelle.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Plus qu'un simple site web, c'est le reflet de ma personnalité, de ma passion pour le développement et
                  de ma vision de l'informatique. Chaque détail a été pensé pour offrir une navigation fluide et
                  agréable, tout en présentant mes projets et compétences de manière claire et attractive.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {["Next.js", "TypeScript", "Tailwind CSS", "React", "Design UX/UI"].map((tech, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
        
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ma philosophie de développement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Je crois fermement que la technologie doit servir l'humain. Chaque ligne de code que j'écris a pour
                objectif de résoudre un problème concret et d'améliorer l'expérience utilisateur. Mon approche combine
                rigueur technique, créativité et empathie pour créer des solutions qui ont un impact positif réel."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 text-sm font-medium mb-4">
              <Mail className="w-4 h-4 mr-2" />
              Contactez-moi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-cyan-800 bg-clip-text text-transparent">
              Échangeons sur vos projets
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Intéressé(e) par mon profil pour une alternance ? Discutons de vos besoins et de mes ambitions !
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Informations de contact</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon
                    return (
                      <div key={index} className="flex items-center group">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {contact.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Suivez-moi</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        className={`p-3 rounded-xl bg-white shadow-md ${social.color} transition-all duration-300 transform hover:scale-110`}
                      >
                        <Icon className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium mb-2 text-gray-700">
                      Nom
                    </label>
                    <Input
                      id="nom"
                      placeholder="Votre nom"
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium mb-2 text-gray-700">
                    Sujet
                  </label>
                  <Input
                    id="sujet"
                    placeholder="Sujet de votre message"
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    rows={5}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Merci de votre attention !
              </h3>
              <p className="text-blue-200 mt-2">Prête à contribuer à vos projets innovants</p>
            </div>
            <div className="flex justify-center space-x-6 mb-6">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <p className="text-blue-200/80">© 2024 Inès Marcisz. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
