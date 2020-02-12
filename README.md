# JS-Module

## QueryStringHelper
>  URL에 Query들을 파싱하여 오브젝트나 배열로 편리하게 관리하기 위해 제작함.  

#  

* 공통 함수 선언
```javascript
import { parseAllQueryString } from '~/assets/js/common';
parseAllQueryString(window.location.href);
```
#  
example1
> URL 요청: http://localhost:8110/search/view/?key1=value1&key2=value2
```javascript
{
"key1": "value1",
"key2": "value2"
}
```
#  
* example2
> URL: http://localhost:8110/search/view/?key=value1&key=value2
```javascript
{
  "key": [
    "value1",
    "value2"
  ]
}
```
#  
* example3
> URL: http://localhost:8110/search/view/?keys[]=value1,value2,value3
```javascript
"keys": [
    "value1,value2,value3"
  ]
```
