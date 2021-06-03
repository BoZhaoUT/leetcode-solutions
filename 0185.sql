SELECT 
    D.Name AS Department,
    E1.Name AS Employee,
    E1.Salary AS Salary
FROM 
    Employee AS E1
    JOIN Department AS D
    ON E1.DepartmentId = D.Id
WHERE
    3 > (
        SELECT COUNT(DISTINCT E2.Salary)
        FROM Employee AS E2
        WHERE E2.Salary > E1.Salary AND
            E1.DepartmentId = e2.DepartmentId
    )


--          Employee table
--
-- | Id | Name  | Salary | DepartmentId |
-- +----+-------+--------+--------------+
-- | 1  | Joe   | 85000  | 1            |
-- | 2  | Henry | 80000  | 2            |
-- | 3  | Sam   | 60000  | 2            |
-- | 4  | Max   | 90000  | 1            |
-- | 5  | Janet | 69000  | 1            |
-- | 6  | Randy | 85000  | 1            |
-- | 7  | Will  | 70000  | 1            |
-- +----+-------+--------+--------------+


-- the inner query selects how many salary is strictly larger in a department
--          Inner Query

--
-- | Id | Name  | Salary | DepartmentId | number of unique salaries greater  
-- |    |       |        |              | than itself in this department
-- +----+-------+--------+--------------+---------------------------
-- | 1  | Joe   | 85000  | 1            | 1 <- [90000]
-- | 2  | Henry | 80000  | 2            | 0 
-- | 3  | Sam   | 60000  | 2            | 1 <- [90000]
-- | 4  | Max   | 90000  | 1            | 0
-- | 5  | Janet | 69000  | 1            | 3 <- [85000, 90000, 70000]
-- | 6  | Randy | 85000  | 1            | 1 <- [90000]
-- | 7  | Will  | 70000  | 1            | 2 <- [85000, 90000]
-- +----+-------+--------+--------------+

