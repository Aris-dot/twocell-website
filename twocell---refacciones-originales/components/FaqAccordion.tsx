
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const faqData = [
    {
        question: "¿Ofrecen garantía?",
        answer: "Sí, todas nuestras refacciones cuentan con una garantía de 30 días. Si algo falla, la reemplazamos sin costo."
    },
    {
        question: "¿Cómo sé que es original?",
        answer: "Las partes originales mantienen todas las funcionalidades del teléfono (Face ID, Touch ID, True Tone, sensores de proximidad). Podemos demostrar la diferencia en tienda y proveer verificación de autenticidad."
    },
    {
        question: "¿Qué pasa si cambio la batería de mi iPhone?",
        answer: "Con una batería original certificada, todas las funciones se mantienen intactas. Las baterías genéricas activan advertencias de iOS y pueden deshabilitar el monitoreo de condición de la batería. Usamos baterías certificadas que mantienen compatibilidad total."
    },
    {
        question: "¿Hacen envíos fuera de CDMX?",
        answer: "Sí, realizamos envíos a toda la república. Contáctanos por teléfono o WhatsApp para coordinar el envío y pago."
    },
    {
        question: "¿Ustedes instalan las piezas?",
        answer: "Vendemos las refacciones y podemos recomendar técnicos certificados. También ofrecemos servicio de instalación para ciertas reparaciones en nuestra ubicación del Centro."
    },
    {
        question: "¿Aceptan tarjeta?",
        answer: "Aceptamos efectivo y transferencias bancarias. Por tu seguridad, recomendamos las transferencias para compras de mayor valor."
    }
];

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#2C3E50]"
            >
                <span>{question}</span>
                <ChevronDownIcon className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600 text-left">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FaqAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {faqData.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default FaqAccordion;
