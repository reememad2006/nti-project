document.addEventListener('DOMContentLoaded', () => {

    const numItems = document.querySelectorAll('.num-item h3');
    let animated = false;

    const targets = [5000, 6, 2010, 500000]; 
    const prefixes = ['+', '', '', '+'];
    const suffixes = ['', '', '', 'K'];

    const animateNumbers = () => {
        numItems.forEach((item, index) => {
            const target = targets[index];
            const prefix = prefixes[index];
            const suffix = suffixes[index];
            
            let start = 0;
            const duration = 2000; 
            const steps = 50;
            const increment = target / steps;
            const stepTime = duration / steps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                
                    if (suffix === 'K') {
                        item.innerText = prefix + (target / 1000) + 'K';
                    } else if (target >= 1000) {
                        item.innerText = prefix + target.toLocaleString();
                    } else {
                        item.innerText = prefix + target;
                    }
                    clearInterval(timer);
                } else {
                    
                    let current = Math.floor(start);
                    if (suffix === 'K') {
                        item.innerText = prefix + Math.floor(current / 1000) + 'K';
                    } else if (current >= 1000) {
                        item.innerText = prefix + current.toLocaleString();
                    } else {
                        item.innerText = prefix + current;
                    }
                }
            }, stepTime);
        });
    };

    const numbersBox = document.querySelector('.numbers-box');
    
    const checkScroll = () => {
        if (!numbersBox || animated) return;
        const boxTop = numbersBox.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight) {
            animateNumbers();
            animated = true;
        }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 

    const topBtn = document.createElement('button');
    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    topBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        background-color: #0a192f;
        color: #64ffda;
        border: 2px solid #64ffda;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 9999;
        font-size: 18px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
        });
        });

const revealElements = document.querySelectorAll('.box-card, .timeline-box, .about-info, .about-img');

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.6s ease-out';
});

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85; 

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 

const navbar = document.querySelector('.navbar');
const navLinksContainer = document.querySelector('.nav-links');

const menuBtn = document.createElement('div');
menuBtn.className = 'mobile-menu-btn';
menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
menuBtn.style.cssText = `
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: #0a192f;
`;

if (navbar) {
    navbar.appendChild(menuBtn);
}


menuBtn.addEventListener('click', () => {
    if (navLinksContainer.style.display === 'flex' && navLinksContainer.style.flexDirection === 'column') {
        navLinksContainer.style.display = 'none';
    } else {
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '100%';
        navLinksContainer.style.left = '0';
        navLinksContainer.style.width = '100%';
        navLinksContainer.style.backgroundColor = '#ffffff';
        navLinksContainer.style.padding = '20px';
        navLinksContainer.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        navLinksContainer.style.zIndex = '1000';
    }
});


const handleResize = () => {
    if (window.innerWidth <= 768) {
        menuBtn.style.display = 'block';
        navLinksContainer.style.display = 'none'; 
    } else {
        menuBtn.style.display = 'none';
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'row';
        navLinksContainer.style.position = 'static';
        navLinksContainer.style.boxShadow = 'none';
    }
};

window.addEventListener('resize', handleResize);
handleResize();

