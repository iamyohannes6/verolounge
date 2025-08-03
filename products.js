document.addEventListener('DOMContentLoaded', function() {
    // Menu data organized by categories
    const menuData = {
        whiskey: [
            { name: "Blue label", fullPrice: 55000, halfPrice: null },
            { name: "Gold label", fullPrice: 16000, halfPrice: 10000 },
            { name: "Double black", fullPrice: 11000, halfPrice: 6000 },
            { name: "Black label", fullPrice: 9000, halfPrice: 5000 },
            { name: "Double Free black", fullPrice: 11000, halfPrice: 6000 },
            { name: "Duty Free Double Black", fullPrice: 11000, halfPrice: 7500 },
            { name: "Red label", fullPrice: 6000, halfPrice: 3500 },
            { name: "Monkey shoulder", fullPrice: 9000, halfPrice: 5500 },
            { name: "Grants", fullPrice: 7500, halfPrice: 4000 },
            { name: "Chivas 18", fullPrice: 19000, halfPrice: 8500 },
            { name: "Chivas 18 0.75", fullPrice: 18000, halfPrice: null },
            { name: "Chivas 12", fullPrice: 9000, halfPrice: 6000 },
            { name: "Jamson", fullPrice: 7000, halfPrice: 4000 },
            { name: "Jack Daniel", fullPrice: 8500, halfPrice: 5000 },
            { name: "King Robert", fullPrice: 5000, halfPrice: 3500 },
            { name: "Glenfiddich 15", fullPrice: 19000, halfPrice: 11000 },
            { name: "Glenfiddich 12", fullPrice: 18000, halfPrice: null },
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
            { name: "Lemon Drop – Vodka, Simple Syrup, Lemon", fullPrice: 550, halfPrice: null },
            { name: "Moscow Mule – Vodka, Ginger, Lemon", fullPrice: 550, halfPrice: null },
            { name: "Vero Sunrise – Gin or Vodka infused with orange and Vero syrup", fullPrice: 800, halfPrice: null },
            { name: "AMF –  Gin, Vodka, Tequila, Rum, Blue syrup sweet & sour ", fullPrice: 950, halfPrice: null },
            { name: "True Negroni – Gin, Sweet Vermouth, Campari", fullPrice: 800, halfPrice: null },
            { name: "Vero – Seasonal fruits infused with Gin or Vodka", fullPrice: 800, halfPrice: null }
        ],
        mocktails: [
            { name: "Vero Fizz – Orange Juice, Lemon Juice, Ginger Syrup, Blue Curaçao, Sprite", fullPrice: 250, halfPrice: null },
            { name: "Vero Sunrise – Pineapple Juice, Lemon Juice, Simple Syrup, Grenadine, Soda", fullPrice: 250, halfPrice: null },
            { name: "Vero Bloom – Rose Syrup, Lime Juice, Sparkling Water", fullPrice: 250, halfPrice: null },
            { name: "Tropical Smoothie – Watermelon, Lime, Mint, Simple Syrup, Sprite", fullPrice: 250, halfPrice: null },
            { name: "Berry Smash – Strawberry Syrup, Orange Juice, Lemon Juice, Soda, Blue Curaçao", fullPrice: 250, halfPrice: null },
            { name: "Tropical Punch – Orange, Lemon, Ginger ", fullPrice: 250, halfPrice: null },
            { name: "Sweet Sunrise – Strawberry, Orange, Lemon", fullPrice: 250, halfPrice: null }
        ],
        signaturecocktails: [
            { name: "Smoking Vero – Whiskey, Lemon Juice, Egg White (optional), Smoked Glass", fullPrice: 950, halfPrice: null },
            { name: "Midnight Bloom – Gin, Simple Syrup, Lemon Juice, Absinthe, Tonic", fullPrice: 800, halfPrice: null },
            { name: "Spiced Paloma – Gin, Orange Juice, Spiced Syrup, Chili-Salt Rim", fullPrice: 750, halfPrice: null },
            { name: "Velvet Espresso – Vodka, Coffee Liqueur, Amaretto", fullPrice: 500, halfPrice: null },
            { name: "Vero Flame – Absinthe, Lime, Gin, Vodka, Rum, Simple Syrup", fullPrice: 950, halfPrice: null }
        ],
        food: [
            // Tibs (Grilled/Roasted Meat)
            { name: "ጥብሲ", englishName: "Grilled Meat Tibs", fullPrice: 600, halfPrice: null },
            { name: "የበግ ጥብስ", englishName: "Lamb Tibs", fullPrice: 600, halfPrice: null },
            { name: "ደረቅ ጥብስ", englishName: "Dry Lamb Tibs", fullPrice: 1400, halfPrice: null },
            { name: "የፍየል ኣሮስቶ", englishName: "Goat Roast", fullPrice: 2400, halfPrice: 1350 },
            { name: "ሸክላ ጥብስ", englishName: "Clay Pot Roast", fullPrice: 2400, halfPrice: 1400 },
            
            // Chicken Dishes
            { name: "ደሮ ወጥ", englishName: "Doro Wet", fullPrice: 750, halfPrice: null },
            { name: "ሮስትድ ቺክን", englishName: "Roasted Chicken", fullPrice: 1500, halfPrice: null },
            { name: "ቺክን ዊንግ", englishName: "Chicken Wing", fullPrice: 1200, halfPrice: null },
            { name: "ቺክን ፓርሜዛን", englishName: "Chicken Parmesan", fullPrice: 1200, halfPrice: null },
            { name: "ቺክን ናገት", englishName: "Chicken Nugget", fullPrice: 1200, halfPrice: null },
            { name: "ቬሮ ስታይል ስፔሻል ቺክን", englishName: "Vero Style Special Chicken", fullPrice: 1400, halfPrice: null },
            { name: "ቺክን ሱፕ", englishName: "Chicken Soup", fullPrice: 500, halfPrice: null },
            
            // Pizza
            { name: "እስፔሻል ፒዛ", englishName: "Vero Special Pizza", fullPrice: 900, halfPrice: null },
            { name: "ፒዛ ማርጋሪታ", englishName: "Pizza Margarita", fullPrice: 850, halfPrice: null },
            { name: "ፒዛ ሃዋይያን", englishName: "Pizza Hawaiian", fullPrice: 900, halfPrice: null },
            { name: "ቬጀተብል ፒዛ", englishName: "Vegetable Pizza", fullPrice: 750, halfPrice: null },
            
            // Traditional Ethiopian Dishes
            { name: "ቋንጣ ፍርፍር", englishName: "Quanta Firfir", fullPrice: 600, halfPrice: null },
            { name: "ዱለት", englishName: "Dulet", fullPrice: 500, halfPrice: null },
            { name: "ቂንጥብጣብ", englishName: "Kintbtab", fullPrice: 500, halfPrice: null },
            
            // Special Items & Combos
            { name: "ኮርኒስ", englishName: "Cornis", fullPrice: 2500, halfPrice: null },
            { name: "ኮምቦ", englishName: "Combo", fullPrice: 1200, halfPrice: null },
            { name: "ቬሮ ስፔሻል ሳላድ", englishName: "Vero Special Salad", fullPrice: 600, halfPrice: null },
            { name: "Vegitable soup", fullPrice: 500, halfPrice: null },
            { name: "Soup", fullPrice: 400, halfPrice: null }
            
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
                // Food items with Tigrinya font and English translation
                itemElement.innerHTML = `
                    <div class="item-name">
                        <div class="tigrinya-font">${item.name}</div>
                        <span class="ingredients">${item.englishName}</span>
                    </div>
                    <div class="price-column">
                        <div class="price ${!item.fullPrice ? 'empty' : ''}">${formatPrice(item.fullPrice)}</div>
                        <div class="price ${!item.halfPrice ? 'empty' : ''}">${formatPrice(item.halfPrice)}</div>
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


