"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  { question: 'Сколько времени занимает внедрение Tensu?', answer: 'Базовая настройка занимает 1-2 рабочих дня. Вы сможете создать клуб, добавить секции и тарифы, пригласить персонал. Полная миграция данных может занять до недели.' },
  { question: 'Какова стоимость платформы?', answer: 'Стоимость зависит от модели: фиксированная плата за клуб или оплата за активных учеников. Подробности на странице Тарифы. Мы предлагаем демо-период.' },
  { question: 'Как работает оплата абонементов?', answer: 'Ученики оплачивают абонементы через бота картой. Мы используем защищённые платёжные шлюзы. Средства поступают на счёт клуба за вычетом комиссии.' },
  { question: 'Какие роли доступны в Tensu Business?', answer: 'Три роли: владелец (полный доступ), администратор (управление клубом без финансов), тренер (просмотр своих групп). Права настраиваются владельцем.' },
  { question: 'Как получить поддержку?', answer: 'Напишите нам в Telegram. Мы отвечаем в течение нескольких часов в рабочее время.' },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        
        return (
          <div 
            key={i} 
            className={`tensu-card overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/30 shadow-[0_4px_20px_var(--glow-primary)] bg-white/10' : 'hover:border-white/20'}`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className={`text-sm md:text-base font-bold transition-colors ${isOpen ? 'text-primary' : 'text-foreground hover:text-white'}`}>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'bg-white/5 text-muted-foreground'}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
