# 프로젝트 이름

이 저장소는 챕터별 자료와 주별 자료를 포함한 프로젝트입니다.

---

## 📂 폴더 설명

### Chapter 디렉토리
- **Chapter2 ~ Chapter11**: 각 교재의 챕터별 실습문제 파일이 포함되어 있습니다.
  -chapter2 HTML 기본 문서 만들기
  -chapter3 HTML 문서 구조화와 웹 폼
  -chapter4 CSS기초
  -chapter5 CSS3 고급 활용
  -chapter6 자바스크립트 언어 기초
  -chapter8 HTML DOM과 Document
  -chapter9 이벤트 기초 및 활용
  -chapter10 윈도우와 브라우저 관련 객체
  -chapter11 HTML5 캔버스 그래픽

### Week 디렉토리
- **Week11**: 11주차 강의시간에 배운 자료가 포함되어 있습니다.
  -arrow-function1.js 화살표 함수와 템플릿 리터럴을 사용하여 함수 정의, 호출, 콘솔 출력, 값 반환, 및 연산 수행을 구현한 코드.
  -arrow-function2.js 일반 함수 선언, 함수 표현식, 화살표 함수, 변수 참조를 활용하여 함수 호출, 연산, 콘솔 출력 등을 수행한 코드.
  -callback-function.js 콜백 함수를 활용하여 계산 결과를 전달하고 출력하는 화살표 함수 기반 코드.
  -for-Each.js forEach 메서드와 화살표 함수를 사용하여 학생 리스트의 각 학생에 대해 수학과 과학 점수의 합을 계산하고 출력하는 코드.
  
- **Week12**: 12주차 강의시간에 배운 자료가 포함되어 있습니다.
  -callback1.js 함수 표현식과 조건문을 활용하여 정답에 따라 적절한 콜백 함수(printYes 또는 printNo)를 실행하는 코드.
  -callback2.js 화살표 함수와 콜백 함수를 사용하여 두 수의 합을 계산한 뒤 결과를 출력하는 코드.
  -composition.js 함수형 프로그래밍 기법(함수 합성)을 사용하여 값을 변환하고, 여러 함수를 조합하여 작업을 수행하는 코드.
  -first-class1.js 함수 표현식을 사용하여 함수 print를 정의하고, 이를 다른 변수 printAgain에 할당한 후 두 변수로 함수를 호출하는 코드.
  -first-class2.js 함수를 변수에 할당하거나 인자로 전달하여 동적으로 호출하는 함수형 프로그래밍 기법을 활용한 코드.
  -first-class3.js apply와 call 메서드를 사용하여 다른 객체(sung, jace)를 this로 설정하고, 함수 호출 시 동적으로 인자를 전달하는 코드.
  -parameters1.js 객체를 함수의 인자로 전달했을 때 참조에 의해 변경되어 원본 객체(ellie)의 name 속성이 변경되는 코드.
  -parameters2.js 함수 매개변수의 기본값을 설정하는 다양한 방법을 비교하여 메시지와 발신자를 출력하는 코드.
  -parameters3.js 가변 인자(...args)를 사용하여 전달된 모든 인자를 반복문(for, for...of)과 배열 메서드(forEach)로 순회하며 출력하는 코드.
  -scope.js 함수와 중첩 함수 내에서의 스코프 체인을 보여주며, 지역 변수와 전역 변수를 참조하고 출력하는 코드.

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
