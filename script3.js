const list = [1,200,3,40,5,60,7,8,90,10,11,120,13,140,15,16,170,18,190,20]
// 1.
const result = list.filter(luvut);

function luvut(luku) {
  return luku >= 10 && luku <= 30;
}
console.log(result);

// 2.
const newArr = list.map(myFunction)

function myFunction(num) {
  return num + 5;
}
console.log(newArr);

// 3.
const juttu = list.find((element) => element > 20);
console.log(juttu);

// 4.
const miau = list.sort(function(a, b){return a-b});
console.log(miau);

// 5.
function checkPalindrome(string) {

    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('On');
    }
    else {
        console.log('Ei oo');
    }
}
const string = "Miau"

checkPalindrome(string);

// 6.
let tekstii =
`Numero 1
Numero 2
Numero 3
Numero 4
Numero 5
Numero 6
Numero 7
Numero 8
Numero 9
Numero 10`;