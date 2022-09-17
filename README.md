# git 브랜치

- feature/kimyongyeon : 브랜치 만들어 작업
- feature/jiu
- feature/min
- feature/han
- main : 배포 브랜치

# merge PR

1. PR요청을 한다.
2. code 리뷰
3. 머지

# git comment 전략

1. feature 기입 방법

```
- [feature/login] 로그인 유효성 체크 기능 구현
 - inputbox 수정
 - inputbox 간격조절
```

2. edit

```
- [edit/login] 로그인 버그 수정
```

3. hotfix

```
- [hotfix/login] 로그인 긴급 수정
```

# 개발환경셋팅 버전관리

- node : 16.0^
- tool : vscode(권장), webstorm(선택)

# 주의

최초 클론시 yarn은 무조건 명령어를 넣길 바람.

# 개발실행 순서 - 개발모드

1. git clone ~~
2. yarn
3. yarn dev

# 운영모드 순서

1. yarn build
2. yarn start
