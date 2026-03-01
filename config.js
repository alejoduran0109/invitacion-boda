// Wedding Invitation Configuration
// Personaliza todos los datos de la invitación aquí

const WEDDING_CONFIG = {
    // Información de los novios
    couple: {
        name1: "ALEJANDRO",
        name2: "STHEFANIA",
        // Puedes cambiar el orden o formato aquí
        displayNames: "ALEJANDRO & STHEFANIA"
    },

    // Información del invitado (personalizable)
    guest: {
        name: "Sra. Daniela García",
        spots: 3,
        table: 4,
        // Puedes cambiar esta información para cada invitado
    },

    // Fecha de la boda
    date: {
        day: "06",
        month: "06", 
        year: "2026",
        displayDate: "06.06.2026"
    },

    // Frase o cita
    quote: "Nuestra historia de amor continúa en el lugar más especial...",

    // Información de la ceremonia y fiesta (Hacienda Lagos de Veracruz)
    location: {
        venue: "Hacienda Lagos de Veracruz",
        address: "Jamundí, Valle del Cauca",
        city: "Colombia",
        time: "17:30h", // Inicio de recepción para invitados
        mapsUrl: "https://www.google.com/maps/search/Hacienda+Lagos+de+Veracruz+Jamundi"
    },

    // Dress code
    dressCode: {
        style: "Formal - Reserva de Colores",
        description: "El blanco está reservado para la novia. Por favor, sorpréndenos con tu mejor estilo en otros colores."
    },

    // Itinerario del día (Ceremonia, Recepción y Fiesta en el mismo lugar)
    itinerary: [
        {
            time: "17:30 h",
            event: "Recepción de Invitados",
            icon: "fas fa-users"
        },
        {
            time: "18:00 h", 
            event: "Ceremonia de Boda",
            icon: "fas fa-church"
        },
        {
            time: "19:30 h",
            event: "Banquete", 
            icon: "fas fa-utensils"
        },
        {
            time: "21:00 h",
            event: "Celebración & Fiesta",
            icon: "fas fa-music"
        }
    ],

    // Información de regalo
    gift: {
        message: "Lluvia de Sobres",
        description: "Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con nosotros, contaremos con lluvia de sobres en el evento.",
        accountHolder: "Alejandro & Sthefania",
        accountNumber: "ES 1111 2222 3333 4444" // Puedes cambiar esto si es necesario
    },

    // Álbum de fotos (Dots Memories)
    photoAlbum: {
        message: "Captura cada momento",
        instructions: "Usa la aplicación Dots Memories para compartir las fotos que tomes durante nuestra boda. ¡Queremos ver vuestro punto de vista!",
        albumCode: "ALEJO-STHEF26",
        appLink: "https://dotsmemories.com/" // Enlace a Dots Memories
    },

    // WhatsApp para confirmación
    whatsapp: {
        number: "+573000000000", // Reemplazar con número real
        message: "¡Hola! Confirmo mi asistencia a la boda de Alejandro y Sthefania."
    },

    // Colores del tema (puedes personalizar estos)
    colors: {
        primary: "#3c4a37", // Sage Green
        secondary: "#7a8f72", // Muted Green
        accent: "#d4af37", // Gold
        text: "#3e493b", // Darker Green for text
        background: "#f7f8f5" // Off-white/Cream
    },

    // Configuración adicional
    settings: {
        enableAnimations: true,
        enableParallax: true,
        enableRSVP: true,
        showQRCode: true
    }
};

