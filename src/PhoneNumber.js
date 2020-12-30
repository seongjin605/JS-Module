/**
 * Convert phone number to hyphen format.
 *
 * @see
 * 016453789 -> 016-45-3789
 * 024287296 -> 02-428-7296
 * 01076337290 -> 010-7633-7290
 * 0102114321 -> 010-211-4321
 *
 * @param {*} str
 */
function phoneNumberFormat(phoneNumber) {
  if (!phoneNumber) return ''; // 받는쪽에서 null이나 undefined reference error 방지

  // phoneNumber가 number type이면, replace 호출시 not function 에러가 발생하므로 문자열로 변환해서 error 방지
  return ('' + phoneNumber).replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3');
}
