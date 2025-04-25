document.addEventListener('DOMContentLoaded', function() {
    // Menu data organized by categories
    const menuData = {
        whiskey: [
            { name: "Blue label", fullPrice: 55000, halfPrice: null },
            { name: "Gold label", fullPrice: 20000, halfPrice: 11000 },
            { name: "Double black", fullPrice: 12000, halfPrice: 6500 },
            { name: "Black label", fullPrice: 8500, halfPrice: 5000 },
            { name: "Red label", fullPrice: 6000, halfPrice: 3500 },
            { name: "Monkey shoulder", fullPrice: 10000, halfPrice: 5500 },
            { name: "Grants", fullPrice: 7500, halfPrice: 4000 },
            { name: "Chivas 18", fullPrice: 16500, halfPrice: 8500 },
            { name: "Chivas 12", fullPrice: 8500, halfPrice: 5000 },
            { name: "Jamson", fullPrice: 7000, halfPrice: 4000 },
            { name: "Jack Daniel", fullPrice: 8500, halfPrice: 5000 },
            { name: "King Robert", fullPrice: 5000, halfPrice: 3500 },
            { name: "Glenfiddich 15", fullPrice: 19000, halfPrice: 11000 },
            { name: "Glenfiddich 12", fullPrice: null, halfPrice: null },
            { name: "White horse", fullPrice: 6500, halfPrice: 4000 }
        ],
        vodka: [
            { name: "Gery goose", fullPrice: 12000, halfPrice: 6500 },
            { name: "Absolute", fullPrice: 6500, halfPrice: 4000 },
            { name: "Stoli 0.75", fullPrice: 5000, halfPrice: null },
            { name: "Stoli 0.5", fullPrice: 4000, halfPrice: null }
        ],
        gin: [
            { name: "Hendricks", fullPrice: 12500, halfPrice: 7000 },
            { name: "Bomby", fullPrice: 6500, halfPrice: 4000 },
            { name: "Tanqueray", fullPrice: 9000, halfPrice: 5000 },
            { name: "Gordon", fullPrice: 6500, halfPrice: 4000 }
        ],
        tequila: [
            { name: "Casamigos", fullPrice: 17500, halfPrice: null },
            { name: "Don julio", fullPrice: 17500, halfPrice: null },
            { name: "Camino", fullPrice: 7500, halfPrice: 4000 },
            { name: "Olmeca", fullPrice: 8000, halfPrice: 4500 }
        ],
        rum: [
            { name: "Jagamister", fullPrice: 8000, halfPrice: 4500 },
            { name: "Amarula", fullPrice: 7500, halfPrice: 4000 }
        ],
        cognac: [
            { name: "Hennessey v.s", fullPrice: 22000, halfPrice: null },
            { name: "Hennessey v.s.o.p", fullPrice: 22000, halfPrice: null },
            { name: "Remy Martiny 0.75", fullPrice: 27000, halfPrice: null }
        ],
        champagne: [
            { name: "Moet", fullPrice: 20000, halfPrice: null },
            { name: "Zonin black", fullPrice: 6000, halfPrice: null }
        ],
        wine: [
            { name: "Acacia white/roze", fullPrice: 2500, halfPrice: null },
            { name: "Dry red", fullPrice: 2500, halfPrice: null },
            { name: "Antica", fullPrice: 2500, halfPrice: null },
            { name: "Cuve", fullPrice: 2500, halfPrice: null }
        ],
        classiccocktails: [
            { name: "Vero Royale – Gin, Rosemary Syrup, Lime, Bitters", fullPrice: 700, halfPrice: null },
            { name: "Negroni – Gin, Campari, Sweet Vermouth, Orange Peel", fullPrice: 800, halfPrice: null },
            { name: "Vero Vine – Vodka, Lemon Juice, Simple Syrup, Egg White (optional)", fullPrice: 600, halfPrice: null },
            { name: "Vero Drop – Vodka, Simple Syrup, Lemon Juice", fullPrice: 500, halfPrice: null },
            { name: "Long Ice Land Vero Tea – Gin, Vodka, Tequila, Rum, Blue Curaçao, Lemon, Sprite", fullPrice: 950, halfPrice: null }
        ],
        mocktails: [
            { name: "Vero Fizz – Orange Juice, Lemon Juice, Ginger Syrup, Blue Curaçao, Sprite", fullPrice: 250, halfPrice: null },
            { name: "Vero Sunrise – Pineapple Juice, Lemon Juice, Simple Syrup, Grenadine, Soda", fullPrice: 250, halfPrice: null },
            { name: "Vero Bloom – Rose Syrup, Lime Juice, Sparkling Water", fullPrice: 250, halfPrice: null },
            { name: "Tropical Smoothie – Watermelon, Lime, Mint, Simple Syrup, Sprite", fullPrice: 250, halfPrice: null },
            { name: "Berry Smash – Strawberry Syrup, Orange Juice, Lemon Juice, Soda, Blue Curaçao", fullPrice: 250, halfPrice: null }
        ],
        signaturecocktails: [
            { name: "Smoking Vero – Whiskey, Lemon Juice, Egg White (optional), Smoked Glass", fullPrice: 950, halfPrice: null },
            { name: "Midnight Bloom – Gin, Simple Syrup, Lemon Juice, Absinthe, Tonic", fullPrice: 800, halfPrice: null },
            { name: "Spiced Paloma – Gin, Orange Juice, Spiced Syrup, Chili-Salt Rim", fullPrice: 750, halfPrice: null },
            { name: "Velvet Espresso – Vodka, Coffee Liqueur, Amaretto", fullPrice: 500, halfPrice: null },
            { name: "Vero Flame – Absinthe, Lime, Gin, Vodka, Rum, Simple Syrup", fullPrice: 950, halfPrice: null }
        ],
        food: [
            { name: "ጥብሲ", fullPrice: 500, halfPrice: null },
            { name: "ደረቅ ጥብስ", fullPrice: 600, halfPrice: null },
            { name: "ደሮ ወጥ", fullPrice: 600, halfPrice: null },
            { name: "የፍየል ኣሮስቶ", fullPrice: 600, halfPrice: null },
            { name: "ሸክላ ጥብስ", fullPrice: 600, halfPrice: null },
            { name: "እስፔሻል ፒዛ", fullPrice: 700, halfPrice: null },
            { name: "ሮስትድ ቺክን", fullPrice: 2500, halfPrice: null }
        ]
    };

    // DOM Elements
    const itemsList = document.getElementById('items-list');
    const categoryTitle = document.getElementById('category-title');
    const categoryNavLink = document.getElementById('category-nav-link');
    
    // Get the category from URL with better error handling
    const urlParams = new URLSearchParams(window.location.search);
    let category = (urlParams.get('category') || 'whiskey').toLowerCase();
    
    // Ensure the category exists, fallback to whiskey if not
    if (!menuData[category]) {
        console.warn(`Category '${category}' not found, defaulting to 'whiskey'`);
        category = 'whiskey';
    }
    
    // Update the category title
    categoryTitle.textContent = capitalizeFirstLetter(category);
    
    // Update the category navigation link
    if (categoryNavLink) {
        categoryNavLink.href = `products.html?category=${category}`;
        categoryNavLink.textContent = `${capitalizeFirstLetter(category)}`;
    }
    
    // Format price with currency symbol
    function formatPrice(price) {
        if (!price) return '<span class="empty-price">-</span>';
        return `<span class="price-value">${price.toLocaleString()}</span>`;
    }
    
    // Capitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    // Display items for the selected category
    function displayItems(category) {
        // Clear current items
        itemsList.innerHTML = '';
        
        // Get items for the selected category
        const items = menuData[category];
        
        // If category doesn't exist, show message and default to whiskey
        if (!items) {
            console.error(`Category '${category}' not found in menu data`);
            // Instead of an alert, we'll just default to whiskey
            displayItems('whiskey');
            return;
        }
        
        // Check if this is a cocktail category
        const isCocktailCategory = (category === 'classiccocktails' || 
                                   category === 'mocktails' || 
                                   category === 'signaturecocktails');
        
        // Check if this is the food category that uses Tigrinya language
        const isFoodCategory = (category === 'food');
        
        // Create and append each item to the list with staggered animation
        items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.style.opacity = '0';
            itemElement.style.transform = 'translateY(20px)';
            
            if (isCocktailCategory) {
                // Split the name and ingredients for cocktails at the "–" character
                let itemName = item.name;
                let ingredients = '';
                
                if (item.name.includes('–')) {
                    const parts = item.name.split('–');
                    itemName = parts[0].trim();
                    ingredients = parts[1].trim();
                }
                
                // Single price column for cocktails with styled ingredients
                itemElement.innerHTML = `
                    <div class="item-name">
                        <div>${itemName}</div>
                        <span class="ingredients">${ingredients ? ingredients : ''}</span>
                    </div>
                    <div class="price-column">
                        <div class="price" style="flex: 2; text-align: center;">${formatPrice(item.fullPrice)}</div>
                    </div>
                `;
            } else if (isFoodCategory) {
                // Food items with Tigrinya font
                itemElement.innerHTML = `
                    <div class="item-name">
                        <div class="tigrinya-font">${item.name}</div>
                    </div>
                    <div class="price-column">
                        <div class="price" style="flex: 2; text-align: center;">${formatPrice(item.fullPrice)}</div>
                    </div>
                `;
            } else {
                // Regular two price columns
                itemElement.innerHTML = `
                    <div class="item-name">${item.name}</div>
                    <div class="price-column">
                        <div class="price ${!item.fullPrice ? 'empty' : ''}">${formatPrice(item.fullPrice)}</div>
                        <div class="price ${!item.halfPrice ? 'empty' : ''}">${formatPrice(item.halfPrice)}</div>
                    </div>
                `;
            }
            
            itemsList.appendChild(itemElement);
            
            // Add staggered animation
            setTimeout(() => {
                itemElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                itemElement.style.opacity = '1';
                itemElement.style.transform = 'translateY(0)';
            }, 50 * index);
        });
    }
    
    // Add subtle hover effect to menu items
    function addMenuItemInteractivity() {
        document.addEventListener('mouseover', function(event) {
            if (event.target.closest('.menu-item')) {
                const item = event.target.closest('.menu-item');
                const siblings = Array.from(itemsList.children);
                
                siblings.forEach(sibling => {
                    if (sibling !== item) {
                        sibling.style.opacity = '0.7';
                    }
                });
            }
        });
        
        document.addEventListener('mouseout', function(event) {
            if (event.target.closest('.menu-item')) {
                const siblings = Array.from(itemsList.children);
                siblings.forEach(sibling => {
                    sibling.style.opacity = '1';
                });
            }
        });
    }
    
    // Initialize
    displayItems(category);
    addMenuItemInteractivity();
}); 