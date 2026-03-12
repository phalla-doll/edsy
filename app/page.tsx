import { Calendar, ChevronDown, ChevronLeft, Heart, MoreVertical, Play, Search, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-24">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white"></div>
          <span className="text-xl font-medium tracking-tight">.edsy</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-sm text-white/50">
          <Link href="#" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="#" className="text-white">Courses</Link>
          <Link href="#" className="hover:text-white transition-colors">Planning</Link>
          <Link href="#" className="hover:text-white transition-colors">Settings</Link>
        </div>
        <div>
          <button className="rounded-full border border-white/20 px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      <main className="px-6 md:px-12 lg:px-24 pb-32">
        {/* Hero Section */}
        <section className="pt-20 pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div>
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-light tracking-tight leading-[0.85] mb-12">
              Study<br />Planning
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/10 transition-colors">
                This week <ChevronDown className="w-4 h-4 opacity-50" />
              </button>
              <button className="flex items-center justify-center rounded-full border border-white/20 w-12 h-12 hover:bg-white/10 transition-colors">
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/50 pb-4">
            <button className="hover:text-white transition-colors flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" /> Mon. 12
            </button>
            <button className="hover:text-white transition-colors">
              Tue. 13
            </button>
            <button className="hover:text-white transition-colors">
              Wed. 14
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
          {/* Blue Card */}
          <div className="bg-[#85A3BC] text-[#1A1A1A] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-[4/5] hover:scale-[1.02] transition-transform cursor-pointer group">
            <div>
              <div className="flex justify-between items-start mb-12">
                <p className="text-sm font-medium opacity-80">Olivia Bennett</p>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              <h3 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">The<br />Science<br />of Nature</h3>
            </div>
            <p className="text-sm font-medium opacity-80">10:00 am – 11:30 am</p>
          </div>

          {/* White Card */}
          <div className="bg-[#F2F2F2] text-[#1A1A1A] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-[4/5] hover:scale-[1.02] transition-transform cursor-pointer group">
            <div>
              <div className="flex justify-between items-start mb-12">
                <p className="text-sm font-medium opacity-80">Marcus Lee</p>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              <h3 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">Digital<br />Media<br />& Society</h3>
            </div>
            <p className="text-sm font-medium opacity-80">2:45 pm – 4:15 pm</p>
          </div>

          {/* Yellow Card */}
          <div className="bg-[#C8CC4E] text-[#1A1A1A] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-[4/5] hover:scale-[1.02] transition-transform cursor-pointer group">
            <div className="flex justify-between items-start mb-12">
              <p className="text-sm font-medium opacity-80">Lena Brooks</p>
              <Heart className="w-6 h-6 opacity-80" />
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight mb-8">Intro<br />to Frontend<br />Development</h3>
            </div>
            <div className="flex items-center justify-between">
               <p className="text-sm font-medium opacity-80">Online</p>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-8 h-[1px] bg-white"></div>
              <span className="text-xl font-medium tracking-tight">.edsy</span>
            </div>
            <h2 className="text-[4rem] md:text-[6rem] font-light tracking-tight leading-[0.9] mb-16">
              Course<br />Overview
            </h2>
            
            <div className="relative flex items-center">
              <Search className="absolute left-6 w-5 h-5 text-white/40" />
              <input 
                type="text" 
                placeholder="Course title" 
                className="w-full bg-transparent border border-white/20 rounded-full py-4 pl-16 pr-12 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
              />
              <MoreVertical className="absolute right-6 w-5 h-5 text-white/40" />
            </div>
          </div>

          <div className="lg:col-span-7 border-t border-white/10 pt-8 lg:pt-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-24 min-h-[800px]">
            <div className="flex items-center gap-6 mb-16">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">Intro to Frontend<br />Development</h3>
            </div>

            <div className="flex gap-4 mb-16">
              <button className="bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
                Start course
              </button>
            </div>

            <div className="flex gap-12 border-b border-white/10 mb-12 pb-6 text-sm">
              <button className="text-white font-medium relative after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[1px] after:bg-white">Preview</button>
              <button className="text-white/40 hover:text-white transition-colors">Details</button>
            </div>

            <div className="space-y-10">
              {/* Module 1 */}
              <div className="group cursor-pointer">
                <div className="flex gap-8 mb-6">
                  <span className="text-sm font-mono text-white/40 pt-1">01</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-4 group-hover:text-white/80 transition-colors">What is Frontend?</h4>
                    <p className="text-base text-white/40 leading-relaxed mb-8 max-w-xl">
                      Understand the role of frontend in web development and how it interacts with backend systems.
                    </p>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 w-full max-w-2xl">
                      <Image 
                        src="https://picsum.photos/seed/frontend/800/450" 
                        alt="Video thumbnail" 
                        fill 
                        className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="border-t border-white/10 pt-10 group cursor-pointer">
                <div className="flex gap-8 items-center">
                  <span className="text-sm font-mono text-white/40">02</span>
                  <h4 className="text-xl font-medium group-hover:text-white/80 transition-colors">Box Model & Positioning</h4>
                </div>
              </div>

              {/* Module 3 */}
              <div className="border-t border-white/10 pt-10 group cursor-pointer">
                <div className="flex gap-8 items-center">
                  <span className="text-sm font-mono text-white/40">03</span>
                  <h4 className="text-xl font-medium group-hover:text-white/80 transition-colors">Flexbox & Grid Layouts</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
