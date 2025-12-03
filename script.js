document.addEventListener('DOMContentLoaded', () => {

    const products = [
        {"id": 1, "title": "Epoxy Insulators and Bushings", "image": "images/Epoxy Resin Cast Insulator.jpeg", "description": "We specialize in manufacturing epoxy insulators for various voltage levels used in power distribution systems. Our range also includes durable epoxy bushings designed for long-lasting, reliable performance.", "stock": "In Stock", "rating": "4.5"},
        {"id": 2, "title": "Insulators 22Kv", "image": "images/22kV Epoxy resin cast insulator.jpeg", "description": "Durable 22Kv insulators designed for demanding high-voltage environments. Size available in 3.3kV, 6.6kv, 11kV, 15kV, 22kV, 33kV, 36kV.", "stock": "In Stock", "rating": "4.8"},
        {"id": 3, "title": "ZS Bushing", "image": "images/ZS Bushing.jpeg", "description": "Used in transformers and switchgear to provide a safe, insulated passage for electrical conductors through grounded barriers.", "stock": "In Stock", "rating": "4.7"},
        {"id": 4, "title": "Epoxy Resin Cast Insulator 11kV", "image": "images/11kV Epoxy Resin Cast Insulator.jpeg", "description": "Top-tier 11KV insulator for critical power grid applications, offering superior durability. Sizes available up to 36kV.", "stock": "In Stock", "rating": "4.9"},
        {"id": 6, "title": "Epoxy Bushing 1.1KV", "image": "images/1.1kV Epoxy Bushing.jpeg", "description": "Reliable 1.1KV epoxy bushings, ideal for switchgear and transformer applications. Rated for 250 Amp to 5000 Amp.", "stock": "In Stock", "rating": "4.5"},
        {"id": 7, "title": "ZS2 Bushing High-Power", "image": "images/ZS Bushing.jpeg", "description": "A high-power variant of the ZS bushing for heavy-duty industrial use in high-voltage equipment.", "stock": "In Stock", "rating": "4.8"},
        {"id": 8, "title": "Epoxy Bushing 3.6KV", "image": "images/Epoxy Bushing Class  1.1kv and 3.6kV Rated Current 250AMP to 5000AMP.jpeg", "description": "3.6KV Epoxy Bushing with a rated current from 250 Amp to 5000 Amp.", "stock": "In Stock", "rating": "4.4"},
        {"id": 9, "title": "Epoxy Insulator 15kV", "image": "images/Epoxy Resin Cast Insulator 15kV.jpeg", "description": "15kV Epoxy Resin Cast Insulator, part of our wide range of insulators available up to 36kV.", "stock": "In Stock", "rating": "4.3"},
        {"id": 11, "title": "HV Metal Part", "image": "https://avs-polymers.vercel.app/Polymer-images/Polymer-13.png", "description": "Lightweight and portable design for high-voltage systems.", "stock": "In Stock", "rating": "4.2"},
        {"id": 13, "title": "Epoxy Bushing Class", "image": "images/Epoxy Bushing Class  1.1kv and 3.6kV Rated Current 250AMP to 5000AMP.jpeg", "description": "Epoxy Bushings with rated voltages of 1.1kV & 3.6kV and currents from 250A to 5000A.", "stock": "In Stock", "rating": "4.9"},
        {"id": 17, "title": "3.3KV Epoxy Insulator", "image": "images/Epoxy Resin Cast Insulator 3.3kv.jpeg", "description": "Top-tier 3.3KV polymer processing unit, part of our insulator range available up to 36kV.", "stock": "In Stock", "rating": "4.7"}
    ];

    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card card" onclick="openQuickView(${product.id})">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                </div>
            </div>
        `).join('');
    }

    const modalOverlay = document.getElementById('quickViewModal');
    window.openQuickView = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product || !modalOverlay) return;

        modalOverlay.innerHTML = `
            <div class="modal-content animate-on-scroll">
                <button class="modal-close" onclick="closeQuickView()">×</button>
                <div class="quick-view-grid">
                    <img src="${product.image}" alt="${product.title}" class="quick-view-image">
                    <div class="quick-view-details">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p><strong>Rating:</strong> ${product.rating} ★</p>
                        <p><strong>Status:</strong> <span style="color: ${product.stock === 'In Stock' ? '#00ff89' : '#ff4d4d'}">${product.stock}</span></p>
                    </div>
                </div>
            </div>
        `;
        modalOverlay.classList.add('active');
        setTimeout(() => {
            modalOverlay.querySelector('.modal-content').classList.add('in-view');
        }, 10);
    };

    window.closeQuickView = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    };
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeQuickView();
        });
    }
    
    window.toggleFAQ = (element) => {
        const faqItem = element.closest('.faq-item');
        faqItem.classList.toggle('active');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[class*="grid"] > *, .section-title, .hero-title, .hero-subtitle, .btn, .about-section > *, .contact-grid > *, .faq-item').forEach((el, i) => {
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }
        el.style.setProperty('--stagger-index', i % 5);
        observer.observe(el);
    });
});