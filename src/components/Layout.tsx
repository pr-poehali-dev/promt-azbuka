import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import SupportModal from "@/components/SupportModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/alphabet", label: "Азбука профессий" },
    { href: "/vsmpo", label: "ВСМПО-АВИСМА" },
    { href: "/results", label: "Результаты" },
    { href: "/resources", label: "Ресурсы" },
    { href: "/about", label: "О проекте" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-black text-lg leading-none">А</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-primary leading-tight block">Азбука промт-архитектора</span>
              <span className="text-xs text-muted-foreground leading-tight">60 профессий · 60 промтов</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowSupportModal(true)}
              className="hidden sm:flex bg-[#FF6B35] hover:bg-[#FF5722] text-white shadow-md hover:shadow-lg transition-all hover:scale-105"
              size="sm"
            >
              💙 Поддержать
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white px-4 py-4 space-y-1 animate-fade-in">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => { setShowSupportModal(true); setMobileMenuOpen(false); }}
              className="bg-[#FF6B35] hover:bg-[#FF5722] text-white w-full mt-2"
              size="sm"
            >
              💙 Поддержать проект
            </Button>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-lg">А</span>
                </div>
                <span className="font-bold text-xl">Азбука промт-архитектора</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Образовательный проект для школьников 14–18 лет. 
                60 профессий будущего × промт-инжиниринг = новая грамотность.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/+QgiLIa1gFRY4Y2Iy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#229ED9] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Icon name="Send" size={16} className="text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Навигация</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} className="text-primary flex-shrink-0" />
                  <span>Кирилл Зверев</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} className="text-primary flex-shrink-0" />
                  <span>Верхняя Салда, МАОУ СОШ №14</span>
                </li>
                <li className="mt-4">
                  <Button
                    onClick={() => setShowSupportModal(true)}
                    className="bg-[#FF6B35] hover:bg-[#FF5722] text-white w-full"
                    size="sm"
                  >
                    💙 Поддержать проект
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024–2025 Азбука промт-архитектора. Школьный исследовательский проект.
            </p>
            <p className="text-gray-500 text-sm">
              Верхняя Салда · МАОУ СОШ №14 · ВСМПО-АВИСМА
            </p>
          </div>
        </div>
      </footer>

      <SupportModal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </div>
  );
};

export default Layout;
