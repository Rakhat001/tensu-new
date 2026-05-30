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
        badge: 'Для учеников',
        title: 'Tensu',
        titleGradient: 'Students',
        subtitle: 'Всё для комфортных тренировок',
        description: 'Быстрая онлайн-запись, цифровой абонемент в Apple & Google Wallet, бесконтактный QR-вход и умная геймификация тренировок — в вашем Telegram.',
        cta: 'Открыть в Telegram',
      },
      wallet: {
        badge: 'Технологии',
        title: 'Цифровой абонемент в Wallet',
        subtitle: 'Добавьте абонемент в кошелек смартфона и проходите в клуб за 1 секунду по QR-коду даже без интернета.',
        cardName: 'Алина Сериковна',
        cardTitle: 'TENSU FIGHT CLUB',
        cardStatus: 'АБОНЕМЕНТ АКТИВЕН',
        cardEnd: 'Действует до 17.06.2026',
        passId: 'Pass ID: #9842',
        qrText: '1 СЕК НА ВХОД ПО QR',
        features: [
          { title: '100%', desc: 'Цифровой доступ' },
          { title: 'Оффлайн', desc: 'Работает без интернета' }
        ]
      },
      features: {
        badge: 'Функционал',
        title: 'Возможности Tensu Students',
        items: [
          {
            icon: Calendar, title: 'Умное расписание', description: 'Просматривайте тренировки в виде интерактивного списка или календаря с фильтрами.',
            details: ['Удобный просмотр расписания', 'Фильтры по клубам и залам', 'Свободные места в группах', 'Напоминания о занятиях'],
          },
          {
            icon: CreditCard, title: 'Мои абонементы', description: 'Управляйте всеми вашими активными, замороженными и истёкшими абонементами.',
            details: ['Удобный статус-контроль', 'Информация о днях заморозки', 'История активаций', 'Продление в один клик'],
          },
          {
            icon: DollarSign, title: 'Покупка и оплата', description: 'Безопасная и быстрая оплата абонементов картой напрямую в приложении.',
            details: ['Выбор тарифного плана', 'Сохранение карты', 'История платежей', 'Защищенные транзакции'],
          },
          {
            icon: Pause, title: 'Заморозка', description: 'Гибко управляйте своей подпиской при необходимости перерыва.',
            details: ['Мгновенная заморозка', 'Авто-продление', 'Контроль лимитов дней', 'История заморозок'],
          },
        ],
      },
      gamification: {
        badge: 'Геймификация',
        title: 'Игры и мотивация',
        subtitle: 'Превращайте регулярные тренировки в увлекательную привычку и достигайте большего.',
        level: 'Уровень 12',
        xp: '850 / 1200 XP',
        streak: 'Серия: 7 дней',
        goal: 'Ближайшая цель: Посетить 20 тренировок',
        premium: 'Премиум',
        badges: [
          { title: 'Мастер дисциплины', desc: 'Посетить 15 тренировок' },
          { title: 'Рейтинг клуба', desc: 'Войдите в топ-3 по активности' },
          { title: 'Серия тренировок', desc: '7 дней регулярных занятий' },
        ],
      },
      security: {
        badge: 'Надежность',
        title: 'Абсолютная безопасность',
        subtitle: 'Ваши конфиденциальные данные находятся под надежной защитой сертифицированных систем.',
        features: [
          { icon: Shield, title: 'Стандарт PCI DSS', description: 'Безопасное шифрование и хранение данных банковских карт.' },
          { icon: CheckCircle2, title: 'Быстрая оплата', description: 'Оплата сохраненной картой в один клик без повторного ввода.' },
          { icon: CreditCard, title: 'Все карты', description: 'Прием платежей с любых банковских карт и платежных систем.' },
        ],
      },
      cta: {
        title: 'Начните тренировки с Tensu',
        desc: 'Откройте интерактивное студенческое приложение в Telegram и получите полноценный доступ ко всем возможностям мгновенно.',
        btn1: 'Открыть Telegram',
        btn2: 'Узнать о бизнесе'
      }
    },
    en: {
      hero: {
        badge: 'For Students',
        title: 'Tensu',
        titleGradient: 'Students',
        subtitle: 'Everything for Comfortable Training',
        description: 'Fast online booking, digital passes in Apple & Google Wallet, contactless QR entry, and smart workout gamification — right in your Telegram.',
        cta: 'Open in Telegram',
      },
      wallet: {
        badge: 'Technology',
        title: 'Digital Wallet Pass',
        subtitle: 'Add a membership to your smartphone wallet and enter the club in 1 second via QR code even without internet.',
        cardName: 'Alina Serikovna',
        cardTitle: 'TENSU FIGHT CLUB',
        cardStatus: 'MEMBERSHIP ACTIVE',
        cardEnd: 'Valid until 17.06.2026',
        passId: 'Pass ID: #9842',
        qrText: '1 SEC QR ENTRY',
        features: [
          { title: '100%', desc: 'Digital Access' },
          { title: 'Offline', desc: 'Works without internet' }
        ]
      },
      features: {
        badge: 'Features',
        title: 'Tensu Students Capabilities',
        items: [
          {
            icon: Calendar, title: 'Smart Schedule', description: 'View workouts as an interactive list or calendar with filters.',
            details: ['Convenient schedule view', 'Club and hall filters', 'Available spots info', 'Class reminders'],
          },
          {
            icon: CreditCard, title: 'My Memberships', description: 'Manage all your active, frozen, and expired memberships.',
            details: ['Status control', 'Freeze days info', 'Activation history', 'One-click renewal'],
          },
          {
            icon: DollarSign, title: 'Purchase & Payment', description: 'Secure and fast membership payment by card directly in the app.',
            details: ['Tariff plan selection', 'Card saving', 'Payment history', 'Secure transactions'],
          },
          {
            icon: Pause, title: 'Membership Freeze', description: 'Flexibly manage your subscription when you need a break.',
            details: ['Instant freeze', 'Auto-renewal', 'Days limit control', 'Freeze history'],
          },
        ],
      },
      gamification: {
        badge: 'Gamification',
        title: 'Games & Motivation',
        subtitle: 'Turn regular workouts into an exciting habit and achieve more.',
        level: 'Level 12',
        xp: '850 / 1200 XP',
        streak: 'Streak: 7 days',
        goal: 'Next Goal: Attend 20 workouts',
        premium: 'Premium',
        badges: [
          { title: 'Discipline Master', desc: 'Attend 15 workouts' },
          { title: 'Club Rating', desc: 'Enter top 3 by activity' },
          { title: 'Workout Streak', desc: '7 days of regular classes' },
        ],
      },
      security: {
        badge: 'Reliability',
        title: 'Absolute Security',
        subtitle: 'Your confidential data is securely protected by certified systems.',
        features: [
          { icon: Shield, title: 'PCI DSS Standard', description: 'Secure encryption and storage of bank card data.' },
          { icon: CheckCircle2, title: 'Fast Payment', description: 'One-click payment with a saved card without re-entering.' },
          { icon: CreditCard, title: 'All Cards', description: 'Acceptance of payments from any bank cards and systems.' },
        ],
      },
      cta: {
        title: 'Start Training with Tensu',
        desc: 'Open the interactive student app in Telegram and get full access to all features instantly.',
        btn1: 'Open Telegram',
        btn2: 'Learn about Business'
      }
    },
    kk: {
      hero: {
        badge: 'Оқушылар үшін',
        title: 'Tensu',
        titleGradient: 'Students',
        subtitle: 'Ыңғайлы жаттығулар үшін бәрі',
        description: 'Жылдам онлайн жазылу, Apple & Google Wallet цифрлық абонементі, контактсыз QR-кіру және жаттығуларды геймификациялау — Telegram-да.',
        cta: 'Telegram-да ашу',
      },
      wallet: {
        badge: 'Технологиялар',
        title: 'Wallet цифрлық абонементі',
        subtitle: 'Абонементті смартфон әмиянына қосып, интернетсіз-ақ QR код арқылы 1 секундта клубқа кіріңіз.',
        cardName: 'Алина Серікқызы',
        cardTitle: 'TENSU FIGHT CLUB',
        cardStatus: 'ЖАЗЫЛЫМ БЕЛСЕНДІ',
        cardEnd: '17.06.2026 дейін жарамды',
        passId: 'Pass ID: #9842',
        qrText: 'QR АРҚЫЛЫ 1 СЕК КІРУ',
        features: [
          { title: '100%', desc: 'Цифрлық қолжетімділік' },
          { title: 'Оффлайн', desc: 'Интернетсіз жұмыс істейді' }
        ]
      },
      features: {
        badge: 'Мүмкіндіктер',
        title: 'Tensu Students Мүмкіндіктері',
        items: [
          {
            icon: Calendar, title: 'Ақылды кесте', description: 'Жаттығуларды сүзгілері бар интерактивті тізім немесе күнтізбе түрінде қараңыз.',
            details: ['Кестені ыңғайлы қарау', 'Клуб пен зал сүзгілері', 'Бос орындар туралы ақпарат', 'Сабақ ескертулері'],
          },
          {
            icon: CreditCard, title: 'Менің жазылымдарым', description: 'Барлық белсенді, қатырылған және мерзімі өткен жазылымдарыңызды басқарыңыз.',
            details: ['Мәртебе бақылауы', 'Қатыру күндері ақпараты', 'Активтендіру тарихы', 'Бір рет басумен ұзарту'],
          },
          {
            icon: DollarSign, title: 'Сатып алу және Төлем', description: 'Қолданба ішінде жазылымдарды карта арқылы қауіпсіз әрі жылдам төлеу.',
            details: ['Тарифтік жоспарды таңдау', 'Картаны сақтау', 'Төлем тарихы', 'Қауіпсіз транзакциялар'],
          },
          {
            icon: Pause, title: 'Жазылымды қатыру', description: 'Үзіліс қажет болған жағдайда жазылымыңызды икемді басқарыңыз.',
            details: ['Лезде қатыру', 'Авто-ұзарту', 'Күн шектеуін бақылау', 'Қатыру тарихы'],
          },
        ],
      },
      gamification: {
        badge: 'Геймификация',
        title: 'Ойындар және мотивация',
        subtitle: 'Тұрақты жаттығуларды қызықты әдетке айналдырыңыз және көбірек жетістікке жетіңіз.',
        level: 'Деңгей 12',
        xp: '850 / 1200 XP',
        streak: 'Серия: 7 күн',
        goal: 'Алдағы мақсат: 20 жаттығуға қатысу',
        premium: 'Премиум',
        badges: [
          { title: 'Тәртіп шебері', desc: '15 жаттығуға қатысу' },
          { title: 'Клуб рейтингі', desc: 'Белсенділік бойынша топ-3 кіру' },
          { title: 'Жаттығу сериясы', desc: '7 күн тұрақты сабақтар' },
        ],
      },
      security: {
        badge: 'Сенімділік',
        title: 'Абсолютті қауіпсіздік',
        subtitle: 'Сіздің құпия деректеріңіз сертификатталған жүйелермен сенімді қорғалған.',
        features: [
          { icon: Shield, title: 'PCI DSS стандарты', description: 'Банк картасы деректерін қауіпсіз шифрлау және сақтау.' },
          { icon: CheckCircle2, title: 'Жылдам төлем', description: 'Қайта енгізусіз сақталған картамен бір рет басу арқылы төлем.' },
          { icon: CreditCard, title: 'Барлық карталар', description: 'Кез келген банк карталары мен жүйелерінен төлем қабылдау.' },
        ],
      },
      cta: {
        title: 'Tensu-мен жаттығуды бастаңыз',
        desc: 'Telegram-да интерактивті оқушы қосымшасын ашып, барлық мүмкіндіктерге толық қол жеткізіңіз.',
        btn1: 'Telegram ашу',
        btn2: 'Бизнес туралы білу'
      }
    }
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-background relative selection:bg-cyan-500/30 selection:text-cyan-50">
      <Navigation />

      <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-cyan-400 shadow-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                {t.hero.badge}
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
                  {t.hero.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    {t.hero.titleGradient}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  {t.hero.subtitle}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://t.me/tensubot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end perspective-1000">
              <div className="relative w-[300px] h-[600px] transform-gpu transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-2xl rounded-[3rem] transform -translate-y-4 translate-x-4" />
                
                <div className="relative w-full h-full rounded-[3rem] border-[8px] border-[#1a1a2e] bg-[#0A0A0A] overflow-hidden shadow-2xl z-10">
                  <Image 
                    src="/screenshots/students-main.png" 
                    alt="Tensu Students App" 
                    fill 
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 800px"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-24 z-10 border-t border-white/5 bg-[#080A15]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex justify-center lg:justify-start">
              <div className="w-[320px] bg-[#0B0D17] border border-white/10 rounded-[2rem] shadow-2xl p-6 space-y-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[40px] pointer-events-none rounded-full" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-black text-xs text-white">T</div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.wallet.cardTitle}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[8px] font-bold text-white uppercase tracking-widest backdrop-blur-md">Wallet</span>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 to-[#10142A] border border-white/10 space-y-5 relative z-10 shadow-inner">
                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest">{t.wallet.cardStatus}</span>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-black text-white">{t.wallet.cardName}</h4>
                    <p className="text-[10px] text-muted-foreground">{t.wallet.cardEnd}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">{t.wallet.passId}</span>
                    <QrCode className="w-10 h-10 text-white opacity-90" />
                  </div>
                </div>

                <div className="text-center relative z-10">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t.wallet.qrText}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                {t.wallet.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.wallet.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.wallet.subtitle}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {t.wallet.features.map((feat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-colors">
                    <span className="text-cyan-400 font-black text-2xl leading-none">{feat.title}</span>
                    <p className="text-sm text-muted-foreground">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary">
              {t.features.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.features.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className="tensu-card p-8 flex flex-col group hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
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

      <section className="relative py-24 z-10 border-t border-white/5 bg-[#080A15]/50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black uppercase text-purple-400 tracking-widest">
                {t.gamification.badge}
              </span>
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {t.gamification.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.gamification.subtitle}
                </p>
              </div>
              <div className="space-y-4">
                {t.gamification.badges.map((badge, idx) => (
                  <div key={idx} className="tensu-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h6 className="text-sm font-bold text-white">{badge.title}</h6>
                      <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-[340px] bg-[#0B0D17] border border-purple-500/20 rounded-[2rem] shadow-2xl p-6 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-[40px] pointer-events-none rounded-full" />
                
                <div className="flex items-center gap-4 border-b border-white/10 pb-5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-base font-black text-purple-400 shadow-inner">A</div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Алина С.</h5>
                    <span className="text-[10px] font-black uppercase text-purple-400 tracking-widest">{t.gamification.premium}</span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <span>{t.gamification.level}</span>
                    <span className="text-white">{t.gamification.xp}</span>
                  </div>
                  
                  <div className="w-full h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 relative">
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">{t.gamification.streak}</span>
                    <Zap className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest block">{t.gamification.goal}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-24 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase text-emerald-400 tracking-widest">
              {t.security.badge}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.security.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.security.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.security.features.map((feature, index) => (
              <div
                key={index}
                className="tensu-card p-8 space-y-5 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 z-10 border-t border-white/5 bg-gradient-to-b from-[#080A15] to-[#0A0D1A] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/tensubot"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              {t.cta.btn1}
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/business"
              className="h-14 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
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
