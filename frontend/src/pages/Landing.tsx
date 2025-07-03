const Landing = () => {
  return (
    <div className="h-full text-white overflow-hidden relative" style={{
      background: "linear-gradient(to bottom, #1e3a5c 0%, #050a2a 100%)"
    }}>
      {/* Main Content */}
      <main className="relative h-full flex items-center justify-center">
        {/* Visual Element Container - Replace this section with your 3D model or animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* 
            PLACEHOLDER FOR 3D MODEL / ANIMATION
            =====================================
            This area is reserved for your main visual element.
            You can replace this comment block with:
            - A Three.js 3D model
            - An animated SVG
            - A Lottie animation
            - A canvas element
            - Any other visual component
            
            The container is centered and takes full viewport space.
            Mouse position tracking is available via: mousePosition.x and mousePosition.y
          */}
          
          {/* Temporary placeholder - Remove when adding actual content */}
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] mb-4 text-gray-400 font-light">
            DATA SCIENCE
          </p>
          <h1 className="text-7xl md:text-8xl font-serif font-light tracking-wide leading-none">
            M. GHANIM SIAL
          </h1>
        </div>
      </main>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        @font-face {
          font-family: 'serif';
          font-display: swap;
        }
      `}</style>
    </div>
  );
};

export default Landing;