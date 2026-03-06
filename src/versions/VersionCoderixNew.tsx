import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { MessageCircle, ChevronDown, Star, CheckCircle2, ArrowRight } from 'lucide-react';

const KAKAO_LINK = "#"; // Placeholder for Kakao
const DIAGNOSIS_LINK = "#"; // Placeholder for Free Diagnosis

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 md:py-32 px-5 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Button = ({ href, primary = true, children, className = "", onClick }: any) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-lg transition-all duration-300 rounded-lg";
  const primaryStyle = "bg-accent text-white hover:bg-white hover:text-bg-primary shadow-lg shadow-accent/20";
  const secondaryStyle = "bg-bg-secondary text-white hover:bg-white/10 border border-white/10";
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${className}`}
    >
      {children}
    </Component>
  );
};

// --- Sections ---

const Hero = () => (
  <section className="relative pt-32 pb-24 px-5 overflow-hidden bg-bg-primary min-h-[90vh] flex items-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="flex flex-col items-start text-left">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-8">
            <span className="border border-white/20 px-3 py-1 rounded-full">재회 전략</span>
            <span className="border border-white/20 px-3 py-1 rounded-full">연애 설계</span>
            <span className="border border-white/20 px-3 py-1 rounded-full">관계 회복</span>
            <span className="border border-white/20 px-3 py-1 rounded-full">감정 코칭</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-text-primary mb-8 leading-[1.1]">
            이별 후 72시간,<br />
            지금이 <span className="text-accent">재회의 골든타임</span>입니다
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} className="text-lg md:text-xl font-medium text-text-secondary mb-12 max-w-lg leading-relaxed">
          <p>감정이 아닌 '전략'으로 접근합니다.<br/>재회 성공률 기반 1:1 맞춤 컨설팅</p>
        </FadeIn>

        <FadeIn delay={0.3} className="w-full sm:w-auto">
          <Button href={DIAGNOSIS_LINK} className="w-full sm:w-auto px-10 py-5 text-lg">
            무료 상황 진단받기 <ArrowRight size={20} />
          </Button>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="w-full h-full min-h-[400px] relative hidden md:block">
        <div className="absolute inset-0 bg-bg-secondary rounded-[2rem] transform rotate-3 scale-105 opacity-50 border border-white/10"></div>
        <img 
          src="/assets/hero-banner.png" 
          alt="재회 골든타임" 
          className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/suit/800/1000"; }}
        />
      </FadeIn>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="bg-bg-secondary text-text-primary py-24 px-5 border-y border-white/10">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black mb-16 leading-tight tracking-tight text-center md:text-left">
          연애 상담, 왜 효과가 없었을까요?
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-12 text-lg font-medium text-text-secondary mb-16">
        <FadeIn delay={0.1}>
          <p className="mb-4 text-accent text-2xl font-bold">템플릿 조언</p>
          <p className="mb-2 text-white">100명에게 같은 말을 합니다</p>
          <p className="text-sm">→ 손쌤은 당신의 카톡, 통화 기록을 직접 분석합니다</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mb-4 text-accent text-2xl font-bold">감정 위로형 상담</p>
          <p className="mb-2 text-white">기분은 좋아지지만 상황은 그대로입니다</p>
          <p className="text-sm">→ 행동 시나리오를 설계해서 실제 변화를 만듭니다</p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mb-4 text-accent text-2xl font-bold">1회성 상담</p>
          <p className="mb-2 text-white">상담 후 혼자 남겨집니다</p>
          <p className="text-sm">→ 상담 후에도 실행 피드백을 제공합니다</p>
        </FadeIn>
      </div>
      <FadeIn delay={0.4} className="text-center md:text-left">
        <Button href={DIAGNOSIS_LINK} primary={false}>
          3분 안에 내 상황 점검하기 <ArrowRight size={20} />
        </Button>
      </FadeIn>
    </div>
  </section>
);

const BrandIntro = () => (
  <Section className="bg-bg-primary">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <FadeIn className="w-full md:w-5/12">
        <div className="aspect-[3/4] overflow-hidden bg-bg-secondary rounded-2xl border border-white/10 relative">
          <img 
            src="/assets/profile-suit.jpg" 
            alt="손쌤 프로필" 
            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/suit/600/800"; }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
            <p className="text-white font-bold text-xl">"감정은 이해하되,<br/>판단은 데이터로 합니다."</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.2} className="w-full md:w-7/12 space-y-10">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-text-primary">
          500건 이상의 이별을 되돌린<br />
          <span className="text-accent">재회 전략가, 손쌤</span>
        </h2>
        
        <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
          <div>
            <p className="text-text-secondary text-sm mb-1">누적 상담</p>
            <p className="text-3xl font-black text-white">500<span className="text-accent">+</span></p>
          </div>
          <div>
            <p className="text-text-secondary text-sm mb-1">재회 성공률</p>
            <p className="text-3xl font-black text-white">78<span className="text-accent">%</span></p>
          </div>
          <div>
            <p className="text-text-secondary text-sm mb-1">평균 만족도</p>
            <p className="text-3xl font-black text-white">4.8<span className="text-accent">/5.0</span></p>
          </div>
        </div>

        <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
          <p className="text-white">모든 상담은 카톡/통화 기록 기반 실제 상황 분석으로 진행합니다.</p>
          <div className="bg-bg-secondary p-6 rounded-xl border border-white/10 mt-6">
            <p className="text-accent font-bold mb-2">감정에 휘둘리는 연락 한 통이 재회의 가능성을 0으로 만듭니다.</p>
            <p>전략 없이 보낸 연락, 몇 번이나 후회하셨나요?</p>
          </div>
        </div>
      </FadeIn>
    </div>
  </Section>
);

const Situations = () => {
  const cases = [
    "이별 통보 후 아직 연락을 못 하고 있다",
    "연락은 했는데 읽씹/짧은 답만 돌아온다",
    "재회 글을 찾아보다 더 혼란스러워졌다",
    "감정적으로 연락했다가 차단당했다"
  ];

  return (
    <Section className="bg-bg-secondary border-y border-white/10">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-text-primary tracking-tight">이 중 하나라도 해당되면,<br/><span className="text-accent">지금 상담이 필요한 타이밍입니다</span></h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cases.map((text, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-bg-primary p-8 border border-white/10 flex items-center gap-4 hover:border-accent transition-colors rounded-xl group">
              <div className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                <CheckCircle2 size={16} className="text-text-secondary group-hover:text-white" />
              </div>
              <p className="font-bold text-lg text-text-primary">{text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4} className="text-center mt-12">
        <Button href={DIAGNOSIS_LINK} primary={false}>
          내 상황 진단하기 <ArrowRight size={20} />
        </Button>
      </FadeIn>
    </Section>
  );
};

const Process = () => (
  <Section className="bg-bg-primary">
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-text-primary">실제 상담은 이렇게 진행됩니다</h2>
    </FadeIn>
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {[
          { step: "STEP 1", title: "상황 접수", desc: "카톡/통화 기록 공유" },
          { step: "STEP 2", title: "정밀 분석", desc: "상대 심리 + 관계 패턴 진단" },
          { step: "STEP 3", title: "전략 설계", desc: "연락 타이밍, 문구, 톤 설계" },
          { step: "STEP 4", title: "실행 코칭", desc: "실시간 피드백" }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-bg-secondary p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
            <p className="text-accent font-black text-sm mb-4 tracking-widest">{item.step}</p>
            <h3 className="font-bold text-2xl text-white mb-2">{item.title}</h3>
            <p className="text-text-secondary font-medium">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={0.5} className="text-center">
        <p className="text-text-secondary mb-6">상담 사례 미리보기</p>
        <div className="flex justify-center gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-64 h-auto shrink-0 border border-white/10 rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
              <img src={`https://picsum.photos/seed/chat${i}/400/700`} alt={`상담 사례 ${i}`} className="w-full grayscale hover:grayscale-0" />
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </Section>
);

