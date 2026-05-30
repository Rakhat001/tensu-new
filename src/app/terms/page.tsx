"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  const translations = {
    ru: {
      title: 'Условия использования',
      lastUpdated: 'Последнее обновление: 6 февраля 2026',
      sections: [
        {
          title: '1. Общие положения',
          content:
            'Настоящие Условия использования ("Условия") регулируют использование Telegram Mini Apps "Tensu Students" и "Tensu Business" (далее — "Сервис"), предоставляемых компанией Tensu ("мы", "наш", "Компания").\n\nИспользуя Сервис, вы соглашаетесь с настоящими Условиями. Если вы не согласны с какими-либо положениями, пожалуйста, не используйте Сервис.',
        },
        {
          title: '2. Описание Сервиса',
          content:
            'Tensu предоставляет платформу для:\n\n• Tensu Students: запись на тренировки, управление абонементами, оплата услуг спортивных клубов\n• Tensu Business: управление клубом, расписанием, клиентами и финансами для владельцев и сотрудников спортивных клубов\n\nМы оставляем за собой право изменять, приостанавливать или прекращать работу любой части Сервиса в любое время.',
        },
        {
          title: '3. Регистрация и аккаунт',
          content:
            'Для использования Сервиса необходимо:\n\n• Иметь аккаунт в Telegram\n• Предоставить достоверную информацию при регистрации\n• Быть старше 16 лет (или иметь согласие родителей/опекунов)\n\nВы несёте ответственность за:\n\n• Сохранность доступа к вашему аккаунту Telegram\n• Все действия, совершённые через ваш аккаунт\n• Своевременное обновление контактной информации',
        },
        {
          title: '4. Правила использования',
          content:
            'При использовании Сервиса запрещается:\n\n• Нарушать законодательство Республики Казахстан и международное право\n• Передавать доступ к аккаунту третьим лицам\n• Использовать Сервис для мошенничества или обмана\n• Распространять вредоносное ПО или совершать кибератаки\n• Собирать данные других пользователей без их согласия\n• Создавать помехи работе Сервиса\n• Использовать автоматизированные средства для доступа к Сервису без разрешения',
        },
        {
          title: '5. Платежи и возвраты',
          content:
            'Оплата услуг:\n\n• Все цены указаны в тенге (KZT) и включают применимые налоги\n• Оплата производится через защищённые платёжные шлюзы\n• Мы не храним данные банковских карт на наших серверах\n\nПолитика возврата:\n\n• Возврат за неиспользованные занятия возможен в течение 14 дней с момента покупки\n• Возврат за частично использованный абонемент рассчитывается пропорционально\n• Для оформления возврата свяжитесь с администрацией клуба или нашей поддержкой\n• Возврат осуществляется тем же способом, которым была произведена оплата',
        },
        {
          title: '6. Абонементы и записи',
          content:
            'Правила использования абонементов:\n\n• Абонемент является именным и не подлежит передаче\n• Срок действия абонемента указан при покупке\n• Неиспользованные занятия не переносятся на следующий период (если не указано иное)\n\nПравила записи на тренировки:\n\n• Отмена записи возможна не позднее чем за 2 часа до начала\n• Систематические неявки могут привести к ограничению возможности записи\n• Правила конкретного клуба могут содержать дополнительные условия',
        },
        {
          title: '7. Для владельцев клубов (Tensu Business)',
          content:
            'Используя Tensu Business, вы соглашаетесь:\n\n• Предоставлять достоверную информацию о клубе и услугах\n• Соблюдать законодательство о защите персональных данных клиентов\n• Своевременно выполнять обязательства перед клиентами\n• Оплачивать комиссию за использование платформы согласно выбранному тарифу\n\nМы оставляем за собой право приостановить доступ к Сервису при нарушении данных условий.',
        },
        {
          title: '8. Интеллектуальная собственность',
          content:
            'Все права на Сервис принадлежат Tensu:\n\n• Логотипы, дизайн, код и контент являются нашей собственностью\n• Использование наших материалов без разрешения запрещено\n• Вы сохраняете права на контент, который загружаете (фото, описания)\n\nПредоставляя контент, вы даёте нам право использовать его для работы Сервиса.',
        },
        {
          title: '9. Ограничение ответственности',
          content:
            'Сервис предоставляется "как есть". Мы не гарантируем:\n\n• Бесперебойную работу Сервиса\n• Отсутствие ошибок или вирусов\n• Соответствие Сервиса вашим ожиданиям\n\nМы не несём ответственности за:\n\n• Косвенные убытки от использования Сервиса\n• Действия третьих лиц (клубов, тренеров, других пользователей)\n• Потерю данных по причинам, не зависящим от нас\n\nМаксимальная ответственность Tensu ограничена суммой, уплаченной вами за последние 12 месяцев.',
        },
        {
          title: '10. Прекращение использования',
          content:
            'Вы можете прекратить использование Сервиса в любое время.\n\nМы можем приостановить или прекратить ваш доступ при:\n\n• Нарушении настоящих Условий\n• Подозрении в мошенничестве\n• Запросе правоохранительных органов\n• Прекращении работы Сервиса\n\nПри прекращении доступа вы можете запросить экспорт или удаление ваших данных.',
        },
        {
          title: '11. Изменения Условий',
          content:
            'Мы можем обновлять настоящие Условия. О существенных изменениях мы уведомим вас:\n\n• Через уведомление в приложении\n• По email (если предоставлен)\n• Через публикацию на сайте\n\nПродолжение использования Сервиса после изменений означает ваше согласие с новыми Условиями.',
        },
        {
          title: '12. Применимое право',
          content:
            'Настоящие Условия регулируются законодательством Республики Казахстан.\n\nВсе споры разрешаются путём переговоров. При невозможности достичь соглашения — в судах Республики Казахстан по месту нахождения Компании.',
        },
        {
          title: '13. Контакты',
          content:
            'По вопросам, связанным с настоящими Условиями, свяжитесь с нами:\n\nTelegram: @tensuadmin\nEmail: support@tensu.kz',
        },
      ],
    },
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: February 6, 2026',
      sections: [
        {
          title: '1. General Provisions',
          content:
            'These Terms of Service ("Terms") govern the use of Telegram Mini Apps "Tensu Students" and "Tensu Business" (the "Service"), provided by Tensu ("we", "our", "Company").\n\nBy using the Service, you agree to these Terms. If you do not agree with any provisions, please do not use the Service.',
        },
        {
          title: '2. Service Description',
          content:
            'Tensu provides a platform for:\n\n• Tensu Students: booking sessions, managing memberships, paying for sports club services\n• Tensu Business: club management, scheduling, client and financial management for sports club owners and staff\n\nWe reserve the right to modify, suspend, or discontinue any part of the Service at any time.',
        },
        {
          title: '3. Registration and Account',
          content:
            'To use the Service, you must:\n\n• Have a Telegram account\n• Provide accurate information during registration\n• Be at least 16 years old (or have parental/guardian consent)\n\nYou are responsible for:\n\n• Maintaining access to your Telegram account\n• All activities performed through your account\n• Keeping your contact information up to date',
        },
        {
          title: '4. Usage Rules',
          content:
            'When using the Service, you must not:\n\n• Violate laws of the Republic of Kazakhstan or international law\n• Share account access with third parties\n• Use the Service for fraud or deception\n• Distribute malware or conduct cyberattacks\n• Collect other users\' data without consent\n• Interfere with Service operation\n• Use automated tools to access the Service without permission',
        },
        {
          title: '5. Payments and Refunds',
          content:
            'Payment terms:\n\n• All prices are in Kazakhstani Tenge (KZT) and include applicable taxes\n• Payments are processed through secure payment gateways\n• We do not store bank card data on our servers\n\nRefund policy:\n\n• Refunds for unused sessions are available within 14 days of purchase\n• Refunds for partially used memberships are calculated proportionally\n• To request a refund, contact the club administration or our support\n• Refunds are issued using the same payment method',
        },
        {
          title: '6. Memberships and Bookings',
          content:
            'Membership rules:\n\n• Memberships are personal and non-transferable\n• Validity period is specified at purchase\n• Unused sessions do not carry over to the next period (unless otherwise stated)\n\nBooking rules:\n\n• Cancellations must be made at least 2 hours before the session\n• Repeated no-shows may result in booking restrictions\n• Individual club rules may contain additional conditions',
        },
        {
          title: '7. For Club Owners (Tensu Business)',
          content:
            'By using Tensu Business, you agree to:\n\n• Provide accurate information about your club and services\n• Comply with personal data protection laws\n• Fulfill obligations to clients in a timely manner\n• Pay platform fees according to your selected plan\n\nWe reserve the right to suspend Service access for violations of these terms.',
        },
        {
          title: '8. Intellectual Property',
          content:
            'All rights to the Service belong to Tensu:\n\n• Logos, design, code, and content are our property\n• Use of our materials without permission is prohibited\n• You retain rights to content you upload (photos, descriptions)\n\nBy providing content, you grant us the right to use it for Service operation.',
        },
        {
          title: '9. Limitation of Liability',
          content:
            'The Service is provided "as is". We do not guarantee:\n\n• Uninterrupted Service operation\n• Absence of errors or viruses\n• Service meeting your expectations\n\nWe are not liable for:\n\n• Indirect damages from Service use\n• Actions of third parties (clubs, trainers, other users)\n• Data loss due to circumstances beyond our control\n\nTensu\'s maximum liability is limited to the amount you paid in the last 12 months.',
        },
        {
          title: '10. Termination',
          content:
            'You may stop using the Service at any time.\n\nWe may suspend or terminate your access for:\n\n• Violation of these Terms\n• Suspected fraud\n• Law enforcement requests\n• Service discontinuation\n\nUpon termination, you may request export or deletion of your data.',
        },
        {
          title: '11. Changes to Terms',
          content:
            'We may update these Terms. We will notify you of significant changes:\n\n• Through in-app notification\n• By email (if provided)\n• Through website publication\n\nContinued use of the Service after changes constitutes acceptance of the new Terms.',
        },
        {
          title: '12. Governing Law',
          content:
            'These Terms are governed by the laws of the Republic of Kazakhstan.\n\nAll disputes shall be resolved through negotiation. If agreement cannot be reached — in the courts of the Republic of Kazakhstan at the Company\'s location.',
        },
        {
          title: '13. Contact',
          content:
            'For questions regarding these Terms, contact us:\n\nTelegram: @tensuadmin\nEmail: support@tensu.kz',
        },
      ],
    },
    kk: {
      title: 'Пайдалану шарттары',
      lastUpdated: 'Соңғы жаңарту: 6 ақпан 2026',
      sections: [
        {
          title: '1. Жалпы ережелер',
          content:
            'Осы Пайдалану шарттары ("Шарттар") Tensu компаниясы ("біз", "біздің", "Компания") ұсынатын "Tensu Students" және "Tensu Business" Telegram Mini Apps ("Сервис") пайдалануды реттейді.\n\nСервисті пайдалана отырып, сіз осы Шарттармен келісесіз. Кез келген ережелермен келіспесеңіз, Сервисті пайдаланбаңыз.',
        },
        {
          title: '2. Сервис сипаттамасы',
          content:
            'Tensu мына мақсаттарға арналған платформаны ұсынады:\n\n• Tensu Students: жаттығуларға жазылу, жазылымдарды басқару, спорт клубтарының қызметтеріне төлем\n• Tensu Business: спорт клубтарының иелері мен қызметкерлері үшін клубты, кестені, клиенттерді және қаржыны басқару\n\nБіз Сервистің кез келген бөлігін кез келген уақытта өзгертуге, тоқтата тұруға немесе тоқтатуға құқылымыз.',
        },
        {
          title: '3. Тіркелу және аккаунт',
          content:
            'Сервисті пайдалану үшін қажет:\n\n• Telegram аккаунтының болуы\n• Тіркелу кезінде дұрыс ақпарат беру\n• 16 жастан асқан болу (немесе ата-ана/қамқоршы келісімі)\n\nСіз мыналарға жауаптысыз:\n\n• Telegram аккаунтыңызға қол жеткізуді сақтау\n• Аккаунтыңыз арқылы жасалған барлық әрекеттер\n• Байланыс ақпаратын уақтылы жаңарту',
        },
        {
          title: '4. Пайдалану ережелері',
          content:
            'Сервисті пайдалану кезінде тыйым салынады:\n\n• Қазақстан Республикасының заңнамасын және халықаралық құқықты бұзу\n• Аккаунтқа қол жеткізуді үшінші тұлғаларға беру\n• Сервисті алаяқтық немесе алдау үшін пайдалану\n• Зиянды БҚ тарату немесе кибершабуылдар жасау\n• Басқа пайдаланушылардың деректерін олардың келісімінсіз жинау\n• Сервис жұмысына кедергі келтіру\n• Рұқсатсыз автоматтандырылған құралдарды пайдалану',
        },
        {
          title: '5. Төлемдер және қайтарулар',
          content:
            'Төлем шарттары:\n\n• Барлық бағалар теңгемен (KZT) көрсетілген және қолданылатын салықтарды қамтиды\n• Төлемдер қауіпсіз төлем шлюздары арқылы өңделеді\n• Біз банк карталарының деректерін серверлерімізде сақтамаймыз\n\nҚайтару саясаты:\n\n• Пайдаланылмаған сабақтар үшін қайтару сатып алғаннан кейін 14 күн ішінде мүмкін\n• Ішінара пайдаланылған жазылым үшін қайтару пропорционалды есептеледі\n• Қайтаруды рәсімдеу үшін клуб әкімшілігіне немесе біздің қолдауға хабарласыңыз\n• Қайтару төлем жасалған тәсілмен жүзеге асырылады',
        },
        {
          title: '6. Жазылымдар және жазылулар',
          content:
            'Жазылымды пайдалану ережелері:\n\n• Жазылым жеке және берілмейді\n• Жарамдылық мерзімі сатып алу кезінде көрсетіледі\n• Пайдаланылмаған сабақтар келесі кезеңге ауыспайды (басқаша көрсетілмесе)\n\nЖаттығуларға жазылу ережелері:\n\n• Жазылуды бастамасынан кемінде 2 сағат бұрын болдырмауға болады\n• Жүйелі келмеу жазылу мүмкіндігін шектеуге әкелуі мүмкін\n• Нақты клуб ережелері қосымша шарттарды қамтуы мүмкін',
        },
        {
          title: '7. Клуб иелері үшін (Tensu Business)',
          content:
            'Tensu Business пайдалана отырып, сіз келісесіз:\n\n• Клуб және қызметтер туралы дұрыс ақпарат беру\n• Клиенттердің жеке деректерін қорғау туралы заңнаманы сақтау\n• Клиенттер алдындағы міндеттемелерді уақтылы орындау\n• Таңдалған тарифке сәйкес платформаны пайдалану үшін комиссия төлеу\n\nБіз осы шарттарды бұзған жағдайда Сервиске қол жеткізуді тоқтата тұруға құқылымыз.',
        },
        {
          title: '8. Зияткерлік меншік',
          content:
            'Сервиске барлық құқықтар Tensu-ға тиесілі:\n\n• Логотиптер, дизайн, код және мазмұн біздің меншігіміз\n• Біздің материалдарды рұқсатсыз пайдалануға тыйым салынады\n• Сіз жүктеген мазмұнға (фото, сипаттамалар) құқықтарыңызды сақтайсыз\n\nМазмұн бере отырып, сіз оны Сервис жұмысы үшін пайдалануға құқық бересіз.',
        },
        {
          title: '9. Жауапкершілікті шектеу',
          content:
            'Сервис "қалай болса солай" ұсынылады. Біз кепілдік бермейміз:\n\n• Сервистің үздіксіз жұмысы\n• Қателер немесе вирустардың болмауы\n• Сервистің сіздің күтулеріңізге сәйкестігі\n\nБіз жауапты емеспіз:\n\n• Сервисті пайдаланудан жанама шығындар\n• Үшінші тұлғалардың әрекеттері (клубтар, жаттықтырушылар, басқа пайдаланушылар)\n• Бізге байланысты емес себептерден деректерді жоғалту\n\nTensu-дың максималды жауапкершілігі соңғы 12 айда төлеген сомаңызбен шектеледі.',
        },
        {
          title: '10. Пайдалануды тоқтату',
          content:
            'Сіз Сервисті пайдалануды кез келген уақытта тоқтата аласыз.\n\nБіз сіздің қол жеткізуіңізді тоқтата тұра немесе тоқтата аламыз:\n\n• Осы Шарттарды бұзған жағдайда\n• Алаяқтыққа күдік болған жағдайда\n• Құқық қорғау органдарының сұрауы бойынша\n• Сервис жұмысын тоқтатқан жағдайда\n\nҚол жеткізуді тоқтатқан кезде деректеріңізді экспорттауды немесе жоюды сұрай аласыз.',
        },
        {
          title: '11. Шарттардағы өзгерістер',
          content:
            'Біз осы Шарттарды жаңарта аламыз. Маңызды өзгерістер туралы хабарлаймыз:\n\n• Қолданбадағы хабарландыру арқылы\n• Email арқылы (берілген болса)\n• Веб-сайтта жариялау арқылы\n\nӨзгерістерден кейін Сервисті пайдалануды жалғастыру жаңа Шарттармен келісуіңізді білдіреді.',
        },
        {
          title: '12. Қолданылатын құқық',
          content:
            'Осы Шарттар Қазақстан Республикасының заңнамасымен реттеледі.\n\nБарлық даулар келіссөздер арқылы шешіледі. Келісімге қол жеткізу мүмкін болмаған жағдайда — Компания орналасқан жердегі Қазақстан Республикасының соттарында.',
        },
        {
          title: '13. Байланыс',
          content:
            'Осы Шарттарға қатысты сұрақтар бойынша бізбен байланысыңыз:\n\nTelegram: @tensuadmin\nEmail: support@tensu.kz',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-background relative selection:bg-purple-500/30 selection:text-purple-50">
      <Navigation />
      
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

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
