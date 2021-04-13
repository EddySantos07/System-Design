const csv = require("csvtojson");

module.exports = ReadFiles = async () => {
  // returns 4 promises with all the data
  let data = [];

  for (let i = 1; i <= 4; i++) {
    data.push(
      new Promise((resolve, reject) => {
        csv()
          .fromFile(
            `${__dirname}/../../CSVBreakDown/csv-questions/questions${i}.csv`
          )
          .then((obj) => {
            resolve(obj);
          });
      })
    );
  }

  return data;
};
