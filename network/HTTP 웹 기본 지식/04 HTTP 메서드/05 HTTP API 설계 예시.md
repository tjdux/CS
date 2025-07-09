## API 설계 - POST 기반 등록

### 회원 관리 시스템

- 회원 목록 /members -> `GET`
- 회원 등록 /members -> `POST`
- 회원 조회 /members/{id} -> `GET`
- 회원 수정 /members/{id} -> `PATCH`, `PUT`, `POST`
- 회원 삭제 /members/{id} -> `DELETE`

### POST - 신규 자원 등록 특징

- 클라이언트는 등록될 리소스의 URI를 모름
- **서버가 새로 등록된 리소스 URI를 생성**
  ```
  HTTP/1.1 201 Created
  Location: /members/100
  ```
- **컬렉션 (Collection)**
  - 서버가 관리하는 리소스 디렉토리
  - 서버가 리소스의 URI를 생성하고 관리
  - 여기서 컬렉션은 /members
    <br/>

## API 설계 - PUT 기반 등록

### 파일 관리 시스템

- 파일 목록 /files -> `GET`
- 파일 조회 /files/{filename} -> `GET`
- 파일 등록 /files/{filename} -> `PUT`
- 파일 삭제 /files/{filename} -> `DELETE`
- 파일 대량 등록 /files -> `POST`

### PUT - 신규 자원 등록 특징

- **클라이언트가 리소스 URI를 알고 있어야 함**
  ```
  PUT /files/star.jpg
  ```
- 클라이언트가 직접 리소스의 URI를 지정
- **스토어 (Store)**
  - 클라이언트가 관리하는 리소스 저장소
  - 클라이언트가 리소스의 URI를 알고 관리
  - 여기서 스토어는 /files
    <br/>

## HTML FORM 사용

### 회원 관리 시스템

- 회원 목록 /members -> `GET`
- 회원 등록 폼 /members/new -> `GET`
- 회원 등록 /members/new 또는 /members -> `POST`
- 회원 조회 /members/{id} -> `GET`
- 회원 수정 폼 /members/{id}/edit -> `GET`
- 회원 수정 /members/{id}/edit 또는 /members/{id} -> `POST`
- 회원 삭제 /members/{id}/delete -> `POST`

### HTML FORM 특징

- GET, POST만 지원 (AJAX 같은 기술을 사용해서 해결 가능하기도 함)
- **컨트롤 URI**
  - GET, POST만 지원하므로 제약이 존재
  - 제약을 해결하기 위해 동사로 된 리소스 경로 사용
  - 문서, 컬렉션, 스토어로 해결하기 어려운 추가 프로세스 실행
  - e.g. `/new`, `/delete`, `/edit`
  - HTTP 메서드로 해결하기 애매한 경우에 사용
