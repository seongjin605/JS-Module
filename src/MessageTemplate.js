const createMessageTemplate = () => {
  const str = '{tail}, {KK}, {namu}';
  let message = `
  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s {tail}, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, {KK} but also the leap into electronic typesetting, remaining essentially unchanged. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing {namu} software like Aldus PageMaker including versions of Lorem Ipsum.
  `;
  const params = str.split(',');
  while (params.length > 0) {
    const param = params.pop();
    console.log('🚀 ~ createMessageTemplate ~ param', param);
    if (param) {
      message = message.replace(param, '🔥');
    }
  }
  return message;
};

console.log(createMessageTemplate());
