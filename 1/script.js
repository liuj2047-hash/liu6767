document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                el.classList.add('active');
            } else {
                // If you want to re-reveal on scroll up, uncomment:
                // el.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 2. Navigation Background Change on Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.boxShadow = 'none';
        }
    });

    // 3. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. CTA Button Click Interaction (Mockup)
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href') === '#register') {
                e.preventDefault();
                alert('感謝您的關注！報名系統即將於 2026 年春季正式開放。');
            }
        });
    });

    // 5. Hero Parallax Effect (Subtle)
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
