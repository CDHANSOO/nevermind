# NEVERMIND
20231020~20231204
ai를 이용한 콘텐츠 속 코디 인식 및 자연어를 통한 코디 추천 서비스

mz세대는 자신의 취향이 확고하지만 코디 하는것에 어려워하고 시작하기를 힘들어한다. 그래서 패션에 관심을 가지는 10대 및 20대들을 위한 코디 추천 사이트가 필요해보임

# 목차 
- [프로젝트 소개](#NEVERMIND)
- [사용 기술](#사용-기술)
- [네이밍 규칙](#네이밍-규칙)
- [git 협업룰](#git-협업룰)
  - [issue 발생](#Issue-발행)
  - [Feature 브랜치](#Feature-브랜치)


---
# 사용 기술
- React
  - 컴포넌트 기반언어로써, 각자 맡을 기능을 구분하고 합치기 용이함. 또한 Single Page Application을 구현하여 사용자가 페이지를 이용할 때 보다 좋은 경험을 제공할 수 있어 사용하기로 함.
- Vite
  - 번들링이 아닌 ESM으로 인해 로컬서버에서 보다 빠른 서버 피드백을 받아 프로젝트의 변화상태를 즉각적으로 파악할 수 있다. 이러한 점을 통해 개발속도를 단축할 수 있어 사용하기로 함.
- Typescript
  - 동적타입언어인 자바스크립트의 불안한 안정성을 타입을 지정하여 보완하고, 협업할 때 생기는 오류들을 즉각적으로 파악하기 위해 사용하기로 함 
- tailwindCSS
  - 협업시 생기는 클래스 명 중복 이슈와 클래스명을 짓기위해 낭비되는 시간을 최소화하기 위해 사용하기로 함.
- Node.js
  - front-end와 동일한 언어를 사용함으로써, 보다 빠르게 개발할 수 있음. 또한 다양한 라이브러리와 모듈을 지원하기 때문에 사용하기로 함.
- Oracle
  - 비용이 존재하나, 지원을 받는 현재 경험해보고 싶으며 비용이 들어가는 만큼 빠른 처리속도를 자랑하므로 사용하기로 함.
- ElasticSearch
  - 추가 예정

## 네이밍 규칙
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/8e387c16-c984-4514-8321-fd80230a7af2)
### component
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/7b839866-5166-4497-8936-a074466d503e)
- CamelCase
  - 첫글자는 소문자, 두번째 단어부터는 대문자
  - phoneNumber, mainSubPage
### 함수명
- Pascal case
  - 카멜식이랑 비슷하지만, 첫단어를 대문자로 시작
### HTML/CSS (클래스 명 등)
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/2ee9be08-4c98-4f99-905a-0a75ee3a216a)
- kebab-case
  - 먹는 케밥에 꼬챙이를 낀 모습이며, 모두 소문자로 표현함. 단어와 단어 사이 하이픈(-) 사용
  - user-login-log, main-whole-container

# git 협업룰
- issue발행 -> 이슈 기반 브랜치 생성 -> 깃 커밋 -> 깃 푸쉬 -> PR(풀리퀘스트작성)
- 칸반보드, Epic 사용
  
[참고링크]
- [Github로 프로젝트 관리하기 Part3](https://cheese10yun.github.io/github-project-part3/)
- [github 칸반, Epic 참고](https://zakelstorm.tistory.com/32)
  - 이건 들어가서 한번 읽어보길 추천!
## Issue 발행
Issue란?
모든것이 이슈라고 볼 수 있습니다. 새로운 추가될 가능, 개선 해야할 가능, 버그 등등 모든것이 이슈라고 볼 수 있습니다. 모든 활동 내역에 대해서 이슈를 등록하고 그 이슈기반으로 작업을 진행하게 됩니다.

이슈를 등록할 때 자주 사용하는 템플릿을 등록해서 사용하는 방법이 효율적입니다. 이슈 템플릿을 등록하는 방법을 소개해드리겠습니다.
- Assignees : 해당 작업의 담당자(본인 및 해당 파트 같이 작업하는 팀원)
- Labels: 해당 작업의 성격
- Milestone: 해당 작업이 속한 파트
- Reviwer: 해당 PR Merge 승인권자, 코드리뷰 담당자(깃담당자, Jung-eunwoo 지정)


## Feature 브랜치
새로운 기능 개발을 위한 feature 브랜치를 생성할 때 브랜치 이름은 다음과 같은 규칙으로 생성합니다. feature 브랜치는 마지막 develop 브랜치로부터 생성합니다. 꼭 브랜치를 생성하기 전에 develop 브랜치를 pull 받습니다.

`feature/{기능}`
feature 브랜치는 작은 기능 단위로 쪼개어 최대 10개 미만의 커밋으로 구성되도록 합니다. feature 브랜치가 develop 브랜치에 성공적으로 병합되었다면 feature 브랜치는 로컬과 원격에서 삭제합니다.

- feature 브랜치 생성하기

```git checkout -b feature/feature1-main```

### 칸반보드란?
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/2cfca363-1117-434d-91e5-0fa31575b8ce)

https://velog.io/@youa7878/Github-Project-%EC%B9%B8%EB%B0%98




---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
