"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ position: 'relative', zIndex: 10 }}>
      {/* A. Top Footer - Bio + Quick Links */}
      <div
        style={{
          backgroundColor: 'var(--footer-cream)',
          position: 'relative'
        }}
      >
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            padding: 'clamp(40px, 6vw, 72px) clamp(16px, 3vw, 24px)',
            position: 'relative'
          }}
        >
          {/* Back to Top - Vertical (Desktop) */}
          <button
            onClick={scrollToTop}
            className="back-to-top-vertical"
            style={{
              position: 'absolute',
              right: '10px',
              top: '16px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              fontSize: '11px',
              letterSpacing: '0.14em',
              color: 'var(--lavender-600)',
              fontWeight: 700
            }}
            aria-label="Back to top"
          >
            ↑ BACK TO TOP
          </button>

          <div
            className="footer-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr',
              alignItems: 'start',
              columnGap: 'clamp(24px, 4vw, 56px)'
            }}
          >
            {/* Left: Signature + Bio + Buttons */}
            <div>
              {/* Signature */}
              <div
                style={{
                  fontFamily: 'cursive',
                  fontSize: 'clamp(48px, 8vw, 72px)',
                  color: 'var(--footer-orange)',
                  fontStyle: 'italic',
                  marginBottom: '20px',
                  fontWeight: 700
                }}
              >
                Jenna Kutcher
              </div>

              {/* Bio */}
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: 'clamp(1.05rem, 1.2vw, 1.15rem)',
                  color: 'var(--ink)',
                  maxWidth: '40ch',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                  fontWeight: 500
                }}
              >
                I'm a small-town Minnesota photographer, podcaster, educator, and author with big dreams who believes that you deserve a life and business you love.
              </p>

              {/* Avatar + Buttons Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr',
                  alignItems: 'center',
                  gap: '24px'
                }}
                className="avatar-buttons-grid"
              >
                {/* Avatar flower blob */}
                <div
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: 'var(--lavender-300)',
                    border: '4px solid white',
                    boxShadow: 'var(--shadow-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px'
                  }}
                >
                  👩‍💼
                </div>

                {/* Social CTA Buttons */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '10px'
                  }}
                  className="social-buttons"
                >
                  <a
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      height: '40px',
                      padding: '0 12px',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: 'var(--btn-border)',
                      boxShadow: 'var(--shadow-soft)',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--ink-2)',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 14px 28px rgba(23,50,86,.16)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>📱</span>
                    OVER 1M FOLLOWERS?!
                  </a>

                  <a
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      height: '40px',
                      padding: '0 12px',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: 'var(--btn-border)',
                      boxShadow: 'var(--shadow-soft)',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--ink-2)',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 14px 28px rgba(23,50,86,.16)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>🎧</span>
                    LISTEN TO MY #1 PODCAST
                  </a>

                  <a
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      height: '40px',
                      padding: '0 12px',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: 'var(--btn-border)',
                      boxShadow: 'var(--shadow-soft)',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--ink-2)',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 14px 28px rgba(23,50,86,.16)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>📘</span>
                    I WANNA BE YOUR FRIEND
                  </a>

                  <a
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      height: '40px',
                      padding: '0 12px',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: 'var(--btn-border)',
                      boxShadow: 'var(--shadow-soft)',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--ink-2)',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 14px 28px rgba(23,50,86,.16)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>📌</span>
                    I FREAKING LOVE PINTEREST
                  </a>
                </div>
              </div>
            </div>

            {/* Right: "GET AROUND" Links */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: 'clamp(1.6rem, 2.4vw, 2rem)',
                  color: 'var(--footer-orange)',
                  fontWeight: 900,
                  marginBottom: '24px',
                  position: 'relative',
                  paddingBottom: '8px'
                }}
              >
                GET AROUND
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'var(--footer-orange)',
                    opacity: 0.3,
                    borderRadius: '2px'
                  }}
                />
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px 32px'
                }}
                className="footer-links"
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="#" style={linkStyle}>Home</a>
                  <a href="#" style={linkStyle}>About</a>
                  <a href="#" style={linkStyle}>Podcast</a>
                  <a href="#" style={linkStyle}>Blog</a>
                  <a href="#" style={linkStyle}>Contact</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="#" style={linkStyle}>Courses</a>
                  <a href="#" style={linkStyle}>Favorites</a>
                  <a href="#" style={linkStyle}>The Shop</a>
                  <a href="#" style={linkStyle}>Speaking</a>
                  <a href="#" style={linkStyle}>Partnerships</a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Top - Horizontal (Mobile) */}
          <button
            onClick={scrollToTop}
            className="back-to-top-horizontal"
            style={{
              display: 'none',
              marginTop: '32px',
              padding: '10px 20px',
              background: 'white',
              border: 'var(--btn-border)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '11px',
              letterSpacing: '0.14em',
              color: 'var(--lavender-600)',
              fontWeight: 700,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            aria-label="Back to top"
          >
            ↑ BACK TO TOP
          </button>
        </div>
      </div>

      {/* B. Instagram Strip + Bottom Bar */}
      <div
        style={{
          backgroundColor: 'var(--footer-orange)',
          paddingTop: '32px',
          paddingBottom: '32px'
        }}
      >
        {/* Instagram Strip with Handle Tag */}
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            position: 'relative',
            paddingBottom: '24px'
          }}
        >
          {/* @JENNAKUTCHER lavender tab */}
          <div
            style={{
              position: 'absolute',
              top: '-18px',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '34px',
              padding: '0 14px',
              borderRadius: '14px',
              backgroundColor: 'var(--lavender-300)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: 'var(--ink)',
              zIndex: 10
            }}
          >
            @JENNAKUTCHER
          </div>

          {/* 5-image demo grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '8px',
              padding: '0 16px'
            }}
            className="instagram-grid"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <a
                key={i}
                href="#"
                style={{
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease-out',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  backgroundColor: '#f5e6d8',
                  border: '2px dashed rgba(207, 122, 84, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', marginBottom: '8px' }}>📸</div>
                  <div style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    color: 'rgba(207, 122, 84, 0.6)',
                    letterSpacing: '0.05em'
                  }}>
                    DEMO
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copy + Legal */}
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            padding: '0 clamp(16px, 3vw, 24px)',
            textAlign: 'center'
          }}
        >
          {/* Closing copy */}
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.06rem)',
              color: 'white',
              maxWidth: '84ch',
              margin: '18px auto 12px',
              lineHeight: 1.7,
              fontWeight: 600
            }}
          >
            Join over 1 million followers on <strong style={{ textDecoration: 'underline' }}>Instagram</strong>, where I'm your mom friend with a business coach inside just waiting to help you out.
          </p>

          {/* Hairline rule */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.16)',
              margin: '24px auto',
              maxWidth: '800px'
            }}
          />

          {/* Legal/utility row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '18px',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 700
            }}
            className="legal-links"
          >
            <span>© JENNA KUTCHER 2025</span>
            <span>·</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>ALL RIGHTS RESERVED</a>
            <span>·</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>SITE CREDIT</a>
            <span>·</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GET IN TOUCH</a>
            <span>·</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LEGAL</a>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .back-to-top-vertical {
            display: none !important;
          }
          .back-to-top-horizontal {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .avatar-buttons-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
            text-align: center;
          }
          .social-buttons {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-links {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .instagram-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 6px !important;
          }
        }
        @media (max-width: 480px) {
          .social-buttons {
            grid-template-columns: 1fr !important;
          }
          .legal-links {
            flex-direction: column;
            gap: 8px !important;
          }
          .legal-links span:not(:first-child) {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-poppins)',
  fontSize: '16px',
  color: 'var(--ink)',
  textDecoration: 'none',
  transition: 'all 0.2s',
  fontWeight: 500
};

