"use client";

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  const translations = {
    ru: {
      description: "Комплексная CRM-платформа для управления спортивными клубами и взаимодействия с учениками.",
      product: "Продукт",
      company: "Компания",
      legal: "Правовая информация",
      links: {
        students: "Ученики",
        business: "Бизнес",
        features: "Возможности",
        pricing: "Тарифы",
        about: "О нас",
        contact: "Контакты",
        privacy: "Политика конфиденциальности",
        terms: "Пользовательское соглашение",
        security: "Безопасность"
      },
      rights: "Все права защищены.",
      madeIn: "Сделано в Казахстане"
    },
    en: {
      description: "A comprehensive CRM platform for managing sports clubs and interacting with students.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      links: {
        students: "Students",
        business: "Business",
        features: "Features",
        pricing: "Pricing",
        about: "About Us",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        security: "Security"
      },
      rights: "All rights reserved.",
      madeIn: "Made in Kazakhstan"
    },
    kk: {
      description: "Спорт клубтарын басқаруға және оқушылармен өзара әрекеттесуге арналған кешенді CRM-платформа.",
      product: "Өнім",
      company: "Компания",
      legal: "Құқықтық ақпарат",
      links: {
        students: "Оқушылар",
        business: "Бизнес",
        features: "Мүмкіндіктер",
        pricing: "Тарифтер",
        about: "Біз туралы",
        contact: "Байланыс",
        privacy: "Құпиялылық саясаты",
        terms: "Пайдаланушы келісімі",
        security: "Қауіпсіздік"
      },
      rights: "Барлық құқықтар қорғалған.",
      madeIn: "Қазақстанда жасалған"
    }
  };

  const t = translations[language];

  const productLinks = [
    { label: t.links.students, path: '/students' },
    { label: t.links.business, path: '/business' },
    { label: t.links.features, path: '/features' },
    { label: t.links.pricing, path: '/pricing' },
  ];

  const companyLinks = [
    { label: t.links.about, path: '#' },
    { label: t.links.contact, path: '/contact' },
  ];

  const legalLinks = [
    { label: t.links.privacy, path: '/privacy' },
    { label: t.links.terms, path: '/terms' },
    { label: t.links.security, path: '/security' },
  ];

  return (
    <footer className="bg-[#080A15] py-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image src="/tensu-logo.png" alt="Tensu" width={240} height={80} className="h-14 sm:h-16 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">{t.product}</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">{t.company}</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">{t.legal}</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Tensu. {t.rights}
            </p>
            <span className="hidden md:inline text-white/20">•</span>
            <p className="flex items-center gap-1.5 text-white/70">
              {t.madeIn}
              <span className="text-base" role="img" aria-label="Kazakhstan">🇰🇿</span>
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://t.me/tensuadmin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500 transition-all"
              title="Telegram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </a>
            <a 
              href="https://instagram.com/tensu.kz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-500 transition-all"
              title="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
