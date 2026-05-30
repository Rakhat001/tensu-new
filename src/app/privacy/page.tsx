"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPage() {
  const { language } = useLanguage();

  const translations = {
    ru: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление: 6 февраля 2026',
      sections: [
        {
          title: '1. Общие положения',
          content:
            'Tensu ("мы", "наш", "платформа") уважает вашу конфиденциальность и обязуется защищать ваши персональные данные. Эта политика конфиденциальности описывает, как мы собираем, используем и защищаем информацию при использовании наших Telegram Mini Apps: Tensu Students и Tensu Business.',
        },
        {
          title: '2. Какие данные мы собираем',
          content:
            'Мы собираем следующие типы данных:\n\n• Персональные данные: имя, фамилия, номер телефона, email\n• Данные аккаунта: информация из Telegram (username, user ID)\n• Данные использования: информация о тренировках, абонементах, посещениях\n• Платёжные данные: история транзакций (данные карт обрабатываются платёжными шлюзами и не хранятся на наших серверах)',
        },
        {
          title: '3. Как мы используем данные',
          content:
            'Мы используем ваши данные для:\n\n• Предоставления доступа к функциям приложения\n• Обработки записей на тренировки и управления абонементами\n• Обработки платежей и управления подписками\n• Отправки уведомлений о тренировках и важных событиях\n• Улучшения качества сервиса и разработки новых функций\n• Обеспечения безопасности и предотвращения мошенничества',
        },
        {
          title: '4. Как мы защищаем данные',
          content:
            'Мы применяем современные меры безопасности:\n\n• Шифрование данных при передаче (SSL/TLS)\n• Шифрование данных при хранении\n• Ограниченный доступ к данным (только авторизованный персонал)\n• Регулярное резервное копирование\n• Обработка платёжных данных через PCI DSS сертифицированные шлюзы',
        },
        {
          title: '5. Передача данных третьим лицам',
          content:
            'Мы не продаём ваши персональные данные. Мы можем передавать данные:\n\n• Платёжным провайдерам для обработки транзакций\n• Поставщикам услуг, которые помогают нам предоставлять сервис (хостинг, аналитика)\n• Правоохранительным органам при наличии законных требований\n\nВсе третьи лица обязаны соблюдать конфиденциальность ваших данных.',
        },
        {
          title: '6. Ваши права',
          content:
            'У вас есть право:\n\n• Запросить доступ к своим персональным данным\n• Запросить исправление неточных данных\n• Запросить удаление ваших данных\n• Возразить против обработки ваших данных\n• Запросить экспорт ваших данных\n\nДля реализации своих прав свяжитесь с нами через @tensuadmin в Telegram.',
        },
        {
          title: '7. Хранение данных',
          content:
            'Мы храним ваши данные столько, сколько необходимо для предоставления сервиса и выполнения юридических обязательств. После прекращения использования сервиса вы можете запросить удаление ваших данных.',
        },
        {
          title: '8. Изменения в политике',
          content:
            'Мы можем обновлять эту политику конфиденциальности. О существенных изменениях мы уведомим вас через приложение или по email. Дата последнего обновления указана в начале документа.',
        },
        {
          title: '9. Контакты',
          content:
            'Если у вас есть вопросы о нашей политике конфиденциальности, свяжитесь с нами:\n\nTelegram: @tensuadmin',
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: February 6, 2026',
      sections: [
        {
          title: '1. General Provisions',
          content:
            'Tensu ("we", "our", "platform") respects your privacy and is committed to protecting your personal data. This privacy policy describes how we collect, use, and protect information when using our Telegram Mini Apps: Tensu Students and Tensu Business.',
        },
        {
          title: '2. What Data We Collect',
          content:
            'We collect the following types of data:\n\n• Personal data: first name, last name, phone number, email\n• Account data: information from Telegram (username, user ID)\n• Usage data: information about sessions, memberships, attendance\n• Payment data: transaction history (card data is processed by payment gateways and not stored on our servers)',
        },
        {
          title: '3. How We Use Data',
          content:
            'We use your data to:\n\n• Provide access to app features\n• Process session bookings and manage memberships\n• Process payments and manage subscriptions\n• Send notifications about sessions and important events\n• Improve service quality and develop new features\n• Ensure security and prevent fraud',
        },
        {
          title: '4. How We Protect Data',
          content:
            'We apply modern security measures:\n\n• Data encryption in transit (SSL/TLS)\n• Data encryption at rest\n• Limited data access (authorized personnel only)\n• Regular backups\n• Payment data processing through PCI DSS certified gateways',
        },
        {
          title: '5. Data Sharing with Third Parties',
          content:
            'We do not sell your personal data. We may share data with:\n\n• Payment providers for transaction processing\n• Service providers who help us deliver the service (hosting, analytics)\n• Law enforcement agencies when legally required\n\nAll third parties are required to maintain confidentiality of your data.',
        },
        {
          title: '6. Your Rights',
          content:
            'You have the right to:\n\n• Request access to your personal data\n• Request correction of inaccurate data\n• Request deletion of your data\n• Object to processing of your data\n• Request export of your data\n\nTo exercise your rights, contact us via @tensuadmin on Telegram.',
        },
        {
          title: '7. Data Retention',
          content:
            'We retain your data as long as necessary to provide the service and fulfill legal obligations. After you stop using the service, you can request deletion of your data.',
        },
        {
          title: '8. Policy Changes',
          content:
            'We may update this privacy policy. We will notify you of significant changes through the app or by email. The last update date is indicated at the beginning of this document.',
        },
        {
          title: '9. Contact',
          content:
            'If you have questions about our privacy policy, contact us:\n\nTelegram: @tensuadmin',
        },
      ],
    },
    kk: {
      title: 'Құпиялық саясаты',
      lastUpdated: 'Соңғы жаңарту: 6 ақпан 2026',
      sections: [
        {
          title: '1. Жалпы ережелер',
          content:
            'Tensu ("біз", "біздің", "платформа") сіздің құпиялылығыңызды құрметтейді және жеке деректеріңізді қорғауға міндеттеміз. Бұл құпиялық саясаты Telegram Mini Apps пайдалану кезінде ақпаратты қалай жинайтынымызды, пайдаланатынымызды және қорғайтынымызды сипаттайды: Tensu Students және Tensu Business.',
        },
        {
          title: '2. Қандай деректерді жинаймыз',
          content:
            'Біз келесі деректер түрлерін жинаймыз:\n\n• Жеке деректер: аты, тегі, телефон нөмірі, email\n• Аккаунт деректері: Telegram ақпараты (username, user ID)\n• Пайдалану деректері: жаттығулар, жазылымдар, келулер туралы ақпарат\n• Төлем деректері: транзакциялар тарихы (карта деректері төлем шлюздарымен өңделеді және біздің серверлерде сақталмайды)',
        },
        {
          title: '3. Деректерді қалай пайдаланамыз',
          content:
            'Біз сіздің деректеріңізді мына мақсаттарда пайдаланамыз:\n\n• Қолданба функцияларына қол жеткізуді қамтамасыз ету\n• Жаттығуларға жазылуларды өңдеу және жазылымдарды басқару\n• Төлемдерді өңдеу және жазылымдарды басқару\n• Жаттығулар және маңызды оқиғалар туралы хабарландырулар жіберу\n• Қызмет сапасын жақсарту және жаңа функцияларды әзірлеу\n• Қауіпсіздікті қамтамасыз ету және алаяқтықтың алдын алу',
        },
        {
          title: '4. Деректерді қалай қорғаймыз',
          content:
            'Біз заманауи қауіпсіздік шараларын қолданамыз:\n\n• Тасымалдау кезінде деректерді шифрлау (SSL/TLS)\n• Сақтау кезінде деректерді шифрлау\n• Деректерге шектеулі қол жеткізу (тек авторизацияланған қызметкерлер)\n• Тұрақты резервтік көшірмелер\n• PCI DSS сертификатталған шлюздар арқылы төлем деректерін өңдеу',
        },
        {
          title: '5. Деректерді үшінші тұлғаларға беру',
          content:
            'Біз сіздің жеке деректеріңізді сатпаймыз. Біз деректерді мыналарға бере аламыз:\n\n• Транзакцияларды өңдеу үшін төлем провайдерлеріне\n• Қызмет көрсетуге көмектесетін қызмет провайдерлеріне (хостинг, аналитика)\n• Заңды талаптар болған жағдайда құқық қорғау органдарына\n\nБарлық үшінші тұлғалар сіздің деректеріңіздің құпиялылығын сақтауға міндетті.',
        },
        {
          title: '6. Сіздің құқықтарыңыз',
          content:
            'Сізде мына құқықтар бар:\n\n• Жеке деректеріңізге қол жеткізуді сұрау\n• Дәл емес деректерді түзетуді сұрау\n• Деректеріңізді жоюды сұрау\n• Деректеріңізді өңдеуге қарсы шығу\n• Деректеріңізді экспорттауды сұрау\n\nҚұқықтарыңызды іске асыру үшін Telegram-да @tensuadmin арқылы бізбен байланысыңыз.',
        },
        {
          title: '7. Деректерді сақтау',
          content:
            'Біз сіздің деректеріңізді қызмет көрсету және заңды міндеттемелерді орындау үшін қажетті уақыт бойы сақтаймыз. Қызметті пайдалануды тоқтатқаннан кейін деректеріңізді жоюды сұрай аласыз.',
        },
        {
          title: '8. Саясаттағы өзгерістер',
          content:
            'Біз бұл құпиялық саясатын жаңарта аламыз. Маңызды өзгерістер туралы қолданба немесе email арқылы хабарлаймыз. Соңғы жаңарту күні құжаттың басында көрсетілген.',
        },
        {
          title: '9. Байланыс',
          content:
            'Құпиялық саясаты туралы сұрақтарыңыз болса, бізбен байланысыңыз:\n\nTelegram: @tensuadmin',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary-50">
      <Navigation />
      
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <section className="pt-32 lg:pt-48 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              {t.title}
            </h1>
            <p className="text-sm text-muted-foreground">{t.lastUpdated}</p>
          </div>

          <div className="tensu-card p-8 lg:p-12 space-y-10 border border-white/10 bg-card/40 backdrop-blur-sm">
            {t.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
