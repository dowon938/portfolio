## portfolio

dowon's portfolio
※아래로 갈수록 예전 것입니다:)

## Habit Tracker (https://github.com/dowon938/habit-tracker)
react로 만든 첫번째 앱<br>
![habittracker](https://user-images.githubusercontent.com/68101878/110725476-0310ce80-825b-11eb-881b-5e56e4fa9b7e.gif)
### 구현사항
* 각각의 습관을 habit컴포넌트로 만들고 습관을 담고 있는 컨테이너를 habits컴포넌트로 만들었다. 그 외에 header와 습관을 추가할 수 있는 add reset 버튼을 각각 컴포넌트로 만들었다.
* habit안에는 {id, name, count,} state가 필요했는데 header, add, reset 과 같은 컴포넌트에서도 접근하기 위해서 app.jsx에서 state를 관리했다.
* 그리고 id(key)값은 중복을 피하기위해 Date.now()를 사용했다.
```jsx
state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  //id 에는 중복되지 않는 값을 사용하기위해 date.now()를 사용했다.
  addHabit = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  ```
* 그리고 성능 개선을 위해 PureComponent를 배워 적용했다. PureComponent는 state변화를 얕은비교(shallow comparison)을 하는데, 오브젝트 내의 모든값을 샅샅히 비교하는 것이 아니라
  참조값이 변경된 부분의 값만 확인해 업데이트 해준다.
* 성능개선을 위한 PureComponent를 이해하는 과정에서 오브젝트의 참조값과 메모리에 저장된 데이터값에 대해 이해하게되었고, 이를 적용하기 위해 Spread Operator를 이용했다.
  
  
## 감상
* props를 통해 자식컴포넌트에 요소를 전달하는게 익숙하지 않아 애를 먹었지만, 순수 자바스크립트로 프로젝트를 만들때보다 훨씬 작업이 용이했다.
* state로 데이터를 관리해주는 것도 너무 편했고, 특히 state의 값의 변화가 있으면 다시 렌더링 해주는 것이 신세계였다.
* jsx문법을 이용하니 html에 변수를 사용할 수 있는 것도 너무 편리하다. 그리고 dom에 접근할때 React.createRef()를 이용하여 직접 돔에 ref={this.abcRef}로 접근하는 것도 편하다.
___

## ToDoBalloon (https://github.com/dowon938/ToDoBalloon)
*HTML,CSS,vanillaJS 이용*
ToDoList앱을 창의적으로 만들어보고 싶어서 만들게 된 앱<br>
<img src="https://user-images.githubusercontent.com/68101878/110559794-38002100-8188-11eb-8390-5d29dc95be07.gif" width="300">
<img src="https://user-images.githubusercontent.com/68101878/110617151-b08ece00-81d8-11eb-839c-0ae5d801be96.gif" width="340">

### 구현사항
* 일의 우선순위를 선택하면 checked에 반영해서 tag를 만들 때 색과 크기가 다르게 만들어 지도록 구현.
```JS
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const value = textInput.value;
  if (value === '') {
    return;
  }
  const priority = checked.innerHTML;
  // console.log(value);
  const item = document.createElement('li');
  item.setAttribute('class', `${priority} ${priority}size`);
  item.textContent = value;
  toDoContainer.appendChild(item);
  textRadio.classList.add('off');
  textInput.value = '';
});
```
* keyCode를 이용하여 키보드가 입력되는 모습을 가상 키보드로 구현.(추후에 타자연습 앱을 만들어 보고싶었음)
```js
textInput.addEventListener('keydown', (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  eventKey.id = 'p';
});
textInput.addEventListener('keyup', (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  eventKey.id = '';
});
```

## 감상
* 떠오르는 풍선처럼 차곡차곡 화면 상단에 쌓이며, 원끼리 서로 밀쳐지는 애니메이션을 구현하고 싶었으나, 아직 구현하지 못하였음. CANVAS.JS를 공부해야 할 것 같다.
___

## 간단한 쇼핑리스트 (https://github.com/dowon938/shopping-templateDW)
vanillaJS와 json 데이터 파일로 구현한 간단한 쇼핑리스트 앱<br>
<img src="https://user-images.githubusercontent.com/68101878/110258585-adcc8700-7fe6-11eb-8a62-60860ea1e969.gif" width="300">
<img src="https://user-images.githubusercontent.com/68101878/110258607-cdfc4600-7fe6-11eb-8894-9b967696715c.png" width="394">
### 기능
* JSON 파일의 데이터를 fetch("data/data.json")를 통해 가져와서 json() 함수로 json형식 데이터로 변환 => 이후에 items 배열을 map과 filter를 통해서 html tag로 변환.
* 각 버튼의 html tag에 data-key="type" data-value="tshirts" 데이터 '키'와'밸류'값을 부여하고 그 값을 json의 아이템 값과 비교하여 filter해서 보여주도록 구현.
* items 데이터 배열을 html tag로 변환하는 과정에서는 JS ES6 Template Literals 문법을 이용하여 변환.
```js 
function createHTML(item) {
  return `
  <li class="item">
  <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
  <span class = "item__description"> ${item.gender}, ${item.size} size </span>
  </li>
  `;
}
```
### 감상
* 처음으로 동적으로 데이터를 받아와서 화면에 표시하고 정리해본 프로젝트. 그 동안 백엔드와의 통신이 궁금했는데 실전에서는 이것보다 훨씬 복잡하게 진행되겠지만 간단하게라도 느껴볼수있어서 너무 좋았다.
* 항상 for 문으로 해결하던 것들을, 배열로된 데이터를 받아오면서 배열의 map,filter API를 처음으로 실전으로 적용해보았다.  
<br>
*ps. main.js는 json을 이용하지않고, html에 하드코딩된 tag들을 버튼을 누르면 클래스 별로 분류해주는 식으로 작업했고, 이후 json을 배우며 main2.js로 다시 작업했습니다. 자세한코드가 궁금하시면 main2.js를 참고해주세요.*
___

## JS101 드림코딩 엘리 아카데미 자바스크립트 강의 들으며 만든 앱들(https://github.com/dowon938/JS101)
<img src="https://user-images.githubusercontent.com/68101878/110620770-c56d6080-81dc-11eb-8010-7de78c4f341b.gif" height="280"><img src="https://user-images.githubusercontent.com/68101878/110620776-c7372400-81dc-11eb-9c60-b61c134e1984.gif" height="280"><img src="https://user-images.githubusercontent.com/68101878/110620781-c8685100-81dc-11eb-8d09-7b400729a1c8.gif" height="280">
### 구현사항
* 포인터 좌표, 마우스 스크롤 이벤트, 윈도우 사이즈에 관련된 EVENT를 익히는데 도움이 되었다.
```js
//포인터 좌표
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  tag.innerHTML = `Client X/Y: ${x}px, ${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  vt.style.left = `${x}px`;
  hr.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
});
//스크롤 이벤트
window.scrollBy({left: 0,top: 100,behavior: 'smooth'}); //아래방향으로 100px씩 스크롤
window.scrollTo({left: 0,top: 100,behavior: 'smooth'}); //top에서 100px의 위치로 스크롤
special.scrollIntoView({block: "center", behavior: "smooth"}); //'special' DOM이 화면의 가운데 위치하도록 스크롤
//윈도우 사이즈
tag.innerHTML = `window.screen : ${window.screen.width},${window.screen.height}</br>  //스크린은 사용자의 모니터 사이즈
                window.outer : ${window.outerWidth},${window.outerHeight}</br>        //outersize는 브라우저포함 사이즈
                window.inner : ${window.innerWidth},${window.innerHeight}</br>        //innersize는 컨텐츠가 보여지는 영역(간혹 스크롤바사이즈를 포함하기도함)
                documentElement.clientWidth : ${document.documentElement.clientWidth},${document.documentElement.clientHeight}` //컨텐츠가 보여지는영역(스크롤바제외)
