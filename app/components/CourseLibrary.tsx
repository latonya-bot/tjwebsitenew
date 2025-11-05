"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const courses = [
  {
    index: "01",
    tabColor: "#d97543",
    title: "List Builders Society",
    description: "Master the art of building an engaged email list from scratch. Learn proven strategies to grow your audience and turn subscribers into loyal customers."
  },
  {
    index: "02",
    tabColor: "#6e75aa",
    title: "Instagram Lab",
    description: "Unlock the secrets to Instagram growth without spending hours on the app. Create content that converts and build a community that loves your brand."
  },
  {
    index: "03",
    tabColor: "#eedc68",
    title: "Pinterest Powerhouse",
    description: "Transform Pinterest into your #1 traffic source. Discover the strategies that drive thousands of targeted visitors to your website every month."
  },
  {
    index: "04",
    tabColor: "#dfc7e2",
    title: "Podcast Pro",
    description: "Launch and grow a profitable podcast that builds authority and attracts dream clients. From recording to monetization, we cover it all."
  },
  {
    index: "05",
    tabColor: "#7aa6a0",
    title: "Content Creation Studio",
    description: "Learn to create high-quality content efficiently. Batch, repurpose, and maximize every piece of content you create across all platforms."
  },
  {
    index: "06",
    tabColor: "#9e94a8",
    title: "Business Foundations",
    description: "Build a solid foundation for your online business. From strategy to systems, get everything you need to scale sustainably and profitably."
  }
];

