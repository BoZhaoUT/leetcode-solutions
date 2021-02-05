
const subsetsWithDup = nums => {
    // sort in increasing order
    nums = nums.sort((a, b) => a - b)

    const result = []

    const helper = (length, start = 0, arr = []) => {

        // base case: arr meets required length
        if (arr.length === length) {
            return result.push([...arr])
        }
        for (let i = start; i < nums.length; i++) {
            // skip used chars
            if (i !== start && nums[i - 1] === nums[i]) {
                continue
            }
            arr.push(nums[i])
            helper(length, i + 1, arr)
            arr.pop()
        }
    }

    for (let length = 0; length <= nums.length; length++) {
        helper(length)
    }

    return result
}

console.log(subsetsWithDup([1,2,2]))

