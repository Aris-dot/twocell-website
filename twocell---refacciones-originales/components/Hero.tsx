
import React, { useState, useEffect } from 'react';
import { TwoCellLogo } from './Icons';

interface HeroProps {
  onLocationClick: () => void;
  onReviewsClick: () => void;
}

const sampleReviews = [
  { text: "Mi Face ID funciona perfecto", author: "Ana R.", stars: "⭐⭐⭐⭐⭐" },
  { text: "Garantía real, me cambiaron la pieza sin problemas.", author: "Carlos M.", stars: "⭐⭐⭐⭐⭐" },
  { text: "Francisco es un verdadero experto. ¡Súper recomendado!", author: "Laura G.", stars: "⭐⭐⭐⭐⭐" },
  { text: "Refacciones originales que valen cada peso.", author: "Roberto P.", stars: "⭐⭐⭐⭐⭐" }
];

// POSICIONES FIJAS RELATIVAS AL LOGO
const bubbleData = [
    { review: sampleReviews[0], positionClasses: '-top-10 -left-20 md:-left-28', tail: 'tail-bottom-right' },
    { review: sampleReviews[1], positionClasses: '-top-12 -right-20 md:-right-28', tail: 'tail-bottom-left' },
    { review: sampleReviews[2], positionClasses: '-bottom-10 -left-16 md:-left-24', tail: 'tail-top-right' },
    { review: sampleReviews[3], positionClasses: '-bottom-12 -right-16 md:-right-24', tail: 'tail-top-left' },
];

const ReviewBubble: React.FC<{ review: any; isVisible: boolean; positionClasses: string; tail: string; }> = ({ review, isVisible, positionClasses, tail }) => (
    <div
        className={`absolute w-48 md:w-56 p-3 rounded-xl bg-white/95 border border-orange-200/50 shadow-lg transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'} ${positionClasses} ${tail}`}
        style={{ maxWidth: '250px' }}
    >
        <p className="text-sm text-[#2C3E50]">{review.stars}</p>
        <p className="text-sm text-gray-700 leading-tight mt-1">"{review.text}"</p>
        <p className="text-xs font-semibold text-right mt-2 text-gray-500">- {review.author}</p>
    </div>
);


const Hero: React.FC<HeroProps> = ({ onLocationClick, onReviewsClick }) => {
  const [visibleSet, setVisibleSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setVisibleSet(prev => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <header className="relative flex flex-col items-center justify-center h-screen bg-[#F8F9FA] overflow-hidden px-4">
      <style>{`
        .tail-bottom-right::after, .tail-bottom-left::after, .tail-top-right::after, .tail-top-left::after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-color: transparent;
            filter: drop-shadow(0 2px 1px rgba(0,0,0,0.05));
        }
        .tail-bottom-right::after { 
            top: 100%; right: 20px;
            border-width: 10px 10px 0 0;
            border-top-color: rgba(255, 255, 255, 0.95);
        }
        .tail-bottom-left::after {
            top: 100%; left: 20px;
            border-width: 10px 0 0 10px;
            border-top-color: rgba(255, 255, 255, 0.95);
        }
        .tail-top-right::after {
            bottom: 100%; right: 20px;
            border-width: 0 10px 10px 0;
            border-bottom-color: rgba(255, 255, 255, 0.95);
        }
        .tail-top-left::after {
            bottom: 100%; left: 20px;
            border-width: 0 0 10px 10px;
            border-bottom-color: rgba(255, 255, 255, 0.95);
        }
      `}</style>
      
      <div className="relative z-20 text-center flex flex-col items-center">
        {/* Contenedor del Logo para anclar las burbujas */}
        <div className="relative mb-4">
          <TwoCellLogo />
          
          {/* Las burbujas se posicionan relativas a este contenedor */}
          <div className="absolute inset-0 hidden md:block">
            <ReviewBubble {...bubbleData[0]} isVisible={visibleSet === 0} />
            <ReviewBubble {...bubbleData[1]} isVisible={visibleSet === 1} />
            <ReviewBubble {...bubbleData[2]} isVisible={visibleSet === 1} />
            <ReviewBubble {...bubbleData[3]} isVisible={visibleSet === 0} />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] leading-tight">
          Refacciones Originales <br className="hidden md:block" />para tu Celular
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-500">
          Centro Histórico, CDMX • 10+ Años de Experiencia
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:5512345678" className="w-full sm:w-auto text-center bg-[#FF8C00] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#F5A623] transition-all duration-300 transform hover:scale-105 active:scale-95">
            📞 Llamar
          </a>
          <button onClick={onLocationClick} className="w-full sm:w-auto bg-[#4A90E2] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
            📍 Ubicación
          </button>
          <button onClick={onReviewsClick} className="w-full sm:w-auto bg-transparent border-2 border-[#2C3E50] text-[#2C3E50] font-semibold py-3 px-8 rounded-lg hover:bg-[#2C3E50] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
            ⭐ +90 Reseñas
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
