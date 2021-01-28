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

  //   Promise.map(
  //     arr,
  //     async (item, index) => {
  //       await sleep(1000);
  //       console.log('item:', item);
  //     },
  //     { concurrency: 4 }
  //   );

  const result = Promise.filter(
    arr,
    async (item, index) => {
      if (item === 'jung') {
        await sleep(1000);
        console.log('item:', item);
        return item;
      }
      return null;
    },
    { concurrency: 4 }
  );

  result
    .then(r => {
      console.log('r:', r);
    })
    .catch(err => {
      console.error(err);
    });

  const endDateTime = new Date().getTime();
  console.log((endDateTime - startDateTime) / 1000 + '초');
};

start();
