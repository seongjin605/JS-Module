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

const isValidItemType = () => {
  const id = 'P540-2420-REFFOLD5GRJF';
  const splitedArr = id.split('-');
  const [first = '', second = '', third = ''] = splitedArr;

  const appleValue = 10000;
  const melonValue = 29000;
  const peachValue = 50000;

  const DiscountType = (() => {
    const APPLE = Symbol.for('APPLE');
    return {
      [APPLE]: appleValue
    };
  })();
  console.log('DiscountType:', DiscountType[Symbol.for('APPLE')]);

  const itemType = (third, DAXItemType) => {
    return third.toUpperCase().startsWith(DAXItemType, 0);
  };

  console.log('🔥 itemType: ', itemType(third, 'REF'));
};

isValidItemType();
