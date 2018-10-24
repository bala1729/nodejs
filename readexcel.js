/* Reads an excel file and creates insert script
  Requires https://www.npmjs.com/package/read-excel-file module
*/
"use strict";
const readXlsxFile = require('read-excel-file/node');

// // File path.
// readXlsxFile('/path/to/file').then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
// })

// Readable Stream.
readXlsxFile('/home/balasubramaninarayanaswamy/Downloads/Testfile.xlsx').then((rows) => {
    rows.forEach(function(row) {
      console.log('row : ', row);
    }
  );

})
