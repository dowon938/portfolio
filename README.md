# portfolio

dowon's portfolio

# 간단한 쇼핑리스트 (https://github.com/dowon938/shopping-templateDW)
vanillaJS와 json 데이터 파일로 구현한 간단한 쇼핑리스트 앱<br>
<img src="https://user-images.githubusercontent.com/68101878/110258585-adcc8700-7fe6-11eb-8a62-60860ea1e969.gif" width="300">
<img src="https://user-images.githubusercontent.com/68101878/110258607-cdfc4600-7fe6-11eb-8894-9b967696715c.png" width="394">
## 구현사항
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
## 느낀점
* 처음으로 동적으로 데이터를 받아와서 화면에 표시하고 정리해본 프로젝트. 그 동안 백엔드와의 통신이 궁금했는데 실전에서는 이것보다 훨씬 복잡하게 진행되겠지만 간단하게라도 느껴볼수있어서 너무 좋았습니다.
<br>
*ps. main.js는 json을 이용하지않고, html에 하드코딩된 tag들을 버튼을 누르면 클래스 별로 분류해주는 식으로 작업했고, 이후 json을 배우며 main2.js로 다시 작업했습니다. 자세한코드가 궁금하시면 main2.js를 참고해주세요.*
