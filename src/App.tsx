/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  UserCircle2, 
  Smartphone, 
  Monitor, 
  Package, 
  Truck, 
  ShieldCheck, 
  Zap, 
  BrainCircuit, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  ClipboardList, 
  Users, 
  Search, 
  Presentation, 
  UserPlus, 
  TestTube2, 
  Settings, 
  LayoutDashboard, 
  MessageSquareQuote,
  AlertCircle,
  Menu,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-16 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
  </div>
);

const PhoneMockup = ({ color = "blue", imageSrc = "./0.1.jpg" }: { color?: string; imageSrc?: string }) => (
  <div className="relative mx-auto border-slate-900 bg-slate-900 border-[8px] rounded-[2.5rem] h-[400px] w-[200px] shadow-2xl">
    <div className="h-[25px] w-[2px] bg-slate-900 absolute -start-[10px] top-[72px] rounded-s-lg"></div>
    <div className="h-[35px] w-[2px] bg-slate-900 absolute -start-[10px] top-[104px] rounded-s-lg"></div>
    <div className="h-[35px] w-[2px] bg-slate-900 absolute -start-[10px] top-[145px] rounded-s-lg"></div>
    <div className="h-[45px] w-[2px] bg-slate-900 absolute -end-[10px] top-[104px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
      <img src={imageSrc} alt="酒店智能体界面" className="w-full h-full object-cover" />
    </div>
  </div>
);

const TabletMockup = ({ color = "slate", imageSrc = "./0.3.jpg" }: { color?: string; imageSrc?: string }) => (
  <div className="relative mx-auto border-slate-900 bg-slate-900 border-[10px] rounded-[2rem] h-[320px] w-full max-w-[550px] shadow-2xl transition-all duration-500">
    <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-white relative">
      <img src={imageSrc} alt="PC管理端界面" className="w-full h-full object-cover" />
    </div>
  </div>
);

