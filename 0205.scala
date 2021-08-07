import scala.collection.mutable.Map

object Solution {
    def isIsomorphic(s: String, t: String): Boolean = {
        if (s.length != t.length) {
            return false
        }

        val charMap = Map[Char, Char]()

        var i = 0
        var result = true
        while (i < s.length && !result) {
            
            println(charMap)
            if (charMap(s(i)) == t(i)) {
                i += 1
            } else {
                result = false
            }
        }

        return result
    }
}

println(Solution.isIsomorphic("egg", "add")) // true
println(Solution.isIsomorphic("egg", "abc")) // true
