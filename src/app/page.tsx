"use client";

import { Navigation } from "@/components/Navigation";
import {
  ArrowRight, Users, Calendar, AlertTriangle, MessageCircle,
  BarChart3, CheckCircle, CreditCard, ChevronRight, Play,
  Star, Smartphone, Zap, Globe, Shield, TrendingUp, Rocket,
  UserPlus, Wrench, HelpCircle, Sparkles, QrCode, Send,
  Building2, Settings2, Wallet, Users2, User, Heart
} from "lucide-react";
import { DesktopMockup } from "@/components/DesktopMockup";
import { MobileMockup } from "@/components/MobileMockup";
import { FeaturesTabs } from "@/components/FeaturesTabs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { homeTranslations } from "@/lib/homeTranslations";

export default function Home() {
  const { language } = useLanguage();
  const t = homeTranslations[language as keyof typeof homeTranslations] || homeTranslations.ru;

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-800">
      <Navigation />

      {/* =============================================
          HERO
      ============================================= */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden tensu-hero-bg">
        <div className="absolute inset-0 tensu-dot-pattern opacity-50 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: '-4s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div className="space-y-8 animate-slide-up">
              <div className="tensu-badge-blue w-max">
                <Sparkles className="w-3 h-3" />
                {t.hero.badge}
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.04] tracking-tight text-gray-900">
                  {t.hero.titlePart1}
                  <span className="text-gradient-blue-purple block">{t.hero.titleHighlight}</span>
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2.5 px-8 h-14 text-[13px] font-bold rounded-2xl tensu-btn-primary text-white uppercase tracking-widest">
                  <Send className="w-4 h-4" />
                  {t.hero.cta1}
                </a>
                <Link href="#demo" className="inline-flex items-center justify-center gap-2.5 px-8 h-14 text-[13px] font-bold rounded-2xl tensu-btn-secondary uppercase tracking-widest">
                  <Play className="w-4 h-4 text-blue-600" />
                  {t.hero.cta2}
                </Link>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2.5">
                {["📱 Telegram Mini App", "🍎 Apple Wallet", "🌐 Google Wallet"].map((b, i) => (
                  <span key={i} className="tensu-stat-pill text-xs font-semibold text-gray-600">{b}</span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-4 border-t border-gray-100">
                {[
                  { val: t.hero.stats.studentsVal, label: t.hero.stats.studentsLabel },
                  { val: t.hero.stats.clubsVal, label: t.hero.stats.clubsLabel },
                  { val: t.hero.stats.retentionVal, label: t.hero.stats.retentionLabel },
                ].map((s, i) => (
                  <div key={i} className="animate-slide-up" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                    <p className="text-2xl lg:text-3xl font-black text-gray-900 leading-none">{s.val}</p>
                    <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phones */}
            <div className="relative flex justify-center items-end gap-6 animate-slide-in-right" style={{ minHeight: 480 }}>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50/60 to-transparent rounded-[2rem] pointer-events-none" />

              {/* Floating chips — blue/violet only */}
              <div className="absolute top-10 left-4 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-2.5 flex items-center gap-2.5 animate-float z-20">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 leading-none">Оплата прошла</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">Абонемент оплачен</p>
                </div>
              </div>

              <div className="absolute top-28 right-2 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-2.5 flex items-center gap-2.5 animate-float-delayed z-20">
                <div className="w-8 h-8 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
                  <QrCode className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 leading-none">QR Check-in</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">Быстрый проход</p>
                </div>
              </div>

              <div className="absolute bottom-24 right-0 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-2.5 flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 leading-none">Новая запись</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">Вы записаны!</p>
                </div>
              </div>

              <div className="relative z-10 w-52 sm:w-60 origin-bottom hover:-translate-y-2 transition-transform duration-500 translate-y-4">
                <MobileMockup src="/screenshots/students-main.png" alt="Tensu Students App" />
              </div>
              <div className="relative z-10 w-52 sm:w-60 origin-bottom hidden sm:block hover:-translate-y-2 transition-transform duration-500 translate-y-12">
                <MobileMockup src="/screenshots/staff-main.png" alt="Tensu Business App" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SOCIAL PROOF
      ============================================= */}
      <section className="py-12 border-y border-blue-50 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gradient-to-r from-blue-400/5 to-violet-400/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-8">
            Нам доверяют лидеры
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {[
              { name: "MMA Almaty", icon: "🥊" },
              { name: "BJJ TOP Team", icon: "🥋" },
              { name: "Karate Academy", icon: "🎌" },
              { name: "Fight Club KZ", icon: "🔥" },
              { name: "Sport Life", icon: "💪" },
              { name: "Fitness Pro", icon: "⚡" }
            ].map((club, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-blue-100/50 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default group hover:border-blue-300"
              >
                <span className="text-xl opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  {club.icon}
                </span>
                <span className="font-black text-blue-900/60 group-hover:text-blue-700 transition-colors tracking-tight">
                  {club.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          PROBLEM
      ============================================= */}
      <section className="relative py-20 lg:py-28 section-divider bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="tensu-badge-blue w-max" style={{ color: '#7C3AED', background: 'rgba(124,58,237,0.07)', borderColor: 'rgba(124,58,237,0.18)' }}>
                <AlertTriangle className="w-3 h-3" />
                {t.problem.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-gray-900">
                {t.problem.titlePart1}
                <span className="text-gradient-blue-purple"> {t.problem.titleHighlight}</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">{t.problem.subtitle}</p>
              <div className="flex items-start gap-3 p-4 rounded-2xl border border-violet-100 bg-violet-50/50">
                <AlertTriangle className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <p className="text-sm text-violet-700 font-medium">{t.problem.warning}</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: MessageCircle, ...t.problem.cards[0] },
                { icon: BarChart3, ...t.problem.cards[1] },
                { icon: AlertTriangle, ...t.problem.cards[2] },
              ].map(({ icon: Icon, label, desc }, i) => (
                <div key={i} className="tensu-card p-5 flex items-start gap-5 group hover:border-violet-200 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors">{label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SOLUTION
      ============================================= */}
      <section className="relative py-20 lg:py-28 section-divider tensu-section-alt">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {[
                { icon: BarChart3, violet: false, ...t.solution.cards[0] },
                { icon: Users, violet: true, ...t.solution.cards[1] },
                { icon: Calendar, violet: false, ...t.solution.cards[2] },
                { icon: CreditCard, violet: true, ...t.solution.cards[3] },
              ].map(({ icon: Icon, violet, label, desc }, i) => (
                <div key={i} className={`tensu-card p-6 space-y-4 group hover:-translate-y-1.5 cursor-default ${i === 1 || i === 3 ? 'sm:translate-y-6' : ''}`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border ${violet ? 'tensu-icon-box-violet' : 'tensu-icon-box'}`}>
                    <Icon className={`w-6 h-6 ${violet ? 'text-violet-600' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold text-gray-900 group-hover:${violet ? 'text-violet-600' : 'text-blue-600'} transition-colors`}>{label}</p>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="tensu-badge-blue w-max">
                <CheckCircle className="w-3 h-3" />
                {t.solution.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-gray-900">
                {t.solution.titlePart1}
                <span className="text-gradient-blue-purple"> {t.solution.titleHighlight}</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">{t.solution.subtitle}</p>
              <Link href="#staff" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-violet-600 transition-colors group">
                {t.solution.cta}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          CRM DEMO
      ============================================= */}
      <section id="demo" className="relative py-20 lg:py-28 section-divider bg-white">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-5">
            <div className="tensu-badge-blue inline-flex justify-center">
              <Play className="w-3 h-3" />
              {t.demo.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">{t.demo.title}</h2>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">{t.demo.subtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Browser chrome */}
            <div className="bg-gray-100 rounded-t-2xl border border-gray-200 border-b-0 p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-white border border-gray-200 rounded-lg h-7 flex items-center px-3 gap-2">
                  <Shield className="w-3 h-3 text-blue-500" />
                  <span className="text-[11px] text-gray-400 font-medium">business.tensu.kz</span>
                </div>
              </div>
            </div>
            <div className="shadow-xl shadow-blue-100/40 rounded-b-2xl overflow-hidden border border-gray-200 border-t-0">
              <DesktopMockup />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          FEATURES TABS
      ============================================= */}
      <section className="relative py-20 lg:py-28 section-divider tensu-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesTabs />
        </div>
      </section>

      {/* =============================================
          WHY TENSU
      ============================================= */}
      <section className="relative py-20 lg:py-28 section-divider bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#7C3AED', background: 'rgba(124,58,237,0.07)', borderColor: 'rgba(124,58,237,0.18)' }}>
              <Star className="w-3 h-3" />
              {t.advantages.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">
              {t.advantages.titlePart1}
              <span className="text-gradient-blue-purple"> {t.advantages.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Smartphone, violet: false, ...t.advantages.cards[0] },
              { icon: Zap, violet: true, ...t.advantages.cards[1] },
              { icon: Globe, violet: false, ...t.advantages.cards[2] },
              { icon: Shield, violet: true, ...t.advantages.cards[3] },
              { icon: Users, violet: false, ...t.advantages.cards[4] },
              { icon: TrendingUp, violet: true, ...t.advantages.cards[5] },
            ].map((feature, i) => (
              <div key={i} className="tensu-card p-6 flex items-start gap-4 group cursor-default">
                <div className={`w-11 h-11 shrink-0 flex items-center justify-center rounded-2xl border ${feature.violet ? 'tensu-icon-box-violet' : 'tensu-icon-box'}`}>
                  <feature.icon className={`w-5 h-5 ${feature.violet ? 'text-violet-600' : 'text-blue-600'}`} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors">{feature.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          HOW IT WORKS
      ============================================= */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden section-divider">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-br from-blue-50 to-violet-50 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
            <div className="tensu-badge-blue inline-flex justify-center">
              <Rocket className="w-3 h-3" />
              {t.howItWorks.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              {t.howItWorks.titlePart1}
              <span className="text-gradient-blue-purple"> {t.howItWorks.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 text-lg">{t.howItWorks.subtitle}</p>
          </div>

          {/* Horizontally scrolling steps container */}
          <div className="relative w-full overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex justify-between items-start min-w-[1200px] gap-6 relative px-4">
              {/* Connector line */}
              <div className="absolute top-8 left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-gray-200 pointer-events-none" />

              {[
                { icon: Building2, ...t.howItWorks.steps[0] },
                { icon: Settings2, ...t.howItWorks.steps[1] },
                { icon: Send, ...t.howItWorks.steps[2] },
                { icon: Wallet, ...t.howItWorks.steps[3] },
                { icon: QrCode, ...t.howItWorks.steps[4] },
                { icon: BarChart3, ...t.howItWorks.steps[5] },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center flex-1 snap-center group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black flex items-center justify-center mb-4 border border-blue-100 shadow-sm relative z-10">
                    {i + 1}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-blue-600 mb-6 group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300 relative z-10">
                    <step.icon className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500 max-w-[180px] mx-auto leading-relaxed h-16">{step.description}</p>
                  
                  {/* Phone Mockup Placeholder */}
                  <div className="mt-6 w-44 h-[320px] bg-white border-[6px] border-gray-900 rounded-[2rem] shadow-xl overflow-hidden relative transform group-hover:-translate-y-2 transition-transform duration-500 group-hover:shadow-2xl">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-900 rounded-b-xl z-20" />
                    <div className="w-full h-full bg-white flex items-center justify-center relative">
                      <div className="absolute inset-0 pt-8 flex flex-col">
                        {i === 0 && (
                          <div className="w-full h-full flex flex-col px-3 pt-2 pb-4">
                            <h5 className="font-bold text-[13px] text-gray-900 leading-tight">Новый клуб</h5>
                            <p className="text-[7px] text-gray-400 mb-3">Расскажите о вашем клубе</p>
                            
                            <div className="space-y-2 mb-auto">
                              <div>
                                <p className="text-[6px] text-gray-500 mb-0.5 ml-1">Название клуба</p>
                                <div className="w-full h-7 bg-gray-50 border border-gray-100 rounded-lg flex items-center px-2">
                                  <span className="text-[8px] text-gray-900 font-medium">Tensu BJJ</span>
                                </div>
                              </div>
                              <div>
                                <p className="text-[6px] text-gray-500 mb-0.5 ml-1">Вид спорта</p>
                                <div className="w-full h-7 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-between px-2">
                                  <span className="text-[8px] text-gray-900 font-medium truncate max-w-[80%]">Бразильское джиу-джи...</span>
                                  <ChevronRight className="w-2 h-2 text-gray-400 rotate-90 shrink-0" />
                                </div>
                              </div>
                              <div>
                                <p className="text-[6px] text-gray-500 mb-0.5 ml-1">Город</p>
                                <div className="w-full h-7 bg-gray-50 border border-gray-100 rounded-lg flex items-center px-2">
                                  <span className="text-[8px] text-gray-900 font-medium">Алматы</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="w-full h-9 bg-blue-600 rounded-xl flex items-center justify-center mt-3 shadow-sm shadow-blue-500/20">
                              <span className="text-[9px] text-white font-bold">Продолжить</span>
                            </div>
                          </div>
                        )}
                        {i === 1 && (
                          <div className="w-full h-full flex flex-col px-3 pt-2 pb-4">
                            <div className="flex items-center gap-1 mb-4">
                              <ChevronRight className="w-3 h-3 text-gray-400 rotate-180" />
                              <h5 className="font-bold text-[10px] text-gray-900">Настройка клуба</h5>
                            </div>
                            
                            <div className="space-y-1.5 mb-auto">
                              {[
                                { icon: Building2, label: "Секции", sub: "3 секции" },
                                { icon: Calendar, label: "График тренировок", sub: "Настроен" },
                                { icon: Users, label: "Тренеры", sub: "4 тренера" },
                                { icon: CreditCard, label: "Тарифы и абонементы", sub: "5 тарифов" },
                              ].map((item, idx) => (
                                <div key={idx} className="w-full p-1.5 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                                    <item.icon className="w-3 h-3 text-blue-600" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[8px] font-bold text-gray-900 truncate leading-tight">{item.label}</p>
                                    <p className="text-[6px] text-gray-500 truncate leading-tight">{item.sub}</p>
                                  </div>
                                  <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
                                </div>
                              ))}
                            </div>
                            
                            <div className="w-full h-9 bg-blue-600 rounded-xl flex items-center justify-center mt-3 shadow-sm shadow-blue-500/20">
                              <span className="text-[9px] text-white font-bold">Сохранить</span>
                            </div>
                          </div>
                        )}
                        {i === 2 && (
                          <div className="w-full h-full flex flex-col bg-white overflow-hidden relative">
                            {/* TG Header */}
                            <div className="w-full h-16 bg-[#E8F0FE] flex items-center px-3 gap-2 pt-2 relative z-0">
                              <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shrink-0 text-white">
                                <Send className="w-4 h-4 ml-0.5" />
                              </div>
                              <div>
                                <p className="text-[9px] font-bold text-blue-900 leading-tight">Tensu BJJ Club</p>
                                <p className="text-[7px] text-blue-500">бот</p>
                              </div>
                            </div>
                            
                            {/* App Content */}
                            <div className="flex-1 bg-gray-50 rounded-t-2xl -mt-4 relative z-10 px-3 pt-4 pb-4 flex flex-col">
                              <h5 className="font-black text-[12px] text-gray-900 leading-tight mb-1.5">Добро пожаловать<br/>в Tensu BJJ! 👋</h5>
                              <p className="text-[7px] text-gray-500 leading-relaxed mb-4">Записывайтесь на тренировки, покупайте абонементы и следите за прогрессом.</p>
                              
                              <div className="space-y-1.5 mt-auto">
                                {[
                                  { icon: Calendar, label: "Расписание" },
                                  { icon: CreditCard, label: "Абонементы" },
                                  { icon: User, label: "Мои записи" },
                                ].map((item, idx) => (
                                  <div key={idx} className="w-full p-2 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                                    <item.icon className="w-3.5 h-3.5 text-gray-400" />
                                    <p className="text-[8px] font-bold text-gray-800 flex-1">{item.label}</p>
                                    <ChevronRight className="w-3 h-3 text-gray-300" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        {i === 3 && (
                          <div className="w-full h-full flex flex-col px-3 pt-6 pb-4 items-center bg-gray-50">
                            {/* The Pass */}
                            <div className="w-full h-44 bg-white rounded-2xl shadow-xl shadow-blue-900/5 flex flex-col overflow-hidden relative">
                              {/* Top blue half */}
                              <div className="w-full h-20 bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white flex flex-col relative overflow-hidden shrink-0">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl translate-x-1/2 -translate-y-1/2" />
                                <div className="flex justify-between items-start">
                                  <span className="font-black text-[10px] tracking-wider italic opacity-90">TENSU</span>
                                  <span className="font-bold text-[7px] uppercase tracking-wider opacity-80">Tensu BJJ</span>
                                </div>
                                <div className="mt-auto flex justify-between items-end">
                                  <div>
                                    <p className="text-[5px] uppercase opacity-70 mb-0.5">Абонемент</p>
                                    <p className="text-[11px] font-bold leading-none">8 занятий</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-[5px] uppercase opacity-70 mb-0.5">Действует до</p>
                                    <p className="text-[7px] font-bold">10.04.2026</p>
                                  </div>
                                </div>
                              </div>
                              {/* Bottom white half */}
                              <div className="flex-1 bg-white flex items-center justify-center p-2">
                                <QrCode className="w-full h-full text-gray-900" />
                              </div>
                            </div>
                            
                            {/* Add to Apple Wallet button */}
                            <div className="mt-auto w-[110px] h-8 bg-black rounded-lg flex items-center justify-center gap-1.5 shadow-lg shadow-black/20">
                              <div className="flex -space-x-1.5">
                                <div className="w-4 h-2.5 rounded-sm bg-red-400 rotate-12" />
                                <div className="w-4 h-2.5 rounded-sm bg-green-400 -rotate-12 mix-blend-screen" />
                                <div className="w-4 h-2.5 rounded-sm bg-blue-400 -rotate-6 mix-blend-screen" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[4px] text-white/70 uppercase leading-none">Добавлено в</span>
                                <span className="text-[6px] font-bold text-white leading-none">Apple Wallet</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {i === 4 && (
                          <div className="absolute inset-0 bg-[#111827] px-3 pt-10 pb-6 text-white flex flex-col">
                            <div className="flex items-center gap-2 mb-8">
                              <ChevronRight className="w-3 h-3 text-white/50 rotate-180" />
                              <span className="text-[10px] font-medium">Сканирование</span>
                            </div>
                            
                            <div className="w-full aspect-square relative flex items-center justify-center mt-2">
                              {/* Scanning brackets */}
                              <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl" />
                              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-2xl" />
                              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500 rounded-tr-2xl" />
                              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500 rounded-bl-2xl" />
                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 rounded-br-2xl" />
                              
                              {/* QR Box */}
                              <div className="w-[85%] h-[85%] bg-white rounded-xl flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                                <QrCode className="w-20 h-20 text-gray-900" />
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-green-500 shadow-[0_0_10px_#22C55E]" />
                              </div>
                            </div>
                            
                            <div className="mt-auto text-center">
                              <p className="text-[8px] text-white/60">Поднесите QR-код<br/>к сканеру</p>
                            </div>
                          </div>
                        )}
                        {i === 5 && (
                          <div className="w-full h-full flex flex-col px-3 pt-4 pb-4">
                            <h5 className="font-bold text-[13px] text-gray-900 mb-3">Аналитика</h5>
                            
                            <div className="w-full h-6 bg-white border border-gray-100 rounded-md flex items-center justify-between px-2 mb-3 shadow-sm shrink-0">
                              <span className="text-[8px] text-gray-500">Сегодня</span>
                              <ChevronRight className="w-2.5 h-2.5 text-gray-400 rotate-90" />
                            </div>

                            <div className="flex gap-2 mb-2 shrink-0">
                              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-2 shadow-sm flex flex-col">
                                <span className="text-[7px] text-gray-500 font-medium mb-1">Посещения</span>
                                <span className="text-[14px] font-black text-gray-900 leading-none">128</span>
                                <span className="text-[6px] font-bold text-blue-500 bg-blue-50 w-max px-1 rounded-sm mt-1">+12%</span>
                              </div>
                              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-2 shadow-sm flex flex-col">
                                <span className="text-[7px] text-gray-500 font-medium mb-1">Записи</span>
                                <span className="text-[14px] font-black text-gray-900 leading-none">42</span>
                                <span className="text-[6px] font-bold text-green-500 bg-green-50 w-max px-1 rounded-sm mt-1">+8%</span>
                              </div>
                            </div>
                            
                            <div className="w-full flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-3 flex flex-col min-h-0 overflow-hidden">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-[7px] text-gray-500 font-medium">Выручка</span>
                                <span className="text-[6px] font-bold text-green-500 bg-green-50 px-1 rounded-sm">+15%</span>
                              </div>
                              <span className="text-[14px] font-black text-gray-900 mb-auto">1 240 000 ₸</span>
                              
                              {/* Sparkline imitation */}
                              <svg viewBox="0 0 100 30" className="w-full h-6 stroke-blue-500 fill-none overflow-visible shrink-0 mt-2">
                                <path d="M0 25 L15 15 L30 20 L45 10 L60 15 L75 5 L100 10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Under glow */}
                                <path d="M0 25 L15 15 L30 20 L45 10 L60 15 L75 5 L100 10 L100 30 L0 30 Z" fill="url(#sparkGradient)" stroke="none" />
                                <defs>
                                  <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Banner */}
          <div className="max-w-5xl mx-auto mt-8 bg-gray-50 border border-gray-100 rounded-[2rem] p-8 lg:p-10 flex flex-wrap justify-between items-center gap-8 shadow-sm">
            {[
              { icon: Users2, val: "50+", label: "клубов" },
              { icon: User, val: "5 000+", label: "учеников" },
              { icon: BarChart3, val: "100 000+", label: "посещений" },
              { icon: Heart, val: "98%", label: "довольных учеников" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                   <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">{stat.val}</div>
                  <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =============================================
          FAQ
      ============================================= */}
      <section className="relative py-20 lg:py-28 section-divider bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-5">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#7C3AED', background: 'rgba(124,58,237,0.07)', borderColor: 'rgba(124,58,237,0.18)' }}>
              <HelpCircle className="w-3 h-3" />
              {t.faq.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">{t.faq.title}</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* =============================================
          FINAL CTA
      ============================================= */}
      <section className="relative py-24 lg:py-32 section-divider overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 pointer-events-none" />
        <div className="absolute inset-0 tensu-dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] pointer-events-none animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: '-5s' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
          <div className="flex justify-center flex-wrap gap-3 mb-2">
            {[
              { icon: Users, label: "5 000+ учеников" },
              { icon: Zap, label: "Запуск за 1 день" },
              { icon: Shield, label: "Надёжно и безопасно" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5 text-white/80" />
                <span className="text-xs font-semibold text-white/90">{item.label}</span>
              </div>
            ))}
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            {t.finalCta.titlePart1}<br className="hidden sm:block" />
            <span className="text-blue-200">{t.finalCta.titleHighlight}</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">{t.finalCta.subtitle}</p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 rounded-2xl px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl">
              {t.finalCta.button}
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-white/20 transition-all">
              <Send className="w-4 h-4" />
              Открыть в Telegram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
