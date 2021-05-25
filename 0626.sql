SELECT
    CASE
        # id is odd AND not the last id      
        WHEN id % 2 = 1 AND id != (SELECT COUNT(*) FROM seat)
            THEN id + 1
        # id is even
        WHEN id % 2 = 0
            THEN id - 1
        # the last id AND it's odd
        ELSE
            id
    END
    id, student
FROM seat
ORDER BY id


# SELECT 
#     (CASE WHEN MOD(id,2)=1 AND id!=(SELECT COUNT(*) FROM seat) THEN id+1
#     WHEN MOD(id,2)=0 THEN id-1
#     ELSE id END)id, student
# FROM seat
# ORDER BY 1