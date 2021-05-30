CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  -- LIMIT doesn't recognize expressions, so calculation must be done in advance
  -- M is the offset in the query
  DECLARE M INT;
  SET M = N - 1;

  RETURN (
      SELECT DISTINCT Salary
      FROM Employee
      ORDER BY Salary DESC
      LIMIT M, 1
  );
END

-- CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
-- BEGIN
-- DECLARE M INT;
-- SET M=N-1;
--   RETURN (
    --   # Write your MySQL query statement below.
    --   SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT M, 1
--   );
-- END
