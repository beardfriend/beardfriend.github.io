---
date: '2022-03-22 13:53:33'
title: 'TYPEORM UPDATE 코드 간단하게'
category: 'Development'
tags: ['Backend']
subtitle: 'TYPEORM UPDATE시 발생하는 문제점 해결'
featuredImgUrl: https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpPIw7%2FbtrrDydq1ND%2FPC2UdAAbMVWw7PKAjtyr3k%2Fimg.png
featuredImgAlt: 'imageDes'
---

**⚡ 개발 환경**

- express
- TYPEORM
- typescript

**💡목표**

- 새로 받은 값이 기존 값과 다를 때, UPDATE 쿼리를 날려야 한다.

# 1. Save API 사용

Save를 이용하면 새로 받은 값과 기존 값을 비교하여,
다른 값들만 Update Query를 날린다.
(업데이트 전에 SELECT이 이뤄져야 함.)

```typescript
const manager = getManager();
profile.introduce = newData.introduce;
profile.representationNumber = newData.representationNumber;
profile.name = newData.name
..
..
..
await manager save(profile);
```

# 2. Update API 사용

위와 같이 사용할 경우, 값을 비교하지 않고 UPDATE 쿼리를 던진다.
Save를 사용하면 되지만, 코드의 간단함과 직관성을 고려해
Application 단에서 값을 비교해서 쿼리를 던지는 것으로 결정했다.
(업데이트 전에 SELECT이 이뤄져야 함.)

```typescript
const profileRepo = getRepository(AcademyProfile);
await profileRepo.update({ id: profile.id }, newData);
```

비교할 수 있는 함수를 만들어준다.

```typescript
export function dataCompareFunc<T>(
  prevData: DeepPartial<T>,
  newData: { [key: string]: string | [] | {}[] | number }
): { [key: string]: string | [] | {}[] | number } | false {
  const plainObject = classToPlain(prevData);

  const filteredData = Object.keys(newData)
    .filter((key) => Object.keys(prevData).includes(key))
    .reduce((prev: {} | undefined, current: string) => {
      if (plainObject[current] === newData[current]) {
        return;
      }
      return {
        ...prev,
        [current]: newData[current],
      };
    }, []);

  if (filteredData === undefined) {
    return false;
  }
  return filteredData;
}
```

값을 비교해서 새로운 값이 없을 경우는 update를 날리지 않게끔 수정했다.

```typescript
  const profileRepo = getRepository(Entity));
  const newData = dataCompareFunc(profile, data);
  if (!newData) {
    return;
  }
  await profileRepo.update({ id: profile.id }, newData);

```

코드를 설계할 때, 직관성 고려를 가장 많이 하는 것 같다.
누가 봐도 알 수 있는 코드가 됐으면 좋겠다.
