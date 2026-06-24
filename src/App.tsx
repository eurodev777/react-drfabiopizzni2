import React, { useState, useRef, useEffect } from "react";
import {
  Activity,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Dumbbell,
  FileText,
  Heart,
  Info,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Quote,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  Video,
  Calendar,
  X,
} from "lucide-react";
import logo from "./assets/logo.png";
import foto from "./assets/foto.jpeg";
import video from "./assets/vlc.mp4";

// Paths of the pre-generated images
import IMAGE_DR_FABIO from "./assets/images/dr_fabio_1781030015152.png";
import IMAGE_ATHLETE from "./assets/images/athlete_performance_1781030034584.png";
import IMAGE_CLINIC from "./assets/images/clinical_assessment_1781030051671.jpeg";

// Interfaces and Constants
interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
  tags: string[];
  initials: string;
  avatarColor: string;
}

const REVIEWS_DATA: Review[] = [
  {
    name: "Henrique Aust",
    date: "3 meses atrás",
    text: "O Dr. Fábio é um excelente profissional! O acompanhamento dele mudou a minha qualidade de vida para um patamar muito superior.",
    rating: 5,
    tags: ["Qualidade de Vida", "Acompanhamento"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjWk4_X7c8m6tPyuqOkjwV-iESNw2fMc8r4JTRL5toT3Ko9_Q70=w72-h72-p-rp-mo-br100",
    avatarColor: "bg-emerald-600",
  },
  {
    name: "Peterson Heleno",
    date: "3 meses atrás",
    text: "Excelente profissional!!! Desde a recepção ao atendimento nota 10, humanizado, profissionalismo, muito obrigado!!!!",
    rating: 5,
    tags: ["Atendimento Humanizado", "Profissionalismo"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjUD7iCQA2JDA2ssp1VG4uaHUfy_G82fJwvD8TTeebJol4X0dIo=s64-c-rp-mo-ba12-br100",
    avatarColor: "bg-blue-600",
  },
  {
    name: "Gustavo Nunes",
    date: "3 meses atrás",
    text: "Excelente profissional, e atendimento excelente.",
    rating: 5,
    tags: ["Atendimento", "Excelência"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjWfAA_Eo-MEA1Q_59JRq8raRs1FR_9VfPqI0LW9qfgy4-BTCxpy=s64-c-rp-mo-br100",
    avatarColor: "bg-purple-600",
  },
  {
    name: "Syloé Silveira Ribeiro Junior",
    date: "3 meses atrás",
    text: "Profissionalismo.... atendimento impecável.",
    rating: 5,
    tags: ["Profissionalismo", "Atendimento"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjXSTUyU1KiswSIyiAWbrb7jt3y16PKhN7FwPlaBugZgGnGBa9GpSA=s64-c-rp-mo-br100",
    avatarColor: "bg-indigo-600",
  },
  {
    name: "Rose Achnitz",
    date: "3 meses atrás",
    text: "Educado, atencioso, gostei muito do Dr. Fábio!",
    rating: 5,
    tags: ["Atencioso", "Consulta"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjXN--VgqLCHTirZKJSVMe317qOgLcwM45p3n-PEZjV4FsLACA69=s64-c-rp-mo-ba12-br100",
    avatarColor: "bg-pink-600",
  },
  {
    name: "Micael Gonsalves",
    date: "3 meses atrás",
    text: "Atendimento da secretaria excepcional, Doutor Fábio um monstro no conhecimento e no atendimento, excelentes profissionais, ótimo consultório. Recomendo a todos!",
    rating: 5,
    tags: ["Conhecimento", "Secretaria", "Consultório"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjWEw6417qz_y7QKVUKexvSwzBiKqgAaXkBap7yS_O4IXzU8Pvcm=s64-c-rp-mo-br100",
    avatarColor: "bg-teal-600",
  },
  {
    name: "Marisa Alarcon",
    date: "3 meses atrás",
    text: "Ótimo atendimento, e com resultados positivos!!",
    rating: 5,
    tags: ["Resultados", "Atendimento"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjUk_86vnRcGujYTNtOuC8VoZLd1q6GHiPpGVepKNkj-1UhSTgip=s64-c-rp-mo-ba12-br100",
    avatarColor: "bg-yellow-600",
  },
  {
    name: "Cibelli Rodrigues",
    date: "4 meses atrás",
    text: "Dr. Fábio foi bastante atencioso durante a consulta, demonstrando real interesse e entendimento com os meus objetivos e dificuldades. O ambiente do consultório é bem agradável e de boa localização.",
    rating: 5,
    tags: ["Consulta", "Atencioso", "Consultório"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjVlW_IYd3xRN2JwHgvjUWcpTDy26RBb7XNp-Yq1t1LmVXN2dUiW2g=s64-c-rp-mo-br100",
    avatarColor: "bg-rose-600",
  },
  {
    name: "Wellington Cavalcante",
    date: "4 meses atrás",
    text: "Excelente profissional, muito gente boa, atencioso e uma ótima experiência, desde a recepção até o momento da consulta. Recomendo demais.",
    rating: 5,
    tags: ["Experiência", "Recepção", "Consulta"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjWhaBESUUqujGNEYvdxT_GXgl45C2nFWPF2zHXOXCTgo1rLqtJb=s64-c-rp-mo-br100",
    avatarColor: "bg-amber-600",
  },
  {
    name: "Janaina Nunes",
    date: "4 meses atrás",
    text: "Dr. Fábio e equipe são maravilhosos. Vale muito a pena fazer uma consulta, ajustou tudo conforme a necessidade.",
    rating: 5,
    tags: ["Equipe", "Consulta", "Resultados"],
    initials:
      "https://lh3.googleusercontent.com/a-/ALV-UjWqAQZcdZ7m0yC7-orRv2OnV8aJRFqHFlW6EjPTuA5P4RMWl-Gs1A=s64-c-rp-mo-br100",
    avatarColor: "bg-lime-600",
  },
];

export default function App() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [selectedReviewTag, setSelectedReviewTag] = useState<string>("Todos");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reviewsNumber = 205;

  // States for Hydration & Sports Bioimpedance Calculator
  const [calcWeight, setCalcWeight] = useState<number>(75);
  const [calcIntensity, setCalcIntensity] = useState<string>("moderado"); // leve, moderado, intenso
  const [calcGoal, setCalcGoal] = useState<string>("emagrecimento"); // emagrecimento, hipertrofia, performance, saude
  const [showCalcResult, setShowCalcResult] = useState<boolean>(true);

  // States for interactive Path view
  const [selectedPath, setSelectedPath] = useState<number>(2); // 1: Internet plans, 2: Personalizado

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay bloqueado:", err);
      });
    }
  }, []);

  // WhatsApp Link Config
  const WHATSAPP_NUMBER = "551533592190"; // Derived from (15) 3359-2190
  const WHATSAPP_PLAYLOAD = encodeURIComponent(
    "Olá, Dr. Fábio Pizzini! Gostaria de agendar uma consulta para melhorar minha saúde e performance.",
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PLAYLOAD}`;

  // Calculated Results
  const getCalculationResults = () => {
    // Basic estimation
    // Water requirement: Weight * rate
    let waterRate = 35; // mL per kg
    if (calcIntensity === "moderado") waterRate = 40;
    if (calcIntensity === "intenso") waterRate = 45;

    let waterIntake = Math.round((calcWeight * waterRate) / 100) * 100; // round to nearest 100ml

    // Protein intake estimation
    let proteinMultiplier = 1.2;
    if (calcGoal === "emagrecimento") proteinMultiplier = 1.6;
    if (calcGoal === "hipertrofia") proteinMultiplier = 2.0;
    if (calcGoal === "performance") proteinMultiplier = 1.8;

    let proteinNeed = Math.round(calcWeight * proteinMultiplier);

    // Recommended bioimpedance metric target range (arbitrary safe sporty guideline for demo purposes)
    let bodyFatTarget = "10 - 15% (Atleta)";
    if (calcGoal === "emagrecimento")
      bodyFatTarget = "Redução em busca de 12-18%";
    if (calcGoal === "saude")
      bodyFatTarget = "Equilíbrio saudável entre 14-22%";

    return {
      water: (waterIntake / 1000).toFixed(1),
      protein: proteinNeed,
      fatTarget: bodyFatTarget,
      pillarGoalText:
        calcGoal === "emagrecimento"
          ? "Maximizar queima lipídica preservando massa magra."
          : calcGoal === "hipertrofia"
            ? "Superávit calórico controlado e estímulo mecânico progressivo."
            : calcGoal === "performance"
              ? "Periodização nutricional esportiva e aporte de carboidratos complexos."
              : "Equilíbrio de micronutrientes, modulação inflamatória e bem-estar metabólico.",
    };
  };

  const calcResults = getCalculationResults();

  // Highlight reviews filter
  const allTags = [
    "Todos",
    ...Array.from(new Set(REVIEWS_DATA.flatMap((r) => r.tags))),
  ];
  const filteredReviews =
    selectedReviewTag === "Todos"
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.tags.includes(selectedReviewTag));

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrevReview = () => {
    setActiveReviewIndex(
      (prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length,
    );
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-brand selection:text-black">
      {/* GLOW DECORATIONS - TOP RIGHT CORNER & LEFT */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-brand/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand/3 blur-[150px] rounded-full pointer-events-none"></div>

      {/* FIXED FLOATING WHATSAPP BUDGET (Bottom right) */}
      <a
        id="floating-whatsapp-btn"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-brand hover:bg-[#5bbf03] text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-115 flex items-center justify-center group lime-glow-strong"
        title="Agendar Consulta"
      >
        <MessageCircle className="w-7 h-7 fill-black" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-bold text-sm tracking-wide">
          AGENDAR VIA WHATSAPP
        </span>
      </a>

      {/* HEADER SECTION */}
      <header
        id="main-header"
        className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center lg:justify-between">
          {/* Brand/Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} width={180} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-display">
            <a
              href="#home"
              className="text-zinc-300 hover:text-brand transition-colors"
            >
              HOME
            </a>
            <a
              href="#ajuda"
              className="text-zinc-300 hover:text-brand transition-colors"
            >
              ATUAÇÃO
            </a>
            <a
              href="#quem-vai-ajudar"
              className="text-zinc-300 hover:text-brand transition-colors"
            >
              O MÉDICO
            </a>
            <a
              href="#nutrologia"
              className="text-zinc-300 hover:text-brand transition-colors"
            >
              NUTROLOGIA
            </a>
            <a
              href="#avaliacao"
              className="text-zinc-300 hover:text-brand transition-font border-b border-transparent hover:border-brand/30 text-brand flex items-center gap-1.5 bg-brand/5 px-2.5 py-1 rounded"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              AVALIAÇÃO INTERATIVA
            </a>
            <a
              href="#contato"
              className="text-zinc-300 hover:text-brand transition-colors"
            >
              CONTATO
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:block">
            <a
              id="header-cta-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-black font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-1.5 hover:bg-[#5bbf03]"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Agendar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white absolute right-8"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-900 bg-black/95 px-4 pt-4 pb-6 space-y-3 fonst-display mrs-8">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-950 hover:text-brand transition-colors"
            >
              HOME
            </a>
            <a
              href="#ajuda"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-950 hover:text-brand transition-colors"
            >
              ATUAÇÃO
            </a>
            <a
              href="#quem-vai-ajudar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-950 hover:text-brand transition-colors"
            >
              SOBRE O DR. FÁBIO
            </a>
            <a
              href="#nutrologia"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-950 hover:text-brand transition-colors"
            >
              SOBRE A NUTROLOGIA
            </a>
            <a
              href="#avaliacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-brand bg-brand/5 border border-brand/20"
            >
              AVALIAÇÃO INTERATIVA
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-zinc-950 hover:text-brand transition-colors"
            >
              CONTATO
            </a>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-brand text-black font-extrabold py-3 rounded-lg text-sm tracking-wide"
              >
                AGENDAR CONSULTA
              </a>
              <div className="flex justify-center gap-6 pt-3 text-zinc-400">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  <Video className="w-5 h-5" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO / PORTADA (SEÇÃO HOME) */}
      <section
        id="home"
        className="relative pt-6 pb-20 md:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Column 1: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-400 mx-auto lg:mx-0">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                </span>
                SOROCABA & REGIÃO
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-black text-white tracking-tight leading-tight uppercase font-display">
                  Você na sua{" "}
                  <span className="lime-text-gradient block">
                    melhor versão
                  </span>{" "}
                  física e metabólica.
                </h1>
                <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                  A melhor opção em{" "}
                  <strong>
                    EMAGRECIMENTO, REPOSIÇÃO HORMONAL E PERFORMANCE
                    ESPORTIVA{" "}
                  </strong>
                  de Sorocaba com foco absoluto em ciência, metabolismo e
                  resultados práticos e duradouros.
                </p>
              </div>

              {/* Call to Action Grid */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  id="hero-primary-btn"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand text-black font-black text-sm tracking-wider uppercase px-8 py-4.5 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 hover:bg-[#5bbf03] lime-glow-strong"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  Agendar Consulta no WhatsApp
                </a>

                <a
                  href="#avaliacao"
                  className="w-full sm:w-auto bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-brand/40 font-bold text-sm tracking-wide px-8 py-4.5 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Activity className="w-4 h-4 text-brand" />
                  Calcular Parâmetros Esportivos
                </a>
              </div>

              {/* Google Reviews Brief Summary */}
              <div className="pt-6 border-t border-zinc-900/80 max-w-md mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-6">
                <div>
                  <div className="flex items-center justify-center lg:justify-start text-brand gap-1 mb-1">
                    <Star className="w-4 h-4 fill-brand" />
                    <Star className="w-4 h-4 fill-brand" />
                    <Star className="w-4 h-4 fill-brand" />
                    <Star className="w-4 h-4 fill-brand" />
                    <Star className="w-4 h-4 fill-brand" />
                  </div>
                  <p className="text-[11px] text-zinc-500 font-mono tracking-widest uppercase">
                    EXCELENTE · GOOGLE RATINGS
                  </p>
                </div>
                <div className="h-8 w-px bg-zinc-900"></div>
                <div className="text-left">
                  <p className="text-lg font-black text-white font-display leading-tight">
                    {reviewsNumber}+
                  </p>
                  <p className="text-[10.5px] text-zinc-400 font-sans">
                    Avaliações reais de pacientes ativos
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
              <div className="w-full">
                <video
                  ref={videoRef}
                  className="w-full h-auto rounded-lg"
                  controls
                  muted
                  playsInline
                  autoPlay
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTION - COMO NÓS VAMOS TE AJUDAR */}
      <section
        id="ajuda"
        className="py-20 bg-zinc-950 border-y border-zinc-900 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 text-brand font-mono text-xs tracking-widest uppercase">
              <Dumbbell className="w-3.5 h-3.5" /> METODOLOGIA CIENTÍFICA
            </div>
            <h2 className="text-3xl sm:text-4.5xl font-black text-white uppercase tracking-tight font-display">
              Como nós vamos te ajudar
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Estamos prontos para mostrar o caminho correto, seguro e mais
              eficaz para você atingir seus objetivos estéticos e metabólicos
              sem restrições extremas ou modismos.
            </p>
          </div>

          {/* Service Cards Grid - Premium Dark Accentuated */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD 1: EMAGRECIMENTO */}
            <div className="group bg-black border border-zinc-850 p-6 rounded-2xl hover:border-brand/40 transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand/5 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand/40 transition-colors">
                  <TrendingUp className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-display uppercase group-hover:text-brand transition-colors">
                  Emagrecimento
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Através de uma análise detalhada de toda sua rotina, vamos
                  ajustar tudo, para que tenha total condição de emagrecer com
                  saúde e qualidade, seja para fins de saúde ou mesmo para
                  definição muscular.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-900/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  METABOLIC ACCURACY
                </span>
                <Sparkles className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* CARD 2: HIPERTROFIA */}
            <div className="group bg-black border border-zinc-850 p-6 rounded-2xl hover:border-brand/40 transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand/5 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand/40 transition-colors">
                  <Dumbbell className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-display uppercase group-hover:text-brand transition-colors">
                  Hipertrofia
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Você deseja ganhar massa muscular? Vamos te dar todas as
                  diretrizes a serem seguidas para que atinja esse objetivo de
                  forma eficaz e com total segurança metabólica e ortopédica.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-900/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  MUSCULAR GROWTH
                </span>
                <Sparkles className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* CARD 3: PERFORMANCE */}
            <div className="group bg-black border border-zinc-850 p-6 rounded-2xl hover:border-brand/40 transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand/5 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand/40 transition-colors">
                  <Activity className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-display uppercase group-hover:text-brand transition-colors">
                  Performance
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Para você que é um atleta amador ou profissional e deseja
                  melhorar seu desempenho e potencializar seus resultados, temos
                  uma estratégia personalizada que será ajustada para sua
                  individualidade.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-900/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  SPORTS MEDICINE
                </span>
                <Sparkles className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* CARD 4: SAÚDE & QUALIDADE */}
            <div className="group bg-black border border-zinc-850 p-6 rounded-2xl hover:border-brand/40 transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand/5 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand/40 transition-colors">
                  <Heart className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-display uppercase group-hover:text-brand transition-colors">
                  Saúde e Vitalidade
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Se o seu objetivo é simplesmente saúde e qualidade de vida,
                  daremos todas as informações necessárias para que tenha
                  sucesso nessa mudança de forma sustentada.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-900/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  LONGEVITY OPTIMIZATION
                </span>
                <Sparkles className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Quick Informational Box with CTA in visual styling */}
          <div className="mt-12 bg-zinc-900/65 rounded-2xl border border-zinc-800/85 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 mt-1 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h4 className="text-white font-bold leading-tight font-display text-lg">
                  CONSULTA INTEGRADA & PARAMENTOS REAIS
                </h4>
                <p className="text-zinc-450 text-xs sm:text-sm mt-0.5 max-w-2xl font-sans">
                  Nosso acompanhamento conta com anamnese médica, avaliação
                  hormonal e mapeamento corporal com bioimpedância de alta
                  definição.
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 text-center bg-zinc-100 text-black hover:bg-brand hover:scale-105 transition-all duration-300 font-extrabold text-xs tracking-wide uppercase px-6 py-3 rounded-lg"
            >
              Falar com Equipe de Atendimento
            </a>
          </div>
        </div>
      </section>

      {/* MEET THE DOCTOR SECTION (QUEM VAI AJUDAR VOCÊ) */}
      <section
        id="quem-vai-ajudar"
        className="py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Column 1: Doctor Portrait with custom styling */}
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-sm sm:max-w-md mx-auto">
                {/* Glow border background */}
                <div className="absolute -inset-1.5 bg-gradient-to-t from-brand to-zinc-800 rounded-2.5xl blur-lg opacity-40"></div>

                {/* Frame Container */}
                <div className="relative bg-zinc-950 border-2 border-zinc-800 p-2 sm:p-3 rounded-2.5xl overflow-hidden shadow-2xl">
                  <img
                    src={foto}
                    alt="Dr. Fábio Pizzini no consultório"
                    className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl grayscale-15 hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle info pill on the image corner */}
                  <div className="absolute top-6 left-6 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-zinc-800 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-brand" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                      RQE 130.636
                    </span>
                  </div>

                  {/* Absolute positioning name indicator */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-md p-4 rounded-xl border border-zinc-850">
                    <span className="text-[9px] text-brand font-mono font-bold tracking-widest uppercase block mb-1">
                      MÉDICO DO ESPORTE
                    </span>
                    <span className="text-lg font-black text-white font-display uppercase tracking-tight block">
                      FÁBIO PIZZINI
                    </span>
                    <span className="text-[10.5px] text-zinc-400 font-sans block mt-1">
                      Pontifícia Universidade Católica de SP
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Doctor Resume / Credentials */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono text-brand font-bold tracking-widest uppercase block">
                  QUEM VAI AJUDAR VOCÊ
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display leading-none">
                  Dr. Fábio Pizzini
                </h2>
                <div className="h-1 w-20 bg-brand"></div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                Formado em Medicina pela renomada{" "}
                <strong>
                  Pontifícia Universidade Católica de São Paulo – PUC/SP
                </strong>
                , o Dr. Fábio Pizzini é especialista em entregar as ferramentas
                clínicas e hormonais necessárias para alinhar biotipo, saúde
                interna e performance diária.
              </p>

              {/* Resume Points / Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-1/1 md:grid-cols-1 gap-4">
                {/* Point 1 */}
                <div className="flex gap-4 p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-brand/5 border border-brand/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold font-display uppercase">
                      Médico do Esporte Certificado
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      Sociedade Brasileira de Medicina do Exercício e do Esporte
                      – RQE 130.636. Capacitação integral em biologia do
                      movimento.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4 p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-brand/5 border border-brand/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold font-display uppercase">
                      Pós-Graduação Dupla em Nutrologia
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      Associação Brasileira de Nutrologia – ABRAN. Pós-Graduado
                      em Nutrologia e Nutrologia Esportiva.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4 p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-brand/5 border border-brand/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold font-display uppercase">
                      Advanced Nutrition Specialist
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      Certificação internacional pela International Federation
                      of Body Building and Fitness – IFBB.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-4 p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-brand/5 border border-brand/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold font-display uppercase">
                      Capacitação em Nutrologia do Exercício
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                      Associação Brasileira de Nutrologia – ABRAN. Estudo
                      metabólico voltado a rendimento esportivo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote from the Doctor */}
              <div className="border-l-2 border-brand pl-4 py-1 italic text-zinc-400 text-sm">
                "Não existem metas inatingíveis quando combinamos a bioquímica
                médica, a nutrição funcional e o treino planejado. O sucesso é
                fruto de pilares inteligentes, e nós fornecemos a ponte."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED LESSONS: SOBRE A NUTROLOGIA */}
      <section
        id="nutrologia"
        className="py-20 bg-zinc-950 border-y border-zinc-900 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Column 1: Core Definitions of Nutrology */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand font-bold tracking-widest uppercase block">
                  CONHECIMENTO MÉDICO
                </span>
                <h2 className="text-3xl sm:text-4.5xl font-black text-white uppercase tracking-tight font-display">
                  Entenda a Ciência da Nutrologia
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl font-sans">
                  A Nutrologia clínica é a especialidade focada em entender as
                  respostas celulares ao que ingerimos, otimizando o metabolismo
                  para prevenção, estética física e recuperação corporal
                  completa.
                </p>
              </div>

              {/* Definition Block / Highlighted Box */}
              <div className="bg-black border border-zinc-850 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rotate-45 transform translate-x-12 -translate-y-12"></div>
                <div className="flex gap-4 items-start">
                  <Quote className="w-10 h-10 text-brand shrink-0 opacity-40" />
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                      A Definição Oficial
                    </span>
                    <p className="text-white text-sm sm:text-base font-medium leading-relaxed font-sans">
                      “Nutrologia é a especialidade médica que estuda, pesquisa
                      e avalia os benefícios e malefícios causados pela ingestão
                      dos nutrientes, aplicando este conhecimento para a
                      avaliação de nossas necessidades orgânicas, visando a
                      manutenção da saúde e redução de risco de doenças [...]”.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub grid for 3 core pillars of Nutrology */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Item A: Complemento */}
                <div className="space-y-2">
                  <span className="text-brand text-xs font-mono font-bold tracking-wider uppercase block">
                    01 / COMPLEMENTO
                  </span>
                  <h4 className="text-white text-sm font-extrabold uppercase font-display leading-tight">
                    Visão Transversal
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                    A Nutrologia caminha lado a lado com endocrinologia,
                    cardiologia e fisiologia esportiva. Mapeamos desequilíbrios
                    hormonais e metabólicos com precisão médica.
                  </p>
                </div>

                {/* Item B: Benefícios */}
                <div className="space-y-2">
                  <span className="text-brand text-xs font-mono font-bold tracking-wider uppercase block">
                    02 / BENEFÍCIOS
                  </span>
                  <h4 className="text-white text-sm font-extrabold uppercase font-display leading-tight">
                    Energia & Imunidade
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                    Melhora acentuada nos níveis de cansaço crônico, modulação
                    do estresse oxidativo celular e prevenção de riscos
                    metabólicos de longo prazo.
                  </p>
                </div>

                {/* Item C: Objetivos */}
                <div className="space-y-2">
                  <span className="text-brand text-xs font-mono font-bold tracking-wider uppercase block">
                    03 / OBJETIVOS
                  </span>
                  <h4 className="text-white text-sm font-extrabold uppercase font-display leading-tight">
                    Longevidade Real
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                    Mais que estética passageira: desenhamos um roteiro
                    fisiológico personalizado para manter massa magra ativa e
                    queima lipídica constante por anos.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Gorgeous Bio-Aesthetic Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                <div className="absolute inset-0 bg-brand/5 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="bg-black border border-zinc-850 p-3 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={IMAGE_CLINIC}
                    alt="Equipamentos modernos da Clínica Dr. Fábio Pizzini"
                    className="w-full h-[320px] sm:h-[380px] object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Interactive floating health stat */}
                <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brand animate-pulse"></div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-mono block">
                      Agende uma consulta
                    </span>
                    <strong className="text-white text-xs block font-display tracking-wide uppercase">
                      Clínica Pizzini
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 3 PILLARS: INTERACTIVE PATH EXPLORER & THE 3 PITFALLS */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 text-brand font-mono text-xs tracking-widest uppercase bg-brand/5 border border-brand/20 px-3 py-1 rounded-full">
              ALERT: ERROS CRÍTICOS NO EMAGRECIMENTO
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-white uppercase tracking-tight font-display leading-none">
              Não ignore estes três pilares para emagrecer
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Muitas pessoas tentam treinar e comer bem, mas continuam
              frustradas. Antes de entender os erros, conheça os dois caminhos
              clínicos que você pode trilhar:
            </p>
          </div>

          {/* TWO PATHS INTERACTIVE SELECTOR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            {/* Nav Selection bar (Left Side) */}
            <div className="lg:col-span-4 space-y-4 font-display">
              <button
                onClick={() => setSelectedPath(1)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  selectedPath === 1
                    ? "bg-red-950/20 border-red-500/40 text-white"
                    : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-805"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${selectedPath === 1 ? "bg-red-500" : "bg-zinc-650"}`}
                  ></span>
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    CAMINHO 1
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black uppercase text-zinc-100 group-hover:text-white">
                  Plano Genérico de Internet
                </h4>
                <p className="text-zinc-500 text-xs mt-1.5 font-sans leading-relaxed">
                  Fórmulas prontas, modas de blogueres e suor sem direção
                  médica.
                </p>
              </button>

              <button
                onClick={() => setSelectedPath(2)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative ${
                  selectedPath === 2
                    ? "bg-brand/10 border-brand/40 text-brand"
                    : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-805"
                }`}
              >
                <div className="absolute top-4 right-4 bg-brand text-black text-[9px] font-mono font-black px-1.5 py-0.5 rounded leading-none">
                  RECOMENDADO
                </div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${selectedPath === 2 ? "bg-brand animate-ping" : "bg-zinc-650"}`}
                  ></span>
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    CAMINHO 2
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black uppercase text-white">
                  Método Médico Personalizado
                </h4>
                <p className="text-zinc-450 text-xs mt-1.5 font-sans leading-relaxed">
                  Exames clínicos integrados, ajuste bioquímico real e treino
                  científico.
                </p>
              </button>
            </div>

            {/* Path Content Box (Right Side) */}
            <div className="lg:col-span-8">
              <div className="bg-zinc-950/80 border border-zinc-900 p-6 sm:p-8 rounded-2xl relative min-h-[220px] transition-all duration-300">
                {selectedPath === 1 ? (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display uppercase tracking-tight text-red-500 flex items-center gap-2">
                      ❌ FRUSTRAÇÃO & MODISMOS PASSAGEIROS
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                      Seguir planos prontos de internet sem considerar as
                      necessidades individuais, sem uma avaliação interna séria
                      de sangue/hormônios ou um plano de exercícios
                      personalizado, resulta em perdas bruscas de massa
                      muscular, cansaço em excesso, colaterais inadequados e
                      frustrações recorrentes.
                    </p>
                    <div className="p-3 bg-red-950/25 border border-red-900/30 rounded-xl text-xs text-red-400 font-sans">
                      <strong>Consequência comum:</strong> Efeito sanfona severo
                      e degradação da energia do sistema mitocondrial.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display uppercase tracking-tight text-brand flex items-center gap-2">
                      ⚡ SUCESSO BASEADO EM CIÊNCIA REAL
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                      O caminho para o sucesso é construído com base em exames
                      clínicos, orientação médica profissional rigorosa,
                      adequação de micronutrientes correção hormonal. O
                      resultado natural é o ganho de massa magra, redução da
                      gordura visceral e melhora acentuada do estilo de vida
                      metabólico.
                    </p>
                    <div className="p-3 bg-brand/5 border border-brand/10 rounded-xl text-xs text-zinc-300 font-sans flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                      <span>
                        <strong>Diferencial clínico:</strong> Alinhamento com
                        endocrinologia e nutrologia do exercício para desempenho
                        contínuo.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* THE 3 ERROR BLOCKS IN DETAIL */}
          {/* <div className="bg-zinc-950 border border-zinc-900/80 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-black text-white font-display uppercase text-center mb-10 tracking-wider">
              Veja abaixo os{" "}
              <span className="text-brand">3 Erros Cruciais</span> que você
              precisa evitar:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-black border border-zinc-850 hover:border-red-500/20 transition-all duration-300">
                <span className="text-[10px] font-mono text-red-500 block mb-2 font-black uppercase tracking-widest">
                  ERRO 01 //
                </span>
                <h4 className="text-lg font-bold font-display text-white uppercase mb-3">
                  01. Não ter acompanhamento médico
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Tentar ajustar a bioquímica e o metabolismo corporal por conta
                  própria, ignorando exames hormonais importantes, marcadores
                  inflamatórios e possíveis deficiências crônicas de
                  micronutrientes essenciais.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black border border-zinc-850 hover:border-red-500/20 transition-all duration-300">
                <span className="text-[10px] font-mono text-red-500 block mb-2 font-black uppercase tracking-widest">
                  ERRO 02 //
                </span>
                <h4 className="text-lg font-bold font-display text-white uppercase mb-3">
                  02. Não ter orientação nutricional
                </h4>
                <p className="text-zinc-405 text-xs sm:text-sm leading-relaxed font-sans">
                  Seguir dietas restritivas extremas da internet sem a
                  individualização biológica necessária para o seu nível de
                  atividade diária, gerando indisposição e perda de massa
                  muscular importante.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black border border-zinc-850 hover:border-red-500/20 transition-all duration-300">
                <span className="text-[10px] font-mono text-red-500 block mb-2 font-black uppercase tracking-widest">
                  ERRO 03 //
                </span>
                <h4 className="text-lg font-bold font-display text-white uppercase mb-3">
                  03. Não ter auxílio nos treinos
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Treinar sem periodização correta ou sem o direcionamento de
                  intensidade ideal para estimular de fato a hipertrofia e
                  ativar receptores metabólicos necessários para mobilizar
                  gordura subcutânea.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-900/80 text-center max-w-2xl mx-auto space-y-3">
              <strong className="text-white text-base font-display uppercase tracking-wider block">
                Por mais simples que isso pareça, é exatamente onde a maioria
                das pessoas erram!
              </strong>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Agora que você conhece esses bloqueios biológicos, não os
                repetirá! O sucesso verdadeiro vem do perfeito alinhamento dos 3
                pilares vitais:{" "}
                <span className="text-brand font-bold">
                  médico e nutricional
                </span>
                .
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* INTERACTIVE COMPONENT: SPORTS CALORIES & BIOIMPEDANCE PREPARATION (SEÇÃO AVALIAÇÃO) */}
      <section
        id="avaliacao"
        className="py-20 bg-zinc-950 border-y border-zinc-900 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Column 1: Custom Interactive Calculator Tool */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono text-brand font-mono font-bold tracking-widest uppercase block">
                  AVALIE-SE AGORA
                </span>
                <h2 className="text-3xl sm:text-4 text-white font-black font-display uppercase tracking-tight">
                  Calculadora Esportiva e Metabólica
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Insira seus dados físicos atuais para entender um
                  direcionamento preliminar dos seus de água metabólica, de
                  proteína diária estrutural para preservação e o que deve
                  buscar em sua bioimpedância segmentada.
                </p>
              </div>

              {/* Slider Inputs Wrapper */}
              <div className="bg-black border border-zinc-850 p-6 sm:p-8 rounded-2xl relative shadow-2xl space-y-6">
                {/* Peso */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-display">
                    <label className="text-sm font-bold text-zinc-300 uppercase">
                      Seu Peso Atual
                    </label>
                    <span className="text-xl font-bold text-brand font-mono">
                      {calcWeight} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="180"
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(Number(e.target.value))}
                    className="w-full accent-[#6CDC04] bg-zinc-900 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                    <span>40 kg</span>
                    <span>110 kg</span>
                    <span>180 kg</span>
                  </div>
                </div>

                {/* Intensidade de Atividade */}
                <div>
                  <label className="text-sm font-bold text-zinc-300 uppercase block mb-3 font-display">
                    Intensidade do seu Treino Corporal
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setCalcIntensity("leve")}
                      className={`py-3 px-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-center border transition-all ${
                        calcIntensity === "leve"
                          ? "bg-brand/10 border-brand/50 text-brand"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      Leve / Moderado
                      <span className="block text-[9px] lowercase font-normal text-zinc-400 mt-1">
                        1 a 3 dias / semana
                      </span>
                    </button>

                    <button
                      onClick={() => setCalcIntensity("moderado")}
                      className={`py-3 px-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-center border transition-all ${
                        calcIntensity === "moderado"
                          ? "bg-brand/10 border-brand/50 text-brand"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      Interme-diário
                      <span className="block text-[9px] lowercase font-normal text-zinc-400 mt-1">
                        3 a 5 dias / semana
                      </span>
                    </button>

                    <button
                      onClick={() => setCalcIntensity("intenso")}
                      className={`py-3 px-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-center border transition-all ${
                        calcIntensity === "intenso"
                          ? "bg-brand/10 border-brand/50 text-brand"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      Esportista / Atleta
                      <span className="block text-[9px] lowercase font-normal text-zinc-400 mt-1">
                        Diário / Intenso
                      </span>
                    </button>
                  </div>
                </div>

                {/* Objetivo Principal */}
                <div>
                  <label className="text-sm font-bold text-zinc-300 uppercase block mb-3 font-display">
                    Meta Primária Desejada
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: "emagrecimento", label: "Emagrecimento" },
                      { id: "hipertrofia", label: "Hipertrofia" },
                      { id: "performance", label: "Performance" },
                      { id: "saude", label: "Longevidade" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setCalcGoal(item.id)}
                        className={`py-2 rounded-xl text-xs font-bold font-display uppercase text-center border transition-all ${
                          calcGoal === item.id
                            ? "bg-brand/10 border-brand/50 text-brand"
                            : "bg-zinc-900/60 border-zinc-850 text-zinc-450 hover:border-zinc-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Render Estimated outputs in custom visual block */}
                {showCalcResult && (
                  <div className="pt-6 border-t border-zinc-900 mt-6 space-y-4">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                      RESULTADOS ESPECUTIVOS ESTIMADOS:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Water requirement card */}
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-zinc-500 uppercase font-mono">
                            Água Celular Recomendada
                          </p>
                          <strong className="text-xl font-black text-white font-display uppercase tracking-wide">
                            {calcResults.water} Litros / Dia
                          </strong>
                        </div>
                        <CheckCircle className="w-6 h-6 text-brand" />
                      </div>

                      {/* Protein Card */}
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-zinc-500 uppercase font-mono">
                            Proteína Meta Diária
                          </p>
                          <strong className="text-xl font-black text-white font-display uppercase tracking-wide">
                            {calcResults.protein} g / Dia
                          </strong>
                        </div>
                        <Dumbbell className="w-6 h-6 text-brand" />
                      </div>
                    </div>

                    {/* Guidance detail */}
                    <div className="p-3.5 bg-zinc-950/90 rounded-xl border border-zinc-900 text-xs leading-relaxed space-y-1">
                      <p className="text-zinc-400 font-sans">
                        <strong className="text-white font-display uppercase text-[10.5px]">
                          Estratégia Bioquímica Proposta:
                        </strong>
                        <br />
                        {calcResults.pillarGoalText}
                      </p>
                      <p className="text-[10.5px] text-zinc-500 font-mono">
                        Target Corporal Esperado no Mapeamento de Gordura:{" "}
                        {calcResults.fatTarget}
                      </p>
                    </div>

                    {/* Actionable disclaimer with CTA linkage */}
                    <p className="text-[11px] text-zinc-500 italic mt-2 text-center text-zinc-450">
                      *Atenção: Estes dados são estimativas biológicas. O
                      cálculo de bioimpedância clínica octapolar segmentativa
                      real é feito fisicamente em consultório com laudo oficial.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Column 2: Preparation Info Guide for Consultations */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-black border border-zinc-850 p-6 rounded-2xl relative">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight font-display mb-4 border-b border-zinc-900 pb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" /> Pré-Requisitos
                  para Bioimpedância InBody
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Para que os resultados do seu exame de bioimpedância de alta
                  definição sejam perfeitamente precisos e livres de variáveis
                  externas, siga estas exigências no consultório:
                </p>

                {/* Requirements roadmap list */}
                <ul className="space-y-3.5 text-xs text-zinc-300 font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 shrink-0 rounded bg-brand/10 text-brand flex items-center justify-center font-mono font-bold text-[10.5px] mt-0.5">
                      01
                    </span>
                    <span>
                      <strong>Jejum Absoluto de 2 a 3 Horas:</strong> Não coma
                      nem tome água em excesso nas 3 horas anteriores ao exame
                      clínico.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 shrink-0 rounded bg-brand/10 text-brand flex items-center justify-center font-mono font-bold text-[10.5px] mt-0.5">
                      02
                    </span>
                    <span>
                      <strong>Sem Exercícios Intensos nas 24h:</strong> O
                      esforço físico vigoroso altera gravemente a distribuição
                      hídrica muscular.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 shrink-0 rounded bg-brand/10 text-brand flex items-center justify-center font-mono font-bold text-[10.5px] mt-0.5">
                      03
                    </span>
                    <span>
                      <strong>Bexiga Vazia para Execução:</strong> Realize a
                      micção imediatamente antes do teste de impedância.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 shrink-0 rounded bg-brand/10 text-brand flex items-center justify-center font-mono font-bold text-[10.5px] mt-0.5">
                      04
                    </span>
                    <span>
                      <strong>Sem Adornos Metálicos Pesados:</strong> Celulares,
                      relógios corporais e anéis afetam as microcorrentes da
                      bioeletrônica.
                    </span>
                  </li>
                </ul>

                {/* Sub CTA links to book */}
                <div className="mt-6 pt-6 border-t border-zinc-900 text-center">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand font-bold text-xs uppercase tracking-wider hover:underline"
                  >
                    Agendar Horário e Avaliação Oficial &rarr;
                  </a>
                </div>
              </div>

              {/* Informative trust banner */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5 text-brand" />
                <span className="text-xs text-zinc-400 font-sans">
                  <strong>InBody Octapolar Technology:</strong> O laudo de
                  gordura segmentada mais confiável do esporte mundial.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED GOOGLE REVIEWS (SEÇÃO HISTÓRICO DE PACIENTES) */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand font-bold tracking-widest uppercase block">
                DEPOIMENTOS REAIS
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-white uppercase tracking-tight font-display">
                Excelente - {reviewsNumber} avaliações Google
              </h2>
              <p className="text-zinc-450 text-sm max-w-2xl font-sans">
                Confira o feedback sincero de quem passou pela Clínica de
                Sorocaba, superou e superou suas metas de hipertrofia,
                emagrecimento e saúde metabólica.
              </p>
            </div>

            {/* Selector filter buttons for Testimonial categories */}
            {/* <div className="flex flex-wrap gap-2 text-xs font-mono">
              {allTags.slice(0, 5).map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedReviewTag(tag);
                    setActiveReviewIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    selectedReviewTag === tag
                      ? "bg-brand text-black border-brand font-bold"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div> */}
          </div>

          {/* Testimonial Core Highlight Card */}
          <div className="relative max-w-4xl mx-auto">
            {/* Nav Arrows */}
            <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-10 hidden sm:block">
              <button
                onClick={handlePrevReview}
                className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-10 hidden sm:block">
              <button
                onClick={handleNextReview}
                className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonial Active Display Unit */}
            {filteredReviews.length > 0 ? (
              <div className="bg-zinc-950 border border-zinc-850 p-6 sm:p-10 rounded-2xl relative shadow-2xl space-y-6">
                {/* Upper row: Avatar details & Star scale */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold font-display ${filteredReviews[activeReviewIndex].avatarColor}`}
                    >
                      <img
                        src={filteredReviews[activeReviewIndex].initials}
                      ></img>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-display uppercase tracking-tight">
                        {filteredReviews[activeReviewIndex].name}
                      </h4>
                      <p className="text-[11px] text-zinc-500 font-mono uppercase tracking-widest">
                        {filteredReviews[activeReviewIndex].date}
                      </p>
                    </div>
                  </div>

                  {/* Rating star display */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-lg">
                    <span className="text-zinc-300 font-bold font-mono text-xs">
                      Excelente 5.0
                    </span>
                    <div className="flex items-center text-brand">
                      <Star className="w-3.5 h-3.5 fill-brand" />
                      <Star className="w-3.5 h-3.5 fill-brand" />
                      <Star className="w-3.5 h-3.5 fill-brand" />
                      <Star className="w-3.5 h-3.5 fill-brand" />
                      <Star className="w-3.5 h-3.5 fill-brand" />
                    </div>
                  </div>
                </div>

                {/* Quote Content text */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic font-sans">
                  "{filteredReviews[activeReviewIndex].text}"
                </p>

                {/* Review bottom tags and markers */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900">
                  <div className="flex flex-wrap gap-2">
                    {filteredReviews[activeReviewIndex].tags.map((tg, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-brand/10 text-brand border border-brand/20 py-0.5 px-2 rounded uppercase font-bold"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10.5px] text-zinc-500 uppercase font-mono tracking-widest">
                    Google Review Certificada ✔
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-center text-zinc-550 italic py-10 font-sans">
                Sem depoimentos para o filtro selecionado.
              </p>
            )}

            {/* Tiny indicator bar dot index list */}
            {filteredReviews.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {filteredReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeReviewIndex === idx
                        ? "bg-brand scale-120 w-5"
                        : "bg-zinc-800 hover:bg-zinc-650"
                    }`}
                    aria-label={`Ir para avaliação ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Quick mobile arrows */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button
              onClick={handlePrevReview}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-350 text-xs font-bold font-display uppercase tracking-wider"
            >
              Anterior
            </button>
            <button
              onClick={handleNextReview}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-350 text-xs font-bold font-display uppercase tracking-wider"
            >
              Próximo
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 relative overflow-hidden bg-zinc-950 border-t border-zinc-900 text-center">
        <div className="absolute inset-0 bg-brand/3 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs font-mono text-zinc-450 uppercase">
            Clínica Dr. Fábio Pizzini
          </div>

          <h2 className="text-3.5xl sm:text-5.5xl font-black text-white uppercase tracking-tight leading-none font-display">
            Chegou a hora de alcançar os resultados que você sempre sonhou!
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Com as ferramentas métricas de alta performance, exames médicos
            integrados e o acompanhamento de quem é referência, você vai de vez
            abolir os erros que sabotavam o seu emagrecimento.
          </p>

          <strong className="text-zinc-200 block text-sm sm:text-base uppercase tracking-widest font-display">
            Acompanhamento Médico
          </strong>

          {/* Glowing Green Central Button */}
          <div className="pt-4">
            <a
              id="cta-bottom-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand text-black font-black text-base tracking-wider uppercase px-12 py-5.5 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2.5 hover:bg-[#5bbf03] lime-glow-strong"
            >
              <MessageCircle className="w-6 h-6 fill-black" />
              Agendar minha consulta e iniciar transformação
            </a>
            <p className="text-[11px] text-zinc-500 font-mono tracking-widest uppercase mt-3.5">
              “Fale com a Jô na recepção e escolha seu horário preferencial”
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT & MAP FOOTER SECTION (SEÇÃO CONTATO) */}
      <section
        id="contato"
        className="bg-black text-zinc-400 py-16 border-t border-zinc-900 flex-col"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Clinic Summary Address details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} width={180} />
            </div>

            <p className="text-xs sm:text-sm text-zinc-450 leading-relaxed font-sans">
              Sorocaba e Região possuem agora o padrão ouro em nutrologia
              esportiva, emagrecimento integrado e preparação física de alta
              performance. Agende com antecedência.
            </p>

            <div className="space-y-3.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span>
                  Av. Comendador Pereira Inácio, 950
                  <br />
                  6º Andar – Sala 661 – Jardim Vergueiro
                  <br />
                  Sorocaba – SP – CEP: 18030-230
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <a
                  href="tel:1533592190"
                  className="hover:text-white transition-colors"
                >
                  (15) 3359-2190
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* Column 2: Working hours & consult information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold font-display uppercase tracking-widest">
              Horários de Atendimento
            </h4>
            <div className="h-0.5 w-10 bg-brand"></div>
            <ul className="space-y-2 text-xs text-zinc-450 font-sans">
              <li className="flex justify-between">
                <span>Segunda a Quinta:</span>{" "}
                <span className="text-zinc-300 font-bold">08:00 – 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta-Feira:</span>{" "}
                <span className="text-zinc-300 font-bold">08:00 – 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado / Domingo:</span>{" "}
                <span className="text-zinc-550">Fechado</span>
              </li>
            </ul>
            <p className="text-[10px] text-zinc-550 italic">
              *Atendimento particular com laudo InBody completo e prescrição
              médica para acompanhamento de exames laboratoriais.
            </p>
          </div>

          {/* Column 3: Professional Social Links & Apps */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-white text-sm font-bold font-display uppercase tracking-widest">
              Canais Oficiais & Mídia
            </h4>
            <div className="h-0.5 w-10 bg-brand"></div>
            <p className="text-xs text-zinc-450 leading-relaxed font-sans">
              Acompanhe posts científicos diários e dicas de rotina e nutrição
              prática compartilhados pelo Dr. Fábio Pizzini:
            </p>

            {/* Social Grid buttons */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 p-2.5 rounded-lg flex items-center gap-2 text-zinc-300 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-[#6CDC04]" />
                Instagram
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 p-2.5 rounded-lg flex items-center gap-2 text-zinc-300 hover:text-white transition-all"
              >
                <Video className="w-4 h-4 text-[#6CDC04]" />
                YouTube
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 p-2.5 rounded-lg flex items-center gap-2 text-zinc-300 hover:text-white transition-all"
              >
                <Users className="w-4 h-4 text-[#6CDC04]" />
                Facebook
              </a>

              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 p-2.5 rounded-lg flex items-center gap-2 text-zinc-300 hover:text-white transition-all"
              >
                <TrendingUp className="w-4 h-4 text-[#6CDC04]" />
                Spotify
              </a>
            </div>
          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-900/60 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-650 font-mono">
          <p>
            © {new Date().getFullYear()} Clínica Dr. Fábio Pizzini. Todos os
            direitos reservados.
          </p>
          <p>CRM/SP: Dr. Fábio Pizzini · Responsabilidade Técnica Médica</p>
        </div>
      </section>
    </div>
  );
}
