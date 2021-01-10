/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let result = [""]
    path = path.split("/")
    path.forEach(curr => {
        if (curr === ".." && result.length !== 1) {
            result.pop()
        } else if (curr !== "." && curr !== "" && curr !== "..") {
            result.push(curr)
        }
    })
    if (result.length === 1) {
        return "/"
    }
    return result.join("/")
};
