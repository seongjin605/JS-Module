const queryString = require('query-string');

const url =
    'http://localhost/?key=value&btkn=123&domestic=1&returnUrl=http://localhost/detail?sdate=20200502|edate=20200505|name=test&pmevt=1';

// returnUrl부터 시작해서  query string에 &가 추가되면 어디까지가 returnURL인지 구분 못할 가능성이 생긴다.
// 백엔드에서는 약속된 separator를 '&'가 아닌 '|'를 파싱해서 response 전달.
const parsedUrl = queryString.parseUrl(url);

let returnUrl = null;
// query에 returnUrl이 존재하면 separator(|) 기준으로 다시 &로 변환한다.
if (parsedUrl.query.returnUrl) {
    returnUrl = parsedUrl.query.returnUrl.split('|').join('&');
    returnUrl = queryString.parseUrl(returnUrl);
}
console.log('parsedUrl:', parsedUrl);
console.log('returnUrl:', returnUrl);
