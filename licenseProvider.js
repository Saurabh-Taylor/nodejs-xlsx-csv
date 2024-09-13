const fs = require('fs');
const XLSX = require('xlsx');

// !ARRAY - 49 items
const arr = [
    'iGaming Ontario',
    'Curacao N.V.',
    'HM Government Gibraltar',
    'Curaçao eGaming B.V.',
    'Belgian (GC) Belgian Gaming Commission - Belgium',
    'AGCC Alderney Gaming Commission',
    'Cyprus (GC) Cyprus Gaming Commission',
    'French Regulatory Authority for Online Games License – France',
    'Kahnawake Gambling Commission',
    'Bulgaria Gambling Licence',
    'Serbia Gaming Authority',
    'Croatia Gambling licence',
    'New Jersey Casino Control Commission License – USA',
    'ONJN (Romania National Gambling Office)',
    'Norwegian Gaming and Foundation Authority – Norway',
    'Gambling Regulatory Authority – Portugal',
    'Lithuanian Gaming Control Authority – Lithuania',
    'Estonia Gaming Licence',
    'Costa Rica Gaming Licence',
    'Unknown',
    'MGA Malta Gaming Authority',
    'UK Gambling Commission',
    'DGOJ Spanish Directorate General Regulation',
    'Jersey (GC) Jersey Gambling Commission',
    'Isle of Man Gambling Supervision Commission',
    'Ontario Lottery and Gaming Corporation License – Canada',
    'Agenzia delle Dogane e dei Monopoli',
    'Macau Gaming Inspection and Coordination Bureau License (Macau)',
    'Coljuegos License (Colombia)',
    'GGL Gemeinsame Glücksspielbehörde der Länder Anstalt des öffentlichen Rechts',
    'HGC (Hellenic Gaming Commission)',
    'Tobique IGaming License',
    'Latvia Gambling Licence',
    'Bosnia and Herzegovina Gaming licence',
    'Spelinspektionen Swedish Gambling Authority',
    'Spillemyndigheden Danish Gambling Authority',
    'Nevada Gaming License – USA',
    'Pennsylvania Gaming Control Board License – USA',
    'Philippine Amusement and Gaming Corporation License – Philippines (PAGCOR)',
    'Western Cape Gambling and Racing Board',
    'NGA (Netherlands Gambling Authority)',
    'Panama Gambling license',
    'Curacao Antillephone License',
    'Alcohol and Gaming Commission of Ontario (AGCO)',
    'Michigan Gaming Control Board',
    'Connecticut State Gambling Commission',
    'Alberta Gaming, Liquor and Cannabis',
    'Nova Scotia Gambling',
    'Peru Gambling Licence'
]
const data = fs.readFileSync('gaming_provider.txt', 'utf8');
const RawArray = data.split('\n').map(item => item.trim()).filter(Boolean);

const checkMatches = (arr1, arr2) => {
    return arr2.map(item2 => {
        const keywords = item2.match(/\w+/g);  
        const match = arr1.some(item1 =>
            keywords.some(keyword => item1.toLowerCase().includes(keyword.toLowerCase()))
        );
        return { item: item2, existsInFirstArray: match };
    });
};

const matches = checkMatches(arr, RawArray);
const uniqueValue = matches.filter((item)=> item.existsInFirstArray === false)
console.log(uniqueValue);


// ! XLSX FILE BELOW

const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(uniqueValue);
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
XLSX.writeFile(workbook, "uniqueValues.xlsx");

console.log("XLSX file has been created successfully.");

