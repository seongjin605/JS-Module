var Promise = require('bluebird');

const sleep = t => {
  return new Promise(resolve => setTimeout(resolve, t));
};

const start = () => {
  const startDateTime = new Date().getTime();
  const arr = ['park', 'kim', 'lee', 'choe', 'jung'];
  //   for (let i = 0; i < arr.length; i++) {
  //     await sleep(1000);
  //     console.log(i);
  //   }
  Promise.map(
    arr,
    async (item, index) => {
      await sleep(1000);
      console.log('item:', item);
    },
    { concurrency: 4 }
  );
  const endDateTime = new Date().getTime();
  console.log((endDateTime - startDateTime) / 1000 + '초');
};

start();
