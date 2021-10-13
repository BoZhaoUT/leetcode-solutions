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

// infix operator notatoin (only works with method take exactly 1 param)
"abcde" take 3 // value.method(param) <=> value method param

null // has its own type of Null. Using nulll in Scala is considered bad practice

Unit // can also be written as () or {}

// create an empty object with name Bob
// this is an unuseful object
object Alice {}

object Bob {
  // fields
  val firstName: String = "Bob"
  var age: Int = 10
  

  // methods
  def name: String = "bob's first method" // method without param

  def hello(name: String): String = "Hello " + name // method with param
}

println(Bob.name) // bob's first method
println(Bob.hello("little Bob")) // Hello little Bob
// Bob.type can be used as its type


// for method overloading - Scala can automatically only incrase the precision
// e.g. Object.square(value: Double) can be called as Object.square(2)
// the other way doesn't work
// e.g. Object.square(value: Int) cannot be used as Object.square(2.0), it throws an error



object Person {
  val firstName = "first"
  val lastName = "last"
}

object Alien {
  def greet(person: Person.type): String = "Hello " + person.firstName 
}

// Scala built-in test library
// assert(square(2.0) == 4.0)


// class with contructor
class Person(first: String, last: String) {
  val firstName = first
  val lastName = last
  def name = firstName + " " + lastName
}

// class with short-hand contructor
class Person(val firstName: String, val lastName: String) {
  def name = firstName + " " + lastName
}


// class with short-hand contructor and default values
class Person(val firstName: String = "Bob", val lastName: String = "B") {
  def name = firstName + " " + lastName
}




// the apply method
class Adder(amount: Int) {
  // this is a special method, it makes object.method(param) becomes object(param)
  def apply(in: Int): Int = in + amount
}

val myAdder = new Adder(3)
myAdder.apply(2) // 5
myAdder(4) // 7


// Scala static methods
class Timestamp(val seconds: Long)

// Scala use a "companion object" to define static methods
// this object Timestamp is also called a singleton object
object Timestamp {
  def apply(hours: Int, minutes: Int, seconds: Int): Timestamp
    = new Timestamp(hours * 60 * 60 + minutes * 60 + seconds)
}


class Person(val firstName: String, val lastName: String) {
  def name: String = s"$firstName $lastName"
}

object Person {
  def apply(val name): Person {
    val parts = name.split(" ")
    new Person(parts[0], parts[1])
  }
}

val newPerson = Person.apply("John Doe") // long syntax
val newPerson2 = Person("John Doe") // short syntax using the apply magic


// case class has the following built-in features
// 1. this.param for each constructor param
// 2. a human readable toString method
// 3. .equals and == compare constructor params
// 4. copy method that create a new objec with teh same constructor params
case class Person(firstName: String, lastName: String) { 
  def name = firstName + " " + lastName
}

// case object is used when there is a case class with on constructor
case object Citizen {
  def firstName = "John"
  def lastName  = "Doe"
  def name = firstName + " " + lastName
}


// trait is similar to Java's interface and abstract class
trait Visitor {
  def id: String
  def createdAt: Date
  def ageOnSite: Long = new Date().getTime - createdAt.getTime
}

case class Anonymous(
  id: String,
  createdAt: Date = new Date()
) extends Visitor

case class User(
  id: String,
  email: String,
  createdAt: Date = new Date()
) extends Visitor


// p89