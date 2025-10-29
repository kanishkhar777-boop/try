// Mock data for guides
let guides = [
    {
        id: 1,
        name: "Anjali",
        location: "Pondicherry (White Town / French Colony), India",
        languages: ["English", "Tamil", "French"],
        experience: 7,
        specialties: ["Heritage walks", "French architecture tours", "Cultural experiences"],
        rate: 1800,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "Deeply connected to Pondicherry’s French heritage and vibrant street life. I enjoy showing travelers the charm of White Town — from colonial buildings to hidden cafés and coastal sunset points.",
        image: "/guide/pondy.jpg"
    },
    {
        id: 2,
        name: "Suresh",
        location: "Tiruchirappalli (Srirangam & Kallanai), Tamil Nadu, India",
        languages: ["Tamil", "English", "Hindi"],
        experience: 10,
        specialties: ["Temple heritage tours", "Spiritual walks", "Ancient engineering marvels"],
        rate: 1600,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "With deep roots in Trichy’s cultural and spiritual heritage, I offer immersive tours covering the sacred Srirangam Temple — the world’s largest functioning Hindu temple — and the historic Kallanai (Grand Anicut), one of the oldest water diversion structures still in use. My tours blend history, devotion, and architecture for an unforgettable experience.",
        image: "/guide/srirangam.jpg"
    },
    {
        id: 3,
        name: "Vignesh Seabreeze",
        location: "Kanyakumari, India",
        languages: ["English", "Tamil", "Malayalam", "Hindi"],
        experience: 8,
        specialties: ["Island tours", "Sunrise & sunset points", "Historical sites", "Local seafood spots"],
        rate: 1300,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "Passionate about the southern tip of India where three seas meet. Loves telling stories of Vivekananda and Thiruvalluvar while guiding visitors to the best ferry rides, viewpoints, and seaside cafés.",
        image: "/guide/kanni.jpg"
    },
    {
        id: 4,
        name: "Priya Raman",
        location: "Kodaikanal, India",
        languages: ["English", "Tamil", "Hindi"],
        experience: 6,
        specialties: ["Nature walks", "Waterfall trails", "Adventure tours", "Local culture"],
        rate: 1500,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "Passionate about Kodaikanal’s serene beauty and mountain life. I love guiding visitors through scenic viewpoints, hidden waterfalls, and local food spots that only locals know.",
        image: "/guide/kodai.jpg"
    },
    {
        id: 5,
        name: "Arjun Stonewalker",
        location: "Mahabalipuram, India",
        languages: ["English", "Tamil", "Hindi"],
        experience: 7,
        specialties: ["Heritage walks", "Temple architecture", "Local legends", "Photography tours"],
        rate: 1200,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "Loves sharing the ancient beauty of Mahabalipuram — from the Shore Temple to hidden rock carvings. Known for explaining stories of gods and kings in a fun and simple way while helping tourists find the best photo spots near the beach.",
        image: "/guide/mahabalipuram.jpg"
    },
    {
        id: 6,
        name: "Meenakshi",
        location: "Karaikudi (Chettinad Region), Tamil Nadu, India",
        languages: ["Tamil", "English"],
        experience: 8,
        specialties: ["Chettinad heritage house tours", "Architecture walks", "Traditional art & cuisine experiences"],
        rate: 1500,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "Passionate about preserving the legacy of Chettinad, I guide visitors through the majestic mansions, intricate tile work, and stories of the merchant families that built them. My tours bring alive the culture, craftsmanship, and cuisine that make Chettinad truly unique.",
        image: "/guide/chettinadu.jpg"
    },
    {
        id: 7,
        name: "Amit Sharma",
        location: "Agra (Taj Mahal), India",
        languages: ["English", "Hindi", "Urdu"],
        experience: 9,
        specialties: ["Monument tours", "Mughal history", "Photography guidance", "Local handicrafts"],
        rate: 2000,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "A certified heritage guide passionate about the Mughal era and the story of the Taj Mahal. I love helping visitors experience Agra’s timeless beauty, from sunrise views of the monument to exploring nearby cultural gems.",
        image: "/guide/tajmahal.jpg"
    },
    {
        id: 8,
        name: "Neha Verma",
        location: "New Delhi (India Gate), India",
        languages: ["English", "Hindi"],
        experience: 6,
        specialties: ["Historical walks", "City sightseeing", "Cultural storytelling", "Evening light tours"],
        rate: 1700,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "A passionate Delhiite who loves sharing the city’s history and spirit. I guide visitors through India Gate, nearby war memorials, and other iconic landmarks while revealing the fascinating stories behind them.",
        image: "/guide/india gate.jpg"
    },
    {
        id: 9,
        name: "Lakshman",
        location: "Mumbai (Global Vipassana Pagoda, Gorai), Maharashtra, India",
        languages: ["English", "Hindi", "Marathi"],
        experience: 6,
        specialties: ["Meditation & spiritual tours", "Buddhist architecture", "Mindfulness experiences"],
        rate: 1700,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "Dedicated to promoting peace and mindfulness, I guide visitors through the serene Global Vipassana Pagoda — home to one of the world’s largest stone domes built without supporting pillars. My tours blend stories of Buddha’s teachings, architectural insights, and guided moments of calm amid the tranquil surroundings of Gorai.",
        image: "/guide/bakoda.jpg"
    },
    {
        id: 10,
        name: "Aarav",
        location: "Jaipur (Hawa Mahal & Pink City), Rajasthan, India",
        languages: ["Hindi", "English"],
        experience: 9,
        specialties: ["Royal heritage tours", "Architecture walks", "Local handicraft & bazaar experiences"],
        rate: 1800,
        rating: Math.random() < 0.5 ? 4 : 5,
        bio: "A storyteller at heart, I bring Jaipur’s royal legacy to life through the stunning Hawa Mahal and the colorful lanes of the Pink City. My tours reveal the history behind Rajput architecture, hidden courtyards, traditional crafts, and the vibrant local culture that makes Jaipur truly majestic.",
        image: "/guide/jaipur.jpg"
    }
];

