/**
 * @description url 뒤에 붙는 query를 파싱하여 동적으로 오브젝트나 배열로 만들어서 리턴해주는 함수이다.
 * @param {*} url
 */
const parseAllQueryString = function (url) {
    // url (선택 사항) 또는 window에서 쿼리 문자열 가져옴.
    let queryString =
        process.server || url
            ? url.split('?')[1]
            : window.location.search.slice(1);
    queryString = decodeURIComponent(queryString);

    let obj = {};
    if (queryString !== 'undefined') {
        // # 다음의 항목은 쿼리 문자열의 일부가 아니므로 제거.
        queryString = queryString.split('#')[0];

        // 쿼리 문자열을 구성 요소 부분으로 분할(split)
        let arr = queryString.split('&');

        for (let i = 0; i < arr.length; i++) {
            let a = arr[i].split('='); // =(equals sign)으로 key value 값을 구분한다.

            // 매개 변수 이름 및 값 설정 (비어 있으면 'true'사용)
            let paramName = a[0];
            let paramValue = typeof a[1] === 'undefined' ? true : a[1];

            // 대소 문자를 일관성 있게 유지
            // paramName = paramName.toLowerCase();
            // if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // paramName이 대괄호로 끝나는 경우 (예 : colors[] 또는 colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {
                // 존재하지 않는 키 생성
                let key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // 인덱스 배열 인 경우 (예 : colors[2])
                if (paramName.match(/\[\d+\]$/)) {
                    // 인덱스 값을 가져 와서 적절한 위치에 항목을 추가.
                    let index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // 그렇지 않으면 배열의 끝에 값을 추가.
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (
                    obj[paramName] &&
                    typeof obj[paramName] === 'string'
                ) {
                    // 속성이 존재하고 문자열 인 경우 배열로 변환
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }
    return obj;
};

const parsedQueryObj = parseAllQueryString(
    'http://localhost:8110/search/view/params?' +
        encodeURIComponent(
            'agencyCode[]=GRIM_TEST&carClass[]=CLS_01,CLS_02,CLS_03,CLS_04,CLS_05,CLS_06,CLS_07,CLS_08&makers[]=MK_01,MK_02,MK_03,MK_04,MK_05,MK_06&zone=JEJU&affiliatePid=0&sdate=2020-06-01T09:00&edate=2020-06-06T09:00'
        )
);

const { direct = false } = parsedQueryObj;
console.log(direct);
console.log(parsedQueryObj);
