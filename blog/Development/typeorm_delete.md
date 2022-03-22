---
date: '2022-03-22 13:53:33'
title: 'TYPEORM DELETE OneToOne 해결'
category: 'Development'
tags: ['Backend']
subtitle: 'TYPEORM에서 DELETE시 발생하는 문제점 해결'
featuredImgUrl: https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpPIw7%2FbtrrDydq1ND%2FPC2UdAAbMVWw7PKAjtyr3k%2Fimg.png
featuredImgAlt: 'imageDes'
---

**⚡ 개발 환경**

- express
- TYPEORM
- typescript

**💡목표**

- 1:1 관계일 때, 부모 Entity 에서 Foreign Key를 지우고, 자식 Entity Data를 Delete하는 방법

코드를 짤 때, 대부분 TypeORM에서 제공하는 API를 사용했다.
1:N 관계에서는 DELETE API가 잘 작동하지만,
1:1 관계일 때 DELETE API가 작동하지 않아서 삽질을 좀 했다.

세 방향으로 추려졌다.

1. 1:1관계에 있는 Entity를 Select할 때 RAW옵션을 적용하여 ForeignKey를 직접 변경할 수 있게 허용해준다.
2. 1:1 관계를 없애고 1:N관계를 사용한다
3. 삽질한다.

나는 3번을 선택했다.  
왜나하면 1:1 관계에 있는 SELECT QUERY를 RAW하게 바꿀 경우, 코드가 번잡해지고,  
웬만하면 API를 사용해서 모든 코드를 완성시키고 싶었다.  
이유는 Column 이름이 바뀔 경우, RAW하게 짰다면, 바뀐 컬럼명을 수작업으로 모두  
바꿔야 하기 때문이다.

문서를 꼼꼼하게 읽지 않아 보지 못했던 API를 발견했다.
Relation API였다.
queryBuilder로도 ForeignKey에 접근할 수 있도록 해주는 API다.

```typescript
await manager.createQueryBuilder().relation(ParentEnttiy, 'relationName').of(ColumnName).set(ChildEntity);
```

위 코드를 통해, 부모의 Column에서 ForeignID를 업데이트 하고
자식 Data를 삭제할 수 있게 됐다.
