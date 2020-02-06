import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

/*
<App /> :: 이것을 기본적으로 component 라고 부른다. 
그리고 react는 component 와 함께 동작해 , 모든것은 component 다. 

component ::  html을 반환하는 함수 
react는 component를 사용해서 HTML 처럼 작성하려는 경우 에 필요하다.

javascript 와 HTML 사이의 이러한 조합얼 JSX라고 부른다. 
이건 react에서 나온 매우 custom한 유일한 개념이다. 리엑트에 특화된 개념중 하나.

component를 만드는 방법
1. src안에 새로운 파일을 만든다. potato.js
2. 그리고 component를 작헝할 때 마다 import React from "react";를 써줘야만 한다.
(이것을 하지 않으먼 react는 여기에 jsx가 있는 component를 사용 하는 것을 이해하지 못한다)


React application이 하나의 component만을 rendering 한다.
*/
