//1
let arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

//2
arr.forEach((el, index) => {
    console.log(`[${index + 1}] – ${el}`);
});

//3
let hasMultipleOf7 = arr.some(num => num % 7 === 0);
console.log(" Є кратне 7:", hasMultipleOf7);

//4
let sortedDesc = [...arr].sort((a, b) => b - a);
console.log("Відсортовано за спаданням:", sortedDesc);

//5
let arrHalfZeroed = [...arr];
let half = Math.floor(arrHalfZeroed.length / 2);
for (let i = half; i < arrHalfZeroed.length; i++) {
    arrHalfZeroed[i] = 0;
}
console.log("2-га половина нулі:", arrHalfZeroed);

//6
let removedFirst3 = arr.slice(3);
console.log("Після видалення перших 3-х:", removedFirst3);

//7
let allEqual = arr.every(val => val === arr[0]);
console.log("Всі однакові:", allEqual);

//8
let newArr = arr.slice(1, arr.length - 1);
console.log("Без крайніх елементів:", newArr);
