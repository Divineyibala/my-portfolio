  // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Animate on scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1
        });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
        
        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                }
            });
        }, {
            threshold: 0.5
        });
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });




        const services = [
  { icon: 'fa-code', title: 'Web Development', desc: 'Modern web applications' },
  { icon: 'fa-mobile-alt', title: 'Responsive Design', desc: 'Mobile-first approach' },
  { icon: 'fa-paint-brush', title: 'UI/UX Design', desc: 'Beautiful interfaces' },
];

const container = document.getElementById('services');

services.forEach(service => {
  const card = document.createElement('div');
  card.className = 'service-card';

  card.innerHTML = `
    <i class="fas ${service.icon} service-icon"></i>
    <h4 class="service-title">${service.title}</h4>
    <p class="service-desc">${service.desc}</p>
  `;

  container.appendChild(card);
});
