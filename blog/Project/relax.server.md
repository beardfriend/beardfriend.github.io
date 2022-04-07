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

**✔️ 제작기간** : 2022.11.01 ~ 2021.03.31 (프로젝트 기획부터 총 기간)

**✔️ 기여도** : 본인 100%

**✔️ 사용스택** : typescript, express, postgresSQL, typeORM, Docker, Webpack

**✔️ 저장소**: https://github.com/beardfriend/relax

**✔️ 프로젝트 한 줄 설명** : 요가선생님들을 위한 채용 서비스 제작.

**✔️ 상세업무** : 인증(카카오, 구글, 일반), 프로필(등록, 업데이트), 도커 컨테이너 제작, 빌드

---

### 들어가며..

스스로에게 질문을 던졌습니다.

현재 실력에 머물며, 완성에 초점을 둘 것인가?  
실력을 키워, 코드를 단단하게 만들 것인가?  
저의 답은 후자였습니다.

이러한 선택의 배경에는  
<<한 권으로 끝내는 Node & Express, 이던 브라운>>의 교훈이 있습니다.

저자는 이렇게 말합니다.

> 어떤 일을 처음으로 정확히 하려면,  
> 빠르고 간편한 방법의 다섯 배 정도의 시간이 걸린다.  
> 하지만 두 번째에는 세 배 정도로 줄어들고,  
> 열 번을 넘어가면  
> 일을 정확히 해도  
> 빠르고 간편한 방법과  
> 시간 차이가 없을 거다.

현재에 머물렀다면,  
위의 내용도 몰랐을 터이니,  
선택에는 후회가 없습니다.

# 1. 기획

## 1.1. 설문조사

요가를 주제로 정했고,  
사람들이 정말 필요로 하는 서비스를 만들기 위해,  
설문조사를 통해 니즈를 파악했습니다.

![설문지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEroKG%2Fbtrx30OMaix%2Fk8y7MKhvy7yAp4zpN7l8mK%2Fimg.png)
_설문지 일부._

<br>

## 1.2. 서비스 주제 결정

긴 회의 끝에, 채용서비스를 만들기로 결정했습니다.

이유는 다음과 같습니다.

1. 요가업계 구인구직의 80%가 커뮤니티 사이트에서 이뤄진다. (설문결과).
2. 점유율 높은 커뮤니티 사이트가 불편한 점이 많았다.
3. 현재 팀원으로 충분히 불편한 점을 개선할 수 있다.

## 1.3. 팀원 해체.

각자의 이유로 팀은 해체됐습니다.  
슬펐지만,  
덕분에 백엔드 개발을 시작하게 되어 기쁩니다.

**✔️제작 툴** : Figma

**✔️기여도** : 100%

**✔️기획서 링크** : [클릭](https://www.figma.com/file/5V4gk9XsHaadTrILJH9YH4/Relax?node-id=0%3A1)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcMi3pe%2Fbtrx0VfTkUd%2FUE688VzHj3bKKneu5jAcE1%2Fimg.png)

# 2. 백엔드 제작

## 2.1. 초기설정

### 2.1.1. 디렉터리 구조

모노레포를 선택했습니다.

이유는 아래와 같습니다.

1. 백,프론트 겹치는 부분의 type 지정을 한 번만 해도 됩니다.
2. 프로젝트 규모가 작기 때문에 의존성 모듈 크기에 대한 부담이 없습니다.
3. 혼자 작업하기에 편리합니다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdmc1ql%2Fbtrx6ZnEryf%2F2kJhxC7wB2zYHERgK3cZck%2Fimg.png)

libs: apps에서 재사용되는 코드를 모아놨습니다.

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
env값 조회는 수십번 이뤄집니다.  
따라서 조회할 때마다 예외처리한다는 것은 비효율적입니다.

getOsEnv함수에서 예외처리를 하고  
env값을 선언함으로써  
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

백엔드코드는 camelCase를 사용합니다.  
typeORM에서 엔티티를 동기화하면  
데이터베이스의 컬럼명은 백엔드코드 속성명을 따라갑니다.  
camelCase를 사용한다면, Database의 컬럼 명도 camelCase로 작성되는 것이죠

DB의 컬럼이름이 camelCase라면  
쿼리문을 작성할 때 컬럼 명을 ""안에 넣어야 합니다.  
""가 쿼리문 가독성을 해칩니다.

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

