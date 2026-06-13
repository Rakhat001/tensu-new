"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

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
      demo: "Запросить демо",
    },
    en: {
      students: "Students",
      staff: "Business",
      features: "Features",
      pricing: "Pricing",
      security: "Security",
      contact: "Contact",
      demo: "Request Demo",
    },
    kk: {
      students: "Оқушылар",
      staff: "Бизнес",
      features: "Мүмкіндіктер",
      pricing: "Тарифтер",
      security: "Қауіпсіздік",
      contact: "Байланыс",
      demo: "Демо сұрау",
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
          ? "py-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "py-2 bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10 transition-all hover:opacity-80">
            <Image
              src="/tensu-logo.png"
              alt="Tensu"
              width={220}
              height={70}
              className="h-12 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 bg-white border border-gray-200/80 rounded-full px-8 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`text-[10px] font-extrabold uppercase tracking-[0.15em] transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
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
            <div className="flex items-center gap-1 bg-gray-50/80 border border-gray-200/80 rounded-full p-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <Globe className="w-4 h-4 text-gray-400 ml-1.5 mr-0.5" />
              {(['ru', 'en', 'kk'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all ${
                    language === lang
                      ? "bg-white text-blue-600 shadow-sm border border-gray-100"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link
              href="#demo"
              className="bg-[#3B5BDB] hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-[0.15em] text-white"
            >
              {t.demo}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center relative z-10 gap-2">
            <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-0.5">
              {(['ru', 'en', 'kk'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full transition-all ${
                    language === lang
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 transition-all"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[4.5rem] bg-white/98 backdrop-blur-2xl border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                  pathname === item.path
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <Link
              href="#demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center tensu-btn-primary text-white rounded-xl h-12 font-bold uppercase tracking-wider text-sm"
            >
              {t.demo}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
