import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Index = () => {
  const professions = [
    {
      letter: "А",
      title: "Архитектор",
      field: "Строительство",
      icon: "Building2",
      prompt: "Создай концепцию экологичного жилого комплекса с учётом энергоэффективности",
      description: "Проектирование зданий и создание устойчивой городской среды"
    },
    {
      letter: "Б",
      title: "Биотехнолог",
      field: "Наука",
      icon: "Microscope",
      prompt: "Разработай методику выращивания клеточных культур для медицинских исследований",
      description: "Работа с живыми системами для создания новых продуктов"
    },
    {
      letter: "В",
      title: "Видеопродюсер",
      field: "Творчество",
      icon: "Video",
      prompt: "Создай сценарий образовательного ролика о цифровых профессиях для подростков",
      description: "Создание видеоконтента от идеи до финального монтажа"
    },
    {
      letter: "Д",
      title: "Дата-аналитик",
      field: "IT",
      icon: "BarChart3",
      prompt: "Проанализируй тренды продаж за квартал и предложи стратегию роста",
      description: "Анализ больших данных для принятия бизнес-решений"
    },
    {
      letter: "И",
      title: "Инженер-металлург",
      field: "Инженерия",
      icon: "Hammer",
      prompt: "Оптимизируй состав титанового сплава для авиационной промышленности",
      description: "Разработка и улучшение металлических материалов"
    },
    {
      letter: "М",
      title: "Маркетолог",
      field: "Бизнес",
      icon: "TrendingUp",
      prompt: "Разработай кампанию по продвижению образовательного продукта для школьников",
      description: "Продвижение товаров и услуг на рынке"
    }
  ];

  const stats = [
    { value: "60+", label: "Профессий в азбуке", icon: "Briefcase" },
    { value: "500+", label: "Участников апробации", icon: "Users" },
    { value: "89%", label: "Улучшили навыки", icon: "TrendingUp" },
    { value: "12+", label: "Школ участвуют", icon: "GraduationCap" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl text-primary">Промт-Азбука</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#professions" className="text-sm font-medium hover:text-primary transition-colors">Профессии</a>
            <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">Результаты</a>
            <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">Ресурсы</a>
            <Button variant="outline" size="sm">
              <Icon name="Mail" size={16} className="mr-2" />
              Контакты
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Образовательный проект
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
            Первая азбука промт-архитектора
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Откройте мир профессий будущего через призму промт-инжиниринга. 
            Для школьников 14-18 лет, учителей и родителей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              <Icon name="Search" size={20} className="mr-2" />
              Исследовать профессии
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать шпаргалку
            </Button>
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-base">
              <Icon name="Heart" size={20} className="mr-2" />
              Поддержать проект
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={stat.icon as any} className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="professions" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Популярные профессии</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Изучите 60 профессий от А до Я с готовыми промтами для каждой специальности
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((prof, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {prof.letter}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Icon name={prof.icon as any} size={12} className="mr-1" />
                    {prof.field}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{prof.title}</CardTitle>
                <CardDescription className="line-clamp-2">{prof.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 rounded-lg p-3 border border-primary/10">
                  <div className="flex items-start gap-2">
                    <Icon name="Terminal" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {prof.prompt}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button size="lg" variant="outline">
            Смотреть все 60 профессий
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="results" className="bg-gradient-to-br from-primary/5 via-blue-50/50 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Результаты апробации</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 500 школьников из 12 школ прошли обучение по методике промт-архитектуры
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary to-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={24} />
                  Участники проекта
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Школьники 14-18 лет</span>
                    <span className="text-2xl font-bold text-primary">520</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '89%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Педагоги</span>
                    <span className="text-2xl font-bold text-primary">45</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-accent to-orange-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} />
                  Улучшение навыков
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Работа с ИИ</span>
                    <span className="text-2xl font-bold text-accent">+89%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '89%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Профориентация</span>
                    <span className="text-2xl font-bold text-accent">+76%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="resources" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Образовательные ресурсы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Бесплатные материалы для школьников, учителей и родителей
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookMarked" className="text-primary" size={24} />
              </div>
              <CardTitle>Мини-курс Stepik</CardTitle>
              <CardDescription>
                Интерактивный курс по основам промт-инжиниринга с практическими заданиями
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Перейти к курсу
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Send" className="text-primary" size={24} />
              </div>
              <CardTitle>Telegram-канал</CardTitle>
              <CardDescription>
                Новости проекта, полезные материалы и сообщество единомышленников
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Подписаться
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="FileText" className="text-primary" size={24} />
              </div>
              <CardTitle>Памятка PDF</CardTitle>
              <CardDescription>
                Шпаргалка с основными промтами для 60 профессий в удобном формате
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-4">Поддержать проект</h2>
              <p className="text-lg text-white/90">
                Помогите развивать цифровые навыки у молодёжи и создавать методические материалы для школ
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Варианты поддержки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup defaultValue="financial" className="space-y-3">
                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <RadioGroupItem value="financial" id="financial" className="border-white text-white" />
                    <Label htmlFor="financial" className="flex-1 cursor-pointer text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Wallet" size={18} />
                        <span className="font-semibold">Финансовая поддержка</span>
                      </div>
                      <p className="text-sm text-white/70">Яндекс.Кошелёк, Тинькофф, Сбербанк</p>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <RadioGroupItem value="info" id="info" className="border-white text-white" />
                    <Label htmlFor="info" className="flex-1 cursor-pointer text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Share2" size={18} />
                        <span className="font-semibold">Информационная поддержка</span>
                      </div>
                      <p className="text-sm text-white/70">Рассказать в соцсетях и школах</p>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <RadioGroupItem value="expert" id="expert" className="border-white text-white" />
                    <Label htmlFor="expert" className="flex-1 cursor-pointer text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Lightbulb" size={18} />
                        <span className="font-semibold">Экспертная поддержка</span>
                      </div>
                      <p className="text-sm text-white/70">Консультации и мастер-классы</p>
                    </Label>
                  </div>
                </RadioGroup>

                <div className="space-y-3 pt-4">
                  <div>
                    <Label htmlFor="amount" className="text-white mb-2 block">Сумма поддержки (необязательно)</Label>
                    <Input 
                      id="amount" 
                      type="number" 
                      placeholder="Введите сумму" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email для связи</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Поддержать проект
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-white/70 mb-2">На что пойдут средства:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      Развитие сайта
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      Печать книги
                    </Badge>
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      Мероприятия
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="text-white" size={18} />
                </div>
                <span className="font-bold text-lg">Промт-Азбука</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательный проект для профориентации школьников через промт-инжиниринг
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Проект</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#professions" className="hover:text-primary transition-colors">Профессии</a></li>
                <li><a href="#results" className="hover:text-primary transition-colors">Результаты</a></li>
                <li><a href="#resources" className="hover:text-primary transition-colors">Ресурсы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Для педагогов</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Методические материалы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Презентации</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мастер-классы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@promt-azbuka.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Школа №14, г. Верхняя Салда</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Промт-Азбука. Проект Кирилла Зверева
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
