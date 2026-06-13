"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Calendar, Users, CreditCard, BarChart3, Shield, Zap, Clock, 
  TrendingUp, MessageCircle, Settings, Bell, DollarSign, Target, Sparkles
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FeaturesPage() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'students' | 'staff'>('all');

  const translations = {
    ru: {
      title: 'Все возможности',
      subtitle: 'Полный список инструментов для автоматизации вашего бизнеса и удобства ваших учеников.',
      badge: 'Функционал платформы',
      empty: 'Ничего не найдено',
      filters: { all: 'Все', students: 'Для учеников', staff: 'Для бизнеса' },
      types: { students: 'Ученики', staff: 'Бизнес', both: 'Общее' },
      features: [
        { icon: Calendar, title: 'Расписание', description: 'Просмотр в виде списка и календаря с фильтрами', type: 'students' },
        { icon: CreditCard, title: 'Обработка платежей', description: 'Безопасная оплата картой и управление', type: 'students' },
        { icon: Users, title: 'Мои абонементы', description: 'Активные, замороженные и истёкшие абонементы', type: 'students' },
        { icon: Clock, title: 'История посещений', description: 'Отслеживание всех посещённых тренировок', type: 'students' },
        { icon: TrendingUp, title: 'Быстрая запись', description: 'Запись на занятия одним нажатием', type: 'students' },
        { icon: MessageCircle, title: 'Индивидуальные цены', description: 'Запрос специальных цен', type: 'students' },
        { icon: Users, title: 'Управление студентами', description: 'Полная база данных студентов', type: 'staff' },
        { icon: BarChart3, title: 'Запросы цен', description: 'Обработка запросов индивидуальных цен', type: 'staff' },
        { icon: Settings, title: 'Управление персоналом', description: 'Управление командой и ролями', type: 'staff' },
        { icon: Target, title: 'Управление секциями', description: 'Создание секций и групп', type: 'staff' },
        { icon: DollarSign, title: 'Управление тарифами', description: 'Создание и редактирование тарифных планов', type: 'staff' },
        { icon: Calendar, title: 'Создание тренировок', description: 'Гибкое управление расписанием', type: 'staff' },
        { icon: Bell, title: 'Уведомления', description: 'Будьте в курсе всех событий', type: 'staff' },
        { icon: BarChart3, title: 'Аналитика', description: 'Анализ данных для принятия решений', type: 'staff' },
        { icon: Shield, title: 'Безопасные платежи', description: 'Соответствие стандарту PCI DSS', type: 'both' },
        { icon: Zap, title: 'Быстро и просто', description: 'Не требует установки приложений', type: 'both' },
      ]
    },
    en: {
      title: 'All Features',
      subtitle: 'Complete list of tools to automate your business and enhance student experience.',
      badge: 'Platform Capabilities',
      empty: 'No features found',
      filters: { all: 'All', students: 'For Students', staff: 'For Business' },
      types: { students: 'Students', staff: 'Business', both: 'Both' },
      features: [
        { icon: Calendar, title: 'Schedule View', description: 'List and calendar views with filters', type: 'students' },
        { icon: CreditCard, title: 'Payment Processing', description: 'Secure card payments and management', type: 'students' },
        { icon: Users, title: 'My Memberships', description: 'Active, frozen, expired memberships', type: 'students' },
        { icon: Clock, title: 'Visit History', description: 'Track all attended sessions', type: 'students' },
        { icon: TrendingUp, title: 'Quick Booking', description: 'Book classes with one tap', type: 'students' },
        { icon: MessageCircle, title: 'Custom Pricing', description: 'Request special prices', type: 'students' },
        { icon: Users, title: 'Student Management', description: 'Complete student database', type: 'staff' },
        { icon: BarChart3, title: 'Price Requests', description: 'Process custom price requests', type: 'staff' },
        { icon: Settings, title: 'Staff Management', description: 'Manage team and roles', type: 'staff' },
        { icon: Target, title: 'Section Management', description: 'Create sections and groups', type: 'staff' },
        { icon: DollarSign, title: 'Pricing Management', description: 'Create and edit pricing plans', type: 'staff' },
        { icon: Calendar, title: 'Create Sessions', description: 'Flexible schedule management', type: 'staff' },
        { icon: Bell, title: 'Notifications', description: 'Stay informed of all events', type: 'staff' },
        { icon: BarChart3, title: 'Analytics', description: 'Data-driven insights', type: 'staff' },
        { icon: Shield, title: 'Secure Payments', description: 'PCI DSS compliance', type: 'both' },
        { icon: Zap, title: 'Fast & Easy', description: 'No app installation required', type: 'both' },
      ]
    },
    kk: {
      title: 'Барлық мүмкіндіктер',
      subtitle: 'Бизнесіңізді автоматтандыруға және оқушыларға ыңғайлы болуға арналған құралдардың толық тізімі.',
      badge: 'Платформа мүмкіндіктері',
      empty: 'Ештеңе табылмады',
      filters: { all: 'Барлығы', students: 'Оқушылар үшін', staff: 'Бизнес үшін' },
      types: { students: 'Оқушылар', staff: 'Бизнес', both: 'Жалпы' },
      features: [
        { icon: Calendar, title: 'Кесте', description: 'Тізім және күнтізбе түрінде сүзгілермен қарау', type: 'students' },
        { icon: CreditCard, title: 'Төлемдерді өңдеу', description: 'Картамен қауіпсіз төлем және басқару', type: 'students' },
        { icon: Users, title: 'Менің жазылымдарым', description: 'Белсенді, мұздатылған және аяқталған жазылымдар', type: 'students' },
        { icon: Clock, title: 'Келу тарихы', description: 'Барлық қатысқан сабақтарды қадағалау', type: 'students' },
        { icon: TrendingUp, title: 'Жылдам жазылу', description: 'Бір басумен сабаққа жазылу', type: 'students' },
        { icon: MessageCircle, title: 'Жеке бағалар', description: 'Арнайы бағаларды сұрау', type: 'students' },
        { icon: Users, title: 'Студенттерді басқару', description: 'Студенттердің толық дерекқоры', type: 'staff' },
        { icon: BarChart3, title: 'Баға сұраулары', description: 'Жеке баға сұрауларын өңдеу', type: 'staff' },
        { icon: Settings, title: 'Қызметкерлерді басқару', description: 'Команда мен рөлдерді басқару', type: 'staff' },
        { icon: Target, title: 'Секцияларды басқару', description: 'Секциялар мен топтарды жасау', type: 'staff' },
        { icon: DollarSign, title: 'Тарифтерді басқару', description: 'Тарифтік жоспарларды жасау және өңдеу', type: 'staff' },
        { icon: Calendar, title: 'Жаттығулар жасау', description: 'Икемді кесте басқару', type: 'staff' },
        { icon: Bell, title: 'Хабарландырулар', description: 'Барлық оқиғалардан хабардар болыңыз', type: 'staff' },
        { icon: BarChart3, title: 'Аналитика', description: 'Шешім қабылдау үшін деректерді талдау', type: 'staff' },
        { icon: Shield, title: 'Қауіпсіз төлемдер', description: 'PCI DSS стандартына сәйкестік', type: 'both' },
        { icon: Zap, title: 'Жылдам және оңай', description: 'Қолданба орнатуды қажет етпейді', type: 'both' },
      ]
    }
  };

  const t = translations[language] || translations.ru;
  const filteredFeatures = t.features.filter((f) => filter === 'all' || f.type === filter || f.type === 'both');

  return (
    <main className="min-h-screen bg-white relative selection:bg-blue-100 selection:text-blue-800">
      <Navigation />

      {/* Hero background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-br from-blue-50/80 to-violet-50/80 blur-[120px] rounded-full pointer-events-none" />

      <section className="pt-32 lg:pt-48 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="tensu-badge-blue inline-flex items-center gap-2 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              {t.badge}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
              {t.title} <br/>
              <span className="text-gradient-blue-purple">Tensu</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center p-1.5 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === 'all'
                    ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {t.filters.all}
              </button>
              <button
                onClick={() => setFilter('students')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === 'students'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t.filters.students}
              </button>
              <button
                onClick={() => setFilter('staff')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === 'staff'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                    : 'text-gray-500 hover:text-violet-600 hover:bg-violet-50'
                }`}
              >
                {t.filters.staff}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredFeatures.map((feature, index) => {
              const isStudents = feature.type === 'students';
              const isStaff = feature.type === 'staff';
              
              return (
                <div 
                  key={`${feature.title}-${index}`}
                  className="tensu-card p-6 sm:p-8 flex flex-col group transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-110 ${
                      isStudents ? 'bg-blue-50 border-blue-100 text-blue-600' : 
                      isStaff ? 'bg-violet-50 border-violet-100 text-violet-600' : 
                      'bg-gray-50 border-gray-100 text-gray-600'
                    }`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    
                    <div className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest border ${
                      isStudents ? 'bg-blue-50 border-blue-100 text-blue-600' : 
                      isStaff ? 'bg-violet-50 border-violet-100 text-violet-600' : 
                      'bg-gray-50 border-gray-200 text-gray-500'
                    }`}>
                      {isStudents ? t.types.students : isStaff ? t.types.staff : t.types.both}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 tracking-tight transition-colors ${
                    isStudents ? 'text-gray-900 group-hover:text-blue-600' :
                    isStaff ? 'text-gray-900 group-hover:text-violet-600' :
                    'text-gray-900 group-hover:text-gray-700'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              {t.empty}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
