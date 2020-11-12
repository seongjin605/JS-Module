/**
 * @description 한주가 월요일기준으로 시작 했을 때, 선택한 주(week)의 인덱스를 구한다.
 * 0: 1주차
 * 1: 2주차
 * 2: 3주차
 */
Date.prototype.getWeekOfMonth = function() {
  let firstWeekday =
    new Date(this.getFullYear(), this.getMonth(), 1).getDay() - 1;
  if (firstWeekday < 0) firstWeekday = 6;
  const offsetDate = this.getDate() + firstWeekday - 1;
  return Math.floor(offsetDate / 7);
};

// console.log(new Date("2020-09-27").getWeekOfMonth()); // 3
// console.log(new Date("2020-09-28").getWeekOfMonth()); // 4
// console.log(new Date("2020-10-01").getWeekOfMonth()); // 0
// console.log(new Date("2020-10-04").getWeekOfMonth()); // 0
// console.log(new Date("2020-10-05").getWeekOfMonth()); // 1

// console.log(new Date("2020-11-01").getWeekOfMonth()); // 0
// console.log(new Date("2020-11-02").getWeekOfMonth()); // 1
// console.log(new Date("2020-11-29").getWeekOfMonth()); // 4
// console.log(new Date("2020-11-30").getWeekOfMonth()); // 5

/**
 * 입력된 date가 오늘 기준으로 같은 주(week)인지 판단하여 return boolean
 * @param {*} date
 */
function isCurrentWeekOfMonth(date) {
  const isDateInstance = date instanceof Date;
  const now = new Date();

  if (
    !date ||
    !isDateInstance ||
    now.getFullYear() !== date.getFullYear() ||
    now.getMonth() !== date.getMonth() ||
    now.getWeekOfMonth() !== date.getWeekOfMonth()
  ) {
    return false;
  }

  return true;
}

console.log(isCurrentWeekOfMonth(new Date("2020-11-08")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-09")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-10")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-11")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-12")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-13")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-14")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-15")));
console.log(isCurrentWeekOfMonth(new Date("2020-11-16")));