유저 타입이 2개가 존재합니다.  
선생님과 학원사업자입니다.  
Entity는 User,Academy,Teacher 총 3개를 만들었습니다.  
User:Acadmey, User:Teacher 를 1:1 관계지었습니다.

이렇게 한 이유는, 회원가입 프로세스 때문에 그렇습니다.  
회원가입이후 회원유형선택이 이뤄지는데,

만약 Entity가 Academy,Teacher 두 개라면  
회원가입 이후 회원유형을 선택하지 않는 회원에 대해서는  
회원가입 정보 저장이 까다롭기 때문에  
User Entity를 만들었습니다.

**정규화**

정규화 단계가 깊어질수록 Join이 많아집니다.  
상황에 따라 정규화를 선택해야 합니다.

아직은 판단할 기준이 서지 않아, 직접 테스트를 했습니다.  
정규화 했을 때 vs 하지 않았을 때

두 상황 모두, 실제로 사용되는 쿼리문을 날려봤습니다.
Database의 EXPLAIN 기능을 이용하기도 했고,  
jest에서 Dummy데이터를 삽입하여 속도를 비교해보기도 했습니다.

```plaintext
/*
    @결과
      요가종류를 관계형으로 빼기 vs 배열로 각 테이블에 배치
    프로필 목록 가져오기
      ✓ CASE A (28 ms)
      ✓ CASE B (5 ms)
      ✓ CASE B 1000개 테스트 no join (4 ms)
      ✓ CASE B 1000개 테스트 join (4 ms)
    선생님과 학원 요가 종류 같은 것 뽑아내기
      ✓ CASE A (31 ms)
      ✓ CASE B (18 ms)
*/
```

2차 정규화까지는 적용했습니다.

**DTO**

class-transformer를 사용했습니다.  
validation 체크를 원했습니다.

class-transfomer 데코레이션을 typeORM 데코레이션과  
Entity파일에 함께 작성하는 건 부적합하다고 판단했습니다.  
코드가 복잡해지기 때문입니다.

Spring의 개념과는 정확히 동일하지 않지만,  
비슷한 역할을 하는 것 같아 DTO라 명칭했습니다.

```typescript
@Entity()
class Academy extends AcademyDto implements UpdateColumn {
  @PrimaryColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User;

  @OneToMany(() => Recruitement, (recruitement) => recruitement.writer)
  recruitement: Recruitement[];

  @OneToOne(() => AcademyBusiness)
  @JoinColumn()
  businessInfo: AcademyBusiness;

  @OneToOne(() => AcademyProfile)
  @JoinColumn()
  academyProfile: AcademyProfile;
}
```

최종적으로 Academy에 UpdateColumn이 상속되는데,  
implements에 직관적으로 어떤 것들이 상속되는지 표기했습니다.

interface를 상속받는 implements의 본질에서 벗어나기 때문에  
주석이 없으면 이해할 수 없기 때문에 좋은 코드는 아니라고 생각합니다.

class 안에 Object.assign을 통해 결합하는 방법도 생각해봤지만  
이에 대한 실험이 부족했습니다.  
이 부분은 좀 더 고민을 해보고 좋은 방법을 찾아봐야겠습니다.

### 2.2.2. Seeding

E2E테스트를 마친 뒤, 프론트엔드에 개발서버를 제공할 때  
Dummy데이터를 제공한다면, 프론트개발자는 좀 더 편리합니다.

typeORM CLI를 사용하여,  
Dummy데이터를 심었습니다.

아래는 코드 샘플입니다.

```typescript
class Seed1643011552762 implements MigrationInterface {
  public async up(): Promise<void> {
    const value: {}[] = [];
    for (let i = 0; i < 100; i += 1) {
      const test = {
        email: casual.email,
        password: casual.password,
        phone_number: casual.phone,
      };
      value.push(test);
    }
    if (value.length === 0) {
      return;
    }
    await getConnection().createQueryBuilder().insert().into(User).values(value).execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`truncate table public.user cascade;`);
  }
}
```

## 2.3. Business Logic

중요한 부분만 설명하도록 하겠습니다.

### 2.3.1. Auth

Passport를 사용해도 되지만,  
공부하며 직접 해보고 싶은 마음이 들었습니다.

