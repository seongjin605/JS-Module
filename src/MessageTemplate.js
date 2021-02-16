const createMessageTemplate = () => {
  const patternStr =
    '{CustomerName}|{LastCreatedDate}|{ExternalReferenceNumber}|{notCompletedDocs}|{notSubmitted}';

  let messageTemplate = `
  Hi Amazon!

  LoremIpsum
  
  Dear {CustomerName}, {LastCreatedDate}is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, (👀 {ExternalReferenceNumber}) 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  
  - TIKARA: {ExternalReferenceNumber}
  - TOTORO: {LastCreatedDate}|
  - ZOZO
    * {notCompletedDocs}|
  - KEKE
    * {notSubmitted}|
  
    . It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  `;

  const result = [];
  const regexPatterns = patternStr.split('|');

  const fillTemplate = (templateString, templateVars) => {
    return new Function('return `' + templateString + '`;').call(templateVars);
  };
  const customer = {
    CustomerName: 'jin.park'
  };
  const documentByClaimId = {
    LastCreatedDate: new Date()
  };
  const templateVars = {
    CustomerName: customer.CustomerName,
    LastCreatedDate: documentByClaimId.LastCreatedDate,
    notCompletedDocs: ['🔥'],
    notSubmitted: ['😀']
  };

  while (regexPatterns.length > 0) {
    const pattern = regexPatterns.pop();

    const parsedPatternStr = pattern.split('');
    parsedPatternStr.shift();
    parsedPatternStr.pop();

    const regex = new RegExp(pattern, 'g');

    console.log('parsedPatternStr:', parsedPatternStr.join(''));

    const here = '${this.' + parsedPatternStr.join('') + '}';
    const value = fillTemplate(here, templateVars);
    messageTemplate = messageTemplate.replace(regex, value);
  }

  const messageOptions = messageTemplate.split('|');

  console.log('message size:', messageOptions.length);

  result.push(messageOptions[0], messageOptions[1], messageOptions[2]);

  return result.join('');
};

console.log('result:', createMessageTemplate());
