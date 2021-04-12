// Read from stdin
// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// console.log("Enter 2 numbers. Press 'Enter' after putting each number.")
// console.log("Press Ctrl + D after the 2nd number is entered.")

// process.stdin.on('data', data => input_stdin += data);

// process.stdin.on('end', () => {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// })

// const readLine = () => input_stdin_array[input_currentline++];

// const addNumbers = (a, b) => a + b

// function main() {
    
//     var a = parseInt(readLine());
//     var b = parseInt(readLine());;

//     var res = addNumbers(a, b);
//     console.log("The sum is " + res);
// }


// read from a file
const fs = require('fs');
const readline = require('readline');

const processLineByLine = async () => {
    const fileStream = fs.createReadStream("common.js")

    const reader = readline.createInterface({
        input: fileStream
    })

    for await (const line of reader) {
        console.log(`Line from file: ${line}`)
    }
}

processLineByLine()