// Bookings storage (simulated)
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
let appliedCoupon = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const guideForm = document.getElementById('guideForm');
const guidesList = document.getElementById('guidesList');
const bookingsList = document.getElementById('bookingsList');
const locationFilter = document.getElementById('locationFilter');
const budgetFilter = document.getElementById('budgetFilter');

// Initialize the app
function init() {
    showSection('home');
    renderGuides();
    renderBookings();
    renderCart();

    // Event listeners
    guideForm.addEventListener('submit', handleGuideRegistration);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Add real-time search for location filter
    locationFilter.addEventListener('input', applyFilters);
}

// Show specific section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
}

// Handle guide registration
function handleGuideRegistration(e) {
    e.preventDefault();

    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phone').value;
    const fullPhone = countryCode + phoneNumber;

    const authFile = document.getElementById('authId').files[0];
    if (!authFile) {
        alert('Please upload your authentication document.');
        return;
    }

    const newGuide = {
        id: guides.length + 1,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: fullPhone,
        location: document.getElementById('location').value,
        languages: document.getElementById('languages').value.split(',').map(lang => lang.trim()),
        experience: parseInt(document.getElementById('experience').value),
        specialties: document.getElementById('specialties').value.split(',').map(spec => spec.trim()),
        rate: parseFloat(document.getElementById('rate').value),
        authDocument: authFile.name, // Store filename for demo purposes
        bio: document.getElementById('bio').value,
        image: "https://via.placeholder.com/300x200/9b59b6/ffffff?text=" + document.getElementById('name').value.split(' ')[0]
    };

    guides.push(newGuide);
    guideForm.reset();
    alert('Guide registered successfully!');
    showSection('browse');
    renderGuides();
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? 'filled' : ''}">★</span>`;
    }
    return `<div class="rating">${stars}<span class="rating-text">(${rating})</span></div>`;
}

