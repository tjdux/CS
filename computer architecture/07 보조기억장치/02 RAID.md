## RAID의 정의
- RAID (Redundant Array of Independent Disks)
  - 주로 하드 디스크와 SSD를 사용하는 기술
  - 데이터의 안전성 혹은 높은 성능을 위해 여러 개의 물리적 보조기억장치를 마치 하나의 논리적 보조기억장치처럼 사용하는 기술
<br/>

## RAID 종류
### RAID 0
- 여러 개의 보조기억장치에 데이터를 단순히 나누어 저장하는 구성 방식
- 저장되는 데이터가 하드 디스크 개수만큼 나누어 저장
- 스트라입 (stripe): 줄무늬처럼 분산되어 저장된 데이터
- 스트라이핑 (striping): 분산하여 저장하는 것
- 장점: 입출력 속도 향상
- 단점: 저장된 정보가 안전하지 않음
![image](https://github.com/user-attachments/assets/9406c3eb-697a-4c98-ac7c-2e17ad3eae02)
### RAID 1
- 복사본을 만드는 방식 (미러링 mirroring)
- 데이터를 쓸 때 원본과 복사본 두 군데에 씀
- 장점: 매우 간단한 복구
- 단점
  - RAID 0보다 느린 쓰기 속도
  - 하드 디스크 개수가 한정되었을 때 사용 간으한 용량이 적어짐 ➡️ 많은 양의 하드 디스크가 필요하게 되고, 비용 증가
![image](https://github.com/user-attachments/assets/e41f6913-99f7-435f-a343-11d4a1c96beb)
### RAID 4
- 오류를 검출하고 복구하기 위한 정보를 저장한 장치를 두는 구성 방식
- 패리티 비트 (parity bit)
  - 오류를 검출하고 복구하기 위한 정보
  - 패리티 비트는 본래 오류 검출만 가능한 정보이지만, RAID에서는 오류 복구도 가능
- 장점: RAID 1보다 적은 하드 디스크로도 데이터를 안전하게 보관 가능
- 단점: 패리티를 저장하는 장치에 병목 현상이 발생 가능
![image](https://github.com/user-attachments/assets/93e3e7bc-47d5-4772-83b3-bb48789782af)
### RAID 5
- 패리티 정보를 분산하여 저장하는 구성 방식
- RAID 4의 문제인 병목 현상을 해소
![image](https://github.com/user-attachments/assets/0168b45e-32be-4526-9386-a083f3c083f7)
### RAID 6
- 기본적으로 RAID 5와 같으나, 서로 다른 두 개의 패러티를 두는 방식
- 장점: RAID 4나 RAID 5보다 안전한 방식
- 단점: RAID 5보다 느린 쓰기 속도
- 데이터 저장 속도를 조금 희생하더라도 데이터를 더욱 안전하게 보관하고 싶을 때 사용
![image](https://github.com/user-attachments/assets/591ca20f-8a75-47f2-982c-85b21052f139)
