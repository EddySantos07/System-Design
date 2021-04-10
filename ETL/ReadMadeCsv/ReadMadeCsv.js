module.exports = readAllFiles = () => {
    // returns 4 promises with all the data
    let data = [];
  
    for (let i = 1; i <= 4; i++) {
      data.push(
        new Promise((resolve, reject) => {
          csv()
            .fromFile(__dirname + `/testCsvMaker/questions${i}.csv`)
            .then((obj) => {
              resolve(obj);
            });
        })
      );
    }
  
    return data;
  };