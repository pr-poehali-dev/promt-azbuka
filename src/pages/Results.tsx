import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  { name: "Осведомлённость\nоб ИИ", before: 11, after: 89 },
  { name: "Понимание\nпрофессий", before: 24, after: 76 },
  { name: "Интерес к\nцифровым навыкам", before: 31, after: 82 },
  { name: "Примеры из\nинженерии", before: 4, after: 42 },
];

const testimonials = [
  {
    text: "Материалы проекта использовал на уроке физики. Кейс ВСМПО вызвал наибольший отклик — ребята сами начали искать, кем работают их родители на заводе.",
    author: "Учитель физики",
    school: "МАОУ СОШ №14",
    avatar: "BookOpen",
  },
  {
    text: "Промт про инженера-металлурга я отправил папе на завод. Он сказал, что именно так они и решают задачи — только теперь у меня есть язык, чтобы это объяснить друзьям.",
    author: "Участник апробации",
    school: "Ученик 10-го класса",
    avatar: "User",
  },
  {
    text: "Раньше я думала, что ИИ — это только для программистов. После проекта поняла, что хочу стать нутрициологом и использовать ИИ для составления рационов.",
    author: "Участница апробации",
    school: "Ученица 9-го класса",
    avatar: "User",
  },
  {
    text: "Как классный руководитель хочу ввести занятия по промт-грамотности с 8-го класса. Проект дал нам готовый инструментарий.",
    author: "Классный руководитель",
    school: "МАОУ СОШ №14",
    avatar: "GraduationCap",
  },
];

const resultsTable = [
  { question: "Знакомство с понятием «промт-инжиниринг»", before: "8%", after: "94%", growth: "+86 п.п." },
  { question: "Понимание, как ИИ применяется в выбранной профессии", before: "11%", after: "89%", growth: "+78 п.п." },
  { question: "Снижение тревожности перед ИИ-технологиями", before: "—", after: "−41%", growth: "↓ тревожность" },
  { question: "Способность написать промт для своей профессии", before: "3%", after: "71%", growth: "+68 п.п." },
  { question: "Интерес к ВСМПО и инженерным профессиям", before: "4%", after: "42%", growth: "+38 п.п." },
  { question: "Желание пройти дальнейшее обучение промт-грамотности", before: "—", after: "87%", growth: "87% «Да»" },
];

const Results = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Header */}
        <section className="container mx-auto px-4 pt-12 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">Научное исследование</Badge>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Цифры не врут:
              <br />
              <span className="text-primary">промт-грамотность работает</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Результаты апробации среди 500+ школьников в 12 школах
            </p>
          </div>
        </section>

        {/* Key metrics */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "89%", label: "Освоили работу с ИИ", icon: "Brain", color: "text-blue-600 bg-blue-50" },
              { value: "−41%", label: "Снижение тревожности", icon: "Heart", color: "text-green-600 bg-green-50" },
              { value: "42%", label: "Интерес к инженерии", icon: "Factory", color: "text-orange-600 bg-orange-50" },
              { value: "71%", label: "Пишут промты самостоятельно", icon: "MessageSquare", color: "text-purple-600 bg-purple-50" },
            ].map(metric => (
              <Card key={metric.label} className="text-center border-2 hover:shadow-lg transition-all">
                <CardContent className="p-5">
                  <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={metric.icon as "Brain"} size={22} />
                  </div>
                  <div className="text-3xl font-black text-primary mb-1">{metric.value}</div>
                  <div className="text-xs text-muted-foreground font-medium leading-tight">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Charts */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Диаграммы</Badge>
              <h2 className="text-3xl font-bold">До и после апробации</h2>
              <p className="text-muted-foreground mt-3">Сравнение показателей входного и выходного анкетирования</p>
            </div>

            <Card className="border-2 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-6 mb-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-muted" />
                    <span className="text-sm text-muted-foreground">До апробации (%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-primary" />
                    <span className="text-sm text-muted-foreground">После апробации (%)</span>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={v => `${v}%`} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="before" name="До" radius={[4, 4, 0, 0]} fill="hsl(var(--muted))" />
                    <Bar dataKey="after" name="После" radius={[4, 4, 0, 0]}>
                      {chartData.map((_, index) => (
                        <Cell key={index} fill="hsl(var(--primary))" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed table */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4">Сводная таблица</Badge>
              <h2 className="text-3xl font-bold">Детальные результаты</h2>
              <p className="text-muted-foreground mt-3">По данным входного и выходного анкетирования</p>
            </div>

            <Card className="border-2 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="text-left p-4 font-semibold text-sm">Показатель</th>
                      <th className="text-center p-4 font-semibold text-sm w-24">До</th>
                      <th className="text-center p-4 font-semibold text-sm w-24">После</th>
                      <th className="text-center p-4 font-semibold text-sm w-32">Результат</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultsTable.map((row, i) => (
                      <tr key={i} className="border-b hover:bg-muted/20 transition-colors">
                        <td className="p-4 text-sm text-foreground/80">{row.question}</td>
                        <td className="p-4 text-center text-sm text-muted-foreground">{row.before}</td>
                        <td className="p-4 text-center text-sm font-semibold text-primary">{row.after}</td>
                        <td className="p-4 text-center">
                          <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">
                            {row.growth}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Отзывы</Badge>
              <h2 className="text-3xl font-bold">Что говорят участники</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <Card key={i} className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="text-4xl text-primary/20 font-serif leading-none mb-3">"</div>
                    <p className="text-base text-foreground/80 leading-relaxed italic mb-5">{t.text}</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={t.avatar as "User"} size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{t.author}</div>
                        <div className="text-xs text-muted-foreground">{t.school}</div>
                      </div>
                    </div>
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
              <CardContent className="p-8 md:p-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Хочешь тоже стать промт-архитектором?</h3>
                <p className="text-white/80 mb-6 text-base">Все материалы проекта доступны бесплатно</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-50 shadow-xl font-semibold" asChild>
                    <Link to="/resources">
                      <Icon name="Download" size={18} className="mr-2" />
                      Скачать ресурсы
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                    <Link to="/alphabet">
                      <Icon name="BookOpen" size={18} className="mr-2" />
                      Изучить азбуку
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

export default Results;
