const langBtn = document.getElementById('lang-btn');
let currentLang = 'es';

const translations = {
    es: {
        badge: "🟢 Disponible para proyectos",
        heroTitle: "Desarrollador Frontend & Especialista en Traducción",
        heroDesc: "Creo sitios web modernos, rápidos y adaptables, e integro soluciones lingüísticas precisas entre español e inglés.",
        btnContact: "Contactar",
        btnServices: "Ver Servicios",
        servicesTitle: "Servicios Especializados",
        s1Title: "Desarrollo Web Frontend",
        s1Desc: "Páginas de aterrizaje y sitios estáticos responsivos optimizados con HTML5, CSS3 y JavaScript puro.",
        s2Title: "Traducción & Corrección",
        s2Desc: "Traducción técnica y profesional de documentos, aplicaciones y CVs de Español a Inglés y viceversa.",
        footerTitle: "¿Tienes un proyecto en mente?",
        footerDesc: "Hablemos y hagámoslo realidad hoy mismo.",
        btnMail: "Enviar Mensaje",
        btnLangText: "🌐 Switch to English"
    },
    en: {
        badge: "🟢 Available for work",
        heroTitle: "Frontend Web Developer & Translation Specialist",
        heroDesc: "I build modern, fast, responsive websites and deliver precise English-Spanish language solutions.",
        btnContact: "Contact Me",
        btnServices: "View Services",
        servicesTitle: "Specialized Services",
        s1Title: "Frontend Web Development",
        s1Desc: "Responsive landing pages and static websites built with HTML5, CSS3, and Vanilla JavaScript.",
        s2Title: "Translation & Proofreading",
        s2Desc: "Professional English to Spanish translation, proofreading, and technical document adaptation.",
        footerTitle: "Have a project in mind?",
        footerDesc: "Let's talk and build it together right now.",
        btnMail: "Send Message",
        btnLangText: "🌐 Cambiar a Español"
    }
};

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    const t = translations[currentLang];

    document.getElementById('badge').textContent = t.badge;
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('btn-contact').textContent = t.btnContact;
    document.getElementById('btn-services').textContent = t.btnServices;
    document.getElementById('services-title').textContent = t.servicesTitle;
    document.getElementById('s1-title').textContent = t.s1Title;
    document.getElementById('s1-desc').textContent = t.s1Desc;
    document.getElementById('s2-title').textContent = t.s2Title;
    document.getElementById('s2-desc').textContent = t.s2Desc;
    document.getElementById('footer-title').textContent = t.footerTitle;
    document.getElementById('footer-desc').textContent = t.footerDesc;
    document.getElementById('btn-mail').textContent = t.btnMail;
    langBtn.textContent = t.btnLangText;
});