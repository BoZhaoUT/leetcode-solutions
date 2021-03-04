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
        // circular requirement
        if (courseToPrerequisites[prerequisite] && courseToPrerequisites[prerequisite].has(course)) {
            return false
        }
        i++
    }

    // all courses have prerequisites, there must be at least one circular prerequisite
    if (Object.keys(courseToPrerequisites).length === numCourses) {
        return false
    }

    // check the prerequisites of all courses
    i = 0
    let courses = new Set() // a set of courses that depend on i

    const checkeCircularPrerequisite = (course) => {
        // base case: this course has no prerequisite
        if (!courseToPrerequisites[course]) {
            return true
        }
        // base case: found circular prerequisite
        if (courses.has(course)) {
            return false
        }

        
        let p = 0 // index of prerequisite
        // verify if any of the prerequisite appears to be circular
        // console.log(courseToPrerequisites[p])
        const coursePrerequisites = [ ...courseToPrerequisites[course] ] 
        while (result && p < coursePrerequisites.length) {
            courses.add(course)
            result = checkeCircularPrerequisite(coursePrerequisites[p])
            courses.delete(course)
            p++
        }
        // all prerequisite of this course can be met
        delete courseToPrerequisites[course]
        return result
    }

    while (result && i < numCourses) {
        result = checkeCircularPrerequisite(i)
        courses = new Set()
        i++
    }
    return result
};

console.log(canFinish(2, [[1,0]]))
console.log(canFinish(2, [[1,0], [0,1]]))
console.log(canFinish(3, [[1,0],[0,2],[2,1]]))
