
// Multiply ------------------------------------------------------------------------------------------------------------------------------
function Multiply(num1, num2) {
    return num1 * num2;
}

(num1, num2) => {
    return num1 * num2;
}


function ValidateVariableType(variable1, variable2) {

    if ((typeof (variable1) === "number") && (typeof (variable2) === "number")) {
        console.log("Both variables are numbers");
    } else {
        console.log("At least one of the variables is not a number");
    }
}

console.log("\n- Multiply: ");
ValidateVariableType(9, 5);
ValidateVariableType(10, "Legolas");
ValidateVariableType("Raul", "Yoda");



// Exponent ------------------------------------------------------------------------------------------------------------------------------
function exponent(num1, num2) {
    var result = 1;
    for (var i = 1; i <= num2; i++) {
        result *= num1;
    }
    return result;
}

console.log("\n- Exponent: ");
console.log(`The result is : ${exponent(2, 5)}`);




// Add up  ------------------------------------------------------------------------------------------------------------------------------
function GaussRule(num) {
    console.log(`The result for ${num} is: ${(num * (num + 1)) / 2}`);
}

console.log("\n- Add up: ");
GaussRule(4);
GaussRule(13);
GaussRule(600);



// Cubed --------------------------------------------------------------------------------------------------------------------------------
function SumOfCubes(num1, num2, num3) {

    var num1x = exponent(num1, 3);
    var num2x = exponent(num2, 3);
    var num3x = exponent(num3, 3);
    console.log(`The sum of the cubes of ${num1}, ${num2}, and ${num3} is ${num1x + num2x + num3x}`);
}

console.log("\n- Cubed: ");
SumOfCubes(1, 5, 9);



// String check ---------------------------------------------------------------------------------------------------------------------------
function StringCheck(start, string) {
    for (var i = 0; i < start.length; i++) {
        if (start[i] != string[i]) {
            return "false";
        }
    }
    return "true";
}

console.log("\n- String check:");
console.log(StringCheck("Luis", "Raul"));
console.log(StringCheck("Rau", "Raul"));



// Count occurrences ------------------------------------------------------------------------------------------------------------------------
function CountOccurrences(string, letter) {
    var counter = 0;
    var stringLowerCase = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (stringLowerCase[i] === letter) {
            counter++;
        }
    }
    console.log(`The letter "${letter}" is ${counter} times in the string: \n"${string}". `);
}

console.log("\n- Count occurrences: ");
CountOccurrences("Una mezcla de da Vinci, resolviendo el acertijo, hijo, no me es tan dificil", "i");