```
## JS101 당근게임 (https://github.com/dowon938/JS101/tree/main/carrot)
HTML,CSS,vanillaJS 이용하여 만든 간단한 게임
![carrotgame](https://user-images.githubusercontent.com/68101878/110623221-e84d4400-81df-11eb-8025-a8d73b3ba40a.gif)
### 구현사항
* 시간 안에 당근을 모두 클릭해서 없애면 승리, 벌레를 클릭하면 패배, 시간초과시에도 패배.
* 타이머와 남은 당근갯수를 업데이트 해주는 점수판, 랜덤으로 당근과 벌레를 배치시키는 것을 구현했다.
* 당근과 벌레를 랜덤으로 배치시키는 것은 JS로 CSS의 top,left값에 0~100%사이에 위치 시키는 것으로 해결했다.
  (100%가 되면 화면밖으로 나가버리기 때문에 %를 조절하며 맞추려했으나, 필드 자체를 당근과 벌레의 px만큼 줄여서 해결하는 것이 더 정확하고 쉬웠다.)
```js
classNmes.forEach((className)=>{
        className.style.top = `${getRandomInt(100)}%`;
        className.style.left = `${getRandomInt(100)}%`;
    }
```
* 당연히 타이머 API가 있다고 생각했는데, 검색 후 setInterval()API로 1초마다 타이머 태그의 innerHTML을 변경해서 해결하였다.
```js
function refreshTime() {
    time--;
    let minutes = Math.floor(time/60); 
    let seconds = time%60;
    if (seconds<10) { 
        seconds = '0'+seconds
    };
    timer.innerHTML=`${minutes}:${seconds}`;
    if (time<1) {
        clearInterval(timeStart);
        stopClick();
        replay.style.display = 'flex';
    };
};
```
## 감상
* 간단한 게임인데도 만들고 나니 버그가 많았다.(패배했는데도 당근이 클릭되는 버그, 패배한 상태에서 당근을 모두 클릭하면 승리가 되는 버그 등)
* 버그를 수정하면서 함수는 최대한 간단하게 만들어 재사용 하는 것이 좋다는 것을 느낌. 하나의 함수에서 너무 많은 것들을 하게 되면 버그를 잡기도 힘들고 다른사람이 보기에도 어렵다.
* 타이머를 만드는 데에도 수식이 필요하다는 것이 신선한 충격이었다. (1분이 60초가 아니라 1:00 로 표현되기 위해서 남은 초를 60으로 나누어 몫을 분으로, 나머지를 초로 변수에 할당하였다.)

## JS101쇼핑리스트 (https://github.com/dowon938/JS101/tree/main/chpater3)
HTML,CSS,vanillaJS 구현한 간단한 쇼핑리스트 앱.
![shopping](https://user-images.githubusercontent.com/68101878/110625103-58f56000-81e2-11eb-8da4-3145c08d1483.gif)
## 구현사항
* 인풋 값을 전달받아 새로운 요소를 만드는 것에 너무 많은 코드가 필요했다. JS ES6 Template Literals 문법을 이용할 생각을 하지 못했음.
```js
function createItem(text) {
    const item = document.createElement('li');
    const itemCheck = document.createElement('input');
    const label = document.createElement('label');
    const itemDelete = document.createElement('div');
    const check = document.createElement('label');
    const circle = document.createElement('label');
    
    item.setAttribute('class', 'item'); 
    items.appendChild(item);
    itemCheck.setAttribute('type','checkbox');
    itemCheck.setAttribute('class','item-check');
    itemCheck.setAttribute('id', i);
    check.setAttribute('class', 'check');
    circle.setAttribute('class', 'circle');
    check.setAttribute('for', i);
    circle.setAttribute('for', i);
    check.innerHTML = '<i class="fas fa-check-circle"></i>'
    circle.innerHTML = '<i class="far fa-circle"></i>'
    label.setAttribute('for', i);
    label.setAttribute('class','item-name');
    label.textContent = text; 
    itemDelete.setAttribute('class','item-delete');
    itemDelete.innerHTML = '<i class="fas fa-minus-circle"></i>'
    item.appendChild(itemCheck);
    item.appendChild(check);
    item.appendChild(circle);
    item.appendChild(label);
    item.appendChild(itemDelete);
    //scroll into item
    item.scrollIntoView(); // 쇼핑목록이 많아졌을때 새로 만들어진 것을 따라 스크롤하기위함.
};
```
## 감상
* 아주 간단한 앱인데도 써야하는 코드가 너무 많아, 프레임워크 라이브러리의 필요성을 느꼈다.
___

## 포트폴리오웹사이트 클론코딩 (https://github.com/dowon938/portfolio)
HTML,CSS,vanillaJS 로 포트폴리오 사이트 클론코딩<br>
![porfolio](https://user-images.githubusercontent.com/68101878/110553169-f1a4c500-817b-11eb-9fb3-08989e354816.gif)
### 구현사항
* css @media screen query를 이용한 반응형 디자인 구현.
* getBoundingClientRect()으로 홈 레이아웃의 크기를 받아와서 윈도우 스크롤Y값과 연동해 점점 투명해지도록 구현.
```js
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
```
* scrollIntoView() API를 이용해 카테고리 버튼 클릭시 해당하는 곳으로 이동하도록 구현.
* 스크롤시 해당되는 카테고리 버튼이 active 되는 기능은 IntersectionObserver() API를 이용해 화면 가운데 20% 부분에 해당되는 카테고리 버튼에 active되도록 구현.
### 감상
* 처음으로 vanilla JS를 이용하여 이벤트리스너 개념을 익히고 DOM에 접근하는 법을 익힐수 있는 좋은 프로젝트였다.
* 혼자서는 스크롤시 점점 투명해지는 기능이나 카테고리 버튼이 액티브되는 간단한 기능도 구현하려니 막막했다.그 동안 당연하게 사용했던 웹이 대단하게 느껴졌다.
* html태그에 data를 추가해 id와 연결하면서 많은 것을 할 수 있겠다고 느꼈지만, 프로젝트 규모가 커지면 서로 연결되는 관계를 잘 관리 해야 할 것 같다.
___
