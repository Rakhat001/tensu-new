"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DesktopMockup } from "@/components/DesktopMockup";
import { 
  Users, Calendar, BarChart3, Settings, Shield, 
  Smartphone, ArrowRight, CheckCircle2, TrendingUp, Sparkles 
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function BusinessPage() {
  const { language } = useLanguage();

  const translations = {
    ru: {
      hero: {
        badge: 'Для бизнеса',
        title: 'Tensu',
        titleGradient: 'Business',
        subtitle: 'Умное управление вашим спортивным клубом',
        description: 'Комплексная CRM-платформа, которая автоматизирует рутину, повышает лояльность клиентов и помогает вашему бизнесу расти быстрее.',
        cta: 'Оставить заявку',
      },
      features: {
        badge: 'Функционал',
        title: 'Всё необходимое в одном месте',
        items: [
          {
            icon: Users, title: 'Управление клиентами', description: 'Единая база данных всех учеников. Отслеживайте посещения, статусы абонементов и историю платежей в несколько кликов.',
          },
          {
            icon: Calendar, title: 'Умное расписание', description: 'Гибкое создание тренировок, замен тренеров и отмен. Моментальная синхронизация с приложением учеников.',
          },
          {
            icon: BarChart3, title: 'Аналитика и отчеты', description: 'Детальные графики по выручке, посещаемости и активности клиентов. Принимайте решения на основе данных.',
          },
          {
            icon: Settings, title: 'Автоматизация', description: 'Настройка триггеров: автоматические напоминания об окончании абонемента и пуш-уведомления об акциях.',
          },
        ]
      },
      roles: {
        badge: 'Доступ',
        title: 'Контроль ролей и прав',
        subtitle: 'Настройте доступы для каждого сотрудника вашей команды',
        items: [
          {
            title: 'Владелец',
            desc: 'Полный контроль над бизнесом. Доступ ко всем филиалам, финансовой аналитике и настройкам платформы.',
            icon: Shield,
            color: 'text-primary',
            bg: 'bg-primary/10'
          },
          {
            title: 'Администратор',
            desc: 'Управление расписанием, продажа абонементов и работа с клиентской базой конкретного филиала.',
            icon: Settings,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10'
          },
          {
            title: 'Тренер',
            desc: 'Просмотр своего расписания, отметка присутствующих на тренировке и базовая информация об учениках.',
            icon: Users,
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10'
          }
        ]
      },
      metrics: {
        badge: 'Результат',
        title: 'Растите вместе с Tensu',
        items: [
          { value: '-40%', label: 'Времени на рутину' },
          { value: '+25%', label: 'Удержание клиентов' },
          { value: '24/7', label: 'Доступ к аналитике' },
        ]
      },
      cta: {
        title: 'Готовы масштабировать бизнес?',
        desc: 'Оставьте заявку, и мы проведем подробную демонстрацию платформы специально для вашего клуба.',
        btn1: 'Запросить демо',
        btn2: 'Посмотреть тарифы'
      }
    },
    en: {
      hero: {
        badge: 'For Business',
        title: 'Tensu',
        titleGradient: 'Business',
        subtitle: 'Smart management of your sports club',
        description: 'A comprehensive CRM platform that automates routines, increases customer loyalty, and helps your business grow faster.',
        cta: 'Submit Request',
      },
      features: {
        badge: 'Features',
        title: 'Everything you need in one place',
        items: [
          {
            icon: Users, title: 'Client Management', description: 'Unified database of all students. Track attendance, membership statuses, and payment history in a few clicks.',
          },
          {
            icon: Calendar, title: 'Smart Schedule', description: 'Flexible workout creation, coach replacements, and cancellations. Instant synchronization with the student app.',
          },
          {
            icon: BarChart3, title: 'Analytics and Reports', description: 'Detailed charts on revenue, attendance, and client activity. Make data-driven decisions.',
          },
          {
            icon: Settings, title: 'Automation', description: 'Configure triggers: automatic membership expiration reminders and promotional push notifications.',
          },
        ]
      },
      roles: {
        badge: 'Access',
        title: 'Role and Rights Control',
        subtitle: 'Customize access for every employee on your team',
        items: [
          {
            title: 'Owner',
            desc: 'Full business control. Access to all branches, financial analytics, and platform settings.',
            icon: Shield,
            color: 'text-primary',
            bg: 'bg-primary/10'
          },
          {
            title: 'Administrator',
            desc: 'Schedule management, membership sales, and client base operations for a specific branch.',
            icon: Settings,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10'
          },
          {
            title: 'Coach',
            desc: 'View personal schedule, mark attendance, and access basic student information.',
            icon: Users,
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10'
          }
        ]
      },
      metrics: {
        badge: 'Results',
        title: 'Grow with Tensu',
        items: [
          { value: '-40%', label: 'Time on routine' },
          { value: '+25%', label: 'Client retention' },
          { value: '24/7', label: 'Analytics access' },
        ]
      },
      cta: {
        title: 'Ready to scale your business?',
        desc: 'Submit a request, and we will conduct a detailed platform demonstration specifically for your club.',
        btn1: 'Request Demo',
        btn2: 'View Pricing'
      }
    },
    kk: {
      hero: {
        badge: 'Бизнес үшін',
        title: 'Tensu',
        titleGradient: 'Business',
        subtitle: 'Спорт клубыңызды ақылды басқару',
        description: 'Күнделікті жұмысты автоматтандыратын, клиенттердің лоялдылығын арттыратын және бизнесіңіздің тез өсуіне көмектесетін кешенді CRM-платформа.',
        cta: 'Өтініш қалдыру',
      },
      features: {
        badge: 'Мүмкіндіктер',
        title: 'Барлығы бір жерде',
        items: [
          {
            icon: Users, title: 'Клиенттерді басқару', description: 'Барлық оқушылардың бірыңғай дерекқоры. Сабаққа қатысуды, абонемент күйлерін және төлем тарихын бақылаңыз.',
          },
          {
            icon: Calendar, title: 'Ақылды кесте', description: 'Жаттығуларды икемді құру, жаттықтырушыларды ауыстыру. Оқушылар қосымшасымен лезде синхрондау.',
          },
          {
            icon: BarChart3, title: 'Аналитика және есептер', description: 'Кіріс, қатысу және клиенттер белсенділігі бойынша толық графиктер. Деректер негізінде шешім қабылдаңыз.',
          },
          {
            icon: Settings, title: 'Автоматтандыру', description: 'Абонементтің аяқталуы туралы автоматты ескертулер және акциялар туралы хабарламалар.',
          },
        ]
      },
      roles: {
        badge: 'Рұқсаттар',
        title: 'Рөлдер мен құқықтарды бақылау',
        subtitle: 'Командаңыздың әр қызметкері үшін рұқсаттарды реттеңіз',
        items: [
          {
            title: 'Иесі',
            desc: 'Бизнесті толық бақылау. Барлық филиалдарға, қаржылық аналитикаға және баптауларға қол жеткізу.',
            icon: Shield,
            color: 'text-primary',
            bg: 'bg-primary/10'
          },
          {
            title: 'Администратор',
            desc: 'Кестені басқару, абонементтерді сату және нақты филиалдың клиенттік базасымен жұмыс.',
            icon: Settings,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10'
          },
          {
            title: 'Жаттықтырушы',
            desc: 'Өз кестесін көру, жаттығуға қатысқандарды белгілеу және оқушылар туралы негізгі ақпарат.',
            icon: Users,
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10'
          }
        ]
      },
      metrics: {
        badge: 'Нәтиже',
        title: 'Tensu-мен бірге өсіңіз',
        items: [
          { value: '-40%', label: 'Күнделікті жұмыс уақыты' },
          { value: '+25%', label: 'Клиенттерді ұстап қалу' },
          { value: '24/7', label: 'Аналитикаға қол жеткізу' },
        ]
      },
      cta: {
        title: 'Бизнесті масштабтауға дайынсыз ба?',
        desc: 'Өтініш қалдырыңыз, біз сіздің клубыңыз үшін платформаның толық демонстрациясын өткіземіз.',
        btn1: 'Демо сұрау',
        btn2: 'Тарифтерді көру'
      }
    }
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-background relative selection:bg-purple-500/30 selection:text-purple-50">
      <Navigation />

      <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 z-10 overflow-hidden border-b border-white/5">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-purple-400 shadow-sm mx-auto">
              <Sparkles className="w-4 h-4" />
              {t.hero.badge}
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
                {t.hero.title} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-primary">
                  {t.hero.titleGradient}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t.hero.description}
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Link
                href="/contact"
                className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:-translate-y-1"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center perspective-1000">
            <div className="w-full max-w-5xl transform-gpu transition-transform duration-1000 hover:rotate-x-2">
              <DesktopMockup />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 z-10 bg-[#080A15]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-[10px] font-black uppercase tracking-widest text-purple-400">
                {t.features.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.features.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.features.items.map((feature, idx) => (
                <div key={idx} className="tensu-card p-6 space-y-4 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="relative py-24 lg:py-32 z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary">
              {t.roles.badge}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.roles.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.roles.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.roles.items.map((role, idx) => (
              <div key={idx} className="tensu-card p-8 lg:p-10 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
                <div className={`w-20 h-20 rounded-3xl ${role.bg} border border-white/5 flex items-center justify-center mb-8 shadow-inner`}>
                  <role.icon className={`w-10 h-10 ${role.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{role.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 z-10 border-t border-white/5 bg-[#080A15]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-[10px] font-black uppercase tracking-widest text-pink-400 mb-4 inline-block">
              {t.metrics.badge}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              {t.metrics.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.metrics.items.map((metric, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 tracking-tighter">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 z-10 border-t border-white/5 bg-gradient-to-b from-[#080A15] to-[#0A0D1A] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              {t.cta.btn1}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
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