cookie를 받아서 3가지 쿠키가 없을 떄, 카카오일 때, 구글or일반로그인일 때,  
3가지 상황에 따라 다르게 상태를 던져주도록 설계했습니다.

```typescript
export async function loginCheckMiddleWare(req: Request, res: Response, next: NextFunction) {
  async function setReqeustUserInfo(accessToken: string) {
    const [type, user] = await setUserInfo(accessToken);
    req.type = type;
    req.user = user;
  }

  const cookies = req.headers.cookie;
  const [status, refreshAccessToken] = loginStatusFunc(cookies);

  try {
    if (status === 'loginFail' || refreshAccessToken === undefined) {
      return res
        .status(redirectLoginPage.statusCode)
        .send({ msg: redirectLoginPage.message, category: redirectLoginPage.category });
    }

    if (status === 'getKakaoAccess') {
      const refreshToken = refreshAccessToken;
      const { accessTokenInfo, refreshToeknInfo } = await getSignedAccessRefreshToken(refreshToken);

      res.cookie(token.LOGIN, accessTokenInfo.signedAccessToken, {
        maxAge: accessTokenInfo.expiresIn * 1000,
        httpOnly: true,
      });

      if (refreshToeknInfo !== undefined) {
        res.cookie(token.RefreshKakao, refreshToeknInfo.signedRefreshToken, {
          maxAge: refreshToeknInfo.refreshExpiresIn * 1000,
          httpOnly: true,
        });
      }

      await setReqeustUserInfo(accessTokenInfo.signedAccessToken);
    }

    if (status === 'loginSuccess') {
      const accessToken = refreshAccessToken;
      await setReqeustUserInfo(accessToken);
    }

    return next();
  } catch (error) {
    return res.status(serverError.statusCode).send({ msg: serverError.message, category: serverError.category });
  }
}
```

### 2.3.2. KaKao Auth

카카오 REST API를 사용했습니다.
getCode -> getToken

```typescript
export async function getCode(req: Request, res: Response) {
  const cookies = req.headers.cookie;

  const refreshToken = checkRefreshToken(cookies);

  if (!refreshToken) {
    const url = await getKakaoRedirectUrl();
    return res.redirect(url);
  }

  const { accessTokenInfo, refreshToeknInfo } = await getSignedAccessRefreshToken(refreshToken);

  res.cookie(token.LOGIN, accessTokenInfo.signedAccessToken, {
    maxAge: accessTokenInfo.expiresIn * 1000,
    httpOnly: true,
  });

  if (refreshToeknInfo !== undefined) {
    res.cookie(token.RefreshKakao, refreshToeknInfo.signedRefreshToken, {
      maxAge: refreshToeknInfo.refreshExpiresIn * 1000,
      httpOnly: true,
    });
  }

  return res.redirect(env.kakao.finish_uri);
}

export async function getToken(req: Request, res: Response) {
  if (req.query.code === undefined) {
    return res
      .status(kakaoCodeNotFound.statusCode)
      .send({ msg: kakaoCodeNotFound.message, category: kakaoCodeNotFound.category });
  }

  const { accessTokenInfo, refreshTokenInfo } = await getkakaoTokenData(req.query.code as string);

  const userId = await getKakaoUserId(accessTokenInfo.accessToken);

  const isAlreadyKakaoUser = await checkKakaoUser(userId);

  if (!isAlreadyKakaoUser) {
    await createKakaoUser(userId);
  }

  const { signedAccessToken, signedRefreshToken } = await getSignedAccessRefreshTokenKaKao(userId, {
    accessTokenInfo,
    refreshTokenInfo,
  });

  res.cookie(token.LOGIN, signedAccessToken, { maxAge: accessTokenInfo.expiresIn, httpOnly: true });
  res.cookie(token.RefreshKakao, signedRefreshToken, { maxAge: refreshTokenInfo.refreshToken, httpOnly: true });

  return res.redirect(env.kakao.finish_uri);
}
```

### 2.3.2. Profile

formData를 이용하여 이미지파일들과 텍스트를 받습니다.  
한 번에 받는 이유는, 프로필 등록, 수정이 게시글을 등록, 수정하는 것과 비슷한  
UI를 지녔기 때문입니다.

