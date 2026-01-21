
import React, { useState } from 'react';
import { CardData } from './types';
import { CARDS_DATA, MENU_ITEMS } from './data/content';
import Hero from './components/Hero';
import HorizontalMenu from './components/HorizontalMenu';
import CardGrid from './components/CardGrid';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [activeModalCard, setActiveModalCard] = useState<CardData | null>(null);

  const openModal = (cardData: CardData) => {
    // Si la tarjeta de Ubicación o Reseñas se clickea, abre el modal correspondiente
    if (cardData.id === 'card_9') {
      setActiveModalCard(CARDS_DATA.find(c => c.id === 'card_9') || null);
    } else if (cardData.id === 'card_6') {
      setActiveModalCard(CARDS_DATA.find(c => c.id === 'card_6') || null);
    } else {
      setActiveModalCard(cardData);
    }
  };

  const closeModal = () => {
    setActiveModalCard(null);
  };

  return (
    <div className="bg-[#F8F9FA] text-[#2C3E50]">
      <Hero onLocationClick={() => openModal(CARDS_DATA[8])} onReviewsClick={() => openModal(CARDS_DATA[5])} />
      <HorizontalMenu items={MENU_ITEMS} />
      <main id="dashboard-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <CardGrid cards={CARDS_DATA} onCardClick={openModal} />
      </main>
      <Modal card={activeModalCard} isOpen={!!activeModalCard} onClose={closeModal} />
    </div>
  );
};

export default App;
