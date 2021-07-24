object Solution {
    // you need treat n as an unsigned value
    def reverseBits(x: Int): Int = {
        var num: Int = x
        var i = 0
        var reversed = ""
        // convert x from Int to String and reverse it
        // x.toString doesn't work because Int.toString implicitly interpet x as a decimal number
        for (i <- 0 to 31) {
            // grab the last digit
            reversed += (num % 2).toString
            // get rid of the last digit
            num = num / 2
        }
        // it throws "java.lang.NumberFormatException"
        // toInt only works for int has at most 8 or 9 digits
        return reversed.toInt 
    }
}
