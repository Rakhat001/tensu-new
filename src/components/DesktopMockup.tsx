"use client";

import { useState } from 'react';
import {
  BarChart3, Users, Calendar, DollarSign, TrendingUp, Clock,
  Sparkles, RefreshCw, Search, UserPlus, Download, Filter,
  ChevronDown, ChevronLeft, ChevronRight, AlertCircle, CheckCircle2
} from 'lucide-react';

export function DesktopMockup() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'schedule' | 'trainers' | 'crm'>('overview');

  const [baseRate, setBaseRate] = useState(15000);
  const [sessions, setSessions] = useState(12);
  const [revenue, setRevenue] = useState(180000);
  const [percent, setPercent] = useState(30);

  const calculateSalary = () => Math.round((baseRate * sessions) + (revenue * (percent / 100)));

  const students = [
    { name: 'Алина Сериковна',    group: 'Младшая группа',          pass: 'Базовый месяц',       status: 'active',  end: '17.06.2026', phone: '+7 707 123 45 67' },
    { name: 'Арслан Руслан',      group: 'Взрослые (MMA)',          pass: 'Безлимитный год',      status: 'frozen',  end: '01.09.2026', phone: '+7 701 987 65 43' },
    { name: 'Руслан Хайбуллин',   group: 'Каратэ дети',             pass: '8 занятий',            status: 'expired', end: '12.05.2026', phone: '+7 778 111 22 33' },
    { name: 'Айбек Кайржан',      group: 'Бразильское джиу-джитсу', pass: 'Утренний абонемент',   status: 'active',  end: '24.06.2026', phone: '+7 707 905 58 51' },
    { name: 'Мадияр Султан',      group: 'Взрослые (MMA)',          pass: 'Разовый',              status: 'active',  end: '10.06.2026', phone: '+7 747 658 87 80' },
  ];

  const statusStyle = (s: string) => {
    if (s === 'active')  return 'bg-blue-50 text-blue-700 border-blue-200';
    if (s === 'expired') return 'bg-violet-50 text-violet-700 border-violet-200';
    if (s === 'frozen')  return 'bg-gray-100 text-gray-600 border-gray-200';
    return 'bg-gray-50 text-gray-500 border-gray-200';
  };
  const statusLabel = (s: string) => {
    if (s === 'active')  return 'Активен';
    if (s === 'expired') return 'Истек';
    if (s === 'frozen')  return 'Заморожен';
    return 'Новый';
  };

  const navItems = [
    { id: 'overview',  icon: BarChart3,   label: 'Обзор' },
    { id: 'students',  icon: Users,       label: 'Студенты' },
    { id: 'schedule',  icon: Calendar,    label: 'Расписание' },
    { id: 'trainers',  icon: DollarSign,  label: 'Тренеры' },
    { id: 'crm',       icon: TrendingUp,  label: 'CRM' },
  ];

  return (
    <div className="w-full relative bg-gray-50 rounded-b-[1.75rem] overflow-hidden select-none">

      {/* Main layout */}
      <div className="flex min-h-[520px] md:min-h-[580px]">

        {/* ── Sidebar ── */}
        <aside className="w-44 sm:w-52 border-r border-gray-200 bg-white flex flex-col p-4 shrink-0">
          {/* Logo */}
          <div className="mb-6 px-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-bold text-white shadow-sm shadow-blue-200">
              T
            </div>
            <div>
              <h4 className="text-[13px] font-black text-gray-900 tracking-wide leading-none">TENSU</h4>
              <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest leading-none mt-1">BUSINESS</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="space-y-1 flex-1">
            {navItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Status */}
          <div className="pt-4 border-t border-gray-100 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">API подключён</span>
            </div>
          </div>
        </aside>

        {/* ── Content ── */}
        <main className="flex-1 flex flex-col min-w-0 bg-gray-50">

          {/* Header */}
          <header className="h-14 border-b border-gray-200 bg-white flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-gray-900">Almaty Jiu Jitsu Top Team</h3>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[9px] font-bold uppercase text-blue-600 tracking-wider border border-blue-200">Premium</span>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-700 transition-colors">
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <div className="h-7 w-px bg-gray-200" />
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-bold text-xs text-white">R</div>
                <div className="hidden sm:block">
                  <h5 className="text-xs font-bold text-gray-900 leading-none">Рахат Исмаилов</h5>
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-wider mt-0.5">Владелец клуба</p>
                </div>
              </div>
            </div>
          </header>

          {/* Canvas */}
          <div className="flex-1 p-5 overflow-y-auto min-w-0">

            {/* ─── OVERVIEW ─── */}
            {activeTab === 'overview' && (
              <div className="space-y-5">
                {/* KPI cards */}
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                  {[
                    { label: 'Ученики',       value: '235',          change: '+12%', blue: true  },
                    { label: 'Посещаемость',  value: '78%',          change: '+8%',  blue: false },
                    { label: 'Выручка мес.',  value: '2 450 000 ₸',  change: '+15%', blue: false },
                    { label: 'Новые аб.',     value: '32',           change: '+9%',  blue: true  },
                  ].map((s, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 space-y-2 hover:border-blue-200 transition-colors shadow-sm">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</p>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="text-xl font-black text-gray-900 whitespace-nowrap">{s.value}</span>
                        <span className={`text-[10px] font-bold flex-shrink-0 ${s.blue ? 'text-blue-600' : 'text-violet-600'}`}>{s.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid lg:grid-cols-3 gap-5">
                  {/* Bar chart */}
                  <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Динамика платежей</h4>
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-blue-200">Май 2026</span>
                    </div>
                    <div className="h-40 flex items-end justify-between gap-2 px-1">
                      {[40, 65, 88, 50, 95, 30, 20].map((h, i) => (
                        <div
                          key={i}
                          className={`w-full rounded-t-lg transition-colors ${
                            i === 2 ? 'bg-gradient-to-t from-blue-600 to-blue-400' :
                            i === 4 ? 'bg-gradient-to-t from-violet-600 to-violet-400' :
                            'bg-gray-100 hover:bg-blue-100'
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Donut */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-4">Типы абонементов</h4>
                    <div className="flex items-center justify-center h-40">
                      <div className="w-28 h-28 rounded-full border-[6px] border-blue-100 flex flex-col items-center justify-center relative shadow-inner">
                        <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-blue-600 border-r-violet-500" style={{ transform: 'rotate(-45deg)' }} />
                        <span className="text-xl font-black text-gray-900 leading-none">324</span>
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">ВСЕГО</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TRAINERS (salary calc) ─── */}
            {activeTab === 'trainers' && (
              <div className="grid md:grid-cols-2 gap-5">
                {/* Sliders */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-5 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      Калькулятор зарплаты
                    </h4>
                    <span className="text-[8px] font-bold text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full uppercase tracking-wider bg-blue-50">LIVE</span>
                  </div>

                  {[
                    { label: 'Базовая ставка', val: `${baseRate.toLocaleString()} ₸`, min: 5000, max: 30000, step: 1000, setter: setBaseRate, value: baseRate },
                    { label: 'Проведено тренировок', val: String(sessions), min: 4, max: 30, step: 1, setter: setSessions, value: sessions },
                    { label: 'Общие продажи', val: `${revenue.toLocaleString()} ₸`, min: 0, max: 500000, step: 10000, setter: setRevenue, value: revenue },
                    { label: 'Процент от продаж', val: `${percent}%`, min: 10, max: 50, step: 5, setter: setPercent, value: percent },
                  ].map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-semibold">
                        <span className="text-gray-500">{f.label}:</span>
                        <span className="text-gray-900 font-bold">{f.val}</span>
                      </div>
                      <input
                        type="range" min={f.min} max={f.max} step={f.step} value={f.value}
                        onChange={(e) => f.setter(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-lg">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="space-y-4 relative z-10">
                    <span className="text-[8px] font-bold text-white/70 uppercase tracking-widest border border-white/20 px-2 py-0.5 rounded-full inline-block">ИТОГОВЫЙ РАСЧЁТ</span>
                    <div>
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Зарплата к выплате:</p>
                      <h2 className="text-3xl font-black text-white mt-1">{calculateSalary().toLocaleString()} ₸</h2>
                    </div>
                    <div className="border-t border-white/20 pt-4 space-y-2 text-[10px] font-medium text-white/60">
                      <div className="flex justify-between">
                        <span>Базовая выплата:</span>
                        <span className="text-white font-bold">{(baseRate * sessions).toLocaleString()} ₸</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Бонус с продаж ({percent}%):</span>
                        <span className="text-white font-bold">{(revenue * percent / 100).toLocaleString()} ₸</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STUDENTS ─── */}
            {activeTab === 'students' && (
              <div className="space-y-4">
                {/* Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Реестр студентов</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">50 на странице · всего 130 · новых <span className="text-blue-600 font-bold">13</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-xl text-[11px] font-bold tracking-wide transition-colors flex items-center gap-1.5 shadow-sm">
                      <UserPlus className="w-3.5 h-3.5" />
                      Добавить
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-xl text-[11px] font-bold tracking-wide hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5" />
                      CSV
                    </button>
                  </div>
                </div>

                {/* Search */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      type="text" placeholder="Имя, телефон, группа"
                      className="w-full bg-white border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-xs text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2 pl-4 pr-8 text-xs text-gray-600 focus:outline-none focus:border-blue-400">
                      <option>Все статусы</option>
                      <option>Активен</option>
                      <option>Истек</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-[11px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5" />
                    Фильтр
                  </button>
                </div>

                {/* Table */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          {['Студент','Группа','Абонемент','Окончание','Контакт'].map(h => (
                            <th key={h} className="py-3 px-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {students.map((s, i) => (
                          <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                                  i % 2 === 0 ? 'bg-blue-50 text-blue-600' : 'bg-violet-50 text-violet-600'
                                }`}>{s.name.charAt(0)}</div>
                                <div>
                                  <div className="text-xs font-bold text-gray-900">{s.name}</div>
                                  <span className="text-[9px] text-gray-400 border border-gray-100 rounded px-1 py-0.5 mt-0.5 inline-block">без Telegram</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-xs text-gray-700">{s.group}</div>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border ${statusStyle(s.status)}`}>
                                {statusLabel(s.status)}
                              </span>
                              <div className="text-[9px] text-gray-400 mt-1">{s.pass}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-xs text-gray-700">{s.end}</div>
                              <div className={`text-[9px] mt-0.5 ${s.status === 'expired' ? 'text-violet-600 font-medium' : 'text-gray-400'}`}>
                                {s.status === 'expired' ? 'Просрочен' : 'Осталось 12 дн.'}
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-xs text-gray-700">{s.phone}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ─── SCHEDULE ─── */}
            {activeTab === 'schedule' && (
              <div className="space-y-5">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Тренировок', val: '15', icon: Calendar, blue: true },
                    { label: 'Запланировано', val: '13', icon: Clock, blue: false },
                    { label: 'Проведено', val: '2', icon: CheckCircle2, blue: true },
                    { label: 'Отменено', val: '0', icon: AlertCircle, blue: false },
                  ].map((s, i) => (
                    <div key={i} className={`bg-white border rounded-2xl p-4 space-y-2 shadow-sm ${s.blue ? 'border-blue-200' : 'border-gray-200'}`}>
                      <div className="flex items-start justify-between">
                        <p className={`text-[9px] font-bold uppercase tracking-widest ${s.blue ? 'text-blue-500' : 'text-gray-400'}`}>{s.label}</p>
                        <s.icon className={`w-4 h-4 ${s.blue ? 'text-blue-400' : 'text-gray-300'}`} />
                      </div>
                      <div className={`text-2xl font-black ${s.blue ? 'text-blue-600' : 'text-gray-900'}`}>{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Calendar */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">
                  <div className="flex-1 p-5 border-r border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <h4 className="text-sm font-bold text-gray-900">Май 2026 г.</h4>
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                      {['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(d => (
                        <div key={d} className="bg-gray-50 py-2 text-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">{d}</div>
                      ))}
                      {Array.from({ length: 35 }).map((_, i) => {
                        const dayNum = i - 3;
                        const inMonth = dayNum > 0 && dayNum <= 31;
                        const hasA = dayNum === 4 || dayNum === 11 || dayNum === 18;
                        const hasB = dayNum === 5 || dayNum === 12 || dayNum === 19;
                        return (
                          <div key={i} className={`bg-white min-h-[70px] p-1.5 hover:bg-gray-50 transition-colors ${inMonth ? '' : 'opacity-30'}`}>
                            <span className="text-[11px] font-semibold text-gray-700 px-0.5">
                              {inMonth ? dayNum : (dayNum <= 0 ? 30 + dayNum : dayNum - 31)}
                            </span>
                            <div className="mt-1 space-y-0.5">
                              {hasA && <>
                                <div className="bg-blue-50 border border-blue-200 rounded px-1 py-0.5 text-[7px] text-blue-600 font-semibold truncate">09:00 · Girls</div>
                                <div className="bg-violet-50 border border-violet-200 rounded px-1 py-0.5 text-[7px] text-violet-600 font-semibold truncate">18:00 · MMA</div>
                              </>}
                              {hasB && <div className="bg-blue-50 border border-blue-200 rounded px-1 py-0.5 text-[7px] text-blue-600 font-semibold truncate">10:00 · Каратэ</div>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Day panel */}
                  <div className="w-full md:w-56 p-5 bg-gray-50">
                    <h5 className="text-sm font-bold text-gray-900 mb-1">29 мая 2026 г.</h5>
                    <p className="text-[10px] text-gray-400 mb-5">0 тренировок</p>
                    <div className="border border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2">
                      <Calendar className="w-6 h-6 text-gray-200" />
                      <p className="text-[10px] text-gray-400">Нет тренировок</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── OTHER TABS ─── */}
            {activeTab !== 'overview' && activeTab !== 'trainers' && activeTab !== 'students' && activeTab !== 'schedule' && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-400 font-medium">Раздел доступен в демо-версии</p>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
