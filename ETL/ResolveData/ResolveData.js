module.exports = ResolveData = async (promise) => {
  const promiseArr = await Promise.resolve(promise);

  const result = await Promise.all(promiseArr).then((data) => {
    return data;
  });

  return result;
};
