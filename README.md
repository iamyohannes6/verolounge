# Vero Lounge Menu

A modern and sleek menu display for Vero Lounge, featuring different categories of alcoholic beverages with their respective prices.

## Features

- Modern UI with orange and black theme
- Two-page structure:
  - Home page with category selection
  - Products page displaying items for the selected category
- Animations and visual effects
- Responsive design for all devices
- Beautiful category cards with icons
- Smooth transitions between pages

## How to Use

1. Open `index.html` in a web browser
2. Click on a category card to view products in that category
3. Browse the product list with full and half alcohol prices
4. Use the back button to return to categories

## Structure

- `index.html` - Home page with category selection
- `products.html` - Products page for displaying menu items
- `styles.css` - Styling for both pages
- `products.js` - JavaScript for handling the products page functionality

## Setup

No special setup required. Simply download these files and open `index.html` in any modern web browser.

## Development

To modify the menu items, edit the `menuData` object in `products.js`.

```javascript
const menuData = {
    whiskey: [
        { name: "Blue label", fullPrice: 45000, halfPrice: null },
        // more items...
    ],
    // more categories...
};
```

## License

Free to use. 