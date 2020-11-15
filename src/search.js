const axios = require('axios');
const arraySort = require('array-sort');

/**
 * 차량 검색
 */
const requestCars = async () => {
  try {
    const { data: searchedCars } = await axios.get('http://localhost:3000/searchCarList');
    return searchedCars;
  } catch (error) {
    console.error(error);
  }
};

const search = async (sortBy = 'price') => {
  const time = Date.now();
  const searchedCars = await requestCars();

  const sortedCars = arraySort(searchedCars, (first, second) => {
    if (sortBy === 'price') {
      return first.salefee + first.bohum[0].saleFee - (second.salefee + second.bohum[0].saleFee);
    }
    return first.agency.point - second.agency.point;
  });

  if (sortBy === 'price') {
    sortedCars.forEach(s => console.log('totalFee:', s.salefee + s.bohum[0].saleFee));
  } else {
    sortedCars.forEach(s => console.log('totalFee:', s.agency.point));
  }
  console.log(`${(Date.now() - time) / 1000}s`);
};

search('point');
