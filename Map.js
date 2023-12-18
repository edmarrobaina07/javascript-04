/*
Map - mapear o array.

*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map( (item) => {
    const newItem = item * 2
    return newItem
})

console.log(double)
