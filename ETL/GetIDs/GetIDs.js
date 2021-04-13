const { productIDModel } = require("../../MongoSchema/MongoSchema");

const getIDs = async (chunk) => {
  return new Promise((resolve, reject) => {
    let idContainer = [];

    for (let i = 0; i < chunk.length; i++) {
      let objID = chunk[i].product_id;

      let filter = { product_id: Number(objID.trim()) };

      let update = {
        product_id: Number(objID.trim()),
      };

      idContainer.push({
        updateOne: {
          filter,
          update,
          upsert: true,
        },
      });
    }

    let count = 1;
    productIDModel.bulkWrite(idContainer).then((data) => {
      if (count === 1) {
        console.log(
          data.matchedCount,
          " matched count",
          data.modifiedCount,
          "modified count"
        );
      }
      console.log("first data executed ");
      resolve();
    });
  });
};

module.exports = initiateGetIDs = async (chunkArr, chunk_size) => {
  const chunkArrCopy = [...chunkArr];

  let arrChunks = [];

  while (chunkArrCopy.length) {
    console.log("this is one of the chunks in initiate id");
    arrChunks.push(getIDs(chunkArrCopy.splice(0, chunk_size)));
  }

  console.log("returning promise chunks!");
  return arrChunks;
};