const DetailedInfoItem = ({ icon: Icon, title, color, audience, modules, future, isPhone, tabs, phoneImage }: any) => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  const displayData = tabs ? tabs[activeTab] : { audience, modules, future };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm mb-12 last:mb-0 hover:shadow-md transition-all overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">{title}</h3>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${color}-50 text-${color}-600 shadow-sm border border-${color}-100`}>
              <Icon size={28} />
            </div>
            <div className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-base font-semibold rounded-full uppercase tracking-wider shadow-sm">
              面向对象：{displayData.audience}
            </div>
          </div>
          
          {tabs && (
            <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-100/80 rounded-2xl w-fit border border-slate-200/50">
              {tabs.map((tab: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 text-base font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === idx 
                      ? `bg-slate-800 text-white shadow-md` 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          )}
          
          <div className="grid gap-6">
            {displayData.modules.map((item: any, idx: number) => (
              <motion.div 
                key={`${activeTab}-${idx}`} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="group"
              >
                <h4 className={`text-base font-bold text-slate-900 mb-2 flex items-center gap-2 group-hover:text-${color}-600 transition-colors`}>
                  <div className={`w-1.5 h-4 bg-${color}-500 rounded-full`} />
                  {item.name}
                </h4>
                <p className="text-slate-500 text-base leading-relaxed pl-3.5 border-l border-slate-100 ml-0.5">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {displayData.future && (
            <div className={`mt-8 p-5 rounded-xl bg-slate-50 border-l-4 border-${color}-400`}>
              <p className="text-slate-600 text-base leading-relaxed flex gap-2">
                <span className="shrink-0 text-base">🚀</span>
                <span><strong className="text-slate-700">迭代方向：</strong>{displayData.future}</span>
              </p>
            </div>
          )}
        </div>
        <div className="w-full lg:w-[550px] shrink-0 lg:sticky lg:top-8 transition-all duration-500">
          {isPhone ? (
            <div className="max-w-[450px] mx-auto">
              <PhoneMockup color={color} imageSrc={phoneImage} />
            </div>
          ) : (
            <TabletMockup color={color} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Card = ({ title, content, icon: Icon, color = "blue" }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-${color}-50 text-${color}-600`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
    <div className="text-slate-600 text-base leading-relaxed">{content}</div>
  </motion.div>
);

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id], div[id], [id^="step-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tocItems = [
    { id: 'part1', label: '第一部分', subtitle: '酒店智能体介绍', isMain: true },
    { id: 'background', label: '公司背景', subtitle: '及"黄小西"IP', indent: true },
    { id: 'product-intro', label: '酒店智能体介绍', subtitle: '产品概念', indent: true },
    { id: 'benefits', label: '三大核心赋能', subtitle: '赋能价值', indent: true },
    { id: 'showcases', label: '部分成效展示', subtitle: '成功案例', indent: true },
    { id: 'part2', label: '第二部分', subtitle: '运营流程标准', isMain: true },
    { id: 'roadmap', label: '全流程落地图谱', subtitle: '', isMain: true },
    { id: 'step-1', label: 'Step 1', subtitle: '获客与建联', indent: true },
    { id: 'step-2', label: 'Step 2', subtitle: '上门演示与签约', indent: true },
    { id: 'step-3', label: 'Step 3', subtitle: '签约后酒店入驻', indent: true },
    { id: 'step-4', label: 'Step 4', subtitle: '物料确认', indent: true },
    { id: 'step-5', label: 'Step 5', subtitle: '系统测试', indent: true },
    { id: 'step-6', label: 'Step 6', subtitle: '现场部署与员工培训', indent: true },
    { id: 'step-7', label: 'Step 7', subtitle: '日常维护与运营', indent: true },
    { id: 'step-8', label: 'Step 8', subtitle: '续费支持与交接', indent: true },
    { id: 'part3', label: '第三部分', subtitle: '考核指标', isMain: true },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group">
      {/* Hidden trigger area */}
      <div className="absolute left-0 top-0 w-4 h-full" />
      
      {/* TOC Container - hidden by default, shown on hover */}
      <div className="flex items-start -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">
        {/* Toggle Button (visible when TOC is hidden) */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-r-xl border border-l-0 border-slate-200 cursor-pointer group-hover:opacity-0 transition-opacity">
          <Menu size={20} className="text-slate-600" />
        </div>
        
        {/* TOC Content */}
        <div className="bg-white/95 backdrop-blur-md shadow-xl border-r border-slate-200 py-6 px-4 w-64 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-2 mb-6 px-2">
            <BookOpen size={18} className="text-blue-600" />
            <span className="font-bold text-slate-800 text-sm">目录导航</span>
          </div>
          
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left rounded-lg transition-all duration-200 ${
                  item.indent ? 'pl-6 pr-3 py-2 text-xs' : 'px-3 py-2.5 text-sm'
                } ${
                  activeSection === item.id
                    ? item.isMain
                      ? 'bg-blue-100 text-blue-800 font-bold'
                      : 'bg-blue-50 text-blue-700 font-semibold'
                    : item.isMain
                      ? 'text-slate-800 font-semibold hover:bg-slate-100'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <div className="flex flex-col">
                  <span className={item.isMain ? 'font-bold' : item.indent ? 'font-medium' : 'font-medium'}>
                    {item.label}
                  </span>
                  {item.subtitle && (
                    <span className={`opacity-70 mt-0.5 ${item.indent ? 'text-[10px]' : 'text-xs'}`}>
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ number, title, tasks, materials, note, trainingDetails, contact }: any) => (
  <motion.div 
    id={`step-${number}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative pl-16 pb-16 last:pb-0 group"
  >
    {/* Connection Line */}
    <div className="absolute left-[31px] top-10 bottom-0 w-0.5 bg-slate-200 group-last:hidden" />
    
    {/* Step Number Indicator */}
    <div className="absolute left-0 top-0 w-16 h-16 flex flex-col items-center justify-start z-10">
      <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {number < 10 ? `0${number}` : number}
      </div>
    </div>
    
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-500">
      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-4 tracking-tight">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Step {number}</span>
        {title}
      </h3>
      
      <div className="grid lg:grid-cols-1 gap-10">
        {/* Actions */}
        <div className="space-y-6">
          <h4 className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <div className="w-1 h-3 bg-blue-600 rounded-full" />
            运营动作 / Actions
          </h4>
          <div className="grid gap-4">
            {tasks.map((task: any, idx: number) => (
              <div key={idx} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100/50 hover:bg-white hover:border-blue-200 transition-colors">
                <div className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-base">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                   {task.name}
                </div>
                <p className="text-slate-500 text-base leading-relaxed whitespace-pre-wrap">{task.content}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {trainingDetails && (
        <div className="mt-10 pt-10 border-t border-slate-100">
          <h4 className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <div className="w-1 h-3 bg-blue-600 rounded-full" />
            培训内容 / Training Content
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingDetails.map((section: any, idx: number) => (
              <div key={idx} className="space-y-4">
                <div className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2 text-blue-600">
                  {section.title}
                </div>
                <ul className="space-y-2">
                  {section.items.map((item: string, i: number) => (
                    <li key={i} className="text-sm text-slate-500 flex gap-2 leading-relaxed">
                      <span className="text-blue-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {note && (
        <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-2xl">
          <h5 className="text-amber-800 font-bold text-base mb-3 flex items-center gap-2">
            <AlertCircle size={16} /> 注意事项 / Note
          </h5>
          <p className="text-amber-700 text-base leading-relaxed whitespace-pre-wrap">
            {note}
          </p>
        </div>
      )}

      {materials && (
        <div className="mt-8 pt-8 border-t border-slate-100/50">
          <h4 className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <div className="w-1 h-3 bg-indigo-500 rounded-full" />
            关联材料 / Materials
          </h4>
          <div className="flex flex-wrap gap-2">
            {materials.map((m: string, i: number) => (
              <div key={i} className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 text-sm flex items-center gap-2 hover:bg-white hover:border-indigo-200 hover:text-indigo-600 hover:shadow-sm transition-all">
                <Package size={14} className="text-slate-400" />
                {m}
              </div>
            ))}
          </div>
        </div>
      )}

      {contact && (
        <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-2xl">
          <div className="flex items-center gap-2 text-blue-700">
            <UserCircle2 size={18} />
            <span className="font-semibold text-sm">{contact}</span>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

const BenefitBlock = ({ icon: Icon, title, subtitle, color, items, imageSrc }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all mb-10 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className={`w-16 h-16 bg-${color}-50 text-${color}-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-${color}-100 mb-8`}>
            <Icon size={32} />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-extrabold mb-8 flex items-center gap-3 tracking-tight">
            {title}<span className="text-slate-200 font-normal text-lg">|</span><span className="text-slate-500 text-lg font-medium">{subtitle}</span>
          </h3>

          <div className="grid gap-4">
            {items.map((item: string, i: number) => (
              <div 
                key={i} 
                className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 transition-all"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold bg-slate-900 text-white shadow-sm">
                  {i + 1}
                </div>
                <p className="text-base leading-relaxed text-slate-700 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[320px] shrink-0 flex items-center justify-center bg-slate-50/50 rounded-[2rem] p-8">
          <div className="scale-90">
            <PhoneMockup color={color} imageSrc={imageSrc} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HotelDataCard = ({ name, type, metrics, color, feedback }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
  >
    <div className={`p-8 bg-gradient-to-br ${color} text-white`}>
      <div className="flex justify-between items-start mb-5">
        <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold uppercase tracking-wider">
          {type}
        </div>
        <div className="px-3 py-1.5 bg-yellow-400/20 backdrop-blur-md rounded-full text-sm font-semibold text-yellow-400 uppercase tracking-wider border border-yellow-400/30">
          {metrics.rating}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2 tracking-tight">{name}</h3>
      <div className="text-white/80 text-base flex items-center gap-2">
        <Clock size={16} /> 上线于 {metrics.onlineDate} ({metrics.daysOnline}天)
      </div>
    </div>
    
    <div className="p-8 pb-4 grid grid-cols-2 gap-y-8 gap-x-6 bg-white">
      <div className="space-y-2">
        <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">AI 问答 (累计)</div>
        <div className="text-3xl font-black text-slate-900 tabular-nums tracking-tight">{metrics.aiQA}</div>
      </div>
      <div className="space-y-2 border-l border-slate-50 pl-6">
        <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">码牌总数</div>
        <div className="text-3xl font-black text-slate-900 tabular-nums tracking-tight">{metrics.qrCodes}</div>
      </div>
      
      <div className="col-span-2 h-px bg-slate-50" />
      
      <div className="space-y-3">
        <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">工单执行效率</div>
        <div className="flex items-end justify-between mb-1">
          <div className="text-xl font-bold text-slate-800 tabular-nums tracking-tight">
            {metrics.ticketsProcessed} <span className="text-sm font-medium text-slate-400">/ {metrics.ticketsSubmitted}</span>
          </div>
          <div className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {Math.round((metrics.ticketsProcessed / metrics.ticketsSubmitted) * 100)}%
          </div>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: `${(metrics.ticketsProcessed/metrics.ticketsSubmitted)*100}%` }}
             viewport={{ once: true }}
             className="bg-blue-500 h-full rounded-full" 
           />
        </div>
      </div>
      
      <div className="space-y-2 border-l border-slate-50 pl-6">
        <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">用户转化率</div>
        <div className="text-xl font-bold text-slate-800 tabular-nums tracking-tight">
          {metrics.conversionRate}
        </div>
        <div className="text-sm text-slate-400 mt-1.5 leading-relaxed">
          问答数÷上线天数÷总客房数
        </div>
      </div>
    </div>

    {feedback && (
      <div className="px-8 pb-8 mt-auto">
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 relative group/feedback">
          <MessageSquareQuote size={16} className="text-blue-500 mb-3" />
          <p className="text-base text-slate-600 leading-relaxed italic">
            {feedback}
          </p>
          <div className="mt-4 text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <div className="w-4 h-px bg-slate-200" /> 客户反馈 / FEEDBACK
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 text-base">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-full h-full"
            style={{
              backgroundImage: 'url(./hero-bg-new.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 mb-8 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-md text-base font-semibold tracking-wide"
          >
            内部培训
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            酒店智能体培训
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#part1" className="px-10 py-4 bg-blue-500 text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg">产品介绍</a>
            <a href="#part2" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg">SOP流程</a>
            <a href="#part3" className="px-10 py-4 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg">考核指标</a>
          </motion.div>
        </div>
      </header>

      {/* Floating Table of Contents */}
      <TableOfContents />

      <main className="max-w-7xl mx-auto px-4 py-20 pb-40">
        
        {/* --- PART 1 --- */}
        <section id="part1" className="mb-40">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">第一部分 / 酒店智能体介绍</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Block 1: Background & IP */}
          <div id="background">
            <SectionTitle>公司背景及"黄小西"IP</SectionTitle>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Building2 /></div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">公司介绍</h3>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p>
                    <span className="font-bold text-slate-900 border-b-2 border-blue-100">贵旅数网科技公司</span> 由贵旅集团与华创云信联合发起成立。
                  </p>
                  <p>
                    <span className="text-blue-600 font-semibold italic">● 贵旅集团：</span> 贵州省国资委监管国企，定位于“贵州旅游专业运营主体”，是全省文旅龙企业。
                  </p>
                  <p>
                    <span className="text-blue-600 font-semibold italic">● 华创云信：</span> 上交所上市科技金融公司，提供AI、区块链、大数据等核心技术支撑。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-2xl"><ShieldCheck /></div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">"黄小西"IP介绍</h3>
              </div>
              <p className="text-blue-50 leading-relaxed mb-6 text-base">
                贵州省官方文旅IP，具备官方公信力，获高层考察认可。作为IP生态重要引擎，“酒店智能体”正依托全省（机场、高铁广告）强力推广优势，打造数字服务标杆。
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 text-base bg-white/10 p-3 rounded-xl border border-white/10">
                  <span className="font-bold shrink-0">核心优势</span>
                  <span>政策背书、官方公信力、全媒矩阵推广</span>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Detailed Intro */}
          <div id="product-intro">
            <SectionTitle>"黄小西"酒店智能体介绍</SectionTitle>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 p-10 md:p-14 rounded-3xl shadow-lg mb-20 relative overflow-hidden border border-teal-100">
            {/* 装饰背景元素 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-200/10 rounded-full blur-3xl" />
            
            <h3 className="text-2xl md:text-3xl font-extrabold mb-10 flex items-center gap-3 relative z-10 text-slate-800">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
                <Zap className="text-white" size={24} />
              </div>
              <span>产品概念</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-white rounded-2xl p-7 shadow-md border border-teal-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 shadow-lg shadow-teal-200">1</div>
                <p className="text-base leading-relaxed text-slate-700">是AI时代下酒店的<span className="text-teal-600 font-semibold">智能化转型工具</span>，是酒店的<span className="text-teal-600 font-semibold">24小时数字员工</span>。</p>
              </div>
              
              <div className="bg-white rounded-2xl p-7 shadow-md border border-teal-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 shadow-lg shadow-teal-200">2</div>
                <p className="text-base leading-relaxed text-slate-700">是酒店私域的<span className="text-teal-600 font-semibold">豆包</span>，是旅客的<span className="text-teal-600 font-semibold">24小时数字客服</span>。</p>
              </div>
              
              <div className="bg-white rounded-2xl p-7 shadow-md border border-teal-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 shadow-lg shadow-teal-200">3</div>
                <p className="text-base leading-relaxed text-slate-700">是让酒店<span className="text-teal-600 font-semibold">更加赚钱</span>的工具。</p>
              </div>
            </div>
          </div>

          <div className="space-y-12 mb-32">
            {[
              { 
                icon: Smartphone, 
                title: "住客端小程序", 
                color: "blue", 
                audience: "酒店入住宾客",
                isPhone: true,
                phoneImage: "./0.1.jpg",
                modules: [
                  { name: "智能问答", content: "支持住客通过自然语言交互，便捷完成酒店信息查询。" },
                  { name: "客房服务", content: "住客可通过智能体一键下单，让客房服务像点外卖一样简单，提升服务效率与顾客体验。" },
                  { name: "智能服务团队", content: "整合本地推荐官、深夜助眠、会议助手等智能体员工，为住客提供专业、精准的场景化服务。" },
                  { name: "吐槽评价", content: "住客可即时提交意见与建议，酒店快速响应并落实整改，持续优化住宿体验。" },
                  { name: "周边推荐", content: "向游客精准推荐本地特色美食、休闲文娱活动及网红打卡点位。" },
                  { name: "订房购物", content: "支持在线房型预订与酒店自营商品、旅游产品在线选购；" }
                ]
              },
              { 
                icon: UserCircle2, 
                title: "手机管理端小程序", 
                color: "indigo", 
                audience: "酒店管理人员、酒店老板",
                isPhone: true,
                phoneImage: "./0.2.jpg",
                modules: [
                  { name: "工单与服务管理", content: "集成客房工单处理、吐槽内容管理、行李寄存管理、订单扫码核销等功能，实现工作服务便捷处理" },
                  { name: "订单与交易管理", content: "支持订房订单、零售订单、服务订单的快捷移动端处理。" },
                  { name: "前台记事交班助手", content: "酒店员工可通过自然语言对话向智能体表述事件，AI自动拆解出需求形成待办清单，同时能够实现一键交班及任务进度实时追踪。" }
                ],
                future: "后续将为酒店老板提供竞价助手、酒店运营数据看板等功能。"
              },
              { 
                icon: Monitor, 
                title: "PC管理端", 
                color: "slate", 
                isPhone: false,
                tabs: [
                  {
                    title: "酒店智能体后台",
                    audience: "酒店管理人员、酒店老板",
                    modules: [
                      { name: "管理中心", content: "集成客房工单处置、吐槽内容反馈、行李寄存、订单扫码核销等功能，实现酒店员工便捷办公" },
                      { name: "业务管控", content: "集中处理订房订单与客房服务工单，及时反馈用户吐槽。" },
                      { name: "运营支撑", content: "组织架构与系统权限配置、自营商品管理，提供从客房到商品的全流程管理支撑。" }
                    ]
                  },
                  {
                    title: "商品管理平台",
                    audience: "渠道商、供应商",
                    modules: [
                      { name: "定位", content: "面向酒店商户（渠道商）和供应商，集商品管理、店铺运营、订单处理于一体的综合销售平台。" },
                      { name: "渠道商", content: "支持酒店智能体入驻并完善信息；可自主上架商品至自营商城，或从平台商品池选品入库；支持装修自营及平台商城首页；可查看并处理交易订单。" },
                      { name: "供应商", content: "拥有渠道商的所有功能，并额外支持将商品推送至供应链平台。" }
                    ]
                  },
                  {
                    title: "供应链管理平台",
                    audience: "供应链平台运营人员",
                    modules: [
                      { name: "资质联审", content: "负责全平台商户入驻资质审核，把控供应链安全与品质。" },
                      { name: "货架管理", content: "筛选供应商推送商品并上架至商品池，供下游渠道商一键入库。" },
                      { name: "订单详情", content: "实时监控并查看供应链平台的全局商品交易订单详情与结算状态。" }
                    ]
                  }
                ]
              },
            ].map((item, i) => (
              <DetailedInfoItem key={i} {...item} />
            ))}
          </div>

          {/* Block 3: Benefits */}
          <div id="benefits">
            <SectionTitle subtitle="赋能酒店经营效益升级">三大核心赋能价值</SectionTitle>
          </div>
          <div className="mb-32">
            <BenefitBlock 
              icon={ShieldCheck}
              title="更省心"
              subtitle="快速响应分流压力、对话智能下单、人力解放减负"
              color="blue"
              imageSrc="./0.4.jpg"
              items={[
                "旺季前台高频咨询（Wi-Fi、早餐、设施使用等），智能体秒级响应、自动分流，无需反复接打电话。",
                "住客送物、报修等需求，对话即可下单，系统自动派单、进度可查，流程透明、响应更快。",
                "大幅减轻前台与服务人员压力，把人力从重复事务中解放，专注个性化服务。"
              ]}
            />

            <BenefitBlock 
              icon={BrainCircuit}
              title="更聪明"
              subtitle="行程科学定制、本地一键推荐、暖心温度陪伴、驱动运营优化"
              color="indigo"
              imageSrc="./0.5.jpg"
              items={[
                "智能行程规划：住客想在贵阳多玩两天，智能体结合时间、偏好，科学定制路线。",
                "本地精准推荐：周边美食、景点、小众玩法一键推送，地道又贴心。",
                "暖心陪伴服务：深夜助眠、亲子讲故事、情绪陪伴，让酒店服务更有温度，住客体验直接拉满，好评率、复购率自然暴涨。",
                "老板管理增值服务：洞悉住客喜好，精准把握客人核心需求；周边竞价分析，助力酒店房间卖好价；数据分析高频问题，赋能酒店服务优化。"
              ]}
            />

            <BenefitBlock 
              icon={TrendingUp}
              title="更赚钱"
              subtitle="全域旅游接入、自有商品上架、住游购一体化增收"
              color="yellow"
              imageSrc="./0.6.jpg"
              items={[
                "与官方联合打造全域旅游供应链，接入热门景区门票、精品线路、本地特产等资源。",
                "一键对接优质旅游资源，增收提利，从单一住宿业态升级为全域旅游综合服务商"
              ]}
            />
          </div>

          <div id="showcases">
            <SectionTitle subtitle="运营成效显著">部分成效展示</SectionTitle>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-32">
            {[
              { 
                type: "高端饭店", 
                name: "贵州饭店 · 贵宾楼", 
                color: "from-blue-700 to-indigo-800",
                feedback: "“以往前台每天都要回答的重复咨询，现在很大一部分都能被智能体承接。”贵州饭店前厅部负责人介绍，智能体都能快速响应客人相关诉求，并自动生成工单派到对应部门。",
                metrics: {
                  aiQA: 8527,
                  ticketsSubmitted: 157,
                  ticketsProcessed: 156,
                  dailyUsers: 147,
                  totalUsers: 3755,
                  conversionRate: "10.8%",
                  qrCodes: 533,
                  rating: "五星级",
                  onlineDate: "2025.12.10",
                  daysOnline: 148
                }
              },
              { 
                type: "中端酒店", 
                name: "思南九天温泉酒店", 
                color: "from-indigo-600 to-blue-700",
                feedback: "该酒店为温泉主题，住客咨询高度集中于温泉营业时间、水温、毛巾租借、票务政策等信息类问题，而非客房送物等实物工单。智能体有效分流了前台及温泉前台的大量重复咨询。在同类规模酒店中处于中上水平，说明智能体在“信息密集型”服务场景中发挥了显著作用。",
                metrics: {
                  aiQA: 1275,
                  ticketsSubmitted: 33,
                  ticketsProcessed: 33,
                  dailyUsers: 73,
                  totalUsers: 1046,
                  conversionRate: "6.4%",
                  qrCodes: 179,
                  rating: "四钻",
                  onlineDate: "2026.01.16",
                  daysOnline: 111
                }
              },
              { 
                type: "经济型酒店", 
                name: "夜郎智慧酒店", 
                nameFull: "夜郎智慧酒店(惠水汽车站店)",
                color: "from-slate-700 to-slate-900",
                feedback: "在无前台工作人员的夜间时段，住客对Wi-Fi密码、空调调节、紧急开门、加被褥等需求只能依赖智能体。酒店规模较小（房间数72间），但渗透率相对可观，表明智能工单系统在无人值守场景下发挥了关键作用",
                metrics: {
                  aiQA: 677,
                  ticketsSubmitted: 80,
                  ticketsProcessed: 80,
                  dailyUsers: 43,
                  totalUsers: 574,
                  conversionRate: "6.4%",
                  qrCodes: 72,
                  rating: "二钻",
                  onlineDate: "2025.12.10",
                  daysOnline: 148
                }
              },
            ].map((hotel, i) => (
              <HotelDataCard key={i} {...hotel} name={hotel.nameFull || hotel.name} />
            ))}
          </div>
        </section>

        {/* --- PART 2 --- */}
        <section id="part2">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">第二部分 / 运营流程标准 (SOP)</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            <div className="lg:col-span-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">目标与范围</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-3 font-mono">目标 / Goal</h4>
                  <p className="text-white leading-relaxed text-base">
                    规范酒店智能体从市场拓展到持续运营的全生命周期管理流程，明确运营角色的职责、协作节点与交付标准，提升酒店合作签约率、部署效率、客户满意度及长期续签率。
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-3 font-mono">适用范围 / Scope</h4>
                  <p className="text-white leading-relaxed text-base">
                    本流程适用于公司内部所有参与酒店智能体服务的人员。
                  </p>
                </div>
              </div>
            </div>
            

          </div>

          <div id="roadmap">
            <SectionTitle subtitle="标准化实施步骤">全流程落地图谱</SectionTitle>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 flex items-center gap-4">
              <div className="px-4 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">Phase 01: 商务导入</div>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <StepCard 
              number="1"
              title="获客与建联"
              tasks={[
                { name: "信息来源渠道", content: "政府部门: 对接文旅/公安/商务公开名录, 通过宣贯宣讲直接触达;\n渠道方: 与航信、紫楠、各行业协会合作批量获取名单;\n旅行社: 获取本地存量合作酒店资源。" },
                { name: "联系见面动作", content: "通过话术传递80%高频咨询承接、50%效率提升核心价值;\n预约拜访: 避开酒店高峰(8-10点、12-14点),准备折页/PPT/案例数据;\n前置铺垫: 发送同类酒店成功案例增强信任。" }
              ]}
              goals={[
                "多渠道获取精准酒店客户名单，扩大潜在客户覆盖面",
                "建立初步联系，传递产品价值，激发客户兴趣，获取见面机会",
                "确认有效拜访时间，确保准备充分，提升见面成功率",
                "通过案例增强客户信任，为拜访铺垫，提升合作意愿"
              ]}
              materials={[
                "《黄小西酒店智能体推广销售话术》",
                "《酒店智能体宣传折页》",
                "酒店智能体宣传介绍 PPT",
                "产品介绍网页",
                "公众号：'黄小西'酒店智能体"
              ]}
              contact="材料联系人：运营中心 宋橙铭"
            />

            <StepCard 
              number="2"
              title="上门演示与签约"
              tasks={[
                { name: "演示准备", content: "准备调试好的笔记本、宣传材料、运营数据网页及电子/纸质协议模板。" },
                { name: "现场宣贯与签约", content: "按“痛点→演示→数据→条款”顺序讲解;\n签约前明确对接人(前厅/店长)与决策人(老板/投资人);\n签署合同及拍照存档,记录三方联系方式。" }
              ]}
              goals={[
                "通过针对性演示和案例数据消除疑虑, 促成半年免费使用期协议签署"
              ]}
              materials={[
                "电子协议模板（PDF 版）",
                "纸质备用协议"
              ]}
              contact="材料联系人：运营中心 周洋"
            />

            <div className="mb-10 mt-6 flex items-center gap-4">
              <div className="px-4 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">Phase 02: 部署上线</div>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <StepCard 
              number="3"
              title="签约后酒店入驻"
              tasks={[
                { name: "注册", content: "辅助酒店扫码完成系统入驻注册；\n录入酒店基础信息、推荐人、营业执照等资料；\n记录对接人及决策人联系方式，并分配账号权限。" },
                { name: "拉群", content: "创建微信群（群名：'XX酒店智能体服务群'）；\n拉群成员：运营人员、客服、酒店对接人。" },
                { name: "建立客户档案", content: "每一步客户服务流程完成后，在指定系统中同步更新客户档案内容。" },
                { name: "收集知识库", content: "补充整理知识库，在指定系统中更新知识库状态。" }
              ]}
              goals={[
                "建立结构化客户档案，确保运营流程按既定步骤落实"
              ]}
              materials={[
                "指定系统"
              ]}
            />

            <StepCard 
              number="4"
              title="物料确认"
              tasks={[
                { name: "需求确认", content: "了解酒店物料摆放需求，确认物料数量及规格, 对接物料组，开始物料制作。" },
                { name: "物料跟踪", content: "跟踪物料制作及邮寄进度，方便预约酒店时间。" }
              ]}
              goals={[
                "明确规格与设计要求，避免返工; 把控质量确保客户确认无误"
              ]}
              materials={[
                "指定系统"
              ]}
              note={`完善知识库后，记得在指定系统中更新状态，选择好物料类型，物料组根据知识库状态制作物料。`}
              contact="物料组联系人：熊薇、熊欢平"
            />

            <StepCard 
              number="5"
              title="系统测试"
              tasks={[
                { name: "系统测试", content: "确认AI问答无误; " },
                { name: "对接验收", content: "与对接人共同验证功能完整性、问答准确性,交付酒店验收通过。生成酒店及房间专属二维码。" }
              ]}
              goals={[
                "确认系统功能正常，确保酒店验收通过，交付质量达标"
              ]}
            />

            <StepCard 
              number="6"
              title="物料部署与员工培训"
              tasks={[
                { name: "物料检查", content: "若物料邮寄至酒店，预约到店时间检查物料并同步开展培训；若邮寄至服务人员处，先检查印刷质量，再请酒店对接人确认效果，避免二次修改。最后预约到店培训并完成物料部署。" },
                { name: "物料部署", content: "预约非高峰期, 易拉宝和前台二维码放置于前台旁/大堂显目处, 房间桌牌二维码朝向客人视线方向, 拍照确认。" }
              ]}
              goals={[
                "确保物料正确摆放提升可见度, 员工熟练操作减少使用障碍, 接入供应链开启增收"
              ]}
              materials={[
                "指定系统"
              ]}
              trainingDetails={[
                {
                  title: "一、C端小程序：住客端",
                  items: [
                    "扫码进入、授权手机号、绑定房间",
                    "智能问答 (Wi-Fi、早餐、设施等)",
                    "服务工单 (送物、清洁、洗衣、开夜床)",
                    "行程规划与周边推荐",
                    "商城购物 (门票、线路、白酒)",
                    "订单进度与退款查询"
                  ]
                },
                {
                  title: "二、管理端小程序：员工端",
                  items: [
                    "登录与权限管理",
                    "客房服务工单实时处理",
                    "行李寄存登记与核销"
                  ]
                },
                {
                  title: "三、Web后台：管理员端",
                  items: [
                    "酒店信息及知识库更新",
                    "商城上架与库存价格调整",
                    "财务账单与核销记录统计",
                    "工单时长分析与员工权限管理"
                  ]
                },
                {
                  title: "四、常见问题处理",
                  items: [
                    "物料未送达或损坏处理",
                    "门票核销失败响应机制",
                    "白酒发货破损责任划分",
                    "知识库答案纠错流程"
                  ]
                }
              ]}
            />

            <div className="mb-10 mt-6 flex items-center gap-4">
              <div className="px-4 py-1 bg-slate-800 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">Phase 03: 持续运营</div>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <StepCard 
              number="7"
              title="日常维护与运营"
              tasks={[
                { name: "日常沟通", content: "日常及节假日问候、新功能分享，每周至少2次与老板了解使用情况，每月至少2次上门回访，每次可带上使用数据、增值服务使用案例。" },
                { name: "需求处理", content: "记录并跟踪酒店需求，跟进产品接收及上线时间。" },
                { name: "公众号推送", content: "通过内容推送保持客户活跃度，传递产品价值与更新信息。" }
              ]}
              goals={[
                "实时跟踪运营数据降低流失风险, 通过高频内容推送与维系提升客户粘性"
              ]}
            />

            <StepCard 
              number="8"
              title="续费支持与交接"
              tasks={[
                { name: "续费数据准备", content: "到期前1月生成《年度数据报告》, 重点展示月度问答量、工单闭环率等量化指标。" },
                { name: "续费沟通激励", content: "讲解增值服务及激励政策(年付折扣), 锁定长期续签。" },
                { name: "续签后动作", content: "24小时内更新系统合作期限与服务内容, 同步周知客服组。" }
              ]}
              goals={[
                "量化合作成果增强续费意愿, 推动续签锁定长期关系, 保障服务连续性"
              ]}
            />


          </div>
        </section>

        {/* Spacer */}
        <div className="h-32" />

        {/* --- PART 3 --- */}
        <section id="part3" className="mb-40">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">第三部分 / 考核指标</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <SectionTitle subtitle="核心运营数据监控">三大考核指标</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 使用率 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">使用率</h3>
              <p className="text-slate-600 leading-relaxed">衡量酒店智能体的实际应用程度</p>
            </motion.div>

            {/* 销售额 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">销售额</h3>
              <p className="text-slate-600 leading-relaxed">评估智能体带来的直接收益</p>
            </motion.div>

            {/* 续签率 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">续签率</h3>
              <p className="text-slate-600 leading-relaxed">反映客户满意度与长期价值</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <UserCircle2 className="text-blue-500" size={20} />
            <span className="text-lg font-bold tracking-tight">黄小西酒店智能体生态系统</span>
          </div>
          <p className="text-slate-400 text-base mb-4">© 2026 贵旅数网科技公司 × 华创云信 技术支持</p>
          <div className="text-sm text-slate-600 uppercase tracking-widest">
            Confidential Training Material - Internal Use Only
          </div>
        </div>
      </footer>
    </div>
  );
}
