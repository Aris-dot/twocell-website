
import React from 'react';
import { CardData, MenuItem } from '../types';
import {
  ToolsIcon, VintagePhoneIcon, RepairIcon, IphoneIcon, ShieldIcon, StarIcon, PersonIcon, QuestionMarkIcon, LocationPinIcon, CheckCircleIcon, PhoneScreenIcon, BatteryIcon, ChargingPortIcon, MagnifyingGlassIcon, SpeechBubbleIcon
} from '../components/Icons';
import FaqAccordion from '../components/FaqAccordion';

// Contenido para el Modal de Partes Originales
const OriginalPartsModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">¿Por qué refacciones ORIGINALES?</h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
                <h4 className="font-semibold text-lg mb-3 text-[#FF8C00]">Problemas con partes genéricas:</h4>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Face ID deja de funcionar</li>
                    <li>El táctil o la huella no responden</li>
                    <li>Fallas en los sensores de proximidad</li>
                    <li>Pantallas que se despegan con el tiempo</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-3 text-[#4A90E2]">Lo que manejamos:</h4>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Pantallas y displays completos</li>
                    <li>Flex de carga</li>
                    <li>Cables coaxiales (inexistentes en genéricos)</li>
                    <li>Cámaras originales</li>
                    <li>Baterías certificadas</li>
                    <li>Módulos de Face ID / Touch ID</li>
                </ul>
            </div>
        </div>
        <a href="tel:5512345678" className="mt-8 inline-block bg-[#FF8C00] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#F5A623] transition-all duration-300">
            Consultar disponibilidad por teléfono
        </a>
    </>
);

// Contenido para el Modal de Celulares Clásicos
const ClassicPhonesModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">¿Buscas ese celular nostálgico?</h3>
        <p className="text-gray-600 mb-6">Tenemos una selección rotativa de celulares clásicos y modelos descontinuados. Desde Nokias indestructibles hasta los primeros iPhones.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            {['Nokia 3310', 'BlackBerry', 'iPhone 3G', 'Motorola RAZR', 'Slider Phone', 'Vintage Phone'].map((phone, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center h-32 bg-gray-50">
                    <VintagePhoneIcon className="h-8 w-8 text-gray-400 mb-2"/>
                    <span className="text-xs font-semibold text-gray-500">{phone}</span>
                </div>
            ))}
        </div>
        <p className="text-sm font-bold text-yellow-600 mb-6">⚠️ Inventario variable - Consulta disponibilidad.</p>
        <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#4A90E2] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
            Preguntar por WhatsApp
        </a>
    </>
);

// Contenido para el Modal de Servicios de Reparación
const RepairServicesModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Nuestros Servicios de Reparación</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            {[
                { name: "Reparación de pantalla", icon: <PhoneScreenIcon className="mx-auto h-8 w-8 text-[#4A90E2]" /> },
                { name: "Cambio de batería", icon: <BatteryIcon className="mx-auto h-8 w-8 text-[#4A90E2]" /> },
                { name: "Reparación de puerto de carga", icon: <ChargingPortIcon className="mx-auto h-8 w-8 text-[#4A90E2]" /> },
                { name: "Diagnóstico gratuito", icon: <MagnifyingGlassIcon className="mx-auto h-8 w-8 text-[#FF8C00]" />, highlight: true },
                { name: "Instalación profesional", icon: <ToolsIcon className="mx-auto h-8 w-8 text-[#4A90E2]" /> },
                { name: "Asesoría técnica personalizada", icon: <SpeechBubbleIcon className="mx-auto h-8 w-8 text-[#4A90E2]" /> },
            ].map((service, index) => (
                <div key={index} className={`p-4 rounded-lg ${service.highlight ? 'bg-orange-50' : 'bg-blue-50'}`}>
                    {service.icon}
                    <p className={`mt-2 font-semibold text-sm ${service.highlight ? 'text-[#FF8C00]' : 'text-[#4A90E2]'}`}>{service.name}</p>
                </div>
            ))}
        </div>
    </>
);

