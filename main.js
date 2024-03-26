function fibonacciSequence(n) {
    var fibonacciArray = [];
    var num1 = 0;
    var num2 = 1;
    fibonacciArray.push(num1);
    fibonacciArray.push(num2);
    for (var i = 2; i < n; i++) {
        var nextNum = num1 + num2;
        fibonacciArray.push(nextNum);
        num1 = num2;
        num2 = nextNum;
    }
    return fibonacciArray;
}

function displayFibonacciSequence(sequence) {
    console.log("De eerste 20 getallen in de Fibonacci-reeks zijn:");
    for (var i = 0; i < sequence.length; i++) {
        console.log(sequence[i]);
    }
}

var fibonacciArray = fibonacciSequence(20);
displayFibonacciSequence(fibonacciArray);
