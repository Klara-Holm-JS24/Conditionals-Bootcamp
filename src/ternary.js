//Adult or minor
let age = 18
let person

age >= 18 ? person = 'adult' : person = 'minor';

console.log(person)

//Positive, Negative or Zero
let number = -4

number > 0 ? console.log('positive'): 
    number < 0 ? console.log('negative'):
    console.log('zero')

//Pass or Fail
let score = 71

score >= 60 ? console.log('Passed'): console.log('failed');

//Discount Eligibility
let customerType = 'member'

customerType === 'member' ? console.log('eligible'):
customerType === 'non-member' ? console.log('not eligible'):
console.log('unexpected value');