// Contenido para el Modal de Especialistas en iPhone
const IphoneSpecialistsModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">¿Por qué iPhone es diferente?</h3>
        <p className="text-gray-600 mb-6">Las reparaciones de iPhone requieren conocimiento especializado y partes originales para mantener todas sus funcionalidades.</p>
        <div className="space-y-4 text-left">
            {[
                { item: "Partes originales para Face ID", description: "Las partes genéricas deshabilitan Face ID permanentemente." },
                { item: "Técnicos especializados", description: "Su compleja arquitectura interna requiere experiencia." },
                { item: "Herramientas específicas", description: "Tornillería propietaria y componentes delicados." },
                { item: "Conocimiento de iOS", description: "Experiencia en la integración software-hardware." },
            ].map((req, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <CheckCircleIcon className="h-6 w-6 text-[#4A90E2] mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-[#2C3E50]">{req.item}</h4>
                        <p className="text-gray-500 text-sm">{req.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <p className="mt-6 font-semibold text-center text-gray-700">En TwoCell nos especializamos en la reparación de iPhone con refacciones que mantienen todas sus funciones.</p>
    </>
);

// Contenido para el Modal de Garantía
const WarrantyModalContent: React.FC = () => (
    <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Garantía Real de 30 Días</h3>
        <div className="w-48 h-48 border-4 border-[#FF8C00] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-lg bg-white mb-8">
            <ShieldIcon className="h-12 w-12 text-[#FF8C00] mb-2"/>
            <span className="text-xl font-bold text-[#FF8C00]">30 DÍAS</span>
            <span className="text-sm font-semibold text-[#2C3E50]">DE GARANTÍA</span>
        </div>
        <ul className="space-y-3 text-left">
            {[
                "Todas las refacciones con garantía de 30 días.",
                "Incluye reparaciones realizadas en tienda.",
                "Respaldada por nuestra ubicación física en el Centro.",
                "Si algo falla, lo reemplazamos sin costo.",
            ].map((detail, index) => (
                <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3"/>
                    <span className="text-gray-600">{detail}</span>
                </li>
            ))}
        </ul>
    </div>
);


// Contenido para el Modal de Reseñas
const ReviewsModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Lo que dicen nuestros clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2">
            {[
                { name: "Jorge M.", rating: 5, text: "Refacciones realmente originales, mi Face ID sigue funcionando perfecto después de 6 meses.", date: "Hace 2 meses" },
                { name: "María S.", rating: 5, text: "Francisco me explicó todo con claridad. La garantía me dio mucha tranquilidad.", date: "Hace 3 semanas" },
                { name: "Carlos R.", rating: 5, text: "El mejor lugar para partes de iPhone en el Centro. Valió la pena el viaje desde Polanco.", date: "Hace 1 mes" },
                { name: "Ana L.", rating: 5, text: "Tenían un cable coaxial que nadie más maneja. ¡Salvaron mi celular!", date: "Hace 2 semanas" },
                { name: "Roberto P.", rating: 5, text: "Los 10+ años de experiencia se notan. Servicio muy profesional.", date: "Hace 1 mes" },
                { name: "Laura G.", rating: 5, text: "Mi Touch ID funciona como nuevo. Las partes genéricas nunca lograron esto.", date: "Hace 3 meses" },
            ].map((review, index) => (
                <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                        <p className="font-bold text-[#2C3E50]">{review.name}</p>
                        <div className="flex">
                            {Array(review.rating).fill(0).map((_, i) => <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">"{review.text}"</p>
                    <p className="text-xs text-gray-400 text-right">{review.date}</p>
                </div>
            ))}
        </div>
        <a href="https://g.page/TWOCELL?share" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-[#4A90E2] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
            Ver todas las reseñas en Google
        </a>
    </>
);

// Contenido para el Modal de Sobre Nosotros
const AboutUsModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Nuestro Compromiso con la Calidad</h3>
        <div className="text-left text-gray-600 space-y-4">
            <p>Como fundador de TwoCell, Francisco Velázquez notó que las refacciones genéricas son una opción que busca cubrir una alta demanda a buen precio, pero quedaba la necesidad de piezas duraderas que cumplan TODAS las funciones sin interferir con la operación de tu equipo.</p>
            <p>Así nace TwoCell, buscando cuidar Tu Celular manteniendo la calidad con la que fue fabricado. Esto ha sido posible creando una red donde obtenemos piezas de un teléfono como el tuyo, logrando tener desde esos blindajes que muchas veces vuelan al abrir un teléfono (pero por algo están ahí), hasta el display completo para evitar despegar pantallas con alto riesgo o que la huella funcione a la perfección.</p>
            <p className="font-semibold">Más de 10 años sirviendo a técnicos y usuarios en el corazón de la CDMX.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="bg-blue-50 p-3 rounded-lg"><p className="font-semibold text-sm text-[#4A90E2]">10+ años de experiencia</p></div>
            <div className="bg-blue-50 p-3 rounded-lg"><p className="font-semibold text-sm text-[#4A90E2]">Ubicados en Centro Histórico</p></div>
            <div className="bg-orange-50 p-3 rounded-lg col-span-2"><p className="font-semibold text-sm text-[#FF8C00]">Red de proveedores de partes originales</p></div>
        </div>
    </>
);


// Contenido para el Modal de FAQ
const FaqModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Preguntas Frecuentes</h3>
        <FaqAccordion />
    </>
);

// Contenido para el Modal de Ubicación y Contacto
const LocationModalContent: React.FC = () => (
    <>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Visítanos en el Centro Histórico</h3>
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.537233827987!2d-99.1353656850933!3d19.43260778688431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f94d0e1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sZ%C3%B3calo%2C%20Centro%20Hist%C3%B3rico%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1678886400000!5m2!1ses!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
                <h4 className="font-bold text-lg mb-2 text-[#2C3E50]">Información de Contacto</h4>
                <p className="text-gray-600"><span className="font-semibold">Dirección:</span> Centro Histórico, CDMX</p>
                <p className="text-gray-600"><span className="font-semibold">Referencia:</span> A 5 min de Metro Zócalo</p>
                <p className="text-gray-600 mt-2"><span className="font-semibold">Teléfono:</span> <a href="tel:5512345678" className="text-[#4A90E2] hover:underline">55-1234-5678</a></p>
                 <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300">
                    Contactar por WhatsApp
                </a>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-2 text-[#2C3E50]">Horarios</h4>
                <p className="text-gray-600"><span className="font-semibold">Lunes - Viernes:</span> 10:00 AM - 7:00 PM</p>
                <p className="text-gray-600"><span className="font-semibold">Sábado:</span> 10:00 AM - 5:00 PM</p>
                <p className="text-gray-600"><span className="font-semibold">Domingo:</span> Cerrado</p>
            </div>
        </div>
    </>
);

export const CARDS_DATA: CardData[] = [
    { id: 'card_1', title: "Refacciones Originales 🔧", preview: "Displays, flex de carga, cables coaxiales, baterías certificadas.", icon: <ToolsIcon className="h-10 w-10 text-[#FF8C00]" />, modalContent: <OriginalPartsModalContent /> },
    { id: 'card_2', title: "Celulares Clásicos 📱", preview: "Nokia, BlackBerry, iPhones vintage, Motorola RAZR.", icon: <VintagePhoneIcon className="h-10 w-10 text-[#4A90E2]" />, modalContent: <ClassicPhonesModalContent /> },
    { id: 'card_3', title: "Servicios de Reparación 🛠️", preview: "Diagnóstico gratuito • Instalación profesional.", icon: <RepairIcon className="h-10 w-10 text-[#FF8C00]" />, modalContent: <RepairServicesModalContent /> },
    { id: 'card_4', title: "Especialistas en iPhone 📲", preview: "Reparaciones complejas • Partes certificadas.", icon: <IphoneIcon className="h-10 w-10 text-[#4A90E2]" />, modalContent: <IphoneSpecialistsModalContent /> },
    { id: 'card_5', title: "Garantía de 30 Días 🛡️", preview: "Garantía real en todas nuestras refacciones.", icon: <ShieldIcon className="h-10 w-10 text-[#FF8C00]" />, modalContent: <WarrantyModalContent /> },
    { id: 'card_6', title: "Reseñas ⭐⭐⭐⭐⭐", preview: "+90 clientes satisfechos nos recomiendan.", icon: <StarIcon className="h-10 w-10 text-[#F5A623]" />, modalContent: <ReviewsModalContent /> },
    { id: 'card_7', title: "Sobre Nosotros 👤", preview: "La historia de Francisco y TwoCell.", icon: <PersonIcon className="h-10 w-10 text-[#4A90E2]" />, modalContent: <AboutUsModalContent /> },
    { id: 'card_8', title: "Preguntas Frecuentes ❓", preview: "Resuelve tus dudas más comunes.", icon: <QuestionMarkIcon className="h-10 w-10 text-[#FF8C00]" />, modalContent: <FaqModalContent /> },
    { id: 'card_9', title: "Ubicación y Contacto 📍", preview: "Centro Histórico • Lun-Sáb 10am-7pm", icon: <LocationPinIcon className="h-10 w-10 text-[#4A90E2]" />, modalContent: <LocationModalContent /> },
];

export const MENU_ITEMS: MenuItem[] = [
    { label: "🔧 Refacciones Originales", targetId: "card_1" },
    { label: "📱 Celulares Clásicos", targetId: "card_2" },
    { label: "🛠️ Servicios de Reparación", targetId: "card_3" },
    { label: "📲 Especialistas en iPhone", targetId: "card_4" },
    { label: "🛡️ Garantía de 30 Días", targetId: "card_5" },
    { label: "⭐ Reseñas", targetId: "card_6" },
    { label: "👤 Sobre Nosotros", targetId: "card_7" },
    { label: "❓ Preguntas Frecuentes", targetId: "card_8" },
    { label: "📍 Ubicación y Contacto", targetId: "card_9" },
];
