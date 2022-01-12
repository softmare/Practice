### 깃 메뉴얼 참조 방법
$git help <command> 
ex) git help branch

### 깃 branch를 만들고 해당 브랜치로 바로 이동하는 법

$git switch -c <new branch name>

### 로컬 branch를 원격 repo에 등록하는 방법

$git push <remote repo name>

### 로컬 branch가 추적할 원격 repo를 설정하는 방법

$git branch --set-upstream-to=<remote repo name>/<remote branch name>


### 이전 커밋으로 돌아가기

$git reset <commit>


### 깃 사용자 설정

- .git 의 [user] 에 name 및 email 을 채워 넣는다.
