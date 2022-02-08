### .gitconfig 파일의 위치
#### Windows
System : <git_install_root>\mingw32(or 64)\etc\gitconfig
Global : C:\users\<username>\.gitconfig
Local : <git repository root>\.git\config

#### Ubuntu
System : /etc/gitconfig
Global : ~(user home)/.gitconfig
Local : <git repository root>/.git/config

#### 쉽게 파일을 여는 법
git config의 범위 옵션을 붙인 뒤 -e 옵션을 붙이면 편집기에서 직접 config파일을 수정할 수 있다.
기존에 사용되고 있는 설정들 또한 볼 수 있다.

$ git config <--global | --system | (--local, defalut) > -e