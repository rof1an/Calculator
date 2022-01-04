let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');

let plusBtn = document.querySelector('.plus');
let minusBtn = document.querySelector('.minus');
let devideBtn = document.querySelector('.devide');
let multiplyBtn = document.querySelector('.multiply');

let clearBtn = document.querySelector('.clear');

let resultText = document.querySelector('.result');

clearBtn.addEventListener('click', function(){
	resultText.innerText = '';
	numberOne.value = '';
	numberTwo.value = '';
})

plusBtn.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value);
	let numTwo = parseInt(numberTwo.value);
  let sum = numOne + numTwo;

	resultText.innerText = sum;
});

minusBtn.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value);
	let numTwo = parseInt(numberTwo.value);
	let minus = numOne - numTwo;

	resultText.innerText = minus;
});

devideBtn.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value);
	let numTwo = parseInt(numberTwo.value);
	let devide = numOne / numTwo;

	resultText.innerText = devide;
});

multiplyBtn.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value);
	let numTwo = parseInt(numberTwo.value);
	let multiply = numOne * numTwo;

	resultText.innerText = multiply;
});