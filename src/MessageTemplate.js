const createMessageTemplate = () => {
  const str = '{tail}, {KK}, {namu}';
  let messageTemplate = `
  What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s {tail}, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, {KK} but also the leap into electronic typesetting, remaining essentially unchanged. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing {namu} software like Aldus PageMaker including versions of Lorem Ipsum.|
  DO YOUR BEST.
  `;
  const params = str.split(',');
  const templates = messageTemplate.split('|');

  let message = '';

  templates.forEach(val => {
    const target = val.trim();
    while (params.length > 0) {
      const param = params.pop();
      console.log(param);
      message = target.replace(param.trim(), '🔥');
    }
  });
  console.log('result:', message);
  return message;
};

console.log(createMessageTemplate());
