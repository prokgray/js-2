// Первые три типа базы в JS
// let firstName = 'Lola' //string (строчка)
// firstName = 'Lu'
// let num = 42 //number (Цифра)
// const isProgrammer = true //boolean
/* Основы JS (Конст-Перемен)

Variables (Переменные)
let это переменные мы можем менять их значения на протяжении кода

let num = 42
let firstName = 'Lola'



Constants (Константы)

Постоянные менять их мы не сможем:
const isProgrammer = true 
isProgrammer = false (Здесь будет ошибка) Потому что это константа 

*/

/* Can Do: (То что мы можем делать)
1) $ и _ будет читoться как полноцкнная переменная
Эти символы разрешены

let $ = 'test'
let _ = 49

Примеры:
let $num = 42
let num$ = 42
let _num = 49
let num_ = 76

2) Мы можем создовать переменные состоящие из двух слов
Этот способ  не часто используется из-за лишнего разделительного символа
Лучшим решением будет использовать Camel case
В котором второе слово начиинается с заглавной буквы 

Пример:
let first_name = 'Lola' //bad
let myName = 'Lola' //good

3)Также название переменных могум заканчиваться на цифры
let num1 = 10
*/

/* Restricticted: (Запрещено)

Переменные не могут:
1)Начинаться с цифр
2)Не могут разделяться -
3)Не могут состоять из зарезервированных слов (let, const, true  и тд)

 1)let 42num = '11'
 2)let my-num = '11'
 3)let let = '33'
*/

/*console.log(firstName) (Вывод в консоль)
Выводит "что-то" в консоль
Можно указывать сразу несколько параметров через ,
*/

/* (Операторы:)

1) Оператор присвоения (=)


2) Aрифметические операторы
+ (сложение)
- (вычитание)
(умножение) *
/ (деление)

console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)

let num2 = num + 10
console.log(num, num2) 
num = num2 - num
num2 = num2 + 1
console.log(num, num2)

let num3 = (num + 10)

Для строк срабатывает конкатинация (Соедиинение строк)
const fullName = firstName + ' Maslyanova'
console.log(fullName)

*/

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = '+'

// console.log(input1.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 40



// Пишем обрабодчик события
plusBtn.onclick = function () {
	action = '+'
}

minusBtn.onclick = function () {
	action = '-'
}

multiplyBtn.onclick = function () {
	action = '*'
}

divideBtn.onclick = function () {
	action = '/'
}

function printResult(result) {
	if (result < 0) {
		resultElement.style.color = 'red'
	} else {
		resultElement.style.color = 'green'
	}
	resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
	const num1 = Number(inp1.value)
	const num2 = Number(inp2.value)
	// if (actionSymbol == '+') {
	// return num1 + num2
	// } else if (actionSymbol == '-') {
	// return num1 - num2
	// }
	if (actionSymbol == '*') {
	return num1 * num2
	 } else if (actionSymbol == '/') {
	 return num1 / num2
	 }

	return actionSymbol == '+' ? num1 + num2 : num1 - num2
	// return actionSymbol == '*' ? num1 * num2 : num1 / num2
}

submitBtn.onclick = function () {
	const result = computeNumbersWithAction(input1, input2, action)
	printResult(result)
	//Условные операторы
	// if (action == '+') {
	// 	const sum = Number(input1.value) + Number(input2.value)
	// 	printResult(sum)
	// } else if (action == '-') {
	// 	const sum = Number(input1.value) - Number(input2.value)
	// 	printResult(sum)
	// }
// 	if (action == '*') {
// 		const sum = Number(input1.value) * Number(input2.value)
// 		printResult(sum)
// 	} else  if (action == '/') {
// 	  const sum = Number(input1.value) / Number(input2.value)
// 		printResult(sum)
// }
}
