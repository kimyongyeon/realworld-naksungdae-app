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

# 개발 결정 사항

개발파트 담당

1. 메인 - 모두함께~~ : 한동민
2. 로그인/로그아웃/프로필보기/프로필수정/프로필파일업로드/미리보기 : 이지우
3. 아티클목록/아티클상세보기/아티클CRUD/파일업로드/미리보기/텍스트에디터 : 김민정
4. 공통 : 구조, 공통API(Axios, Error, Router) : 한동민, 이지우
5. 데브옵스, 백앤드, react프레임워크 : 김용연

react create-react-app : CSR, react-router(api) create-next-app : SSR, router(folder) (O), TS

es-lint - airbnb, kakao, naver prettier- airbnb, kakao, naver // ts-lint...

기능 - 혼자서~~~~ page login component login... router state

---

담당자 - 협력, 팀플.... login page component state article page component state common state router

객체지향

input - 공통 valid, width, height, 제약사항 textarea button - color, font

loginInput <- input loginButton <- button
