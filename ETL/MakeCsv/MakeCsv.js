const fs = require("fs");
const csv = require("csvtojson");

module.exports = MakeCsv = async () => {
  csv()
    .fromFile(__dirname + "../../CSV/QA-CSV-Files/questions.csv")
    .then(async (jsonObj) => {
      let headers = await getQuestionsHeaders();

      const eachFractionLength = Math.ceil(jsonObj.length / 4);

      for (let i = 1; i <= 4; i++) {
        let csvObjChunk = jsonObj.splice(0, eachFractionLength);

        const ws = fs.createWriteStream(
          `${__dirname}../../CSVBreakDown/csv-questions/questions${i}.csv`
        );
        fastcsv.write(csvObjChunk, { headers: true }).pipe(ws);
      }
    });
};
