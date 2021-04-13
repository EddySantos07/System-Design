module.exports = AwaitNextCall = awaitNextCall = async (
  promiseCallBack,
  originalArr,
  arrIndex,
  chunk_size
) => {
  let chunk = promiseCallBack(originalArr[arrIndex], chunk_size);

  console.log("we got a chunk in await call");
  let promiseChunks = await new Promise((resolve, reject) => {
    Promise.resolve(chunk).then((data) => {
      console.log("we resolved promise chunk");
      resolve(data);
    });
  });

  let resolvedChunks = await new Promise((resolve, reject) => {
    Promise.all(promiseChunks).then(async (data) => {
      console.log("we resolved promise CHUNKS!");
      resolve();
    });
  });

  if (arrIndex === originalArr.length - 1) {
    return;
  }

  arrIndex += 1;

  const promises = await awaitNextCall(
    promiseCallBack,
    originalArr,
    arrIndex,
    chunk_size
  );
};
