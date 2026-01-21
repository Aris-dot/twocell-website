
import React from 'react';
import { CardData } from '../types';

interface CardProps {
  data: CardData;
  onClick: (data: CardData) => void;
}

const Card: React.FC<CardProps> = ({ data, onClick }) => {
  return (
    <div
      id={data.id}
      onClick={() => onClick(data)}
      className="group bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
    >
      <div className="flex flex-col items-start h-full">
        {data.icon}
        <h3 className="mt-4 text-lg font-bold text-[#2C3E50]">{data.title}</h3>
        <p className="mt-1 text-sm text-gray-500 flex-grow">{data.preview}</p>
        <span className="mt-4 text-sm font-semibold text-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ver más →
        </span>
      </div>
    </div>
  );
};

export default Card;
