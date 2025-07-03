const ArtUnboundOdyssey = () => {
  return (
    <div className="relative min-h-screen bg-[#050a2a] flex items-center justify-center md:justify-end p-8 md:pr-20 lg:pl-34">
      {/* Background texture overlay */}
      
      
      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto mt-6">
        {/* Subtle background rectangle */}
        <div className="absolute left-2 right-2 inset-y-4 sm:left-6 sm:right-6 sm:inset-y-6 md:left-16 md:right-16 md:inset-y-10 lg:left-28 lg:right-28 lg:inset-y-12 xl:left-36 xl:right-36 xl:inset-y-16 bg-transparent border-[2px] md:border-[3px] border-[#1e3a5c] backdrop-blur-sm -z-10 transform"></div>
        
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 pl-4 pr-4 md:pr-28 md:mr-8 lg:mr-12 py-8 md:py-16">
          {/* Left side - Artwork placeholder */}
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Frame container */}
            
                {/* Artwork container */}
                <div className="w-[160px] h-[220px] sm:w-[200px] sm:h-[260px] md:w-[220px] md:h-[300px] lg:w-[280px] lg:h-[380px] xl:w-[450px] xl:h-[580px] bg-gradient-to-br from-slate-800 to-slate-900 rounded flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/gigs.png" 
                    alt="Gigs Artwork" 
                    className="w-full h-full object-cover rounded"
                  />
                
            </div>
            
            {/* Frame shadow */}
            <div className="absolute inset-0 bg-black/50 blur-3xl -z-10 transform translate-y-8"></div>
          </div>

          {/* Right side - Branding */}
          <div className="flex flex-col items-center space-y-12">
            {/* Logo */}
            <div className="relative group">
              
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
            </div>

            {/* Text content */}
            <div className="text-center space-y-4">
            <p className="text-sm md:text-sm lg:text-base text-gray-300 font-light max-w-xl">
              <span className="text-amber-400 font-semibold">Art Unbound Odyssey</span> I am what some call a gigs. My moniker aside I am the one pictured handsomely to the left. You should be glad you made it here, please leave a tip here as thanks for introducing you to the gigs. I do data science, pay me to do data science. 
            </p>
            </div>

            {/* Decorative line */}
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default ArtUnboundOdyssey;