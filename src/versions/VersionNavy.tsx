import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { MessageCircle, ExternalLink, ChevronDown, Star, CheckCircle2, ArrowRight } from 'lucide-react';

const KMONG_LINK = "https://kmong.com/gig/393280#194";
const KAKAO_LINK = "#"; // Placeholder

// --- Reusable Components ---

const FadeIn = ({ children, delay = 0, className = "", key }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      key={key}
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
  const primaryStyle = "bg-gold-warm text-navy-dark hover:bg-gold-hover shadow-lg shadow-gold-warm/20";
  const secondaryStyle = "bg-navy-soft text-white hover:bg-divider border border-divider";
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      target={href?.startsWith('http') ? "_blank" : undefined}
      rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
      className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${className}`}
    >
      {children}
    </Component>
  );
};

// --- Sections ---

const Hero = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-5 overflow-hidden bg-navy-deep">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text Content */}
      <div className="flex flex-col items-start text-left z-10">
        <FadeIn delay={0.1}>
          {/* Micro-labels (Tags) */}
          <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.2em] text-text-light uppercase mb-8">
            <span className="border border-text-light/30 px-3 py-1 rounded-full">연애 상담</span>
            <span className="w-1 h-1 rounded-full bg-coral-soft"></span>
            <span className="border border-text-light/30 px-3 py-1 rounded-full">재회 컨설팅</span>
            <span className="w-1 h-1 rounded-full bg-coral-soft"></span>
            <span className="border border-text-light/30 px-3 py-1 rounded-full">관계 회복</span>
          </div>
          
          {/* Massive Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter text-text-white mb-8 leading-[1.05]">
            헤어진 연인이<br />
            <span className="text-gold-warm">매달리게 만들어</span><br />
            드립니다.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} className="text-lg md:text-xl font-medium text-text-cool mb-12 max-w-lg leading-relaxed">
          <p>운이나 타로에 의존하지 않습니다.<br/>철저한 상황 분석과 심리 파악으로 가장 현실적이고 확실한 재회 방향을 설계합니다.</p>
        </FadeIn>

        <FadeIn delay={0.3} className="w-full sm:w-auto">
          <Button href={KMONG_LINK} className="w-full sm:w-auto px-10 py-5 text-lg">
            크몽 상담 의뢰하기 <ArrowRight size={20} />
          </Button>
        </FadeIn>
      </div>

      {/* Right: Premium Image */}
      <FadeIn delay={0.2} className="w-full h-full min-h-[400px] md:min-h-[600px] relative">
        <div className="absolute inset-0 bg-navy-soft rounded-[2rem] md:rounded-[3rem] transform rotate-3 scale-105 opacity-50"></div>
        <img 
          src="/assets/hero-banner.png" 
          alt="희망고문 없는 상담" 
          className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl relative z-10"
          onError={(e) => {
            e.currentTarget.src = "https://picsum.photos/seed/suit/800/1000";
          }}
          referrerPolicy="no-referrer"
        />
      </FadeIn>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="bg-navy-dark text-text-white py-24 px-5 border-y border-divider">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black mb-16 leading-tight tracking-tight">
          불명확한 타사 상담에 실망하셨나요?<br/>
          <span className="text-coral-soft">바로 걱정 해결하기 &gt;</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-12 text-lg font-medium text-text-cool">
        <FadeIn delay={0.1}>
          <p className="mb-4 text-text-white text-2xl font-bold">형식적인 위로에 속아서</p>
          <p>실질적인 해결책 없이 돈만 낭비하지 않으셨나요?</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mb-4 text-text-white text-2xl font-bold">운이나 타로에 의존하는</p>
          <p>비현실적인 공장식 업체한테 믿고 맡길 수 있으신가요?</p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mb-4 text-text-white text-2xl font-bold">내 상황도 이해 못하는 상담</p>
          <p>과연 상대방의 심리를 정확히 분석하고 재회까지 연결될까요?</p>
        </FadeIn>
      </div>
    </div>
  </section>
);

const BrandIntro = () => (
  <Section className="bg-navy-deep">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <FadeIn className="w-full md:w-1/2">
        <div className="aspect-[3/4] overflow-hidden bg-navy-soft rounded-2xl border border-divider">
          <img 
            src="/assets/profile-suit.jpg" 
            alt="손쌤 프로필" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/seed/suit/600/800";
            }}
            referrerPolicy="no-referrer"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.2} className="w-full md:w-1/2 space-y-8">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-text-white">
          운이나 예측이 아닌,<br />
          현실적인 방향을 찾습니다.
        </h2>
        <div className="space-y-6 text-lg text-text-cool font-medium leading-relaxed">
          <p>저 역시 과거 연애 문제로 수많은 시행착오를 겪었습니다.</p>
          <p>답답한 마음에 점집, 타로, 여러 재회 상담을 전전했지만, 돌아오는 것은 형식적인 답변뿐이었고 실질적인 해결은 어려웠습니다.</p>
          <p>그 뼈아픈 경험을 통해 연애와 재회는 <strong className="text-gold-warm font-bold">"운이나 예측"이 아니라 "상황에 대한 정확한 이해"</strong>가 가장 중요하다는 것을 깨달았습니다.</p>
          <p>현재는 개인 상담사로서, 공장식 상담이 아닌 내담자의 개별 상황을 깊이 분석하고 현실적인 방향을 함께 찾는 상담을 진행하고 있습니다.</p>
        </div>
      </FadeIn>
    </div>
  </Section>
);

const Situations = () => {
  const cases = [
    "이별 후 재회를 원하는 경우",
    "연락은 이어지지만 관계가 애매한 경우",
    "반복되는 연애 패턴",
    "부부 관계 갈등"
  ];

  return (
    <Section className="bg-navy-dark border-y border-divider">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-text-white tracking-tight">이런 분들께 추천합니다</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cases.map((text, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-navy-soft p-8 border border-divider h-full flex items-center justify-center text-center hover:border-gold-warm transition-colors rounded-xl">
              <p className="font-bold text-lg text-text-white">{text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const CaptureSlider = ({ title, prefix, count }: { title: string, prefix: string, count: number }) => (
  <Section className="overflow-hidden bg-bg-light">
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-navy-deep">{title}</h2>
    </FadeIn>
    <div className="relative w-full overflow-hidden pb-8">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-start">
        {[...Array(count), ...Array(count)].map((_, i) => (
          <div key={i} className="min-w-[280px] md:min-w-[320px] shrink-0 mx-2">
            <div className="bg-white overflow-hidden border border-gray-200 relative rounded-xl shadow-sm">
              <img 
                src={`/assets/${prefix}-0${(i % count) + 1}.png`} 
                alt={`${title} ${(i % count) + 1}`}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${prefix}${i % count}/400/700`;
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Process = () => (
  <Section className="bg-navy-deep">
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-text-white">상담 진행 절차</h2>
    </FadeIn>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {["문의", "상담 일정 조율", "상담 신청서 작성", "상담 진행", "상담 후 피드백"].map((step, i) => (
          <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-navy-soft border-2 border-divider text-gold-warm flex items-center justify-center text-2xl font-black mb-4 shadow-lg">
              {i + 1}
            </div>
            <h3 className="font-bold text-lg text-text-white">{step}</h3>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.5} className="mt-16 border border-divider p-8 text-center text-text-cool font-medium space-y-2 bg-navy-dark rounded-2xl">
        <p>결제 전 메시지를 전송하여 상담 일정 조율을 부탁드립니다.</p>
        <p>당일 예약이 어려울 수 있어 최소 1~2일 전에 문의 주시면 원활한 예약이 가능합니다.</p>
      </FadeIn>
    </div>
  </Section>
);

const Reviews = () => {
  const reviews = [
    "상담 후 마음이 편안해졌다는 후기",
    "상황을 현실적으로 정리해 줬다는 후기",
    "혼자 고민할 때보다 도움이 됐다는 후기",
    "상담 이후 연락 흐름이 달라졌다는 후기"
  ];
  
  return (
    <Section className="bg-bg-light text-navy-deep overflow-hidden">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-navy-deep">생생한 상담 후기</h2>
      </FadeIn>
      
      {/* Review Captures */}
      <div className="relative w-full overflow-hidden mb-8 pb-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-start">
          {[...Array(4), ...Array(4)].map((_, i) => (
            <div key={`img-${i}`} className="min-w-[280px] md:min-w-[320px] shrink-0 mx-2">
              <div className="bg-white overflow-hidden border border-gray-200 relative rounded-xl shadow-sm">
                <img 
                  src={`/assets/review-0${(i % 4) + 1}.png`} 
                  alt={`크몽 리뷰 ${(i % 4) + 1}`}
                  className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/review${i % 4}/400/700`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Texts */}
      <div className="relative w-full overflow-hidden pb-8">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
          {[...reviews, ...reviews].map((text, i) => (
            <div key={`text-${i}`} className="min-w-[280px] md:min-w-[320px] shrink-0 mx-2">
              <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm h-full flex flex-col justify-center">
                <div className="flex text-gold-warm mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
                </div>
                <p className="font-medium text-navy-deep leading-relaxed">"{text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <FadeIn delay={0.4} className="text-center mt-8">
        <Button href={KMONG_LINK} primary={false} className="!bg-navy-deep !text-white hover:!bg-navy-dark !border-none">
          크몽 리뷰 더 보러가기
        </Button>
      </FadeIn>
    </Section>
  );
};

const Packages = () => {
  const pkgs = [
    {
      name: "DELUXE",
      price: "40,000원",
      desc: "초기상담으로 50분 상담(전화 or 카톡)",
      features: ["심리분석", "피드백 & 솔루션", "사후 피드백 (3회)", "상담 요약본 제공"]
    },
    {
      name: "STANDARD",
      price: "30,000원",
      desc: "재상담 전용(30분)",
      features: ["30분 상담(전화 or 카톡)", "심리분석", "피드백 & 솔루션", "사후 피드백 (2회)", "상담 요약본 제공"]
    },
    {
      name: "PREMIUM",
      price: "150,000원",
      desc: "재회 컨설팅 1주 패키지",
      features: ["초기상담", "심리분석", <span className="text-gold-warm font-bold">집중 피드백으로 내적 불안감 해소</span>, <span className="text-gold-warm font-bold">대리카톡</span>, <span className="text-gold-warm font-bold">1주 동안 상황 맞춤형 재회 컨설팅을 제공합니다.</span>],
      highlight: true
    }
  ];

  return (
    <Section className="bg-navy-deep">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-text-white">상담 패키지</h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6">
        {pkgs.map((pkg, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className={`h-full p-10 border-2 transition-all duration-300 rounded-2xl ${pkg.highlight ? 'border-gold-warm bg-navy-dark relative shadow-2xl shadow-gold-warm/10' : 'border-divider bg-navy-soft hover:border-gold-warm/50'}`}>
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-coral-soft text-white text-sm font-bold px-6 py-1 rounded-full">
                  BEST
                </div>
              )}
              <h3 className="text-2xl font-black mb-2 text-text-white">{pkg.name}</h3>
              <div className="text-4xl font-black text-gold-warm mb-4">{pkg.price}</div>
              <p className="text-text-cool font-medium mb-8 pb-8 border-b border-divider">{pkg.desc}</p>
              <ul className="space-y-4">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-gold-warm shrink-0 mt-0.5" />
                    <span className="text-text-white font-medium leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "상대가 단호하게 이별을 말했는데 가능성이 있을까요?", a: "단호함의 이면에는 여러 감정이 섞여 있습니다. 상황 분석을 통해 진짜 이유를 파악하면 가능성을 찾을 수 있습니다." },
    { q: "연락을 먼저 해야 할까요 기다려야 할까요?", a: "상황에 따라 다릅니다. 타이밍이 맞지 않는 연락은 오히려 독이 될 수 있으므로, 현재 흐름을 먼저 분석해야 합니다." },
    { q: "상대에게 새로운 이성이 있는 것 같아요.", a: "새로운 이성의 존재 유무보다, 두 사람의 관계에서 해결되지 않은 근본적인 문제를 파악하는 것이 우선입니다." },
    { q: "재회 성공을 보장하나요?", a: "결과를 100% 보장하는 상담은 없습니다. 다만, 실수 없는 최선의 방향과 전략을 세워 가능성을 극대화합니다." },
    { q: "상담 방식은 어떻게 진행되나요?", a: "전화 또는 카카오톡 텍스트 상담으로 진행되며, 패키지에 따라 사후 피드백이 제공됩니다." },
    { q: "당일 상담도 가능한가요?", a: "질 높은 상담을 위해 하루 건수를 제한하고 있어 당일 예약은 어려울 수 있습니다. 1~2일 전 문의를 권장합니다." },
    { q: "상담 내용은 비밀이 보장되나요?", a: "네, 모든 상담 내용은 철저히 비밀이 보장되며 외부로 유출되지 않습니다." },
    { q: "상담 전에 준비해야 할 것이 있나요?", a: "상담 신청서를 통해 두 분의 연애 기간, 이별 사유, 최근 연락 상황 등을 미리 작성해 주시면 더 깊이 있는 분석이 가능합니다." }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section className="bg-bg-light">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-navy-deep">자주 묻는 질문</h2>
      </FadeIn>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center font-bold text-navy-deep hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-lg"><span className="text-coral-soft mr-4">Q.</span>{faq.q}</span>
                <ChevronDown size={24} className={`text-gray-400 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2 text-navy-soft leading-relaxed border-t border-gray-100 font-medium">
                      <span className="text-gray-400 font-bold mr-4">A.</span>{faq.a}
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
  <Section className="bg-navy-dark text-text-white text-center !pb-32 border-t border-divider">
    <FadeIn>
      <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
        혼자 고민할수록<br/>상황은 더 복잡해집니다.
      </h2>
      <p className="text-xl md:text-2xl text-text-cool mb-12 font-medium">
        지금 필요한 건 감정이 아니라 방향입니다.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
        <Button href={KMONG_LINK} primary={true} className="w-full">
          크몽 리뷰 보러가기 <ArrowRight size={20} />
        </Button>
        <Button href={KAKAO_LINK} primary={false} className="w-full">
          카카오톡 상담 문의하기 <MessageCircle size={20} />
        </Button>
      </div>
    </FadeIn>
  </Section>
);

const Footer = () => (
  <footer className="bg-navy-deep text-text-cool py-16 px-5 text-center text-sm pb-32 md:pb-16 border-t border-divider">
    <p className="font-bold text-text-white mb-2 text-lg">손쌤연애컨설팅</p>
    <p className="mb-8">희망고문 없는 현실적인 연애/재회 상담</p>
    <p className="text-text-cool/60">© {new Date().getFullYear()} 손쌤연애컨설팅. All rights reserved.</p>
  </footer>
);

const FloatingCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-navy-dark text-text-white py-4 px-5 z-50 flex flex-col sm:flex-row justify-center items-center gap-4 shadow-2xl border-t border-divider">
    <span className="font-bold text-lg hidden sm:inline">이번 주 상담 가능 잔여 타임: <span className="text-coral-soft">2건</span></span>
    <div className="flex gap-2 w-full sm:w-auto">
      <a href={KAKAO_LINK} className="flex-1 sm:flex-none bg-navy-soft text-white px-6 py-3 font-bold hover:bg-divider transition-colors text-center rounded-lg">
        카톡 문의
      </a>
      <a href={KMONG_LINK} className="flex-[2] sm:flex-none bg-gold-warm text-navy-dark px-8 py-3 font-bold hover:bg-gold-hover transition-colors text-center rounded-lg">
        상담 예약하기 &rarr;
      </a>
    </div>
  </div>
);

export default function VersionNavy() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold-warm selection:text-navy-dark bg-navy-deep text-text-white pb-24 md:pb-0">
      <Hero />
      <PainPoints />
      <BrandIntro />
      <Situations />
      <CaptureSlider title="실제 상담 과정" prefix="chat" count={4} />
      <Process />
      <Reviews />
      <Packages />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
