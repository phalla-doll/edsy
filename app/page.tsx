"use client";

import { useState } from 'react';
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, Heart, MoreVertical, Play, Search, ArrowUpRight, BookOpen, Users, Award, ArrowRight, Mail, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

// --- Mock Data ---
const COURSES = [
  {
    id: 'nature',
    instructor: 'Olivia Bennett',
    titleLines: ['The', 'Science', 'of Nature'],
    time: '10:00 am – 11:30 am',
    bg: 'bg-[#85A3BC]',
    text: 'text-[#1A1A1A]',
    icon: 'arrow',
    modules: [
      { id: 1, title: 'What is Nature?', desc: 'Understand the fundamental concepts of natural sciences and ecosystems.', img: 'nature' },
      { id: 2, title: 'Biological Systems', desc: 'Deep dive into how biological systems interact and thrive in various environments.', img: 'biology' },
      { id: 3, title: 'Climate & Environment', desc: 'Study the impact of climate on natural habitats and global ecosystems.', img: 'climate' }
    ]
  },
  {
    id: 'media',
    instructor: 'Marcus Lee',
    titleLines: ['Digital', 'Media', '& Society'],
    time: '2:45 pm – 4:15 pm',
    bg: 'bg-[#F2F2F2]',
    text: 'text-[#1A1A1A]',
    icon: 'arrow',
    modules: [
      { id: 1, title: 'Evolution of Media', desc: 'Trace the history of media from print to digital platforms and its societal impact.', img: 'media' },
      { id: 2, title: 'Social Networks', desc: 'Analyze the sociological impact of modern social networks on human behavior.', img: 'social' },
      { id: 3, title: 'Digital Ethics', desc: 'Explore the ethical considerations in digital content creation and consumption.', img: 'ethics' }
    ]
  },
  {
    id: 'frontend',
    instructor: 'Lena Brooks',
    titleLines: ['Intro', 'to Frontend', 'Development'],
    time: 'Online',
    bg: 'bg-[#C8CC4E]',
    text: 'text-[#1A1A1A]',
    icon: 'heart',
    modules: [
      { id: 1, title: 'What is Frontend?', desc: 'Understand the role of frontend in web development and how it interacts with backend systems.', img: 'frontend' },
      { id: 2, title: 'Box Model & Positioning', desc: 'Master CSS layout fundamentals including the box model, inline vs block, and positioning.', img: 'css' },
      { id: 3, title: 'Flexbox & Grid Layouts', desc: 'Learn modern CSS layout techniques to build responsive and complex web interfaces.', img: 'grid' }
    ]
  }
];

const NAV_LINKS = ['Dashboard', 'Courses', 'Planning', 'Settings'];
const DATES = ['Mon. 12', 'Tue. 13', 'Wed. 14'];

