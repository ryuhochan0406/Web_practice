# 프로젝트 이름

이 저장소는 챕터별 실습 문제와 주별 강의 자료를 포함한 프로젝트입니다.

---

## 📂 폴더 구조 및 설명

### **Chapter 디렉토리**
- **`Chapter2 ~ Chapter11`**: 교재의 각 챕터별 실습 문제 파일 포함.
  - **Chapter2**: HTML 기본 문서 만들기  
  - **Chapter3**: HTML 문서 구조화와 웹 폼  
  - **Chapter4**: CSS 기초  
  - **Chapter5**: CSS3 고급 활용  
  - **Chapter6**: JavaScript 언어 기초  
  - **Chapter8**: HTML DOM과 Document  
  - **Chapter9**: 이벤트 기초 및 활용  
  - **Chapter10**: 윈도우와 브라우저 관련 객체  
  - **Chapter11**: HTML5 캔버스 그래픽  

### **Week 디렉토리**
- **`Week11`**: 11주차 강의 자료
  - **`arrow-function1.js`**: 화살표 함수와 템플릿 리터럴을 사용한 함수 정의 및 호출  
  - **`arrow-function2.js`**: 일반 함수 선언, 함수 표현식, 화살표 함수 활용  
  - **`callback-function.js`**: 콜백 함수를 이용한 계산 결과 전달 및 출력  
  - **`for-Each.js`**: `forEach` 메서드를 활용한 리스트 순회와 데이터 출력  

- **`Week12`**: 12주차 강의 자료
  - **`callback1.js`**: 콜백 함수와 조건문을 사용하여 동적 함수 실행  
  - **`callback2.js`**: 화살표 함수와 콜백을 이용한 계산 및 출력  
  - **`composition.js`**: 함수형 프로그래밍 기법을 활용한 함수 합성  
  - **`first-class1.js`**: 함수 표현식을 활용한 동적 호출  
  - **`first-class2.js`**: 함수 할당 및 인자로 전달하는 기법 활용  
  - **`first-class3.js`**: `apply`와 `call` 메서드를 사용한 동적 호출  
  - **`parameters1.js`**: 객체를 함수 인자로 전달해 속성을 변경  
  - **`parameters2.js`**: 함수 매개변수 기본값 설정 방법 비교  
  - **`parameters3.js`**: 가변 인자(`...args`)를 사용한 반복 처리  
  - **`scope.js`**: 함수와 중첩 함수 내 스코프 체인 설명  

---

## 📄 주요 파일 설명

### HTML 파일
- **`week1.html`**  
  - 문서 구조화 (`<!DOCTYPE html>`, `<head>`, `<body>`)  
  - 목록 중첩 (`<ol>`, `<ul>`)  
  - 시각적 구분 (`<hr>`)  
  - 계층적 제목 구성 (`<h1>`, `<h3>`)

- **`week2-1.html`, `week2-2.html`**  
  - 문서 구조화 및 목록 중첩  
  - 폼 입력 요소 (`<input>`, `<button>`)  

- **`week8-4.html`, `week8-6.html`, `week8-9.html`**  
  - DOM 조작 (`document.createElement`, `appendChild`)  
  - 이벤트 핸들러 (`onclick`)  

- **`week9-1-1.html`, `week9-1-2.html`**  
  - DOM 요소 선택 (`document.getElementById`)  
  - 함수 정의 및 호출 (`store`)  
  - 세션 스토리지 사용 (`sessionStorage.setItem`)  
  - 이벤트 핸들러 (`onclick`)  

- **`week9-2-1.html`, `week9-2-2.html`**  
  - 날짜 객체 활용 (`new Date`, `getFullYear`, `getMonth`, `getDate`)  
  - 세션 스토리지 저장 및 읽기 (`sessionStorage.setItem`, `sessionStorage.getItem`)  

- **`week10-1.html`**  
  - Web Worker 생성 (`new Worker`)  
  - 데이터 전송 (`postMessage`)  
  - JSON 객체 생성 및 전달 (`parameters`)  

---

### JavaScript 파일
- **`multi.js`**  
  - 메인 스레드로 결과 전송 (`postMessage`)  
  - 워커 태스크 내 계산 수행  

---
