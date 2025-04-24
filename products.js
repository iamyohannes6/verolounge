document.addEventListener('DOMContentLoaded', function() {
    // Menu data organized by categories
    const menuData = {
        whiskey: [
            { name: "Blue label", fullPrice: 55000, halfPrice: null },
            { name: "Gold label", fullPrice: 16000, halfPrice: 8500 },
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
        ]
    };

    // DOM Elements
    const itemsList = document.getElementById('items-list');
    const categoryTitle = document.getElementById('category-title');
    const categoryNavLink = document.getElementById('category-nav-link');
    
    // Get the category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'whiskey';
    
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
        
        // If category doesn't exist, show error and return to index
        if (!items) {
            alert('Category not found!');
            window.location.href = 'index.html';
            return;
        }
        
        // Create and append each item to the list with staggered animation
        items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.style.opacity = '0';
            itemElement.style.transform = 'translateY(20px)';
            
            itemElement.innerHTML = `
                <div class="item-name">${item.name}</div>
                <div class="price-column">
                    <div class="price ${!item.fullPrice ? 'empty' : ''}">${formatPrice(item.fullPrice)}</div>
                    <div class="price ${!item.halfPrice ? 'empty' : ''}">${formatPrice(item.halfPrice)}</div>
                </div>
            `;
            
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