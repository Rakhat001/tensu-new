import { Navigation } from "@/components/Navigation";
import { ArrowRight, Users, Calendar, AlertTriangle, MessageCircle, BarChart3, CheckCircle, CreditCard, ChevronRight, Play, Star, Smartphone, Zap, Globe, Shield, TrendingUp, Rocket, UserPlus, Wrench, HelpCircle } from "lucide-react";
import { DesktopMockup } from "@/components/DesktopMockup";
import { FeaturesTabs } from "@/components/FeaturesTabs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 1: HERO (Bento Box Grid)          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:min-h-[640px]">

            {/* Left: Main Hero Bento Card */}
            <div className="lg:col-span-7 space-y-8 animate-slide-up tensu-card p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center">
              {/* Subtle inner glow */}
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Badge */}
              <div className="tensu-badge-blue inline-flex relative z-10 w-max">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Новая версия платформы 2.0
              </div>

              {/* Heading */}
              <div className="space-y-4 relative z-10">
                <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-foreground">
                  Всё для комфортных{' '}
                  <span className="text-gradient-blue-purple">тренировок</span>
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Быстрая онлайн-запись, цифровой абонемент в Apple & Google Wallet, бесконтактный QR-вход и умная геймификация тренировок — в вашем Telegram.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 relative z-10 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 h-14 text-[13px] font-bold rounded-full bg-primary text-white hover:opacity-90 shadow-[0_4px_20px_var(--glow-primary)] transition-all duration-200 uppercase tracking-widest"
                >
                  Открыть в Telegram
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 px-8 h-14 text-[13px] font-bold rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground hover:bg-white/10 transition-all duration-200 uppercase tracking-widest"
                >
                  Запросить демо
                </Link>
              </div>

              {/* Stats Strip */}
              <div className="flex items-center gap-8 pt-6 border-t border-white/5 relative z-10 mt-auto">
                <div>
                  <p className="text-2xl lg:text-3xl font-black text-foreground leading-none">10 000+</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">Активных учеников</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-black text-foreground leading-none">50+</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">Клубов используют</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-black text-foreground leading-none">98%</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">Удержание клиентов</p>
                </div>
              </div>
            </div>

            {/* Right Side: Nested Bento Grid */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Top Row: Small Feature Cards */}
              <div className="grid grid-cols-2 gap-6 h-[160px]">
                {/* Feature 1 */}
                <div className="flex flex-col justify-center items-center gap-3 tensu-card p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <Users className="w-5 h-5" />
                   </div>
                   <p className="font-bold text-[11px] text-foreground text-center uppercase tracking-widest leading-tight">Управление<br/>учениками</p>
                </div>
                {/* Feature 2 */}
                <div className="flex flex-col justify-center items-center gap-3 tensu-card p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                     <Calendar className="w-5 h-5" />
                   </div>
                   <p className="font-bold text-[11px] text-foreground text-center uppercase tracking-widest leading-tight">Расписание<br/>и запись</p>
                </div>
              </div>

              {/* Bottom Row: App Mockups Bento Card */}
              <div className="flex-1 relative flex justify-center items-end gap-6 tensu-card pt-10 px-6 overflow-hidden bg-gradient-to-br from-card to-[rgba(59,130,246,0.05)] min-h-[400px]">
                {/* Background abstract shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>
                
                <div className="relative z-10 w-48 sm:w-56 origin-bottom scale-[0.85] sm:scale-100 transition-transform duration-700 hover:-translate-y-2">
                  <Image
                    src="/screenshots/students-main.png"
                    alt="Tensu Students App"
                    width={300}
                    height={600}
                    className="w-full h-auto drop-shadow-2xl rounded-t-[2rem]"
                  />
                </div>
                <div className="relative z-10 w-48 sm:w-56 origin-bottom scale-[0.85] sm:scale-100 hidden sm:block transition-transform duration-700 hover:-translate-y-2 translate-y-10">
                  <Image
                    src="/screenshots/staff-main.png"
                    alt="Tensu Business App"
                    width={300}
                    height={600}
                    className="w-full h-auto drop-shadow-2xl rounded-t-[2rem]"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 2: PROBLEM                        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="tensu-badge-blue inline-flex" style={{ color: '#F87171', backgroundColor: 'rgba(248, 113, 113, 0.1)', borderColor: 'rgba(248, 113, 113, 0.2)' }}>
                <AlertTriangle className="w-3 h-3" />
                Проблема
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-foreground">
                Большинство клубов до сих пор работают{' '}
                <span className="text-red-400">вручную</span>
              </h2>
              <p className="text-muted-foreground text-base">
                Таблицы, мессенджеры, ручной учёт и потеря данных замедляют рост клуба.
              </p>

              {/* Warning */}
              <div className="flex items-start gap-3 p-4 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-md">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-400 font-medium">Потерянные данные. Ошибки. Недовольные клиенты. Невозможно масштабироваться.</p>
              </div>
            </div>

            {/* Right: Problem cards */}
            <div className="space-y-4">
              {[
                { icon: MessageCircle, label: 'WhatsApp-хаос', desc: 'Тренер Арман: «Завтра тренировка в 7:00, не забудьте»' },
                { icon: BarChart3, label: 'Excel-таблицы', desc: 'Ученики.xlsx с ручным вводом оплат и абонементов' },
                { icon: AlertTriangle, label: 'Потеря данных', desc: 'Кто оплатил? Когда истекает? Неизвестно.' },
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

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 3: SOLUTION                       */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Points (Staggered Bento Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {[
                { icon: BarChart3, label: 'Прозрачная аналитика', desc: 'Финансы, посещаемость, динамика оплат — всё в реальном времени.' },
                { icon: Users, label: 'Управление учениками', desc: 'Абонементы, тренеры, группы и прогресс каждого ученика.' },
                { icon: Calendar, label: 'Расписание и секции', desc: 'Гибкое расписание, уровни и тренеры для каждой секции.' },
                { icon: CreditCard, label: 'Финансы под контролем', desc: 'Динамика оплат, задолженности и автоматизация учёта.' },
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

            {/* Right: Text */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="tensu-badge-blue inline-flex">
                <CheckCircle className="w-3 h-3" />
                Решение
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-foreground">
                Весь клуб{' '}
                <span className="text-gradient-blue-purple">в одной системе</span>
              </h2>
              <p className="text-muted-foreground text-base">
                Автоматизация процессов, прозрачная аналитика и удобное управление для роста вашего клуба.
              </p>
              <Link href="#staff" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group">
                Смотреть все возможности
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 4: DESKTOP CRM DEMO               */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '-2s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center">
              <Play className="w-3 h-3" />
              Живое демо
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              Интерактивный симулятор CRM
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base">
              Попробуйте Tensu Business прямо сейчас. Переключайте вкладки: Обзор и Тренеры.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <DesktopMockup />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 5: FEATURES TABS                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5 bg-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesTabs />
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 6: WHY TENSU                      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#FCD34D', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderColor: 'rgba(251, 191, 36, 0.2)' }}>
              <Star className="w-3 h-3" />
              Преимущества
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              Почему выбирают{' '}
              <span className="text-gradient-blue-purple">Tensu</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: 'Telegram-first', description: 'Не нужно устанавливать приложения — всё работает в Telegram мгновенно.' },
              { icon: Zap, title: 'Быстрый запуск', description: 'Онбординг учеников и сотрудников за 1 минуту по номеру телефона.' },
              { icon: Globe, title: 'Мультиязычность', description: 'Интерфейс на казахском, русском и английском языках.' },
              { icon: Shield, title: 'Безопасность PCI DSS', description: 'Банковские карты и транзакции защищены по международным протоколам.' },
              { icon: Users, title: 'Полная синхронизация', description: 'Приложение ученика и панель управляющего синхронны в реальном времени.' },
              { icon: TrendingUp, title: 'Масштабируемость', description: 'Одна студия или сеть клубов — платформа растёт вместе с вами.' },
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

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 7: HOW IT WORKS                   */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.2)' }}>
              <Rocket className="w-3 h-3" />
              Как это работает
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              Три шага к{' '}
              <span className="text-gradient-blue-purple">автоматизации</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />
            
            {[
              { number: '01', icon: UserPlus, title: 'Регистрация', description: 'Оставьте заявку на демо — подключим ваш клуб к платформе.' },
              { number: '02', icon: Wrench, title: 'Настройка системы', description: 'Создайте секции, добавьте тренеров, настройте тарифы и расписание.' },
              { number: '03', icon: Rocket, title: 'Уверенное развитие', description: 'Сотрудники в CRM, клиенты оплачивают и записываются онлайн.' },
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

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 8: FAQ                            */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="tensu-badge-blue inline-flex justify-center" style={{ color: '#A78BFA', backgroundColor: 'rgba(167, 139, 250, 0.1)', borderColor: 'rgba(167, 139, 250, 0.2)' }}>
              <HelpCircle className="w-3 h-3" />
              FAQ
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">
              Часто задаваемые вопросы
            </h2>
          </div>
          
          <FaqAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 9: FINAL CTA & FOOTER             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
          <h2 className="text-4xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
            Начните управлять клубом <br className="hidden sm:block" />
            <span className="text-gradient-blue-purple">по-новому</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Избавьтесь от рутины в чатах и Excel. Переходите на современную систему автоматизации, созданную специально для спортивных клубов.
          </p>
          <div className="pt-4 flex justify-center">
             <button className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white rounded-2xl px-10 py-5 text-base font-bold uppercase tracking-wider flex items-center gap-3 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                Запросить демо-доступ
                <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
