import React from 'react';

function Food({ name }){
  return <h1>I LIKE {name} </h1>
}

const foodILike = [
  {
    name : "A" , image : "https://unsplash.com/photos/SYIpxU6laA0"
  },
  {
    name : "B" , image : "https://github.com/min6624/movie_app_2020"  
  },
  {
    name : "C" , image : "https://github.com/min6624/movie_app_2020"
  }

];

function renderFood(dish){
  console.log(dish)
  return <Food name={dish.name} picture ={dish.image} />;

}

function App() {
  return (
      <div>
        {console.log(foodILike.map(renderFood))}
        {foodILike.map(renderFood)}
      </div>
  );
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

/*
JAVASCRIPT 에서 MAP은 RENDERING이다.
MAP은 ARRAY의 각 ITEM에서 FUNCTION을 실행하는 ARRAY를 가지는 AJVASCRIPT FUNCTION 이며 그 FUNCTION의 RESULT 를 갖는 ARRAY를 준다.
따라서 MAP은 ARRAY를 취하고 우리가 정확히 원하는 ARRAY를 반환한다.
*/

/*
MAP FUNCTION :: ARRAY 의 각  ITME 에 FUNCTION을 적용하고 ARRAY를 준다.about

map은 각각 item 별로 function을 호출한다.
map은 여기서 뭐가 들어오던 array로 돌려준다.

*/
