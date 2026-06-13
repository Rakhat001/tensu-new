"use client";

import { Navigation } from "@/components/Navigation";
import {
  ArrowRight, Users, Calendar, AlertTriangle, MessageCircle,
  BarChart3, CheckCircle, CreditCard, ChevronRight, Play,
  Star, Smartphone, Zap, Globe, Shield, TrendingUp, Rocket,
  UserPlus, Wrench, HelpCircle, Sparkles, QrCode, Send
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
      <section className="relative py-20 lg:py-28 section-divider tensu-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <div className="tensu-badge-blue inline-flex justify-center">
              <Rocket className="w-3 h-3" />
              {t.howItWorks.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">
              {t.howItWorks.titlePart1}
              <span className="text-gradient-blue-purple"> {t.howItWorks.titleHighlight}</span>
            </h2>
            <p className="text-gray-500">Запустите свой клуб и начните принимать учеников за 3 простых шага</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-blue-200 via-violet-300 to-violet-200 rounded-full pointer-events-none" />

            {[
              { number: '01', icon: UserPlus, violet: false, ...t.howItWorks.steps[0] },
              { number: '02', icon: Wrench, violet: true, ...t.howItWorks.steps[1] },
              { number: '03', icon: Rocket, violet: false, ...t.howItWorks.steps[2] },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-5 group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:border-blue-200 group-hover:shadow-md transition-all">
                    <step.icon className={`w-7 h-7 ${step.violet ? 'text-violet-600' : 'text-blue-600'} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-200 animate-pulse-ring opacity-0 group-hover:opacity-100" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-black text-blue-400 uppercase tracking-widest">{step.number}</div>
                  <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500 max-w-[220px] mx-auto leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "50+", label: "клубов" },
              { val: "5 000+", label: "учеников" },
              { val: "100 000+", label: "посещений" },
              { val: "98%", label: "довольных" },
            ].map((s, i) => (
              <div key={i} className="tensu-card p-5 text-center">
                <p className="text-2xl font-black text-gradient-blue-purple">{s.val}</p>
                <p className="text-[11px] text-gray-500 font-medium mt-1">{s.label}</p>
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
