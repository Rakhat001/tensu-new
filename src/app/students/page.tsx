"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Calendar, CreditCard, Shield, CheckCircle2, DollarSign,
  Pause, Sparkles, ArrowRight, Zap, Award, QrCode
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function StudentsPage() {
  const { language } = useLanguage();

  const translations = {
    ru: {
      hero: {
        badge: "Для учеников",
        title: "Tensu",
        titleGradient: "Students",
        subtitle: "Всё для комфортных тренировок",
        description: "Быстрая онлайн-запись, цифровой абонемент в Apple & Google Wallet, бесконтактный QR-вход и умная геймификация тренировок — в вашем Telegram.",
        cta: "Открыть в Telegram",
      },
      wallet: {
        badge: "Технологии",
        title: "Цифровой абонемент в Wallet",
        subtitle: "Добавьте абонемент в кошелек смартфона и проходите в клуб за 1 секунду по QR-коду даже без интернета.",
        cardName: "Алина Сериковна",
        cardTitle: "TENSU FIGHT CLUB",
        cardStatus: "АБОНЕМЕНТ АКТИВЕН",
        cardEnd: "Действует до 17.06.2026",
        passId: "Pass ID: #9842",
        qrText: "1 СЕК НА ВХОД ПО QR",
        features: [
          { title: "100%", desc: "Цифровой доступ" },
          { title: "Оффлайн", desc: "Работает без интернета" },
        ],
      },
      features: {
        badge: "Функционал",
        title: "Возможности Tensu Students",
        items: [
          { icon: Calendar, title: "Умное расписание", description: "Просматривайте тренировки в виде интерактивного списка или календаря с фильтрами.", details: ["Удобный просмотр расписания", "Фильтры по клубам и залам", "Свободные места в группах", "Напоминания о занятиях"] },
          { icon: CreditCard, title: "Мои абонементы", description: "Управляйте всеми вашими активными, замороженными и истёкшими абонементами.", details: ["Удобный статус-контроль", "Информация о днях заморозки", "История активаций", "Продление в один клик"] },
          { icon: DollarSign, title: "Покупка и оплата", description: "Безопасная и быстрая оплата абонементов картой напрямую в приложении.", details: ["Выбор тарифного плана", "Сохранение карты", "История платежей", "Защищенные транзакции"] },
          { icon: Pause, title: "Заморозка", description: "Гибко управляйте своей подпиской при необходимости перерыва.", details: ["Мгновенная заморозка", "Авто-продление", "Контроль лимитов дней", "История заморозок"] },
        ],
      },
      gamification: {
        badge: "Геймификация",
        title: "Игры и мотивация",
        subtitle: "Превращайте регулярные тренировки в увлекательную привычку и достигайте большего.",
        level: "Уровень 12",
        xp: "850 / 1200 XP",
        streak: "Серия: 7 дней",
        goal: "Ближайшая цель: Посетить 20 тренировок",
        premium: "Премиум",
        badges: [
          { title: "Мастер дисциплины", desc: "Посетить 15 тренировок" },
          { title: "Рейтинг клуба", desc: "Войдите в топ-3 по активности" },
          { title: "Серия тренировок", desc: "7 дней регулярных занятий" },
        ],
      },
      security: {
        badge: "Надёжность",
        title: "Абсолютная безопасность",
        subtitle: "Ваши конфиденциальные данные находятся под надёжной защитой сертифицированных систем.",
        features: [
          { icon: Shield, title: "Стандарт PCI DSS", description: "Безопасное шифрование и хранение данных банковских карт." },
          { icon: CheckCircle2, title: "Быстрая оплата", description: "Оплата сохранённой картой в один клик без повторного ввода." },
          { icon: CreditCard, title: "Все карты", description: "Приём платежей с любых банковских карт и платёжных систем." },
        ],
      },
      cta: {
        title: "Начните тренировки с Tensu",
        desc: "Откройте интерактивное студенческое приложение в Telegram и получите полноценный доступ ко всем возможностям мгновенно.",
        btn1: "Открыть Telegram",
        btn2: "Узнать о бизнесе",
      },
    },
    en: {
      hero: {
        badge: "For Students",
        title: "Tensu",
        titleGradient: "Students",
        subtitle: "Everything for Comfortable Training",
        description: "Fast online booking, digital passes in Apple & Google Wallet, contactless QR entry, and smart workout gamification — right in your Telegram.",
        cta: "Open in Telegram",
      },
      wallet: {
        badge: "Technology",
        title: "Digital Wallet Pass",
        subtitle: "Add a membership to your smartphone wallet and enter the club in 1 second via QR code even without internet.",
        cardName: "Alina Serikovna",
        cardTitle: "TENSU FIGHT CLUB",
        cardStatus: "MEMBERSHIP ACTIVE",
        cardEnd: "Valid until 17.06.2026",
        passId: "Pass ID: #9842",
        qrText: "1 SEC QR ENTRY",
        features: [
          { title: "100%", desc: "Digital Access" },
          { title: "Offline", desc: "Works without internet" },
        ],
      },
      features: {
        badge: "Features",
        title: "Tensu Students Capabilities",
        items: [
          { icon: Calendar, title: "Smart Schedule", description: "View workouts as an interactive list or calendar with filters.", details: ["Convenient schedule view", "Club and hall filters", "Available spots info", "Class reminders"] },
          { icon: CreditCard, title: "My Memberships", description: "Manage all your active, frozen, and expired memberships.", details: ["Status control", "Freeze days info", "Activation history", "One-click renewal"] },
          { icon: DollarSign, title: "Purchase & Payment", description: "Secure and fast membership payment by card directly in the app.", details: ["Tariff plan selection", "Card saving", "Payment history", "Secure transactions"] },
          { icon: Pause, title: "Membership Freeze", description: "Flexibly manage your subscription when you need a break.", details: ["Instant freeze", "Auto-renewal", "Days limit control", "Freeze history"] },
        ],
      },
      gamification: {
        badge: "Gamification",
        title: "Games & Motivation",
        subtitle: "Turn regular workouts into an exciting habit and achieve more.",
        level: "Level 12",
        xp: "850 / 1200 XP",
        streak: "Streak: 7 days",
        goal: "Next Goal: Attend 20 workouts",
        premium: "Premium",
        badges: [
          { title: "Discipline Master", desc: "Attend 15 workouts" },
          { title: "Club Rating", desc: "Enter top 3 by activity" },
          { title: "Workout Streak", desc: "7 days of regular classes" },
        ],
      },
      security: {
        badge: "Reliability",
        title: "Absolute Security",
        subtitle: "Your confidential data is securely protected by certified systems.",
        features: [
          { icon: Shield, title: "PCI DSS Standard", description: "Secure encryption and storage of bank card data." },
          { icon: CheckCircle2, title: "Fast Payment", description: "One-click payment with a saved card without re-entering." },
          { icon: CreditCard, title: "All Cards", description: "Acceptance of payments from any bank cards and systems." },
        ],
      },
      cta: {
        title: "Start Training with Tensu",
        desc: "Open the interactive student app in Telegram and get full access to all features instantly.",
        btn1: "Open Telegram",
        btn2: "Learn about Business",
      },
    },
    kk: {
      hero: {
        badge: "Оқушылар үшін",
        title: "Tensu",
        titleGradient: "Students",
        subtitle: "Ыңғайлы жаттығулар үшін бәрі",
        description: "Жылдам онлайн жазылу, Apple & Google Wallet цифрлық абонементі, контактсыз QR-кіру және жаттығуларды геймификациялау — Telegram-да.",
        cta: "Telegram-да ашу",
      },
      wallet: {
        badge: "Технологиялар",
        title: "Wallet цифрлық абонементі",
        subtitle: "Абонементті смартфон әмиянына қосып, интернетсіз-ақ QR код арқылы 1 секундта клубқа кіріңіз.",
        cardName: "Алина Серікқызы",
        cardTitle: "TENSU FIGHT CLUB",
        cardStatus: "ЖАЗЫЛЫМ БЕЛСЕНДІ",
        cardEnd: "17.06.2026 дейін жарамды",
        passId: "Pass ID: #9842",
        qrText: "QR АРҚЫЛЫ 1 СЕК КІРУ",
        features: [
          { title: "100%", desc: "Цифрлық қолжетімділік" },
          { title: "Оффлайн", desc: "Интернетсіз жұмыс істейді" },
        ],
      },
      features: {
        badge: "Мүмкіндіктер",
        title: "Tensu Students Мүмкіндіктері",
        items: [
          { icon: Calendar, title: "Ақылды кесте", description: "Жаттығуларды сүзгілері бар интерактивті тізім немесе күнтізбе түрінде қараңыз.", details: ["Кестені ыңғайлы қарау", "Клуб пен зал сүзгілері", "Бос орындар туралы ақпарат", "Сабақ ескертулері"] },
          { icon: CreditCard, title: "Менің жазылымдарым", description: "Барлық белсенді, қатырылған және мерзімі өткен жазылымдарыңызды басқарыңыз.", details: ["Мәртебе бақылауы", "Қатыру күндері ақпараты", "Активтендіру тарихы", "Бір рет басумен ұзарту"] },
          { icon: DollarSign, title: "Сатып алу және Төлем", description: "Қолданба ішінде жазылымдарды карта арқылы қауіпсіз әрі жылдам төлеу.", details: ["Тарифтік жоспарды таңдау", "Картаны сақтау", "Төлем тарихы", "Қауіпсіз транзакциялар"] },
          { icon: Pause, title: "Жазылымды қатыру", description: "Үзіліс қажет болған жағдайда жазылымыңызды икемді басқарыңыз.", details: ["Лезде қатыру", "Авто-ұзарту", "Күн шектеуін бақылау", "Қатыру тарихы"] },
        ],
      },
      gamification: {
        badge: "Геймификация",
        title: "Ойындар және мотивация",
        subtitle: "Тұрақты жаттығуларды қызықты әдетке айналдырыңыз және көбірек жетістікке жетіңіз.",
        level: "Деңгей 12",
        xp: "850 / 1200 XP",
        streak: "Серия: 7 күн",
        goal: "Алдағы мақсат: 20 жаттығуға қатысу",
        premium: "Премиум",
        badges: [
          { title: "Тәртіп шебері", desc: "15 жаттығуға қатысу" },
          { title: "Клуб рейтингі", desc: "Белсенділік бойынша топ-3 кіру" },
          { title: "Жаттығу сериясы", desc: "7 күн тұрақты сабақтар" },
        ],
      },
      security: {
        badge: "Сенімділік",
        title: "Абсолютті қауіпсіздік",
        subtitle: "Сіздің құпия деректеріңіз сертификатталған жүйелермен сенімді қорғалған.",
        features: [
          { icon: Shield, title: "PCI DSS стандарты", description: "Банк картасы деректерін қауіпсіз шифрлау және сақтау." },
          { icon: CheckCircle2, title: "Жылдам төлем", description: "Қайта енгізусіз сақталған картамен бір рет басу арқылы төлем." },
          { icon: CreditCard, title: "Барлық карталар", description: "Кез келген банк карталары мен жүйелерінен төлем қабылдау." },
        ],
      },
      cta: {
        title: "Tensu-мен жаттығуды бастаңыз",
        desc: "Telegram-да интерактивті оқушы қосымшасын ашып, барлық мүмкіндіктерге толық қол жеткізіңіз.",
        btn1: "Telegram ашу",
        btn2: "Бизнес туралы білу",
      },
    },
  };

  const t = translations[language] || translations.ru;

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-800">
      <Navigation />

      {/* =============================================
          HERO
      ============================================= */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden tensu-hero-bg">
        <div className="absolute inset-0 tensu-dot-pattern opacity-50 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none animate-blob" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: "-4s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div className="space-y-8 animate-slide-up">
              <div className="tensu-badge-blue w-max">
                <Sparkles className="w-3 h-3" />
                {t.hero.badge}
              </div>

              <div className="space-y-5">
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.04]">
                  {t.hero.title}{" "}
                  <span className="text-gradient-blue-purple">{t.hero.titleGradient}</span>
                </h1>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-700 tracking-tight">
                  {t.hero.subtitle}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://t.me/tensubot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-2xl tensu-btn-primary text-white font-bold uppercase tracking-widest text-[13px]"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Platform badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["📱 Telegram Mini App", "🍎 Apple Wallet", "🌐 Google Wallet"].map((b, i) => (
                  <span key={i} className="tensu-stat-pill text-xs font-semibold text-gray-600">{b}</span>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
              {/* Glow behind phone */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-200/60 to-violet-200/60 rounded-full blur-3xl" />
              </div>

              {/* Floating chips */}
              <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-2.5 flex items-center gap-2.5 animate-float z-20">
                <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 leading-none">Оплата прошла</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">Абонемент активен</p>
                </div>
              </div>

              <div className="absolute bottom-32 right-4 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-2.5 flex items-center gap-2.5 animate-float-delayed z-20">
                <div className="w-7 h-7 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
                  <QrCode className="w-3.5 h-3.5 text-violet-600" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 leading-none">QR Check-in</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">1 секунда</p>
                </div>
              </div>

              {/* Phone */}
              <div className="relative w-[280px] h-[560px] z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-violet-100/40 rounded-[2.5rem] blur-xl pointer-events-none" />
                <div className="relative w-full h-full rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl">
                  <Image
                    src="/screenshots/students-main.png"
                    alt="Tensu Students App"
                    fill
                    className="object-cover object-top"
                    sizes="280px"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =============================================
          WALLET PASS
      ============================================= */}
      <section className="relative py-24 section-divider tensu-section-alt">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Wallet card mockup */}
            <div className="flex justify-center lg:justify-start animate-slide-up">
              <div className="w-[320px] bg-white border border-gray-200 rounded-[2rem] shadow-xl p-6 space-y-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">

                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-black text-xs text-white shadow-sm">T</div>
                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-wider">{t.wallet.cardTitle}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[8px] font-bold text-blue-600 uppercase tracking-widest">Wallet</span>
                </div>

                {/* Card body */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 space-y-4 shadow-inner">
                  <span className="text-[9px] font-bold text-blue-100 uppercase tracking-widest block">{t.wallet.cardStatus}</span>
                  <div className="space-y-1">
                    <h4 className="text-base font-black text-white">{t.wallet.cardName}</h4>
                    <p className="text-[10px] text-blue-100">{t.wallet.cardEnd}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/20 pt-3">
                    <span className="text-[9px] font-bold text-blue-100 uppercase tracking-wider">{t.wallet.passId}</span>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <QrCode className="w-7 h-7 text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* QR label */}
                <div className="text-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.wallet.qrText}</span>
                </div>

                {/* Feature chips */}
                <div className="grid grid-cols-2 gap-3">
                  {t.wallet.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-gray-100 bg-gray-50 space-y-1 text-center">
                      <span className="text-blue-600 font-black text-xl leading-none block">{feat.title}</span>
                      <p className="text-[10px] text-gray-500">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="tensu-badge-blue w-max">{t.wallet.badge}</div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                {t.wallet.title}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">{t.wallet.subtitle}</p>

              <div className="space-y-4">
                {[
                  { icon: QrCode, title: "Мгновенный вход", desc: "Покажите QR — турникет откроется за 1 секунду" },
                  { icon: Shield, title: "Работает офлайн", desc: "Абонемент доступен без интернета в любой точке" },
                  { icon: CheckCircle2, title: "Apple & Google Wallet", desc: "Добавьте в любой кошелёк вашего смартфона" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =============================================
          FEATURES GRID
      ============================================= */}
      <section className="relative py-24 section-divider bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="tensu-badge-blue inline-flex">{t.features.badge}</div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              {t.features.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className="tensu-card p-8 flex flex-col group hover:-translate-y-1.5 cursor-default"
              >
                <div className="space-y-5">
                  {/* Icon — alternates blue/violet */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    index % 2 === 0
                      ? "bg-blue-50 border-blue-100"
                      : "bg-violet-50 border-violet-100"
                  } group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${index % 2 === 0 ? "text-blue-600" : "text-violet-600"}`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold text-gray-900 group-hover:${index % 2 === 0 ? "text-blue-600" : "text-violet-600"} transition-colors`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${index % 2 === 0 ? "text-blue-500" : "text-violet-500"}`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          GAMIFICATION
      ============================================= */}
      <section className="relative py-24 section-divider tensu-section-alt overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-violet-100/60 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text + badges */}
            <div className="space-y-8 animate-slide-up">
              <div className="tensu-badge-blue w-max" style={{ color: "#7C3AED", background: "rgba(124,58,237,0.07)", borderColor: "rgba(124,58,237,0.18)" }}>
                {t.gamification.badge}
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                  {t.gamification.title}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">{t.gamification.subtitle}</p>
              </div>

              <div className="space-y-3">
                {t.gamification.badges.map((badge, idx) => (
                  <div key={idx} className="tensu-card p-4 flex items-center gap-4 cursor-default group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                      idx % 2 === 0 ? "bg-blue-50 border border-blue-100" : "bg-violet-50 border border-violet-100"
                    }`}>
                      <Award className={`w-5 h-5 ${idx % 2 === 0 ? "text-blue-600" : "text-violet-600"}`} />
                    </div>
                    <div>
                      <h6 className="text-sm font-bold text-gray-900">{badge.title}</h6>
                      <p className="text-xs text-gray-500 mt-0.5">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress card mockup */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="w-[320px] bg-white border border-gray-200 rounded-[2rem] shadow-xl p-6 space-y-6">

                {/* User header */}
                <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-base font-black text-white shadow-sm">A</div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">Алина С.</h5>
                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">{t.gamification.premium}</span>
                  </div>
                </div>

                {/* XP bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold text-gray-500">
                    <span>{t.gamification.level}</span>
                    <span className="text-gray-900">{t.gamification.xp}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>

                {/* Streak */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-blue-100 bg-blue-50">
                  <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">{t.gamification.streak}</span>
                  <Zap className="w-5 h-5 text-blue-600 fill-blue-200 animate-pulse" />
                </div>

                {/* Goal */}
                <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 text-center">
                  <span className="text-[11px] font-bold text-violet-700 uppercase tracking-widest">{t.gamification.goal}</span>
                </div>

                {/* Mini progress bars */}
                <div className="space-y-2">
                  {[
                    { label: "Посещений", val: 14, max: 20 },
                    { label: "Активность", val: 70, max: 100 },
                  ].map((bar, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-semibold text-gray-500">
                        <span>{bar.label}</span>
                        <span className="text-gray-700">{bar.val}/{bar.max}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${i === 0 ? "bg-blue-500" : "bg-violet-500"}`}
                          style={{ width: `${(bar.val / bar.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =============================================
          SECURITY
      ============================================= */}
      <section className="relative py-24 section-divider bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="tensu-badge-blue inline-flex">{t.security.badge}</div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              {t.security.title}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">{t.security.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.security.features.map((feature, index) => (
              <div
                key={index}
                className="tensu-card p-8 space-y-5 group hover:-translate-y-1.5 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                  index % 2 === 0 ? "bg-blue-50 border-blue-100" : "bg-violet-50 border-violet-100"
                } group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${index % 2 === 0 ? "text-blue-600" : "text-violet-600"}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
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
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            {t.cta.title}
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">{t.cta.desc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/tensubot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 rounded-2xl px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl"
            >
              {t.cta.btn1}
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/business"
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
