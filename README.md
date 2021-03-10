## portfolio

dowon's portfolio

## 포트폴리오웹사이트 클론코딩 (https://github.com/dowon938/portfolio)
HTML,CSS,vanillaJS 로 포트폴리오 사이트 클론코딩
![porfolio](https://user-images.githubusercontent.com/68101878/110553169-f1a4c500-817b-11eb-9fb3-08989e354816.gif)
### 구현사항
* css @media screen query를 이용한 반응형 디자인 구현.
* getBoundingClientRect()으로 홈 레이아웃의 크기를 받아와서 윈도우 스크롤Y값과 연동해 점점 투명해지도록 구현. (home.style.opacity = 1 - window.scrollY / homeHeight;)
* scrollIntoView() API를 이용해 카테고리 버튼 클릭시 해당하는 곳으로 이동하도록 구현.
* 스크롤시 해당되는 카테고리 버튼이 active 되는 기능은 IntersectionObserver() API를 이용해 화면 가운데 20% 부분에 해당되는 카테고리 버튼에 active되도록 구현.
### 느낀점
* 처음으로 vanilla JS를 이용하여 이벤트리스너 개념을 익히고 DOM에 접근하는 법을 익힐수 있는 좋은 프로젝트였다.
* 혼자서는 스크롤시 점점 투명해지는 기능이나 카테고리 버튼이 액티브되는 간단한 기능도 구현하려니 막막했다.그 동안 당연하게 사용했던 웹이 대단하게 느껴졌다.
* html태그에 data를 추가해 id와 연결하면서 많은 것을 할 수 있겠다고 느꼈지만, 프로젝트 규모가 커지면 서로 연결되는 관계를 잘 관리 해야 할 것 같다.


## 간단한 쇼핑리스트 (https://github.com/dowon938/shopping-templateDW)
vanillaJS와 json 데이터 파일로 구현한 간단한 쇼핑리스트 앱<br>
<img src="https://user-images.githubusercontent.com/68101878/110258585-adcc8700-7fe6-11eb-8a62-60860ea1e969.gif" width="300">
<img src="https://user-images.githubusercontent.com/68101878/110258607-cdfc4600-7fe6-11eb-8894-9b967696715c.png" width="394">
### 구현사항
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
### 느낀점
* 처음으로 동적으로 데이터를 받아와서 화면에 표시하고 정리해본 프로젝트. 그 동안 백엔드와의 통신이 궁금했는데 실전에서는 이것보다 훨씬 복잡하게 진행되겠지만 간단하게라도 느껴볼수있어서 너무 좋았다.
* 항상 for 문으로 해결하던 것들을, 배열로된 데이터를 받아오면서 배열의 map,filter API를 처음으로 실전으로 적용해보았다.  
<br>
*ps. main.js는 json을 이용하지않고, html에 하드코딩된 tag들을 버튼을 누르면 클래스 별로 분류해주는 식으로 작업했고, 이후 json을 배우며 main2.js로 다시 작업했습니다. 자세한코드가 궁금하시면 main2.js를 참고해주세요.*


## ToDoBalloon (https://github.com/dowon938/ToDoBalloon)
ToDoList앱을 창의적으로 만들어보고 싶어서 만들게 된 앱
![todoballoon3](https://user-images.githubusercontent.com/68101878/110559794-38002100-8188-11eb-8390-5d29dc95be07.gif)
### 구현사항
* 일의 우선순위를 선택할수 있게 해서 그에 따라 색과 크기가 다르게 입력될 수 있도록 구현.
* keyCode를 이용하여 키보드가 입력되는 모습을 가상 키보드로 구현.(추후에 타자연습 앱을 만들어 보고싶었음)
* 