// Función para aplicar la configuración al HTML
function applyConfiguration() {
    // Aplicar información del invitado
    const guestNameElement = document.querySelector('.guest-name');
    const guestDetailsElement = document.querySelector('.guest-details');
    if (guestNameElement) guestNameElement.textContent = WEDDING_CONFIG.guest.name;
    if (guestDetailsElement) guestDetailsElement.textContent = `Cupos: ${WEDDING_CONFIG.guest.spots} - Mesa: ${WEDDING_CONFIG.guest.table}`;

    // Aplicar nombres de los novios en la tarjeta
    const name1CardElement = document.querySelector('.name-card:first-of-type');
    const name2CardElement = document.querySelector('.name-card:last-of-type');
    if (name1CardElement) name1CardElement.textContent = WEDDING_CONFIG.couple.name1;
    if (name2CardElement) name2CardElement.textContent = WEDDING_CONFIG.couple.name2;

    // Aplicar nombres de los novios en la invitación principal
    const name1Element = document.querySelector('.name:first-of-type');
    const name2Element = document.querySelector('.name:last-of-type');
    if (name1Element) name1Element.textContent = WEDDING_CONFIG.couple.name1;
    if (name2Element) name2Element.textContent = WEDDING_CONFIG.couple.name2;

    // Aplicar fecha
    const dateElement = document.querySelector('.date');
    if (dateElement) dateElement.textContent = `— ${WEDDING_CONFIG.date.displayDate} —`;

    // Aplicar cita
    const quoteElement = document.querySelector('.quote');
    if (quoteElement) quoteElement.textContent = WEDDING_CONFIG.quote;

    // Aplicar información de ceremonia
    const ceremonyVenue = document.querySelector('.ceremony-section h3');
    const ceremonyAddress = document.querySelector('.ceremony-section .location-details p');
    const ceremonyTime = document.querySelector('.ceremony-section .time');
    const ceremonyMapLink = document.querySelector('.ceremony-section .map-link');
    
    if (ceremonyVenue) ceremonyVenue.textContent = WEDDING_CONFIG.ceremony.venue;
    if (ceremonyAddress) ceremonyAddress.innerHTML = `${WEDDING_CONFIG.ceremony.address}<br>${WEDDING_CONFIG.ceremony.city}`;
    if (ceremonyTime) ceremonyTime.textContent = WEDDING_CONFIG.ceremony.time;
    if (ceremonyMapLink) ceremonyMapLink.href = WEDDING_CONFIG.ceremony.mapsUrl;

    // Aplicar información de celebración
    const celebrationVenue = document.querySelector('.celebration-section h3');
    const celebrationAddress = document.querySelector('.celebration-section .location-details p');
    const celebrationMapLink = document.querySelector('.celebration-section .map-link');
    
    if (celebrationVenue) celebrationVenue.textContent = WEDDING_CONFIG.celebration.venue;
    if (celebrationAddress) celebrationAddress.innerHTML = `${WEDDING_CONFIG.celebration.address}<br>${WEDDING_CONFIG.celebration.city}`;
    if (celebrationMapLink) celebrationMapLink.href = WEDDING_CONFIG.celebration.mapsUrl;

    // Aplicar dress code
    const dressCodeTitle = document.querySelector('.dress-code-content h3');
    const dressCodeDesc = document.querySelector('.dress-code-content p');
    
    if (dressCodeTitle) dressCodeTitle.textContent = WEDDING_CONFIG.dressCode.style;
    if (dressCodeDesc) dressCodeDesc.textContent = WEDDING_CONFIG.dressCode.description;

    // Aplicar alojamientos
    const accommodationCards = document.querySelectorAll('.accommodation-card');
    WEDDING_CONFIG.accommodations.forEach((accommodation, index) => {
        if (accommodationCards[index]) {
            const title = accommodationCards[index].querySelector('h3');
            const phone = accommodationCards[index].querySelector('.phone-link');
            const link = accommodationCards[index].querySelector('.accommodation-link');
            
            if (title) title.textContent = accommodation.name;
            if (phone) {
                phone.textContent = accommodation.phone;
                phone.href = `tel:${accommodation.phone}`;
            }
            if (link) link.href = accommodation.link;
        }
    });

    // Aplicar itinerario
    const timelineItems = document.querySelectorAll('.timeline-item');
    WEDDING_CONFIG.itinerary.forEach((item, index) => {
        if (timelineItems[index]) {
            const timeElement = timelineItems[index].querySelector('.time');
            const eventElement = timelineItems[index].querySelector('.event h3');
            const iconElement = timelineItems[index].querySelector('.event i');
            
            if (timeElement) timeElement.textContent = item.time;
            if (eventElement) eventElement.textContent = item.event;
            if (iconElement) iconElement.className = item.icon;
        }
    });

    // Aplicar información de regalo
    const giftMessage = document.querySelector('.gift-content p');
    const accountHolder = document.querySelector('.bank-details h3');
    const accountNumber = document.getElementById('bank-account');
    
    if (giftMessage) giftMessage.textContent = WEDDING_CONFIG.gift.message;
    if (accountHolder) accountHolder.textContent = WEDDING_CONFIG.gift.accountHolder;
    if (accountNumber) accountNumber.textContent = WEDDING_CONFIG.gift.accountNumber;

    // Aplicar información del álbum de fotos
    const albumMessages = document.querySelectorAll('.photo-content p');
    const albumCode = document.getElementById('album-code');
    
    if (albumMessages[0]) albumMessages[0].textContent = WEDDING_CONFIG.photoAlbum.message;
    if (albumMessages[1]) albumMessages[1].textContent = WEDDING_CONFIG.photoAlbum.instructions;
    if (albumCode) albumCode.textContent = WEDDING_CONFIG.photoAlbum.albumCode;

    // Aplicar colores personalizados
    applyCustomColors();
}

// Función para aplicar colores personalizados
function applyCustomColors() {
    const root = document.documentElement;
    const colors = WEDDING_CONFIG.colors;
    
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--background-color', colors.background);
}

// Función para generar un nuevo código de álbum
function generateAlbumCode() {
    const names = WEDDING_CONFIG.couple.name1 + WEDDING_CONFIG.couple.name2;
    const year = WEDDING_CONFIG.date.year.slice(-2);
    const month = WEDDING_CONFIG.date.month;
    const day = WEDDING_CONFIG.date.day;
    
    return `BODA-${names.toUpperCase().slice(0, 3)}${year}${month}${day}`;
}

// Función para validar la configuración
function validateConfiguration() {
    const required = ['couple', 'date', 'ceremony', 'celebration'];
    const missing = [];
    
    required.forEach(field => {
        if (!WEDDING_CONFIG[field]) {
            missing.push(field);
        }
    });
    
    if (missing.length > 0) {
        console.warn('Configuración incompleta. Faltan:', missing);
        return false;
    }
    
    return true;
}

// Exportar configuración para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEDDING_CONFIG;
} else {
    window.WEDDING_CONFIG = WEDDING_CONFIG;
    window.applyConfiguration = applyConfiguration;
    window.generateAlbumCode = generateAlbumCode;
    window.validateConfiguration = validateConfiguration;
}
