/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let i = 0
    let result = true
    const courseToPrerequisites = {}
    while (i < prerequisites.length) {
        const [course, prerequisite] = prerequisites[i]
        if (!courseToPrerequisites[course]) {
            courseToPrerequisites[course] = new Set([prerequisite])
        } else {
            courseToPrerequisites[course].add(prerequisite)
        }
        // the circular requirement
        if (courseToPrerequisites[prerequisite] && courseToPrerequisites[prerequisite].has(course)) {
            return false
        }
        i++
    }

    const checkeCircularPrerequisite = (course, courses) => {
        // base case: this course has no prerequisite OR it has no circular prerequisite
        if (!courseToPrerequisites[course] || checked[course]) {
            return true
        }
        // base case: found circular prerequisite
        if (courses.has(course)) {
            return false
        }

        for (prerequisite of courseToPrerequisites[course]) {
            checkeCircularPrerequisite(course, new Set([ ...courses, course]))
        }
        checked[course] = true
    }

    // check the prerequisites of all courses
    const checked = Array(numCourses).fill(false)
    i = 0
    while (i < checked.length) {
        checkeCircularPrerequisite(i, new Set())
        i++
    }
    return result
};

console.log(canFinish(2, [[1,0]]))
console.log(canFinish(2, [[1,0], [0,1]]))
console.log(canFinish(3, [[1,0],[0,2],[2,1]]))

