import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { getProfessionById } from "@/data/professions";

const timeline = [
  {
    step: 1,
    title: "Добыча сырья",
    desc: "Ильменитовые руды и титановые концентраты",
    icon: "Mountain",
    specialist: "Геолог",
    specialistId: "geolog",
    color: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    step: 2,
    title: "Плавка",
    desc: "Выплавка губчатого титана и слитков",
    icon: "Flame",
    specialist: "Инженер-металлург",
    specialistId: "inzhener-metallurg",
    color: "bg-orange-100 text-orange-700 border-orange-200",
  },
  {
    step: 3,
    title: "Штамповка",
    desc: "Горячая и холодная обработка давлением",
    icon: "Hammer",
    specialist: "Специалист по 3D-печати",
    specialistId: "specialist-3d-pechati",
    color: "bg-red-100 text-red-700 border-red-200",
  },
  {
    step: 4,
    title: "Мехобработка",
    desc: "Точная механическая обработка деталей",
    icon: "Settings",
    specialist: "Дефектоскопист",
    specialistId: "defektoskopist",
    color: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    step: 5,
    title: "Готовая деталь",
    desc: "Лопатка турбины для авиадвигателя",
    icon: "Plane",
    specialist: "Инж. цифровых двойников",
    specialistId: "inzhener-cifrovyh-dvojnikov",
    color: "bg-blue-100 text-blue-700 border-blue-200",
  },
];

const keyProfessions = [
  {
    id: "inzhener-metallurg",
    highlight: "Создаёт сплавы для деталей двигателей, выдерживающих 600°C",
    badge: "Ключевая профессия",
  },
  {
    id: "specialist-3d-pechati",
    highlight: "Печатает сложные детали без традиционного литья",
    badge: "Высокий спрос",
  },
  {
    id: "defektoskopist",
    highlight: "Контролирует качество каждой детали перед полётом",
    badge: "Безопасность",
  },
  {
    id: "inzhener-cifrovyh-dvojnikov",
    highlight: "Создаёт виртуальные модели для оптимизации производства",
    badge: "Профессия будущего",
  },
];

const stats = [
  { value: "100%", label: "российского авиационного титана", icon: "Flag" },
  { value: "25%", label: "мирового рынка титана", icon: "Globe" },
  { value: "17 000+", label: "сотрудников на заводе", icon: "Users" },
  { value: "15 мин", label: "от твоей школы", icon: "MapPin" },
];

