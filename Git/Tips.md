### 깃 메뉴얼 참조 방법
```
$git help <command> 
```
ex) git help branch

### 깃 branch를 만들고 해당 브랜치로 바로 이동하는 법
```
$git switch -c <new branch name>
```

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
### 브랜치의 이름 변경하기
```
$git switch <target branch>
$git branch -m <newname>
```
원격 브랜치의 이름을 변경하기 위해서는 새로운 이름의 브랜치를 푸시하고 기존 이름을 삭제한다.
```
$git push <remeto repo name> <new branch name>
$git push <remote repo name> --delete <old branch name>
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

### 마지막 HEAD 위치로 옮기기
```
$git checkout -
$git switch -
```  
checkout, switch의 차이는 다음과 같다.
- switch 는 브랜치만을 이동할 수 있으나 checkout은 특정커밋위치를 오갈 수 있다.

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

- 파일을 직접 수정하고 싶을 경우 다음과 같은 명령어로 설정파일을 열 수도 있다.

```
$git config --global -e
```

### gitignore 설정이 반영되지 않는 경우
이미 repository에 추가된 파일은 새로 .gitignore에 추가되더라도 설정이 적용되지 않는다. 이때는 git의 cache를 지우고 WorkTree(프로젝트)를 새로 업데이트 반영해 주어야 한다.

```
$git rm -r --cached .
$git add .
```

### 레퍼런스 충돌 에러가 발생하는 경우

원인은 정확이 모르겠지만 local reference 와 remote reference 의 차이가 발생하여 push, pull 등의 명령어를 입력할 시 다음과 같은 에러가 발생할 경우가 있다.

```
$git push origin hotfix
error: update_ref failed for ref 'refs/remotes/origin/hotfix': cannot lock ref 'refs/remotes/origin/hotfix': 'refs/remotes/origin/hotfix/plaintext' exists; cannot create 'refs/remotes/origin/hotfix'
```
이 때 다음과 같은 명령어로 로컬브랜치에만 존재하는 죽은 가지를 쳐낼 수 있다.
```
$git remote prune origin
Pruning origin
URL: https://github.com/(repoAddress)
 * [pruned] origin/oldBranch
 * [pruned] origin/trashBranch
 ...
```

### 변경사항을 저장하고 불러오기
깃의 기능중에는 서로 다른 커밋의 다른 점을 비교하고 파일로 저장하거나 불러올 수 있도록 하는 기능이 있다.

```
$git diff <commit to compare>
```

위 명령어를 사용하면 현재 staged 된 상태를 기준으로 비교대상 커밋과 다른점을 볼 수 있다.

단순히 보는 것 뿐만 아니라 파일로 저장했다가 적용시킬 수도 있다.

```
$git diff <commit to compare> > file.diff
...
$git apply file.diff
```
apply 명령어를 사용하면 diff의 출력물을 저장한 파일을 읽어와 현재 HEAD 에 적용시킨다. 


### 깃은 subDirectory 에서의 gitignore 도 잘 인식한다.
깃의 내부에 다른 깃 프로젝트가 있더라도 해당 파일을 잘 인식한다.
혹시 인식하지 못할 경우엔 깃 캐시 초기화 명령을 사용하면 잘 적용된다.