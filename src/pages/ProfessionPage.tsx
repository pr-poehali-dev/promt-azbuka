import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { getProfessionById, getRelatedProfessions } from "@/data/professions";
import { useToast } from "@/hooks/use-toast";

const ProfessionPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const profession = id ? getProfessionById(id) : null;

  if (!profession) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold mb-4">Профессия не найдена</h1>
          <p className="text-muted-foreground mb-8">Возможно, вы перешли по неверной ссылке</p>
          <Button asChild>
            <Link to="/alphabet">← Вернуться к азбуке</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = getRelatedProfessions(profession.related || []);

  const copyPrompt = () => {
    navigator.clipboard.writeText(profession.prompt);
    setCopied(true);
    toast({ title: "Промт скопирован!", description: "Вставь его в ChatGPT, Claude или другой ИИ" });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-blue-50/20 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <Link to="/alphabet" className="hover:text-primary transition-colors">Азбука профессий</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground font-medium">{profession.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Big letter */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-6xl font-black text-white leading-none">{profession.letter}</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">{profession.field}</Badge>
                  <Badge variant="outline" className="text-muted-foreground">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    {profession.trend}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-3">{profession.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{profession.description}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button onClick={copyPrompt} className="shadow-md">
                    <Icon name={copied ? "Check" : "Copy"} size={18} className="mr-2" />
                    {copied ? "Скопировано!" : "📋 Скопировать промт"}
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/alphabet">
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Все профессии
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Who is this? */}
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold">Кто это?</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-base">{profession.who}</p>
              </CardContent>
            </Card>

            {/* Challenge */}
            <Card className="border-2 border-orange-200 bg-orange-50/50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold">Вызов и тренд</h2>
                </div>
                <div className="bg-white rounded-xl p-5 border border-orange-200 mb-4">
                  <p className="text-base font-medium text-foreground/90 leading-relaxed italic">
                    "{profession.challenge}"
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-orange-100 rounded-xl p-4">
                  <Icon name="BarChart2" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-orange-800 font-medium">{profession.stat}</p>
                </div>
              </CardContent>
            </Card>

            {/* Prompt Solution */}
            <Card className="border-2 border-primary/30 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-blue-600 px-6 md:px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="MessageSquare" size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Как промт-архитектор решает эту задачу?</h2>
                </div>
              </div>
              <CardContent className="p-0">
                {/* Chat window */}
                <div className="bg-gray-50 border-b px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">ChatGPT / Claude / Gemini</span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4 relative">
                    <div className="absolute -top-3 left-5 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                      Промт
                    </div>
                    <pre className="whitespace-pre-wrap font-mono text-sm text-foreground/80 leading-relaxed">
                      {profession.prompt}
                    </pre>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={copyPrompt} className="flex-1 shadow-md text-base h-12">
                      <Icon name={copied ? "Check" : "Copy"} size={18} className="mr-2" />
                      {copied ? "✅ Скопировано!" : "📋 Копировать промт"}
                    </Button>
                  </div>

                  <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <Icon name="Lightbulb" size={18} className="text-blue-600" />
                      Суть синергии
                    </h3>
                    <p className="text-blue-800 text-sm leading-relaxed">{profession.promptExplanation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Professions */}
            {related.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <Icon name="Network" size={20} className="text-primary" />
                  Связанные профессии
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {related.map(rel => (
                    <Link key={rel.id} to={`/profession/${rel.id}`}>
                      <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-2 hover:border-primary/40">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                              <Icon name={rel.icon as "Building2"} size={20} className="text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-sm group-hover:text-primary transition-colors">{rel.title}</p>
                              <p className="text-xs text-muted-foreground">{rel.field}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary to-blue-600 border-0 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Хочешь узнать про другие профессии?</h3>
                <p className="text-white/80 mb-6">В нашей азбуке ещё 59 профессий с готовыми промтами</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-50 shadow-xl font-semibold" asChild>
                    <Link to="/alphabet">
                      <Icon name="BookOpen" size={18} className="mr-2" />
                      Открыть всю азбуку
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                    <Link to="/vsmpo">
                      <Icon name="Factory" size={18} className="mr-2" />
                      Кейс ВСМПО-АВИСМА
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionPage;
