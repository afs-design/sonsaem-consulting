import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, MessageCircle, CheckCircle2, ChevronDown, Plus, Minus, Check } from 'lucide-react';

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
        <div 
          className="text-2xl font-black tracking-tighter text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          손쌤연애컨설팅
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase">
          <a href="#self-check" className="text-text-secondary hover:text-white transition-colors">3초 자가진단</a>
          <a href="#projects" className="text-text-secondary hover:text-white transition-colors">성공 사례</a>
          <a href="#services" className="text-text-secondary hover:text-white transition-colors">서비스/가격</a>
          <a href="#about" className="text-text-secondary hover:text-white transition-colors">상담사 소개</a>
          <a href="#faq" className="text-text-secondary hover:text-white transition-colors">FAQ</a>
          <a href={KAKAO_LINK} className="text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-bg-primary transition-all">상담 예약</a>
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
            <a href="#self-check" onClick={() => setMenuOpen(false)} className="text-xl font-bold">3초 자가진단</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="text-xl font-bold">성공 사례</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-xl font-bold">서비스/가격</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-xl font-bold">상담사 소개</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-xl font-bold">FAQ</a>
            <a href={KAKAO_LINK} onClick={() => setMenuOpen(false)} className="text-accent text-xl font-bold">상담 예약</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      
      <div className="max-w-[1100px] mx-auto w-full z-10 flex flex-col items-center text-center">
        <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase mb-12">
          <motion.span 
            className="text-outline inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Realistic
          </motion.span><br/>
          <motion.span 
            className="mt-4 md:mt-8 block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Solutions
          </motion.span>
        </h1>
        
        <motion.div 
          className="font-medium text-text-secondary max-w-4xl mx-auto text-xl md:text-3xl leading-relaxed space-y-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <p>
            <span className="text-white font-bold">단호한 이별에도<br/>다시 만나는 방법은 있습니다</span>
          </p>
          <p className="text-accent font-bold">
            당신의 상황을 분석해<br/>
            가장 현실적인 재회 전략을 설계합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          <a 
            href={KAKAO_LINK} 
            className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 md:px-12 py-4 md:py-5 rounded-[50px] font-bold text-lg md:text-xl transition-all duration-300 group w-full sm:w-auto"
            style={{ border: '1px solid rgba(255,45,85,0.4)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255,45,85,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            상담 예약하기
            <ArrowRight size={20} className="text-[#FF2D55] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProofToast = () => {
  const messages = [
    '1분 전 새로운 상담 요청이 접수되었습니다',
    '최근 재회 상담 문의가 접수되었습니다',
    '3분 전 새로운 상담 요청이 접수되었습니다',
    '최근 부부 상담 문의가 접수되었습니다',
    '최근 카카오톡 재회 상담 문의가 접수되었습니다',
    '방금 크몽 채팅으로 문의가 접수되었습니다',
    '6분 전 카카오톡 채팅 문의가 들어왔습니다'
  ];
  
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(-1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;

    const scheduleNext = (delay: number) => {
      timeoutRef.current = setTimeout(() => {
        if (!isMounted) return;
        
        // Show toast with random message (different from previous)
        setMessageIndex((prev) => {
          let next;
          do {
            next = Math.floor(Math.random() * messages.length);
          } while (next === prev && messages.length > 1);
          return next;
        });
        setIsVisible(true);

        // Hide after 5 seconds
        timeoutRef.current = setTimeout(() => {
          if (!isMounted) return;
          setIsVisible(false);
          
          // Schedule next appearance (50s ~ 90s)
          const nextDelay = Math.floor(Math.random() * (90000 - 50000 + 1)) + 50000;
          scheduleNext(nextDelay);
        }, 5000);
      }, delay);
    };

    // Initial delay: 3 seconds
    scheduleNext(3000);

    return () => {
      isMounted = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="h-12 flex items-center justify-center mb-8">
      <AnimatePresence mode="wait">
        {isVisible && messageIndex !== -1 && (
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-[#FF2D55]/[0.06] px-4 py-2.5 rounded-lg border border-[#FF2D55]/10"
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#FF2D55]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[#FF2D55] text-sm font-medium">{messages[messageIndex]}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SelfDiagnosis = () => {
  const items = [
    "이별 후 연락이 끊긴 상태입니다",
    "메시지를 보내도 읽씹이 계속됩니다",
    "상대가 예전보다 차갑게 느껴집니다",
    "상대에게 새로운 사람이 생긴 것 같습니다",
    "연락을 해야 할지 기다려야 할지 모르겠습니다",
    <>관계가 끝난 것 같지만 마음이<br/>정리되지 않습니다.</>
  ];

  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleCheck = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const count = checkedItems.size;

  const getResultMessage = () => {
    if (count === 0) return { badge: "", text: "해당하는 항목을 체크해보세요" };
    if (count === 1) return { badge: "관심 단계", text: "작은 신호도 놓치지 마세요." };
    if (count === 2) return { badge: "주의 단계", text: <>지금 상황을 한 번 <br className="block md:hidden"/>차분히 살펴볼 필요가 있습니다.</> };
    if (count === 3) return { badge: "분석 필요", text: <>현재 관계 흐름을 객관적으로 <br className="block md:hidden"/>파악해볼 필요가 있습니다.</> };
    if (count === 4) return { badge: "분석 필요", text: <>현재 관계 상황을 <br className="block md:hidden"/>정리해볼 필요가 있습니다.</> };
    return { badge: "긴급", text: <>지금이 가장 중요한 <br className="block md:hidden"/>타이밍일 수 있습니다.</> };
  };

  const result = getResultMessage();

  return (
    <section id="self-check" className="py-[120px] px-6 md:px-12 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter text-white">3초 자가진단</h2>
            <p className="text-text-secondary text-[13px] sm:text-base md:text-2xl font-medium whitespace-nowrap">
              지금 이 상황이라면 상담이 도움 될 수 있습니다.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4 mb-16">
          {items.map((item, index) => {
            const isChecked = checkedItems.has(index);
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  onClick={() => toggleCheck(index)}
                  whileHover={{ x: 4 }}
                  className={`cursor-pointer flex items-start gap-4 p-5 md:p-6 rounded-xl border transition-all duration-300 ${
                    isChecked 
                      ? 'border-[#FF2D55] bg-[#FF2D55]/5' 
                      : 'border-[rgba(255,255,255,0.06)] bg-bg-primary hover:border-[rgba(255,255,255,0.2)]'
                  }`}
                >
                  <div className={`shrink-0 w-6 h-6 mt-0.5 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                    isChecked ? 'border-[#FF2D55] bg-[#FF2D55]' : 'border-[rgba(255,255,255,0.2)]'
                  }`}>
                    <motion.div
                      initial={false}
                      animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </motion.div>
                  </div>
                  <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                    isChecked ? 'text-white' : 'text-text-secondary'
                  }`}>
                    {item}
                  </span>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="text-center space-y-8">
            <AnimatePresence mode="wait">
              {count > 0 ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="text-text-secondary font-bold text-xl">체크 항목</span>
                    <motion.div
                      key={count}
                      initial={{ scale: 1.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-6xl md:text-7xl font-black text-[#FF2D55]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}
                    >
                      {count}
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 mb-8">
                    <span className="inline-block bg-[#FF2D55]/20 text-[#FF2D55] px-4 py-1.5 rounded-full text-sm font-bold">
                      {result.badge}
                    </span>
                    <p className="text-white text-xl md:text-2xl font-bold">
                      {result.text}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12"
                >
                  <p className="text-text-secondary text-xl font-medium">{result.text}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {count >= 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden flex flex-col items-center"
                >
                  <SocialProofToast />
                  
                  <div className="text-center max-w-2xl mx-auto mb-10" style={{ lineHeight: 1.6 }}>
                    <p className="text-[16px] md:text-[20px] font-[600] text-white mb-2">
                      지금 상황에서 무엇을 해야 할지 <br className="block md:hidden"/>혼자 판단하기 어려울 수 있습니다.
                    </p>
                    <p className="text-[16px] md:text-[20px] font-[600] text-[#FF2D55]">
                      현재 상황을 정확히 분석해 <br className="block md:hidden"/>가장 현실적인 대응 방향을 안내해드립니다.
                    </p>
                  </div>

                  <a 
                    href={KAKAO_LINK} 
                    className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 md:px-12 py-4 md:py-5 rounded-[50px] font-bold text-lg md:text-xl transition-all duration-300 group w-full sm:w-auto"
                    style={{ border: '1px solid rgba(255,45,85,0.4)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255,45,85,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    현재 상황 분석 상담 받기
                    <ArrowRight size={20} className="text-[#FF2D55] group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Recommendation = () => {
  const items = [
    "이별 후 재회 가능성이 궁금한 경우",
    "연락을 해야 할지 기다려야 할지 고민되는 경우",
    "상대가 갑자기 차가워진 경우",
    "썸 관계가 멀어지고 있는 경우",
    "반복되는 이별 패턴이 있는 경우",
    "관계 방향을 객관적으로 알고 싶은 경우"
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-bg-primary">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white">이런 분들께 상담을 추천합니다</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-bg-secondary border border-white/10 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
            <ul className="space-y-6 md:space-y-8 flex flex-col">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
                  <span className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="text-center space-y-10">
            <div className="text-xl md:text-2xl font-bold leading-relaxed">
              <p className="text-text-secondary font-medium mb-2">혼자 고민하기보다</p>
              <p className="text-white">현재 상황을 한 번 정리해보세요.</p>
            </div>
            
            <a href={KAKAO_LINK} className="inline-flex items-center justify-center gap-4 bg-white text-bg-primary px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-lg md:text-xl hover:bg-accent hover:text-white transition-all duration-300 group w-full sm:w-auto">
              카카오톡 상담 예약하기
              <span className="bg-bg-primary text-white p-2 rounded-full group-hover:bg-white group-hover:text-accent transition-colors">
                <ArrowRight size={20} />
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
      title: "\"멘탈이 무너져도\n전략이 있으면 다시 만날 수 있습니다.\"",
      titleNode: <>"멘탈이 무너져도 <br className="block md:hidden"/>전략이 있으면 <br/>다시 만날 수 있습니다."</>,
      desc: "갑작스러운 이별 이후\n연락이 완전히 끊긴 상황이었습니다.\n\n감정적으로 연락을 반복하면서\n상대 반응은 점점 더 차가워지고 있었습니다.\n\n상담을 통해\n상대 심리와 관계 흐름을 분석하고\n재접촉 타이밍과 대화 전략을 설계했습니다.\n\n✔ 감정적인 연락 중단\n✔ 재접촉 타이밍 조정\n✔ 관계 흐름 재설계\n\n상담 이후 다시 연락이 이어졌고\n자연스럽게 관계가 다시 이어졌습니다.",
      tags: ["#재회성공", "#이별후전략", "#감정코칭"],
      img: "/assets/review-01.png",
      imgStyle: { objectPosition: "center 100%", imageRendering: "-webkit-optimize-contrast" as const },
      scale: 0.96
    },
    {
      title: "\"읽씹하던 상대가\n먼저 연락했습니다.\"",
      desc: "연락을 보내도\n읽고 답장이 오지 않는 상황이 계속되었습니다.\n\n관계가 끝난 것 같다는 생각에\n어떻게 해야 할지 고민하던 상황이었습니다.\n\n상담을 통해\n대화 흐름과 관계 위치를 분석하고\n접근 방식을 조정했습니다.\n\n✔ 메시지 구조 수정\n✔ 관계 리드 전략 설계\n✔ 재접근 타이밍 조정\n\n이후 상대가 먼저 연락을 하며\n대화가 다시 이어지기 시작했습니다.",
      tags: ["#썸전략", "#관계역전", "#심리분석"],
      img: "/assets/review-02.png",
      imgStyle: { objectPosition: "center 100%", imageRendering: "-webkit-optimize-contrast" as const },
      scale: 0.95
    },
    {
      title: "\"반복되는 이별 패턴을\n끊어냈습니다.\"",
      desc: "연애를 할 때마다\n비슷한 이유로 갈등과 이별이 반복되는 상황이었습니다.\n\n관계가 다시 시작되더라도\n결국 같은 문제로 멀어지는 패턴이 있었습니다.\n\n상담을 통해\n관계 패턴과 갈등 원인을 분석했습니다.\n\n✔ 관계 패턴 분석\n✔ 감정 대화 방식 개선\n✔ 갈등 대응 전략 설계\n\n이후 관계 갈등이 크게 줄어들고\n안정적인 관계를 유지하고 있습니다.",
      tags: ["#연애패턴", "#자존감회복", "#장기연애"],
      img: "/assets/review-03.png",
      imgStyle: { objectPosition: "center 100%", imageRendering: "-webkit-optimize-contrast" as const },
      scale: 1.11
    },
    {
      title: "\"이별의 아픔을 딛고\n새로운 사랑을 시작했습니다.\"",
      desc: "이별 이후\n지난 관계에 대한 아픔이 오래 남아\n새로운 관계를 시작하는 것이 어려운 상황이었습니다.\n\n상대와의 기억과 감정 때문에\n연애 자체가 두려워진 상태였습니다.\n\n상담을 통해\n이별 이후 남아있는 감정과 관계 패턴을 분석하고 관계를 바라보는 방향을 다시 정리했습니다.\n\n✔ 이별 이후 감정 정리\n✔ 관계 패턴 분석\n✔ 새로운 관계를 위한 방향 설정\n\n지난 관계의 아픔을 정리하고\n새로운 사랑을 시작하게 되었습니다.",
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
              {/* 
                [글씨 사이즈 조정 방법]
                - title(제목): text-[26px] (모바일), md:text-4xl (PC) 등의 클래스 숫자를 변경하세요.
                - desc(본문): text-sm (모바일), md:text-lg (PC) 등의 클래스 숫자를 변경하세요.
                
                [문단 나누기 방법]
                - 위 projects 배열의 desc 텍스트 안에서 \n 을 입력하면 줄바꿈이 되고, \n\n 을 입력하면 문단이 나뉩니다.
              */}
              <h3 className="text-[26px] sm:text-3xl md:text-4xl font-bold mb-4 md:mb-5 text-accent transition-colors whitespace-pre-line leading-[1.3] md:leading-tight">{p.titleNode || p.title}</h3>
              <p className="text-text-secondary text-[17px] sm:text-[19px] md:text-[22px] mb-6 md:mb-8 whitespace-pre-line leading-relaxed">{p.desc}</p>
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

const CountUp = ({ end, decimals = 0, duration = 2 }: { end: number, decimals?: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(end * easeProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
};

const Services = () => {
  const services = [
    {
      name: "첫 상담",
      desc: "상황 분석과 방향 설계",
      price: "55,000원",
      features: ["심리분석", "피드백 & 솔루션", "사후 피드백 (3회)", "상담 요약본 제공"]
    },
    {
      name: "재상담",
      desc: "전략 조율과 피드백",
      price: "38,000원",
      features: ["30분 상담 (전화 or 카톡)", "심리분석", "피드백 & 솔루션", "사후 피드백 (2회)"]
    },
    {
      name: "밀착케어 프리미엄",
      desc: "1주간 밀착케어로\n함께하는 전략 컨설팅",
      price: "140,000원",
      features: ["초기상담 & 심리분석", "집중 피드백으로 내적 불안감 해소", "대리카톡 지원", "1주 맞춤형 재회 컨설팅"]
    }
  ];

  return (
    <section id="services" className="py-[120px] bg-bg-secondary relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">OUR<br/><span className="text-text-secondary">SERVICES</span></h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                  <CountUp end={5} /><span className="text-accent">년</span>
                </div>
                <div className="text-text-secondary font-bold tracking-widest text-sm">상담 경력</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                  <CountUp end={500} /><span className="text-accent">+</span>
                </div>
                <div className="text-text-secondary font-bold tracking-widest text-sm">누적 상담 건수</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                  <CountUp end={100} /><span className="text-accent">/100</span>
                </div>
                <div className="text-text-secondary font-bold tracking-widest text-sm">크몽 만족도</div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border border-white/10 p-10 rounded-3xl hover:bg-white/5 transition-colors group h-full flex flex-col">
                <h3 className="text-3xl font-black mb-2">{s.name}</h3>
                <p className="text-text-secondary mb-8 min-h-[3rem] whitespace-pre-line">{s.desc}</p>
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
  <section id="about" className="py-[120px] overflow-hidden">
    <div className="max-w-[1100px] mx-auto px-6 md:px-12">
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
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      num: "Q1.",
      q: "상담은 어떤 방식으로 진행되나요?",
      a: [
        "간단한 사전 설문을 통해 현재 상황을 파악한 뒤 상대의 심리와 관계의 흐름을 분석합니다.",
        "이 과정을 바탕으로 상황에 맞는 맞춤 전략을 설계해드립니다.",
        "모든 상담은 1:1로 진행되며, 선택하신 플랜에 따라 사후 피드백이 포함됩니다."
      ]
    },
    {
      num: "Q2.",
      q: "개인정보나 상담 내용이 외부에 공개되나요?",
      a: [
        "아니요. 모든 상담 내용은 철저하게 비밀이 보장됩니다.",
        "홈페이지에 공개되는 상담 사례와 후기는 내담자의 동의가 있는 경우에 한해 사용되며, 이름과 개인정보는 모두 블라인드 처리됩니다."
      ]
    },
    {
      num: "Q3.",
      q: "이미 차인 상태인데 상담 효과가 있을까요?",
      a: [
        "실제로 가장 많이 상담을 요청하시는 상황입니다.",
        "단호하게 이별을 통보받은 경우에도 상대의 심리 변화와 접근 타이밍에 따라 관계의 흐름이 달라질 수 있습니다.",
        "가능성에 대해서는 초기 상담에서 현실적으로 안내드립니다."
      ]
    },
    {
      num: "Q4.",
      q: "어떤 플랜을 선택해야 할지 모르겠습니다.",
      a: [
        "처음에는 첫 상담 플랜을 선택하시면 됩니다.",
        "내담자분의 상황과 감정을 충분히 듣고 현재 관계의 흐름을 분석한 뒤 적절한 방향과 상담 플랜을 함께 안내드립니다.",
        "궁금하신 부분은 카카오톡 문의하기로 편하게 말씀해 주세요."
      ]
    },
    {
      num: "Q5.",
      q: "재회가 반드시 가능한가요?",
      a: [
        "재회를 보장하지는 않습니다.",
        "대신 상담 초기에 현재 상황을 객관적으로 분석하고 가능성을 솔직하게 안내드립니다.",
        "재회가 어려운 경우에도 반복되는 연애 패턴을 분석해 다음 관계에서 같은 문제를 반복하지 않도록 돕습니다."
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[100px] px-3 md:px-12 bg-[#111111]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16 px-3 md:px-0">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white">자주 묻는 질문 FAQ</h2>
            <p className="text-[#999] text-xl md:text-2xl font-medium leading-relaxed">상담 전 많은 분들이<br/>궁금해하시는 내용을 정리했습니다.</p>
          </div>
        </FadeIn>

        <div className="flex flex-col border-t border-[rgba(255,255,255,0.06)]">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div 
                className="border-b border-[rgba(255,255,255,0.06)] overflow-hidden cursor-pointer transition-colors hover:bg-white/5 pl-[20px] md:pl-[32px] pr-[24px]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="py-6 md:py-8 flex items-start gap-[8px]">
                  <span className="shrink-0 whitespace-nowrap font-bold text-white min-w-[36px] md:min-w-[40px] text-[16px] md:text-[20px]">{faq.num}</span>
                  <div className="flex-1">
                    <div className="font-bold text-white text-[16px] md:text-[20px] pr-8">{faq.q}</div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <div className="pt-4 pb-2">
                            {faq.a.map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-[#999] text-[13px] md:text-lg font-normal leading-[1.8] mb-[2px]">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="text-white shrink-0 mt-[-2px]">
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0a0a] py-[120px] px-6 md:px-12 border-t border-white/10">
    <div className="max-w-[1100px] mx-auto">
      <FadeIn>
        <h2 className="text-[clamp(32px,10vw,120px)] font-black leading-none tracking-tighter mb-12 hover:text-accent transition-colors cursor-pointer uppercase break-keep">
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
                <span>카카오톡</span>
              </div>
              <span>상담 예약하기</span>
            </a>
            <a href={KMONG_LINK} className="border border-white/20 text-white px-8 py-6 rounded-2xl font-bold hover:bg-white hover:text-bg-primary transition-all duration-200 flex flex-col items-center justify-center gap-1 text-2xl md:text-3xl leading-tight w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>크몽</span>
              <span>후기 보기</span>
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

const SectionDivider = () => (
  <div className="w-full h-[1px] bg-white/[0.06]" />
);

export default function VersionCoderixOld() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent selection:text-white">
      <Header />
      <Hero />
      <SelfDiagnosis />
      <Projects />
      <Services />
      <About />
      <SectionDivider />
      <FAQ />
      <Footer />
    </div>
  );
}
