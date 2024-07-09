//sab se chota number of array
var numbers = []
for (var i = 0; i < 5; i++ ) {
    var num = +prompt("Enter a number")
    numbers.push(num);
    }
var sabseChotaNumbber = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < sabseChotaNumbber) {
        sabseChotaNumbber = numbers[i]
    }
}
console.log({sabseChotaNumbber})