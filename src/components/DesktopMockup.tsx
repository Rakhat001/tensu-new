"use client";

import { useState } from 'react';
import {
  BarChart3,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Sparkles,
  RefreshCw,
  Search,
  Check,
  UserPlus,
  Download,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export function DesktopMockup() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'schedule' | 'trainers' | 'crm'>('overview');
  
  // Trainer salary calculator state
  const [baseRate, setBaseRate] = useState(15000);
  const [sessions, setSessions] = useState(12);
  const [revenue, setRevenue] = useState(180000);
  const [percent, setPercent] = useState(30);

  const calculateTrainerSalary = () => {
    return Math.round((baseRate * sessions) + (revenue * (percent / 100)));
  };

  // Mock Students data
  const students = [
    { name: 'Алина Сериковна', group: 'Младшая группа', level: 'Начинающие', pass: 'Базовый месяц', status: 'active', end: '17.06.2026', phone: '+7 707 123 45 67' },
    { name: 'Арслан Руслан', group: 'Взрослые (MMA)', level: 'Продвинутые', pass: 'Безлимитный год', status: 'frozen', end: '01.09.2026', phone: '+7 701 987 65 43' },
    { name: 'Руслан Хайбуллин', group: 'Каратэ дети', level: 'Начинающие', pass: '8 занятий', status: 'expired', end: '12.05.2026', phone: '+7 778 111 22 33' },
    { name: 'Айбек Кайржан', group: 'Бразильское джиу-джитсу', level: 'Средние', pass: 'Утренний абонемент', status: 'active', end: '24.06.2026', phone: '+7 707 905 58 51' },
    { name: 'Мадияр Султан', group: 'Взрослые (MMA)', level: 'Продвинутые', pass: 'Разовый', status: 'active', end: '10.06.2026', phone: '+7 747 658 87 80' },
  ];

  return (
    <div className="w-full relative bg-[#09090b] rounded-[1.75rem] border border-white/10 shadow-2xl overflow-hidden select-none">
      
      {/* Top Window Bar */}
      <div className="h-11 bg-white/5 border-b border-white/5 flex items-center justify-between px-5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-black/10" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-black/10" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-black/10" />
        </div>
        <div className="text-[10px] font-extrabold tracking-wider text-muted-foreground uppercase absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Tensu Web Admin OS — business-test.tensu.kz</span>
        </div>
        <div className="w-16" />
      </div>

      {/* Main Grid */}
      <div className="flex min-h-[520px] md:min-h-[580px] bg-[#0A0D1B]">
        
        {/* Left Sidebar */}
        <aside className="w-44 sm:w-52 border-r border-white/5 bg-[#080B16] flex flex-col p-4 shrink-0">
          <div className="mb-6 px-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-white shadow-md shadow-primary/20">
              T
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-white tracking-wide leading-none">TENSU</h4>
              <p className="text-[9px] font-extrabold text-cyan-400 uppercase tracking-widest leading-none mt-1">BUSINESS</p>
            </div>
          </div>

          <nav className="space-y-1 flex-1">
            {[
              { id: 'overview', icon: BarChart3, label: 'Обзор' },
              { id: 'students', icon: Users, label: 'Студенты' },
              { id: 'schedule', icon: Calendar, label: 'Расписание' },
              { id: 'trainers', icon: DollarSign, label: 'Тренеры' },
              { id: 'crm', icon: TrendingUp, label: 'CRM' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-white border border-primary/30'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/5 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest leading-none">API ПОДКЛЮЧЕН</span>
            </div>
          </div>
        </aside>

        {/* Content Canvas */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#0A0D1B]">
          
          <header className="h-16 border-b border-white/5 bg-[#090C1A] flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white tracking-wide">Almaty Jiu Jitsu Top Team</h3>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-[9px] font-extrabold uppercase text-cyan-400 tracking-wider border border-cyan-500/20">Premium</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg border border-white/5 hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <div className="h-8 w-px bg-white/5" />
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center font-bold text-xs text-white">
                  R
                </div>
                <div className="hidden sm:block">
                  <h5 className="text-xs font-bold text-white">Рахат Исмаилов</h5>
                  <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider leading-none mt-0.5">Владелец клуба</p>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 p-6 overflow-y-auto min-w-0">
            
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {[
                    { label: 'Ученики', value: '235', change: '+12%', color: 'primary' },
                    { label: 'Посещаемость', value: '78%', change: '+8%', color: 'cyan' },
                    { label: 'Выручка мес.', value: '2 450 000 ₸', change: '+15%', color: 'emerald' },
                    { label: 'Новые аб.', value: '32', change: '+9%', color: 'purple' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 relative overflow-hidden group hover:border-white/20 transition-all shadow-sm">
                      <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                      <div className="flex items-baseline justify-between gap-1.5 flex-nowrap overflow-hidden">
                        <span className="text-xl font-bold text-white whitespace-nowrap">{stat.value}</span>
                        <span className="text-xs font-bold text-emerald-400 flex-shrink-0">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white tracking-wide uppercase">Динамика платежей</h4>
                      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Май 2026</span>
                    </div>
                    <div className="h-44 flex items-end gap-3 px-2 pt-4 relative">
                       <div className="w-full h-full flex items-end justify-between gap-2">
                         <div className="w-full bg-white/10 hover:bg-primary rounded-t-md transition-colors" style={{ height: '40%' }} />
                         <div className="w-full bg-white/10 hover:bg-primary rounded-t-md transition-colors" style={{ height: '65%' }} />
                         <div className="w-full bg-gradient-to-t from-primary to-cyan-500 rounded-t-md" style={{ height: '88%' }} />
                         <div className="w-full bg-white/10 hover:bg-primary rounded-t-md transition-colors" style={{ height: '50%' }} />
                         <div className="w-full bg-gradient-to-t from-primary to-purple-500 rounded-t-md" style={{ height: '95%' }} />
                         <div className="w-full bg-white/10 hover:bg-primary rounded-t-md transition-colors" style={{ height: '30%' }} />
                         <div className="w-full bg-white/10 hover:bg-primary rounded-t-md transition-colors" style={{ height: '20%' }} />
                       </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 shadow-sm">
                    <h4 className="text-xs font-bold text-white tracking-wide uppercase">Типы абонементов</h4>
                    <div className="flex items-center justify-center py-2 h-44">
                       <div className="w-28 h-28 rounded-full border-[6px] border-primary/20 flex flex-col items-center justify-center relative">
                          <span className="text-xl font-extrabold text-white leading-none">324</span>
                          <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mt-1">ВСЕГО</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'trainers' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <h4 className="text-xs font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Калькулятор зарплаты</span>
                    </h4>
                    <span className="text-[8px] font-extrabold text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded-full uppercase tracking-wider bg-cyan-400/10">LIVE</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-muted-foreground">
                        <span>Базовая ставка:</span>
                        <span className="text-white font-extrabold">{baseRate.toLocaleString()} ₸</span>
                      </div>
                      <input type="range" min="5000" max="30000" step="1000" value={baseRate} onChange={(e) => setBaseRate(Number(e.target.value))} className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-muted-foreground">
                        <span>Проведено тренировок:</span>
                        <span className="text-white font-extrabold">{sessions}</span>
                      </div>
                      <input type="range" min="4" max="30" step="1" value={sessions} onChange={(e) => setSessions(Number(e.target.value))} className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-muted-foreground">
                        <span>Общие продажи (выручка):</span>
                        <span className="text-white font-extrabold">{revenue.toLocaleString()} ₸</span>
                      </div>
                      <input type="range" min="0" max="500000" step="10000" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-muted-foreground">
                        <span>Процент от продаж:</span>
                        <span className="text-white font-extrabold">{percent}%</span>
                      </div>
                      <input type="range" min="10" max="50" step="5" value={percent} onChange={(e) => setPercent(Number(e.target.value))} className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl pointer-events-none rounded-full" />
                  
                  <div className="space-y-4 relative z-10">
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-[8px] font-extrabold uppercase text-white tracking-widest inline-block">ИТОГОВЫЙ РАСЧЕТ</span>
                    
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-primary-300 uppercase tracking-widest text-primary">Зарплата тренера к выплате:</p>
                      <h2 className="text-3xl font-black text-white">{calculateTrainerSalary().toLocaleString()} ₸</h2>
                    </div>

                    <div className="border-t border-primary/20 pt-4 space-y-2 text-[10px] font-bold text-white/60">
                      <div className="flex justify-between">
                        <span>Базовая выплата:</span>
                        <span className="text-white font-bold">{(baseRate * sessions).toLocaleString()} ₸</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Бонус с продаж ({percent}%):</span>
                        <span className="text-white font-bold">{(revenue * (percent / 100)).toLocaleString()} ₸</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div className="space-y-6">
                {/* Header Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-white">Реестр студентов</h3>
                    <p className="text-[10px] text-muted-foreground mt-1">50 на этой странице · всего 130 · активные/новые <span className="text-emerald-400 font-bold">13</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-white text-black px-4 py-2 rounded-xl text-[11px] font-extrabold tracking-wide hover:bg-white/90 transition-colors flex items-center gap-1.5">
                      <UserPlus className="w-3.5 h-3.5" />
                      Добавить студента
                    </button>
                    <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl text-[11px] font-extrabold tracking-wide hover:bg-white/10 transition-colors flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5" />
                      CSV
                    </button>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Имя, телефон, Telegram, группа" 
                      className="w-full bg-[#080B16] border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <select className="appearance-none bg-[#080B16] border border-white/10 rounded-xl py-2 pl-4 pr-10 text-xs text-white focus:outline-none focus:border-primary/50">
                        <option>Все статусы</option>
                        <option>Активен</option>
                        <option>Истек</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    </div>
                    <button className="bg-[#080B16] border border-white/10 text-white px-4 py-2 rounded-xl text-[11px] font-extrabold tracking-wide hover:bg-white/5 transition-colors flex items-center gap-1.5">
                      <Filter className="w-3.5 h-3.5" />
                      Применить
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-[#080B16] border border-white/10 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/5">
                          <th className="py-3 px-4 text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Студент</th>
                          <th className="py-3 px-4 text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Группа</th>
                          <th className="py-3 px-4 text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Абонемент</th>
                          <th className="py-3 px-4 text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Окончание</th>
                          <th className="py-3 px-4 text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Контакт</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {students.map((s, i) => (
                          <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
                                  i % 3 === 0 ? 'bg-cyan-500/20 text-cyan-400' : 
                                  i % 3 === 1 ? 'bg-purple-500/20 text-purple-400' : 
                                  'bg-emerald-500/20 text-emerald-400'
                                }`}>
                                  {s.name.charAt(0)}
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-white flex items-center gap-2">
                                    {s.name}
                                  </div>
                                  <span className="text-[10px] text-muted-foreground border border-white/10 rounded-md px-1.5 py-0.5 mt-1 inline-block bg-white/5">без Telegram</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-xs text-white">{s.group}</div>
                              <div className="text-[10px] text-muted-foreground">{s.level}</div>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                s.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                s.status === 'expired' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                s.status === 'frozen' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                              }`}>
                                {s.status === 'active' ? 'Активен' : s.status === 'expired' ? 'Истек' : s.status === 'frozen' ? 'Заморожен' : 'Новый'}
                              </span>
                              <div className="text-[10px] text-muted-foreground mt-1">{s.pass}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-xs text-white">{s.end}</div>
                              <div className={`text-[10px] font-medium ${s.status === 'expired' ? 'text-red-400' : 'text-muted-foreground'}`}>
                                {s.status === 'expired' ? 'Просрочен' : 'Осталось 12 дн.'}
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-xs text-white">{s.phone}</div>
                              <div className="text-[10px] text-muted-foreground">Almaty Jiu Jitsu...</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="space-y-6">
                {/* Top Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">Тренировок</p>
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-white">15</div>
                    <p className="text-[9px] text-muted-foreground">Период: 01 мая - 31 мая</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">Запланировано</p>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-white">13</div>
                    <p className="text-[9px] text-muted-foreground">В расписании</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">Проведено</p>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-400">2</div>
                    <p className="text-[9px] text-emerald-400/70">Успешно</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="text-[10px] font-extrabold text-red-400 uppercase tracking-widest">Отменено</p>
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="text-2xl font-bold text-red-400">0</div>
                    <p className="text-[9px] text-red-400/70">Требуют внимания</p>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 bg-[#080B16] border border-white/10 rounded-2xl p-4">
                   <div className="flex-1 min-w-[240px] space-y-1.5">
                     <label className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest">Период</label>
                     <div className="flex items-center gap-2">
                       <input type="date" value="2026-05-01" className="w-full min-w-0 bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] sm:text-xs text-white [color-scheme:dark]" readOnly />
                       <span className="text-muted-foreground text-xs">-</span>
                       <input type="date" value="2026-05-31" className="w-full min-w-0 bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] sm:text-xs text-white [color-scheme:dark]" readOnly />
                     </div>
                   </div>
                   <div className="w-[110px] space-y-1.5">
                     <label className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest">Секция</label>
                     <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-white focus:outline-none">
                        <option>Все секции</option>
                      </select>
                   </div>
                   <div className="w-[120px] space-y-1.5">
                     <label className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest">Группа</label>
                     <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-white focus:outline-none">
                        <option>Все группы</option>
                      </select>
                   </div>
                   <div className="w-[120px] space-y-1.5">
                     <label className="text-[9px] font-extrabold text-muted-foreground uppercase tracking-widest">Тренер</label>
                     <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-white focus:outline-none">
                        <option>Все тренера</option>
                      </select>
                   </div>
                   <div className="flex items-end">
                     <button className="bg-white text-black px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-white/90 transition-colors h-[30px] flex items-center justify-center w-full sm:w-auto">
                        Загрузить
                     </button>
                   </div>
                </div>

                {/* Calendar Grid */}
                <div className="bg-[#080B16] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                  <div className="flex-1 p-5 border-r border-white/5">
                    <div className="flex items-center justify-between mb-6">
                      <button className="p-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <h4 className="text-sm font-bold text-white">Май 2026 г.</h4>
                      <button className="p-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                      {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                        <div key={day} className="bg-[#080B16] py-2 text-center text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">
                          {day}
                        </div>
                      ))}
                      
                      {Array.from({ length: 35 }).map((_, i) => {
                        const dayNum = i - 3;
                        const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                        const hasWorkout1 = dayNum === 4 || dayNum === 11 || dayNum === 18;
                        const hasWorkout2 = dayNum === 5 || dayNum === 12 || dayNum === 19;
                        
                        return (
                          <div key={i} className={`bg-[#080B16] min-h-[80px] p-1.5 transition-colors hover:bg-white/[0.02] ${isCurrentMonth ? 'text-white' : 'text-white/20'}`}>
                            <span className="text-[11px] font-bold px-1">{isCurrentMonth ? dayNum : (dayNum <= 0 ? 30 + dayNum : dayNum - 31)}</span>
                            
                            <div className="mt-1 space-y-1">
                              {hasWorkout1 && (
                                <>
                                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded truncate px-1 py-0.5 text-[8px] text-cyan-400 font-medium">09:11 · Girls</div>
                                  <div className="bg-purple-500/10 border border-purple-500/20 rounded truncate px-1 py-0.5 text-[8px] text-purple-400 font-medium">06:00 · Младшая</div>
                                </>
                              )}
                              {hasWorkout2 && (
                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded truncate px-1 py-0.5 text-[8px] text-emerald-400 font-medium">04:14 · Взрослые</div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="w-full md:w-64 p-5 bg-white/[0.01]">
                    <h5 className="text-sm font-bold text-white mb-1">29 мая 2026 г.</h5>
                    <p className="text-[10px] text-muted-foreground mb-6">0 тренировок в выбранный день</p>
                    
                    <div className="border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
                      <Calendar className="w-6 h-6 text-white/20" />
                      <p className="text-[11px] text-muted-foreground font-medium">На эту дату тренировок нет</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'overview' && activeTab !== 'trainers' && activeTab !== 'students' && activeTab !== 'schedule' && (
              <div className="flex items-center justify-center h-64 text-sm font-bold text-muted-foreground">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                    <Sparkles className="w-5 h-5 text-white/20" />
                  </div>
                  <p>Содержимое вкладки доступно в демо-версии</p>
                </div>
              </div>
            )}
            
          </div>
        </main>
      </div>
    </div>
  );
}
