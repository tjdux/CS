## GET

```
// 요청 메시지
GET /members/100 HTTP/1.1
Host: localhost:8080

// 응답 메시지
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 20

{
  "username": "young",
  "age": 20
}
```

- 리소스 조회
- 서버에 전달하고 싶은 데이터는 query(쿼리 파라미터, 쿼리 스트링)를 통해서 전달
- 메시지 바디를 사용해서 데이터를 전달할 수 있지만, 지원하지 않는 곳이 많아서 권장하지 않음
  <br/>

## POST

```
// 요청 메시지
POST /members HTTP/1.1
Content-Type: application/json

{
  "username": "hello",
  "age": 20
}

// 응답 메시지
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 20
Location: /members/200

{
  "username": "hello",
  "age": 20
}
```

- 요청 데이터 처리
- **메시지 바디를 통해서 서버로 요청 데이터를 전달, 서버는 요청 데이터를 처리**
  - 메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능을 수행
  - 어떻게 처리할지는 미리 정해놓음
- 주로 전달된 데이터로 신규 리소스 등록, 프로세스 처리에 사용
- POST의 기능 예시
  - HTML 양식에 입력된 필드와 같은 데이터 블록을 데이터 처리 프로세스에 제공 (e.g. HTML FORM에 입력한 정보로 회원 가입, 주문 등에서 사용)
  - 게시판, 뉴스 그룹, 메일링 리스트, 블로그 또는 유사한 기사 그룹에 메시지 게시 (e.g. 게시판 글쓰기, 댓글 달기)
  - 서버가 아직 식별하지 않은 새 리소스 생성 (e.g. 신규 주문 생성)
  - 기존 자원에 데이터 추가 (e.g. 한 문서 끝에 내용 추가)
- ➡️ **리소스 URI에 POST 요청이 오면 요청 데이터를 어떻게 처리할지 리소스마다 따로 정해야 함 -> 정해진 것이 없음**

### 정리

- 리소스 생성 (등록)
  - 서버가 아직 식별하지 않은 새 리소스 생성
- 요청 데이터 처리
  - **단순한 데이터를 생성하거나, 변경하는 것을 넘어서 프로세스를 처리해야 하는 경우** (e.g. 주문 -> 결제완료 -> 배달 시작 -> 배달완료 처럼 프로세스의 상태가 변경되는 경우)
  - POST의 결과로 새로운 리소스가 생성되지 않을 수 있음
  - 컨트롤 URI
    - 리소스 만으로는 URI를 설계하기 어려운 경우 동사가 URI에 있는 것 (e.g. POST /orders/{orderId}/start-delivery)
    - 컨트롤 URI에 POST 많이 사용
- 다른 메서드로 처리하기 애매한 경우
  - POST는 거의 모든 것을 할 수 있으나 조회를 할 때는 GET 메서드 사용 (POST는 캐싱이 어려우므로)
    <br/>

## PUT

```
// 요청 메시지
PUT /members/100 HTTP/1.1
Content-Type: application/json

{
  "age": 50
}

// /members/100
{
  "username": "hello",
  "age": 20
}

// ➡️ 결과
// /members/100
{
  "age": 50
}
```

- 리소스를 대체
  - 리소스가 있으면 **완전 대체**, 리소스가 없으면 생성
  - 덮어버림
- POST와의 차이점: **클라이언트가 리소스를 식별** (클라이언트가 리소스 위치를 알고 URI 지정)
  <br/>

## PATCH

```
// 요청 메시지
PATCH /members/100 HTTP/1.1
Content-Type: application/json

{
  "age": 50
}

// /members/100
{
  "username": "hello",
  "age": 20
}

// ➡️ 결과
// /members/100
{
  "username": "hello",
  "age": 50
}
```

- 리소스 부분 변경

<br/>

## DELETE

```
// 요청 메시지
DELETE /members/100 HTTP/1.1
Host: localhost:8080
```

- 리소스 제거
  <br/>

## 기타 메서드

- HEAD: GET과 동일하지만 메시지 부분을 제외하고, 상태 줄과 헤더만 반환
- OPTIONS: 대상 리소스에 대한 통신 가능 옵션 (메서드)을 설명 (주로 CORS에서 사용)
- CONNECT: 대상 리소스로 식별되는 서버에 대한 터널을 지정
- TRACE: 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행
