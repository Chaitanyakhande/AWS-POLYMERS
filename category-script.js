document.addEventListener('DOMContentLoaded', () => {
    
    // Render category products
    const productsGrid = document.getElementById('categoryProductsGrid');
    if (productsGrid && typeof categoryProducts !== 'undefined') {
        productsGrid.innerHTML = categoryProducts.map(product => `
            <div class="product-card card" onclick="openQuickView(${product.id})">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">${product.price}</p>
                    <p class="product-stock ${product.stock === 'In Stock' ? 'in-stock' : 'out-stock'}">${product.stock}</p>
                </div>
            </div>
        `).join('');
    }

    // Quick view modal functionality
    const modalOverlay = document.getElementById('quickViewModal');
    window.openQuickView = (productId) => {
        const product = categoryProducts.find(p => p.id === productId);
        if (!product || !modalOverlay) return;

        modalOverlay.innerHTML = `
            <div class="modal-content animate-on-scroll">
                <button class="modal-close" onclick="closeQuickView()">×</button>
                <div class="quick-view-grid">
                    <img src="${product.image}" alt="${product.title}" class="quick-view-image">
                    <div class="quick-view-details">
                        <h2>${product.title}</h2>
                        <p class="product-description">${product.description}</p>
                        <div class="product-specs">
                            <p><strong>Category:</strong> ${product.category}</p>
                            <p><strong>Rating:</strong> ${product.rating} ★</p>
                            <div class="price-section">
                                <h3 class="product-price">${product.price}</h3>
                                <p class="stock-status"><strong>Status:</strong> <span style="color: ${product.stock === 'In Stock' ? '#00ff89' : '#ff4d4d'}">${product.stock}</span></p>
                            </div>
                        </div>
                        <div class="action-buttons">
                            <button class="btn btn-primary">Request Quote</button>
                            <button class="btn btn-secondary">Download Specs</button>
                        </div>
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

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });

    // Animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Apply animations
    document.querySelectorAll('.category-header, .category-features, .products-section, .feature-card, .product-card').forEach((el, i) => {
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }
        el.style.setProperty('--stagger-index', i % 4);
        observer.observe(el);
    });
});

// Sticky header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});