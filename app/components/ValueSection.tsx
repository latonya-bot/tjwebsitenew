"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ValueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [20, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full px-6 flex items-center justify-center"
      style={{ 
        background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 12%, transparent 12%), var(--ink-2)`,
        minHeight: '120vh',
        zIndex: 10
      }}
    >
      {/* Rotating Seal - Positioned to overlap Hero and Value sections */}
      <div 
        className="absolute left-1/2 -translate-x-1/2"
        style={{ 
          top: '-100px',
          zIndex: 100
        }}
      >
        <div 
          className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '3px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 32px rgba(23,50,86,0.22)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <svg className="absolute inset-0 w-full h-full rotate-slow" viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
            </defs>
            <text className="text-[14px] font-semibold tracking-wider fill-current" style={{ fill: '#ffffff' }}>
              <textPath href="#circlePath" startOffset="0%">
                Work with me • Work with me • Work with me • 
              </textPath>
            </text>
          </svg>
          <div className="text-center relative z-10" style={{ color: '#ffd700', fontFamily: 'var(--font-playfair)' }}>
            <div className="text-4xl font-semibold">TJ</div>
          </div>
        </div>
      </div>

      <motion.div 
        className="max-w-[1200px] mx-auto text-center"
        style={{ 
          opacity, 
          y,
          paddingTop: '180px',
          paddingBottom: '80px'
        }}
      >
        
        {/* Main Headline with Color Accents */}
        <h2 
          className="font-normal leading-[1.15] mb-8"
          style={{ 
            fontSize: 'clamp(2.4rem, 4.2vw, 4.8rem)',
            color: 'var(--white)',
            fontFamily: 'var(--font-playfair)',
            fontWeight: 500
          }}
        >
          I help{' '}
          <span style={{ color: '#ffd966' }}>Creative</span>,{' '}
          <span style={{ color: '#ff99cc' }}>Multi-Passionate</span>{' '}
          <span style={{ color: '#99ddff' }}>Women</span>{' '}
          turn their{' '}
          <span style={{ color: '#ffeb99' }}>Ideas</span>{' '}
          into Steady{' '}
          <span style={{ color: '#b3ffb3' }}>Income</span>{' '}
          while keeping their{' '}
          <span className="relative inline-block">
            Freedom
            <svg 
              className="absolute left-0 right-0 -bottom-1" 
              height="8" 
              viewBox="0 0 200 8"
              style={{ width: 'calc(100% + 12px)', left: '-6px' }}
              preserveAspectRatio="none"
            >
              <path 
                d="M0,4 Q50,1 100,4 T200,4" 
                stroke="#ffcc99" 
                strokeWidth="6" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          ,{' '}
          <span className="relative inline-block">
            Peace
            <svg 
              className="absolute left-0 right-0 -bottom-1" 
              height="8" 
              viewBox="0 0 200 8"
              style={{ width: 'calc(100% + 12px)', left: '-6px' }}
              preserveAspectRatio="none"
            >
              <path 
                d="M0,4 Q50,2 100,4 T200,4" 
                stroke="#cc99ff" 
                strokeWidth="6" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          , and{' '}
          <span className="relative inline-block">
            Joy
            <svg 
              className="absolute left-0 right-0 -bottom-1" 
              height="10" 
              viewBox="0 0 200 10"
              style={{ width: 'calc(100% + 12px)', left: '-6px' }}
              preserveAspectRatio="none"
            >
              <path 
                d="M0,5 Q50,2 100,5 T200,5" 
                stroke="#ffff66" 
                strokeWidth="8" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          intact.
        </h2>

        {/* Supporting Paragraph */}
        <div className="mt-8 max-w-[85ch] mx-auto">
          <p 
            className="leading-relaxed"
            style={{ 
              fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)',
              color: 'rgba(255,255,255,0.95)',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 400,
              lineHeight: 1.7
            }}
          >
            If you want a business that aligns with your values and fuels the life you actually want, 
            you&apos;re in the right place. You don&apos;t need a huge audience or a complicated plan—just 
            the right tools to cut through the overwhelm. I&apos;ve been where you are, and I&apos;m here 
            to guide you to results that <strong style={{ fontWeight: 700 }}>matter</strong>.
          </p>
        </div>

        {/* Tools Line */}
        <p 
          className="mt-6"
          style={{ 
            fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
            color: 'rgba(255,255,255,0.90)',
            fontFamily: 'var(--font-poppins)',
            lineHeight: 1.6,
            maxWidth: '90ch',
            margin: '24px auto 0'
          }}
        >
          Here you&apos;ll find tools, strategies, courses, podcast episodes, and trainings designed 
          to help you take action and build a business that supports your dreams AND your life.
        </p>

        {/* CTA Button */}
        <div className="mt-14">
          <button
            className="px-14 py-5 rounded-full uppercase font-bold tracking-widest transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105"
            style={{
              backgroundColor: 'var(--cta-pink)',
              color: 'var(--ink)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.20)',
              letterSpacing: '2px',
              fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
              fontWeight: 800
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 18px 36px rgba(0,0,0,0.26)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.20)';
            }}
          >
            See What&apos;s New!
          </button>
        </div>

      </motion.div>
    </section>
  );
}

