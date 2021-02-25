let array = [5,9,8,4,10,7,6]
let sequence = [5,10,9]
console.log(isValidSubsequence(array, sequence))

function isValidSubsequence(array, sequence) {
  let array_new = []
  for(let i=0; i<array.length; i++) {
    let num = sequence.includes(array[i])
    if(num == true) {
      array_new.push(array[i])
    }
  }

  let isValid = 0
  for(let i=0; i<sequence.length; i++) {
    if(sequence[i] === array_new[i]) {
      isValid++
    }
  }

  if(isValid === sequence.length) {
    return true
  } else {
    return false
  }
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;