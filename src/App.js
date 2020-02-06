import React from 'react';

function Food({ fav }){
  return <h1>I LIKE {fav}</h1>
}
function App() {
  return (
    <div>
      <h1>hello</h1>      
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/>
    </div>
  )
}

export default App;


/*

./ : 같은 디렉토리를 의미한다.
jsx 는 javascript안의 HTML 이다. component를 만들고 어떻게 사용하는 지에 대한 것

applicatoin 안에서 많은 component를 넣을수 있다. abs그리고 이러한 component안에 더 많은 component를 import 할 수 있다.

jsx에서 두번째로 이해해야 하는것은, component에 정보를 보낼 수 있다는 점이다.
react가 멋진 이유는 재사용 가능한 component를 만들 수 있다는 점이다. 이 말은 component 를 계속해서 반복해서 사용 할 수 있는 것이다.

es6 = javascript 최신버전

props object 내부에는 fav가 있다. function Food(props)
그 안에 있는 fav는 {fav} :: 내부에서 얻는방법 
{fav} == props.fav 는 같은방법이다.

jsx + props :: 모두 재사용 가능하다.

 component는 대문자로 시작해야 하고 , component로 정보를 보낼 수 있다.

 props란 이렇게 뭐든지 component에 넣게 되는 것들이다.

 props는 어디로가는가 ? arguement로 간다. food의 첫번째 argument, 
*/