Controller -> Service ( FinalLogic -> MiddleLogic -> [CREATE,FIND,UPDATE,DELETE] ) 흐름으로 진행됩니다.

```typescript
// controller
export default async function putAcademyProfile(req: Request, res: Response) {
  const images = req.files as Iimages;

  const profileData = Object.assign(req.body, images) as IacademyProfileRequest;
  const loginData = { uniqueKey: req.user, loginType: req.type };

  const findedProfile = await findAcademyProfileId(loginData);

  if (findedProfile === undefined) {
    await createAcademyProfile(profileData, loginData);
    return res
      .status(createProfileSuccess.statusCode)
      .send({ msg: createProfileSuccess.message, category: createProfileSuccess.category });
  }

  await updateAcademyProfile(profileData, loginData);
  return res
    .status(updateProfileSuccess.statusCode)
    .send({ msg: updateProfileSuccess.message, category: updateProfileSuccess.category });
}
```

```typescript
// service 일부분...

/* ***************
 * Update  *
 *************** */

export async function updateLogo(id: number | undefined, data: image.data) {
  const manager = getManager();
  await manager.update(Images, { id }, { ...data });
}

/* ***************
 * Middle Logic *
 *************** */

export async function updateYogaList(
  newYogaList: string[] | string | undefined,
  beforeYogaList: DeepPartial<Yoga>[],
  profile: DeepPartial<AcademyProfile> | DeepPartial<TeacherProfile>
) {
  let yogaList = newYogaList;
  if (typeof yogaList === 'string') {
    yogaList = [yogaList];
  }

  if (yogaList === undefined) {
    await deleteYogaALL(profile);
    return;
  }

  const beforeList: string[] = [];

  const Deletelist = beforeYogaList.filter((yoga) => {
    if (yoga.name === undefined || yogaList === undefined) {
      return undefined;
    }
    const yoganame = switchYogaTypeReverse(yoga.name) as string;
    beforeList.push(yoganame);
    return !yogaList.includes(yoganame);
  });

  const updateList = yogaList.filter((data) => {
    return !beforeList.includes(data);
  });

  Deletelist.map(async (data) => {
    if (data.id === undefined) {
      return;
    }
    await deleteYoga(data.id);
  });
  await createYogaList(updateList, profile);
}

export async function updateLogoIntroudceImage(
  images: { [fieldname: string]: Express.Multer.File[] },
  isDeleteLogo: string | undefined,
  academyProfile: DeepPartial<AcademyProfile>
): Promise<void> {
  const { ACADEMY_LOGO, ACADEMY_INTRODUCE } = images;

  const isLogo = ACADEMY_LOGO === undefined ? 'No' : 'Yes';
  const isIntroduce = ACADEMY_INTRODUCE === undefined ? 'No' : 'Yes';

  if (isLogo === 'Yes' && isIntroduce === 'Yes') {
    await updateIntroduceLogic(ACADEMY_INTRODUCE, academyProfile);
    await updateLogoLogic(ACADEMY_LOGO, academyProfile);
  }
  if (isLogo === 'No' && isIntroduce === 'Yes') {
    await updateIntroduceLogic(ACADEMY_INTRODUCE, academyProfile);
  }
  if (isLogo === 'Yes' && isIntroduce === 'No') {
    await updateLogoLogic(ACADEMY_LOGO, academyProfile);
  }
  if (isLogo === 'No' && isIntroduce === 'No') {
    if (isDeleteLogo === 'true') {
      await deleteLogoImage(academyProfile);
    }
  }
}

/* ***************
 * Final Logic *
 *************** */

export async function updateAcademyProfile(data: IacademyProfileRequest, loginData: IloginData): Promise<void> {
  const { uniqueKey, loginType } = loginData;
  const { ACADEMY_INTRODUCE, ACADEMY_LOGO, academyName, representationNumber, introduce, yoga, isDeleteLogo } = data;
  const { region1Depth, region2Depth, region3Depth, roadName, mainBuildingNo, subBuildingNo } = data;
  const address = { region1Depth, region2Depth, region3Depth, roadName, mainBuildingNo, subBuildingNo };
  const imagesData = { ACADEMY_INTRODUCE, ACADEMY_LOGO };
  const findedProfileAllInfo = await findAcademyProfile(uniqueKey, loginType);

  const profile = findedProfileAllInfo.academy.academyProfile;
  await updateAddress(profile, address);
  await updateYogaList(yoga, profile.yoga, profile);
  await updateLogoIntroudceImage(imagesData, isDeleteLogo, profile);
  await updateProfile(profile, { academyName, representationNumber, introduce });
}
```

