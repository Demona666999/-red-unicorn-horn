// Задание 7.7.1
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
    name: 'Маршел',
    age: 24
};
printInfo.call(person);

// Задание 7.7.2
function calculate(a, b, operator) {
 switch(operator) {
 case '+':
 return a + b;
 case '-':
 return a - b;
 case '*':
 return a * b;
 case '/':
 return a / b;
 default:
 return 'Неизвестный оператор';
 }
}
    const params = {
 a: 2,
 b: 3,
 operator: '+'
}; 
const arrayParams = [2, 3, '+'];
const result1 = calculate.apply(params, [params.a, params.b, params.operator]);
const result2 = calculate.apply(this, arrayParams);
console.log(result1);
console.log(result2);

// Задание 7.7.3
const users = [
    { name: 'Марселин', age: 1021 },
    { name: 'Фин', age: 14 },
    { name: 'Джейк', age: 14 },
    { name: 'Жвачка', age: 827 },
    { name: 'Пламя', age: 16 },
    { name: 'Ливнирог', age: 19 },
    { name: 'Снежный', age: 1057 }
];
const immortal = users.filter(user => user.age >= 18);
// console.log(immortal); почему-то выводится просто объект объект объект объект хз не поняла
immortal.forEach(user => {
    console.log(`Имя: ${user.name}, Возраст: ${user.age}`);
});
const names = immortal.map(user => user.name);
console.log(names); 

// Задание 7.7.4
// не поняла какой из предыдущих примеров с персонами я должна тут использоваьь и откуда взялся джон смит

// Задание 7.7.5

function getUniqueSortedArray(arr) {

    const uniqueSet = new Set(arr);
    
    const uniqueArray = Array.from(uniqueSet);
    
    uniqueArray.sort((a, b) => a - b);
    
    return uniqueArray;
}
const numbers = [2, 3, 3, 1, 2, 4, 6, 6, 5, 3, 4];
const uniqueSortedNumbers = getUniqueSortedArray(numbers);

console.log(uniqueSortedNumbers);