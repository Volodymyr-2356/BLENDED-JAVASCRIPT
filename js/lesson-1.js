// TASK 1
// const number = Number(prompt("Vvedit chislo:"));
// number === 10 ? alert("virno") : alert("nevirno");


// Task2


// const min = Math.floor(Math.random() * 59);
// if (min <= 15) {
//     alert(`${min} enter  in 1  `);
// }
// else if (min <= 30) {
//      alert(`${min} enter  in 2  `);
// }
// else if (min <= 45) {
//     alert(`${min} enter  in 3  `);
    
// }
// else {
//     alert(`${min} enter  in 4  `);
// }


// TASK3

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


// const num = Number(prompt("Введи чло від 1до 4:"));
// let result = "";
// switch (num) {
//     case 1: result=`Winter`;
//         break;
//     case 2:   result="SPring";
//         break;
//       case 3:   result="Autumn";
//         break;
//       case 4:  result="Summer";
//         break;
//     default:  alert(`not a number`);
// }
// console.log(result);


// TASK4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples


// const num = Number(prompt("VVedit Chislo:"));
// let hour = Math.floor(num / 60);
// let min = num % 60;

// console.log(`${hour.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}`);


// TASK 5
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"


// let login = prompt("VVedit LOgin:");


// if (login === "Admin") {
//     const password = prompt("Vvedit PArol:");
//     if (password = "Я головний") {
//         alert(`Good morninh!`)
//         else {
//             alert(`FOOOO`);
//         }
//     }
// }
// console.log(login);




//  TASK 6

// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i+=2;
// }


// TASK 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     let res = 0;
//     for (let i = max; i >= min; i--) {
//         console.log(i);
//         if (i % 2 === 0) {
//             res += i;
//         }
//     }
//     return res;
// }
// console.log(getNumbers(1,10))

// TASK 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.


// function min(a, b) {
//     if (typeof a !== 'number' ||typeof b !== "number") {
//         return `not a number`;
//     }
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
        
//     }
// }


// console.log(min(5, 10));

// TASK 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (age >= 18) {
//         return true
//     }
//     else {
//         return confirm("no 18 do you agree?")
//     }
// }

// console.log(isAdult(17));

// TASK 10

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.




// function fizzBuzz(num) {
//     let result = "";
//     for (let i = 1; i <= num; i++) {
    
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log( `fizzbuzz`);
//         }
//         else if (i% 5 === 0) {
//             console.log(`buzz`);
//         }
//         else if (i % 3 === 0) {
//             console.log(`fizz`);
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// console.log(fizzBuzz(15))

// function fizzBuzz(num) {
//     const result = [];

//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push("fizzbuzz");
//         } else if (i % 3 === 0) {
//             result.push("fizz");
//         } else if (i % 5 === 0) {
//             result.push("buzz");
//         } else {
//             result.push(i);
//         }
//     }

//     return result;
// }

// console.log(fizzBuzz(15));

// function getLastElementMeta(array) {
//     // let firstElement = array[0];
//     //  let lastElement= array[array.length-1];
//      return [array[0],array[array.length-1]];
//     // return [firstElement, lastElement];

   
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]))

// function getLastElementMeta(array) {
//     let lastIndex = array.length - 1;
//     let lastElement = array[lastIndex];

//     return [lastIndex, lastElement];
// }

// // Приклади
// console.log(getLastElementMeta(["apple", "banana", "cherry"])); // [2, "cherry"]


// const array = ["123"];
// const a = array.toString();
// console.log(a);
// console.log(array + "5");
// console.log(`${array} 5sa`)

// console.log(Number(array));

// function getLength(array) {
//   const a= array.join("");
//     return a.length;

// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

// const a = [1, true, 3, 4, 6,  ,2, , ];
// console.table(a);
// console.log(a.length);
// a[10] = "10";
// console.log(a.length-1);
// console.log(a[-1]);

// function createArrayOfNumbers(min, max) {

//   const tags=[];

//   for (let i=min;i<=max;i++){
//     tags.push(`${i}`);
//   }

//   return tags;
// }

// console.log(createArrayOfNumbers("asdsa","da"));


