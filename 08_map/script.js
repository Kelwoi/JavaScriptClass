const products = new Map([
    ["Apple", 5],
    ["Banana", 2],
    ["Orange", 8],
    ["Milk", 1],
    ["Bread", 4],
    ["Cheese", 6],
    ["Eggs", 10],
    ["Butter", 3],
    ["Tomato", 7],
    ["Potato", 9]
]);


console.log("Товари, яких більше ніж 3 одиниці:");
for (const [name, quantity] of products) {
    if (quantity > 3) {
        console.log(`${name}: ${quantity}`);
    }
}


const sortedProducts = Array.from(products.entries())
    .sort((a, b) => b[1] - a[1]);

console.log("\nТовари, відсортовані за кількістю у зворотному порядку:");
for (const [name, quantity] of sortedProducts) {
    console.log(`${name}: ${quantity}`);
}
