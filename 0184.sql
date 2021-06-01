SELECT 
    D.Name AS Department, 
    E.Name AS Employee,
    E.Salary
FROM Employee AS E
    JOIN Department AS D
    ON E.DepartmentId = D.Id
WHERE (E.DepartmentId, E.Salary) IN
(
    SELECT DepartmentId, MAX(Salary)
    FROM Employee
    GROUP BY DepartmentId
);