export default function LandingPage() {
  // --- State ---
  const [activeNav, setActiveNav] = useState('Courses');
  const [activeDate, setActiveDate] = useState('Mon. 12');
  const [activeCourse, setActiveCourse] = useState(COURSES[2]); // Default to Frontend
  const [activeTab, setActiveTab] = useState('Preview');
  const [expandedModule, setExpandedModule] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isWeekDropdownOpen, setIsWeekDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  // --- Handlers ---
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleCourseClick = (course: typeof COURSES[0]) => {
    setActiveCourse(course);
    setExpandedModule(1);
    setActiveTab('Preview');
    // Scroll to overview on mobile
    if (window.innerWidth < 1024) {
      document.getElementById('course-overview')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('Subscribed successfully!');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 font-sans relative overflow-hidden">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-white text-black px-6 py-3 rounded-full font-medium shadow-2xl z-50 flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 relative z-10">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => showToast('Navigating to Home')}>
          <div className="w-8 h-[1px] bg-white"></div>
          <span className="text-xl font-medium tracking-tight">.edsy</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-sm text-white/50">
          {NAV_LINKS.map(link => (
            <button 
              key={link}
              onClick={() => setActiveNav(link)}
              className={`transition-colors ${activeNav === link ? 'text-white font-medium' : 'hover:text-white'}`}
            >
              {link}
            </button>
          ))}
        </div>
        <div>
          <button 
            onClick={() => showToast('Opening Sign In modal...')}
            className="rounded-full border border-white/20 px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors"
          >
            Sign In
          </button>
        </div>
      </nav>

      <main className="px-6 md:px-12 lg:px-24 pb-32 relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div>
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-light tracking-tight leading-[0.85] mb-12">
              Study<br />Planning
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setIsWeekDropdownOpen(!isWeekDropdownOpen)}
                  className={`flex items-center gap-3 rounded-full border px-6 py-3 text-sm transition-colors ${isWeekDropdownOpen ? 'bg-white/10 border-white/40' : 'border-white/20 hover:bg-white/10'}`}
                >
                  This week <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${isWeekDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isWeekDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 left-0 bg-[#1A1A1A] border border-white/10 rounded-2xl p-2 min-w-[160px] shadow-xl z-20"
                    >
                      {['This week', 'Next week', 'This month'].map(w => (
                        <button 
                          key={w} 
                          onClick={() => { showToast(`Filter changed to: ${w}`); setIsWeekDropdownOpen(false); }} 
                          className="block w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 rounded-xl transition-colors"
                        >
                          {w}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button 
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className={`flex items-center justify-center rounded-full border w-12 h-12 transition-colors ${isCalendarOpen ? 'bg-white/10 border-white/40' : 'border-white/20 hover:bg-white/10'}`}
                >
                  <Calendar className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isCalendarOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 left-0 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 min-w-[300px] shadow-xl z-20"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <button onClick={() => showToast('Previous month')} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                          <ChevronLeft className="w-4 h-4 text-white/70" />
                        </button>
                        <span className="text-sm font-medium">March 2026</span>
                        <button onClick={() => showToast('Next month')} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                          <ChevronRight className="w-4 h-4 text-white/70" />
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-2 text-center text-xs mb-2">
                        {['S','M','T','W','T','F','S'].map((d, i) => (
                          <button key={i} onClick={() => showToast(`Navigate to ${d} column`)} className="opacity-50 hover:opacity-100 hover:bg-white/10 rounded-full py-1 transition-all">
                            {d}
                          </button>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-2 text-center text-xs">
                        {/* Empty slots for starting day of the month */}
                        {Array.from({length: 0}).map((_, i) => <div key={`empty-${i}`} />)}
                        {Array.from({length: 31}).map((_, i) => (
                          <button 
                            key={i} 
                            onClick={() => {showToast(`Selected March ${i+1}`); setIsCalendarOpen(false);}} 
                            className={`p-2 rounded-full transition-colors ${i + 1 === 12 ? 'bg-white text-black hover:bg-white/90 font-medium' : 'hover:bg-white/10'}`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/50 pb-4">
            <button className="hover:text-white transition-colors flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {DATES.map(date => (
              <button 
                key={date}
                onClick={() => setActiveDate(date)}
                className={`transition-colors ${activeDate === date ? 'text-white font-medium' : 'hover:text-white'}`}
              >
                {date}
              </button>
            ))}
          </div>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
          {COURSES.map((course) => (
            <div 
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className={`${course.bg} ${course.text} rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-[4/5] hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative ${activeCourse.id === course.id ? 'ring-4 ring-white/20 ring-offset-4 ring-offset-black' : ''}`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <p className="text-sm font-medium opacity-80">{course.instructor}</p>
                  {course.icon === 'arrow' ? (
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                  ) : (
                    <Heart className={`w-6 h-6 transition-transform ${activeCourse.id === course.id ? 'fill-current opacity-100 scale-110' : 'opacity-80 group-hover:scale-110'}`} />
                  )}
                </div>
                <h3 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">
                  {course.titleLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < course.titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium opacity-80">{course.time}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Course Overview Section */}
        <section id="course-overview" className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start scroll-mt-24">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-8 h-[1px] bg-white"></div>
              <span className="text-xl font-medium tracking-tight">.edsy</span>
            </div>
            <h2 className="text-[4rem] md:text-[6rem] font-light tracking-tight leading-[0.9] mb-16">
              Course<br />Overview
            </h2>
            
            <div className="relative flex items-center group">
              <Search className="absolute left-6 w-5 h-5 text-white/40 group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules..." 
                className="w-full bg-transparent border border-white/20 rounded-full py-4 pl-16 pr-12 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-6 text-white/40 hover:text-white">
                  <MoreVertical className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 border-t border-white/10 pt-8 lg:pt-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-24 min-h-[800px]">
            <motion.div 
              key={activeCourse.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-6 mb-16">
                <button 
                  onClick={() => showToast('Going back...')}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors shrink-0"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                  {activeCourse.titleLines.join(' ')}
                </h3>
              </div>

              <div className="flex gap-4 mb-16">
                <button 
                  onClick={() => showToast(`Starting course: ${activeCourse.titleLines.join(' ')}`)}
                  className="bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:bg-white/90 hover:scale-105 transition-all active:scale-95"
                >
                  Start course
                </button>
              </div>

              <div className="flex gap-12 border-b border-white/10 mb-12 pb-6 text-sm">
                {['Preview', 'Details'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`transition-colors relative ${activeTab === tab ? 'text-white font-medium' : 'text-white/40 hover:text-white'}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="activeTab" className="absolute bottom-[-25px] left-0 w-full h-[1px] bg-white" />
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                {activeTab === 'Preview' ? (
                  <AnimatePresence mode="popLayout">
                    {activeCourse.modules
                      .filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.desc.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((mod, idx) => {
                      const isExpanded = expandedModule === mod.id;
                      return (
                        <motion.div 
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          key={mod.id} 
                          className={`group cursor-pointer ${idx > 0 ? 'border-t border-white/10 pt-8 mt-8' : 'pt-2'}`}
                          onClick={() => setExpandedModule(isExpanded ? 0 : mod.id)}
                        >
                          <div className={`flex gap-8 ${isExpanded ? 'mb-6' : 'items-center'}`}>
                            <span className={`text-sm font-mono pt-1 transition-colors ${isExpanded ? 'text-white' : 'text-white/40'}`}>
                              0{mod.id}
                            </span>
                            <div className="flex-1">
                              <h4 className={`text-xl font-medium transition-colors ${isExpanded ? 'mb-4 text-white' : 'text-white/70 group-hover:text-white'}`}>
                                {mod.title}
                              </h4>
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div 
                                    initial={{ opacity: 0, height: 0 }} 
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl">
                                      {mod.desc}
                                    </p>
                                    <div 
                                      className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 w-full max-w-2xl group/video"
                                      onClick={(e) => { e.stopPropagation(); showToast(`Playing video for: ${mod.title}`); }}
                                    >
                                      <Image 
                                        src={`https://picsum.photos/seed/${mod.img}/800/450`} 
                                        alt="Video thumbnail" 
                                        fill 
                                        className="object-cover opacity-60 group-hover/video:opacity-100 transition-opacity duration-500 group-hover/video:scale-105"
                                        referrerPolicy="no-referrer"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/video:scale-110 group-hover/video:bg-white/10 transition-all duration-300">
                                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                    {activeCourse.modules.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.desc.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                      <p className="text-white/40 py-8">No modules found matching &quot;{searchQuery}&quot;</p>
                    )}
                  </AnimatePresence>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-white/60 leading-relaxed space-y-6 max-w-2xl"
                  >
                    <p>
                      This course is designed to take you from absolute beginner to confident practitioner. 
                      Led by {activeCourse.instructor}, you&apos;ll dive deep into the core concepts and emerge with practical, applicable skills.
                    </p>
                    <p>
                      <strong>Prerequisites:</strong> None. Just a willingness to learn and participate.
                    </p>
                    <p>
                      <strong>Format:</strong> {activeCourse.time === 'Online' ? 'Self-paced online video modules with interactive exercises.' : 'Live interactive sessions with Q&A and group work.'}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-40 border-t border-white/10 pt-24">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <h2 className="text-[4rem] md:text-[6rem] font-light tracking-tight leading-[0.9] lg:w-1/2">
              Master<br />your craft
            </h2>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="group cursor-default">
                <BookOpen className="w-8 h-8 mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-medium mb-4">Structured Learning</h4>
                <p className="text-white/50 leading-relaxed">Carefully curated paths designed to take you from beginner to expert without the overwhelm.</p>
              </div>
              <div className="group cursor-default">
                <Users className="w-8 h-8 mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-medium mb-4">Expert Mentorship</h4>
                <p className="text-white/50 leading-relaxed">Connect with industry leaders who provide real-world insights and personalized feedback.</p>
              </div>
              <div className="group cursor-default">
                <Award className="w-8 h-8 mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-medium mb-4">Certified Skills</h4>
                <p className="text-white/50 leading-relaxed">Earn recognized certificates that prove your expertise and help you stand out to employers.</p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <button 
                  onClick={() => showToast('Navigating to benefits page...')}
                  className="flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-colors group"
                >
                  Explore all benefits <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mt-40 bg-[#1A1A1A] rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <p className="text-2xl md:text-4xl font-light leading-relaxed mb-12 max-w-4xl mx-auto relative z-10">
            &quot;The structured approach to learning completely changed how I absorb information. It&apos;s not just about watching videos, it&apos;s about actual comprehension.&quot;
          </p>
          <div className="flex items-center justify-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src="https://picsum.photos/seed/portrait/100/100" alt="Student" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left">
              <p className="font-medium">Sarah Jenkins</p>
              <p className="text-sm text-white/50">Frontend Developer</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-[1px] bg-white"></div>
            <span className="text-2xl font-medium tracking-tight">.edsy</span>
          </div>
          <p className="text-sm text-white/50 max-w-xs">
            A minimalist learning platform designed for focused, structured education.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full md:w-auto">
          <div className="flex gap-8 text-sm text-white/50">
            {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
              <Link key={social} href="#" className="hover:text-white transition-colors">{social}</Link>
            ))}
          </div>
          
          <form onSubmit={handleSubscribe} className="relative flex items-center w-full sm:w-auto group">
            <Mail className="absolute left-4 w-4 h-4 text-white/40 group-focus-within:text-white transition-colors" />
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Subscribe to newsletter" 
              className="w-full sm:w-64 bg-transparent border border-white/20 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
            />
            <button type="submit" className="hidden">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
}
