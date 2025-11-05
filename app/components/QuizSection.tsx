"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function QuizSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.3]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ 
        minHeight: '120vh',
        zIndex: 10
      }}
    >
      {/* Parallax Zoom Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          scale,
          zIndex: 0
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/bg2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </motion.div>

      {/* FREE QUIZ Badge */}
      <div 
        className="absolute z-10"
        style={{ 
          top: 'clamp(14px, 2vw, 24px)',
          right: 'clamp(14px, 2vw, 24px)'
        }}
      >
        <div className="flex items-center gap-2">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            style={{ opacity: 0.8 }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span 
            className="uppercase font-semibold"
            style={{ 
              letterSpacing: '0.14em',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.9)'
            }}
          >
            Free Quiz
          </span>
        </div>
      </div>

      {/* Main Content Container */}
      <div 
        className="relative mx-auto w-full flex items-center"
        style={{ 
          maxWidth: '1200px',
          padding: 'clamp(24px, 4vw, 48px)',
          zIndex: 5
        }}
      >
        <div 
          className="grid w-full items-center"
          style={{ 
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(32px, 5vw, 64px)'
          }}
        >
          {/* Left Text Block with Fast Fade-In */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Heading */}
            <div className="mb-6">
              <h2 
                className="text-white leading-tight"
                style={{ 
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3rem, 6.5vw, 6rem)',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  lineHeight: 1.05
                }}
              >
                ARE YOU READY TO
              </h2>
              <div 
                className="uppercase font-black"
                style={{ 
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  color: '#ffeb99',
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                  lineHeight: 1.05
                }}
              >
                LEVEL UP?
              </div>
            </div>

            {/* Body Copy */}
            <p 
              className="mb-8"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
                color: 'rgba(255,255,255,0.95)',
                maxWidth: '42ch',
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              Except instead of a video game, this is you <em>IRL</em>. Take this quick 5-question quiz 
              so I can hand over laser-focused, curated resources specific to your goals and how <strong style={{ fontWeight: 700 }}>YOU</strong> want to grow!
            </p>

            {/* CTA Button */}
            <button
              className="self-start uppercase font-bold transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105"
              style={{
                backgroundColor: 'white',
                color: 'var(--ink-2)',
                borderRadius: '999px',
                padding: '18px 32px',
                letterSpacing: '0.12em',
                fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                boxShadow: '0 10px 24px rgba(0,0,0,0.22)',
                fontWeight: 800
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.22)';
              }}
            >
              Curious? Take the quiz →
            </button>
          </motion.div>

          {/* Right Transparent Space (Image removed but column maintained) */}
          <div className="relative h-full" style={{ minHeight: '400px' }}>
            {/* Empty transparent space */}
          </div>
        </div>

        {/* Mobile Responsive Layout */}
        <style jsx>{`
          @media (max-width: 768px) {
            .grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            
            .grid > div:last-child {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

