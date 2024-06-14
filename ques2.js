function printPattern(rows) {
    for (var i = 1; i <= rows; i++) {
        var pattern = '';
        for (var j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern.trim());
    }
}

// Call the function with the number of rows you want to print
printPattern(3);