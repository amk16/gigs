import React, { useState } from 'react';

const InteractiveCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      id: '01',
      logo: (
        <svg viewBox="0 0 100 40" className="w-8 h-4 md:w-14 md:h-7 lg:w-16 lg:h-8">
          <g stroke="#6B7280" strokeWidth="3" fill="none">
            <polyline points="10,10 25,30 40,10" />
            <line x1="50" y1="10" x2="50" y2="30" />
            <line x1="60" y1="10" x2="60" y2="30" />
            <line x1="70" y1="20" x2="85" y2="20" />
            <line x1="85" y1="20" x2="85" y2="30" />
          </g>
        </svg>
      ),
      title: 'STUDIO 74',
      bgImage: null
    },
    {
      id: '02',
      logo: (
        <div className="relative">
          <div className="text-gray-500 text-3xl md:text-5xl lg:text-6xl font-light">∞</div>
        </div>
      ),
      title: 'GLOSTER',
      bgImage: null
    },
    {
      id: '03',
      logo: null,
      title: 'LINEA VOL.1',
    },
    {
      id: '04',
      logo: (
        <svg viewBox="0 0 60 60" className="w-7 h-7 md:w-12 md:h-12 lg:w-14 lg:h-14">
          <g fill="#6B7280">
            <path d="M15 15 L30 30 L15 45 L25 45 L40 30 L25 15 Z" opacity="0.6"/>
            <path d="M35 15 L50 30 L35 45 L45 45 L60 30 L45 15 Z" opacity="0.8"/>
          </g>
        </svg>
      ),
      title: 'CUBE 2.0',
      bgImage: null
    }
  ];

  return (
    <div className="h-full bg-[#050a2a] flex items-center justify-center p-3 md:p-6 lg:p-8 relative overflow-hidden">
      {/* Background rectangle - 30% smaller on small screens */}
      <div className="absolute w-[10%] md:w-[70%] lg:w-[75%] max-w-[770px] md:max-w-[1100px] h-[48%] md:h-[65%] lg:h-[70%] max-h-[350px] md:max-h-[500px] bg-transparent border-[2px] md:border-[3px] border-[#1e3a5c] pointer-events-none z-0" />
      
      <div className="relative flex gap-2 md:gap-4 lg:gap-6 justify-center z-10 w-full max-w-[840px] md:max-w-[1200px]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative flex items-start flex-1 max-w-[154px] md:max-w-[250px] lg:max-w-[220px] xl:max-w-[280px]"
            style={{
              minHeight: '200px',
              maxHeight: '300px',
              height: '45vh',
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredCard === card.id ? 'scaleY(1.25)' : 'scaleY(1)',
              zIndex: hoveredCard === card.id ? 10 : 1
            }}
          >
            <div
              className={`relative overflow-hidden cursor-pointer w-full h-full
                ${index === 0 || index === 3 ? 'rounded-lg' : 'rounded-lg'}
                border-2 md:border-3 border-[#1e3a5c]`}
              style={{
                backgroundColor: hoveredCard === card.id ? '#0c1a42' : '#050a2a',
                transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top corner accent */}
              <div className="absolute top-3 md:top-5 lg:top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full" />

              {/* Card content */}
              <div className="relative h-full flex flex-col items-center justify-between p-2 md:p-6 lg:p-8">
                {/* Logo/Image area */}
                <div className="flex-1 flex items-center justify-center mt-3 md:mt-8 lg:mt-12">
                  {card.logo && (
                    <div className={`transition-transform duration-500 ${
                      hoveredCard === card.id ? 'scale-110' : 'scale-100'
                    }`}>
                      {card.logo}
                      {/* Background circuit pattern for cards 1 and 2 */}
                      {(card.id === '01' || card.id === '02') && (
                        <div className="absolute inset-0 opacity-5">
                          <svg className="w-full h-full" viewBox="0 0 300 400">
                            <pattern id={`circuit-${card.id}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                              <circle cx="5" cy="5" r="1" fill="#fff" />
                              <circle cx="95" cy="5" r="1" fill="#fff" />
                              <circle cx="5" cy="95" r="1" fill="#fff" />
                              <circle cx="95" cy="95" r="1" fill="#fff" />
                              <line x1="5" y1="5" x2="95" y2="5" stroke="#fff" strokeWidth="0.5" />
                              <line x1="5" y1="5" x2="5" y2="95" stroke="#fff" strokeWidth="0.5" />
                            </pattern>
                            <rect width="300" height="400" fill={`url(#circuit-${card.id})`} />
                          </svg>
                        </div>
                      )}
                    </div>
                  )}
                  {card.bgImage && (
                    <img 
                      src={card.bgImage} 
                      alt="" 
                      className="w-full h-full object-cover opacity-30"
                    />
                  )}
                </div>

                {/* Title and number */}
                <div className="text-center mb-2 md:mb-5 lg:mb-6">
                  <h3 className="text-gray-400 text-[8px] md:text-xs tracking-[0.15em] md:tracking-[0.3em] font-light mb-2 md:mb-4 lg:mb-6 uppercase">
                    {card.title}
                  </h3>
                  <div className="text-orange-500 text-xs md:text-base lg:text-lg font-medium">
                    {card.id}
                  </div>
                </div>

                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 md:mb-6 lg:mb-8">
                  <div className={`bg-gray-700 transition-all duration-500
                    ${hoveredCard === card.id ? 'w-8 md:w-16 lg:w-20 h-[2px]' : 'w-6 md:w-10 lg:w-14 h-[1px]'}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCards;