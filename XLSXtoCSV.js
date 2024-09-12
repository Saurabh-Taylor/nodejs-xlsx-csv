const XLSX = require('xlsx');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

// Function to convert XLSX to CSV
async function convertXlsxToCsv(inputFile, outputFile) {
    // Read the XLSX file
    const workbook = XLSX.readFile(inputFile);

    // console.log(workbook.SheetNames);
    /*
    [
        'Sites',
        'Gaming Platforms',
        'License Providers',
        'Gaming Providers',
        'Categories',
        'Countries'
    ]
    */
    
    
    // Assume we're working with the first sheet
    const sheetName = workbook.SheetNames[0];
    
    // sheetname
    // const sheet = workbook.Sheets[sheetName];
    
    // // Convert sheet to JSON
    // const jsonData = XLSX.utils.sheet_to_json(sheet);

    // // Prepare CSV writer
    // const csvWriter = createCsvWriter({
    //     path: outputFile,
    //     header: Object.keys(jsonData[0]).map(key => ({id: key, title: key}))
    // });

    // // Write data to CSV
    // await csvWriter.writeRecords(jsonData);

    // console.log(`Converted ${inputFile} to ${outputFile}`);
}

// Usage
const inputFile = path.join(__dirname, './assets/bulk_import.xlsx');
const outputFile = path.join(__dirname, 'output.csv');

convertXlsxToCsv(inputFile, outputFile).catch(console.error);