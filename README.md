> ## ✏️ FE 21기 기초 프로젝트 : OpenMind

- 일정 : 2025. 12. 16 ~ 2026. 1. 3
  <br> 12월 31일~1월 2일(버그수정, 리팩토링, README정리, 시연영상 만들기, 배포)
- 팀명 : FE 21기 Part2 1팀
- 배포 URL : vercel -

> ## 💻 프로젝트 소개

- 프로젝트명 : OpenMind<br>
- 프로젝트 소개 : 질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼인 '오픈마인드'<br>
  자유롭게 질문을 생성하고 답변 할 수 있습니다.&ensp;또한 링크를 통해서 질문과 답변을 공유할 수 있습니다.
- 프로젝트 기획 요구사항
  <br>디자인 시안: [오픈마인드 피그마](https://www.figma.com/file/abJyeeWMrJw2YN9wZFHst8/AAA---%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AB%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%B3?type=design&node-id=0-1&mode=design&t=yJBEo6BNABVaF7lv-0)
  <br>Swagger 문서 : https://openmind-api.vercel.app/docs/
  <br>API 명세서 : [오픈마인드 API 명세](https://www.notion.so/f431f6b5e2a84d1fbc483eb87742261d?pvs=21)

> ## 🎯 프로젝트 목표

이번 기초 프로젝트는 팀원 모두가 처음으로 진행하는 프로젝트인 만큼, 완벽한 결과물보다는 **프로젝트를 끝까지 완주**하며 **개발의 전체적인 흐름을 이해하는 경험**을 **1차적인 목표**로 삼았습니다.

저희 팀은 제한된 일정 안에서 **각자의 역량을 고려해 역할을 분담**하고, **각자 맡은 부분에 책임감**을 가지고 **끝까지 완성하는 과정을 중요**하게 생각했습니다. 단순히 기능 구현에 그치지 않고, 본인이 담당한 작업에 대해 **왜 이러한 방식으로 구현**했는지 **스스로 설명**할 수 있을 정도의 **이해를 목표로 차근차근 프로젝트를 진행**하고자 합니다.

이를 통해 협업 과정, 개발 흐름, 그리고 결과물에 대한 책임감을 함께 경험하는 것을 본 프로젝트의 핵심 가치로 설정했습니다.

<br>

> ## 🗓️ 개발 일정

- **25년 12월 16일:** R&R 분배 후 작업시작
- **25년 12월 19일:** 1차 중간 점검
- **25년 12월 24일:** 2차 중간 점검
- **~12월 30일:** 최종 테스트, 리펙토링, 버그수정, README정리, 시연영상제작, 배포
- **1월 2일:** 발표
- **프로젝트종료:** 1월 3일 자정까지

<br>

> ## 🛠 사용된 기술 스택 및 도구

- **프레임워크**: React (Vite)
- **상태 관리**: useState, Context API
- **스타일링**: CSS Module (module.css)
- **데이터 통신**: Axios (외부 라이브러리 1개 사용)
- **라우팅**: React Router
- **개발 및 버전 관리**: VS Code, Git / GitHub
- **빌드 및 배포**: NPM, Vercel
- **협업**: Git / GitHub, Discord, Google Docs
- **기술 스택 선택 이유:**
  본 프로젝트에서는 다양한 외부 라이브러리를 적극적으로 활용하기보다는, 라이브러리를<br>
  사용하기 이전에 기본적인 개념과 동작 원리를 직접 이해하는 것을 목표로 기술 스택을 구성했습니다.<br>
  특히 상태 관리와 라우팅과 같은 핵심 기능에 대해 내부적으로 어떤 방식으로 구현될 수 있는지를 이해하고<br>
  설명할 수 있는 수준에 도달하는 것을 중요하게 생각했습니다.<br>
  이를 통해 각 기술이 프로젝트 내에서 어떤 역할을 수행하는지 전반적인 구조와 흐름을 파악하는 경험을<br>
  목표로 했습니다.

<br>

> ## 👥 팀원 소개 및 역할

<table width="100%" style="table-layout: fixed;">
  <tr>
    <td align="center" width="50%" style="padding:20px;">
      <h3>김용현</h3>
      <a href="https://github.com/mukiiru">@mukiiru</a>
      <br><br>
      ⭐ 파일 구조 및 스타일 세팅<br>
      ⭐ 메인 페이지<br>
      ⭐ 질문하기 모달<br>
      ⭐ 공통 컴포넌트 만들기
    </td>
    <td align="center" width="50%" style="padding:20px;">
      <h3>이정용</h3>
      <a href="https://github.com/jaywai-lee">@jaywai-lee</a>
      <br><br>
      ⭐ 깃 초기 세팅<br>
      ⭐ PR권한<br>
      ⭐ 디스코드 연결<br>
      ⭐ 질문 목록 페이지<br>
    </td>
  </tr>

  <tr>
    <td align="center" width="50%" style="padding:20px;">
      <h3>유지효</h3>
      <a href="https://github.com/jihyoyoo">@jihyoyoo</a>
      <br><br>
      ⭐ 문서작업<br>
      ⭐ 답변하기 페이지<br>
    </td>
    <td align="center" width="50%" style="padding:20px;">
      <h3>이해인</h3>
      <a href="https://github.com/leehi9558">@leehi9558</a>
      <br><br>
      ⭐ README 작업<br>
      ⭐ 질문 목록 페이지<br>
    </td>
  </tr>
</table>

---

> ## 📢 팀 규칙

- 4시간 동안 해결되지 않은 문제는 공유하기
- 팀회의 시간에 합의된것만 작업하기 (필요하다면 팀회의 요청)
- 코어시간(필수 상주시간) : 1시~5시
- 코어시간 외에 필요한 경우에는 긴급 회의 열기
- 합의되었을 경우에만 기술스택 변경 가능
- 매일 `merge`하기

<br>

> ## 💡 기능 요구사항

> 페이지 구성

- 메인 페이지 (`/`)
- 질문 목록 페이지 (`/list`)
- 개별 피드 페이지 (`/post/{id}`)
- 답변하기 페이지 (`/post/{id}/answer`)

<br>

> 핵심 기능

- 질문 목록 조회
- 개별 질문 상세 조회
- 질문 작성
- 답변 작성
- 카카오톡 / 페이스북 공유 API 연동

<br>

---

> ## 📁 폴더 구조

```
21-1/OpenMind
  ├── src
  │    ├── api
  │    ├── components
  │    │     └── common
  │    ├── contents # 특정 페이지 전용
  │    ├── contexts
  │    ├── hooks
  │    ├── pages
  │    ├── styles # 컬러 / 폰트 / 공통스타일 등
  │    ├── utils
  ├── public
  │    └── assets
  │          ├── icons # 파비콘 등
  │          └── images # 이미지
  └── README.md
```

---

> ## API 설계

- **API 통신 방식**: REST API
- **예시**:
  - GET /list : 리스트 목록 조회
  - POST /list : 리스트 생성

---

> ## ✨ 깃 커밋 컨벤션 & Branch 전략

### 커밋 컨벤션 (Gitmoji 기반)

| 아이콘 |   타입   |         설명         |            목적             |
| :----: | :------: | :------------------: | :-------------------------: |
|   ✨   | Feature  |   새로운 기능 추가   |   Introduce new features    |
|   🐛   |   Fix    |      버그 수정       |          Fix a bug          |
|   📝   |   Docs   | 문서 추가 / 업데이트 | Add or update documentation |
|   ♻️   | Refactor |       리펙토링       |        Refactor code        |
|  🚑️   |  Hotfix  |       긴급수정       |       Critical hotfix       |

```
// 커밋 메세지 예시
// [깃모지][타입]: [설명]
// 타입은 소문자로 시작,
// 타입: 작성 후 한칸 띄우고 설명 작성하기

// 예시
✨ feat: 헤더 네비게이션 UI 구현
🐛 fix: 타이머 종료 시 alert가 두 번 뜨는 문제 수정
🔥 remove: .DS_Store 파일 삭제
```

### Branch 전략 - GitHub Flow

- `main`
  - `feature/*`,
- `main`&ensp;브랜치 1개 유지
- 기능 단위 `feature`&ensp;브랜치 생성 후 PR 병합
- `반드시 conflict가 나면 팀원들과 공유 후 해결`(간단한 건 혼자 해결)
- `PR merge`: merge and squash 방식, `3인 이상` approve되어야 `merge` 가능

```txt
> 새로운 작업 시작할 때
git checkout main
git pull origin main
git checkout -b feature/기능_이름

> 파일 커밋할 때
git add .
git commit -m "기능 추가: 설명"

> 작업 도중 main 브런치에 다른 팀원의 변경사항이 병합되었다면
git checkout main
git pull origin main
git checkout feature/기능_이름
git merge main

> 작업 끝나고 레포지토리에 올릴 때
git checkout main
git pull origin main
git checkout feature/기능_이름
git merge main
git push origin feature/기능_이름

```

---

> ## 컨벤션 및 도구 설정

### ✨ 코드 컨벤션

#### 앞은 특정대상, 뒤는 기능으로 네이밍

1. **네이밍 규칙**

- 기본 네이밍: camelCase
- 컴포넌트명: PascalCase, 단순한 명사 사용 (Search, Header, Login 등)
- 함수/변수명: 앞은 대상, 뒤는 기능 (예: `selectSort`, `fetchQuestionList`)
- 이벤트 핸들러명: handleSubmit 형태
- 네이밍 길이: 최대 25자 내에서 의미를 풀어서 작성
- 파일명: 대상 + 기능 형태로 작성 (예: `questionList.jsx` )

2. **식별자 규칙**

- 단수형 데이터: (예: `item` )
- 배열: 복수형 (예: `items` )
- 객체: 명사형 사용 (예: `selectedItem`)
- Boolean 값: is~, has~ 사용 (예: `isLoading`, `hasError`)

3. **코드 작성 규칙**

- 불필요한 Fragment 사용 지양
- 주석은 필요한 경우에만 작성

### 포매팅 / 린트

- Prettier + ESLint 사용
- 들여쓰기: 공백 2칸

<br>**Prettier 설정**

```
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2
}
```

<br>

> ## 💡 Jira 가이드

**1. feature 만들기**

- 보드나 목록에서 만들기를 선택하고, 유형을 feature 로 하고, 상위항목을 에픽(오픈마인드 앱 출시)를 선택한다.

- 담당자에 본인이름을 적고, 내용에 할일을 적는다(이때 최소한의 기능단위로 만들어야한다)

- 생성된 **feature**에서 **feature**번호를 부여받는다 . <br>
  상세보기를 클릭하면 좌측 상단에 [ECS-13](https://mukiiru.atlassian.net/browse/ECS-12) 같은 키값이 **feature**번호이다.

**2. 생성된 feature 번호로 git 브랜치 이름 작성 규칙 적용하기 (예시)**

일반적으로 Git 브랜치 이름은 공백 대신 하이픈(`-`)이나 언더스코어(`_`)를 사용하고, 모두 소문자로 작성하는 것이 관례

**예시 A: 하이픈(-)을 구분자로 사용 (권장)**

가장 흔히 사용되는 방식입니다.

`feature/ECS-13-사용자-회원가입-기능-구현`

- **`feature/`**: 브랜치 유형 (관례적으로 사용)
- **`ECS-13`**: Jira 이슈 키 (고유 번호)
- **`사용자-회원가입-기능-구현`**: 이슈 요약 내용을 소문자와 하이픈으로 연결

<br>
