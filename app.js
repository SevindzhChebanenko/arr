"use strict"

const arr = [1, 2, 3, 6, 7]

arr.pop()
arr.push(10)

console.log(arr);

for (let value of arr) {
    console.log(value)
}

console.log(arr)


arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`)
})