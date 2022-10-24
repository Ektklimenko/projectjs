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
console.log(typeof(answer));

const answer = +prompt("Are ypou 18?", "18");
console.log(answer + 5);

const answers = [];
answers[0] = prompt('What are you name?', '');
answers[1] = prompt('What are you last name?', '');
answers[2] = prompt('How are you?', '');
console.log(typeof(answers));

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
console.log(5%2);

//СРАВНИТЬ ==
console.log(2*4 ==8);
console.log(2*4 =='8');
console.log(2+2*2 !==8);
console.log(2+2*2 ===8);
console.log(2+2*2 !=8);
//СТРОГОЕСРАВНЕНИЕ ===
console.log(2*4 ===8);
// И && ИЛИ  ||

const isChecked = true,
		isClose = true;
		console.log(isChecked && isClose);


//ОТРИЦАНИЕ !
const isChecked = true,
		isClose = true;
		console.log(isChecked && !isClose);