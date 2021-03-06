/**
 문법
 export { name1, name2, ..., nameN };
 export { variable1 as name1, variable2 as name2, ..., nameN };
 export let name1, name2, ..., nameN; // 또는 var
 export let name1 = ..., name2 = ..., ..., nameN; // 또는 var, const

 export expression;
 export dafault expression;
 export default function (...) { ... } // 또는 class, function*
 export default function name1(...) { ... } // 또는 class, function*
 export { name1 as default, ... };

 export * from ...;
 export { name1, name2, ..., nameN } from ...;
 export { import1 as name1, import2 as name2, ..., nameN } from ...;
 */

const PI = 3.14;

function plus(a, b) {
    let value = a + b;
    console.log(a + "+" + b + " = " + value);
    return value;
}

function minus(a, b) {
    let value = a - b;
    console.log(a + "-" + b + " = " + value);
    return value;
}

function multiply(a, b) {
    let value = a * b;
    console.log(a + "*" + b + " = " + value);
    return value;
}

function division(a, b) {
    let value = a / b;
    console.log(a + "/" + b + " = " + value);
    return value;
}

function mode(a, b) {
    let value = a % b;
    console.log(a + "%" + b + " = " + value);
    return value;
}

module.exports = {
    PI,
    plus,
    minus,
    multiply,
    division,
    mode
};