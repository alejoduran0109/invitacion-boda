// SUPER SENIOR UX REFINEMENT - WEDDING INVITATION

document.addEventListener('DOMContentLoaded', function () {
    initEnvelope();
    initCountdown();
    initScrollReveal();
    initMobileViewportHeight();
    initRSVPModal();
    initParallax();
});

// 0. Mobile Viewport Height Fix
function initMobileViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}

// 1. Countdown Logic
function initCountdown() {
    // Fecha: 6 de Junio de 2026, 17:30h
    const weddingDate = new Date('2026-06-06T17:30:00').getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            const container = document.getElementById('countdown');
            if (container) container.innerHTML = "<h3>¡ES HOY!</h3>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    };

    setInterval(updateTimer, 1000);
    updateTimer();
}

// 2. Envelope Interaction (Clean Flow & Audio Trigger)
function initEnvelope() {
    const envelope = document.getElementById('envelope');
    const screen = document.getElementById('envelope-screen');
    const main = document.getElementById('main-invitation');
    const bgMusic = document.getElementById('bg-music');
    const welcomeTag = document.getElementById('welcome-tag');

    if (!envelope) return;

    // Added a slight float-in animation when the envelope screen initially loads
    envelope.style.opacity = '0';
    envelope.style.transform = 'translateY(30px)';
    setTimeout(() => {
        envelope.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
        envelope.style.opacity = '1';
        envelope.style.transform = 'translateY(0)';

        // Reset transition for hover effects after entrance
        setTimeout(() => {
            envelope.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        }, 1000);
    }, 100);

    envelope.addEventListener('click', function () {
        if (this.classList.contains('open')) return; // Prevent double clicks

        // Animation sequence
        envelope.classList.add('open');

        // Fade out the floating welcome tag gracefully as the flap opens
        if (welcomeTag) {
            welcomeTag.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            welcomeTag.style.opacity = '0';
            welcomeTag.style.transform = 'translateY(-20px)';
        }

        // Attempt to play audio (User interaction allows autoplay block bypass)
        if (bgMusic) {
            bgMusic.volume = 0.5; // Starts at a comfortable volume
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
        }

        // Step 1: Open flap & reveal card first (Allow CSS time to play out)
        setTimeout(() => {
            screen.style.transition = 'opacity 1.2s ease, visibility 1.2s';
            screen.style.opacity = '0';
            screen.style.visibility = 'hidden';

            // Step 2: Show main content behind it
            main.style.display = 'block';

            // Reflow then gentle fade and slide up
            setTimeout(() => {
                main.style.transition = 'opacity 1.5s ease-out, transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
                main.style.opacity = '1';
                main.style.transform = 'translateY(0)';
                window.scrollTo(0, 0);
            }, 100);
        }, 1600); // Increased wait time so the user can actually read the beautiful guest card before it fades
    });
}

// 3. Scroll Reveal Animations (Premium Touch)
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    let delayCounter = 0;
    let delayTimer = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Staggered delay logic
                const currentDelay = delayCounter * 150;
                entry.target.style.transitionDelay = `${currentDelay}ms`;
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);

                delayCounter++;
                if (delayTimer) clearTimeout(delayTimer);
                delayTimer = setTimeout(() => { delayCounter = 0; }, 50); // Reset after batch
            }
        });
    }, observerOptions);

    // Apply to all major sections and cards, but explicitly EXCLUDE the hero from initial hiding
    const reveals = document.querySelectorAll('section:not(.hero), .card-container, .timeline-item, .gallery-item');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)'; // Slightly more travel
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

// 4. Copy to Clipboard
function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Código copiado');
    });
}

// 5. Minimal Toast Notification
function showToast(msg) {
    const toast = document.createElement('div');
    toast.innerText = msg;
    toast.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: var(--primary-color); color: white; padding: 12px 30px;
        font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;
        z-index: 3000; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// 6. RSVP Modal (Professional)
function initRSVPModal() {
    const modal = document.getElementById('rsvp-modal');
    const btn = document.querySelector('.rsvp-button');
    const span = document.querySelector('.close-modal');
    const form = document.getElementById('rsvp-form-real');
    const container = document.getElementById('rsvp-form-container');
    const successMsg = document.getElementById('rsvp-success');

    if (!btn || !modal) return;

    btn.onclick = function (e) {
        e.preventDefault();
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scroll

        // Reset state on open
        if (container && successMsg) {
            container.style.display = "block";
            successMsg.style.display = "none";
        }
    }

    span.onclick = function () {
        closeModal();
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    if (form) {
        form.onsubmit = function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const status = formData.get('status');
            const count = formData.get('count');
            const message = formData.get('message') || 'Sin mensaje';

            // Simular envío
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Enviando...";
            submitBtn.disabled = true;

            // Formatear mensaje para WhatsApp
            const text = `*Confirmación de Asistencia*%0A*Nombre:* ${name}%0A*Estado:* ${status === 'confirmado' ? '✅ Asistiré' : '❌ No podré asistir'}%0A*Personas:* ${count}%0A*Mensaje:* ${message}`;
            const whatsappUrl = `https://wa.me/573000000000?text=${text}`;

            setTimeout(() => {
                // Ocultar formulario y mostrar éxito
                document.getElementById('rsvp-form-container').style.display = 'none';
                document.getElementById('rsvp-success').style.display = 'block';

                // Redirigir a WhatsApp después de un breve delay si confirmó
                if (status === 'confirmado') {
                    setTimeout(() => {
                        window.open(whatsappUrl, '_blank');
                    }, 2000);
                }

                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }
    }
}

// 7. Parallax Effect
function initParallax() {
    const heroBg = document.querySelector('.hero-background');
    if (!heroBg) return;

    // We only apply this safely if not strictly mobile (performance)
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        if (scrollPosition <= window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    });
}