## 2.4. Test

### 2.4.1. Jest

jest를 사용했습니다.

test를 하며 오류를 정말 많이 잡을 수 있었습니다.  
프로그래밍은 지속적인 테스트를 통해 검증을 해나가야 한다고 생각합니다.

jest의 장점은 테스트코드가 남는다는 것입니다.  
그렇기 때문에 테스트 검증과정과 결과가 명확합니다.

```typescript
describe('선생님 프로필', () => {
  beforeAll(async () => {
    await createConnection({
      type: 'postgres',
      host: env.typeorm.host,
      port: env.typeorm.port,
      username: env.typeorm.username,
      password: env.typeorm.password,
      database: env.typeorm.database,
      synchronize: env.typeorm.sync,
      logging: env.typeorm.logging,
      entities: [env.typeorm.entities],
    });
  });

  const app = initExpress();
  const agent = request.agent(app);
  describe('POST /auth/signup', () => {
    it('일반유저 회원가입 및 토큰 던지기', async () => {
      const res = await agent.post('/auth/signup').send({ email: 'asd@naver.com', password: 'password' });
      expect(res.statusCode).toEqual(200);
    });
  });
  describe('POST /role', () => {
    it('학원 유형 선택', async () => {
      const res = await agent.post('/role').send({ role: 'TEACHER' });
      expect(res.statusCode).toEqual(200);
    });
  });

  describe('PUT /profile/teacher', () => {
    it('전체 프로필 등록', async () => {
      const res = await agent
        .put('/profile/teacher')
        .field('name', 'name')
        .field('introduce', 'introduce')
        .field('instagram', '0123232323')
        .field('yoga', 'IYENGAR')
        .field('yoga', 'HATA')
        .attach('TEACHER_PROFILE', './tests/public/logo.png');
      expect(res.statusCode).toEqual(201);
    });

    it('프로필 업데이트 요가리스트 Delete All', async () => {
      const res = await agent
        .put('/profile/teacher')
        .field('name', 'academyName')
        .field('introduce', 'introduce')
        .field('instagram', '0123232323');
      expect(res.statusCode).toEqual(201);
      const profile = await findTeacherProfile({ uniqueKey: 'asd@naver.com', loginType: 'normal' });
      expect(profile.teacher.teacherProfile.yoga.length).toBe(0);
    });

    it('프로필 업데이트 요가 1개 Update', async () => {
      const res = await agent
        .put('/profile/teacher')
        .field('name', 'name')
        .field('introduce', 'introduce')
        .field('instagram', '0123232323')
        .field('yoga', 'IYENGAR');
      expect(res.statusCode).toEqual(201);
      const profile = await findTeacherProfile({ uniqueKey: 'asd@naver.com', loginType: 'normal' });
      expect(profile.teacher.teacherProfile.yoga.length).toBe(1);
    });

    it('프로필 이미지 지우기', async () => {
      const res = await agent
        .put('/profile/teacher')
        .field('name', 'name')
        .field('introduce', 'introduce')
        .field('instagram', '0123232323')
        .field('yoga', 'IYENGAR')
        .field('isDeleteProfileImage', 'true');
      expect(res.statusCode).toEqual(201);

      const profile = await findTeacherProfile({ uniqueKey: 'asd@naver.com', loginType: 'normal' });
      expect(profile.teacher.teacherProfile.profileImage).toBeNull();
    });

    it('프로필 이미지 업데이트', async () => {
      const res = await agent
        .put('/profile/teacher')
        .field('name', 'name')
        .field('introduce', 'introduce')
        .field('instagram', '0123232323')
        .field('yoga', 'IYENGAR')
        .attach('TEACHER_PROFILE', './tests/public/logo.png');
      expect(res.statusCode).toEqual(201);

      const profile = await findTeacherProfile({ uniqueKey: 'asd@naver.com', loginType: 'normal' });
      expect(profile.teacher.teacherProfile.profileImage).not.toBeNull();
    });

    it('기본정보 업데이트', async () => {
      const res = await agent
        .put('/profile/teacher')
        .field('name', 'fff')
        .field('introduce', 'introduce')
        .field('instagram', '0123232323')
        .field('yoga', 'IYENGAR');
      expect(res.statusCode).toEqual(201);

      const profile = await findTeacherProfile({ uniqueKey: 'asd@naver.com', loginType: 'normal' });
      expect(profile.teacher.teacherProfile.name).toEqual('fff');
    });

    afterAll(async () => {
      const manager = getManager();
      await manager.query(`
      DO $$ DECLARE
      r RECORD;
  BEGIN
      FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = current_schema()) LOOP
          EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
      END LOOP;
  END $$;
      `);
    });
  });
});
```

