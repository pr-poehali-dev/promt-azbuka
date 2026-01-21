import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    supportType: "information"
  });

  const achievements = [
    { icon: "Award", text: "Победитель школьной конференции" },
    { icon: "Users", text: "500+ участников апробации" },
    { icon: "BookOpen", text: "60 профессий в азбуке" },
    { icon: "GraduationCap", text: "12 школ партнёров" }
  ];

  const plans = [
    { icon: "Book", text: "Печать полноценной книги «Азбука промт-архитектора»" },
    { icon: "Globe", text: "Расширение базы профессий до 100+" },
    { icon: "Video", text: "Создание видеокурса для школьников" },
    { icon: "Users", text: "Проведение региональных мастер-классов" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl text-primary">Промт-Азбука</span>
          </a>
          <Button variant="outline" size="sm" asChild>
            <a href="/">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </a>
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="text-5xl">💙</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Поддержать проект
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Помогите школьному исследованию стать доступным для тысяч школьников по всей России
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Icon name="Target" className="text-primary" size={32} />
                О проекте
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                «Первая азбука промт-архитектора» — это школьное исследование, созданное учеником 
                МАОУ «Школа №14» (г. Верхняя Салда) <strong>Кириллом Зверевым</strong> под руководством 
                педагога <strong>Ларисы Луневой</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Проект показывает, как искусственный интеллект и промт-инжиниринг меняют 60 различных 
                профессий — от архитектора до юриста. Особое внимание уделено кейсу предприятия 
                ВСМПО-АВИСМА, демонстрирующему реальное применение ИИ в металлургии.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-primary/5 p-4 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-primary" size={20} />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                  Результаты исследования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Освоение работы с ИИ</span>
                    <span className="text-sm font-bold text-primary">+89%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Понимание профессий</span>
                    <span className="text-sm font-bold text-primary">+76%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Интерес к цифровым навыкам</span>
                    <span className="text-sm font-bold text-primary">+82%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  * По результатам анкетирования 520 школьников из 12 образовательных учреждений
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Rocket" className="text-primary" size={24} />
                  Планы развития
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plans.map((plan, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={plan.icon as any} className="text-primary" size={16} />
                      </div>
                      <span className="text-sm leading-relaxed">{plan.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Форма для партнёрства</CardTitle>
              <CardDescription>
                Предложите сотрудничество или помощь в развитии проекта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup 
                value={formData.supportType} 
                onValueChange={(value) => setFormData({...formData, supportType: value})}
                className="grid md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg border-2 border-transparent has-[:checked]:border-primary cursor-pointer">
                  <RadioGroupItem value="information" id="info-support" />
                  <Label htmlFor="info-support" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Icon name="Share2" size={18} className="text-primary" />
                      <span className="font-semibold text-sm">Информационная</span>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg border-2 border-transparent has-[:checked]:border-primary cursor-pointer">
                  <RadioGroupItem value="expert" id="expert-support" />
                  <Label htmlFor="expert-support" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Icon name="Lightbulb" size={18} className="text-primary" />
                      <span className="font-semibold text-sm">Экспертная</span>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg border-2 border-transparent has-[:checked]:border-primary cursor-pointer">
                  <RadioGroupItem value="partnership" id="partnership-support" />
                  <Label htmlFor="partnership-support" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Icon name="Handshake" size={18} className="text-primary" />
                      <span className="font-semibold text-sm">Партнёрство</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              <Separator />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Организация</Label>
                <Input 
                  id="organization" 
                  placeholder="Школа, компания или организация"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ваше предложение *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите, как вы хотите помочь проекту или предложите сотрудничество"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button size="lg" className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить предложение
              </Button>

              <div className="bg-white rounded-lg p-4 border">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Для срочной связи:</strong>
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <a href="mailto:l.luneva@live.ru" className="text-primary hover:underline font-medium">
                      l.luneva@live.ru
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>МАОУ «Школа №14», г. Верхняя Салда, Свердловская область</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 bg-primary/5 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-3">Проект уже поддержали</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                МАОУ «Школа №14»
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Учителя информатики
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                211+ подписчиков Telegram
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Профориентологи
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
