### 태그란

태그는 주로 버전을 표기하기 위해 사용한다.

태그를 만드는 명령어는 다음과 같다.

```
$git tag (-a) <tag name>
```

태그는 Annotated, LightWeight 두가지 타입이 있다.

#### Annotated Tag

태그를 만든 사람, 이메일, 만든 날짜, 태그 메세지를 함께 저장하는 태그이다. 
git tag 에서 -a 옵션을 붙여 만들 수 있다. 

#### LightWeight Tag

가르키는 커밋의 체크썸(id)만 기억하는 태그이다.
-a 옵션을 붙이지 않으면 이 속성의 태그로 생성된다.

### 태그 푸시하기

특정 태그를 푸시하기 위해 아래의 명령어를 사용할 수 있다.
```
$git push <remote name> <local tagName>
```

모든 태그를 푸시하기 위해선 --tags 옵션을 추가하면 된다.
```
$git push <remote name> --tags
```

### 태그로 헤드 옮기기
```
$git checkout tags/<tagName>
```

