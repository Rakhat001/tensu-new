"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DesktopMockup } from "@/components/DesktopMockup";
import {
  Users, Calendar, BarChart3, Settings, Shield,
  ArrowRight, CheckCircle2, TrendingUp, Sparkles,
  Zap, Play, Send, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function BusinessPage() {
  const { language } = useLanguage();

  const translations = {
    ru: {
      hero: {
        badge: "Для бизнеса",
        title: "Tensu",
        titleGradient: "Business",
        subtitle: "Умное управление вашим спортивным клубом",
        description: "Комплексная CRM-платформа, которая автоматизирует рутину, повышает лояльность клиентов и помогает вашему бизнесу расти быстрее.",
        cta: "Оставить заявку",
        demo: "Смотреть демо",
      },
      features: {
        badge: "Функционал",
        title: "Всё необходимое",
        titleAccent: "в одном месте",
        items: [
          { icon: Users, title: "Управление клиентами", description: "Единая база данных всех учеников. Отслеживайте посещения, статусы абонементов и историю платежей.", points: ["Полная история клиента", "Статусы абонементов", "Быстрый поиск и фильтрация"] },
          { icon: Calendar, title: "Умное расписание", description: "Гибкое создание тренировок, замен тренеров и отмен. Моментальная синхронизация с приложением учеников.", points: ["Создание и редактирование занятий", "Замены тренеров", "Синхронизация в реальном времени"] },
          { icon: BarChart3, title: "Аналитика и отчёты", description: "Детальные графики по выручке, посещаемости и активности клиентов. Принимайте решения на основе данных.", points: ["Динамика выручки", "Активность посещений", "Экспорт отчётов"] },
          { icon: Settings, title: "Автоматизация", description: "Настройка триггеров: автоматические напоминания об окончании абонемента и пуш-уведомления об акциях.", points: ["Авто-напоминания", "Пуш-уведомления", "Сценарии продаж"] },
        ],
      },
      roles: {
        badge: "Доступ",
        title: "Контроль ролей",
        titleAccent: "и прав",
        subtitle: "Настройте доступы для каждого сотрудника вашей команды",
        items: [
          { title: "Владелец", desc: "Полный контроль над бизнесом. Доступ ко всем филиалам, финансовой аналитике и настройкам платформы.", icon: Shield, violet: false },
          { title: "Администратор", desc: "Управление расписанием, продажа абонементов и работа с клиентской базой конкретного филиала.", icon: Settings, violet: true },
          { title: "Тренер", desc: "Просмотр своего расписания, отметка присутствующих на тренировке и базовая информация об учениках.", icon: Users, violet: false },
        ],
      },
      metrics: {
        badge: "Результат",
        title: "Растите вместе",
        titleAccent: "с Tensu",
        items: [
          { value: "-40%", label: "Времени на рутину", icon: Zap },
          { value: "+25%", label: "Удержание клиентов", icon: TrendingUp },
          { value: "24/7", label: "Доступ к аналитике", icon: BarChart3 },
          { value: "5 мин", label: "Запуск клуба", icon: CheckCircle2 },
        ],
      },
      cta: {
        title: "Готовы масштабировать бизнес?",
        desc: "Оставьте заявку, и мы проведём подробную демонстрацию платформы специально для вашего клуба.",
        btn1: "Запросить демо",
        btn2: "Посмотреть тарифы",
      },
    },
    en: {
      hero: {
        badge: "For Business",
        title: "Tensu",
        titleGradient: "Business",
        subtitle: "Smart management of your sports club",
        description: "A comprehensive CRM platform that automates routines, increases customer loyalty, and helps your business grow faster.",
        cta: "Submit Request",
        demo: "Watch Demo",
      },
      features: {
        badge: "Features",
        title: "Everything you need",
        titleAccent: "in one place",
        items: [
          { icon: Users, title: "Client Management", description: "Unified database of all students. Track attendance, membership statuses, and payment history.", points: ["Full client history", "Membership statuses", "Quick search & filters"] },
          { icon: Calendar, title: "Smart Schedule", description: "Flexible workout creation, coach replacements, and cancellations. Instant synchronization with the student app.", points: ["Create & edit sessions", "Coach replacements", "Real-time sync"] },
          { icon: BarChart3, title: "Analytics & Reports", description: "Detailed charts on revenue, attendance, and client activity. Make data-driven decisions.", points: ["Revenue dynamics", "Attendance activity", "Export reports"] },
          { icon: Settings, title: "Automation", description: "Configure triggers: automatic membership expiration reminders and promotional push notifications.", points: ["Auto-reminders", "Push notifications", "Sales scenarios"] },
        ],
      },
      roles: {
        badge: "Access",
        title: "Role and Rights",
        titleAccent: "Control",
        subtitle: "Customize access for every employee on your team",
        items: [
          { title: "Owner", desc: "Full business control. Access to all branches, financial analytics, and platform settings.", icon: Shield, violet: false },
          { title: "Administrator", desc: "Schedule management, membership sales, and client base operations for a specific branch.", icon: Settings, violet: true },
          { title: "Coach", desc: "View personal schedule, mark attendance, and access basic student information.", icon: Users, violet: false },
        ],
      },
      metrics: {
        badge: "Results",
        title: "Grow together",
        titleAccent: "with Tensu",
        items: [
          { value: "-40%", label: "Time on routine", icon: Zap },
          { value: "+25%", label: "Client retention", icon: TrendingUp },
          { value: "24/7", label: "Analytics access", icon: BarChart3 },
          { value: "5 min", label: "Club launch", icon: CheckCircle2 },
        ],
      },
      cta: {
        title: "Ready to scale your business?",
        desc: "Submit a request, and we will conduct a detailed platform demonstration specifically for your club.",
        btn1: "Request Demo",
        btn2: "View Pricing",
      },
    },
    kk: {
      hero: {
        badge: "Бизнес үшін",
        title: "Tensu",
        titleGradient: "Business",
        subtitle: "Спорт клубыңызды ақылды басқару",
        description: "Күнделікті жұмысты автоматтандыратын, клиенттердің лоялдылығын арттыратын және бизнесіңіздің тез өсуіне көмектесетін кешенді CRM-платформа.",
        cta: "Өтініш қалдыру",
        demo: "Демо қарау",
      },
      features: {
        badge: "Мүмкіндіктер",
        title: "Барлығы",
        titleAccent: "бір жерде",
        items: [
          { icon: Users, title: "Клиенттерді басқару", description: "Барлық оқушылардың бірыңғай дерекқоры. Сабаққа қатысуды, абонемент күйлерін және төлем тарихын бақылаңыз.", points: ["Клиенттің толық тарихы", "Абонемент күйлері", "Жылдам іздеу"] },
          { icon: Calendar, title: "Ақылды кесте", description: "Жаттығуларды икемді құру, жаттықтырушыларды ауыстыру. Оқушылар қосымшасымен лезде синхрондау.", points: ["Сабақтарды жасау", "Жаттықтырушы ауыстыру", "Нақты уақытта синхрондау"] },
          { icon: BarChart3, title: "Аналитика және есептер", description: "Кіріс, қатысу және клиенттер белсенділігі бойынша толық графиктер. Деректер негізінде шешім қабылдаңыз.", points: ["Кіріс динамикасы", "Қатысу белсенділігі", "Есептерді экспорттау"] },
          { icon: Settings, title: "Автоматтандыру", description: "Абонементтің аяқталуы туралы автоматты ескертулер және акциялар туралы хабарламалар.", points: ["Авто-ескертулер", "Push хабарламалар", "Сату сценарийлері"] },
        ],
      },
      roles: {
        badge: "Рұқсаттар",
        title: "Рөлдер мен",
        titleAccent: "құқықтарды бақылау",
        subtitle: "Командаңыздың әр қызметкері үшін рұқсаттарды реттеңіз",
        items: [
          { title: "Иесі", desc: "Бизнесті толық бақылау. Барлық филиалдарға, қаржылық аналитикаға және баптауларға қол жеткізу.", icon: Shield, violet: false },
          { title: "Администратор", desc: "Кестені басқару, абонементтерді сату және нақты филиалдың клиенттік базасымен жұмыс.", icon: Settings, violet: true },
          { title: "Жаттықтырушы", desc: "Өз кестесін көру, жаттығуға қатысқандарды белгілеу және оқушылар туралы негізгі ақпарат.", icon: Users, violet: false },
        ],
      },
      metrics: {
        badge: "Нәтиже",
        title: "Tensu-мен бірге",
        titleAccent: "өсіңіз",
        items: [
          { value: "-40%", label: "Күнделікті жұмыс", icon: Zap },
          { value: "+25%", label: "Клиент ұстап қалу", icon: TrendingUp },
          { value: "24/7", label: "Аналитика", icon: BarChart3 },
          { value: "5 мин", label: "Клуб іске қосу", icon: CheckCircle2 },
        ],
      },
      cta: {
        title: "Бизнесті масштабтауға дайынсыз ба?",
        desc: "Өтініш қалдырыңыз, біз сіздің клубыңыз үшін платформаның толық демонстрациясын өткіземіз.",
        btn1: "Демо сұрау",
        btn2: "Тарифтерді көру",
      },
    },
  };

  const t = translations[language] || translations.ru;

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-800">
      <Navigation />

      {/* =============================================
          HERO — centered, with demo below
      ============================================= */}
      <section className="relative pt-28 pb-0 lg:pt-36 overflow-hidden tensu-hero-bg">
        <div className="absolute inset-0 tensu-dot-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-violet-100/50 rounded-full blur-[130px] pointer-events-none animate-blob" />
        <div className="absolute -bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: "-4s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Text block — centered */}
          <div className="text-center max-w-4xl mx-auto space-y-8 mb-14">
            <div className="tensu-badge-blue inline-flex items-center gap-2 mx-auto">
              <Sparkles className="w-3 h-3" />
              {t.hero.badge}
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.04]">
                {t.hero.title}{" "}
                <span className="text-gradient-blue-purple">{t.hero.titleGradient}</span>
              </h1>
              <p className="text-xl lg:text-2xl font-bold text-gray-700 tracking-tight">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                {t.hero.description}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-2xl tensu-btn-primary text-white font-bold uppercase tracking-widest text-[13px]"
              >
                <Send className="w-4 h-4" />
                {t.hero.cta}
              </Link>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-2xl tensu-btn-secondary font-bold uppercase tracking-widest text-[13px]"
              >
                <Play className="w-4 h-4 text-blue-600" />
                {t.hero.demo}
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              {[
                { icon: Users, label: "50+ клубов" },
                { icon: TrendingUp, label: "5 000+ учеников" },
                { icon: Zap, label: "Запуск за 1 день" },
              ].map((chip, i) => (
                <div key={i} className="tensu-stat-pill text-xs font-semibold text-gray-600">
                  <chip.icon className="w-3.5 h-3.5 text-blue-500" />
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CRM Demo — browser framed */}
          <div id="demo" className="max-w-5xl mx-auto">
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
            <div className="shadow-2xl shadow-blue-100/40 rounded-b-2xl overflow-hidden border border-gray-200 border-t-0">
              <DesktopMockup />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          FEATURES
      ============================================= */}
      <section className="relative py-24 lg:py-28 section-divider tensu-section-alt">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: heading sticky */}
            <div className="lg:sticky lg:top-28 space-y-8">
              <div className="tensu-badge-blue w-max">{t.features.badge}</div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                {t.features.title}
                <span className="text-gradient-blue-purple block">{t.features.titleAccent}</span>
              </h2>
              <p className="text-gray-500 leading-relaxed text-base">
                Tensu Business — это не просто CRM. Это операционная система вашего клуба.
              </p>

              {/* Mini checklist */}
              <ul className="space-y-3">
                {["Единая экосистема для клуба", "Интеграция с Telegram Mini App", "Работает с любого устройства"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-violet-600 transition-colors group">
                Оставить заявку
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.features.items.map((feature, idx) => (
                <div
                  key={idx}
                  className={`tensu-card p-6 space-y-4 group hover:-translate-y-1.5 cursor-default ${idx % 2 === 1 ? "sm:translate-y-6" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-transform ${
                    idx % 2 === 0 ? "bg-blue-50 border-blue-100" : "bg-violet-50 border-violet-100"
                  }`}>
                    <feature.icon className={`w-6 h-6 ${idx % 2 === 0 ? "text-blue-600" : "text-violet-600"}`} />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold text-gray-900 mb-2 group-hover:${idx % 2 === 0 ? "text-blue-600" : "text-violet-600"} transition-colors`}>
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                  <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                    {feature.points.map((p, pi) => (
                      <li key={pi} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${idx % 2 === 0 ? "bg-blue-400" : "bg-violet-400"}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          ROLES
      ============================================= */}
      <section className="relative py-24 lg:py-28 section-divider bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-blue-50/60 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-5">
            <div className="tensu-badge-blue inline-flex" style={{ color: "#7C3AED", background: "rgba(124,58,237,0.07)", borderColor: "rgba(124,58,237,0.18)" }}>
              {t.roles.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              {t.roles.title}{" "}
              <span className="text-gradient-blue-purple">{t.roles.titleAccent}</span>
            </h2>
            <p className="text-lg text-gray-500">{t.roles.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.roles.items.map((role, idx) => (
              <div
                key={idx}
                className="tensu-card p-8 lg:p-10 text-center flex flex-col items-center group hover:-translate-y-2 cursor-default"
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border group-hover:scale-110 transition-transform ${
                  role.violet
                    ? "bg-violet-50 border-violet-100"
                    : "bg-blue-50 border-blue-100"
                }`}>
                  <role.icon className={`w-10 h-10 ${role.violet ? "text-violet-600" : "text-blue-600"}`} />
                </div>

                <h3 className={`text-2xl font-bold mb-4 tracking-tight group-hover:${role.violet ? "text-violet-600" : "text-blue-600"} transition-colors text-gray-900`}>
                  {role.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{role.desc}</p>

                {/* Role level indicator */}
                <div className="mt-6 flex gap-1.5">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className={`h-1.5 rounded-full ${
                        dot <= idx
                          ? role.violet ? "bg-violet-400 w-6" : "bg-blue-400 w-6"
                          : "bg-gray-200 w-3"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          METRICS
      ============================================= */}
      <section className="relative py-24 lg:py-28 section-divider tensu-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-5">
            <div className="tensu-badge-blue inline-flex">{t.metrics.badge}</div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              {t.metrics.title}{" "}
              <span className="text-gradient-blue-purple">{t.metrics.titleAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {t.metrics.items.map((metric, idx) => (
              <div
                key={idx}
                className="tensu-card p-6 lg:p-8 text-center group cursor-default hover:-translate-y-1.5"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 border ${
                  idx % 2 === 0 ? "bg-blue-50 border-blue-100" : "bg-violet-50 border-violet-100"
                } group-hover:scale-110 transition-transform`}>
                  <metric.icon className={`w-6 h-6 ${idx % 2 === 0 ? "text-blue-600" : "text-violet-600"}`} />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-gradient-blue-purple tracking-tight mb-2">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          CTA
      ============================================= */}
      <section className="relative py-24 lg:py-32 section-divider overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 pointer-events-none" />
        <div className="absolute inset-0 tensu-dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-400/20 rounded-full blur-[120px] pointer-events-none animate-blob" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: "-5s" }} />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
          {/* Mini chips */}
          <div className="flex justify-center flex-wrap gap-3">
            {[
              { icon: Users, label: "50+ клубов" },
              { icon: TrendingUp, label: "+25% удержание" },
              { icon: Zap, label: "Запуск за 1 день" },
            ].map((chip, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                <chip.icon className="w-3.5 h-3.5 text-white/80" />
                <span className="text-xs font-semibold text-white/90">{chip.label}</span>
              </div>
            ))}
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            {t.cta.title}
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t.cta.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 rounded-2xl px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl"
            >
              {t.cta.btn1}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              {t.cta.btn2}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
