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
        {cards.map((card) => (
          <div
            key={card.id}
            className="flip-container relative flex items-start flex-1 max-w-[154px] md:max-w-[250px] lg:max-w-[220px] xl:max-w-[280px]"
            style={{
              minHeight: '200px',
              maxHeight: '300px',
              height: '45vh',
              perspective: '1000px',
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredCard === card.id && !flippedCards.has(card.id) ? 'scaleY(1.25)' : 'scaleY(1)',
              zIndex: hoveredCard === card.id ? 10 : 1
            }}
            onClick={() => handleCardClick(card.id)}
          >
            <div
              className={`flip-card relative w-full h-full cursor-pointer ${flippedCards.has(card.id) ? 'flipped' : ''}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front of card */}
              <div 
                className="flip-card-front absolute inset-0 w-full h-full rounded-lg border-2 md:border-3 border-[#1e3a5c]"
                style={{
                  backgroundColor: hoveredCard === card.id && !flippedCards.has(card.id) ? '#0c1a42' : '#050a2a',
                  transition: 'background-color 0.3s ease'
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
                    {card.logo}
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
                      ${hoveredCard === card.id && !flippedCards.has(card.id) ? 'w-8 md:w-16 lg:w-20 h-[2px]' : 'w-6 md:w-10 lg:w-14 h-[1px]'}`}
                    />
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div className="flip-card-back absolute inset-0 w-full h-full bg-[#0a1f3a] border-2 md:border-3 border-[#3e5a7c] rounded-lg flex flex-col items-center justify-center p-3 md:p-6 lg:p-8">
                {/* Top corner accent */}
                <div className="absolute top-3 md:top-5 lg:top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full" />
                
                {/* Card number in corner */}
                <div className="absolute top-3 right-3 text-orange-500 text-xs font-bold">
                  {card.id}
                </div>
                
                {/* Title */}
                <h3 className="text-orange-400 text-sm md:text-base font-semibold mb-4">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-[10px] md:text-sm lg:text-base leading-relaxed text-center px-2">
                  {card.description}
                </p>
                
                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 md:mb-6 lg:mb-8">
                  <div className="bg-orange-500 w-8 md:w-12 lg:w-16 h-[2px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .flip-container {
          perspective: 1000px;
        }
        
        .flip-card {
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        /* Hide front content faster during flip */
        .flip-card-front img,
        .flip-card-front > div {
          transition: opacity 0.15s ease-out;
        }
        
        .flip-card.flipped .flip-card-front img,
        .flip-card.flipped .flip-card-front > div {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCards;