## HTTP/0.9

- 팀 버너스리가 제안
- HTML: 하이퍼텍스트 마크업 언어 (하이퍼텍스트를 작성할 수 있는 마크업 언어)
- HTTP: 하이퍼텍스트 전송 규약 (http module)
- httpd: HTTP 서버 프로그램 (my_server.js)
- WorldWideWeb: 최초의 웹 클라이언트 (my_client.js)
- 1990년 프로토콜 완성
- 1991년 외부 공개
  <br/>

## HTTP/1.0

- 이때부터 IETF에서 RFC 정식 표준으로 관리
- 메소드: `GET`, `POST`, `HEAD`
- 헤더 도입: `Last-modified`, `Expires`,..
  <br/>

## HTTP/1.1

- 메소드 추가: `PUT`, `PATCH`, `DELETE`, `options`, `trace`
- 캐싱 관리: `ETag`, `Cache-Control`
- `keep-alive`헤더 도입: TCP 연결을 재사용하여 HTTP 메시지를 여러번 주고받을 수 있음
  <br/>

## HTTP/2

- SPDY 프로토콜 기반
- 헤더 압축 가능
- 스트림 방식의 통신
  <br/>

## HTTP/3

<BR/>

## HTTP 핵심 요소

- URL: 인터넷 상의 자원을 식별
- 헤더: http 동작과 실제 데이터의 메타 데이터를 기술
- 본문: 실제 데이터
- 상태코드
