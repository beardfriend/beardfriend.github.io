---
title: 'Relax 서비스 프로젝트'
date: '2022-04-02 11:29:59'
category: 'Project'
tags: ['Backend', 'Database']
subtitle: 'Relax 프로젝트'
featuredImgUrl: https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMZd4E%2FbtrrF6NXR2o%2F5zhUCnuxHWCpmLwo4ar1y0%2Fimg.png
featuredImgAlt: 'PROJECT'
---

**💡 목표**

**프로젝트 기획**

**백엔드 제작**

**프론트 제작**

**EC2 도커 배포.**

---

**⚡ 개요**

**✔️ 제작기간** : 2022.11.01 ~ 2021.03.30 (프로젝트 기획부터 총 기간)

**✔️ 기여도** : 본인 100%

**✔️ 사용스택** : typescript, express, postgresSQL, typeORM, Docker, Webpack

**✔️ 저장소**: https://github.com/beardfriend/relax

**✔️ 프로젝트 한 줄 설명** : 요가선생님들만을 위한 채용 서비스 제작.

**✔️ 상세업무** : 인증(카카오, 구글, 일반), 프로필(등록, 업데이트), 도커 컨테이너 제작, 빌드

---

### 들어가며..

나에게 질문을 던졌습니다.

현재 실력을 이용해, 완성에 초점을 둘 것인가?  
실력을 키워, 코드를 단단하게 만들 것인가?  
후자를 선택했습니다.

이러한 선택의 배경에는
<<한 권으로 끝내는 Node & Express, 이던 브라운>>의 교훈이 있습니다.

저자는 이렇게 말합니다.

```
어떤 일을 처음으로 정확히 하려면,
빠르고 간편한 방법의 다섯 배 정도의 시간이 걸린다.
하지만 두 번째에는 세 배 정도로 줄어들고,
열 번을 넘어가면
일을 정확히 해도
빠르고 간편한 방법과
시간 차이가 없을 거다.
```

완성에 초점을 뒀다면  
위의 내용도 몰랐을 터이니,
선택에는 후회가 없습니다.

# 1. 기획

## 1.1. 설문조사

아이러니하게도 프로젝트를 시작할 때는, 기획자겸 프론트엔드 개발자로 참여했습니다.

요가를 좋아하니, 주제를 요가로 정했고.
사람들의 필요를 파악하기 위해,
설문조사를 했습니다.

![설문지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEroKG%2Fbtrx30OMaix%2Fk8y7MKhvy7yAp4zpN7l8mK%2Fimg.png)
_설문지 일부._

<br>

## 1.2. 서비스 주제 결정

긴 회의 끝에, 채용서비스를 만들기로 결정했습니다.

이유는 이렇습니다.

1. 요가 구인구직의 80%가 커뮤니티 사이트에서 이뤄진다. (설문결과).
2. 80% 점유율 사이트가 불편해보였다.
3. 구인구직 글을 다양한 플랫폼에 등록하고 싶은 심리가 다수에게 있을 것이다.
4. 사람을 먼저 모으자. 이용자가 많아지면 자연스럽게 다양한 비즈니스 모델이 생긴다.

## 1.3. 팀원 해체.

각자의 이유로 팀은 해체됐습니다.  
슬펐지만,  
덕분에 백엔드 개발을 시작하게 기쁩니다.

**✔️제작 툴** : Figma  
**✔️기여도** : 100%
**✔️기획서 링크** : [클릭](https://www.figma.com/file/5V4gk9XsHaadTrILJH9YH4/Relax?node-id=0%3A1)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcMi3pe%2Fbtrx0VfTkUd%2FUE688VzHj3bKKneu5jAcE1%2Fimg.png)

# 2. 백엔드 제작

## 2.1. 초기설정

### 2.1.1. 디렉터리 구조

모노레포를 선택했습니다.

이유는 아래와 같습니다.

백,프론트 겹치는 부분의 type 지정을 한 번만 해도 됩니다.  
프로젝트 규모가 작기 때문에 의존성 모듈 크기에 대한 부담이 없습니다.  
혼자 작업하기에 편리합니다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdmc1ql%2Fbtrx6ZnEryf%2F2kJhxC7wB2zYHERgK3cZck%2Fimg.png)

libs은 apps에서 재사용되는 코드를 모아놨습니다.

MVC는 파일을 수정, 생성할 때 불편하다고 느껴집니다.  
Nest.js가 사용하는 Domain Driven Design을 사용해보고 싶어졌습니다.

```json
{
  "service": {
    "prefix": "service",
    "body": [
      "/* ***************",
      " * Find *",
      " *************** */",
      "export function main(){console.log('hello')}",
      "export function test(){console.log('hello')}",
      "\n",
      "/* ***************",
      " * Create *",
      " *************** */",
      "\n",
      "/* ***************",
      " * Update *",
      " *************** */",
      "\n",
      "/* ***************",
      " * Delete *",
      " *************** */",
      "\n",
      "/* ***************",
      " * Middle Logic *",
      " *************** */",
      "\n",
      "/* ***************",
      " * Final Logic *",
      " *************** */"
    ]
  },

  "controller": {
    "prefix": "controller",
    "body": [
      "import { Request, Response } from 'express';",
      "export default async function $TM_FILENAME_BASE (req:Request, res:Response) {res.send('hello')}"
    ]
  }
}
```

저는 의미없는 반복작업을 싫어합니다.  
시간이 걸리더라도 편한 방법을 찾아내는 편입니다.

파일 생성할 때마다 함수를 만들어 내는 건 어려운 일입니다.  
자주 사용하는 Controller, Service파일에 대해서는  
UserSnippet을 적용했습니다.