const Procedure = () => {
  const steps = [
    { title: "1분 문의", desc: "카톡 또는 폼으로 간단 접수" },
    { title: "무료 사전 진단", desc: "상황 요약 + 상담 가능 여부 판단" },
    { title: "맞춤 상담 설계", desc: "패키지 선택 + 결제" },
    { title: "1:1 전략 상담", desc: "분석 리포트 + 행동 시나리오 제공" },
    { title: "실행 피드백", desc: "상담 후 72시간 내 후속 점검" }
  ];

  return (
    <Section className="bg-bg-secondary border-y border-white/10">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-text-primary">상담 진행 절차</h2>
      </FadeIn>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex items-center gap-6 bg-bg-primary p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-bg-secondary text-accent flex items-center justify-center text-xl font-black shrink-0 border border-white/5">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-1">{step.title}</h3>
                <p className="text-text-secondary">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Reviews = () => {
  const reviews = [
    { text: "3일 만에 먼저 연락이 왔습니다", tag: "이별 2주차, 30대 여성" },
    { text: "차단이 풀렸습니다. 진짜 됩니다", tag: "이별 1개월차, 20대 남성" },
    { text: "읽씹만 하던 사람이 장문 답장을 보냈어요", tag: "이별 3주차, 20대 여성" },
    { text: "알려주신 타이밍에 연락했더니 바로 만남 잡혔습니다", tag: "이별 2개월차, 30대 남성" }
  ];
  
  return (
    <Section className="bg-bg-primary overflow-hidden">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-white">상담 48시간 후, 이 분들에게 일어난 변화</h2>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
        {reviews.map((review, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-bg-secondary p-10 border border-white/10 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden">
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
              </div>
              <p className="text-2xl font-bold text-white mb-6 leading-relaxed">"{review.text}"</p>
              <p className="text-text-secondary font-medium mt-auto">— {review.tag}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={0.4} className="text-center">
        <Button href={DIAGNOSIS_LINK} primary={true}>
          나도 이 결과를 만들고 싶다면 <ArrowRight size={20} />
        </Button>
      </FadeIn>
    </Section>
  );
};

const Packages = () => {
  const pkgs = [
    {
      name: "QUICK",
      price: "30,000원",
      subtitle: "지금 보낼 연락, 이대로 괜찮을까?",
      includes: "상황 분석 + 즉시 실행 가능한 연락 전략 1건",
      time: "텍스트 상담 30분",
      target: "급한 상황, 빠른 판단이 필요할 때"
    },
    {
      name: "DEEP",
      price: "50,000원",
      subtitle: "왜 이별했는지부터 정확히 짚어드립니다",
      includes: "음성 50분 + 관계 분석 리포트 + 행동 시나리오",
      after: "72시간 내 실행 피드백 2회",
      target: "재회 전략이 필요한 분",
      highlight: true
    },
    {
      name: "PREMIUM",
      price: "150,000원",
      subtitle: "재회까지, 끝까지 함께합니다",
      includes: "DEEP 전체 + 2주간 밀착 코칭\n재회 시나리오 풀 설계\n연락 문구/타이밍 실시간 컨설팅",
      after: "무제한 피드백",
      target: "확실한 결과를 원하는 분",
      best: true
    }
  ];

  return (
    <Section className="bg-bg-secondary border-y border-white/10">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-white">상담 패키지</h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pkgs.map((pkg, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className={`h-full p-10 border transition-all duration-300 rounded-2xl flex flex-col ${pkg.highlight ? 'border-accent bg-bg-primary relative shadow-2xl shadow-accent/10 transform md:-translate-y-4' : 'border-white/10 bg-bg-primary hover:border-white/30'}`}>
              {pkg.best && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-white text-xs font-black px-4 py-1 rounded-full tracking-widest">
                  BEST
                </div>
              )}
              <h3 className="text-2xl font-black mb-2 text-white">{pkg.name}</h3>
              <div className="text-3xl font-black text-accent mb-6">{pkg.price}</div>
              <p className="text-white font-bold mb-8 pb-8 border-b border-white/10">"{pkg.subtitle}"</p>
              
              <div className="space-y-6 flex-grow text-sm">
                <div>
                  <p className="text-text-secondary mb-1 font-bold">포함 내역</p>
                  <p className="text-white whitespace-pre-line leading-relaxed">{pkg.includes}</p>
                </div>
                {(pkg.time || pkg.after) && (
                  <div>
                    <p className="text-text-secondary mb-1 font-bold">{pkg.time ? '소요 시간' : '사후 관리'}</p>
                    <p className="text-white">{pkg.time || pkg.after}</p>
                  </div>
                )}
                <div className="pt-6 mt-auto">
                  <p className="text-accent font-bold">추천 대상: {pkg.target}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "차단당한 상태에서도 재회가 가능한가요?", a: "네. 차단은 감정의 끝이 아니라 '정리가 안 된 상태'입니다. 차단 해제 전략부터 설계합니다." },
    { q: "먼저 연락하면 안 되나요?", a: "타이밍과 내용이 핵심입니다. 무작정 연락하면 역효과, 전략적 첫 연락 설계를 도와드립니다." },
    { q: "상대에게 새 연인이 생겼는데도 가능한가요?", a: "리바운드 관계의 80%는 3개월 내 끝납니다. 그 타이밍에 맞춘 전략이 있습니다." },
    { q: "결과를 보장할 수 있나요?", a: "100% 보장은 어떤 상담사도 할 수 없습니다. 다만, 가능성을 최대화하는 전략과 실행을 함께합니다." },
    { q: "상담은 어떤 방식으로 하나요?", a: "카톡 텍스트 또는 음성 통화 중 선택. 예약 후 정해진 시간에 1:1로 진행됩니다." },
    { q: "지금 바로 상담받을 수 있나요?", a: "당일 예약 가능합니다. 문의 후 1~2시간 내 상담 시작 가능합니다." },
    { q: "상담 내용이 외부에 공개되나요?", a: "모든 상담 내용은 철저히 비공개 처리됩니다. 녹음/캡처/공유 절대 없습니다." },
    { q: "상담 전에 뭘 준비하면 되나요?", a: "상대와의 마지막 대화(카톡/문자) + 이별 경위만 정리해주세요. 나머지는 상담에서 함께 분석합니다." }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section className="bg-bg-primary">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-white">자주 묻는 질문</h2>
      </FadeIn>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center font-bold text-white hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-lg pr-8"><span className="text-accent mr-4">Q.</span>{faq.q}</span>
                <ChevronDown size={24} className={`text-text-secondary shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2 text-text-secondary leading-relaxed border-t border-white/5 font-medium">
                      <span className="text-white font-bold mr-4">A.</span>{faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const FinalCTA = () => (
  <Section className="bg-bg-secondary text-white text-center !pb-40 border-t border-white/10">
    <FadeIn>
      <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
        매일 밤 같은 생각을 반복하고 있다면,<br/>그건 고민이 아니라 시간 낭비입니다.
      </h2>
      <p className="text-xl md:text-2xl text-accent mb-12 font-bold">
        지금 이 순간에도 재회의 가능성은 줄어들고 있습니다.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
        <Button href={DIAGNOSIS_LINK} primary={true} className="w-full">
          무료 상황 진단 신청하기 <ArrowRight size={20} />
        </Button>
        <Button href={KAKAO_LINK} primary={false} className="w-full">
          지금 바로 카톡 상담 시작하기 <MessageCircle size={20} />
        </Button>
      </div>
    </FadeIn>
  </Section>
);

const Footer = () => (
  <footer className="bg-bg-primary text-text-secondary py-16 px-5 text-center text-sm pb-32 md:pb-16 border-t border-white/10">
    <p className="font-black text-white mb-2 text-xl tracking-tighter">손쌤연애컨설팅<span className="text-accent">.</span></p>
    <p className="mb-8 font-medium">희망고문 없는 현실적인 연애/재회 상담</p>
    <p className="text-text-secondary/60">© {new Date().getFullYear()} 손쌤연애컨설팅. All rights reserved.</p>
  </footer>
);

const FloatingCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-bg-secondary text-white py-4 px-5 z-50 flex flex-col sm:flex-row justify-center items-center gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10">
    <span className="font-bold text-lg hidden sm:inline">오늘 상담 가능 — 남은 슬롯 <span className="text-accent">2자리</span></span>
    <div className="flex gap-2 w-full sm:w-auto">
      <a href={DIAGNOSIS_LINK} className="flex-1 sm:flex-none bg-bg-primary border border-white/20 text-white px-6 py-3 font-bold hover:bg-white/10 transition-colors text-center rounded-lg">
        30초 무료 진단
      </a>
      <a href={KAKAO_LINK} className="flex-[2] sm:flex-none bg-accent text-white px-8 py-3 font-bold hover:bg-white hover:text-bg-primary transition-colors text-center rounded-lg">
        바로 예약하기 &rarr;
      </a>
    </div>
  </div>
);

export default function VersionCoderixNew() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white bg-bg-primary text-text-primary pb-24 md:pb-0">
      <Hero />
      <PainPoints />
      <BrandIntro />
      <Situations />
      <Process />
      <Procedure />
      <Reviews />
      <Packages />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
