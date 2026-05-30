"use client";

import { Navigation } from "@/components/Navigation";
import { ArrowRight, Users, Calendar, AlertTriangle, MessageCircle, BarChart3, CheckCircle, CreditCard, ChevronRight, Play, Star, Smartphone, Zap, Globe, Shield, TrendingUp, Rocket, UserPlus, Wrench, HelpCircle } from "lucide-react";
import { DesktopMockup } from "@/components/DesktopMockup";
import { FeaturesTabs } from "@/components/FeaturesTabs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { homeTranslations } from "@/lib/homeTranslations";

export default function Home() {
  const { language } = useLanguage();
  const t = homeTranslations[language as keyof typeof homeTranslations] || homeTranslations.ru;

  return (
    <main className="min-h-screen relative selection:bg-primary/30">
      <Navigation />

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:min-h-[640px]">
            <div className="lg:col-span-7 space-y-8 animate-slide-up tensu-card p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="tensu-badge-blue inline-flex relative z-10 w-max">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t.hero.badge}
              </div>

              <div className="space-y-4 relative z-10">
                <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-foreground">
                  {t.hero.titlePart1}
                  <span className="text-gradient-blue-purple">{t.hero.titleHighlight}</span>
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10 pt-2">
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 h-14 text-[13px] font-bold rounded-full bg-primary text-white hover:opacity-90 shadow-[0_4px_20px_var(--glow-primary)] transition-all duration-200 uppercase tracking-widest">
                  {t.hero.cta1}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="#demo" className="inline-flex items-center justify-center gap-2 px-8 h-14 text-[13px] font-bold rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground hover:bg-white/10 transition-all duration-200 uppercase tracking-widest">
                  {t.hero.cta2}
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-6 border-t border-white/5 relative z-10 mt-auto">
                <div>
                  <p className="text-2xl lg:text-3xl font-black text-foreground leading-none">{t.hero.stats.studentsVal}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">{t.hero.stats.studentsLabel}</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-black text-foreground leading-none">{t.hero.stats.clubsVal}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">{t.hero.stats.clubsLabel}</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-black text-foreground leading-none">{t.hero.stats.retentionVal}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">{t.hero.stats.retentionLabel}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6 h-[160px]">
                <div className="flex flex-col justify-center items-center gap-3 tensu-card p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <Users className="w-5 h-5" />
                   </div>
                   <p className="font-bold text-[11px] text-foreground text-center uppercase tracking-widest leading-tight">{t.hero.smallFeatures.feat1}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 tensu-card p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                     <Calendar className="w-5 h-5" />
                   </div>
                   <p className="font-bold text-[11px] text-foreground text-center uppercase tracking-widest leading-tight">{t.hero.smallFeatures.feat2}</p>
                </div>
              </div>

              <div className="flex-1 relative flex justify-center items-end gap-6 tensu-card pt-10 px-6 overflow-hidden bg-gradient-to-br from-card to-[rgba(59,130,246,0.05)] min-h-[400px]">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>
                <div className="relative z-10 w-48 sm:w-56 origin-bottom scale-[0.85] sm:scale-100 transition-transform duration-700 hover:-translate-y-2">
                  <Image src="/screenshots/students-main.png" alt="Tensu Students App" width={300} height={600} className="w-full h-auto drop-shadow-2xl rounded-t-[2rem]" />
                </div>
                <div className="relative z-10 w-48 sm:w-56 origin-bottom scale-[0.85] sm:scale-100 hidden sm:block transition-transform duration-700 hover:-translate-y-2 translate-y-10">
                  <Image src="/screenshots/staff-main.png" alt="Tensu Business App" width={300} height={600} className="w-full h-auto drop-shadow-2xl rounded-t-[2rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="tensu-badge-blue inline-flex" style={{ color: '#F87171', backgroundColor: 'rgba(248, 113, 113, 0.1)', borderColor: 'rgba(248, 113, 113, 0.2)' }}>
                <AlertTriangle className="w-3 h-3" />
                {t.problem.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-foreground">
                {t.problem.titlePart1}
                <span className="text-red-400">{t.problem.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-base">
                {t.problem.subtitle}
              </p>
              <div className="flex items-start gap-3 p-4 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-md">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-400 font-medium">{t.problem.warning}</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: MessageCircle, ...t.problem.cards[0] },
                { icon: BarChart3, ...t.problem.cards[1] },
                { icon: AlertTriangle, ...t.problem.cards[2] },
              ].map(({ icon: Icon, label, desc }, i) => (
                <div key={i} className="tensu-card p-5 flex items-start gap-5 group hover:border-red-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1 group-hover:text-red-400 transition-colors">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {[
                { icon: BarChart3, ...t.solution.cards[0] },
                { icon: Users, ...t.solution.cards[1] },
                { icon: Calendar, ...t.solution.cards[2] },
                { icon: CreditCard, ...t.solution.cards[3] },
              ].map(({ icon: Icon, label, desc }, i) => (
                <div key={i} className={`tensu-card p-6 space-y-4 group hover:-translate-y-1 transition-transform ${i === 1 || i === 3 ? 'sm:translate-y-6' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_var(--glow-primary)] transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{label}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="tensu-badge-blue inline-flex">
                <CheckCircle className="w-3 h-3" />
                {t.solution.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-foreground">
                {t.solution.titlePart1}
                <span className="text-gradient-blue-purple">{t.solution.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-base">
                {t.solution.subtitle}
              </p>
              <Link href="#staff" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group">
                {t.solution.cta}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DESKTOP CRM DEMO */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '-2s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center">
              <Play className="w-3 h-3" />
              {t.demo.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.demo.title}
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base">
              {t.demo.subtitle}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <DesktopMockup />
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURES TABS */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5 bg-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesTabs />
        </div>
      </section>

      {/* SECTION 6: WHY TENSU */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#FCD34D', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderColor: 'rgba(251, 191, 36, 0.2)' }}>
              <Star className="w-3 h-3" />
              {t.advantages.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.advantages.titlePart1}
              <span className="text-gradient-blue-purple">{t.advantages.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, ...t.advantages.cards[0] },
              { icon: Zap, ...t.advantages.cards[1] },
              { icon: Globe, ...t.advantages.cards[2] },
              { icon: Shield, ...t.advantages.cards[3] },
              { icon: Users, ...t.advantages.cards[4] },
              { icon: TrendingUp, ...t.advantages.cards[5] },
            ].map((feature, i) => (
              <div key={i} className="tensu-card p-6 flex items-start gap-4 group hover:-translate-y-1 transition-all hover:border-primary/30">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-primary/10">
                  <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
              <Rocket className="w-3 h-3" />
              {t.howItWorks.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.howItWorks.titlePart1}
              <span className="text-gradient-blue-purple">{t.howItWorks.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />
            
            {[
              { number: '01', icon: UserPlus, ...t.howItWorks.steps[0] },
              { number: '02', icon: Wrench, ...t.howItWorks.steps[1] },
              { number: '03', icon: Rocket, ...t.howItWorks.steps[2] },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                <div className="w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/40 transition-colors shadow-lg">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-6 h-6 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-black text-primary/50 uppercase tracking-widest">{step.number}</div>
                  <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground max-w-[250px] mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#A78BFA', backgroundColor: 'rgba(167, 139, 250, 0.1)', borderColor: 'rgba(167, 139, 250, 0.2)' }}>
              <HelpCircle className="w-3 h-3" />
              {t.faq.badge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.faq.title}
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* SECTION 9: FINAL CTA & FOOTER */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
          <h2 className="text-4xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
            {t.finalCta.titlePart1} <br className="hidden sm:block" />
            <span className="text-gradient-blue-purple">{t.finalCta.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.finalCta.subtitle}
          </p>
          <div className="pt-4 flex justify-center">
             <button className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white rounded-2xl px-10 py-5 text-base font-bold uppercase tracking-wider flex items-center gap-3 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                {t.finalCta.button}
                <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
