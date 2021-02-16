const createMessageTemplate = () => {
  const str = '{tail}|{KK}|{namu}';

  let messageTemplate = `
  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s {tail}, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, {KK} but also the leap into electronic typesetting, remaining essentially unchanged. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing {namu} software like Aldus PageMaker including versions of Lorem Ipsum.|
  DO YOUR BEST. 💪 |
  HEY WASSUP MAN 😀|
  `;
  const params = str.split('|');
  const messageOptions = messageTemplate.split('|');
  console.log('------------------------------------------------------------');
  console.log('messageOptions length:', messageOptions.length);
  console.log('🚀  0번째 인덱스가 기준:', messageOptions[0]);
  console.log('🚀  1번째 인덱스 옵션:', messageOptions[1]);
  console.log('🚀  1번째 인덱스 옵션:', messageOptions[2]);
  console.log('------------------------------------------------------------');

  const result = [];
  while (params.length > 0) {
    const param = params.pop().trim();
    messageOptions[0] = messageOptions[0].replace(param, '🔥');
  }

  result.push(messageOptions[0], messageOptions[2]);

  return result.join('');
};

console.log('result:', createMessageTemplate());
