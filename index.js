function double2(arr) {
  return arr.map(function (val) {
    return val * 2
  })
}

const array = [1, 2, 3, 4, 5]

const double = (arr) => arr.map((val) => val * 2)

double(array)

function squareAndFindEvens2(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2
  })
  var evens = squares.filter(function (square) {
    return square % 2 === 0
  })
  return evens
}

const numsArray = [1, 2, 3]

const squareAndFindEvens = (numbers) =>
  numbers.map((val) => val ** 2).filter((square) => square % 2 === 0)

console.log(squareAndFindEvens(numsArray))
