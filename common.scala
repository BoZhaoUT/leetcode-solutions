// create an array with size 5 and fill it with false
val array = Array.fill(5)(false)

// create a new array with length 5
val array = new Array[Int](5)

// create a new array [5]
val array = Array[Int](5)

// print an array, separating each element by " "
println(array.mkString(" "))

// Array.push()
array = array :+ 1

// Array.addHead()
array = array +: 1

// index for loop
// for (i <- 1 to 5) {
// }

// check a type in Scala console
// :type 2

// take the frist n characters from a string
"abcde".take(3) // "abc"
"abcde".take(99) // "abcde"

// p31