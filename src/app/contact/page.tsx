"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MessageCircle, Send, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clubName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    ru: {
      title: 'Свяжитесь с',
      titleGradient: 'Нами',
      subtitle: 'Готовы начать? Заполните форму ниже или напишите нам в Telegram для быстрой связи.',
      formTitle: 'Оставить заявку',
      name: 'Ваше имя',
      namePlaceholder: 'Иван Иванов',
      club: 'Название клуба',
      clubPlaceholder: 'My Fitness Club',
      email: 'Email',
      phone: 'Номер телефона',
      message: 'Расскажите о вашем клубе',
      messagePlaceholder: 'Сколько у вас филиалов, учеников? Какие задачи хотите решить с помощью Tensu?',
      submit: 'Отправить заявку',
      submitting: 'Отправка...',
      success: 'Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.',
      tgTitle: 'Написать в Telegram',
      tgDesc: 'Получите быструю консультацию от нашей команды прямо сейчас.',
      tgBtn: 'Открыть чат',
      nextTitle: 'Что дальше?',
      nextSteps: [
        'Мы свяжемся с вами в течение 24 часов',
        'Проведём подробную демонстрацию платформы',
        'Обсудим детали и ответим на вопросы',
        'Поможем с импортом вашей базы учеников',
      ]
    },
    en: {
      title: 'Contact',
      titleGradient: 'Us',
      subtitle: 'Ready to start? Fill out the form below or message us on Telegram for quick communication.',
      formTitle: 'Submit a Request',
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      club: 'Club Name',
      clubPlaceholder: 'My Fitness Club',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Tell us about your club',
      messagePlaceholder: 'How many branches and students do you have? What goals do you want to achieve with Tensu?',
      submit: 'Submit Request',
      submitting: 'Sending...',
      success: 'Thank you! Your request has been successfully sent. We will contact you shortly.',
      tgTitle: 'Message on Telegram',
      tgDesc: 'Get a quick consultation from our team right now.',
      tgBtn: 'Open Chat',
      nextTitle: 'What\'s Next?',
      nextSteps: [
        'We will contact you within 24 hours',
        'Conduct a detailed platform demonstration',
        'Discuss details and answer questions',
        'Help import your student database',
      ]
    },
    kk: {
      title: 'Бізбен байланысыңыз',
      titleGradient: ' ',
      subtitle: 'Бастауға дайынсыз ба? Төмендегі пішінді толтырыңыз немесе Telegram арқылы хабарласыңыз.',
      formTitle: 'Өтініш қалдыру',
      name: 'Атыңыз',
      namePlaceholder: 'Асқар Асқаров',
      club: 'Клуб атауы',
      clubPlaceholder: 'My Fitness Club',
      email: 'Email',
      phone: 'Телефон нөмірі',
      message: 'Клубыңыз туралы айтып беріңіз',
      messagePlaceholder: 'Қанша филиалыңыз, оқушыңыз бар? Tensu көмегімен қандай мәселелерді шешкіңіз келеді?',
      submit: 'Өтініш жіберу',
      submitting: 'Жіберілуде...',
      success: 'Рахмет! Сіздің өтінішіңіз сәтті жіберілді. Біз жақын арада сізбен байланысамыз.',
      tgTitle: 'Telegram-ға жазу',
      tgDesc: 'Біздің командадан дәл қазір жылдам кеңес алыңыз.',
      tgBtn: 'Чатты ашу',
      nextTitle: 'Не болады?',
      nextSteps: [
        'Біз сізбен 24 сағат ішінде байланысамыз',
        'Платформаның толық демонстрациясын өткіземіз',
        'Мәліметтерді талқылап, сұрақтарға жауап береміз',
        'Оқушылар базасын импорттауға көмектесеміз',
      ]
    }
  };

  const t = translations[language] || translations.ru;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert(t.success);
      setFormData({ name: '', email: '', phone: '', clubName: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white relative selection:bg-blue-100 selection:text-blue-800">
      <Navigation />

      {/* Light background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/80 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-violet-50/80 blur-[120px] rounded-full pointer-events-none" />

      <section className="pt-32 lg:pt-48 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
              {t.title} <br/>
              <span className="text-gradient-blue-purple">{t.titleGradient}</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            
            {/* Form */}
            <div className="lg:col-span-3 tensu-card p-8 lg:p-10 border border-gray-200 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              
              <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight relative z-10">
                {t.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t.name}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t.club}</label>
                    <input
                      type="text"
                      value={formData.clubName}
                      onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      placeholder={t.clubPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t.email}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t.phone}</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t.message}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-200 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      {t.submit}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Telegram Card */}
              <div className="rounded-[2rem] p-8 bg-gradient-to-br from-blue-600 to-violet-600 border-none relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {t.tgTitle}
                  </h3>
                  <p className="text-sm text-blue-100 mb-8 leading-relaxed">
                    {t.tgDesc}
                  </p>
                  
                  <Link
                    href="https://t.me/tensuadmin"
                    target="_blank"
                    className="w-full h-12 bg-white hover:bg-blue-50 text-blue-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    {t.tgBtn}
                    <MessageCircle className="w-4 h-4" />
                  </Link>
                  <div className="mt-4 text-center text-xs text-blue-200 font-medium">
                    @tensuadmin
                  </div>
                </div>
              </div>

              {/* What's Next Card */}
              <div className="tensu-card p-8 border-gray-200 bg-gray-50">
                <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  {t.nextTitle}
                </h4>
                <ul className="space-y-4">
                  {t.nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-xs font-black mt-0.5 border border-blue-200">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-gray-600 leading-relaxed font-medium">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
