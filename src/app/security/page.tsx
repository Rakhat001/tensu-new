"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Server, CheckCircle2, FileCheck, ShieldAlert, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function SecurityPage() {
  const { language } = useLanguage();

  const translations = {
    ru: {
      badge: 'Конфиденциальность',
      title: 'Безопасность и',
      titleGradient: 'Приватность',
      subtitle: 'Ваши данные под надёжной защитой лучших мировых стандартов шифрования',
      dataColTitle: 'Какие данные мы собираем',
      dataUsgTitle: 'Как мы используем данные',
      noteTitle: 'Важное примечание',
      noteDesc1: 'предназначен для управления спортивными клубами и не должен использоваться для сбора особо чувствительных персональных данных или строго конфиденциальной информации. Если вы обрабатываете такие данные, убедитесь, что соблюдаете все применимые законы и нормативы вашей юрисдикции.',
      features: [
        { icon: Shield, title: 'Защищённые платежи', description: 'Обработка платежей через PCI DSS сертифицированные шлюзы' },
        { icon: Lock, title: 'Шифрование данных', description: 'Все данные шифруются при передаче и хранении' },
        { icon: Eye, title: 'Минимум данных', description: 'Собираем только необходимую информацию для работы сервиса' },
        { icon: Server, title: 'Надёжное хранение', description: 'Данные хранятся на защищённых серверах с резервным копированием' },
        { icon: CheckCircle2, title: 'Прозрачность', description: 'Вы всегда знаете, какие данные мы используем и зачем' },
        { icon: FileCheck, title: 'Соответствие законам', description: 'Соблюдаем законодательство о защите персональных данных' },
      ],
      dataCollection: [
        'Имя, телефон, email — для идентификации пользователя',
        'Данные об абонементах и тренировках — для предоставления сервиса',
        'История платежей — для учёта и поддержки',
        'Данные карт обрабатываются платёжными шлюзами, мы их не храним',
      ],
      dataUsage: [
        'Предоставление доступа к расписанию и абонементам',
        'Обработка платежей и управление подписками',
        'Отправка уведомлений о тренировках',
        'Улучшение качества сервиса',
        'Мы никогда не продаём ваши данные третьим лицам',
      ]
    },
    en: {
      badge: 'Privacy',
      title: 'Security and',
      titleGradient: 'Privacy',
      subtitle: 'Your data is securely protected by world-class encryption standards',
      dataColTitle: 'What Data We Collect',
      dataUsgTitle: 'How We Use Data',
      noteTitle: 'Important Note',
      noteDesc1: 'is designed for sports club management and should not be used for collecting sensitive personal data or confidential information. If you process such data, ensure you comply with all applicable laws and regulations in your jurisdiction.',
      features: [
        { icon: Shield, title: 'Secure Payments', description: 'Payment processing through PCI DSS certified gateways' },
        { icon: Lock, title: 'Data Encryption', description: 'All data is encrypted in transit and at rest' },
        { icon: Eye, title: 'Minimal Data', description: 'We collect only necessary information for service operation' },
        { icon: Server, title: 'Reliable Storage', description: 'Data is stored on secure servers with backups' },
        { icon: CheckCircle2, title: 'Transparency', description: 'You always know what data we use and why' },
        { icon: FileCheck, title: 'Legal Compliance', description: 'We comply with personal data protection laws' },
      ],
      dataCollection: [
        'Name, phone, email — for user identification',
        'Membership and training data — for service provision',
        'Payment history — for accounting and support',
        'Card data is processed by payment gateways, we don\'t store it',
      ],
      dataUsage: [
        'Providing access to schedule and memberships',
        'Processing payments and managing subscriptions',
        'Sending training notifications',
        'Improving service quality',
        'We never sell your data to third parties',
      ]
    },
    kk: {
      badge: 'Құпиялылық',
      title: 'Қауіпсіздік және',
      titleGradient: 'Құпиялылық',
      subtitle: 'Сіздің деректеріңіз сенімді қорғалған',
      dataColTitle: 'Қандай деректерді жинаймыз',
      dataUsgTitle: 'Деректерді қалай пайдаланамыз',
      noteTitle: 'Маңызды ескертпе',
      noteDesc1: 'спорт клубтарын басқаруға арналған және сезімтал жеке деректерді немесе құпия ақпаратты жинау үшін пайдаланылмауы керек. Егер сіз мұндай деректерді өңдесеңіз, барлық қолданылатын заңдар мен ережелерді сақтайтыныңызға көз жеткізіңіз.',
      features: [
        { icon: Shield, title: 'Қорғалған төлемдер', description: 'PCI DSS сертификатталған шлюздар арқылы төлемдерді өңдеу' },
        { icon: Lock, title: 'Деректерді шифрлау', description: 'Барлық деректер тасымалдау және сақтау кезінде шифрланады' },
        { icon: Eye, title: 'Минималды деректер', description: 'Қызметтің жұмысы үшін қажетті ақпаратты ғана жинаймыз' },
        { icon: Server, title: 'Сенімді сақтау', description: 'Деректер резервтік көшірмелері бар қорғалған серверлерде сақталады' },
        { icon: CheckCircle2, title: 'Ашықтық', description: 'Сіз қандай деректерді және неге пайдаланатынымызды әрқашан білесіз' },
        { icon: FileCheck, title: 'Заңдарға сәйкестік', description: 'Жеке деректерді қорғау туралы заңнаманы сақтаймыз' },
      ],
      dataCollection: [
        'Аты, телефон, email — пайдаланушыны сәйкестендіру үшін',
        'Жазылымдар мен жаттығулар туралы деректер — қызмет көрсету үшін',
        'Төлем тарихы — есеп және қолдау үшін',
        'Карта деректерін төлем шлюздары өңдейді, біз оларды сақтамаймыз',
      ],
      dataUsage: [
        'Кесте мен жазылымдарға қол жеткізуді қамтамасыз ету',
        'Төлемдерді өңдеу және жазылымдарды басқару',
        'Жаттығулар туралы хабарландырулар жіберу',
        'Қызмет сапасын жақсарту',
        'Біз сіздің деректеріңізді үшінші тұлғаларға ешқашан сатпаймыз',
      ]
    }
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-background relative selection:bg-emerald-500/30 selection:text-emerald-50">
      <Navigation />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <section className="pt-32 lg:pt-48 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-emerald-400 shadow-sm mx-auto">
              <Shield className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">{t.titleGradient}</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className="tensu-card p-8 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors shadow-inner">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="tensu-card p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-colors">
              <h2 className="text-2xl font-black text-white mb-8 tracking-tight flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                {t.dataColTitle}
              </h2>
              <ul className="space-y-5">
                {t.dataCollection.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tensu-card p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-colors">
              <h2 className="text-2xl font-black text-white mb-8 tracking-tight flex items-center gap-3">
                <Server className="w-6 h-6 text-emerald-400" />
                {t.dataUsgTitle}
              </h2>
              <ul className="space-y-5">
                {t.dataUsage.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/30 bg-amber-500/5 p-8 lg:p-12 mt-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white mb-4 tracking-tight">{t.noteTitle}</h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                  <strong className="text-white font-bold">Tensu</strong> {t.noteDesc1}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
