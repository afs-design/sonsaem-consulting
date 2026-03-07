import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, MessageCircle } from 'lucide-react';

const KMONG_LINK = "https://kmong.com/gig/393280#194";
const KAKAO_LINK = "#"; // Placeholder

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">손쌤연애컨설팅</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase">
          <a href="#projects" className="text-text-secondary hover:text-white transition-colors">CASES — 상담 사례</a>
          <a href="#services" className="text-text-secondary hover:text-white transition-colors">PROGRAM — 상담 프로그램</a>
          <a href="#about" className="text-text-secondary hover:text-white transition-colors">ABOUT — 소개</a>
          <a href={KAKAO_LINK} className="text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-bg-primary transition-all">RESERVATION — 상담 예약</a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-secondary border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#projects" onClick={() => setMenuOpen(false)} className="text-xl font-bold">CASES — 상담 사례</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-xl font-bold">PROGRAM — 상담 프로그램</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-xl font-bold">ABOUT — 소개</a>
            <a href={KAKAO_LINK} onClick={() => setMenuOpen(false)} className="text-accent text-xl font-bold">RESERVATION — 상담 예약</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto w-full z-10 flex flex-col items-center text-center">
        <FadeIn>
          <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase mb-6">
            <span className="text-outline transition-all duration-500">Realistic</span><br/>
            Solutions
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="font-medium text-text-secondary max-w-4xl mx-auto mb-12 text-xl md:text-3xl leading-relaxed space-y-6">
            <p>
              <span className="text-white font-bold">단호한 이별에도<br/>다시 만나는 방법은 있습니다</span>
            </p>
            <p className="text-accent font-bold">
              당신의 상황을 분석해<br/>
              가장 현실적인 재회 전략을 설계합니다.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm md:text-base text-white/80 font-bold tracking-wide">
              &gt; 행복한 연애로 돌아가기 위한 첫 번째 단계
            </p>
            <a href={KMONG_LINK} className="inline-flex items-center gap-4 bg-white text-bg-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 group">
              1:1 컨설팅 문의하기 
              <span className="bg-bg-primary text-white p-2 rounded-full group-hover:bg-white group-hover:text-accent transition-colors">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "\"멘탈이 무너져도\n전략이 있으면\n다시 만날 수 있습니다.\"",
      desc: "연락하고 싶은 충동을 참고\n전략대로 실행한 결과\n상대가 먼저 재회를 제안한 실제 사례",
      tags: ["#재회성공", "#이별후전략", "#감정코칭"],
      img: "/assets/review-01.png",
      imgStyle: { objectPosition: "center 100%", imageRendering: "-webkit-optimize-contrast" as const },
      scale: 0.96
    },
    {
      title: "\"읽씹하던 썸이\n먼저 만나자고 했습니다.\"",
      desc: "불안하게 설레발치지 않고\n상황 판단 + 타이밍 피드백으로\n관계 주도권을 가져온 실제 사례",
      tags: ["#썸전략", "#관계역전", "#심리분석"],
      img: "/assets/review-02.png",
      imgStyle: { objectPosition: "center 100%", imageRendering: "-webkit-optimize-contrast" as const },
      scale: 0.95
    },
    {
      title: "\"반복되는 이별\n패턴 끊어내기\"",
      desc: "매번 같은 이유로\n헤어지는 커플을 위한\n근본적 원인 해결",
      tags: ["#연애패턴", "#자존감회복", "#장기연애"],
      img: "/assets/review-03.png",
      imgStyle: { objectPosition: "center 100%", imageRendering: "-webkit-optimize-contrast" as const },
      scale: 1.11
    },
    {
      title: "\"방향을 바꾸니\n연애가 다시 시작됐습니다.\"",
      desc: "감정정리부터 새로운 만남까지\n하나의 상담으로\n흐름이 바뀐 실제 사례",
      tags: ["#연애설계", "#새출발", "#1:1컨설팅"],
      img: "/assets/review-04.png",
      imgStyle: { objectPosition: "center 100%", imageRendering: "-webkit-optimize-contrast" as const },
      scale: 1
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <FadeIn>
        <h2 className="text-5xl md:text-7xl font-black mb-20 tracking-tighter">SUCCESS<br/><span className="text-text-secondary">CASES</span></h2>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
            <div className="overflow-hidden rounded-2xl mb-8 bg-bg-secondary aspect-[4/3] relative">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
              <div style={{ width: '100%', height: '100%', transform: `scale(${p.scale})` }}>
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={p.imgStyle}
                />
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-[26px] sm:text-3xl md:text-5xl font-bold mb-4 md:mb-5 text-accent transition-colors whitespace-pre-line leading-[1.3] md:leading-tight">{p.title}</h3>
              <p className="text-text-secondary text-base sm:text-lg md:text-2xl mb-6 md:mb-8 whitespace-pre-line leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap justify-start gap-2 md:gap-3">
                {p.tags.map((tag, j) => (
                  <span key={j} className="text-sm md:text-lg font-medium text-white border border-white/20 px-3 py-1.5 md:px-5 md:py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      name: "DELUXE",
      desc: "초기상담으로 50분 상담 (전화 or 카톡)",
      price: "40,000원",
      features: ["심리분석", "피드백 & 솔루션", "사후 피드백 (3회)", "상담 요약본 제공"]
    },
    {
      name: "STANDARD",
      desc: "재상담 전용 (30분)",
      price: "30,000원",
      features: ["30분 상담 (전화 or 카톡)", "심리분석", "피드백 & 솔루션", "사후 피드백 (2회)"]
    },
    {
      name: "PREMIUM",
      desc: "재회 컨설팅 1주 패키지",
      price: "150,000원",
      features: ["초기상담 & 심리분석", "집중 피드백으로 내적 불안감 해소", "대리카톡 지원", "1주 맞춤형 재회 컨설팅"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-bg-secondary">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-black mb-20 tracking-tighter">OUR<br/><span className="text-text-secondary">SERVICES</span></h2>
        </FadeIn>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border border-white/10 p-10 rounded-3xl hover:bg-white/5 transition-colors group h-full flex flex-col">
                <h3 className="text-3xl font-black mb-2">{s.name}</h3>
                <p className="text-text-secondary mb-8 h-12">{s.desc}</p>
                <div className="text-4xl font-bold text-accent mb-10 pb-10 border-b border-white/10">{s.price}</div>
                <ul className="space-y-6 flex-grow">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-4 text-lg">
                      <span className="text-accent mt-1">■</span>
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={KMONG_LINK} className="mt-10 w-full py-4 border border-white/20 rounded-full text-center font-bold hover:bg-white hover:text-bg-primary transition-colors">
                  선택하기
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-black mb-10 tracking-tighter"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          ABOUT<br/>
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            손쌤연애컨설팅
          </motion.span>
        </motion.h2>
        
        <div className="space-y-10 text-2xl md:text-[28px] text-text-secondary leading-[1.6] font-medium">
          <motion.p 
            className="text-white text-3xl md:text-4xl font-bold border-l-4 border-accent pl-6 mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            "형식적인 위로가 아닌<br/>
            실질적인 해결책을<br/>
            제시합니다."
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            점집, 타로, 공장식 상담으로는<br/>
            해결되지 않았습니다.<br/>
            직접 겪어봤기에, 확신합니다.<br/>
            재회는 운이 아닙니다.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            상대의 심리를 정확히 읽고<br/>
            상황에 맞는 전략을 설계하면<br/>
            관계는 다시 움직입니다.
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            누적 상담 500건 이상<br/>
            모든 상담은 내담자의 카톡<br/>
            또는 통화 기록을 직접 분석하는<br/>
            <span className="text-accent font-bold">1:1 맞춤 컨설팅</span>으로 진행합니다.
          </motion.p>
        </div>
      </motion.div>

      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      >
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-tr from-accent/40 to-purple-500/40 rounded-[2.5rem] blur-2xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 z-10">
          <motion.img 
            src="/assets/profile-suit.jpg" 
            alt="손쌤 프로필" 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent rounded-full mix-blend-screen filter blur-[40px]"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-[50px] opacity-40"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-bg-secondary pt-32 pb-10 px-6 md:px-12 border-t border-white/10">
    <div className="max-w-[1600px] mx-auto">
      <FadeIn>
        <h2 className="text-[10vw] md:text-[8vw] font-black leading-none tracking-tighter mb-12 hover:text-accent transition-colors cursor-pointer uppercase">
          PRIVATE SESSION
        </h2>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.4] tracking-normal">
            하루 3건<br/>
            깊이 있는 상담만<br/>
            진행합니다.
          </h3>
          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            모든 상담 내용은 철저히 비공개됩니다.<br/>
            지금 예약하시면<br/>
            가장 빠른 상담 일정을 안내드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={KAKAO_LINK} className="bg-[#FF3366] text-white px-8 py-6 rounded-2xl font-bold hover:bg-white hover:text-[#FF3366] transition-all duration-200 flex flex-col items-center justify-center gap-1 text-2xl md:text-3xl leading-tight w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <MessageCircle size={28} />
                <span>카카오톡 상담</span>
              </div>
              <span>예약하기</span>
            </a>
            <a href={KMONG_LINK} className="border border-white/20 text-white px-8 py-6 rounded-2xl font-bold hover:bg-white hover:text-bg-primary transition-all duration-200 flex flex-col items-center justify-center gap-1 text-2xl md:text-3xl leading-tight w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>크몽</span>
              <span>예약하기</span>
            </a>
          </div>
        </div>
        <div className="md:text-right flex flex-col justify-end mt-12 md:mt-0">
          <p className="text-text-secondary font-medium mb-2">1:1 비공개 상담 · 하루 제한 운영</p>
          <p className="text-text-secondary font-medium">희망고문 없는 현실적인 연애/재회 상담</p>
          <p className="text-2xl font-bold mt-4">손쌤연애컨설팅</p>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
        <p>© {new Date().getFullYear()} 손쌤연애컨설팅. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function VersionCoderixOld() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent selection:text-white">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
