// Задание 6.6.1 
function isPalindrome(text) {
    text = text.toLowerCase()
    let left = 0;
    let right = text.length - 1;

    while (left < right) {
        if (text[left] !== text[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
const text = "довод";
const result = isPalindrome(text);
console.log(`Слово "${text}" ${result ? "палиндром" : "не палиндром"}`);

// Задание 6.6.2 
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
const arrUniq = [...new Set(arr)];
console.log(arrUniq);

// Задание 6.6.3 
const userInput = prompt("Введите число:");
if (userInput === null || userInput === '') {
    console.log("Вы не ввели число");
    return;
}
const number = Number(userInput);
if (isNaN(number)) {
    console.log("Введено некорректное значение");
    return;
}
const resultArray = [];
for (let i = 0; i <= number; i++) {
    resultArray.push(i);
}
console.log("Массив чисел:", resultArray);

// Задание 6.6.4
const size = 3;
let Field = '';

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      row += 'X ';
    } else {
      row += 'O ';
    }
  }
  Field += row + '\n';
}
console.log(Field);

// Задание 6.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = [];
for (let key in obj) {
    if (Array.isArray(obj[key])) {
        arrValues = arrValues.concat(obj[key]);
    } else {
        arrValues.push(obj[key]);
    }
}
console.log(arrValues);