// slice() method use to breck the array..


//  Example.1:
//slice() method does not make changes in original array..
const arr= ["a","b","c","d","e"]
let pieceArray = arr.slice(2)
console.log(pieceArray)                        // brecked array
console.log(arr)                                  //original array

//output:
//[ 'c', 'd', 'e' ]
// [ 'a', 'b', 'c', 'd', 'e' ]

 //original array does not changed




//Example.2:

//we can also pass the ending position
const array = ["a","b","c","d","e"]
let piecearr=array.slice(1,3)
console.log(piecearr)

//output:
//[ 'b', 'c' ]

