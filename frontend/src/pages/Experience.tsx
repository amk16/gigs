import { useState } from 'react';
import type { ReactNode } from 'react';

interface Card {
  id: string;
  title: string;
  description: string;
  logo?: ReactNode | null;
  bgImage?: string | null;
}

const InteractiveCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleCardClick = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const cards: Card[] = [
    {
      id: '01',
      logo: (
        <img 
          src="/brain.png" 
          alt="Brain Logo"
          className="w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
      ),
      title: 'ML Engineering',
      description: 'Building and deploying machine learning models at scale. Expertise in TensorFlow, PyTorch, and MLOps pipelines for production-ready AI solutions.',
      bgImage: null
    },
    {
      id: '02',
      logo: (
        <img 
          src="/medical-research.png" 
          alt="Data Science Logo"
          className="w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
      ),
      title: 'Data Science',
      description: 'Extracting insights from complex datasets using statistical analysis, machine learning, and data visualization to drive business decisions.',
      bgImage: null
    },
    {
      id: '03',
      logo: (
        <img 
          src="/economics.png" 
          alt="Economics Logo"
          className="w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
      ),
      title: 'Economics',
      description: 'Analyzing market trends, economic indicators, and behavioral patterns to provide strategic insights for business growth and policy decisions.',
      bgImage: null
    },
    {
      id: '04',
      logo: (
        <img 
          src="/bachelor.png" 
          alt="UMass Logo"
          className="w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
      ),
      title: 'UMass Amherst',
      description: 'Bachelor of Science in Computer Science with a focus on artificial intelligence and data structures. Graduated magna cum laude.',
      bgImage: null
    }
  ];

  return (
    <div className="h-full bg-[#050a2a] flex items-center justify-center p-3 md:p-6 lg:p-8 relative overflow-hidden">
      {/* Background rectangle */}
      <div className="absolute w-[10%] md:w-[70%] lg:w-[75%] max-w-[770px] md:max-w-[1100px] h-[48%] md:h-[65%] lg:h-[70%] max-h-[350px] md:max-h-[500px] bg-transparent border-[2px] md:border-[3px] border-[#1e3a5c] pointer-events-none z-0" />
      
      <div className="relative flex gap-2 md:gap-4 lg:gap-6 justify-center z-10 w-full max-w-[840px] md:max-w-[1200px]">
        {cards.map((card, index: number) => (
          <div
            key={card.id}
            className="relative flex items-start flex-1 max-w-[154px] md:max-w-[250px] lg:max-w-[220px] xl:max-w-[280px]"
            style={{
              minHeight: '200px',
              maxHeight: '300px',
              height: '45vh',
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredCard === card.id && !flippedCards.has(card.id) ? 'scaleY(1.25)' : 'scaleY(1)',
              zIndex: hoveredCard === card.id ? 10 : 1,
              perspective: '1000px'
            }}
          >
            <div
              className={`relative overflow-hidden cursor-pointer w-full h-full rounded-lg border-2 md:border-3 border-[#1e3a5c]`}
              style={{
                backgroundColor: hoveredCard === card.id && !flippedCards.has(card.id) ? '#0c1a42' : '#050a2a',
                transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                transformStyle: 'preserve-3d',
                transform: flippedCards.has(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id)}
            >
              {/* Card Inner Container */}
              <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                {/* Front of card */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  {/* Top corner accent */}
                  <div className="absolute top-3 md:top-5 lg:top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full" />

                  {/* Card content */}
                  <div className={`relative h-full flex flex-col items-center justify-between p-2 md:p-6 lg:p-8 transition-transform duration-700 ${
                    hoveredCard === card.id && !flippedCards.has(card.id) ? 'scale-y-[0.8]' : 'scale-y-100'
                  }`}>
                    {/* Logo/Image area */}
                    <div className="flex-1 flex items-center justify-center mt-3 md:mt-8 lg:mt-12">
                      {card.logo && (
                        <div className="transition-transform duration-500">
                          {card.logo}
                          {/* Background circuit pattern for all cards */}
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
                    <div className="text-center mb-2 md:mb-5 lg:mb-6 transition-transform duration-700">
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
                        ${hoveredCard === card.id && !flippedCards.has(card.id) ? 'w-8 md:w-16 lg:w-20 h-[2px]' : 'w-6 md:w-10 lg:w-14 h-[1px]'}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 w-full h-full bg-[#050a2a] border-2 md:border-3 border-[#1e3a5c] rounded-lg flex items-center justify-center p-3 md:p-6 lg:p-8"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  {/* Top corner accent */}
                  <div className="absolute top-3 md:top-5 lg:top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full" />
                  
                  {/* Description only */}
                  <p className="text-gray-400 text-[8px] md:text-xs lg:text-sm leading-relaxed text-center px-2">
                    {card.description}
                  </p>
                  
                  {/* Bottom line indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 md:mb-6 lg:mb-8">
                    <div className="bg-gray-700 w-6 md:w-10 lg:w-14 h-[1px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .flip-card {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCards;