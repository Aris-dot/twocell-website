
import React from 'react';
import { MenuItem } from '../types';

interface HorizontalMenuProps {
  items: MenuItem[];
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ items }) => {
  const scrollToCard = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 120; // 120px offset for the sticky menu height

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    } else {
      // Fallback for elements in grid section
      const grid = document.getElementById('dashboard-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };


  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="horizontal-menu flex items-center space-x-2 md:space-x-4 h-16 overflow-x-auto whitespace-nowrap">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(item.targetId)}
              className="px-3 py-2 text-sm font-semibold text-gray-500 rounded-md hover:text-[#FF8C00] hover:bg-orange-50 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HorizontalMenu;
