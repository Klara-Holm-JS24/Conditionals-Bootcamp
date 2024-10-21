//BMI kalkylator
const height = prompt('please enter your height in cm') / 100
const weight = prompt('please enter your weight in kgs')

const BMI = weight / (height * height)

let classification

if (BMI < 18.5) {
    classification = 'underweight'
} else if (BMI < 25) {
    classification = 'normal weight'
} else if (BMI < 30) {
    classification = 'overweight'
} else {
    classification = 'obese'
}

console.log('Your BMI is ' + BMI + ' and classified as ' + classification + '.')