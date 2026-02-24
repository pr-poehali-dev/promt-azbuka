import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const resources = [
  {
    icon: "PlayCircle",
    color: "bg-blue-100 text-blue-600",
    badge: "Видеокурс",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Мини-курс на Stepik",
    desc: "5 видеоуроков, практические задания, сертификат по окончании",
    features: ["5 видеоуроков", "Практические задания", "Сертификат", "Бесплатно"],
    cta: "🚀 Перейти к курсу",
    href: "https://stepik.org",
    external: true,
  },
  {
    icon: "Send",
    color: "bg-sky-100 text-sky-600",
    badge: "Сообщество",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    title: "Telegram-канал",
    desc: "Ежедневные промты, новости об ИИ и профессиях, общение с участниками",
    features: ["Ежедневные промты", "Новости ИИ", "Сообщество", "Обновления"],
    cta: "📱 Подписаться",
    href: "https://t.me/+QgiLIa1gFRY4Y2Iy",
    external: true,
  },
  {
    icon: "FileDown",
    color: "bg-green-100 text-green-600",
    badge: "PDF",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
    title: "Памятка-шпаргалка",
    desc: "Принцип 4К и чек-лист 5С промт-архитектора на одном листе",
    features: ["Принцип 4К", "Чек-лист 5С", "Формат A4", "Бесплатно"],
    cta: "📥 Скачать бесплатно",
    href: "#download",
    external: false,
  },
  {
    icon: "BookOpen",
    color: "bg-orange-100 text-orange-600",
    badge: "Для педагогов",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    title: "Методичка для учителя",
    desc: "Поурочное планирование, презентации, рабочие листы и методические рекомендации",
    features: ["Поурочный план", "Презентации", "Рабочие листы", "По запросу"],
    cta: "✉️ Запросить материалы",
    href: "#request",
    external: false,
  },
];

const principle4K = [
  { letter: "К", title: "Контекст", desc: "Задай роль и ситуацию для ИИ", example: "«Ты — опытный врач-кардиолог»" },
  { letter: "К", title: "Конкретика", desc: "Опиши задачу максимально точно", example: "«Пациент, 55 лет, боли за грудиной»" },
  { letter: "К", title: "Критерии", desc: "Укажи требования к результату", example: "«Топ-5 причин, таблица, кратко»" },
  { letter: "К", title: "Контроль", desc: "Попроси уточнить или исправить", example: "«Добавь источники для каждого пункта»" },
];

const checklist5S = [
  { emoji: "🎯", title: "Специфичность", desc: "Промт должен быть конкретным, не расплывчатым" },
  { emoji: "📐", title: "Структура", desc: "Используй нумерованные списки в запросе" },
  { emoji: "🧪", title: "Сценарий", desc: "Дай ИИ роль эксперта в нужной области" },
  { emoji: "📊", title: "Стандарт", desc: "Укажи формат вывода (таблица, список, JSON)" },
  { emoji: "🔄", title: "Система", desc: "Итерируй промт — улучшай результат за 3–5 шагов" },
];

const Resources = () => {
  const { toast } = useToast();
  const [requestForm, setRequestForm] = useState({ name: "", school: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Заявка отправлена!", description: "Мы пришлём методичку на указанный email в течение 24 часов" });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Header */}
        <section className="container mx-auto px-4 pt-12 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Бесплатные материалы</Badge>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Набор <span className="text-primary">промт-архитектора</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Забери инструменты с собой — всё, что нужно для старта
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {resources.map(res => (
              <Card key={res.title} className="border-2 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden" id={res.href === "#download" ? "download" : undefined}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 ${res.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon name={res.icon as "PlayCircle"} size={28} />
                    </div>
                    <div>
                      <Badge className={`${res.badgeColor} text-xs mb-2`}>{res.badge}</Badge>
                      <h3 className="font-bold text-lg">{res.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{res.desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {res.features.map(f => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-foreground/70">
                        <Icon name="Check" size={12} className="text-green-600" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" asChild={res.external}>
                    {res.external ? (
                      <a href={res.href} target="_blank" rel="noopener noreferrer">{res.cta}</a>
                    ) : (
                      <span onClick={() => {
                        if (res.href === "#download") {
                          toast({ title: "Скачивание!", description: "Шпаргалка скачивается..." });
                        } else {
                          document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}>{res.cta}</span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 4K Principle */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Методология</Badge>
              <h2 className="text-3xl font-bold">Принцип 4К промт-архитектора</h2>
              <p className="text-muted-foreground mt-3">
                Четыре ключа к эффективному запросу для ИИ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principle4K.map((item, i) => (
                <Card key={i} className="border-2 hover:border-primary/40 hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-2xl font-black text-white">{item.letter}</span>
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs font-mono text-foreground/70">{item.example}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5S Checklist */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">Чек-лист</Badge>
              <h2 className="text-3xl font-bold">Чек-лист 5С перед отправкой промта</h2>
              <p className="text-muted-foreground mt-3">Проверь каждый пункт перед тем, как нажать Enter</p>
            </div>

            <div className="space-y-3">
              {checklist5S.map((item, i) => (
                <Card key={i} className="border-2 hover:shadow-md transition-all">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <div className="w-6 h-6 border-2 border-border rounded-md" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Request form */}
        <section className="container mx-auto px-4 py-16" id="request">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-5">
                <div className="flex items-center gap-3">
                  <Icon name="BookOpen" size={24} className="text-white" />
                  <h2 className="text-xl font-bold text-white">Методичка для учителя</h2>
                </div>
                <p className="text-white/80 text-sm mt-1">Поурочное планирование, презентации и рабочие листы</p>
              </div>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                    <p className="text-muted-foreground">Мы пришлём методичку на указанный email в течение 24 часов</p>
                  </div>
                ) : (
                  <form onSubmit={handleRequest} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        placeholder="Иванова Мария Ивановна"
                        value={requestForm.name}
                        onChange={e => setRequestForm({ ...requestForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="school">Учебное заведение</Label>
                      <Input
                        id="school"
                        placeholder="МАОУ СОШ №14, Верхняя Салда"
                        value={requestForm.school}
                        onChange={e => setRequestForm({ ...requestForm, school: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email для отправки материалов</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="teacher@school.ru"
                        value={requestForm.email}
                        onChange={e => setRequestForm({ ...requestForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Как планируете использовать материалы?</Label>
                      <Textarea
                        id="message"
                        placeholder="Например: планирую провести серию уроков по профориентации в 9–11 классах"
                        value={requestForm.message}
                        onChange={e => setRequestForm({ ...requestForm, message: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base">
                      ✉️ Запросить методичку
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
