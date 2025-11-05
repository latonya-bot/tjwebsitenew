"use client";

import Image from "next/image";

const freebiesData = [
  {
    type: 'image',
    image: '/freebie-1.png'
  },
  {
    type: 'card',
    badge: 'hex',
    badgeText: 'FREE WORKSHEET',
    title: 'Write Your Own Definition of Success (and Build an Action Plan for Living It Out)'
  },
  {
    type: 'card',
    badge: 'oval',
    badgeText: 'FREE DOWNLOAD',
    title: 'How to Start a Podcast from Scratch (in 2 Easy Steps!)'
  },
  {
    type: 'image',
    image: '/freebie-2.png'
  },
  {
    type: 'image',
    image: '/freebie-3.png'
  },
  {
    type: 'card',
    badge: 'diamond',
    badgeText: 'FREE CHALLENGE',
    title: 'Zero-250: The FREE Email List Building Challenge'
  }
];

export default function FreebiesSection() {
  return (
    <section 
      className="w-full"
      style={{ 
        backgroundColor: 'var(--freebies-bg)',
        padding: 'clamp(40px, 6vw, 80px) 0',
        zIndex: 10,
        position: 'relative'
      }}
    >
      <div 
        className="mx-auto"
        style={{ 
          maxWidth: '1140px',
          padding: '0 clamp(16px, 3vw, 24px)'
        }}
      >
        {/* Eyebrow + Title */}
        <div className="text-center mb-8">
          <p 
            className="uppercase mb-3"
            style={{ 
              letterSpacing: '0.18em',
              fontSize: '12px',
              color: 'var(--lavender-600)',
              opacity: 0.8
            }}
          >
            Free Downloads to Elevate Your Game.
          </p>
          <h2 
            className="text-center"
            style={{ 
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              color: 'var(--lavender-600)',
              fontWeight: 400,
              marginBottom: '32px'
            }}
          >
            FREEBIES
          </h2>
        </div>

        {/* Resource Grid */}
        <div 
          className="grid mb-12"
          style={{ 
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
          }}
        >
          {freebiesData.map((item, index) => (
            item.type === 'image' ? (
              <div 
                key={index}
                className="relative overflow-hidden"
                style={{ 
                  aspectRatio: '4 / 3',
                  borderRadius: '12px',
                  boxShadow: '0 10px 24px rgba(23,50,86,0.12)'
                }}
              >
                <Image
                  src={item.image!}
                  alt={`Freebie ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div 
                key={index}
                className="relative bg-white flex flex-col items-center justify-center p-8"
                style={{ 
                  aspectRatio: '4 / 3',
                  borderRadius: '12px',
                  border: '1px solid rgba(23,50,86,0.06)',
                  boxShadow: '0 10px 24px rgba(23,50,86,0.08)'
                }}
              >
                {/* Badge */}
                <div className="mb-4">
                  {item.badge === 'hex' && (
                    <div 
                      className="px-4 py-1.5 font-bold uppercase"
                      style={{ 
                        clipPath: 'polygon(6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%, 0 50%)',
                        backgroundColor: 'var(--badge-yellow)',
                        color: 'var(--ink)',
                        letterSpacing: '0.08em',
                        fontSize: '11px'
                      }}
                    >
                      {item.badgeText}
                    </div>
                  )}
                  {item.badge === 'oval' && (
                    <div 
                      className="px-4 py-1.5 font-bold uppercase"
                      style={{ 
                        borderRadius: '999px',
                        backgroundColor: 'var(--lavender-600)',
                        color: 'white',
                        letterSpacing: '0.08em',
                        fontSize: '11px'
                      }}
                    >
                      {item.badgeText}
                    </div>
                  )}
                  {item.badge === 'diamond' && (
                    <div 
                      className="w-16 h-16 flex items-center justify-center"
                      style={{ 
                        transform: 'rotate(45deg)',
                        backgroundColor: '#e7cbe6'
                      }}
                    >
                      <span 
                        className="font-bold uppercase"
                        style={{ 
                          transform: 'rotate(-45deg)',
                          color: 'var(--ink-2)',
                          letterSpacing: '0.08em',
                          fontSize: '9px',
                          textAlign: 'center',
                          lineHeight: 1.2
                        }}
                      >
                        {item.badgeText?.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 
                  className="text-center font-semibold"
                  style={{ 
                    fontSize: 'clamp(20px, 2vw, 24px)',
                    color: '#1b2b44',
                    lineHeight: 1.4,
                    maxWidth: '32ch'
                  }}
                >
                  {item.title}
                </h3>

                {/* Download Icon */}
                <div 
                  className="absolute transition-transform duration-200 hover:translate-x-0.5"
                  style={{ 
                    right: '16px',
                    bottom: '14px',
                    color: 'var(--ink-2)',
                    opacity: 0.9
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Looking For More Section */}
        <div className="text-center mt-12">
          <h3 
            className="mb-6"
            style={{ 
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              color: 'var(--lavender-600)'
            }}
          >
            Looking For More? I Got You.
          </h3>

          <div 
            className="grid"
            style={{ 
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}
          >
            {['Instagram', 'List-Building', 'Podcasting', 'Pinterest'].map((category) => (
              <a 
                key={category}
                href="#"
                className="font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                style={{ 
                  color: 'var(--lavender-600)',
                  fontSize: '15px'
                }}
              >
                <div>{category}</div>
                <div>Freebies</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid[style*="repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .grid[style*="1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          
          .grid[style*="repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

