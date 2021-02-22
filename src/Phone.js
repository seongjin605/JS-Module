// https://namu.wiki/w/%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8#s-2.1.2
const isCellPhone = phoneNumber => {
  if (!phoneNumber) return false;
  phoneNumber = phoneNumber.split('-').join('');
  const regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
  return regPhone.test(phoneNumber);
};

console.log(isCellPhone('01011112222'));
console.log(isCellPhone('0101111222'));
console.log(isCellPhone('010-3333-4444'));

console.log(isCellPhone('010-333-4444'));
console.log(isCellPhone('011-211-7290'));
console.log(isCellPhone(null));