// Render guides list
function renderGuides(filteredGuides = guides) {
    guidesList.innerHTML = '';

    filteredGuides.forEach(guide => {
        const guideCard = document.createElement('div');
        guideCard.className = 'guide-card';
        guideCard.innerHTML = `
            <img src="${guide.image}" alt="${guide.name}">
            <div class="guide-info">
                <h3>${guide.name}</h3>
                ${generateStarRating(guide.rating)}
                <p><strong>Location:</strong> ${guide.location}</p>
                <p><strong>Languages:</strong> ${guide.languages.join(', ')}</p>
                <p><strong>Experience:</strong> ${guide.experience} years</p>
                <p><strong>Specialties:</strong> ${guide.specialties.join(', ')}</p>
                <p class="guide-rate">₹${guide.rate}/hour</p>
                <p>${guide.bio}</p>
                <button class="btn-book" onclick="addToCart(${guide.id})">Add to Cart</button>
            </div>
        `;
        guidesList.appendChild(guideCard);
    });
}

// Apply filters
function applyFilters() {
    const location = locationFilter.value.toLowerCase();
    const budget = parseFloat(budgetFilter.value) || Infinity;

    const filteredGuides = guides.filter(guide => {
        const matchesLocation = guide.location.toLowerCase().includes(location);
        const matchesBudget = guide.rate <= budget;
        return matchesLocation && matchesBudget;
    });

    renderGuides(filteredGuides);
}

