# 💍 Tarjeta de Invitación de Boda

Una tarjeta de invitación de boda moderna, elegante y completamente personalizable, inspirada en el diseño de [specially.love](https://specially.love/demo-aquarelle-emerald).

## ✨ Características

- **Diseño Responsive**: Se adapta perfectamente a todos los dispositivos
- **Animaciones Suaves**: Efectos visuales elegantes y profesionales
- **Completamente Personalizable**: Fácil de modificar todos los datos
- **Interactivo**: Incluye funcionalidades como RSVP, copia al portapapeles, enlaces a mapas
- **Moderno**: Diseño actual con gradientes y efectos visuales
- **Accesible**: Optimizado para todos los usuarios

## 🚀 Instalación y Uso

### Opción 1: Uso Directo
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! Tu invitación está funcionando

### Opción 2: Servidor Local
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Luego visita http://localhost:8000
```

## 🎨 Personalización

### Configuración Básica
Edita el archivo `config.js` para personalizar todos los datos:

```javascript
const WEDDING_CONFIG = {
    // Información de los novios
    couple: {
        name1: "Tu Nombre",
        name2: "Nombre de tu Pareja",
    },
    
    // Fecha de la boda
    date: {
        day: "15",
        month: "06", 
        year: "2024",
        displayDate: "15.06.2024"
    },
    
    // Y mucho más...
};
```

### Secciones Personalizables

1. **Información de los Novios**: Nombres y fecha
2. **Ceremonia**: Lugar, dirección, hora
3. **Celebración**: Lugar de la fiesta
4. **Dress Code**: Código de vestimenta
5. **Alojamientos**: Hoteles recomendados
6. **Itinerario**: Horarios del día
7. **Regalo**: Información bancaria
8. **Álbum de Fotos**: Código para compartir fotos

### Colores Personalizables
```javascript
colors: {
    primary: "#667eea",      // Color principal
    secondary: "#764ba2",    // Color secundario
    accent: "#f093fb",       // Color de acento
    text: "#333",           // Color del texto
    background: "#f5f7fa"   // Color de fondo
}
```

## 📱 Funcionalidades Interactivas

### RSVP (Confirmación de Asistencia)
- Modal elegante para confirmar asistencia
- Formulario completo con validación
- Datos del invitado y acompañantes
- Restricciones alimentarias
- Mensaje personalizado

### Copia al Portapapeles
- Información bancaria
- Código del álbum de fotos
- Notificaciones visuales

### Enlaces a Mapas
- Ubicaciones de ceremonia y celebración
- Enlaces directos a Google Maps

### Efectos Visuales
- Animaciones de scroll
- Efectos parallax
- Transiciones suaves
- Hover effects

## 🎯 Estructura de Archivos

```
├── index.html          # Estructura principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidades interactivas
├── config.js           # Configuración personalizable
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidades interactivas
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías elegantes

## 📋 Lista de Tareas para Personalizar

- [ ] Cambiar nombres de los novios
- [ ] Actualizar fecha de la boda
- [ ] Modificar información de ceremonia
- [ ] Actualizar información de celebración
- [ ] Personalizar dress code
- [ ] Añadir alojamientos
- [ ] Configurar itinerario
- [ ] Actualizar información de regalo
- [ ] Configurar álbum de fotos
- [ ] Personalizar colores
- [ ] Probar en diferentes dispositivos

## 🎨 Ideas de Personalización

### Temas de Color
- **Romántico**: Rosas y dorados
- **Elegante**: Negro y blanco
- **Naturaleza**: Verdes y marrones
- **Oceánico**: Azules y blancos
- **Vintage**: Sepias y dorados

### Tipografías
- Cambia las fuentes en `styles.css`
- Usa Google Fonts para más opciones
- Mantén la legibilidad en mente

### Imágenes
- Añade fotos de los novios
- Incluye imágenes de los lugares
- Usa fotos de fondo personalizadas

## 🔧 Solución de Problemas

### La página no se ve bien
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de tener conexión a internet (para las fuentes)
- Prueba en diferentes navegadores

### Los cambios no se aplican
- Limpia la caché del navegador (Ctrl+F5)
- Verifica la sintaxis en `config.js`
- Revisa la consola del navegador para errores

### Problemas de responsive
- Prueba en diferentes tamaños de pantalla
- Usa las herramientas de desarrollador del navegador
- Verifica que las media queries estén funcionando

## 📞 Soporte

Si necesitas ayuda o tienes preguntas:
1. Revisa este README
2. Verifica la consola del navegador para errores
3. Asegúrate de que todos los archivos estén presentes

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT. Puedes usarlo libremente para tu boda o cualquier otro evento.

## 💝 Créditos

- Diseño inspirado en [specially.love](https://specially.love/demo-aquarelle-emerald)
- Iconos por [Font Awesome](https://fontawesome.com/)
- Fuentes por [Google Fonts](https://fonts.google.com/)

---

¡Felicitaciones por tu boda! 💕 Que sea un día lleno de amor y felicidad.
