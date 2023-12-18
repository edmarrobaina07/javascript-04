const list = [20, 3, 234, 12, 17, 541, 7, 87, 1000]

const newList = list.filter( number => {
    if(number > 100) return true
    else return false
})

console.log(newList)