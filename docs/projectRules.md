
- [네이밍 규칙](#네이밍-규칙)
- [git 협업룰](#git-협업룰)
  - [커밋 룰](#커밋-룰)
  - [ai 코드리뷰](#ai-코드리뷰)
---

## 네이밍 규칙
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/8e387c16-c984-4514-8321-fd80230a7af2)
### component
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/7b839866-5166-4497-8936-a074466d503e)
- Pascal case
  - 카멜식이랑 비슷하지만, 첫단어를 대문자로 시작
  - PhoneNumber, MainSubPage

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
예시
```feature/5-login-signin-page``` 

## PR 발행 후
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/4adae474-30a1-46e1-9bef-437d72ee0979)
- reveiwer : Jung-eunwoo
- Assignee : Assign your self
- Projects : [CDHANSOO] NEVER MIND 선택
  - Status : (기본) Todo, (프로젝트 진행 중이면) In progress, (완료 시, Close PR) Done
    - 해당 PR 진행상황에 따라 유동적으로 변경

### 칸반보드란?
![image](https://github.com/CDHANSOO/nervermind/assets/136785138/2cfca363-1117-434d-91e5-0fa31575b8ce)

## 커밋 룰
- 제목은 최대 50글자까지 아래에 작성: ex) Feat: Add Key mapping  

- 본문은 아래에 작성  

- 꼬릿말은 아래에 작성: ex) Github issue -23  

--- COMMIT END ---  
-   <타입> 리스트  
  -   feat        : 기능 (새로운 기능)  
  -   fix         : 버그 (버그 수정)  
  -   refactor    : 리팩토링  
  -   design      : CSS 등 사용자 UI 디자인 변경  
  -   comment     : 필요한 주석 추가 및 변경  
  -   style       : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)  
  -   docs        : 문서 수정 (문서 추가, 수정, 삭제, README)  
  -   test        : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)  
  -   chore       : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)  
  -   init        : 초기 생성  
  -   rename      : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우  
  -   remove      : 파일을 삭제하는 작업만 수행한 경우  
------------------  
-   제목 첫 글자를 대문자로
-   제목은 명령문으로  
-   제목 끝에 마침표(.) 금지  
-   제목과 본문을 한 줄 띄워 분리하기  
-   본문은 "어떻게" 보다 "무엇을", "왜"를 설명한다.  
-   본문에 여러줄의 메시지를 작성할 땐 "-"로 구분  
------------------  
-   <꼬리말>  
  -   필수가 아닌 optioanl  
  -   Fixes        :이슈 수정중 (아직 해결되지 않은 경우)  
  -   Resolves     : 이슈 해결했을 때 사용  
  -   Ref          : 참고할 이슈가 있을 때 사용  
  -   Related to   : 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)  
 ex) Fixes: #47 Related to: #32, #21  
---

## ai 코드리뷰
- OPENAI API를 활용한 AI 코드리뷰 기능 추가
- 사람이 일일히 코드를 확인해야 했던 기존에 비해 시간 절약 가능하여 추가함
https://github.com/anc95/ChatGPT-CodeReview/blob/main/README.ko.md
https://velog.io/@youa7878/Github-Project-%EC%B9%B8%EB%B0%98
