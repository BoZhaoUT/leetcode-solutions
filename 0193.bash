grep -e '^[0-9]\{3\}-[0-9]\{3\}-[0-9]\{4\}$' -e '^([0-9]\{3\}) [0-9]\{3\}-[0-9]\{4\}$' file.txt

# ^ includes the first char
# [0-9] any digit
# \{n\} repeat exactly n times
# $ includes the last char

# https://leetcode.com/problems/valid-phone-numbers/discuss/55478/Grep-e-solution-with-detailed-explanation-good-for-those-new-to-regex