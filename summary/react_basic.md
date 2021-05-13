## React 원리 1
	
React는 모든 요소를 생성한다는 것  
Javascript로 생성하고, HTML로 요소를 밀어 넣는 방식 (?)

- React는 index.html 의 id="root" 박스 자식으로 app.js 의 component를 넣는다.
- 브라우저 소스코드에서는 기본적으로 빈 index.js 이다. (예: app.js에 입력한 `<h1>` 태그가 없는 빈 index.html)
- React는 application이 로드할 때 빈 HTML을 로드하게 되고 그 다음 React가 component들을 작성했던 HTML을 밀어넣는다.

<br>

❗❗ **Virtual DOM** ❗❗
>virtual : 존재하지 않는다. 가상의.

- 보다시피 소스코드에서는 입력했던 component들이 존재하지 않는다.
- React가 따로 그것들을 만들어내는 데에 속도가 상당히 빠르다.
- 변화된 하나의 아이템만 update된다.

<br>

## Component와 JSX
#### ❗❗ Component란?
html을 반환하는 함수이다.

- index.js 에서 `<App />`은 Component이다.
- React는 component와 함께 동작한다.
- component가 data를 보여지게 한다.
- react는 component를 사용해서 HTML 작성하려는 경우에 필요

**App.js**  
App.js의 funcion App을 가지고 있고, HTML을 반환한다.
```javascript	
function  App() {
	return ( )
}
```
#### ❗❗  JSX란?
 Javascript와 HTMl 사이의 조합  
 **Javascript 안의 HTML**
- react에서 시작된 유일한 개념
- component에 정보를 보낼 수 있다.
-  재사용이 가능한(반복 사용이 가능한) component를 만들 수 있다.

<br>

#### ❗❗ 어떻게 component를 만들까?
1. component를 작성할 때마다 ```import React from "react"``` 작성 필요  
(react가 jsx가 있는 component를 사용하는 것을 이해하기 위해)

3. `function Potato() `  
(대문자로 시작하는 Potato가 함수)

4. `return ()`
5. `export default Potato;`
6. Potato 사용

#### ❗ ❗  어떻게 생성한 component를 사용할까?
index.js에 App을 import하고 있는 것처럼 생성한 Potato를 import하게 되면 작동하지 않음  
(인접한 jsx요소를 가지게 하지 않는다는 오류 메세지)    

✅ react application은 하나의 component만을 rendering 해야하는데 index.js에서는 그 component가 App 이기 때문  

**따.라.서.**  
Potato를 App 내부에 추가하자.
- App.js 내부에 potato `import`
( ./ : directory를 의미, App.js와 같은 directory)
 ```javascript
 "import Potato from './potato';
 ```
 - `<Potato /> `로 호출
 
>react는 Component를 가져와서 브라우저가 이해할 수 있는 평범한 HTML으로 만들었음

<br>

## 정리

- 만들고 싶은 만큼 component를 만들 수 있고, 만들어낸 component를 return 할 수 있다.
- react application은 한 번에 하나의 component만 rendering할 수 있다.
- application 안에서 많은 component를 넣을 수 있고, 이러한 component안에 더 많은 component를 import 할 수 있다.