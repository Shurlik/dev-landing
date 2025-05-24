// Modern Portfolio JavaScript with Animations
// No jQuery - Pure vanilla JavaScript

// Internationalization system
const translations = {
    uk: {
        // Navigation
        'nav.services': 'Послуги',
        'nav.about': 'Про нас',
        'nav.contact': 'Контакти',
        
        // Hero section
        'hero.title.line1': 'Сучасна веб',
        'hero.title.line2': 'розробка',
        'hero.description': 'Створюємо сучасні, швидкі та красиві веб-сайти використовуючи найновіші технології. Від простих лендінгів до повноцінних веб-додатків.',
        'hero.button.start': 'Почати проект',
        'hero.scroll': 'Прокрутіть вниз',
        
        // Services section
        'services.title': 'Технології та послуги',
        'services.description': 'Спеціалізуємося на створенні сайтів з використанням як класичної верстки, так і сучасних технологій',
        'services.html.title': 'HTML/CSS/JS',
        'services.html.description': 'Чистий, семантичний код з сучасними стандартами веб-розробки та адаптивним дизайном',
        'services.react.title': 'React.js',
        'services.react.description': 'Інтерактивні користувацькі інтерфейси з компонентною архітектурою та state management',
        'services.nextjs.title': 'Next.js',
        'services.nextjs.description': 'Full-stack React фреймворк з SSR, SSG та оптимізацією для кращої продуктивності',
        'services.nodejs.title': 'Node.js',
        'services.nodejs.description': 'Серверна розробка, API, бази даних та backend рішення для повноцінних додатків',
        'services.webflow.title': 'Webflow',
        'services.webflow.description': 'Візуальна розробка сайтів з можливістю швидкого прототипування та запуску',
        'services.wix.title': 'Wix Development',
        'services.wix.description': 'Кастомізація Wix сайтів, додавання функціоналу та інтеграція з третіми сервісами',
        
        // About section
        'about.title': 'Про нас',
        'about.description': 'Ми - команда розробників, які спеціалізуються на створенні сучасних веб-рішень. Наша мета - допомогти Вам в цифровому світі через якісні технічні рішення.',
        'about.stat1.number': '365',
        'about.stat1.label': 'Днів на рік працюємо',
        'about.stat2.number': '24h',
        'about.stat2.label': 'Максимальний час відповіді',
        'about.stat3.number': '100%',
        'about.stat3.label': 'Задоволення від роботи',
        
        // Contact section
        'contact.title': 'Зв\'яжіться з нами',
        'contact.description': 'Готові почати ваш проект? Зв\'яжіться з нами для обговорення деталей',
        'contact.method.title': 'Зв\'язок з нами',
        'contact.method.description': 'Використовуйте форму для всіх запитів.<br>Відповідаємо протягом 24 годин.',
        'contact.hours.title': 'Час роботи',
        'contact.hours.description': 'Пн-Пт: 10:00-18:00<br>Сб-Нд: За домовленістю',
        'contact.location.title': 'Розташування',
        'contact.location.description': 'Україна',
        
        // Contact form
        'form.name': 'Ім\'я',
        'form.email': 'Email',
        'form.service': 'Послуга',
        'form.service.placeholder': 'Оберіть послугу',
        'form.service.landing': '🎯 Лендінг (одна сторінка)',
        'form.service.corporate': '🏢 Корпоративний сайт',
        'form.service.ecommerce': '🛒 Інтернет-магазин',
        'form.service.webapp': '⚡ Веб-додаток',
        'form.service.webflow': '🎨 Webflow сайт',
        'form.service.wix': '🔧 Wix розробка',
        'form.service.support': '🛠️ Підтримка сайту',
        'form.service.consultation': '💬 Консультація',
        'form.service.other': '❓ Інше',
        'form.message': 'Повідомлення',
        'form.message.placeholder': 'Розкажіть детальніше про ваш проект:\n• Які у вас цілі?\n• Який бюджет ви плануєте?\n• Які терміни реалізації?\n• Чи є приклади сайтів, які вам подобаються?',
        'form.submit': 'Надіслати повідомлення',
        
        // Footer
        'footer.rights': '© 2025 Alex Dev Team. Всі права захищені.',
        
        // Notifications
        'notification.success': 'Дякуємо! Ваше повідомлення збережено. Ми зв\'яжемося з вами найближчим часом.',
        'notification.error.bot': 'Помилка відправки форми',
        'notification.error.fast': 'Будь ласка, заповніть форму повільніше',
        'notification.error.email': 'Невірний формат email адреси',
        'notification.error.name': 'Ім\'я може містити тільки літери',
        'notification.error.message.short': 'Повідомлення занадто коротке (мінімум 10 символів)',
        'notification.error.message.long': 'Повідомлення занадто довге (максимум 1000 символів)',
        'notification.error.spam': 'Повідомлення містить заборонений контент',
        'notification.error.rate': 'Зачекайте {time} секунд перед наступною відправкою',
        'notification.error.save': 'Помилка збереження. Спробуйте ще раз.'
    },
    en: {
        // Navigation
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero section
        'hero.title.line1': 'Modern Web',
        'hero.title.line2': 'Development',
        'hero.description': 'We create modern, fast and beautiful websites using the latest technologies. From simple landing pages to full-featured web applications.',
        'hero.button.start': 'Start Project',
        'hero.scroll': 'Scroll Down',
        
        // Services section
        'services.title': 'Technologies & Services',
        'services.description': 'We specialize in creating websites using both classic layout and modern technologies',
        'services.html.title': 'HTML/CSS/JS',
        'services.html.description': 'Clean, semantic code with modern web development standards and responsive design',
        'services.react.title': 'React.js',
        'services.react.description': 'Interactive user interfaces with component architecture and state management',
        'services.nextjs.title': 'Next.js',
        'services.nextjs.description': 'Full-stack React framework with SSR, SSG and optimization for better performance',
        'services.nodejs.title': 'Node.js',
        'services.nodejs.description': 'Server development, APIs, databases and backend solutions for full applications',
        'services.webflow.title': 'Webflow',
        'services.webflow.description': 'Visual website development with rapid prototyping and launch capabilities',
        'services.wix.title': 'Wix Development',
        'services.wix.description': 'Wix site customization, functionality addition and third-party service integration',
        
        // About section
        'about.title': 'About Us',
        'about.description': 'We are a team of developers who specialize in creating modern web solutions. Our goal is to help you in the digital world through quality technical solutions.',
        'about.stat1.number': '365',
        'about.stat1.label': 'Days a year we work',
        'about.stat2.number': '24h',
        'about.stat2.label': 'Maximum response time',
        'about.stat3.number': '100%',
        'about.stat3.label': 'Work satisfaction',
        
        // Contact section
        'contact.title': 'Get In Touch',
        'contact.description': 'Ready to start your project? Contact us to discuss the details',
        'contact.method.title': 'Contact Us',
        'contact.method.description': 'Use the form for all inquiries.<br>We respond within 24 hours.',
        'contact.hours.title': 'Working Hours',
        'contact.hours.description': 'Mon-Fri: 10:00-18:00<br>Sat-Sun: By appointment',
        'contact.location.title': 'Location',
        'contact.location.description': 'Ukraine',
        
        // Contact form
        'form.name': 'Name',
        'form.email': 'Email',
        'form.service': 'Service',
        'form.service.placeholder': 'Choose a service',
        'form.service.landing': '🎯 Landing Page',
        'form.service.corporate': '🏢 Corporate Website',
        'form.service.ecommerce': '🛒 E-commerce',
        'form.service.webapp': '⚡ Web Application',
        'form.service.webflow': '🎨 Webflow Site',
        'form.service.wix': '🔧 Wix Development',
        'form.service.support': '🛠️ Website Support',
        'form.service.consultation': '💬 Consultation',
        'form.service.other': '❓ Other',
        'form.message': 'Message',
        'form.message.placeholder': 'Tell us more about your project:\n• What are your goals?\n• What budget are you planning?\n• What timeline do you have?\n• Are there examples of sites you like?',
        'form.submit': 'Send Message',
        
        // Footer
        'footer.rights': '© 2025 Alex Dev Team. All rights reserved.',
        
        // Notifications
        'notification.success': 'Thank you! Your message has been saved. We will contact you soon.',
        'notification.error.bot': 'Form submission error',
        'notification.error.fast': 'Please fill out the form more slowly',
        'notification.error.email': 'Invalid email format',
        'notification.error.name': 'Name can only contain letters',
        'notification.error.message.short': 'Message too short (minimum 10 characters)',
        'notification.error.message.long': 'Message too long (maximum 1000 characters)',
        'notification.error.spam': 'Message contains prohibited content',
        'notification.error.rate': 'Please wait {time} seconds before next submission',
        'notification.error.save': 'Save error. Please try again.'
    }
};

