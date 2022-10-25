//  1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
function firstTask() {
	let num = 5;
	while (num <= 10) {
		console.log(num);
		num++;
	}
}
// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
	for (let i = 20; i > 10; i--) {
		if (i === 13) {
			break;
		}
		console.log(i);
	}
}
//3. При помощи цикла for выведите чётные числа от 2 до 10 включительно
function thirdTask() {
	for (let i = 2; i < 10; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}
//4. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//  Цикл, который нужно переписать:
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
function fourthTask() {
	let i = 2;
	while (i <= 16) {
		if (i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
		}
	}
}
// 5. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
function fifthTask() {
	const arrayNumbers = [];
	for (let i = 5; i < 11; i++) {
		arrayNumbers[i - 5] = i;
	}
	console.log(arrayNumbers);
	return arrayNumbers;
}
// Продвинутые задания на использование циклов и условий 
// 1. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив.
function firstOfTask() {
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];
	for (let i = 0; i <= arr.length; i++) {
		result[i] = arr[i];
	}
	console.log(result);
	return result;
}
// 2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done". Для определения типа данных используйте typeof(); Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
function secondOfTask() {
	let data = [5, 10, 'Shopping', 20, 'Homework'];
	for (let i = 0; i < data.length; i++) {
		if (typeof (data[i]) === 'number') {
			data[i] = data[i] * 2;
		} else if (typeof (data[i]) === 'string') {
			data[i] = `${data[i]} - done`;
		}
	}
	console.log(data);
	return data;
}

// 3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result. Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
function thirfTask() {
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];
	for (let i = 1; i <= data.length; i++) {
		result[i - 1] = data[data.lenght - i];
	}
	console.log(result[i]);
	return result;
}

// (**) Задача на формирование фигуры
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
		for (let j = 0; j < lines - i; j++) {
			result += " ";
		}
		for (let j = 0; j < 2 * i + 1; j++) {
			result += "*";
		}
		result += "\n";
}

console.log(result)