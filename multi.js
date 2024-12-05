onmessage = function (e) {
  let data = e.data;
  // 문자열로 받은 값을 숫자로 변환하여 곱셈
  let result = parseInt(data.from) * parseInt(data.to);
  // 결과를 메인 스레드로 전송
  postMessage(result);
};
