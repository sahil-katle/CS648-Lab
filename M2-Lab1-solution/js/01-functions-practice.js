// Half Number
function halfNumber(num) {
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

// Square Number
function squareNumber(num) {
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

// Percent Of
function percentOf(num1, num2) {
    let result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

// Find Modulus
function findModulus(num1, num2) {
    let result = num1 % num2;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}

// Test calls 
halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(10, 4);
