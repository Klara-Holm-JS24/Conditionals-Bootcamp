//Weekdays 
const dayNumber = prompt('please enter a number between 1 and 7')

switch (dayNumber) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log(false);
}

//Months
const monthNumber = prompt('please enter a number between 1 and 12')
switch (monthNumber) {
    case '1':
        console.log('Jan');
        break;
    case '2':
        console.log('Feb');
        break;
    case '3':
        console.log('Mar');
        break;
    case '4':
        console.log('Apr');
        break;
    case '5':
        console.log('May');
        break;
    case '6':
        console.log('Jun');
        break;
    case '7':
        console.log('Jul');
        break;
    case '8':
        console.log('Aug');
        break;
    case '9':
        console.log('Sep');
        break;
    case '10':
        console.log('Oct');
        break;
    case '11':
        console.log('Nov');
        break;
    case '12':
        console.log('Dec');
        break;
    default :
        console.log(false);
}