// Modern Portfolio JavaScript with Animations
// No jQuery - Pure vanilla JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
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
    
    // Typing animation for hero title - DISABLED
    // function typeWriter() {
    //     const titleLines = document.querySelectorAll('.title-line');
    //     titleLines.forEach((line, index) => {
    //         const text = line.textContent;
    //         line.textContent = '';
    //         line.style.opacity = '1';
    //         
    //         setTimeout(() => {
    //             let i = 0;
    //             const timer = setInterval(() => {
    //                 if (i < text.length) {
    //                     line.textContent += text.charAt(i);
    //                     i++;
    //                 } else {
    //                     clearInterval(timer);
    //                 }
    //             }, 100);
    //         }, index * 1000);
    //     });
    // }
    
    // Start typing animation after page load - DISABLED
    // setTimeout(typeWriter, 1000);
    
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
                showNotification('Помилка відправки форми', 'error');
                return;
            }
            
            // Check 2: Form filled too quickly (less than 3 seconds)
            if (formFillTime < 3000) {
                console.log('Bot detected: form filled too quickly');
                showNotification('Будь ласка, заповніть форму повільніше', 'error');
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
            showNotification('Невірний формат email адреси', 'error');
            return;
        }
        
        // Name validation (no numbers or special chars)
        const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/;
        if (!nameRegex.test(name)) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification('Ім\'я може містити тільки літери', 'error');
            return;
        }
        
        // Message length validation
        if (message.length < 10) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification('Повідомлення занадто коротке (мінімум 10 символів)', 'error');
            return;
        }
        
        if (message.length > 1000) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification('Повідомлення занадто довге (максимум 1000 символів)', 'error');
            return;
        }
        
        // Frontend spam detection
        const spamKeywords = ['viagra', 'casino', 'bitcoin', 'crypto', 'loan', 'insurance', 'free money', 'winner', 'congratulations'];
        const messageWords = message.toLowerCase().split(' ');
        const hasSpam = spamKeywords.some(keyword => messageWords.includes(keyword));
        
        if (hasSpam) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification('Повідомлення містить заборонений контент', 'error');
            return;
        }
        
        // Rate limiting using localStorage
        const lastSubmission = localStorage.getItem('lastContactSubmission');
        const currentTime = Date.now();
        
        if (lastSubmission && (currentTime - parseInt(lastSubmission)) < 60000) { // 1 minute
            const waitTime = Math.ceil((60000 - (currentTime - parseInt(lastSubmission))) / 1000);
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showNotification(`Зачекайте ${waitTime} секунд перед наступною відправкою`, 'error');
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
                showNotification('Дякуємо! Ваше повідомлення збережено. Ми зв\'яжемося з вами найближчим часом.', 'success');
                
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
                showNotification('Помилка збереження. Спробуйте ще раз.', 'error');
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