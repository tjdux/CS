## HTTP 요청 메시지

```
GET /search?q=hello?hl=ko HTTP/1.1 <- 시작 라인
Host: www.google.com <- 헤더
<- 공백
```

- 요청 메시지도 body 본문을 가질 수 있음
  <br/>

## HTTP 응답 메시지

```
HTTP/1.1 200 OK <- 시작 라인
Content-Type: text/html;charset=UTF-8 <-헤더
Content-Length: 3423
<- 공백
<html> <- message body
	<body></body>
</html>
```

<br/>

## HTTP 메시지 구조

### start-line (시작 라인)

#### 요청 메시지

- request-line + status-line으로 이루어져 있음
  - request-line = method SP(공백) request target SP HTTP-version CRLF(엔터)
    - **HTTP method**
      - GET, POST, PUT, DELETE, ...
      - 서버가 수행해야 할 동작 지정 (GET: 리소스 조회, POST: 요청 내역 처리, ...)
    - 요청 대상
      - absolute-path[?query]
      - 절대 경로: `/`로 시작하는 경로
    - HTTP 버전

#### 응답 메시지

- request-line + status-line으로 이루어져 있음
  - status-line = HTTP-version SP status-code SP reason-phrase CRLF
    - **HTTP 상태 코드**
      - 200: 성공
      - 400: 클라이언트 요청 오류
      - 500: 서버 내부 오류
    - 이유 문구: 사람이 이해할 수 있는 짧은 상태 코드 설명 글

### header (헤더)

- header-field: field-name":" OWS field-value OWS (OWS: 띄어쓰기 허용)
- field-name은 대소문자 구분은 없음
- field-value는 대소문자 구분함
- 용도
  - HTTP 전송에 필요한 모든 부가정보가 들어있음
  - 매우 많은 표준 헤더
  - 필요시 임의의 헤더 추가 가능

### empty line (공백 라인; CRLF)

### message body

- 생략 가능
- 실제 전송할 데이터
- HTML 문서, 이미지, 영상, JSON 등 BYTE로 표현할 수 있는 모든 데이터 전송 가능
