"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function PricingPage() {
  const { language } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'club' | 'student'>('club');

  const translations = {
    ru: {
      title: 'Прозрачные',
      titleGradient: 'Тарифы',
      subtitle: 'Выберите подходящую модель оплаты для масштабирования вашего клуба',
      perClub: 'Тариф за Клуб',
      perStudent: 'Тариф за Ученика',
      popularBadge: 'Популярный',
      contact: 'Связаться с нами',
      demo: 'Запросить доступ',
      plans: [
        {
          name: 'Starter Pass',
          priceClub: '₸29,990',
          priceStudent: '₸490',
          period: '/месяц',
          desc: 'Идеально подходит для небольших и развивающихся студий.',
          features: [
            '1 спортивный клуб',
            'До 100 активных учеников',
            'Приложения Business и Students',
            'Базовый учет расписания',
            'Стандартная поддержка в Telegram',
          ],
          popular: false,
        },
        {
          name: 'Professional Pass',
          priceClub: '₸39,990',
          priceStudent: '₸390',
          period: '/месяц',
          desc: 'Для профессиональных клубов с высокой активностью.',
          features: [
            'До 3 спортивных клубов',
            'До 500 активных учеников',
            'Расширенный CRM-дашборд',
            'Кастомные роли и права доступа',
            'Приоритетная поддержка 24/7',
          ],
          popular: true,
        },
        {
          name: 'Enterprise Pass',
          priceClub: 'Индивидуально',
          priceStudent: 'Индивидуально',
          period: '',
          desc: 'Для крупных сетей клубов и франшиз.',
          features: [
            'Безлимитное количество клубов',
            'Неограниченно активных учеников',
            'Полная CRM-аналитика и экспорт',
            'Выделенный персональный менеджер',
            'Индивидуальный SLA и приоритет',
          ],
          popular: false,
        },
      ]
    },
    en: {
      title: 'Transparent',
      titleGradient: 'Pricing',
      subtitle: 'Choose the optimal billing plan to scale your sports business',
      perClub: 'Billing per Club',
      perStudent: 'Billing per Student',
      popularBadge: 'Popular',
      contact: 'Contact Us',
      demo: 'Request Access',
      plans: [
        {
          name: 'Starter Pass',
          priceClub: '₸29,990',
          priceStudent: '₸490',
          period: '/month',
          desc: 'Perfect for small and growing sports studios.',
          features: [
            '1 sports club',
            'Up to 100 active students',
            'Business and Students apps',
            'Basic schedule tracking',
            'Standard Telegram support',
          ],
          popular: false,
        },
        {
          name: 'Professional Pass',
          priceClub: '₸39,990',
          priceStudent: '₸390',
          period: '/month',
          desc: 'For professional clubs with high activity levels.',
          features: [
            'Up to 3 sports clubs',
            'Up to 500 active students',
            'Advanced CRM dashboard',
            'Granular custom roles',
            'Priority 24/7 support',
          ],
          popular: true,
        },
        {
          name: 'Enterprise Pass',
          priceClub: 'Custom',
          priceStudent: 'Custom',
          period: '',
          desc: 'For large sports networks and franchises.',
          features: [
            'Unlimited sports clubs',
            'Unlimited active students',
            'Full CRM analytics',
            'Dedicated personal manager',
            'SLA guarantees',
          ],
          popular: false,
        },
      ]
    },
    kk: {
      title: 'Ашық',
      titleGradient: 'Тарифтер',
      subtitle: 'Клубыңызды масштабтау үшін қолайлы төлем моделін таңдаңыз',
      perClub: 'Клуб үшін',
      perStudent: 'Студент үшін',
      popularBadge: 'Танымал',
      contact: 'Бізбен байланысу',
      demo: 'Қолжетімділікті сұрау',
      plans: [
        {
          name: 'Starter Pass',
          priceClub: '₸29,990',
          priceStudent: '₸490',
          period: '/ай',
          desc: 'Шағын және дамып келе жатқан студиялар үшін қолайлы.',
          features: [
            '1 спорт клубы',
            '100 белсенді оқушыға дейін',
            'Business және Students қосымшалары',
            'Негізгі кестені есепке алу',
            'Telegram-да стандартты қолдау',
          ],
          popular: false,
        },
        {
          name: 'Professional Pass',
          priceClub: '₸39,990',
          priceStudent: '₸390',
          period: '/ай',
          desc: 'Белсенділігі жоғары кәсіби клубтар үшін.',
          features: [
            '3 спорт клубына дейін',
            '500 белсенді оқушыға дейін',
            'Кеңейтілген CRM-дашборд',
            'Жеке рөлдер мен рұқсат деңгейлері',
            'Басымдықты қолдау қызметі 24/7',
          ],
          popular: true,
        },
        {
          name: 'Enterprise Pass',
          priceClub: 'Жеке есеп',
          priceStudent: 'Жеке есеп',
          period: '',
          desc: 'Ірі клубтар желісі мен франшизалар үшін.',
          features: [
            'Шектеусіз спорт клубтары',
            'Шектеусіз белсенді оқушылар',
            'CRM толық аналитикасы және экспорт',
            'Жеке жетекші менеджер',
            'Жеке SLA және жоғары басымдық',
          ],
          popular: false,
        },
      ]
    }
  };

  const t = translations[language] || translations.ru;

  return (
    <main className="min-h-screen bg-white relative selection:bg-blue-100 selection:text-blue-800">
      <Navigation />

      {/* Hero background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-br from-blue-50/80 to-violet-50/80 blur-[120px] rounded-full pointer-events-none" />

      <section className="pt-32 lg:pt-48 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
              {t.title} <br/>
              <span className="text-gradient-blue-purple">{t.titleGradient}</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            {/* Billing cycle toggle */}
            <div className="inline-flex p-1.5 bg-gray-50 border border-gray-200 rounded-full shadow-sm mt-6 relative">
              <button
                onClick={() => setBillingCycle('club')}
                className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 w-[180px] sm:w-[200px] ${
                  billingCycle === 'club' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.perClub}
              </button>
              <button
                onClick={() => setBillingCycle('student')}
                className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 w-[180px] sm:w-[200px] ${
                  billingCycle === 'student' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.perStudent}
              </button>
              
              {/* Animated slider background */}
              <div 
                className="absolute top-1.5 bottom-1.5 w-[180px] sm:w-[200px] bg-blue-600 rounded-full transition-transform duration-300 ease-in-out shadow-md shadow-blue-200"
                style={{ transform: `translateX(${billingCycle === 'club' ? '0' : '100%'})` }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {t.plans.map((plan, index) => {
              const isPopular = plan.popular;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col justify-between rounded-[2.5rem] p-8 lg:p-10 transition-all duration-300 cursor-default ${
                    isPopular
                      ? 'bg-white border-2 border-blue-500 shadow-xl shadow-blue-100/50 transform lg:-translate-y-4'
                      : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-2'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-[2.5rem] pointer-events-none" />
                  )}

                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-md shadow-blue-200">
                        <Sparkles className="w-3.5 h-3.5" />
                        {t.popularBadge}
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 space-y-8 flex-1">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 tracking-tight">{plan.name}</h3>
                      <p className="text-sm text-gray-500 mt-3 leading-relaxed">{plan.desc}</p>
                    </div>

                    <div className="border-y border-gray-100 py-6 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-gray-900">
                        {billingCycle === 'club' ? plan.priceClub : plan.priceStudent}
                      </span>
                      {plan.period && (
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wide ml-1">{plan.period}</span>
                      )}
                    </div>

                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 ${isPopular ? 'text-blue-500' : 'text-gray-300'}`} />
                          <span className="text-sm font-medium text-gray-600 leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 mt-10">
                    <Link
                      href="/contact"
                      className={`w-full h-14 rounded-2xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        isPopular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 hover:-translate-y-0.5'
                          : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {plan.priceClub === 'Индивидуально' || plan.priceClub === 'Custom' || plan.priceClub === 'Жеке есеп' ? t.contact : t.demo}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
