const str = "Blueprint Gaming;Merkur Gaming;NetEnt;Play'n GO;Microgaming;Nextgen Gaming;Nolimit City;Red Tiger Gaming;Evolution Gaming;WMS;Big Time Gaming;Eyecon;Quickspin;ELK Studios;Pragmatic Play;Betsoft Gaming;Thunderkick;Realtime Gaming;Bally;Barcrest;Wazdan;NYX Gaming Group;PariPlay;Lightning Box;Playson;Red Rake Gaming;Spinomenal;Amaya;Rabcat;Scientific Games;1X2 Gaming;Tom Horn;iSoftBet;2By2 Gaming;Iron Dog Studio;Ezugi;Realistic Games;NeoGames;Quickfire;Ainsworth;PearFiction Studios;Wizard games;Spinberry;Skillzzgaming;Stakelogic;SpinPlay Games;Cadillac Jack;G Games;Spearhead Studios;Magnet Gaming;Foxium;Slingo;Reel Kingdom;Just For The Win;Hacksaw Gaming;Crazy Tooth Studio;Fantasma Games;Old Skool Studios;Bluberi Gaming;Synot Games;SlotMill;Triple Edge Studios;Ruby Play;Stormcraft Studios;Electric Elephant;Fortune Factory Studios;Wild Streak Gaming;Gameburger Studios;Northern Lights Gaming;Slingshot Studios;Inspired Gaming;Gamomat;Reel Time Gaming"

const arr = str.split(";")

const XLSX = require('xlsx');
const fs = require('fs');

// Function to convert txt to xlsx
function convertTxtToXlsx(inputFile, outputFile) {
  // Read the content of the text file
  const data = fs.readFileSync(inputFile, 'utf8');
  
  // Split the content into rows
  const rows = data.split('\n');
  
  // Process each row (assuming tab-separated values)
  const jsonData = rows.map(row => row.split('\t'));
  
  // Create a new workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(jsonData);
  
  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
  // Write the workbook to a file
  XLSX.writeFile(workbook, outputFile);
  
  console.log(`Conversion complete. Output file: ${outputFile}`);
}

// Usage example
const inputFile = 'gaming_provider.txt';
const outputFile = 'license.xlsx';

convertTxtToXlsx(inputFile, outputFile);