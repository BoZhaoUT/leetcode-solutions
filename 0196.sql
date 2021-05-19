DELETE FROM Person WHERE Id NOT IN 
    (SELECT * FROM 
        (SELECT MIN(Id) FROM Person GROUP BY Email)
     AS P)
-- 'AS P' prevents Every derived table must have its own alias error