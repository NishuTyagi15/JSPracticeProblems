// function volume(l, b, h) {
//     return l*b*h;
// }

// volume(1, 2, 3);
// volume(3, 4, 7);


function volume(l) {
    return b => {
        return h => {
            return l*b*h;
        }
    }
}

const vol = volume(2);
const vol1 = vol(4);

console.log(vol1(2));
console.log(vol1(3));
console.log(vol1(4));

// const vol2 = vol1(6);
// console.log(vol2);

// const vol3 = volume(2)(4)(6);
// console.log(vol3);