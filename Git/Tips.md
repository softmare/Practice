### 깃 메뉴얼 참조 방법
$git help <command> 
ex) git help branch

### 깃 branch를 만들고 해당 브랜치로 바로 이동하는 법

$git switch -c <new branch name>

### 로컬 branch를 원격 repo에 등록하는 방법
```
$git push <remote repo name> <Branch Name>
```
### 로컬 branch가 추적할 원격 repo를 설정하는 방법

```
$git branch --set-upstream-to=<remote repo name>/<remote branch name>
```
또는 브랜치를 푸시할 때 다음과 같이 -u 옵션을 붙여서 부시한다.
```
$git push <remote repo name> -u <branch name>
```

### 이전 커밋으로 돌아가기
```
$git reset <commit>
```
ex) git reset HEAD~1
- 현재 헤더로 부터 1 커밋 뒤로 리셋한다.
- 기본적으로 --mixed 옵션으로 리셋된다. (작업기록은 남아있지만 stage에서 내려온다.)
- --soft reset은 작업기록(workTree)과 파일 추가기록(index) 도 그대로 남아있다.
- --hard reset은 작업기록과 파일 추가기록 모두 삭제하며 대상 커밋의 상태로 변한다.


### 깃 사용자 설정

- 사용하는 기기의 기본 사용자를 설정하기 위해서는 git config --global user.name "<username>" 명령을 사용한다.
```
$git config --global user.name "Taehyeng Kim"
```
- 로컬 레포지토리의 사용자 설정을 위해서는 .git/config 파일의 [user] 에 name 및 email 을 채워 넣는다.
```
[user]
    name = Taehyeong Kim
```
