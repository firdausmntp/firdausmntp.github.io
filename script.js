// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggle) {
        console.error('Theme toggle button not found in the document');
        return;
    }

    // Initialize theme
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');

    // Set initial theme
    body.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        console.log('Theme switched to:', newTheme);
    });
});

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    if (!icon) {
        // If icon doesn't exist, create it
        const newIcon = document.createElement('i');
        newIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeToggle.appendChild(newIcon);
    } else {
        // Update existing icon
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Hide/show navigation on scroll with subtle effect
    let lastScrollTop = 0;
    const navigation = document.querySelector('.navigation');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide nav with a smooth transition
            navigation.style.transform = 'translateY(-100%)';
            navigation.style.boxShadow = 'none';
        } else {
            // Scrolling up - show nav
            navigation.style.transform = 'translateY(0)';
            navigation.style.boxShadow = scrollTop > 10 ? 'var(--shadow)' : 'none';
        }
        lastScrollTop = scrollTop;
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    // Typing animation for title
    const titles = ["Web Developer", "Frontend Developer", "UI/UX Enthusiast"];
    const titleElement = document.querySelector('.title-animation');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeTitle() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            // Deleting text
            titleElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Typing text
            titleElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        // If finished typing
        if (!isDeleting && charIndex === currentTitle.length) {
            // Pause at the end
            isDeleting = true;
            typingSpeed = 1500;
        }

        // If finished deleting
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 300;
        }

        setTimeout(typeTitle, typingSpeed);
    }

    // Start the typing animation
    setTimeout(typeTitle, 1000);
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});

// Enhanced animations and counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const current = parseInt(counter.textContent);
        const increment = target / 100;

        if (current < target) {
            counter.textContent = Math.ceil(current + increment);
            setTimeout(() => animateCounters(), 20);
        } else {
            counter.textContent = target;
        }
    });
}

// Remove particle effect - it can be distracting and performance-intensive

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), #8b5cf6);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// Enhanced preloader with progress
function enhancedPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading Portfolio...</div>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    document.body.appendChild(preloader);

    // Simulate loading progress
    const progressBar = preloader.querySelector('.progress-bar');
    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;

        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.remove();
                    // Call smooth reveal for elements instead of initAnimations
                    document.querySelectorAll('.section').forEach((section, index) => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            section.style.opacity = '1';
                            section.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }, 300);
            }, 500);
        }
    }, 100);
}

// Add loading progress styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    .loading-progress {
        width: 200px;
        height: 4px;
        background: rgba(37, 99, 235, 0.2);
        border-radius: 2px;
        margin-top: 1rem;
        overflow: hidden;
    }
    
    .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-color), #8b5cf6);
        border-radius: 2px;
        width: 0;
        transition: width 0.3s ease;
    }
    
    .loading-text {
        margin-top: 1rem;
        color: var(--text-color);
        font-weight: 500;
    }
`;
document.head.appendChild(loadingStyle);

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    enhancedPreloader();
    createScrollProgress();

    // Make sure theme is properly set
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
    body.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);
});

// Parallax effect for header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Text reveal animation
function revealText(element) {
    const text = element.textContent;
    element.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `opacity 0.1s ease ${index * 0.02}s, transform 0.1s ease ${index * 0.02}s`;
        element.appendChild(span);

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 500 + index * 20);
    });
}

// Enhanced 3D tilt effect
function init3DTilt() {
    document.querySelectorAll('.section, .project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Color theme switching with smooth transition
function initAdvancedTheme() {
    const themeColors = {
        light: {
            primary: '#2563eb',
            secondary: '#64748b',
            text: '#1e293b',
            bg: '#ffffff',
            card: '#f8fafc'
        },
        dark: {
            primary: '#3b82f6',
            secondary: '#94a3b8',
            text: '#f1f5f9',
            bg: '#0f172a',
            card: '#1e293b'
        },
        purple: {
            primary: '#8b5cf6',
            secondary: '#a78bfa',
            text: '#1e1b4b',
            bg: '#faf5ff',
            card: '#f3e8ff'
        },
        green: {
            primary: '#10b981',
            secondary: '#6b7280',
            text: '#064e3b',
            bg: '#f0fdf4',
            card: '#dcfce7'
        }
    };

    // Create theme selector
    const themeSelector = document.createElement('div');
    themeSelector.className = 'theme-selector';
    themeSelector.innerHTML = `
        <div class="theme-options">
            <div class="theme-option" data-theme="light" style="background: #2563eb"></div>
            <div class="theme-option" data-theme="dark" style="background: #0f172a"></div>
            <div class="theme-option" data-theme="purple" style="background: #8b5cf6"></div>
            <div class="theme-option" data-theme="green" style="background: #10b981"></div>
        </div>
    `;

    document.body.appendChild(themeSelector);

    // Add styles for theme selector
    const selectorStyle = document.createElement('style');
    selectorStyle.textContent = `
        .theme-selector {
            position: fixed;
            bottom: 2rem;
            left: 2rem;
            z-index: 1000;
        }
        
        .theme-options {
            display: flex;
            gap: 0.5rem;
        }
        
        .theme-option {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        
        .theme-option:hover {
            transform: scale(1.2);
            border-color: rgba(255, 255, 255, 0.5);
        }
        
        .theme-option.active {
            border-color: white;
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
        }
    `;
    document.head.appendChild(selectorStyle);

    // Theme switching functionality
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);

            // Update active state
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
}

// Initialize all advanced features
document.addEventListener('DOMContentLoaded', () => {
    // Remove init3DTilt to prevent unwanted transforms
    // Remove initAdvancedTheme to prevent conflicts with theme toggle
});

// Add typing effect to name (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Scroll to top button functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });

        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Add scroll-triggered animations for sections
document.addEventListener('DOMContentLoaded', function () {
    // Create IntersectionObserver to detect when sections come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation
                entry.target.classList.add('section-visible');
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        // Add section-hidden class initially
        section.classList.add('section-hidden');
        // Observe the section
        observer.observe(section);
    });
});

// CV Download button click tracking
document.addEventListener('DOMContentLoaded', function () {
    const cvDownloadBtn = document.querySelector('.cv-download');

    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function () {
            // You could add analytics tracking here in the future
            console.log('CV Downloaded');

            // Add a temporary success class for animation
            cvDownloadBtn.classList.add('download-success');

            // Remove the class after animation completes
            setTimeout(() => {
                cvDownloadBtn.classList.remove('download-success');
            }, 2000);
        });
    }
});
