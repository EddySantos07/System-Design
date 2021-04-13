const fs = require("fs");

const csv = require("csvtojson");
const fastcsv = require("fast-csv");

module.exports = MakeCsv = async (headers) => {
  console.log("initiating Csv Writing...");

  let All_4_Must_Be_True = [];

  for (let i = 1; i <= 4; i++) {
    const result = fs.existsSync(
      `${__dirname}/../../CSVBreakDown/csv-questions/questions${i}.csv`
    );
    All_4_Must_Be_True.push(result);
  }

  let check = false;

  for (let i = 0; i < All_4_Must_Be_True.length; i++) {
    if (All_4_Must_Be_True[i] === false) {
      return;
    }
    check = true;
  }

  if (check === true) {
    console.log("All csv mini files have already been made!");
    return;
  }

  csv()
    .fromFile(`${__dirname}/../../CSV/QA-CSV-Files/questions.csv`)
    .then(async (jsonObj) => {
      const eachFractionLength = Math.ceil(jsonObj.length / 4);

      for (let i = 1; i <= 4; i++) {
        console.log(`writing questions${i}, csv file!`);

        let csvObjChunk = jsonObj.splice(0, eachFractionLength);

        const ws = fs.createWriteStream(
          `${__dirname}/../../CSVBreakDown/csv-questions/questions${i}.csv`
        );

        fastcsv.write(csvObjChunk, { headers: true }).pipe(ws);
      }
    });
};
