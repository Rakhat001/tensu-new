"use client";

import { useState } from "react";
import { QrCode, Calendar, CreditCard, Flame, Trophy, MessageCircle, Users, BarChart3, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState<"students" | "staff">("students");
  const { language } = useLanguage();

  const translations = {
    ru: {
      tabs: { students: "Ученикам", staff: "Бизнесу" },
      studentsTitle: { text: "Цифровой опыт ученика", accent: "нового поколения" },
      staffTitle: { text: "Мощные инструменты", accent: "автоматизации клуба" },
      studentsSubtitle: "Тренировки, абонементы и оплата — всё в одном приложении. Удобно, быстро и всегда под рукой.",
      staffSubtitle: "Управляйте расписанием, студентами, тренерами и выручкой в одном месте.",
      studentsFeatures: [
        { icon: QrCode, title: 'QR-вход', description: 'Быстрый доступ на тренировки в одно сканирование. Без очередей, без бумаг.', color: 'blue' },
        { icon: Calendar, title: 'Удобное расписание', description: 'Просматривайте тренировки в виде списка или календаря с умными фильтрами.', color: 'violet' },
        { icon: CreditCard, title: 'Покупка абонемента', description: 'Безопасная оплата картой в один клик напрямую в Telegram.', color: 'blue' },
        { icon: Flame, title: 'Серии и достижения', description: 'Геймификация: серии, уровни, достижения и рейтинг клуба.', color: 'violet' },
        { icon: Trophy, title: 'Мой прогресс', description: 'Отслеживайте каждую тренировку, серии занятий и достижения.', color: 'violet' },
        { icon: MessageCircle, title: 'Индивидуальные цены', description: 'Возможность предложить свою цену при наличии веских причин.', color: 'blue' },
      ],
      staffFeatures: [
        { icon: Users, title: 'Контроль студентов', description: 'Полная база с посещаемостью, заметками и статусами абонементов.', color: 'blue' },
        { icon: BarChart3, title: 'CRM и выручка', description: 'Динамика оплат, очередь продаж и аналитика за любой период.', color: 'violet' },
        { icon: Calendar, title: 'Умное расписание', description: 'Планируйте занятия, привязывайте тренеров, отслеживайте заполняемость.', color: 'blue' },
        { icon: CreditCard, title: 'Управление тарифами', description: 'Гибкие дни заморозки, скидки и стоимость в любой валюте.', color: 'violet' },
        { icon: Users, title: 'Тренеры и зарплата', description: 'Калькулятор зарплаты тренера с учётом ставки, занятий и % от выручки.', color: 'blue' },
        { icon: CheckCircle, title: 'Роли и сотрудники', description: 'Разграничение прав: владелец, администратор, тренер.', color: 'blue' },
      ]
    },
    en: {
      tabs: { students: "For Students", staff: "For Managers" },
      studentsTitle: { text: "Next Generation", accent: "Digital Student Experience" },
      staffTitle: { text: "Powerful Tools for", accent: "Club Automation" },
      studentsSubtitle: "Workouts, memberships and payments — all in one app. Convenient, fast and always at hand.",
      staffSubtitle: "Manage schedule, students, trainers and revenue in one place.",
      studentsFeatures: [
        { icon: QrCode, title: 'QR Entry', description: 'Fast access to workouts with one scan. No queues, no paper.', color: 'blue' },
        { icon: Calendar, title: 'Convenient Schedule', description: 'View workouts as a list or calendar with smart filters.', color: 'violet' },
        { icon: CreditCard, title: 'Buy Membership', description: 'Secure card payment in one click directly in Telegram.', color: 'blue' },
        { icon: Flame, title: 'Streaks & Achievements', description: 'Gamification: streaks, levels, achievements and club ranking.', color: 'violet' },
        { icon: Trophy, title: 'My Progress', description: 'Track every workout, activity streaks, and achievements.', color: 'violet' },
        { icon: MessageCircle, title: 'Custom Prices', description: 'Ability to propose your own price with valid reasons.', color: 'blue' },
      ],
      staffFeatures: [
        { icon: Users, title: 'Student Control', description: 'Complete database with attendance, notes, and membership statuses.', color: 'blue' },
        { icon: BarChart3, title: 'CRM & Revenue', description: 'Payment dynamics, sales pipeline, and analytics for any period.', color: 'violet' },
        { icon: Calendar, title: 'Smart Schedule', description: 'Plan classes, assign trainers, and track occupancy.', color: 'blue' },
        { icon: CreditCard, title: 'Tariff Management', description: 'Flexible freeze days, discounts, and pricing in any currency.', color: 'violet' },
        { icon: Users, title: 'Trainers & Payroll', description: 'Trainer salary calculator based on rate, classes, and % of revenue.', color: 'blue' },
        { icon: CheckCircle, title: 'Roles & Staff', description: 'Access control: owner, administrator, trainer.', color: 'blue' },
      ]
    },
    kk: {
      tabs: { students: "Оқушылар үшін", staff: "Басқарушылар үшін" },
      studentsTitle: { text: "Жаңа буынның", accent: "сандық оқушы тәжірибесі" },
      staffTitle: { text: "Клубты автоматтандыруға арналған", accent: "қуатты құралдар" },
      studentsSubtitle: "Жаттығулар, жазылымдар және төлем — барлығы бір қосымшада.",
      staffSubtitle: "Кесте, студенттер, жаттықтырушылар және кірісті бір жерде басқарыңыз.",
      studentsFeatures: [
        { icon: QrCode, title: 'QR-кіру', description: 'Бір рет сканерлеу арқылы жаттығуларға жылдам кіру. Кезексіз, қағазсыз.', color: 'blue' },
        { icon: Calendar, title: 'Ыңғайлы кесте', description: 'Ақылды сүзгілері бар тізім немесе күнтізбе түрінде жаттығуларды қараңыз.', color: 'violet' },
        { icon: CreditCard, title: 'Жазылым сатып алу', description: 'Тікелей Telegram-да бір рет басу арқылы қауіпсіз картамен төлеу.', color: 'blue' },
        { icon: Flame, title: 'Сериялар мен жетістіктер', description: 'Геймификация: сериялар, деңгейлер, жетістіктер және клуб рейтингі.', color: 'violet' },
        { icon: Trophy, title: 'Менің прогресім', description: 'Әр жаттығуды, сабақтар сериясын және жетістіктерді қадағалаңыз.', color: 'violet' },
        { icon: MessageCircle, title: 'Жеке бағалар', description: 'Дәлелді себептермен өз бағаңызды ұсыну мүмкіндігі.', color: 'blue' },
      ],
      staffFeatures: [
        { icon: Users, title: 'Студенттерді бақылау', description: 'Қатысу, ескертпелер және жазылым күйлері бар толық база.', color: 'blue' },
        { icon: BarChart3, title: 'CRM және кіріс', description: 'Кез келген кезеңдегі төлем динамикасы, сату кезегі және аналитика.', color: 'violet' },
        { icon: Calendar, title: 'Ақылды кесте', description: 'Сабақтарды жоспарлаңыз, жаттықтырушыларды бекітіңіз, толымдылықты бақылаңыз.', color: 'blue' },
        { icon: CreditCard, title: 'Тарифтерді басқару', description: 'Кез келген валютадағы икемді мұздату күндері, жеңілдіктер және баға.', color: 'violet' },
        { icon: Users, title: 'Жаттықтырушылар және жалақы', description: 'Ставка, сабақтар және түсімнің % ескере отырып жалақы калькуляторы.', color: 'blue' },
        { icon: CheckCircle, title: 'Рөлдер және қызметкерлер', description: 'Құқықтарды бөлу: иесі, әкімші, жаттықтырушы.', color: 'blue' },
      ]
    }
  };

  const t = translations[language];
  const activeFeatures = activeTab === "students" ? t.studentsFeatures : t.staffFeatures;
  const activeTitle = activeTab === "students" ? t.studentsTitle : t.staffTitle;
  const activeSubtitle = activeTab === "students" ? t.studentsSubtitle : t.staffSubtitle;

  const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
    blue: {
      bg: "rgba(37,99,235,0.07)",
      border: "rgba(37,99,235,0.14)",
      icon: "text-blue-600",
    },
    violet: {
      bg: "rgba(124,58,237,0.07)",
      border: "rgba(124,58,237,0.14)",
      icon: "text-violet-600",
    },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <div className="tensu-badge-blue inline-flex justify-center">
          Возможности
        </div>
        <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">
          {activeTitle.text}{" "}
          <span className="text-gradient-blue-purple">{activeTitle.accent}</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">{activeSubtitle}</p>
      </div>

      {/* Toggle — styled like reference screenshot */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-gray-100 border border-gray-200 rounded-full p-1.5 shadow-inner relative">
          {/* Animated background pill */}
          <div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-md border border-gray-200 transition-all duration-300"
            style={{
              left: activeTab === "students" ? "6px" : "calc(50% + 3px)",
              width: "calc(50% - 9px)",
            }}
          />
          <button
            onClick={() => setActiveTab("students")}
            className={`relative z-10 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "students" ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.tabs.students}
          </button>
          <button
            onClick={() => setActiveTab("staff")}
            className={`relative z-10 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "staff" ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.tabs.staff}
          </button>
        </div>
      </div>

      {/* Feature grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeFeatures.map((feature, i) => {
          const colors = colorMap[feature.color] || colorMap.blue;
          return (
            <div
              key={`${activeTab}-${i}`}
              className="tensu-card p-6 lg:p-7 space-y-5 group hover:-translate-y-1.5 cursor-default"
              style={{ animation: `slide-up 0.45s ease-out ${i * 0.08}s both` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all group-hover:scale-110 duration-300"
                style={{
                  background: colors.bg,
                  borderColor: colors.border,
                  boxShadow: `0 4px 16px ${colors.bg}`,
                }}
              >
                <feature.icon className={`w-6 h-6 ${colors.icon}`} />
              </div>

              {/* Text */}
              <div>
                <h4 className={`text-base font-bold text-gray-900 mb-2 group-hover:${colors.icon} transition-colors`}>
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
        >
          Открыть в Telegram →
        </a>
      </div>
    </div>
  );
}
