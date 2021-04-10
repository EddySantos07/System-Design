const resolveAllDataToInjectIntoDb = (promiseArr) => {
    Promise.all(promiseArr).then(async (data) => {
      //this is 4 chunks of 4 arrays containing all 3 mil csv data
  
      /*
        callBack,  - initiateGetIDs
        the original data(3 mil split up into 4 parts) - [ 800k out of the 3 mil data ]
        the index where you want it to start  - 0 - [ [800k data]( - this arr), [], [],[] ]
        and how many times you want the chunk to be split up even furthur! - 4 times
      */
  
      awaitNextCall(initiateGetIDs, data, 0, 100000);
    });
  };