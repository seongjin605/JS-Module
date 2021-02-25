// https://namu.wiki/w/%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8#s-2.1.2
const isCellPhone = phoneNumber => {
  if (!phoneNumber) return false;
  phoneNumber = phoneNumber.split('-').join('');
  // const regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
  const regPhone = /^(01[0|1|6|7|8|9])(\d{4}|\d{3})(\d{4})$/;
  return regPhone.test(phoneNumber);
};

console.log(isCellPhone('01000000000'));
console.log(isCellPhone('01011112222'));
console.log(isCellPhone('0101111222'));
console.log(isCellPhone('010-3333-4444'));
console.log(isCellPhone('010-223-4444'));
console.log('------------------------------');
console.log(isCellPhone('010-333-4444'));
console.log(isCellPhone('011-211-7290'));
console.log('------------------------------');
console.log(isCellPhone('0314289999'));
console.log(isCellPhone('031-428-9999'));
console.log(isCellPhone('02-428-9999'));
console.log(isCellPhone('024289999'));
console.log(isCellPhone('0242849999'));
console.log('------------------------------');
console.log(isCellPhone(null));
console.log(isCellPhone(''));
