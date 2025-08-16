document.addEventListener('DOMContentLoaded', () => {

    // Complete products array based on SSE Phyd's actual product categories and offerings
    const products = [
        // Cast Resin Transformers (Distribution Transformers - Dry-type)
        {"id": 1, "title": "Cast Resin Transformer 25 KVA", "category": "Cast Resin Transformers", "description": "Dry-type cast resin distribution transformer suitable for residential and light commercial applications. IS/BS/IEC standard compliant.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$2,800.00", "stock": "In Stock", "rating": "4.6"},
        {"id": 2, "title": "Cast Resin Transformer 63 KVA", "category": "Cast Resin Transformers", "description": "Medium capacity dry-type transformer with excellent reliability and low maintenance requirements for commercial use.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$4,200.00", "stock": "In Stock", "rating": "4.7"},
        {"id": 3, "title": "Cast Resin Transformer 100 KVA", "category": "Cast Resin Transformers", "description": "Compact cast resin transformer ideal for small industrial and commercial installations. Automatic Pressure Gelation Technique.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$5,800.00", "stock": "In Stock", "rating": "4.8"},
        {"id": 4, "title": "Cast Resin Transformer 160 KVA", "category": "Cast Resin Transformers", "description": "Medium-high capacity dry-type transformer with superior thermal stability and low noise operation.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$8,400.00", "stock": "In Stock", "rating": "4.7"},
        {"id": 5, "title": "Cast Resin Transformer 250 KVA", "category": "Cast Resin Transformers", "description": "High performance cast resin transformer for demanding industrial applications with enhanced electrical properties.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$12,500.00", "stock": "In Stock", "rating": "4.9"},
        {"id": 6, "title": "Cast Resin Transformer 315 KVA", "category": "Cast Resin Transformers", "description": "Large capacity dry-type transformer with advanced insulation system and extended service life.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$15,800.00", "stock": "In Stock", "rating": "4.8"},
        {"id": 7, "title": "Cast Resin Transformer 500 KVA", "category": "Cast Resin Transformers", "description": "High capacity transformer with excellent thermal management for heavy industrial applications.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$24,200.00", "stock": "Out of Stock", "rating": "4.9"},
        {"id": 8, "title": "Cast Resin Transformer 630 KVA", "category": "Cast Resin Transformers", "description": "Premium dry-type transformer with superior reliability and performance for critical installations.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$28,600.00", "stock": "In Stock", "rating": "4.8"},
        
        // LV Instrument Transformers
        {"id": 9, "title": "LV Current Transformer 100/5A", "category": "LV Instrument Transformers", "description": "Low voltage current transformer for metering and protection applications. High accuracy class 0.5.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$180.00", "stock": "In Stock", "rating": "4.5"},
        {"id": 10, "title": "LV Current Transformer 200/5A", "category": "LV Instrument Transformers", "description": "Precision current transformer for energy monitoring systems with excellent linearity.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$220.00", "stock": "In Stock", "rating": "4.6"},
        {"id": 11, "title": "LV Current Transformer 400/5A", "category": "LV Instrument Transformers", "description": "Heavy-duty current transformer for industrial monitoring and control applications.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$280.00", "stock": "In Stock", "rating": "4.7"},
        {"id": 12, "title": "LV Current Transformer 600/5A", "category": "LV Instrument Transformers", "description": "High-capacity current transformer suitable for large industrial installations.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$350.00", "stock": "In Stock", "rating": "4.5"},
        {"id": 13, "title": "LV Current Transformer 800/5A", "category": "LV Instrument Transformers", "description": "Premium current transformer with enhanced accuracy for critical measurement applications.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$420.00", "stock": "Out of Stock", "rating": "4.8"},
        {"id": 14, "title": "LV Current Transformer 1000/5A", "category": "LV Instrument Transformers", "description": "High-capacity precision CT for power monitoring in heavy industrial environments.", "image": "https://ssephyd.com/wp-content/uploads/2023/02/mv_transformer.png", "price": "$520.00", "stock": "In Stock", "rating": "4.7"},

        // Epoxy Moulded Bushings
        {"id": 15, "title": "Epoxy Moulded Bushing 630A", "category": "Epoxy Moulded Bushings", "description": "High-performance epoxy bushing manufactured using Automatic Pressure Gelation Technique for switchgear applications.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$125.00", "stock": "In Stock", "rating": "4.6"},
        {"id": 16, "title": "Epoxy Moulded Bushing 800A", "category": "Epoxy Moulded Bushings", "description": "Robust epoxy bushing with excellent electrical and mechanical properties for panel board applications.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$145.00", "stock": "In Stock", "rating": "4.7"},
        {"id": 17, "title": "Epoxy Moulded Bushing 1250A", "category": "Epoxy Moulded Bushings", "description": "Heavy-duty epoxy bushing designed for high current applications with superior arc resistance.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$185.00", "stock": "In Stock", "rating": "4.8"},
        {"id": 18, "title": "Epoxy Moulded Bushing 1600A", "category": "Epoxy Moulded Bushings", "description": "Premium high-current bushing with enhanced thermal stability for industrial switchgear.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$225.00", "stock": "In Stock", "rating": "4.5"},
        {"id": 19, "title": "Epoxy Moulded Bushing 2000A", "category": "Epoxy Moulded Bushings", "description": "Ultra-high current bushing for heavy industrial applications with superior insulation properties.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$285.00", "stock": "Out of Stock", "rating": "4.9"},

        // Epoxy Support Insulators  
        {"id": 20, "title": "Epoxy Support Insulator 11KV", "category": "Epoxy Support Insulators", "description": "High voltage support insulator for 11KV systems with excellent tracking resistance and mechanical strength.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$165.00", "stock": "In Stock", "rating": "4.6"},
        {"id": 21, "title": "Epoxy Support Insulator 22KV", "category": "Epoxy Support Insulators", "description": "Medium voltage epoxy insulator designed for outdoor installations with UV protection.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$220.00", "stock": "In Stock", "rating": "4.7"},
        {"id": 22, "title": "Epoxy Support Insulator 33KV", "category": "Epoxy Support Insulators", "description": "High voltage epoxy insulator for transmission applications with superior weather resistance.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$320.00", "stock": "In Stock", "rating": "4.8"},
        {"id": 23, "title": "Epoxy Post Insulator", "category": "Epoxy Support Insulators", "description": "Versatile post insulator suitable for various voltage levels with excellent electrical properties.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$95.00", "stock": "In Stock", "rating": "4.4"},
        {"id": 24, "title": "Epoxy Line Post Insulator", "category": "Epoxy Support Insulators", "description": "Specialized line post insulator for overhead line applications with enhanced mechanical strength.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$135.00", "stock": "In Stock", "rating": "4.5"},

        // Epoxy Terminal Transformer Boards
        {"id": 25, "title": "Epoxy Terminal Board Type A", "category": "Epoxy Terminal Transformer Boards", "description": "High-quality terminal board for transformer connections with excellent insulation properties.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$85.00", "stock": "In Stock", "rating": "4.3"},
        {"id": 26, "title": "Epoxy Terminal Board Type B", "category": "Epoxy Terminal Transformer Boards", "description": "Robust terminal board designed for heavy-duty transformer applications with superior durability.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$110.00", "stock": "In Stock", "rating": "4.5"},
        {"id": 27, "title": "Epoxy Terminal Board Type C", "category": "Epoxy Terminal Transformer Boards", "description": "Premium terminal board with enhanced electrical and thermal properties for critical applications.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$135.00", "stock": "Out of Stock", "rating": "4.6"},

        // Additional Epoxy Moulded Components
        {"id": 28, "title": "Epoxy Insulator Low Voltage", "category": "Epoxy Moulded Insulators", "description": "General purpose low voltage insulator for panel and switchboard applications.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$45.00", "stock": "In Stock", "rating": "4.2"},
        {"id": 29, "title": "Epoxy Insulator Medium Voltage", "category": "Epoxy Moulded Insulators", "description": "Medium voltage insulator with enhanced tracking resistance for demanding environments.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$75.00", "stock": "In Stock", "rating": "4.4"},
        {"id": 30, "title": "Epoxy Cross Arm Insulator", "category": "Epoxy Moulded Insulators", "description": "Specialized cross arm insulator for overhead line construction with superior mechanical properties.", "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400", "price": "$120.00", "stock": "In Stock", "rating": "4.6"}
    ];

    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card card" onclick="openQuickView(${product.id})">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-category">${product.category}</p>
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
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Rating:</strong> ${product.rating} ★</p>
                        <h3>${product.price}</h3>
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

// --- ENHANCEMENT: Sticky Header Effect ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// --- End of Enhancement ---