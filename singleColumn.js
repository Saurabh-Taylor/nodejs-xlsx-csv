const fs = require('fs');
const csv = require('csv-parser');

function getUniqueNames(nestedArray) {
    const flattenedArray = nestedArray.flat();
    const uniqueNamesSet = new Set(flattenedArray);
    const uniqueNamesArray = Array.from(uniqueNamesSet);
    return uniqueNamesArray;
}

const results = [];
const columnToExtract = 'Licensing Authorities'; // Your column name

fs.createReadStream('./assets/output_en.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Extract the data, split by comma, and remove duplicates
    const uniqueLicenses = [...new Set(row[columnToExtract].split(','))].map(item => item.trim());
    results.push(uniqueLicenses);
  })
  .on('end', () => {
    const uniqueAuthorities = getUniqueNames(results.flat(Infinity));
    console.log(typeof uniqueAuthorities);
    fs.writeFile('gaming_provider.txt', uniqueAuthorities.join('\n'), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    
  });
