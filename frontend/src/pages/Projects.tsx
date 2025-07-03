import { useState } from 'react';

const GalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample data - replace with your content
  const cards = [
    {
      id: 1,
      title: "Mountain Vista",
      content: "Experience the breathtaking views of mountain peaks piercing through morning clouds. This serene landscape captures the raw beauty of nature at its finest.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      color: "#1a365d"
    },
    {
      id: 2,
      title: "Ocean Waves",
      content: "Feel the rhythmic pulse of ocean waves as they dance along the shoreline. The endless horizon reminds us of infinite possibilities.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
      color: "#065f46"
    },
    {
      id: 3,
      title: "Desert Sunset",
      content: "Watch as the sun paints the desert sky in brilliant hues of orange and purple. The vast expanse of sand dunes creates a mesmerizing pattern.",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
      color: "#7c2d12"
    },
    {
      id: 4,
      title: "Forest Path",
      content: "Wander through ancient forests where sunlight filters through the canopy. Each step reveals new wonders in this natural cathedral.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
      color: "#14532d"
    },
    {
      id: 5,
      title: "City Lights",
      content: "Marvel at the urban landscape as it transforms into a glittering constellation after dark. The city never sleeps, and neither does its beauty.",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
      color: "#1e293b"
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  // Calculate the position of a card based on its index relative to the active card
  const calculateCardPosition = (index: number) => {
    const totalCards = cards.length;
    const relativeIndex = index - activeIndex;
    
    // Cards form a straight horizontal line
    const baseX = 65; // Shifted right from center (was 50)
    const baseY = 75; // Fixed height from top
    const cardSpacing = 20; // Space between cards
    
    // Calculate position based on relative index
    let x, y, scale, opacity, zIndex, rotation;
    
    if (relativeIndex < -1) {
      // Cards more than 1 position to the left (hidden)
      x = baseX - 2 * cardSpacing;
      y = baseY;
      scale = 0.8;
      opacity = 0;
      zIndex = 0;
      rotation = 0;
    } else if (relativeIndex === -1) {
      // Previous card (visible on left)
      x = baseX - cardSpacing;
      y = baseY;
      scale = 0.9;
      opacity = 0.7;
      zIndex = totalCards - 1;
      rotation = 0;
    } else if (relativeIndex === 0) {
      // Active card (center)
      x = baseX;
      y = baseY;
      scale = 1.1;
      opacity = 1;
      zIndex = totalCards;
      rotation = 0;
    } else if (relativeIndex === 1) {
      // Next card (visible on right)
      x = baseX + cardSpacing;
      y = baseY;
      scale = 0.9;
      opacity = 0.7;
      zIndex = totalCards - 1;
      rotation = 0;
    } else {
      // Cards more than 1 position to the right (hidden)
      x = baseX + 2 * cardSpacing;
      y = baseY;
      scale = 0.8;
      opacity = 0;
      zIndex = 0;
      rotation = 0;
    }
    
    return { x, y, scale, opacity, zIndex, rotation };
  };

  const activeCard = cards[activeIndex] || cards[0];

  return (
    <div 
      className="h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${activeCard?.color || '#1a365d'}ee, #000000)`
      }}
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${activeCard?.image || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}
      />
      
      {/* Left side content */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center p-16 z-10">
        <div className="max-w-2xl w-full">
          <h1 
            className="text-6xl font-bold text-white mb-6 transition-all duration-700 whitespace-nowrap"
            key={activeCard?.id || 0}
          >
            {activeCard?.title || ''}
          </h1>
          <p 
            className="text-xl text-gray-200 leading-relaxed transition-all duration-700 max-w-lg h-32 overflow-hidden"
            key={`${activeCard?.id || 0}-content`}
          >
            {activeCard?.content || ''}
          </p>
          <div className="mt-8 flex items-center gap-2">
            {cards.map((_, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="h-1 bg-white transition-all duration-300 cursor-pointer hover:opacity-100"
                style={{
                  width: idx === activeIndex ? '40px' : '20px',
                  opacity: idx === activeIndex ? 1 : 0.3
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handlePrevious}
              className="text-white/70 hover:text-white transition-all duration-300"
              aria-label="Previous card"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="text-white/70 hover:text-white transition-all duration-300"
              aria-label="Next card"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      
      {/* Navigation Arrows */}
      
      {/* Cards container */}
      <div className="absolute inset-0 pointer-events-none">
        {cards.map((card, index: number) => {
          const { x, y, scale, opacity, zIndex, rotation } = calculateCardPosition(index);
          const isActive = index === activeIndex;
          
          return (
            <div
              key={card.id}
              className="absolute w-56 h-72 transition-all duration-700 ease-out"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
                opacity,
                zIndex
              }}
            >
              <div 
                className={`
                  w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-white
                  transition-all duration-500
                  ${isActive ? 'ring-4 ring-white ring-opacity-70 shadow-[0_0_60px_rgba(255,255,255,0.5)]' : ''}
                `}
              >
                {/* Card Image */}
                <div 
                  className="h-2/3 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.image})`
                  }}
                />
                
                {/* Card Content */}
                <div className="h-1/3 p-4 bg-gradient-to-b from-gray-900 to-black">
                  <h3 className="text-white text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-gray-300 text-xs line-clamp-2">{card.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      
    </div>
  );
};

export default GalleryPage;