export default function CourseLibrary() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Instant show/hide background (no fade)
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.001, 0.999, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ 
        height: `calc(${courses.length * 133}vh + 400px)`,
        backgroundColor: '#f8f5f2',
        paddingBottom: '400px',
        zIndex: 10
      }}
    >
      {/* Fixed Background - Only visible in Section 7 */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: 0,
          opacity: backgroundOpacity
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/course-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}
        />
      </motion.div>

      {/* Sticky Stage */}
      <div 
        className="sticky h-screen flex justify-center"
        style={{ 
          top: '120px',
          zIndex: 1,
          padding: '0 20px',
          alignItems: 'flex-start',
          paddingTop: '0px'
        }}
      >
        <div 
          className="relative" 
          style={{ 
            width: '720px', 
            maxWidth: '92vw', 
            height: '464px'
          }}
        >
          {courses.map((course, i) => {
            // Each card appears with equal timing and spacing
            const cardStartProgress = i * 0.16;
            const cardFullyVisible = cardStartProgress + 0.08;
            const cardSettled = cardStartProgress + 0.12;
            const nextCardStarts = (i + 1) * 0.16;
            
            const opacity = useTransform(
              scrollYProgress,
              [cardStartProgress - 0.05, cardStartProgress, cardFullyVisible],
              [0, 1, 1]
            );
            
            const scale = useTransform(
              scrollYProgress,
              [cardStartProgress, cardFullyVisible, nextCardStarts],
              [0.94, 1, Math.max(0.92, 1 - (i + 1) * 0.015)]
            );
            
            const rotate = useTransform(
              scrollYProgress,
              [cardStartProgress, cardFullyVisible],
              [-3, 0]
            );
            
            const y = useTransform(
              scrollYProgress,
              [cardStartProgress - 0.02, cardFullyVisible, nextCardStarts],
              [500, 0, (i + 1) * 8]
            );

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: '-52px',
                  left: 0,
                  right: 0,
                  height: '516px',
                  opacity,
                  scale,
                  rotate,
                  y,
                  zIndex: 100 + i,
                  transformOrigin: 'center center'
                }}
              >
                <CourseCard course={course} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <div 
      className="bg-white relative w-full h-full flex flex-col overflow-hidden"
      style={{
        borderRadius: '26px',
        boxShadow: '0 26px 96px rgba(23, 50, 86, 0.12), 0 10px 32px rgba(23, 50, 86, 0.06)',
        border: '1px solid rgba(0, 0, 0, 0.04)',
        background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
      }}
    >
      {/* Multi-color strip at the very top - folder tabs effect */}
      <div 
        className="absolute left-0 right-0 flex"
        style={{
          top: '-52px',
          height: '6px',
          zIndex: 10,
          gap: '2px'
        }}
      >
        <div style={{ flex: 1, backgroundColor: '#d97543', borderRadius: '3px 3px 0 0' }} />
        <div style={{ flex: 1, backgroundColor: '#6e75aa', borderRadius: '3px 3px 0 0' }} />
        <div style={{ flex: 1, backgroundColor: '#eedc68', borderRadius: '3px 3px 0 0' }} />
        <div style={{ flex: 1, backgroundColor: '#dfc7e2', borderRadius: '3px 3px 0 0' }} />
        <div style={{ flex: 1, backgroundColor: '#7aa6a0', borderRadius: '3px 3px 0 0' }} />
        <div style={{ flex: 1, backgroundColor: '#9e94a8', borderRadius: '3px 3px 0 0' }} />
      </div>

      {/* Vibrant accent strip on the card itself */}
      <div 
        className="absolute left-0 right-0"
        style={{
          top: '0',
          height: '5px',
          background: `linear-gradient(90deg, ${course.tabColor} 0%, ${course.tabColor}dd 50%, ${course.tabColor} 100%)`,
          boxShadow: `0 2px 10px ${course.tabColor}60, inset 0 1px 0 rgba(255,255,255,0.3)`,
          zIndex: 20
        }}
      />

      {/* Top Tab */}
      <div 
        className="absolute left-0 right-0 flex items-center justify-center overflow-hidden"
        style={{
          top: '-45px',
          height: '45px',
          background: `linear-gradient(135deg, ${course.tabColor} 0%, ${course.tabColor}dd 100%)`,
          borderRadius: '0 0 0 0',
          boxShadow: `0 -6px 20px ${course.tabColor}20`,
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Subtle shine effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}
        />
        
        {/* Modern minimal notch - folder tab style */}
        <div 
          className="absolute"
          style={{
            left: '38px',
            top: '-6px',
            width: '64px',
            height: '10px',
            background: `linear-gradient(135deg, ${course.tabColor}aa 0%, ${course.tabColor}99 100%)`,
            borderRadius: '5px 5px 0 0',
            boxShadow: `0 -2px 6px ${course.tabColor}30`
          }}
        />
        
        <span 
          className="uppercase font-bold text-white tracking-wider relative z-10"
          style={{
            fontSize: '11px',
            letterSpacing: '0.18em',
            fontWeight: 700,
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          The JK Course Library
        </span>
      </div>

      {/* Card Content */}
      <div 
        className="flex flex-col h-full"
        style={{ padding: '42px 45px 38px' }}
      >
        {/* Eyebrow with gradient accent */}
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="flex items-center justify-center"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '13px',
              background: `linear-gradient(135deg, ${course.tabColor}15 0%, ${course.tabColor}08 100%)`,
              border: `2px solid ${course.tabColor}20`
            }}
          >
            <span 
              className="font-bold"
              style={{ 
                color: course.tabColor,
                fontSize: '15px',
                fontWeight: 800,
                lineHeight: 1
              }}
            >
              {course.index}
            </span>
          </div>
          
          <div className="flex flex-col">
            <span 
              className="uppercase tracking-wider"
              style={{
                fontSize: '9px',
                letterSpacing: '0.15em',
                color: '#8891a8',
                fontWeight: 600,
                marginBottom: '2px'
              }}
            >
              Course Module
            </span>
            <div 
              style={{
                width: '26px',
                height: '2px',
                background: `linear-gradient(90deg, ${course.tabColor} 0%, transparent 100%)`,
                borderRadius: '2px'
              }}
            />
          </div>
        </div>

        {/* Title with better spacing */}
        <h2 
          className="mb-5"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(32px, 4.8vw, 45px)',
            color: '#1a2332',
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #1a2332 0%, #2d3e5a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {course.title}
        </h2>

        {/* Description with better readability */}
        <p 
          className="mb-8 flex-1"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: 'clamp(14px, 1.7vw, 15px)',
            color: 'rgba(27, 43, 68, 0.8)',
            lineHeight: 1.7,
            maxWidth: '580px',
            fontWeight: 400
          }}
        >
          {course.description}
        </p>

        {/* Modern button */}
        <div className="mt-auto">
          <button
            className="uppercase font-semibold transition-all duration-400 group relative"
            style={{
              padding: '14px 32px',
              background: `linear-gradient(135deg, ${course.tabColor} 0%, ${course.tabColor}dd 100%)`,
              borderRadius: '13px',
              color: 'white',
              fontSize: '10px',
              letterSpacing: '0.14em',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              boxShadow: `0 6px 20px ${course.tabColor}30, 0 3px 10px ${course.tabColor}20`,
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 13px 32px ${course.tabColor}40, 0 6px 16px ${course.tabColor}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 6px 20px ${course.tabColor}30, 0 3px 10px ${course.tabColor}20`;
            }}
          >
            {/* Shine effect on hover */}
            <span 
              className="absolute inset-0 transition-opacity duration-400"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                opacity: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0';
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Explore Course
              <span style={{ fontSize: '12px', marginLeft: '3px' }}>→</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
