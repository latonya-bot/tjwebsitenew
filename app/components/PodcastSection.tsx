"use client";

const episodes = [
  { number: 750, title: "10 Business Tools I Can't Live Without" },
  { number: 752, title: "120X Your Content's Lifespan in Just an Hour per Week" },
  { number: 718, title: "How to ACTUALLY Make Money As A Podcaster" },
  { number: 772, title: "Why You Shouldn't Wait to Start Your Email List" },
  { number: 720, title: "5 Things That Work On Instagram Right Now" }
];

export default function PodcastSection() {
  return (
    <section 
      className="w-full flex items-center justify-center animated-gradient-bg"
      style={{ 
        minHeight: '120vh',
        padding: 'clamp(48px, 8vw, 96px) clamp(24px, 4vw, 48px)',
        zIndex: 10,
        position: 'relative'
      }}
    >
      <div 
        className="mx-auto"
        style={{ maxWidth: '1140px' }}
      >
        {/* Top Band - 2 Columns */}
        <div 
          className="grid mb-12"
          style={{ 
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(16px, 3vw, 32px)',
            gridTemplateAreas: '"left right" "list list"'
          }}
        >
          {/* Left Column */}
          <div style={{ gridArea: 'left' }}>
            <p 
              className="font-medium"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                lineHeight: 1.5,
                color: '#1b2b44',
                fontWeight: 500
              }}
            >
              The #1 marketing business podcast recorded from Jenna&apos;s cozy desk, 
              where real strategies meet real conversations about building the business you actually want.
            </p>
          </div>

          {/* Right Column */}
          <div style={{ gridArea: 'right' }}>
            <p 
              className="mb-6"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(1.15rem, 1.5vw, 1.4rem)',
                color: 'rgba(23,50,86,0.88)',
                maxWidth: '45ch',
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              Each week, tune in for actionable insights, inspiring guest interviews, 
              and honest takes on what it really takes to grow your business without burning out.
            </p>

            <button
              className="uppercase font-bold transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105"
              style={{
                backgroundColor: 'white',
                color: 'var(--ink-2)',
                borderRadius: '999px',
                padding: '20px 40px',
                letterSpacing: '0.14em',
                fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
                fontWeight: 800,
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--ink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--ink-2)';
              }}
            >
              Click Here to Tune In →
            </button>
          </div>

          {/* Episode List */}
          <div style={{ gridArea: 'list' }} className="mt-8">
            {/* Eyebrow */}
            <h3 
              className="uppercase font-bold mb-8"
              style={{ 
                letterSpacing: '0.24em',
                fontSize: '13px',
                color: 'var(--lavender-600)',
                fontWeight: 700
              }}
            >
              Most Popular Episodes
            </h3>

            {/* Episodes */}
            <div>
              {episodes.map((episode, index) => (
                <a
                  key={episode.number}
                  href="#"
                  className="grid items-center transition-all duration-300 hover:translate-x-2"
                  style={{ 
                    gridTemplateColumns: '60px 1fr 48px',
                    gap: '24px',
                    padding: '28px 0',
                    borderBottom: index < episodes.length - 1 ? '1px solid rgba(23,50,86,0.12)' : 'none'
                  }}
                >
                  {/* Number */}
                  <div 
                    className="text-right font-bold"
                    style={{ 
                      fontSize: '15px',
                      color: 'var(--lavender-600)',
                      fontWeight: 700
                    }}
                  >
                    {episode.number}
                  </div>

                  {/* Title */}
                  <h4 
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.35rem, 1.9vw, 1.75rem)',
                      color: '#1b2b44',
                      fontWeight: 600,
                      lineHeight: 1.3
                    }}
                  >
                    {episode.title}
                  </h4>

                  {/* Play Button */}
                  <div 
                    className="flex items-center justify-center rounded-full bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                    style={{ 
                      width: '36px',
                      height: '36px',
                      border: '1px solid rgba(23,50,86,0.12)'
                    }}
                  >
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="var(--lavender-600)" 
                      strokeWidth="2"
                      className="transition-transform duration-200 hover:translate-x-0.5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          .grid[style*="left right"] {
            grid-template-columns: 1fr !important;
            grid-template-areas: "left" "right" "list" !important;
          }
        }
        
        @media (max-width: 640px) {
          .grid[style*="48px 1fr 40px"] {
            grid-template-columns: 36px 1fr 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

