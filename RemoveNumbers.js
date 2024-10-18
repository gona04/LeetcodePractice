var numDifferentIntegers = function(word) {
    if(typeof word === 'string') {
        const result = word.replaceAll(/[a-zA-Z]/g, ' '); // Replace all alphabetic characters with spaces
        const resultArray = result.split(" "); // Split the result string into an array of substrings separated by spaces
        
        console.log(resultArray); // Print the array for debugging
        
        resultArray.forEach(r => {
            const index = resultArray.findIndex(r); // Find the index of each substring in the array
            console.log(index); // Print the index for debugging
        });
    }
};

numDifferentIntegers("a123bc34d8ef34");
