
## React 원리 2

  

#### ❗❗ application에서 food component를 정보로 받은 다음 food component에서 그 정보를 어떻게 사용할까?

  어떤 것의 이름 속성을 따옴표와 텍스트를 쓰는 것과 같은 방식  
= jsx (예: `<Food fav = "Kimchi" /> `)

 **food component**에 정보를 보내는 방법이다.
이후 refresh 시 아무 변화가 없는 것은 정보를 보냈지만 그 정보를 사용하지 않았기 때문

  <br>
  
## prop
**❗❗ 리액트 개념 ❗❗**
component에 value로 prop(=property) name을 준다(?)

**[이해]**
```javascript
<Food fav = "Kimchi" />
```
 food component에 `fav`라는 이름의 `propoerty`를 `kimchi`라는 `value`를 준다.

<br>

#### ❗❗ 어떻게 props을 사용할까?
- react가 전달한 props를 가져가는 일을 한다.  
- father component에서 children component로 원하는 많은 props를 보낼 수 있다.  
(예: ```<Food fav="kimchi" taste ={true}, kind = {["kind", 1, 2, true]}>```)
- food component로 정보를 보내려고 할 때, react는 이 모든 속성을 가져온다.
- food function component의 argument(인자)로 넣는다.

<br>

#### ❗❗ 내부에서 props을 얻는 방법
`object : component로 전달된 모든 props들`

props object 내부에는 fav가 있다.
```javascript
function Food(props) {
  return <h1>I love {props.fav}</h1> 
}
```
```javascript
function Food({ fav }) {
  return <h1>I love {fav}</h1> 
}
```
- 두 가지 표현 방식은 동일한 것
- 되도록 props 내부에서 fav를 가져오는 방식으로 사용할 것  (props를 쓸 필요가 없도록)


```html
<h1>i love {fav}</h1>
```
` <Food fav = "kimchi" />` 가 반영되어 I love Kimchi


<br>

#### 다른 component를 추가해보자
동적데이터가 있는 component가 있어 jsx + props의 힘으로 모두 재사용할 수 있다.

예) 
```
<Food fav = "kimchi" />
<Food fav = "ramen" />
<Food fav = "chukumi" />
```
결과) 
```
I love kimchi
I love ramen
I love chukumi
```

## 정리
- component는 대문자로 시작해야하고 component로 정보를 보낼 수 있다.
- props란? 어떻게 뭐든지 component에 넣게 되는 것들 (=fav)


 