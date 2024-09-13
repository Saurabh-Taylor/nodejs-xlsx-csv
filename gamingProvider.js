const fs = require('fs');

// Read the content of the file
const fileContent = fs.readFileSync('gaming_provider.txt', 'utf-8');

// Split the string by semicolons and create a Set of unique values
const uniqueValuesSet = new Set(fileContent.split(';'));

// Convert the Set back to an array
const uniqueValuesArray = Array.from(uniqueValuesSet);

// Remove any empty strings that might have been created by extra semicolons
const cleanUniqueValuesArray = uniqueValuesArray.filter(value => value.trim() !== '');

// Sort the array alphabetically (optional)
cleanUniqueValuesArray.sort();

console.log(cleanUniqueValuesArray);

// If you want to write the unique values back to a file
fs.writeFileSync('unique_values.txt', cleanUniqueValuesArray.join('\n'), 'utf-8');

console.log('Unique values have been extracted and saved to unique_values.txt');