/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
arr1 = [1, 2, 3]
arr2 = arr1
arr2.push(4)
console.log("Array 1: " + arr1)
console.log("Array 2: " + arr2)

// Copying an array
arr3 = [4, 5, 6]
arr4 = [...arr3]
arr4.push(7)
console.log("Array 3: " + arr3)
console.log("Array 4: " + arr4)

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { ...obj1, d: 4 }
let obj3 = { ...obj1, b: 5 }
console.log("Obj 1: ", obj1)
console.log("Obj 2: ", obj2)
console.log("Obj 3: ", obj3)

// Copying only part of an array/object

// Make up a new array copying the entirety of different arrays and objects using spread operator and adding some extra elements that do not come from arrays or objects
let arr5 = [ ...arr1, {...obj1}, ...arr3, "x", "y", "z"]
console.log("Array 5: ", arr5)
