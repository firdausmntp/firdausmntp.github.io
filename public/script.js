function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('.theme-toggle, .theme-toggle-btn, #theme-toggle');

    if (themeToggles.length === 0) {
        console.error('Theme toggle button not found in the document');
        return;
    }

    // Initialize theme
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');

    // Set initial theme
    applyTheme(initialTheme);

    // Theme toggle click handler
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            console.log('Theme switched to:', newTheme);
        });
    });
});

function updateThemeIcon(theme) {
    const themeToggles = document.querySelectorAll('.theme-toggle, .theme-toggle-btn, #theme-toggle');
    
    themeToggles.forEach(toggle => {
        const icon = toggle.querySelector('i');
        if (!icon) {
            // If icon doesn't exist, create it
            const newIcon = document.createElement('i');
            newIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            toggle.appendChild(newIcon);
        } else {
            // Update existing icon
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    });
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
            navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active') ? 'true' : 'false');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
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
  const titles = ["Website Developer", "Flutter Developer", "Reverse Engineering Enthusiast"];
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

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createScrollProgress();

    // Make sure theme is properly set
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
    body.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);
});

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

// Preview Gallery Modal Functionality
let currentSlideIndex = 0;
let totalSlides = 0;

// Project preview configurations
const projectPreviews = {
    'kantin-jawara': {
        title: 'Kantin Jawara - Preview Gallery',
        images: [
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-1.png',
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-2.png',
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-3.png',
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-4.png',
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-5.png',
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-6.png',
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-7.png',
            'assets/projects/previews-kantin-jawara/preview-kantinjawara-8.png'
        ]
    }
    // Add more projects here as needed
};

function openPreviewModal(projectId) {
    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('modalTitle');
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselIndicators = document.getElementById('carouselIndicators');

    const project = projectPreviews[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    // Set modal title
    modalTitle.textContent = project.title;

    // Clear existing slides and indicators
    carouselTrack.innerHTML = '';
    carouselIndicators.innerHTML = '';

    // Create slides
    project.images.forEach((imageSrc, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${imageSrc}" alt="${project.title} preview ${index + 1}" loading="lazy">`;
        carouselTrack.appendChild(slide);

        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToSlide(index);
        carouselIndicators.appendChild(indicator);
    });

    // Set initial values
    currentSlideIndex = 0;
    totalSlides = project.images.length;
    updateCarouselPosition();

    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarouselPosition();
    updateIndicators();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarouselPosition();
    updateIndicators();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarouselPosition();
    updateIndicators();
}

function updateCarouselPosition() {
    const carouselTrack = document.getElementById('carouselTrack');
    const translateX = -currentSlideIndex * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlideIndex);
    });
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('previewModal');
    if (!modal.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closePreviewModal();
            break;
        case 'ArrowLeft':
            prevSlide();
            break;
        case 'ArrowRight':
            nextSlide();
            break;
    }
});

// Close modal when clicking outside
document.getElementById('previewModal').addEventListener('click', (e) => {
    if (e.target.id === 'previewModal') {
        closePreviewModal();
    }
});

// Touch/swipe support for mobile
let startX = 0;
let isDragging = false;

document.getElementById('previewModal').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

document.getElementById('previewModal').addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
});

document.getElementById('previewModal').addEventListener('touchend', (e) => {
    if (!isDragging) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
            nextSlide(); // Swipe left -> next slide
        } else {
            prevSlide(); // Swipe right -> previous slide
        }
    }

    isDragging = false;
});


// Project Filter Logic
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                const categories = (item.getAttribute('data-category') || '')
                    .split(',')
                    .map(category => category.trim())
                    .filter(Boolean);

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.classList.remove('hide');
                    item.style.opacity = '1';
                } else {
                    item.classList.add('hide');
                    item.style.opacity = '0';
                }
            });
        });
    });
});

// Project card click feedback (ripple + pressed state)
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
        card.addEventListener('pointerdown', (event) => {
            card.classList.add('is-pressed');

            const rect = card.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'project-click-ripple';
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;

            card.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
        });

        card.addEventListener('pointerup', () => {
            card.classList.remove('is-pressed');
        });

        card.addEventListener('pointerleave', () => {
            card.classList.remove('is-pressed');
        });
    });
});

// Figma-like cursor interaction for desktop pointers
// Standard responsive cursor behavior without custom cursor overlay
