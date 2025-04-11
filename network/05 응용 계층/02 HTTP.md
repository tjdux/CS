## HTTP의 특성
### 요청-응답 기반 프로토콜
- 클라이언트-서버 구조 기반의 요청-응답 기반 프로토콜
- 클라이언트와 서버가 서로 HTTP 요청 메시지와 HTTP 응답 메시지를 주고받는 구조
- 같은 HTTP 메시지일지라도 HTTP 요청 메시지와 HTTP 응답 메시지는 메시지 형태가 다름
### 미디어 독립적 프로토콜
>The target of an HTTP request is called a "resource". HTTP does not limit the nature of a resource; it merely defines an interface that might be used to interact with resources. Most resources are identified by a Uniform Resources Identifier (URI). - RFC 9110
- HTTP가 요청하는 대상: 자원
- HTTP는 자원의 특성을 제한하지 않으며, 단지 자원과 상호 작용하는 데 사용할 수 있는 인터페이스를 정의할 뿐
- 대부분의 자원은 URI로 식별됨
- ➡️ HTTP는 주고받을 자원의 특성과 무관하게 그저 자원을 주고받을 수단(인터페이스)의 역할만을 수행
- 미디어 타입 (media type 또는 MIME 타입)
  - HTTP에서 메시지로 주고받는 자원의 종류
  - HTTP는 미디어 타입에 특별히 제한을 두지 않고 독립적으로 동작이 가능한 미디어 독립적 프로토콜
  - `type/subtype` 형식
    - type: 데이터의 유형
    - subtype: 주어진 타입에 대한 세부 유형
  - [미디어 타입의 종류](https://www.iana.org/assignments/media-types/media-types.xhtml)
  - 별표(*)는 여러 미디어 타입을 통칭하기 위해 사용
  - `type/subtype;parameter=value` 형식
    - 부가적인 설명을 위해 매개변수를 포함하는 경우도 존재
    - text/html;charset=UTF-8: UTF-8로 인코딩된 HTML 문서 타입 
### 스테이트리스 프로토콜
- 상태를 유지하지 않는 스테이트리스(stateless) 프로토콜
- 서버가 HTTP 요청을 보낸 클라이언트와 관련된 상태를 기억하지 않음
- 클라이언트의 모든 HTTP 요청은 기본적으로 독립적인 요청으로 간주
- 스테이트리스 프로토콜을 사용하는 이유
  - HTTP 서버는 일반적으로 많은 클라이언트와 동시에 상호 작용 → 모든 클라이언트의 상태 정보를 유지하는 것은 서버에 큰 부담
  - 서버가 여러 대로 구성될 수도 있음 → 모든 서버가 모든 클라이언트의 상태 정보를 공유하는 작업은 번거롭고 복잡
  - HTTP가 상태를 유지하는 프로토콜이었다면 클라이언트는 자신의 상태를 기억하는 서버하고만 상호 작용할 수 있게 되어, 특정 클라이언트가 특정 서버에 종속될 수도 → 한 서버에 문제가 발생하면 해당 서버에 종속된 클라이언트는 직전까지의 HTTP 통신 내역을 잃어버리는 상황 발생
  - HTTP의 설계 목표: 확장성 & 견고성
    - **확장성: 필요하다면 언제든 쉽게 서버를 쉽게 추가 가능**
    - **견고성: 서버 중 하나에 문제가 생겨도 쉽게 다른 서버로 대체 가능**
- 스테이트리스 특성을 보완하기 위한 방법: cookie, web storage
### 지속 연결 프로토콜
- 초기 HTTP 버전 (HTTP 1.0 이하)
  - 비지속 연결: TCP 연결을 수립한 후, 요청에 대한 응답을 받으면 연결을 종료
  - 추가적인 요청-응답을 하기 위해서는 다시 TCP 연결을 수립
- 최근 대중적으로 사용되는 HTTP 버전 (HTTP 1.1 이상)
  - 지속 연결 (또는 킵 얼라이브 keep-alive): 하나의 TCP 연결상에서 여러 개의 요청-응답을 주고받을 수 있는 기술
  - 더 빠르게 여러 HTTP 요청과 응답을 처리
<br/>

## HTTP 메시지 구조
![img](https://github.com/user-attachments/assets/e160782d-16a5-47ab-81a8-e3f58ffa304c)
- 시작 라인
  - 요청 라인
    - HTTP 메시지가 HTTP 요청 메시지일 경우의 시작 라인
    - `메서드 (공백) 요청 대상 (공백) HTTP 버전 (줄바꿈)`
      - **메서드** (method)
        - 클라이언트가 서버의 자원(요청 대상)에 대해 수행할 작업의 종류
      - 요청 대상 (request-target)
        - HTTP 요청을 보낼 서버의 자원
        - (쿼리가 포함된) URI의 경로(path) 명시
        - 하위 경로가 없더라도 요청 대상은 슬래시(/)로 표기
      - HTTP 버전 (HTTP-version)
        - 사용된 HTTP 버전
        - `HTTP/<버전>`
  - 상태 라인
    - HTTP 메시지가 HTTP 응답 메시지일 경우의 시작 라인
    - `HTTP 버전 (공백) 상태 코드 (공백) 이유 구문 (줄바꿈)`
      - HTTP 버전 (HTTP-version)
        - 사용된 HTTP 버전
      - **상태 코드** (status code)
        - 요청에 대한 결과를 나타내는 세 자리 정수
      - **이유 구문** (reason phrase)
        - 상태 코드에 대한 문자열 형태의 설명
        - `HTTP/1.1 200 OK`, `HTTP:1.1 404 Not Found`
- 필드 라인 (또는 헤더 라인)
  - 없거나 여러 개
  - 0개 이상의 HTTP 헤더(HTTP header)가 명시
  - HTTP 헤더
    - HTTP 통신에 필요한 부가 정보
    - `헤더 이름: 헤더 값`
- 메시지 본문 (message-body)
  - 존재하지 않을 수도 있음
  - 다양한 콘텐츠 타입이 사용될 수도
 
