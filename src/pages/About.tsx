import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const achievements = [
  { icon: "Trophy", title: "Победитель НПК-2025", desc: "Научно-практическая конференция школьников", color: "bg-yellow-100 text-yellow-700" },
  { icon: "Users", title: "500+ участников", desc: "Апробация в 12 школах Свердловской области", color: "bg-blue-100 text-blue-700" },
  { icon: "BookOpen", title: "60 профессий", desc: "С уникальными промтами для каждой", color: "bg-green-100 text-green-700" },
  { icon: "Factory", title: "Кейс ВСМПО", desc: "Региональный компонент с мировым заводом", color: "bg-orange-100 text-orange-700" },
];

const timeline = [
  { year: "Осень 2024", title: "Начало исследования", desc: "Кирилл Зверев начинает изучать промт-инжиниринг и его применение в профессиях" },
  { year: "Зима 2024", title: "Разработка азбуки", desc: "Создание 60 карточек профессий с уникальными промтами, кейс ВСМПО-АВИСМА" },
  { year: "Январь 2025", title: "Апробация", desc: "Тестирование материалов в 12 школах, 500+ учеников, анкетирование" },
  { year: "Февраль 2025", title: "Победа на конференции", desc: "Проект занял призовое место на НПК-2025 в номинации «Информационные технологии»" },
  { year: "2025", title: "Публикация сайта", desc: "Все материалы становятся доступными бесплатно для школ по всей России" },
];

const thanks = [
  { name: "МАОУ СОШ №14", role: "Основная площадка апробации", icon: "School" },
  { name: "Учителя-наставники", role: "Методическая поддержка и экспертиза", icon: "GraduationCap" },
  { name: "Ученики 9–11 классов", role: "500+ участников апробации", icon: "Users" },
  { name: "ВСМПО-АВИСМА", role: "Региональный кейс и вдохновение", icon: "Factory" },
];

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Header */}
        <section className="container mx-auto px-4 pt-12 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">О проекте</Badge>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Как родилась <span className="text-primary">Азбука</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              История одного школьного исследования, ставшего образовательным проектом
            </p>
          </div>
        </section>

        {/* Author */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Photo placeholder */}
                  <div className="w-full md:w-64 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center py-12 md:py-0 flex-shrink-0">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name="User" size={48} className="text-white" />
                      </div>
                      <p className="font-bold text-lg">Кирилл Зверев</p>
                      <p className="text-white/80 text-sm">Автор проекта</p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Автор и исследователь</Badge>
                    <h2 className="text-2xl font-bold mb-4">Кирилл Зверев</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ученик МАОУ СОШ №14 (г. Верхняя Салда, Свердловская область). 
                      Интересуется искусственным интеллектом, программированием и тем, 
                      как технологии меняют профессии будущего.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Идея «Азбуки» родилась из простого вопроса: «А как ИИ поможет мне, 
                      когда я вырасту и найду работу?» Оказалось, что у каждой профессии — 
                      свой язык общения с нейросетью.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Проект начался как исследовательская работа и вырос в образовательный 
                      ресурс для 500+ школьников из 12 школ Свердловской области.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4">Достижения</Badge>
              <h2 className="text-3xl font-bold">Результаты проекта</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map(a => (
                <Card key={a.title} className="text-center border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <div className={`w-12 h-12 ${a.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon name={a.icon as "Trophy"} size={22} />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{a.title}</h3>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4">История</Badge>
              <h2 className="text-3xl font-bold">Как создавался проект</h2>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-3 bottom-3 w-0.5 bg-primary/20" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-5 pl-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-md">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <Card className="flex-1 border-2 hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <Badge variant="outline" className="text-xs mb-2">{item.year}</Badge>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8 md:p-10">
                <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Миссия проекта</Badge>
                <h2 className="text-2xl font-bold mb-4">Почему это важно?</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Мир профессий меняется быстрее, чем обновляются учебники. 
                  Мы создали «Азбуку», потому что хотим, чтобы каждый школьник видел: 
                  <strong> ИИ — не угроза и не магия, а инструмент.</strong>
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Врач, инженер, дизайнер, эколог — все они уже используют нейросети. 
                  Вопрос не «заменит ли ИИ людей», а «как стать тем, кто управляет ИИ».
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Промт-архитектор — это не профессия из будущего. Это навык, который нужен уже сейчас.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Thanks */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4">Благодарности</Badge>
              <h2 className="text-3xl font-bold">Это командная работа</h2>
              <p className="text-muted-foreground mt-3">Проект создан при поддержке</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {thanks.map(t => (
                <Card key={t.name} className="text-center border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name={t.icon as "School"} size={22} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{t.name}</h3>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-primary to-blue-600 border-0 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Присоединяйся к проекту</h3>
                <p className="text-white/80 mb-6">
                  Поддержи проект, поделись с учителями или предложи сотрудничество
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-50 shadow-xl font-semibold" asChild>
                    <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" size={18} className="mr-2" />
                      Telegram-сообщество
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                    <Link to="/resources">
                      <Icon name="BookOpen" size={18} className="mr-2" />
                      Материалы проекта
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