## 2.5. Deploy

### 2.5.1. Build

세 가지 정도를 선택할 수 있었습니다.

- ts-node
- tsc
- webpack

**ts-node**

ts-node를 만든 사람인 Blake Embrey에 따르면,

> --transpile-only  
> 옵션을 사용한다면, production 모드에서도 사용가능하다.  
> 다만, reflect-metadata(데코레이터를 위한 실험적 지원)를 사용하는 경우  
> tsc로 빌드 후 node와 함께 사용하는 걸 권장한다.

제 프로젝트에서는 reflect-metadata를 사용하기 때문에  
ts-node를 선택할 수 없었습니다.

또한 개발할 때 ts-node-dev를 사용했는데  
“heap out of memory”에러 메세지와 함께 종종 서버가 다운됐습니다.  
ts-node를 사용하지 말아야 할 이유가 더욱 분명해졌습니다.

**tsc**

타입스크립트 절대경로를 사용합니다.  
tsc는 빌드 이후 서버를 실행시키기 위해서는  
절대경로에 대한 명시가 필요합니다.

tsconfig-paths를 사용하거나. tsconfig파일 설정에 절대 경로 맨 앞에 dist를 넣어줘도 됩니다.

**webpack**

웹펙은 설정 파일에 절대경로를 명시하기 때문에,  
그냥 바로 실행이 됩니다.  
다만 minimize를 할 경우 DB컬럼 이름이 바뀌기 떄문에  
minimize는 선택할 수 없었습니다.

<br>

저는 webpack을 선택했습니다.  
ts-loader를 사용하면 tsc에 비해 빌드 속도가 느리다는 단점이 있는데  
현재는 불편함을 못 느끼고 있고,

babel-loader는 속도가 빠르기에,  
webpack을 선택할 이유가 분명해졌습니다.

### 2.5.2. Execute

**pm2**
pm2-runtime을 이용합니다.

### 2.5.3. Server

AWS (EC2) Ubuntu - Nginx -Docker (Database, Server)

### 2.5.4. Deploy

aws 인스턴스를 생성한 이후  
도커를 설치하고, git에서 코드를 받은 뒤에  
도커-compose전략에 따라 이미지를 빌드하고  
실행하는 전략을 택했습니다.

만약
보안 강화, 부하 분산, Cahce를 원한다면  
Nginx를 사용하면 되겠습니다.

### 마무리하며..

작동하는 걸 눈으로 보지 못한 게 아쉽습니다.  
지속적으로 코드를 업데이트 하여  
프로젝트를 마무리 지을 예정입니다.

또한 S3버킷에 이미지를 담는 것도  
하지 못해 아쉽습니다.

아직 Docker, 배포, AWS 다양한 서비스들을 사용함에 있어  
서툴다고 생각합니다.  
장난감 만지듯 계속 갖고 놀아보려고 합니다.

끝으로  
인스턴스가 10개 이상 있는 큰 규모의 프로젝트를 경험해보고 싶습니다.  
잰킨스를 이용하여 쉘 스크립트작성, 배포 자동화, 자동화 테스트 전략을 세워보고 싶고
ELK스텍도 사용해보고 싶다는 생각이 들었습니다.

프로젝트 중간에 명상을 배우기 위해 멀리 떠나고  
팀 해체도 되고  
프로젝트에 필요한 책을 사서 공부하고  
삶의 의미를 찾으며 방황도 하고  
참 많은 일들이 있었습니다.

다양한 고비가 없었다면  
전투력이 올라가지 않았을 것 같습니다.

귀한시간에, 제 글을 읽어주셔서 정말 감사합니다.
