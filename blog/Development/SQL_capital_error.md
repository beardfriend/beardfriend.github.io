---
title: 'SQL 컬럼 명이 대문자일 때.'
date: '2022-01-15 00:12:10'
tags: ['Database']
category: 'Development'
subtitle: 'SQL 문을 작성하는데, 컬럼 명이 대문자라면?'
featuredImgUrl: https://i.postimg.cc/zvV3wP5c/Dev.png
featuredImgAlt: 'title'
---

**💡문제**

- 데이터베이스 컬럼이 대문자면 어떻게 작성해야 할까?

답 : ""안에 컬럼 명을 넣어주면 된다.

이너조인 예문이다.

```sql
select a."emailId" from public.user a INNER JOIN image b ON a."profileId" = b.id WHERE a."profileId" = 1;
```
