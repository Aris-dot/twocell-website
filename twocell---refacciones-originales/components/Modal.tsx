import React, { useEffect } from 'react';
import { CardData } from '../types';
import { CloseIcon } from './Icons';

interface ModalProps {
  card: CardData | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ card, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !card) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#F8F9FA] rounded-2xl shadow-2xl p-6 sm:p-8 text-center overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors duration-200 p-2 rounded-full hover:bg-gray-200"
          aria-label="Cerrar modal"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        {/* FIX: Add a more specific type assertion for `card.icon` to inform TypeScript that it's a React element that accepts a `className` prop. This resolves the `cloneElement` overload error. */}
        <div className="flex justify-center mb-5">{React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: 'h-12 w-12' })}</div>
        {card.modalContent}
      </div>
      <style>{`
        @keyframes fade-in-scale {
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
