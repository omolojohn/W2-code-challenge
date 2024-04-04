function swapCase(inputString) {
    let swappedString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            swappedString += char.toUpperCase();
        } else {
            swappedString += char;
        }
    }
    return swappedString;
}

// Example usage:
let inputString = "The Quick Brown Fox";
let outputString = swapCase(inputString);
console.log(outputString); // Output: tHE qUICK bROWN fOX
