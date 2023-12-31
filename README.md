# NEVERMIND
20231020~20231204

ai를 이용한 콘텐츠 속 코디 인식 및 자연어를 통한 코디 추천 서비스
mz세대는 자신의 취향이 확고하지만 코디 하는것에 어려워하고 시작하기를 힘들어한다. 그래서 패션에 관심을 가지는 10대 및 20대들을 위한 코디 추천 사이트가 필요해보임
![231202 JSA-코딩한수-실전프로젝트 발표자료_최종-영상](https://github.com/CDHANSOO/nevermind/assets/136785138/bd30b9fc-f9c2-4daf-92e6-c5e61137ebf1)

https://youtu.be/UB7PiUa9yMk

# 목차 
- [프로젝트 소개](#NEVERMIND)
- [사용 기술](#사용-기술)
- [git 협업룰](docs/projectRules.md)
- [getting start](#getting-start)

---

## 사용 기술
- React
  - 컴포넌트 기반언어로써, 각자 맡을 기능을 구분하고 합치기 용이함. 또한 Single Page Application을 구현하여 사용자가 페이지를 이용할 때 보다 좋은 경험을 제공할 수 있어 사용하기로 함.
- Vite
  - 번들링이 아닌 ESM으로 인해 로컬서버에서 보다 빠른 서버 피드백을 받아 프로젝트의 변화상태를 즉각적으로 파악할 수 있다. 이러한 점을 통해 개발속도를 단축할 수 있어 사용하기로 함.
- Typescript
  - 동적타입언어인 자바스크립트의 불안한 안정성을 타입을 지정하여 보완하고, 협업할 때 생기는 오류들을 즉각적으로 파악하기 위해 사용하기로 함 
- tailwindCSS
  - 협업시 생기는 클래스 명 중복 이슈와 클래스명을 짓기위해 낭비되는 시간을 최소화하기 위해 사용하기로 함.
- express.js
  - 딥러닝 모델과 fastapi와의 효율적인 통신등 HTTP요청을 처리할 수 있는 능력이 Next.js보다 뛰어나다고 생각해 사용했습니다.
- Node.js
  - front-end와 동일한 언어를 사용함으로써, 보다 빠르게 개발할 수 있음. 또한 다양한 라이브러리와 모듈을 지원하기 때문에 사용하기로 함.
- Oracle
  - 비용이 존재하나, 지원을 받는 현재 경험해보고 싶으며 비용이 들어가는 만큼 빠른 처리속도를 자랑하므로 사용하기로 함.

  
## getting start
- 프로젝트 다운 후 아래의 경로에서 각각의 터미널에 순서대로 입력하기
![화면 캡처 2023-11-22 172955](https://github.com/CDHANSOO/nevermind/assets/136785138/b1f7743e-5bd9-4ec8-8aad-67eb60692f7b)
### /nevermind
```
npm install
```
```
npm run dev
```
### /nevermind/server
```
npm install
```
```
node server.js
```
