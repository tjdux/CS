## URI
- Uniform Resource Identifier
  - Uniform: 리소스를 식별하는 통일된 방식
  - Resource: 자원, URI로 식별할 수 있는 모든 것 (제한 없음)
  - Identifier: 다른 항목과 구분하는데 필요한 정보
- URI는 로케이터 (locator), 이름 (name) 또는 둘 다 추가로 분류될 수 있음
- URI = URL (Resource Locator) + URN (Resource Name)
  - URL: locator - 리소스가 있는 위치를 지정
  - URN: name - 리소스에 이름을 부여 (e.g. isbn)
  - 위치는 변할 수 있지만, 이름은 변하지 않음 
  - URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화되지 않음 ➡️ 거의 URL만 사용함 
  ```
  URL: foo://example.com:8042/over/there?name=ferret#nose
	URN: urn:example:animal:ferret:nose 
  ```
<br/>

## URL 분석
```
http://www.google.com/search?q=hello?hl=ko
scheme://[userinfo@]host[:port][/path][?query][#fragment]
```
- scheme
  - 주로 프로토콜에 사용
	- 프로토콜: 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙 (e.g. http, https, ftp ...)
  - https: http에 보안 추가 (HTTP Secure)
- userinfo
	- url에 사용자 정보를 포함해서 인증
	- 거의 사용하지 않음 
- host
	- 호스트명
	- 도메인명 또는 ip 주소를 직접 사용 가능 
- port
  - 접속 포트
	- 일반적으로 생략, http는 80 포트, https는 443 포트 주로 사용 
- path
	- 리소스 경로 (path), 계층적 구조 
	- e.g. `/home/file1.jpg`, `/members`, `/members/100`, `/items/iphone12` 
- query
  - key=value 형태
	- `?`로 시작 `&`로 추가 가능 (e.g. `?keyA=valueA&keyB=valueB`)
  - query parameter, query string 등으로 불림: 웹 서버에 제공하는 파라미터이며 문자 형태로 넘어감 
- fragment
  - html 내부 북마크 등에 사용
	- 서버에 전송하는 정보 아님 