
console.log("Іменований експорт (основний): 01-test");


// // Це працює
// export const d = 555;

// export function add(a, b) {
//     return a+b;
// }

// export function sub(a, b) {
//     return a-b;
// }



// Це теж працює
const d = 555;

function add(a, b) {
    return a+b;
}

function sub(a, b) {
    return a-b;
}

export {d, add, sub};