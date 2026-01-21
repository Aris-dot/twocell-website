
import React from 'react';
import { CardData } from '../types';
import Card from './Card';

interface CardGridProps {
  cards: CardData[];
  onCardClick: (data: CardData) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {cards.map((card) => (
        <Card key={card.id} data={card} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;
