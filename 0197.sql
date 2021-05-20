SELECT b.id AS Id
FROM Weather AS a JOIN Weather AS b
ON a.recordDate + INTERVAL 1 DAY = b.recordDate
WHERE a.Temperature < b.Temperature