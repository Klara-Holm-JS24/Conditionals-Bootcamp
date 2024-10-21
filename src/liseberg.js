//Lisebergsvakten
let height = prompt('please enter your height in cm')

console.log(150 < height)

//Lisebergsvakten 2
const accessLevel = prompt('Vilket är ditt åkband, small, medium, large eller platinum')
if (accessLevel == 'large' || accessLevel == 'platinum') {
    console.log('Grattis, du får åka Balder!')
} else {
    console.log('Tyvärr, du behöver ett annat åkband för att få åka Balder...')
}
