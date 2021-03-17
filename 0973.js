/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    // O(n) time
    // add distance from origin to each coordinate
    points.forEach(point => point.push(distanceFromOrigin(point)))
    // sort based on distance
    // O(n log n) time
    points.sort((a, b) => a[2] - b[2])
    // take first k points and remove distance
    // O(k) time
    return points.slice(0, k).map(element => element.slice(0, 2))
};

const distanceFromOrigin = coordinate => {
    // calculating sqrt root is not needed as it doesn't affect sorting order
    return coordinate[0] * coordinate[0] + coordinate[1] * coordinate[1]
}

// console.log(kClosest([[1,3],[-2,2]], 1))