// LUXE - Premium E-Commerce JavaScript

// Product Data
const products = [
    { id: 1, name: "Premium Wireless Headphones", category: "electronics", price: 299.99, originalPrice: 399.99, rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", badge: "sale" },
    { id: 2, name: "Smart Watch Pro", category: "electronics", price: 449.99, originalPrice: 549.99, rating: 4.9, reviews: 189, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", badge: "sale" },
    { id: 3, name: "Designer Sunglasses", category: "fashion", price: 189.99, originalPrice: null, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", badge: "new" },
    { id: 4, name: "Minimalist Leather Wallet", category: "fashion", price: 79.99, originalPrice: 99.99, rating: 4.6, reviews: 89, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", badge: null },
    { id: 5, name: "Modern Table Lamp", category: "home", price: 159.99, originalPrice: null, rating: 4.5, reviews: 67, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", badge: null },
    { id: 6, name: "Ergonomic Office Chair", category: "home", price: 449.99, originalPrice: 599.99, rating: 4.9, reviews: 312, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", badge: "sale" },
    { id: 7, name: "Professional Running Shoes", category: "sports", price: 179.99, originalPrice: null, rating: 4.8, reviews: 245, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", badge: "new" },
    { id: 8, name: "Carbon Fiber Tennis Racket", category: "sports", price: 249.99, originalPrice: 299.99, rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1617083934555-ac7b4d0c8be5?w=400", badge: null },
    { id: 9, name: "Luxury Skincare Set", category: "beauty", price: 129.99, originalPrice: null, rating: 4.9, reviews: 178, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400", badge: null },
    { id: 10, name: "Designer Perfume", category: "beauty", price: 89.99, originalPrice: 119.99, rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400", badge: "sale" },
    { id: 11, name: "Bestseller Novel Collection", category: "books", price: 49.99, originalPrice: null, rating: 4.8, reviews: 267, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", badge: "new" },
    { id: 12, name: "Programming Guide Book", category: "books", price: 39.99, originalPrice: 59.99, rating: 4.7, reviews: 189, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400", badge: null },
    { id: 13, name: "Wireless Earbuds Pro", category: "electronics", price: 199.99, originalPrice: 249.99, rating: 4.8, reviews: 456, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", badge: "sale" },
    { id: 14, name: "Vintage Denim Jacket", category: "fashion", price: 159.99, originalPrice: null, rating: 4.5, reviews: 78, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400", badge: null },
    { id: 15, name: "Smart Home Speaker", category: "electronics", price: 129.99, originalPrice: null, rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400", badge: "new" },
    { id: 16, name: "Yoga Mat Premium", category: "sports", price: 69.99, originalPrice: 89.99, rating: 4.9, reviews: 167, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400", badge: null },
    { id: 17, name: "Ceramic Vase Set", category: "home", price: 89.99, originalPrice: null, rating: 4.4, reviews: 56, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", badge: null },
    { id: 18, name: "Organic Face Cream", category: "beauty", price: 54.99, originalPrice: 74.99, rating: 4.7, reviews: 123, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400", badge: "sale" },
    { id: 19, name: "Bluetooth Speaker", category: "electronics", price: 79.99, originalPrice: null, rating: 4.5, reviews: 198, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", badge: null },
    { id: 20, name: "Classic Watch", category: "fashion", price: 299.99, originalPrice: 399.99, rating: 4.9, reviews: 287, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", badge: "new" }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('luxeCart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutClose = document.getElementById('checkoutClose');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const searchResults = document.getElementById('searchResults');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');

// Checkout Elements
const toPaymentBtn = document.getElementById('toPaymentBtn');
const toConfirmBtn = document.getElementById('toConfirmBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const shippingForm = document.getElementById('shippingForm');
const paymentForm = document.getElementById('paymentForm');
const confirmForm = document.getElementById('confirmForm');
const summarySubtotal = document.getElementById('summarySubtotal');
const summaryTotal = document.getElementById('summaryTotal');
const confirmEmail = document.getElementById('confirmEmail');
const orderNumber = document.getElementById('orderNumber');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartBadge();
    setupEventListeners();
});

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = productsToRender.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.05}s">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay"></div>
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
                <button class="wishlist-btn" data-id="${product.id}">
                    <i class="far fa-heart"></i>
                </button>
                <div class="product-actions">
                    <button class="product-action-btn add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to new product cards
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
            addToCart(productId);
        });
    });

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btn = e.target.closest('.wishlist-btn');
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        });
    });
}

// Render Stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalf ? 1 : 0); i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < 10) {
            existingItem.quantity++;
        }
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartBadge();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderCartItems();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        const newQty = item.quantity + change;
        if (newQty > 0 && newQty <= 10) {
            item.quantity = newQty;
            saveCart();
            renderCartItems();
        }
    }
}

// Save Cart
function saveCart() {
    localStorage.setItem('luxeCart', JSON.stringify(cart));
}

// Update Cart Badge
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
}

// Render Cart Items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.classList.add('show');
        cartFooter = cartItems.parentElement.querySelector('.cart-footer');
        if(cartFooter) cartFooter.style.display = 'none';
    } else {
        cartEmpty.classList.remove('show');
        const cartFooter = document.querySelector('.cart-footer');
        if(cartFooter) cartFooter.style.display = 'block';
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Show Notification
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Filter Products
function filterProducts() {
    let filtered = [...products];
    const category = categoryFilter.value;
    const sort = sortFilter.value;
    
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    switch (sort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    renderProducts(filtered);
}

// Search Products
function searchProducts(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:20px;">No products found</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="addToCart(${product.id});searchModal.classList.remove('active');">
            <img src="${product.image}" alt="${product.name}" style="width:60px;height:60px;border-radius:8px;object-fit:cover;">
            <div style="flex:1;">
                <div style="font-weight:600;">${product.name}</div>
                <div style="color:var(--accent-primary);">$${product.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart Modal
    cartBtn.addEventListener('click', () => {
        renderCartItems();
        cartModal.classList.add('active');
    });
    
    cartClose.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    document.querySelector('.cart-overlay').addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    // Checkout Modal
    checkoutBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
        checkoutModal.classList.add('active');
        updateCheckoutStep(1);
    });
    
    checkoutClose.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
    
    document.querySelector('.checkout-overlay').addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
    
    // Shipping to Payment
    toPaymentBtn.addEventListener('click', () => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const zipCode = document.getElementById('zipCode').value;
        const phone = document.getElementById('phone').value;
        
        if (!firstName || !lastName || !email || !address || !city || !zipCode || !phone) {
            showNotification('Please fill in all required fields!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        summarySubtotal.textContent = `$${total.toFixed(2)}`;
        summaryTotal.textContent = `$${total.toFixed(2)}`;
        confirmEmail.textContent = email;
        
        updateCheckoutStep(2);
    });
    
    // Payment to Confirmation
    toConfirmBtn.addEventListener('click', () => {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCvv = document.getElementById('cardCvv').value;
        const cardName = document.getElementById('cardName').value;
        
        if (!cardNumber || !cardExpiry || !cardCvv || !cardName) {
            showNotification('Please fill in all payment details!');
            return;
        }
        
        // Generate order number
        orderNumber.textContent = `LUXE-${Date.now().toString().slice(-6)}`;
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartBadge();
        
        updateCheckoutStep(3);
    });
    
    // Continue Shopping
    continueShoppingBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
    
    // Filters
    categoryFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);
    
    // Search
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });
    
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });
    
    // Category Cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            categoryFilter.value = category;
            filterProducts();
            
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Close modals on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchModal.classList.remove('active');
            cartModal.classList.remove('active');
            checkoutModal.classList.remove('active');
        }
    });
}

// Update Checkout Step
function updateCheckoutStep(step) {
    document.querySelectorAll('.step').forEach((s, index) => {
        s.classList.remove('active', 'completed');
        if (index + 1 < step) {
            s.classList.add('completed');
        } else if (index + 1 === step) {
            s.classList.add('active');
        }
    });
    
    shippingForm.classList.toggle('hidden', step !== 1);
    paymentForm.classList.toggle('hidden', step !== 2);
    confirmForm.classList.toggle('hidden', step !== 3);
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
