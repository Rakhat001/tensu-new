"use client";

import { useState } from "react";
import { QrCode, Calendar, CreditCard, Flame, Trophy, MessageCircle, Users, BarChart3, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState<"students" | "staff">("students");
  const { language } = useLanguage();

  const translations = {
    ru: {
      tabs: {
        students: "Для Учеников",
        staff: "Для Управляющих"
      },
      studentsTitle: { text: "Цифровой опыт ученика", accent: "нового поколения" },
      staffTitle: { text: "Мощные инструменты", accent: "автоматизации клуба" },
      studentsFeatures: [
        { icon: QrCode, title: 'QR-вход', description: 'Быстрый доступ на тренировки в одно сканирование. Без очередей, без бумаг.', color: 'var(--glow-primary)' },
        { icon: Calendar, title: 'Удобное расписание', description: 'Просматривайте тренировки в виде списка или календаря с умными фильтрами.', color: 'var(--glow-secondary)' },
        { icon: CreditCard, title: 'Покупка абонемента', description: 'Безопасная оплата картой в один клик напрямую в Telegram.', color: 'var(--glow-primary)' },
        { icon: Flame, title: 'Серии и достижения', description: 'Геймификация: серии, уровни, достижения и рейтинг клуба.', color: 'rgba(249, 115, 22, 0.4)' },
        { icon: Trophy, title: 'Мой прогресс', description: 'Отслеживайте каждую тренировку, серии занятий и достижения.', color: 'var(--glow-secondary)' },
        { icon: MessageCircle, title: 'Индивидуальные цены', description: 'Возможность предложить свою цену при наличии веских причин.', color: 'var(--glow-primary)' },
      ],
      staffFeatures: [
        { icon: Users, title: 'Контроль студентов', description: 'Полная база с посещаемостью, заметками и статусами абонементов.', color: 'var(--glow-primary)' },
        { icon: BarChart3, title: 'CRM и выручка', description: 'Динамика оплат, очередь продаж и аналитика за любой период.', color: 'var(--glow-secondary)' },
        { icon: Calendar, title: 'Умное расписание', description: 'Планируйте занятия, привязывайте тренеров, отслеживайте заполняемость.', color: 'var(--glow-primary)' },
        { icon: CreditCard, title: 'Управление тарифами', description: 'Гибкие дни заморозки, скидки и стоимость в любой валюте.', color: 'var(--glow-secondary)' },
        { icon: Users, title: 'Тренеры и зарплата', description: 'Калькулятор зарплаты тренера с учётом ставки, занятий и % от выручки.', color: 'rgba(249, 115, 22, 0.4)' },
        { icon: CheckCircle, title: 'Роли и сотрудники', description: 'Разграничение прав: владелец, администратор, тренер.', color: 'var(--glow-primary)' },
      ]
    },
    en: {
      tabs: {
        students: "For Students",
        staff: "For Managers"
      },
      studentsTitle: { text: "Next Generation", accent: "Digital Student Experience" },
      staffTitle: { text: "Powerful Tools for", accent: "Club Automation" },
      studentsFeatures: [
        { icon: QrCode, title: 'QR Entry', description: 'Fast access to workouts with one scan. No queues, no paper.', color: 'var(--glow-primary)' },
        { icon: Calendar, title: 'Convenient Schedule', description: 'View workouts as a list or calendar with smart filters.', color: 'var(--glow-secondary)' },
        { icon: CreditCard, title: 'Buy Membership', description: 'Secure card payment in one click directly in Telegram.', color: 'var(--glow-primary)' },
        { icon: Flame, title: 'Streaks & Achievements', description: 'Gamification: streaks, levels, achievements and club ranking.', color: 'rgba(249, 115, 22, 0.4)' },
        { icon: Trophy, title: 'My Progress', description: 'Track every workout, activity streaks, and achievements.', color: 'var(--glow-secondary)' },
        { icon: MessageCircle, title: 'Custom Prices', description: 'Ability to propose your own price with valid reasons.', color: 'var(--glow-primary)' },
      ],
      staffFeatures: [
        { icon: Users, title: 'Student Control', description: 'Complete database with attendance, notes, and membership statuses.', color: 'var(--glow-primary)' },
        { icon: BarChart3, title: 'CRM & Revenue', description: 'Payment dynamics, sales pipeline, and analytics for any period.', color: 'var(--glow-secondary)' },
        { icon: Calendar, title: 'Smart Schedule', description: 'Plan classes, assign trainers, and track occupancy.', color: 'var(--glow-primary)' },
        { icon: CreditCard, title: 'Tariff Management', description: 'Flexible freeze days, discounts, and pricing in any currency.', color: 'var(--glow-secondary)' },
        { icon: Users, title: 'Trainers & Payroll', description: 'Trainer salary calculator based on rate, classes, and % of revenue.', color: 'rgba(249, 115, 22, 0.4)' },
        { icon: CheckCircle, title: 'Roles & Staff', description: 'Access control: owner, administrator, trainer.', color: 'var(--glow-primary)' },
      ]
    },
    kk: {
      tabs: {
        students: "Оқушылар үшін",
        staff: "Басқарушылар үшін"
      },
      studentsTitle: { text: "Жаңа буынның", accent: "сандық оқушы тәжірибесі" },
      staffTitle: { text: "Клубты автоматтандыруға арналған", accent: "қуатты құралдар" },
      studentsFeatures: [
        { icon: QrCode, title: 'QR-кіру', description: 'Бір рет сканерлеу арқылы жаттығуларға жылдам кіру. Кезексіз, қағазсыз.', color: 'var(--glow-primary)' },
        { icon: Calendar, title: 'Ыңғайлы кесте', description: 'Ақылды сүзгілері бар тізім немесе күнтізбе түрінде жаттығуларды қараңыз.', color: 'var(--glow-secondary)' },
        { icon: CreditCard, title: 'Жазылым сатып алу', description: 'Тікелей Telegram-да бір рет басу арқылы қауіпсіз картамен төлеу.', color: 'var(--glow-primary)' },
        { icon: Flame, title: 'Сериялар мен жетістіктер', description: 'Геймификация: сериялар, деңгейлер, жетістіктер және клуб рейтингі.', color: 'rgba(249, 115, 22, 0.4)' },
        { icon: Trophy, title: 'Менің прогресім', description: 'Әр жаттығуды, сабақтар сериясын және жетістіктерді қадағалаңыз.', color: 'var(--glow-secondary)' },
        { icon: MessageCircle, title: 'Жеке бағалар', description: 'Дәлелді себептермен өз бағаңызды ұсыну мүмкіндігі.', color: 'var(--glow-primary)' },
      ],
      staffFeatures: [
        { icon: Users, title: 'Студенттерді бақылау', description: 'Қатысу, ескертпелер және жазылым күйлері бар толық база.', color: 'var(--glow-primary)' },
        { icon: BarChart3, title: 'CRM және кіріс', description: 'Кез келген кезеңдегі төлем динамикасы, сату кезегі және аналитика.', color: 'var(--glow-secondary)' },
        { icon: Calendar, title: 'Ақылды кесте', description: 'Сабақтарды жоспарлаңыз, жаттықтырушыларды бекітіңіз, толымдылықты бақылаңыз.', color: 'var(--glow-primary)' },
        { icon: CreditCard, title: 'Тарифтерді басқару', description: 'Кез келген валютадағы икемді мұздату күндері, жеңілдіктер және баға.', color: 'var(--glow-secondary)' },
        { icon: Users, title: 'Жаттықтырушылар және жалақы', description: 'Ставка, сабақтар және түсімнің % ескере отырып жалақы калькуляторы.', color: 'rgba(249, 115, 22, 0.4)' },
        { icon: CheckCircle, title: 'Рөлдер және қызметкерлер', description: 'Құқықтарды бөлу: иесі, әкімші, жаттықтырушы.', color: 'var(--glow-primary)' },
      ]
    }
  };

  const t = translations[language];
  const activeFeatures = activeTab === "students" ? t.studentsFeatures : t.staffFeatures;
  const activeTitle = activeTab === "students" ? t.studentsTitle : t.staffTitle;

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex flex-col items-center mb-14 gap-4">
        <div className="flex bg-card/60 backdrop-blur-xl rounded-full border border-white/5 p-1.5 shadow-sm relative z-10">
          <button
            onClick={() => setActiveTab("students")}
            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              activeTab === "students"
                ? "bg-gradient-to-r from-primary to-violet-600 text-white shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            {t.tabs.students}
          </button>
          <button
            onClick={() => setActiveTab("staff")}
            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              activeTab === "staff"
                ? "bg-gradient-to-r from-primary to-violet-600 text-white shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            {t.tabs.staff}
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="space-y-12 transition-all duration-500 ease-in-out relative z-10">
        <div className="text-center animate-slide-up">
          <h3 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">
            {activeTitle.text}{' '}
            <span className="text-gradient-blue-purple">{activeTitle.accent}</span>
          </h3>
        </div>

        {/* Bento Grid 3x2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Subtle background glow based on active tab */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${
              activeTab === "students" ? "bg-primary/5" : "bg-violet-600/5"
            }`}
          />
          
          {activeFeatures.map((feature, i) => (
            <div 
              key={`${activeTab}-${i}`} 
              className="tensu-card p-6 lg:p-8 space-y-5 group hover:-translate-y-1 transition-transform relative z-10"
              style={{ animation: `slide-up 0.4s ease-out ${i * 0.1}s both` }}
            >
              <div
                className="w-14 h-14 rounded-[1.25rem] flex items-center justify-center border border-white/10 bg-white/5 transition-all group-hover:scale-110 duration-300"
                style={{ boxShadow: `0 8px 30px ${feature.color}` }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-base font-black text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
