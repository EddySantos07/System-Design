const GetHeaders = require("./GetHeaders/GetHeaders");

const MakeCsv = require("./MakeCsv/MakeCsv");

const ReadQuestionFiles = require("./ReadFiles/ReadFiles");

const DispatchData = require('./DispatchData/DispatchData');

async function init() {
  /* makes csv into multiple smaller csv files */
  const Make_CSV = await MakeCsv();

  /* grabs questions headers */
  const CsvHeaders = await GetHeaders();

  /* this gives us 1mil+ data that we can work with */
  const result = await ReadQuestionFiles();

    

}