const VSMPO = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-white">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-16 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-1.5">
              <Icon name="Factory" size={14} className="mr-2" />
              Региональный кейс · Верхняя Салда
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              ВСМПО-АВИСМА:
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Космос начинается здесь
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-4 leading-relaxed">
              И тебе здесь найдётся место.
            </p>

            <p className="text-base text-white/60 mb-10 max-w-2xl mx-auto">
              Мировой лидер титановой индустрии находится в 15 минутах езды от твоей школы. 
              Узнай, какие специалисты здесь нужны и как ИИ делает их работу ещё круче.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 shadow-xl font-semibold">
                <Icon name="Factory" size={18} className="mr-2" />
                Изучить профессии завода
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/profession/inzhener-metallurg">
                  <Icon name="Hammer" size={18} className="mr-2" />
                  Инженер-металлург
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map(stat => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
                <Icon name={stat.icon as "Flag"} size={24} className="text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* White section */}
        <div className="bg-white">
          {/* Timeline */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Производственный цикл</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">От руды до самолёта</h2>
                <p className="text-muted-foreground mt-3">
                  Нажми на шаг, чтобы узнать, какой специалист там работает
                </p>
              </div>

              {/* Timeline steps */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-border hidden md:block" />

                <div className="space-y-6">
                  {timeline.map((step, idx) => {
                    const isLeft = idx % 2 === 0;
                    const isActive = activeStep === step.step;
                    const prof = getProfessionById(step.specialistId);
                    return (
                      <div
                        key={step.step}
                        className={`relative flex items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                      >
                        {/* Step number */}
                        <div className="hidden md:flex w-1/2 justify-end md:justify-start">
                          <div className="md:w-1/2" />
                        </div>

                        {/* Card */}
                        <button
                          onClick={() => setActiveStep(isActive ? null : step.step)}
                          className={`w-full md:w-auto flex-1 text-left`}
                        >
                          <Card className={`border-2 transition-all hover:shadow-lg ${isActive ? "border-primary shadow-lg" : "hover:border-primary/40"}`}>
                            <CardContent className="p-5">
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center ${step.color}`}>
                                  <Icon name={step.icon as "Mountain"} size={20} />
                                </div>
                                <div>
                                  <div className="text-xs text-muted-foreground font-medium">Шаг {step.step}</div>
                                  <h3 className="font-bold text-base">{step.title}</h3>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">{step.desc}</p>

                              {isActive && prof && (
                                <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Icon name={prof.icon as "Building2"} size={16} className="text-primary" />
                                    <span className="font-semibold text-sm text-primary">{prof.title}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{prof.description}</p>
                                  <Link to={`/profession/${prof.id}`} onClick={e => e.stopPropagation()}>
                                    <Button size="sm" variant="outline" className="w-full">
                                      Смотреть промт →
                                    </Button>
                                  </Link>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Key professions */}
          <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl mx-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Профессии на ВСМПО-АВИСМА</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ключевые специальности завода</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyProfessions.map(kp => {
                  const prof = getProfessionById(kp.id);
                  if (!prof) return null;
                  return (
                    <Link key={kp.id} to={`/profession/${kp.id}`}>
                      <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group border-2 hover:border-primary/40">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Icon name={prof.icon as "Building2"} size={28} className="text-primary" />
                            </div>
                            <div>
                              <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs">
                                {kp.badge}
                              </Badge>
                              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                                {prof.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{prof.field}</p>
                            </div>
                          </div>
                          <p className="text-sm text-foreground/70 mb-4">{kp.highlight}</p>
                          <div className="bg-muted/50 rounded-lg p-3">
                            <p className="text-xs text-muted-foreground font-medium mb-1">Тренд:</p>
                            <p className="text-xs text-foreground/70">{prof.trend}</p>
                          </div>
                          <div className="mt-4 flex items-center text-primary text-sm font-medium">
                            <span>Смотреть промт</span>
                            <Icon name="ArrowRight" size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why important */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Почему это важно для тебя?</Badge>
                  <h2 className="text-3xl font-bold mb-6 leading-tight">
                    Стань частью команды,<br />
                    <span className="text-primary">делающей невозможное</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ты можешь стать частью команды, которая делает то, что больше никто в мире не умеет. 
                    Детали для самолётов Airbus и Boeing рождаются здесь — в Верхней Салде.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    А навык промт-архитектора — твой быстрый старт в этой карьере. 
                    Инженер, умеющий работать с ИИ, стоит дороже и продвигается быстрее.
                  </p>
                  <Button asChild className="shadow-md">
                    <Link to="/alphabet">
                      <Icon name="Compass" size={18} className="mr-2" />
                      Найти свою профессию
                    </Link>
                  </Button>
                </div>

                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Цитата из апробации</h3>
                    <blockquote className="text-base italic text-foreground/80 leading-relaxed mb-4">
                      «Раньше ИИ и титановый завод были для меня из разных вселенных. 
                      Теперь я вижу, что могу стать инженером по цифровым двойникам на ВСМПО!»
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Ученик 10А класса</div>
                        <div className="text-xs text-muted-foreground">МАОУ СОШ №14, участник апробации</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-0 text-white overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={40} className="text-blue-300" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-3">15 минут — и ты уже на заводе</h3>
                      <p className="text-white/80 leading-relaxed">
                        ВСМПО-АВИСМА и МАОУ СОШ №14 находятся в одном городе — Верхняя Салда, Свердловская область. 
                        Поставщик Boeing, Airbus и Rolls-Royce — в 15 минутах от дома.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="bg-white text-slate-900 hover:bg-gray-100 font-semibold" asChild>
                        <Link to="/results">
                          Результаты апробации →
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default VSMPO;
