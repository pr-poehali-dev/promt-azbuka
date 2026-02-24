import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { professions, getProfessionsByLetter, ALPHABET } from "@/data/professions";

const Alphabet = () => {
  const [hoveredLetter, setHoveredLetter] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const letterRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const byLetter = getProfessionsByLetter();

  const scrollToLetter = (letter: string) => {
    const el = letterRefs.current[letter];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = search.trim()
    ? professions.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.field.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Orange top bar */}
        <div className="bg-gradient-to-r from-[#FF5500] to-[#FF8C00] h-2" />
        {/* Header */}
        <section className="container mx-auto px-4 pt-12 pb-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full px-4 py-1.5 mb-4">
              <Icon name="BookOpen" size={14} className="text-[#FF5500]" />
              <span className="text-[#FF5500] text-sm font-semibold">60 профессий · 22 буквы</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Азбука <span className="text-[#FF5500]">профессий будущего</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Выбери букву, чтобы найти свою профессию. Наведи на букву — увидишь профессии.
            </p>

            <div className="relative max-w-md mx-auto">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск профессии или отрасли..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 h-12 text-base shadow-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Interactive Alphabet */}
        {!search && (
          <section className="container mx-auto px-4 pb-12">
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {ALPHABET.map(letter => {
                const hasProfs = !!byLetter[letter];
                return (
                  <div
                    key={letter}
                    className="relative group"
                    onMouseEnter={() => setHoveredLetter(letter)}
                    onMouseLeave={() => setHoveredLetter(null)}
                  >
                    <button
                      onClick={() => hasProfs && scrollToLetter(letter)}
                      disabled={!hasProfs}
                      className={`w-14 h-14 rounded-2xl text-2xl font-black transition-all ${
                        hasProfs
                          ? "bg-white border-2 border-border hover:border-[#FF5500] hover:bg-[#FF5500] hover:text-white hover:shadow-lg hover:shadow-orange-300/50 cursor-pointer text-[#FF5500] hover:scale-110"
                          : "bg-gray-50 border-2 border-gray-100 text-gray-300 cursor-default"
                      }`}
                    >
                      {letter}
                    </button>

                    {hasProfs && hoveredLetter === letter && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-gray-900 text-white text-sm rounded-xl p-3 z-20 shadow-2xl animate-fade-in">
                        <div className="font-bold mb-2 text-primary">{letter}</div>
                        {byLetter[letter].map(p => (
                          <div key={p.id} className="py-1 text-xs border-b border-white/10 last:border-0 text-white/90">
                            {p.title}
                            <span className="text-white/50 ml-1">· {p.field}</span>
                          </div>
                        ))}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Professions List */}
        <section className="container mx-auto px-4 pb-20">
          {filtered ? (
            <div>
              <h2 className="text-xl font-bold mb-6 text-muted-foreground">
                Найдено: {filtered.length} профессий
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(profession => (
                  <ProfessionCard key={profession.id} profession={profession} />
                ))}
              </div>
            </div>
          ) : (
            ALPHABET.filter(letter => !!byLetter[letter]).map(letter => (
              <div
                key={letter}
                ref={el => { letterRefs.current[letter] = el; }}
                className="mb-12 scroll-mt-24"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-black text-white">{letter}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      Профессии на «{letter}»
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {byLetter[letter].length} {byLetter[letter].length === 1 ? "профессия" : "профессии"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {byLetter[letter].map(profession => (
                    <ProfessionCard key={profession.id} profession={profession} />
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </Layout>
  );
};

const ProfessionCard = ({ profession }: { profession: ReturnType<typeof getProfessionsByLetter>[string][0] }) => (
  <Link to={`/profession/${profession.id}`}>
    <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group border-2 hover:border-primary/40 overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
            <Icon name={profession.icon as "Building2"} size={22} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <Badge variant="outline" className="text-xs mb-1">{profession.field}</Badge>
            <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">
              {profession.title}
            </h3>
          </div>
          <div className="text-4xl font-black text-primary/10 leading-none flex-shrink-0">{profession.letter}</div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{profession.description}</p>

        <div className="bg-muted/50 rounded-lg p-3 mb-3">
          <p className="text-xs text-muted-foreground font-medium mb-1">Задача:</p>
          <p className="text-xs text-foreground/70 line-clamp-2">{profession.challenge.substring(0, 80)}...</p>
        </div>

        <div className="flex items-center text-primary text-sm font-medium">
          <Icon name="Search" size={14} className="mr-1.5" />
          <span>Смотреть страницу профессии</span>
          <Icon name="ArrowRight" size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  </Link>
);

export default Alphabet;