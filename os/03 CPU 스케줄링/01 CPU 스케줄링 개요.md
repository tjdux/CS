## CPU 스케줄링
- 운영체제가 프로세스들에게 합리적이고 공정하게 CPU 자원을 배분하는 것
- 컴퓨터 성능과 직결
<br/>

## 프로세스 우선순위
- 상황과 프로세스의 중요도에 맞게 프로세스가 CPU를 이용할 수 있도록 운영체제가 프로세스 우선순위를 PCB에 명시
- 모든 프로세스가 차례대로 CPU를 이용하는 것보다 상황에 맞게 CPU를 배분하는 것이 더 효율적
  - 입출력 집중 프로세스가 CPU 집중 프로세스보다 우선순위가 더 높은 것이 효율적
  - 입출력 집중 프로세스는 대기 상태가 될 예정이기 때문에 먼저 처리하면 CPU 집중 프로세스가 오랜 시간 CPU 사용 가능
<br/>

## 스케줄링 큐
- 스케줄링 큐
  -  특정 자원을 사용하고 싶은 프로세스들의 줄
  -  무조건 선입선출인 것은 아님 (우선순위가 높은 프로세스 먼저 처리) 
- 준비 큐: CPU를 이용하고 싶은 프로세스들의 줄 (준비 상태)
- 대기 큐
  - 입출력장치를 이용하기 위해 대기하는 프로세스들의 줄 (대기 상태)
  - 각각의 장치마다 큐가 존재  
<br/>

## 선점형과 비선점형 스케줄링
- 선점형 스케줄링
  - 프로세스가 자원을 사용하고 있더라도 운영체제가 프로세스로부터 자원을 강제로 빼앗아 다른 프로세스에 할당할 수 있는 스케줄링 방식
  - 하나의 프로세스가 자원을 독점할 수 없음
  - ➕ 독점을 막고 프로세스들에 자원을 골고루 배분
  - ➖ 잦은 문맥 교환으로 오버헤드 발생 가능성
- 비선점형 스케줄링
  - 프로세스가 자원을 사용하고 있다면 그 프로세스가 종료되거나 스스로 대기 상태에 접어들기 전까지 다른 프로세스가 끼어들 수 없는 스케줄링 방식
  - 하나의 프로세스가 자원 독점
  - ➕ 오버헤드 발생 가능성 낮음
  - ➖ 공정한 자원 배분 불가 
