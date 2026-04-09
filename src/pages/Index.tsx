import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { professions } from "@/data/professions";

const featuredProfessions = [
  professions.find((p) => p.id === "arhitektor")!,
  professions.find((p) => p.id === "inzhener-metallurg")!,
  professions.find((p) => p.id === "kiberbezopasnik")!,
  professions.find((p) => p.id === "bioinformatik")!,
  professions.find((p) => p.id === "kompozitor")!,
  professions.find((p) => p.id === "ekolog")!,
];

const stats = [
  { value: 60, suffix: "+", label: "Профессий в азбуке", icon: "Briefcase" },
  { value: 500, suffix: "+", label: "Участников апробации", icon: "Users" },
  { value: 89, suffix: "%", label: "Рост понимания ИИ", icon: "TrendingUp" },
  { value: 12, suffix: "+", label: "Школ участвуют", icon: "GraduationCap" },
];

const alphabetPreview = [
  { letter: "А", professions: ["Архитектор", "Аналитик данных"] },
  { letter: "И", professions: ["Инженер-металлург", "IT-менеджер"] },
  { letter: "В", professions: ["Врач", "Видеопродюсер"] },
  { letter: "П", professions: ["Программист", "Психолог"] },
  { letter: "К", professions: ["Кибербезопасник", "Космический инженер"] },
  { letter: "М", professions: ["Маркетолог", "Менеджер проектов"] },
];

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({
  value,
  suffix,
  label,
  icon,
  animate,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  animate: boolean;
}) => {
  const count = useCountUp(value, 1800, animate);
  const isOrange = label.includes("Рост") || label.includes("Профессий");
  return (
    <div
      className={`text-center p-6 ${isOrange ? "bg-gradient-to-b from-[#FF5500]/5 to-transparent" : ""}`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${isOrange ? "bg-[#FF5500]/15" : "bg-primary/10"}`}
      >
        <Icon
          name={icon as "Briefcase"}
          size={24}
          className={isOrange ? "text-[#FF5500]" : "text-primary"}
        />
      </div>
      <div
        className={`text-4xl font-black mb-1 ${isOrange ? "text-[#FF5500]" : "text-primary"}`}
      >
        {animate ? count : value}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const Index = () => {
  const [animateStats, setAnimateStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateStats(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-blue-50/40 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-1.5 text-sm">
              <Icon name="Sparkles" size={14} className="mr-1.5" />
              Образовательный проект
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Азбука промт-архитектора
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-3">
              Твой навигатор в мире профессий + ИИ
            </p>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              60 профессий. 60 готовых промтов. 1 универсальный навык для
              будущего.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="text-base px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-[#FF5500] hover:bg-[#E04A00] text-white border-0"
                asChild
              >
                <Link to="/alphabet">
                  <Icon name="Compass" size={20} className="mr-2" />
                  🧭 Исследовать профессии
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-2 border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10"
                asChild
              >
                <Link to="/resources">
                  <Icon name="Download" size={20} className="mr-2" />
                  📥 Скачать шпаргалку
                </Link>
              </Button>
            </div>

            {/* Alphabet Preview Tiles */}
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {alphabetPreview.map(({ letter, professions: profs }) => (
                <Link key={letter} to="/alphabet">
                  <div className="group relative w-16 h-16 bg-white rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">
                      {letter}
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 bg-gray-900 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-left shadow-xl">
                      {profs.map((p) => (
                        <div key={p} className="py-0.5">
                          · {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
              <Link to="/alphabet">
                <div className="w-16 h-16 bg-[#FF5500] rounded-2xl flex items-center justify-center hover:bg-[#E04A00] transition-colors shadow-md shadow-orange-300/50">
                  <span className="text-white text-xs font-bold text-center leading-tight">
                    Все
                    <br />
                    буквы
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Authors Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-blue-50 to-[#FF5500]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-[#FF5500] text-white border-0 px-4 py-1.5 text-sm font-semibold shadow-md">
                <Icon name="Users" size={14} className="mr-1.5" />
                Авторы проекта
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black">
                Кто создал <span className="bg-gradient-to-r from-primary to-[#FF5500] bg-clip-text text-transparent">«Азбуку промт-архитектора»</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Кирилл Зверев */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/projects/15463ef1-a448-436f-a0f5-371d6186f364/bucket/e676bc86-7f66-4a42-9cda-518726cb3841.jpg"
                    alt="Зверев Кирилл Александрович"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-black text-2xl leading-tight drop-shadow-lg">Зверев Кирилл Александрович</p>
                    <p className="text-white/90 text-base font-semibold mt-1">Автор проекта</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed mb-5 text-base">
                    Автор образовательных и творческих проектов в сфере искусственного интеллекта, профориентации и драматургии, волонтёр платформы «Добро.рф».
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Send" size={15} className="text-sky-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Telegram-канал «Арт и Мы»</p>
                        <p className="text-xs text-muted-foreground">Просветительский проект о культуре, науке и технологиях</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Brain" size={15} className="text-purple-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">«Архитектура мечты в соавторстве с нейросетью»</p>
                        <p className="text-xs text-muted-foreground">Проект на стыке архитектуры и искусственного интеллекта</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="BookOpen" size={15} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Пьеса «Путь созидания без единого исключения»</p>
                        <p className="text-xs text-muted-foreground">Социальная пьеса для подростков в 5 действиях, ~50 персонажей</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Heart" size={15} className="text-green-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Волонтёрство и фонд «АРГО»</p>
                        <p className="text-xs text-muted-foreground">Молодёжный куратор, помощник в разработке ИИ-продуктов для педагогов</p>
                      </div>
                    </div>
                  </div>
                  <a href="https://dobro.ru/volunteers/96438970/about" target="_blank" rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline">
                    <Icon name="ExternalLink" size={14} />
                    Профиль на Добро.рф
                  </a>
                </div>
              </div>

              {/* Лунева Лариса Владимировна */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#FF5500]/20 overflow-hidden hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/files/7408d43c-c75f-4485-ac2e-b27e52fe9407.jpg"
                    alt="Лунева Лариса Владимировна"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-black text-2xl leading-tight drop-shadow-lg">Лунева Лариса Владимировна</p>
                    <p className="text-white/90 text-base font-semibold mt-1">Руководитель проекта</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed mb-5 text-base">
                    Учитель черчения и изобразительного искусства, автор образовательных курсов и программ. Руководитель проекта «Азбука промт-архитектора».
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#FF5500]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="GraduationCap" size={15} className="text-[#FF5500]" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Автор образовательных курсов и программ</p>
                        <p className="text-xs text-muted-foreground">Разработка учебных программ и методических материалов</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Palette" size={15} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Учитель черчения и ИЗО</p>
                        <p className="text-xs text-muted-foreground">Многолетний опыт работы с молодёжью в творческой сфере</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Star" size={15} className="text-indigo-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Научный руководитель проекта</p>
                        <p className="text-xs text-muted-foreground">Сопровождение и развитие проектов Зверева Кирилла Александровича</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="BookMarked" size={15} className="text-rose-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Методология и педагогика ИИ</p>
                        <p className="text-xs text-muted-foreground">Интеграция технологий ИИ в образовательный процесс</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-8" ref={statsRef}>
          <div className="bg-white rounded-3xl shadow-xl border grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border overflow-hidden">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} animate={animateStats} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                  О чём этот проект?
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  ИИ — не замена человеку,
                  <br />
                  <span className="text-primary">а суперинструмент</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Мир меняется. Промт-архитектор — это не просто профессия, это
                  новая грамотность. Мы создали «Азбуку», чтобы показать: врач,
                  инженер, дизайнер и эколог могут использовать ИИ для усиления
                  своих навыков.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Нажми на любую букву и убедись сам — у каждой профессии есть
                  свой язык общения с ИИ.
                </p>
                <Button
                  asChild
                  className="shadow-md bg-[#FF5500] hover:bg-[#E04A00] text-white border-0"
                >
                  <Link to="/alphabet">
                    <Icon name="BookOpen" size={18} className="mr-2" />
                    Открыть азбуку профессий
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {alphabetPreview
                  .slice(0, 4)
                  .map(({ letter, professions: profs }) => (
                    <Link key={letter} to="/alphabet">
                      <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                        <CardContent className="p-4">
                          <div className="text-5xl font-black text-primary/20 mb-2 leading-none">
                            {letter}
                          </div>
                          <div className="space-y-1">
                            {profs.map((p) => (
                              <div
                                key={p}
                                className="text-xs font-medium text-foreground/70 leading-tight"
                              >
                                • {p}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Orange divider band */}
        <div className="bg-[#FF5500] py-5 overflow-hidden relative">
          <div className="flex gap-8 animate-none whitespace-nowrap container mx-auto px-4">
            {[
              "🚀 60 профессий",
              "⚡ 60 готовых промтов",
              "🎯 Принцип 4К",
              "🤖 ИИ-навык будущего",
              "🏭 Кейс ВСМПО-АВИСМА",
              "📊 89% рост понимания",
              "🚀 60 профессий",
              "⚡ 60 готовых промтов",
              "🎯 Принцип 4К",
            ].map((item, i) => (
              <span key={i} className="text-white font-bold text-sm shrink-0">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Professions */}
        <section className="container mx-auto px-4 py-16" id="professions">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full px-4 py-1.5 mb-4">
              <Icon name="Flame" size={14} className="text-[#FF5500]" />
              <span className="text-[#FF5500] text-sm font-semibold">
                Популярные профессии
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Откройте профессии будущего
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Каждая карточка — это готовый промт для разговора с ИИ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredProfessions.filter(Boolean).map((profession) => (
              <Link key={profession.id} to={`/profession/${profession.id}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group border-2 hover:border-primary/40 overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Icon
                          name={profession.icon as "Building2"}
                          size={24}
                          className="text-primary"
                        />
                      </div>
                      <div className="text-6xl font-black text-primary/10 leading-none">
                        {profession.letter}
                      </div>
                    </div>

                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs mb-2">
                        {profession.field}
                      </Badge>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {profession.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {profession.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/60">
                      <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">
                        Задача для промта
                      </p>
                      <p className="text-sm text-foreground/70 line-clamp-2">
                        {profession.challenge.substring(0, 90)}...
                      </p>
                    </div>

                    <div className="mt-3 flex items-center text-primary text-sm font-medium">
                      <span>Смотреть промт</span>
                      <Icon
                        name="ArrowRight"
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-[#FF5500] hover:bg-[#E04A00] text-white border-0 shadow-lg shadow-orange-300/40 hover:shadow-orange-400/50 hover:scale-105 transition-all"
              asChild
            >
              <Link to="/alphabet">
                <Icon name="Grid3x3" size={18} className="mr-2" />
                Смотреть все 60 профессий
              </Link>
            </Button>
          </div>
        </section>

        {/* VSMPO Teaser */}
        <section className="container mx-auto px-4 py-8">
          <Link to="/vsmpo">
            <Card className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-0 overflow-hidden relative group hover:shadow-2xl transition-all cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="Factory" size={40} className="text-white" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Badge className="mb-3 bg-white/20 text-white border-white/30">
                      Региональный кейс
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      ВСМПО-АВИСМА: Космос начинается здесь
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed">
                      Мировой лидер титановой индустрии находится в 15 минутах
                      езды от твоей школы. Узнай, какие специалисты здесь нужны
                      и как ИИ делает их работу ещё круче.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {[
                        "25% мирового рынка",
                        "17 000+ сотрудников",
                        "Поставщик Airbus и Boeing",
                      ].map((item) => (
                        <Badge
                          key={item}
                          className="bg-white/10 text-white border-white/20"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Icon
                        name="ArrowRight"
                        size={24}
                        className="text-white group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* Quote */}
        <section className="container mx-auto px-4 py-16" id="results">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-blue-50 border-primary/20 overflow-hidden relative">
              <div className="absolute top-4 left-6 text-8xl text-primary/10 font-serif leading-none select-none">
                "
              </div>
              <CardContent className="p-8 md:p-12 relative">
                <p className="text-xl md:text-2xl font-medium text-foreground/80 leading-relaxed mb-6 italic">
                  Раньше ИИ и титановый завод были для меня из разных вселенных.
                  Теперь я вижу, что могу стать инженером по цифровым двойникам
                  на ВСМПО!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      Участник апробации
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Ученик 10А класса, МАОУ СОШ №14
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources teaser */}
        <section className="container mx-auto px-4 py-8 pb-16" id="resources">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4">Ресурсы проекта</Badge>
              <h2 className="text-3xl font-bold">Набор промт-архитектора</h2>
              <p className="text-muted-foreground mt-2">
                Забери инструменты с собой
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: "PlayCircle",
                  title: "Мини-курс на Stepik",
                  desc: "5 видеоуроков + сертификат",
                  color: "bg-blue-50 text-blue-600",
                  href: "/resources",
                },
                {
                  icon: "Send",
                  title: "Telegram-канал",
                  desc: "Ежедневные промты и новости",
                  color: "bg-sky-50 text-sky-600",
                  href: "https://t.me/+QgiLIa1gFRY4Y2Iy",
                },
                {
                  icon: "FileDown",
                  title: "Шпаргалка PDF",
                  desc: "Принцип 4К и чек-лист 5С",
                  color: "bg-green-50 text-green-600",
                  href: "/resources",
                },
                {
                  icon: "BookOpen",
                  title: "Методичка для учителя",
                  desc: "Поурочное планирование",
                  color: "bg-orange-50 text-orange-600",
                  href: "/resources",
                },
              ].map((item) => (
                <Link key={item.title} to={item.href}>
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/40">
                    <CardContent className="p-5 text-center">
                      <div
                        className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <Icon name={item.icon as "BookOpen"} size={24} />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <Link to="/resources">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Все ресурсы проекта
                </Link>
              </Button>
            </div>
          </div>
        </section>


      </div>
    </Layout>
  );
};

export default Index;