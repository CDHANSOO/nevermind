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

---


https://velog.io/@youa7878/Github-Project-%EC%B9%B8%EB%B0%98
