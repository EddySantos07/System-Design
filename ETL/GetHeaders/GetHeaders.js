const csv = require("csvtojson");

module.exports = getQuestionsHeaders = async () => {
  return new Promise((resolve, reject) => {
    csv({
      noheader: true,
    })
      .fromFile(__dirname + "/QA-CSV-Headers/questionsHeaders.csv")
      .then((jsonHeaders) => {
        resolve(jsonHeaders);
      });
  });
};
