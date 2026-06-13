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
    <footer className="bg-gray-50 py-16 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5 md:col-span-1">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image src="/tensu-logo.png" alt="Tensu" width={200} height={64} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t.description}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://t.me/tensuadmin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                title="Telegram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </a>
              <a
                href="https://instagram.com/tensu.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all"
                title="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 tracking-tight">{t.product}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 tracking-tight">{t.company}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Newsletter */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 tracking-tight">{t.legal}</h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Email subscribe */}
            <div className="mt-6">
              <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">Будьте в курсе</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш e-mail"
                  className="flex-1 min-w-0 bg-white border border-gray-200 rounded-xl py-2 px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-3 py-2 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Tensu. {t.rights}</p>
            <span className="hidden md:inline text-gray-300">•</span>
            <p className="flex items-center gap-1.5">
              {t.madeIn}
              <span className="text-base" role="img" aria-label="Kazakhstan">🇰🇿</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
