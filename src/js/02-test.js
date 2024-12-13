
console.log("Дефолтний експорт (Класи): 02-test");

// V1
// const s = 15;
// export default s;


// V2
// function mult(a, b) {
//     return a*b;
// }
// export default mult;


// V3
function mult(a, b) {
    return a*b;
}

function div(a, b) {
    return a/b;
}

export default {mult, div};