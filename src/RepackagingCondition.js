const isRepackaging = () => {
  const id = 'P540-2420-REFFOLD5GRJF';
  const splitedArr = id.split('-');
  const [first = '', second = '', third = ''] = splitedArr;
  return (
    first.toUpperCase().startsWith('P', 0) &&
    (third.toUpperCase().startsWith('REF', 0) || third.toUpperCase().startsWith('COP', 0))
  );
};

const result = isRepackaging();
console.log('🚀 ~ result', result);
