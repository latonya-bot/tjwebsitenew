"use client";

import Image from "next/image";

const blogPosts = [
  { 
    category: 'HEALTH', 
    color: '#eedc68',
    title: 'My Current Health Routine (and What\'s Next!)',
    thumbnail: '/blog-thumb-1.png'
  },
  { 
    category: 'BEAUTY', 
    color: '#e7cbe6',
    title: '8 Ways I Transformed My Skin and How Much it Cost',
    thumbnail: '/blog-thumb-2.png'
  },
  { 
    category: 'PRODUCTIVITY', 
    color: '#dfc7e2',
    title: '10 Business Tools I Truly Can\'t Live Without',
    thumbnail: '/blog-thumb-3.png'
  },
  { 
    category: 'BUSINESS', 
    color: '#d6e27c',
    title: 'Why Pinterest Is 2025\'s Smartest Growth Move',
    thumbnail: '/blog-thumb-4.png'
  }
];

export default function BlogSection() {
  return (
    <section 
      className="w-full relative flex items-center justify-center animated-gradient-blog-bg"
      style={{ 
        minHeight: '120vh',
        padding: 'clamp(48px, 8vw, 96px) clamp(24px, 4vw, 48px)',
        zIndex: 10
      }}
    >
      <div 
        className="mx-auto"
        style={{ maxWidth: '1140px' }}
      >
        {/* Heading Block */}
        <div className="relative mb-16">
          <h2 
            className="uppercase font-black relative"
            style={{ 
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(2.8rem, 7.5vw, 5.5rem)',
              lineHeight: 1.05,
              fontWeight: 900
            }}
          >
            <span style={{ color: '#ffeb99' }}>NOT</span>{' '}
            <span style={{ color: '#ff99cc' }}>YOUR</span>{' '}
            <span style={{ color: 'rgba(255,255,255,0.95)' }}>AVERAGE BIZ BLOG</span>
          </h2>
          
          {/* Stamp Circle */}
          <div 
            className="absolute rounded-full"
            style={{ 
              width: '80px',
              height: '80px',
              border: '2px solid rgba(245,242,246,0.7)',
              top: '-12px',
              right: '0',
              opacity: 0.7
            }}
          >
            <svg viewBox="0 0 60 60" className="w-full h-full">
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="30"
                  y1="5"
                  x2="30"
                  y2="10"
                  stroke="rgba(245,242,246,0.7)"
                  strokeWidth="1"
                  transform={`rotate(${i * 30} 30 30)`}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Content Grid */}
        <div 
          className="grid mb-10"
          style={{ 
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(18px, 3vw, 36px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column - Feature Card */}
          <div>
            <div 
              className="relative overflow-hidden mb-4"
              style={{ 
                aspectRatio: '4/5',
                borderRadius: '24px',
                boxShadow: '0 16px 32px rgba(0,0,0,0.16)'
              }}
            >
              <Image
                src="/blog-feature.png"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4">
              <p 
                className="uppercase font-bold mb-3"
                style={{ 
                  color: '#ffeb99',
                  fontSize: '13px',
                  letterSpacing: '0.14em'
                }}
              >
                PERSONAL
              </p>
              <h3 
                className="font-semibold"
                style={{ 
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                  color: 'rgba(255,255,255,0.95)',
                  maxWidth: '30ch',
                  lineHeight: 1.3
                }}
              >
                Finding Balance: How I Learned to Prioritize What Really Matters
              </h3>
            </div>
          </div>

          {/* Right Column - Post List */}
          <div>
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href="#"
                className="grid items-start transition-all duration-200 hover:translate-x-1"
                style={{ 
                  gridTemplateColumns: '60px 1fr',
                  gap: '16px',
                  padding: '22px 0',
                  borderBottom: index < blogPosts.length - 1 ? '1px solid rgba(255,255,255,0.22)' : 'none'
                }}
              >
                {/* Thumbnail */}
                <div 
                  className="relative rounded-full overflow-hidden"
                  style={{ 
                    width: '60px',
                    height: '60px'
                  }}
                >
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Meta + Title */}
                <div>
                  <p 
                    className="uppercase font-bold mb-2"
                    style={{ 
                      color: post.color,
                      fontSize: '13px',
                      letterSpacing: '0.14em',
                      fontWeight: 700
                    }}
                  >
                    {post.category}
                  </p>
                  <h4 
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.3rem, 1.9vw, 1.65rem)',
                      color: '#ffffff',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      maxWidth: '34ch'
                    }}
                  >
                    {post.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            className="uppercase font-extrabold transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105"
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
            Explore the Posts →
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid[style*="1.1fr 0.9fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          .grid[style*="1.1fr 0.9fr"],
          .grid[style*="1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          
          .grid[style*="60px 1fr"] {
            grid-template-columns: 52px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

