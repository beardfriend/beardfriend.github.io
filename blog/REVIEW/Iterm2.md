---
title: '맥북 터미널 편하게 사용하기'
date: '2021-07-14 22:35:56'
tags: ['ZSH', 'MacOs']
category: 'Review'
subtitle: 'ohmyzsh, '
featuredImgUrl: https://i.postimg.cc/J0kzg3V2/1.png
featuredImgAlt: 'Mountains with a starry sky'
---

# 맥북 터미널 편리하고 예쁘게 사용하기.
# 불친절한 설명 version
![1.png](https://i.postimg.cc/J0kzg3V2/1.png)

맥북 기본 터미널대신, ITERM2라는 터미널을 사용할겁니다.<br>

Iterm2의 장점

하나, 단축키로 터미널을 실행합니다. 

둘, 에러가 난 파일명을 cmd + 클릭했을 때,<br>
vscode에서 파일을 바로 보여줍니다.

셋, 디렉토리 이동을 아주 간단하게 합니다.<br>
요 기능은 iterm2의 기능이라기보다는, zsh의 편리함입니다.

# 🥑 단축키 터미널 실행
![gif](https://i.postimg.cc/05nxf2Ms/2.gif)

![hot](https://i.postimg.cc/4yV41j0S/hot.png)

# 🥑 ITERM2설치

[https://iterm2.com/](https://iterm2.com/)

iterm2를 먼저 다운받아주세요.

# 🥑 HomeBrew 설치

[https://brew.sh/index_ko](https://brew.sh/index_ko)

맥용 패키지 관리자입니다.
윈도우에선  chocolatey, 우분투엔 apt-get, 맥엔 homebrew가 있습니다.
다운받아주세요.

# 🥑 ZSH 설치

```bash
brew install zsh
```

# 🥑 OH-MY-ZSH 설치

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

curl을 이용하여 oh-my-zsh를 설치해줍니다.

여기까지 하셨다면, 기본 준비는 다 된겁니다.

# 🥑  터미널 꾸미기

## oh-my-zsh 테마 바꿔주기

[https://github.com/ohmyzsh/ohmyzsh/wiki/Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

위의 주소를 들어가보시면 다양한 테마가 있습니다.
저는 agnoster라는 테마를 사용할 거고, 가장 대중적입니다.

```bash
vi ~/.zshrc
```

```bash
# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )
```

```plain
esc -> :wq!
```

ZSH_THEME부분을 agnoster로 바꾼 뒤, 저장해주세요.


## 폰트 변경

[https://github.com/naver/d2codingfont](https://github.com/naver/d2codingfont)

저는 네이버에서 만든 D2폰트를 사용합니다.

다운로드 후 iterm2 실행

cmd + , 

preferences 실행

![3](https://i.postimg.cc/8cWjs7B9/3.png)

## Iterm2 색상 변경

https://iterm2colorschemes.com/

전 snazzy를 사용합니다. <br>
위의 주소에 접속하여, snazzy 클릭하면,<br>
긴 코드가 나오는데 신경쓰시지 마시고<br>
주소를 복사해줍니다.

다운받기 전, 터미널에서, 다운받고 싶은 위치로 이동합니다.
```bash
curl -LO https://raw.githubusercontent.com/mbadolato/iTerm2-Color-Schemes/master/schemes/Snazzy.itermcolors
```

# 🥑 zsh 기능 설치

### autojump, zsh-autosuggestions, zsh-syntax-highlighting

![..](https://i.postimg.cc/ZKNJtkV7/4.png)

```bash
brew install autojump

```

```plain

Add the following line to your ~/.bash_profile or ~/.zshrc file:
    [ -f $(brew --prefix)/etc/profile.d/autojump.sh ] && . $(brew --prefix)/etc/profile.d/autojump.sh

```
---
```
brew install zsh-autosuggestions
```

```plain

To activate the autosuggestions, add the following at the end of your .zshrc:

    source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

You will also need to force reload of your .zshrc:

    source ~/.zshrc
```

---
```bash
brew install zsh-syntax-highlighting
```

```plain

To activate the syntax highlighting, add the following at the end of your .zshrc:
    source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

If you receive "highlighters directory not found" error message,
you may need to add the following to your .zshenv:
    export ZSH_HIGHLIGHT_HIGHLIGHTERS_DIR=$(brew --prefix)/share/zsh-syntax-highlighting/highlighters
```

# 🥑 zsh custom

### Delete Computer Name
.zshrc
```bash
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER 🥑"
  fi
}
```


### Cursor in New line
.zshrc
```bash
build_prompt() {
  RETVAL=$?
  prompt_status
  prompt_virtualenv
  prompt_context
  prompt_dir
  prompt_git
  prompt_bzr
  prompt_hg
  prompt_newline //이부분을 추가 꼭 순서 지켜서
  prompt_end
}
```
.zshrc 맨 하단
```bash
prompt_newline() {
  if [[ -n $CURRENT_BG ]]; then
    echo -n "%{%k%F{$CURRENT_BG}%}$SEGMENT_SEPARATOR
%{%k%F{blue}%}$SEGMENT_SEPARATOR"
  else
    echo -n "%{%k%}"
  fi

  echo -n "%{%f%}"
  CURRENT_BG=''
}

```



