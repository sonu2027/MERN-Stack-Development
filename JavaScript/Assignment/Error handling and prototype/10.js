/*10. Filter by Category.
Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input. */

function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

const products = [
    { name: "Product 1", category: "Electronics" },
    { name: "Product 2", category: "Clothing" },
    { name: "Product 3", category: "Electronics" },
    { name: "Product 4", category: "Books" },
];

const filterProductsByCategory = filterByCategory(products);

const electronicsProducts = filterProductsByCategory("Electronics");
console.log(electronicsProducts);
