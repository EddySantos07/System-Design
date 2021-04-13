const GetHeaders = require("./GetHeaders/GetHeaders");

const MakeCsv = require("./MakeCsv/MakeCsv");

const ReadQuestionFiles = require("./ReadFiles/ReadFiles");

const ResolveData = require("./ResolveData/ResolveData");

async function init() {
  /* makes csv into multiple smaller csv files */
  // const Make_CSV = await MakeCsv();

  /* this gives us 1mil+ data that we can work with */
  const result = await ReadQuestionFiles();

  /* grabbing promise data from the read file in the
   result it contains 1mil + csv data to resolve in 4 different arrays 
  */
  const data = await ResolveData(result);

  if (data.length > 1) {

    

  }

}

init();
