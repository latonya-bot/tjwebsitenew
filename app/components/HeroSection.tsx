"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
      className="sticky top-0 w-full flex flex-col"
      style={{ 
        backgroundImage: 'url(/bgnew.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        zIndex: 1
      }}
    >
      {/* Navigation Bar */}
      <nav className="relative z-10 w-full pt-5 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex flex-wrap items-center justify-center gap-7 text-white font-semibold uppercase text-[15px] tracking-wider">
            {['Home', 'About', 'Book', 'Blog', 'Courses', 'Podcast', 'Speaking', 'Freebies'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="hover:opacity-85 transition-opacity duration-200"
                  style={{ textShadow: '0 1px 0 rgba(0,0,0,0.1)' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative flex-1 flex items-end justify-center px-6 pb-0">
        {/* Giant Background Name */}
        <div 
          className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center overflow-hidden"
          style={{ 
            top: '-300px',
            opacity: 0.9,
            zIndex: 0 
          }}
        >
          <h1 
            className="text-center leading-[0.85] fade-in-blur-title"
            style={{ 
              fontSize: 'clamp(7rem, 19vw, 25rem)',
              fontWeight: 280,
              fontFamily: 'var(--font-yellowtail)',
              letterSpacing: '-0.05em',
              animation: 'fadeInBlurTitle 1.2s ease-out forwards, colorCycle 15s ease-in-out infinite'
            }}
          >
            <div>LaTonya</div>
            <div>Johnson</div>
          </h1>
        </div>

        {/* Grid Layout for Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(480px,680px)_1fr] gap-8 items-end">
            
            {/* Left Copy */}
            <div className="hidden lg:flex flex-col items-end text-right max-w-[260px] ml-auto relative fade-in-blur-text" style={{ bottom: '170px' }}>
              <p className="text-white font-bold text-[clamp(1.125rem,1.4vw,1.25rem)] leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                Build the business you&apos;ve always
              </p>
              <p className="text-white text-[clamp(1rem,1.2vw,1.125rem)] leading-tight mt-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                dreamed about...
              </p>
            </div>

            {/* Center Portrait with Seal */}
            <div className="relative flex items-center justify-center fade-in-blur-image">
              {/* Portrait Image */}
              <div className="relative w-full max-w-[627px] mx-auto">
                <Image
                  src="/pop.png"
                  alt="Professional portrait"
                  width={1000}
                  height={1237}
                  priority
                  unoptimized
                  className="w-full h-auto"
                  style={{ 
                    filter: 'drop-shadow(0 12px 32px rgba(23,50,86,0.28))',
                    maxWidth: 'clamp(358px, 78vw, 627px)'
                  }}
                />
              </div>

              {/* Mobile Copy - Shown on smaller screens */}
              <div className="lg:hidden absolute top-0 left-0 right-0 -translate-y-full mb-4 text-center px-4 fade-in-blur-text">
                <p className="text-white font-bold text-lg leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  Build the business you&apos;ve always dreamed about...
                </p>
              </div>
            </div>

            {/* Right Copy */}
            <div className="hidden lg:flex flex-col items-start text-left max-w-[280px] relative fade-in-blur-text" style={{ bottom: '170px' }}>
              <p className="text-white text-[clamp(1rem,1.2vw,1.125rem)] leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                ...without losing yourself in it along
              </p>
              <p className="text-white font-bold text-[clamp(1.125rem,1.4vw,1.25rem)] leading-tight mt-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                the way.
              </p>
            </div>

          </div>

          {/* Mobile Right Copy */}
          <div className="lg:hidden text-center mt-8 px-4 fade-in-blur-text">
            <p className="text-white text-lg leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              ...without losing yourself in it along <strong>the way.</strong>
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