### 2.1.2. ESLint, Prettier

```json
{
  "extends": ["airbnb-base", "airbnb-typescript/base", "../../.eslintrc"],
  "parserOptions": {
    "project": "**/tsconfig.json"
  },
  "ignorePatterns": "*.js",
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "class-methods-use-this": "off"
  }
}
```

팀 프로젝트에서는 코딩 스타일이 같아야 합니다.

AirBnb 규격은 꽤 까다롭습니다.  
가이드에 무조건 맞춰서 가다보니  
공부가 많이 됐습니다.

### 2.1.3. TSconfig

나름 까다롭게 컴파일설정을 했습니다.  
덕분에 예측가능한 코드를 어떻게 작성할 것인지  
의도를 어떻게 표현할 것인지를 깊이 고민할 수 있었습니다.

```json
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
```

절대경로를 사용했습니다.

```json
      "@SH/Initializations/*": ["./apps/server-hire/src/initialzations/*"],
      "@SH/Entities/*": ["./apps/server-hire/src/entities/*"],
      "@SH/Controllers/*": ["./apps/server-hire/src/controllers/*"],
      "@SH/Services/*": ["./apps/server-hire/src/services/*"],
      "@SH/Routers/*": ["./apps/server-hire/src/routers/*"],
      "@SH/MiddleWares/*": ["./apps/server-hire/src/middlewares/*"],
      "@Libs/*": ["./libs/*"],
      "@Constants/Types": ["./libs/constants/types/index.ts"],
      "@Constants/Messages": ["libs/constants/messages/index.ts"]
```

### 2.1.4. env

process.env를 조회하면, **undefined or 설정된 값**을 불러옵니다.  
service에서 env 값을 불러오고 싶다면 예외처리를 해줘야 합니다.  
env값 조회를 수 십번 이상 합니다.  
따라서 조회할 때마다 예외처리한다는 것은 비효율적입니다.

getOsEnv함수에서 예외처리를 하고  
env값을 선언하여 함으로써  
조회 시 undefined가 안 나오도록 설정했습니다.

```typescript
useDotEnv();

const env = {
  port: toNumber(getOsEnv('EXPRESS_PORT')),
  typeorm: {
    connection: getOsEnv('TYPEORM_CONNECTION'),
    host: getOsEnv('TYPEORM_HOST'),
    port: toNumber(getOsEnv('TYPEORM_PORT')),
    username: getOsEnv('TYPEORM_USERNAME'),
    password: getOsEnv('TYPEORM_PASSWORD'),
    database: getOsEnv('TYPEORM_DATABASE'),
    sync: toBool(getOsEnv('TYPEORM_SYNCHRONIZE')),
    logging: toBool(getOsEnv('TYPEORM_LOGGING')),
    entities: getOsEnv('TYPEORM_ENTITIES'),
    migration: getOsEnv('TYPEORM_MIGRATION'),
  },
  jwt: getOsEnv('JWT'),

  google: {
    key: getOsEnv('GOOGLE_KEY'),
    password: getOsEnv('GOOGLE_PASS'),
    redirect_uri: getOsEnv('GOOGLE_REDIRECT_URI'),
    finish_uri: getOsEnv('GOOGLE_FINISH_URI'),
  },
  kakao: {
    key: getOsEnv('KAKAO_KEY'),
    redirect_uri: getOsEnv('KAKAO_REDIRECT_URI'),
    finish_uri: getOsEnv('KAKAO_FINISH_URI'),
  },
  api: {
    business_check: getOsEnv('OPEN_API_KEY'),
  },
};
```

### 2.1.5 typeorm Config

대부분 서비스 코드에서는 camelCase를 사용합니다.  
typeORM에서는 엔티티를 동기화하면  
데이터베이스의 컬럼명은 orm코드의 속성명을 따라갑니다.  
camelCase를 사용한다면, 실제 Database의 컬럼 명도 camelCase로 작성되는 것이죠

DB의 컬럼이름이 camelCase라면  
쿼리문을 작성할 때 컬럼 명을 ""안에 넣어야 합니다.  
""가 쿼리문 가독성을 해친다고 판단했습니다.

때문에 DB에서는 snakeNamingStrategy를 사용해야 하는데,  
다행히도 typeORM에서 네이밍 전략을 설정할 수 있도록 만들어놨습니다.

snakeCase로 변경해주는 모듈을 사용하여  
코드 속성 이름은 camelCase , DB에는 snakeCase를 유지할 수 있었습니다.

```typescript
export default {
  type: 'postgres',
  host: env.typeorm.host,
  port: env.typeorm.port,
  username: env.typeorm.username,
  password: env.typeorm.password,
  database: env.typeorm.database,
  synchronize: env.typeorm.sync,
  logging: env.typeorm.logging,
  entities: Entites,
  migrations: [env.typeorm.migration],
  cli: {
    migrationsDir: 'src/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
} as ConnectionOptions;
```

## 2.2. Database

### 2.2.1 Entities

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBuDrq%2FbtrydyXWLzr%2Fdss5HnKA6rHMGW7iTBAVN1%2Ftfile.svg)
_typeORM UML 모듈로 추출한 ERD_

# 마무리

내가 아는 지식으로, 기본적인 틀을 잡은 뒤에,  
코드를 만들어가며,  
불편함을 느낄 때마다 새로운 기능을 추가해나갔다.

기능이 없을 때의 불편함을 알기 때문에  
새로 추가한 기술의 철학을 느낄 수 있었고,  
더 쉽게 이해할 수 있었다.