// Language detection and management
class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }
    
    detectLanguage() {
        // Check if language is saved in localStorage
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        
        // Auto-detect from browser locale
        const browserLang = navigator.language || navigator.languages[0] || 'en';
        const langCode = browserLang.toLowerCase();
        
        // Ukrainian for ru, uk, ua locales
        if (langCode.includes('ru') || langCode.includes('uk') || langCode.includes('ua')) {
            return 'uk';
        }
        
        // English for everything else
        return 'en';
    }
    
    init() {
        this.createLanguageToggle();
        this.applyTranslations();
        console.log(`🌍 Language detected: ${this.currentLang}`);
    }
    
    createLanguageToggle() {
        // Add language toggle to navigation
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            const langToggle = document.createElement('li');
            langToggle.className = 'nav-item lang-toggle';
            langToggle.innerHTML = `
                <button class="lang-btn" id="lang-toggle">
                    <span class="lang-flag">${this.currentLang === 'uk' ? '🇺🇦' : '🇬🇧'}</span>
                    <span class="lang-code">${this.currentLang.toUpperCase()}</span>
                </button>
            `;
            navMenu.appendChild(langToggle);
            
            // Add click handler
            const toggleBtn = langToggle.querySelector('#lang-toggle');
            toggleBtn.addEventListener('click', () => this.toggleLanguage());
        }
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'uk' ? 'en' : 'uk';
        localStorage.setItem('preferred-language', this.currentLang);
        this.applyTranslations();
        this.updateToggleButton();
        
        console.log(`🌍 Language switched to: ${this.currentLang}`);
    }
    
    updateToggleButton() {
        const flagSpan = document.querySelector('.lang-flag');
        const codeSpan = document.querySelector('.lang-code');
        
        if (flagSpan && codeSpan) {
            flagSpan.textContent = this.currentLang === 'uk' ? '🇺🇦' : '🇬🇧';
            codeSpan.textContent = this.currentLang.toUpperCase();
        }
    }
    
    translate(key, replacements = {}) {
        let text = translations[this.currentLang][key] || key;
        
        // Replace placeholders like {time}
        Object.keys(replacements).forEach(placeholder => {
            text = text.replace(new RegExp(`{${placeholder}}`, 'g'), replacements[placeholder]);
        });
        
        return text;
    }
    
    applyTranslations() {
        // Update page title
        document.title = `Alex Dev Team - ${this.translate('hero.title.line1')} ${this.translate('hero.title.line2')}`;
        
        // Navigation
        this.updateElement('[href="#services"] .nav-link', 'nav.services');
        this.updateElement('[href="#about"] .nav-link', 'nav.about');
        this.updateElement('[href="#contact"] .nav-link', 'nav.contact');
        
        // Hero section
        this.updateElement('.title-line:first-child', 'hero.title.line1');
        this.updateElement('.title-line:last-child', 'hero.title.line2');
        this.updateElement('.hero-description', 'hero.description');
        this.updateElement('.btn-primary', 'hero.button.start');
        this.updateElement('.scroll-text', 'hero.scroll');
        
        // Services section
        this.updateElement('#services .section-title', 'services.title');
        this.updateElement('#services .section-description', 'services.description');
        
        // Service cards
        const serviceCards = document.querySelectorAll('.tech-card');
        const serviceKeys = ['html', 'react', 'nextjs', 'nodejs', 'webflow', 'wix'];
        serviceCards.forEach((card, index) => {
            if (serviceKeys[index]) {
                const key = serviceKeys[index];
                const title = card.querySelector('h3');
                const description = card.querySelector('p');
                if (title) title.textContent = this.translate(`services.${key}.title`);
                if (description) description.textContent = this.translate(`services.${key}.description`);
            }
        });
        
        // About section
        this.updateElement('#about .section-title', 'about.title');
        this.updateElement('#about .section-description', 'about.description');
        
        // Stats
        const statLabels = document.querySelectorAll('.stat-label');
        statLabels.forEach((label, index) => {
            const keys = ['about.stat1.label', 'about.stat2.label', 'about.stat3.label'];
            if (keys[index]) {
                label.textContent = this.translate(keys[index]);
            }
        });
        
        // Contact section
        this.updateElement('#contact .section-title', 'contact.title');
        this.updateElement('#contact .section-description', 'contact.description');
        
        // Contact items
        const contactItems = document.querySelectorAll('.contact-item');
        if (contactItems[0]) {
            const h4 = contactItems[0].querySelector('h4');
            const p = contactItems[0].querySelector('p');
            if (h4) h4.textContent = this.translate('contact.method.title');
            if (p) p.innerHTML = this.translate('contact.method.description');
        }
        if (contactItems[1]) {
            const h4 = contactItems[1].querySelector('h4');
            const p = contactItems[1].querySelector('p');
            if (h4) h4.textContent = this.translate('contact.hours.title');
            if (p) p.innerHTML = this.translate('contact.hours.description');
        }
        if (contactItems[2]) {
            const h4 = contactItems[2].querySelector('h4');
            const p = contactItems[2].querySelector('p');
            if (h4) h4.textContent = this.translate('contact.location.title');
            if (p) p.textContent = this.translate('contact.location.description');
        }
        
        // Contact form
        this.updateElement('label[for="name"]', 'form.name');
        this.updateElement('label[for="email"]', 'form.email');
        this.updateElement('label[for="service"]', 'form.service');
        this.updateElement('label[for="message"]', 'form.message');
        this.updateElement('.submit-btn .btn-text', 'form.submit');
        
        // Form options
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            const options = serviceSelect.querySelectorAll('option');
            options[0].textContent = this.translate('form.service.placeholder');
            options[1].textContent = this.translate('form.service.landing');
            options[2].textContent = this.translate('form.service.corporate');
            options[3].textContent = this.translate('form.service.ecommerce');
            options[4].textContent = this.translate('form.service.webapp');
            options[5].textContent = this.translate('form.service.webflow');
            options[6].textContent = this.translate('form.service.wix');
            options[7].textContent = this.translate('form.service.support');
            options[8].textContent = this.translate('form.service.consultation');
            options[9].textContent = this.translate('form.service.other');
        }
        
        // Message placeholder
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            messageTextarea.placeholder = this.translate('form.message.placeholder');
        }
        
        // Footer
        this.updateElement('.footer-bottom p', 'footer.rights');
        
        // Footer links
        const footerLinks = document.querySelectorAll('.footer-links a');
        if (footerLinks[0]) footerLinks[0].textContent = this.translate('nav.services');
        if (footerLinks[1]) footerLinks[1].textContent = this.translate('nav.about');
        if (footerLinks[2]) footerLinks[2].textContent = this.translate('nav.contact');
    }
    
    updateElement(selector, translationKey) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = this.translate(translationKey);
        }
    }
}

