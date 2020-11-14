/**
 * @description 한주가 일요일 시작이 아닌 ISO 표준 월요일이 시작값 (ex: google calander)
 * 선택한 날짜의 해당주의 시작날을 구하는 함수
 *
 * @param {*} date
 */
const startOfWeek = date => {
  const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

console.log(startOfWeek(new Date("2020-10-01")).toString()); // 09-28
console.log(startOfWeek(new Date("2020-10-03")).toString()); // 09-28
console.log(startOfWeek(new Date("2020-10-04")).toString()); // 09-28

console.log("-------------------------------------------------------------");
console.log(startOfWeek(new Date("2020-10-05")).toString()); // 10-05
console.log(startOfWeek(new Date("2020-10-06")).toString()); // 19-05

console.log("-------------------------------------------------------------");
console.log(startOfWeek(new Date()).toString()); // 10-26
