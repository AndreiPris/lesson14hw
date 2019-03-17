const x = prompt('Write your number');
const n = prompt('Write your number');
console.log(parseInt(x));
console.log(parseInt(n));
const result = Math.pow(x, n);
const resultString = " x = " + x + " , n = " + n + " equals " + result;
alert(resultString);
parseInt(resultString);
document.querySelector(".result").innerHTML = resultString