"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translations = {
    ru: {
      students: "Ученики",
      staff: "Бизнес",
      features: "Возможности",
      pricing: "Тарифы",
      security: "Безопасность",
      contact: "Контакты",
      login: "Войти",
    },
    en: {
      students: "Students",
      staff: "Business",
      features: "Features",
      pricing: "Pricing",
      security: "Security",
      contact: "Contact",
      login: "Log in",
    },
    kk: {
      students: "Оқушылар",
      staff: "Бизнес",
      features: "Мүмкіндіктер",
      pricing: "Тарифтер",
      security: "Қауіпсіздік",
      contact: "Байланыс",
      login: "Кіру",
    }
  };

  const t = translations[language];

  const navItems = [
    { id: "students", label: t.students, path: "/students" },
    { id: "staff", label: t.staff, path: "/business" },
    { id: "features", label: t.features, path: "/features" },
    { id: "pricing", label: t.pricing, path: "/pricing" },
    { id: "security", label: t.security, path: "/security" },
    { id: "contact", label: t.contact, path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 bg-background/80 backdrop-blur-2xl border-b border-border shadow-[0_1px_0_var(--border)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10 transition-transform hover:scale-105">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-black text-white text-xl shadow-lg shadow-primary/30">
              T
            </div>
            <span className="text-xl font-bold text-white tracking-tight ml-2">Tensu</span>
          </Link>

          {/* Desktop Navigation Pills */}
          <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full border border-border bg-card/50 backdrop-blur-xl">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm">
              {(['ru', 'en', 'kk'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase rounded-full transition-all ${
                    language === lang 
                      ? "bg-primary text-white shadow-md shadow-primary/20" 
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button className="bg-primary hover:bg-[#1E3A8A] text-white rounded-full shadow-lg shadow-primary/20 transition-all duration-300 px-6 py-2.5 font-bold uppercase tracking-wider text-xs">
              {t.login}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center relative z-10 gap-3">
            {/* Mobile Lang Switcher */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 backdrop-blur-sm">
              {(['ru', 'en', 'kk'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full transition-all ${
                    language === lang 
                      ? "bg-primary text-white" 
                      : "text-muted-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-card border border-border text-foreground hover:bg-white/5 transition-all"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[4.5rem] bg-background/95 backdrop-blur-2xl border-b border-border shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                  pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <button className="w-full flex items-center justify-center bg-primary hover:bg-[#1E3A8A] text-white rounded-xl h-12 shadow-lg shadow-primary/20 font-bold uppercase tracking-wider">
              {t.login}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
