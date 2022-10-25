"use strict";
//11.ЗНАЧЕНИЯ
//числа
let number = 4.6;
console.log(-4 / 0);
console.log('string' * 9);

//строка
const persone = "alex";
//boolean
const bool = true;
const bool1 = false;
//underfind
let und;
console.log(und);
//Object
const obj = {
	name: "John",
	age: 25,
	isMarried: false
};
// console.log(obj.name);
console.log(obj["name"]);
//массивы    0             1        2       3       4   5
let arr = ['plm.png', 'orange.jpg', 6, 'apple.bmp'. [], {}];
console.log(arr[0]);

//12.РАЗНИЦА МЕЖДУ ОБЬЕКТАМИ И МАССИВАМИ И НЕОЧЕВИДНЫЕ СИНТАКСИЧЕСКИЕ ВОЗМОЖНОСТИ

//масивы
const arr = ['a', 'b', 'c'];
const arrObj = {
	a: 'a',
	1: 'b',
	2: 'c',
	abc: {
		df: [{}, {}],
		def: {

		}
	}
};
// const b = 'b';
arrObj.b = '123';
arrObj['b'] = '123';
console.log(arrObj['b']);
console.log(arrObj.b);
//объекты
// const obj = {a: 1, b: 2};
const obj = {
	'Anna': 500,
	'Elis': 800
};
// 13. ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

console.log('Hello');
alert('Hello');

const result = confirm("Are you here?");
console.log(result);

const answer = prompt("Are ypou 18?", "18");
console.log(typeof (answer));

const answer = +prompt("Are ypou 18?", "18");
console.log(answer + 5);

const answers = [];
answers[0] = prompt('What are you name?', '');
answers[1] = prompt('What are you last name?', '');
answers[2] = prompt('How are you?', '');
console.log(typeof (answers));

//14.ИНТЕРПОЛЯЦИЯ (ES6)
const category = 'toys';
console.log(`https://comeurl.com/${category}/5`);

const user = 'Ivan';
alert(`hello, ${user}`);

//15.ОПЕРАТОРЫ В JS

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + + " - object");
console.log(4 + + "5");

let incr = 10,
	decr = 10;
//postfixs
incr++;
decr--;
//prefixs
++incr;
--decr;

console.log(incr);
console.log(decr);
//ДЕЛИТЬ %
console.log(5 % 2);

//СРАВНИТЬ ==
console.log(2 * 4 == 8);
console.log(2 * 4 == '8');
console.log(2 + 2 * 2 !== 8);
console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8);
//СТРОГОЕСРАВНЕНИЕ ===
console.log(2 * 4 === 8);
// И && ИЛИ  ||

const isChecked = true,
	isClose = true;
console.log(isChecked && isClose);


//ОТРИЦАНИЕ !
const isChecked = true,
	isClose = true;
console.log(isChecked && !isClose);



// 19. УСЛОВИЯ

if (4 == 9) {
	console.log("OK");
} else {
	console.log('Error')
}

const num = 50;

if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log("much");
} else {
	console.log("OK");
}
// ternarni argument
(num === 50) ? console.log('ok') : console.log("error");
const num = 50;
switch (num) {
	case 49:
		console.log("error");
		break;
	case 100:
		console.log("error");
		break;
	case 50:
		console.log("OK");
		break;
	default:
		console.log("jojpsg");
		break;
}
//////////////////////////////

// Логические операторы
const hamburger = 5;
const fries = 0;

if(hamburger && fries) {
	console.log("yummi");
} 
const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola === 1 && fries);

console.log (1 && 0);
console.log (1 && 5);
console.log (null && 5);
console.log (0 && "dgaeger");

const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola === 1 && fries);


if(hamburger === 3 && cola === 1 && fries) {
	console.log("yummi");
} else {
	console.log("we go etc");
}

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if(hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log("yummi");
} else {
	console.log("we go etc");
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

console.log(hamburger || cola || fries);

let johnReport, alexReport, samReport, mariReport = 'done';

console.log(johnReport || alexReport || samReport || mariReport);
//////////////////

// 22. Циклы

let num = 50;

while ( num <= 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
}
while(num < 55);

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		// break;
		continue;
	}
	console.log(i)
}
/////////////

//23. Цикл в цикле и метки
for (let i =0; i <3; i++) {
	console.log(i);
	for (let j =0; j <3; j++) {
		console.log(j);
	}
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

	for (let j = 0; j < i; j++) {
		result += '*';
	}

	result += '\n';
}

console.log(result);

//метки
first: for (let i = 0; i < 3; i++) {
	console.log(`first level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`second level: ${j}`);
	}
	for (let k = 0; k < 3; k++) {
		if (k === 2) continue first;
		console.log(`Third level: ${k}`);
	}
}

first: for (let i = 0; i < 3; i++) {
	console.log(`first level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`second level: ${j}`);
	}
	for (let k = 0; k < 3; k++) {
		if (k === 2) break first;
		console.log(`Third level: ${k}`);
	}
}
//  25.FUNCTION
//функция/ название функ/ (аргумент функции){код}
//function declaration
let num = 20;
function showFirstMessage(text, arg) {
	console.log(text);
	let num = 10;
	console.log(num);
}
//не забыть вызвать функцию
showFirstMessage('Hello World!');
console.log(num);

function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
	let num = 50;
	//code
	return num;
}
const anotherNum = ret();
console.log(anotherNum);
//function expression
const logger = function () {
	console.log('hello!');
};

logger();

//стрелочная функция ()=>
const calcs = (a, b) => {
	console.log('text');
	return a + b;
};
const calcs1 = (a, b) => a + b;

const usdCurr = 28;
const eurCurr = 32;
function convert(amount, curr) {
	console.log(curr * amount);
}
convert(500, usdCurr);
convert(500, eurCurr);