// Add guide to cart
function addToCart(guideId) {
    const guide = guides.find(g => g.id === guideId);
    if (!guide) {
        alert('Guide not found!');
        return;
    }

    // Check if guide is already in cart
    const existingItem = cart.find(item => item.id === guideId);
    if (existingItem) {
        alert('Guide is already in your cart!');
        return;
    }

    // Add to cart
    const cartItem = {
        id: guide.id,
        name: guide.name,
        location: guide.location,
        rate: guide.rate,
        image: guide.image,
        languages: guide.languages,
        experience: guide.experience,
        specialties: guide.specialties,
        date: '',
        duration: 1
    };

    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Guide added to cart!');
    renderCart();
    showSection('cart');
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerHTML = '';
        checkoutBtn.style.display = 'none';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'guide-card';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="guide-info">
                <h3>${item.name}</h3>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Languages:</strong> ${item.languages.join(', ')}</p>
                <p><strong>Experience:</strong> ${item.experience} years</p>
                <p><strong>Specialties:</strong> ${item.specialties.join(', ')}</p>
                <p class="guide-rate">₹${item.rate}/hour</p>
                <div class="cart-item-controls">
                    <label>Date: <input type="date" id="cartDate${index}" value="${item.date}" required></label>
                    <label>Duration (hours): <input type="number" id="cartDuration${index}" min="1" value="${item.duration}" required></label>
                    <button class="btn-secondary" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
        cartItems.appendChild(itemDiv);

        // Update total
        total += item.rate * item.duration;

        // Add event listeners for date and duration changes
        const dateInput = document.getElementById(`cartDate${index}`);
        const durationInput = document.getElementById(`cartDuration${index}`);

        dateInput.addEventListener('change', () => {
            cart[index].date = dateInput.value;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });

        durationInput.addEventListener('change', () => {
            cart[index].duration = parseInt(durationInput.value);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });

    const platformFee = 25;
    const finalTotal = total + platformFee;

    cartTotal.innerHTML = `
        <p><strong>Subtotal:</strong> ₹${total}</p>
        <p><strong>Platform Fee:</strong> ₹${platformFee}</p>
        <p><strong>Total:</strong> ₹${finalTotal}</p>
    `;

    checkoutBtn.style.display = 'block';
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Proceed to payment
function proceedToPayment() {
    // Check if all items have date and duration
    for (let item of cart) {
        if (!item.date || !item.duration) {
            alert('Please fill in date and duration for all items in your cart.');
            return;
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showSection('payment');

    // Ensure DOM is ready before rendering
    setTimeout(() => {
        renderPaymentSummaryFromCart();
    }, 100);
}

// Render payment summary from cart
function renderPaymentSummaryFromCart() {
    const paymentSummary = document.getElementById('paymentSummary');
    const paymentTotal = document.getElementById('paymentTotal');

    paymentSummary.innerHTML = '<h3>Order Summary</h3>';

    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'summary-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 10px; margin-right: 15px;">
            <div class="guide-details">
                <h4>${item.name}</h4>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Languages:</strong> ${item.languages.join(', ')}</p>
                <p><strong>Experience:</strong> ${item.experience} years</p>
                <p><strong>Specialties:</strong> ${item.specialties.join(', ')}</p>
                <p class="rate-highlight"><strong>Rate:</strong> ₹${item.rate}/hour</p>
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Duration:</strong> ${item.duration} hours</p>
            </div>
        `;
        paymentSummary.appendChild(itemDiv);

        total += item.rate * item.duration;
    });

    const platformFee = 25;
    const discount = appliedCoupon ? total * 0.1 : 0;
    const finalTotal = total + platformFee - discount;

    paymentTotal.innerHTML = `
        <div class="total-breakdown">
            <p>Guide Fee: ₹${total}</p>
            <p>Platform Fee: ₹${platformFee}</p>
            ${appliedCoupon ? `<p>Discount (${appliedCoupon}): -₹${discount}</p>` : ''}
            <h3>Final Total: ₹${finalTotal}</h3>
        </div>
    `;
}

// Apply coupon
function applyCoupon() {
    const couponInput = document.getElementById('couponCode');
    const couponCode = couponInput.value.trim().toUpperCase();

    if (couponCode === 'SAVE10') {
        appliedCoupon = couponCode;
        alert('Coupon applied! 10% discount added.');
        renderPaymentSummaryFromCart();
    } else {
        alert('Invalid coupon code.');
        appliedCoupon = null;
    }
}

// Legacy function - no longer used

// Render bookings
function renderBookings() {
    bookingsList.innerHTML = '';

    if (bookings.length === 0) {
        bookingsList.innerHTML = '<p>No bookings yet. Book a guide to get started!</p>';
        return;
    }

    bookings.forEach(booking => {
        const bookingItem = document.createElement('div');
        bookingItem.className = 'guide-card';
        bookingItem.innerHTML = `
            <div class="guide-info">
                <h3>Booking with ${booking.guideName}</h3>
                <p><strong>Date:</strong> ${booking.date}</p>
                <p><strong>Duration:</strong> ${booking.duration} hours</p>
                <p><strong>Total Cost:</strong> ₹${booking.totalCost}</p>
            </div>
        `;
        bookingsList.appendChild(bookingItem);
    });
}

// Function to edit profile
function editProfile() {
    // Load existing profile data
    const existingProfile = JSON.parse(localStorage.getItem('userProfile')) || {};

    // Navigate to profile section
    showSection('profile');

    // Pre-fill form with existing data
    document.getElementById('profileName').value = existingProfile.name || '';
    document.getElementById('profilePhone').value = existingProfile.phone || '';
    document.getElementById('profileEmail').value = existingProfile.email || '';

    // Add form submission handler
    const profileForm = document.getElementById('profileForm');
    profileForm.onsubmit = function(e) {
        e.preventDefault();

        const name = document.getElementById('profileName').value;
        const phone = document.getElementById('profilePhone').value;
        const email = document.getElementById('profileEmail').value;

        if (name && phone && email) {
            // Store profile data
            const profile = { name, phone, email };
            localStorage.setItem('userProfile', JSON.stringify(profile));
            alert('Profile updated successfully!');
            showSection('home');
        } else {
            alert('All fields are required.');
        }
    };
}

// Function to toggle profile menu
function toggleProfileMenu() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('show');
}

// Function to handle logout
function logout() {
    alert('Logged out successfully!');
    // Here you would typically redirect to login page or clear session
}

// Close profile dropdown when clicking outside
document.addEventListener('click', function(event) {
    const profileMenu = document.querySelector('.profile-menu');
    const dropdown = document.getElementById('profileDropdown');
    if (!profileMenu.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();

    // Add payment form event listener
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', handlePayment);
    }
});