// Initialize language manager
let langManager;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    langManager = new LanguageManager();
    
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animation elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
    
    // Animated counter for stats
    function animateCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
            }, 30);
        });
    }
    
    // Observe stats section for counter animation
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // Enhanced parallax effect for tech icons with sticky behavior
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.sticky-hero');
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        const stickyContent = document.querySelector('.hero-sticky-content');
        
        // Debug sticky behavior
        if (scrolled % 100 === 0) { // Log every 100px of scroll
            console.log(`Scroll: ${scrolled}, Hero height: ${heroHeight}, Sticky content:`, stickyContent);
            if (stickyContent) {
                const rect = stickyContent.getBoundingClientRect();
                console.log(`Sticky content rect:`, rect);
                console.log(`Sticky content computed style:`, window.getComputedStyle(stickyContent).position);
            }
        }
        
        // Sticky effect progress (0 to 1)
        const stickyProgress = Math.min(scrolled / (heroHeight - window.innerHeight), 1);
        
        // Enhanced tech icons animation
        const techIcons = document.querySelectorAll('.tech-icon-float');
        techIcons.forEach((icon, index) => {
            const speed = parseFloat(icon.dataset.speed) || 0.5;
            const baseMovement = scrolled * speed;
            const stickyOffset = stickyProgress * 100; // Additional movement during sticky
            
            // Different movement patterns for left and right icons
            const isLeft = icon.closest('.left-icons');
            const direction = isLeft ? -1 : 1;
            
            // More complex movement with rotation and scaling
            const rotationFactor = stickyProgress * 360 * direction;
            const scaleFactor = 1 + (stickyProgress * 0.3);
            const opacityFactor = 0.08 + (stickyProgress * 0.07);
            
            const yMovement = baseMovement + (stickyOffset * direction);
            const xMovement = stickyOffset * direction * 0.5;
            
            icon.style.transform = `translate(${xMovement}px, ${yMovement}px) rotate(${rotationFactor}deg) scale(${scaleFactor})`;
            icon.style.opacity = Math.min(opacityFactor, 0.2);
        });
        
        // Hero content fade effect during sticky
        if (stickyContent) {
            const fadeProgress = Math.max(0, Math.min(1, (stickyProgress - 0.5) * 2));
            stickyContent.style.opacity = 1 - fadeProgress * 0.3;
            stickyContent.style.transform = `scale(${1 - fadeProgress * 0.05})`;
            
            // Add visual indicator when sticky is active
            if (scrolled > 100 && scrolled < heroHeight - window.innerHeight) {
                stickyContent.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.3)';
            } else {
                stickyContent.style.boxShadow = 'none';
            }
        }
        
        // Old parallax code for other floating elements
        const parallaxElements = document.querySelectorAll('.floating-icon');
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
    
    // Enhanced random floating animation for tech icons
    function enhancedRandomFloat() {
        const techIcons = document.querySelectorAll('.tech-icon-float');
        techIcons.forEach(icon => {
            const randomX = (Math.random() - 0.5) * 30;
            const randomY = (Math.random() - 0.5) * 30;
            const randomRotate = (Math.random() - 0.5) * 20;
            const randomScale = 0.95 + Math.random() * 0.1;
            
            // Apply random movement as additional transform
            const currentTransform = icon.style.transform || '';
            const randomTransform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
            
            // Temporarily apply random movement
            icon.style.transition = 'transform 2s ease-out';
            icon.style.transform = currentTransform + ' ' + randomTransform;
            
            // Reset after animation
            setTimeout(() => {
                icon.style.transition = 'all 0.3s ease';
            }, 2000);
        });
    }
    
    // Start enhanced floating animation
    setInterval(enhancedRandomFloat, 4000);
    
    // Tech icons hover effect on scroll
    let lastScrollTime = 0;
    window.addEventListener('scroll', () => {
        const now = Date.now();
        if (now - lastScrollTime > 100) { // Throttle
            const techIcons = document.querySelectorAll('.tech-icon-float');
            techIcons.forEach((icon, index) => {
                // Add subtle hover effect based on scroll speed
                const scrollSpeed = Math.abs(window.pageYOffset - (window.lastScrollY || 0));
                window.lastScrollY = window.pageYOffset;
                
                if (scrollSpeed > 5) {
                    icon.style.filter = `drop-shadow(0 0 ${20 + scrollSpeed}px rgba(99, 102, 241, ${0.3 + scrollSpeed * 0.01}))`;
                } else {
                    icon.style.filter = 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))';
                }
            });
            lastScrollTime = now;
        }
    });
    
    // Form handling with bot protection
    const contactForm = document.getElementById('contact-form');
    let formStartTime = Date.now(); // Track when form was loaded
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            
            // Bot protection checks
            const honeypotField = this.querySelector('input[name="website"]');
            const formFillTime = Date.now() - formStartTime;
            
            // Check 1: Honeypot field should be empty
            if (honeypotField && honeypotField.value.trim() !== '') {
                console.log('Bot detected: honeypot field filled');
                showNotification(langManager.translate('notification.error.bot'), 'error');
                return;
            }
            
            // Check 2: Form filled too quickly (less than 3 seconds)
            if (formFillTime < 3000) {
                console.log('Bot detected: form filled too quickly');
                showNotification(langManager.translate('notification.error.fast'), 'error');
                return;
            }
            
            // Check 3: reCAPTCHA v3 (if enabled)
            if (typeof grecaptcha !== 'undefined') {
                grecaptcha.ready(function() {
                    grecaptcha.execute('YOUR_SITE_KEY', {action: 'contact_form'}).then(function(token) {
                        // Send form with token
                        submitFormWithProtection(contactForm, submitBtn, token);
                    });
                });
            } else {
                // Submit without reCAPTCHA
                submitFormWithProtection(contactForm, submitBtn, null);
            }
        });
    }
    
    function submitFormWithProtection(form, submitBtn, recaptchaToken) {
        // Start loading animation
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Get form data for frontend processing
        const formData = new FormData(form);
        const submissionData = {
            name: formData.get('name'),
            email: formData.get('email'),
            service: formData.get('service'),
            message: formData.get('message'),
            timestamp: new Date().toISOString(),
            recaptcha_token: recaptchaToken,
            ip: 'Hidden for privacy' // Can't get real IP on frontend
        };
        
        // Additional frontend validation
        const name = submissionData.name.trim();
        const email = submissionData.email.trim();
        const message = submissionData.message.trim();
        
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification(langManager.translate('notification.error.email'), 'error');
            return;
        }
        
        // Name validation (no numbers or special chars)
        const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/;
        if (!nameRegex.test(name)) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification(langManager.translate('notification.error.name'), 'error');
            return;
        }
        
        // Message length validation
        if (message.length < 10) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification(langManager.translate('notification.error.message.short'), 'error');
            return;
        }
        
        if (message.length > 1000) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification(langManager.translate('notification.error.message.long'), 'error');
            return;
        }
        
        // Frontend spam detection
        const spamKeywords = ['viagra', 'casino', 'bitcoin', 'crypto', 'loan', 'insurance', 'free money', 'winner', 'congratulations'];
        const messageWords = message.toLowerCase().split(' ');
        const hasSpam = spamKeywords.some(keyword => messageWords.includes(keyword));
        
        if (hasSpam) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification(langManager.translate('notification.error.spam'), 'error');
            return;
        }
        
        // Rate limiting using localStorage
        const lastSubmission = localStorage.getItem('lastContactSubmission');
        const currentTime = Date.now();
        
        if (lastSubmission && (currentTime - parseInt(lastSubmission)) < 60000) { // 1 minute
            const waitTime = Math.ceil((60000 - (currentTime - parseInt(lastSubmission))) / 1000);
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification(langManager.translate('notification.error.rate', {time: waitTime}), 'error');
            return;
        }
        
        // Simulate form submission processing
        setTimeout(() => {
            try {
                // Save submission to localStorage (for demo purposes)
                const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                submissions.push(submissionData);
                
                // Keep only last 10 submissions
                if (submissions.length > 10) {
                    submissions.splice(0, submissions.length - 10);
                }
                
                localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
                localStorage.setItem('lastContactSubmission', currentTime.toString());
                
                // Reset form
                form.reset();
                formStartTime = Date.now(); // Reset timer
                
                // Stop loading animation
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Show success message
                showNotification(langManager.translate('notification.success'), 'success');
                
                // Log for development (remove in production)
                console.log('📧 Form submitted successfully:', {
                    name: submissionData.name,
                    email: submissionData.email,
                    service: submissionData.service,
                    messageLength: submissionData.message.length,
                    timestamp: submissionData.timestamp
                });
                
            } catch (error) {
                console.error('Form submission error:', error);
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                showNotification(langManager.translate('notification.error.save'), 'error');
            }
            
        }, 1500 + Math.random() * 1000); // Random delay 1.5-2.5s to feel realistic
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Choose background color based on type
        let backgroundColor;
        switch(type) {
            case 'success':
                backgroundColor = '#10b981';
                break;
            case 'error':
                backgroundColor = '#ef4444';
                break;
            default:
                backgroundColor = '#6366f1';
        }
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: backgroundColor,
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Mouse cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    Object.assign(cursor.style, {
        width: '20px',
        height: '20px',
        border: '2px solid #6366f1',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: '9999',
        transition: 'transform 0.1s ease'
    });
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Cursor hover effects
    document.querySelectorAll('a, button, .tech-card, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(99, 102, 241, 0.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
    
    // Tech cards hover effect
    document.querySelectorAll('.tech-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Project cards tilt effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Scroll progress indicator
    const progressBar = document.createElement('div');
    Object.assign(progressBar.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '0%',
        height: '3px',
        background: 'linear-gradient(90deg, #6366f1, #06ffa5)',
        zIndex: '10000',
        transition: 'width 0.1s ease'
    });
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Performance optimization - debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedScrollHandler = debounce(() => {
        // Heavy scroll operations here
    }, 16); // ~60fps
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    console.log('🚀 DevStudio website loaded successfully!');
    
    // Development helper function to view stored submissions
    window.viewStoredSubmissions = function() {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        if (submissions.length === 0) {
            console.log('📭 No submissions stored yet');
            return;
        }
        
        console.group('📧 Stored Contact Submissions');
        submissions.forEach((submission, index) => {
            console.log(`\n--- Submission ${index + 1} ---`);
            console.log(`Name: ${submission.name}`);
            console.log(`Email: ${submission.email}`);
            console.log(`Service: ${submission.service}`);
            console.log(`Message: ${submission.message.substring(0, 100)}...`);
            console.log(`Date: ${new Date(submission.timestamp).toLocaleString()}`);
        });
        console.groupEnd();
        console.log('💡 Tip: Use clearStoredSubmissions() to clear all data');
    };
    
    // Helper function to clear stored submissions
    window.clearStoredSubmissions = function() {
        localStorage.removeItem('contactSubmissions');
        localStorage.removeItem('lastContactSubmission');
        console.log('🗑️ All stored submissions cleared');
    };
    
    // Show development tips
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🛠️ Development Mode');
        console.log('Use viewStoredSubmissions() to see form submissions');
        console.log('Use clearStoredSubmissions() to clear stored data');
    }
});

// Add mobile-specific styles
const addMobileStyles = () => {
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
};

window.addEventListener('resize', addMobileStyles);
addMobileStyles(); 