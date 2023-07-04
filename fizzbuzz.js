for (let i = 0; i <= 100; i++){
    output = "";
    if (i % 3 == 0) {
        output += "fizz";
    }
    if (i % 5 == 0) {
        output += "buzz";
    }
    if (output.length == 0) {
        output = (i);
    }
    console.log(output);
}