SELECT S1.Score, COUNT(S2.Score) AS 'Rank'
FROM Scores AS S1, (SELECT DISTINCT Score from Scores) AS S2
WHERE S1.Score <= S2.Score
GROUP BY S1.Id
ORDER BY S1.Score DESC;


-- s1              s2
-- 1   3.5         3.5
-- 2   3.65        3.65
-- 3   4           4
-- 4   3.85        3.85
-- 5   4
-- 6   3.65


-- Cartesian product of s1 and s2 where s1.score <= s2.score
-- id  s1      s2
-- 1   3.5     3.5
-- 1   3.5     3.65
-- 1   3.5     4
-- 1   3.5     3.85

-- 2   3.65    3.65
-- 2   3.65    4
-- 2   3.65    3.85

-- 3   4       4

-- 4   3.85    4
-- 4   3.85    3.85

-- 5   4       4

-- 6   3.5     3.5
-- 6   3.5     3.65
-- 6   3.5     4
-- 6   3.5     3.85

-- GROUP BY id
-- 1   3.5     [3.5, 3.65, 4, 3.85]
-- 2   3.65    [3.65, 4, 3.85]
-- 3   4       [4]
-- 4   3.85    [3.85, 4]
-- 5   4       [4]
-- 6   3.5     [3.5, 3.65, 4, 3.85]

-- the idea of this approch is to count how many scores are
-- greater or equal to the current score
