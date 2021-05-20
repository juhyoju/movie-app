
## map function

  

- map은 array의 각 item function을 실행하는 array를 가지는 javascript function이며 result를 갖는 array를 준다.
 (array의 각 item에 function을 적용하고 array를 준다)
- map은 array를 취하고 우리가 정확히 원하는 array를 반환한다.

<br>

map에 첫번째 argument를 넣는데 첫번째 argument는 current를 넣자 

```javascript
const friends = ["one", "two", "thr", "four"]
friends.map(current => {
	console.log(current);
	return 0	
}
```

- 4개의 0을 반환한 item들의 array를 가지고 있다 
- map은 function을 취해서 그 function을 array의 각 item에 적용한다
 그리고 각 연산의 결과로 array를 만들고 각 연산의 result는 항상 0이다 
- 따라서, (4) [0, 0, 0, 0] array를 가진다 완벽쓰!

```javascript
friends.map(function(friend) {
	return friend + " 🤍 "; 
})
-> 리턴된 값 ["one 🤍", "two 🤍", "thr 🤍", "four 🤍"]
```

<br>


## propType
- father component로부터 전달받은 props가 우리가 예상한 props인지 점검할 필요가 있다!
- 컴포넌트의 props에 타입 확인을 하려면 특별한 프로퍼티인 propTypes를 선언하면 된다.

```
Food.propTypes = {
	name:  PropTypes.string.isRequired,
	rating:  PropTypes.number.isRequired
}
```