const n = 3
const m = 3

// create an empty list of length n
const array = Array(n).fill(false)

// create one m by n matrix
const matrix = Array(m).fill().map(() => Array(n).fill(false))
matrix[0][0] = true

// create a shallow copy of an array
const arrayShallow = [...array]

// create a shallow copy of a matrix
const matrixShallow = [...matrix.map(row => [...row])]

console.log(matrix)
