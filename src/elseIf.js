//Biggest
const firstNumber = prompt('please enter a number');
const secondNumber = prompt('please enter another number');


if (firstNumber < secondNumber) {
    console.log('The bigger number is ' + secondNumber)
} else {
    console.log('The bigger number is ' + firstNumber)
}

//Even or Not
const number = prompt('please enter a number again')

if (number % 2 == 0) {
    console.log(number + ' is an even number.')
} else if (number % 2 == 1) {
    console.log(number + ' is an odd number.')
} else {
    console.log("I really don't know what " + number + ' is...')
}
