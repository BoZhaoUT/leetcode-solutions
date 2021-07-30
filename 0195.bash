# + makes it start from the beginning of the file
tail -n+10 file.txt | head -1


# doesn't work if the number of lines is less than 10
# it will print the last line
# head -10 file.txt | tail -1 