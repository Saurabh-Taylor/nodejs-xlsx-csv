const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

function convertCsvToXlsx(inputFile, outputFile) {
    // Read the CSV file
    const csvData = fs.readFileSync(inputFile, 'utf8');

    // Parse CSV data
    const workbook = XLSX.read(csvData, { type: 'string', raw: true });

    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Create a new workbook and add the worksheet
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, worksheet, 'Sheet1');

    // Write the workbook to a file
    XLSX.writeFile(newWorkbook, outputFile);

    console.log(`Converted ${inputFile} to ${outputFile}`);
}

// Usage
const inputFile = path.join(__dirname, './assets/output_en.csv');
const outputFile = path.join(__dirname, './assets/new_output.xlsx');

console.log(inputFile);


convertCsvToXlsx(inputFile, outputFile);