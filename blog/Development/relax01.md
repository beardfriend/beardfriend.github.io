---
title: 'typeOrm seeding'
date: '2022-01-25 22:00:03'
category: 'Development'
tags: ['Database']
subtitle: 'Relax(01)'
featuredImgUrl: https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpPIw7%2FbtrrDydq1ND%2FPC2UdAAbMVWw7PKAjtyr3k%2Fimg.png
featuredImgAlt: 'imageDes'
---

**💡목표**

- Typeorm에서 DummyData seed심기..

**⚡ 문제**

- Typeorm에선 seed를 기본으로 제공하지 않는다.
- 미국 유명 프로그래머 Aaron Swartz 어디감??...

# 1. TypeOrm에서 seed 정책 수립

ORM의 강자 Sequelize에서는 Seed를 위한 BulkInsert함수를 지원한다.  
TypeOrm에서는 BulkInsert를 지원하지 않기 때문에 더미데이터를 입력하기 위해  
직접 함수를 작성해야 한다.

1. 직접 SQL문을 작성해준다.
2. TypeOrm의 내장된 기능 QueryBuilder를 사용한다.

두 가지 방법 중 나는 두 번째 방법을 택했다.

## 1.1. Seed를 위한 Entity 작성

```javascript

@Entity()
class User extends Primary {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone_number: string;

export default User;
```

간략하게 생성해주자 Entity를 작성해주자.  
여기서 생략한 부분 ( Entitiy 데이터베이스 동기화, Orm과 데이터베이스 연결 등..)

## 1.2. Seed Script로 생성

타입스크립트 ts-node 기준으로 설명한다.  
(ts-node는 tsc와 다르게 javascript로 컴파일 하지 않고 바로 실행한다.)

### 1.2.1. ts-node script 설정방법

```
npx typeorm migration:create
```

ts-node기준으로 위 명령어를 실행했을 때  
ormConfig 파일에서 설정한 폴더에 migration파일이 생성되지 않았다.

이유를 살펴보니, typescript에서 절대경로를 사용했기 때문이다.  
따라서 절대경로를 포함하여 script를 실행해줘야 하고,  
typeOrm 공식문서에서는 node_modules에 설치된 cli를 이용하라고 적혀있다.

```json
//package.json
 "migration:create": "ts-node -r tsconfig-paths/register ../../node_modules/typeorm/cli.js migration:create -n $NAME"
```

따라서 아래의 코드가 완성되는데,  
현 프로젝트에서는 monorepo를 사용했기 때문에, node_modules의 위치가 tsconfig의 위치와 다르다.

```bash
$NAME=하고싶은이름 yarn migration:create
```

을 통해 migration create실행이 가능하다.

처음 Seed를 설정할 때, 왜 대부분의 사람들이 migration을 이용할까? 라는 의문이 들었다.  
migration을 사용하면

1.  seed 코드를 작성해놓으면 재작성의 필요가 없다.
2.  rollback이 용이하다.

## 1.3. Seed 실행, revert script 작성

```json
//package.json
    "migration:run": "ts-node -r tsconfig-paths/register ../../node_modules/typeorm/cli.js migration:run",
    "migration:revert": "ts-node -r tsconfig-paths/register ../../node_modules/typeorm/cli.js migration:revert",
```

위와 같은 논리로 run과 revert를 작성해주면 된다.

# 2. Seed 코드 작성

## 2.1. Up down

위에서 설정한 create를 실행해보자.

그럼 아래와 같은 코드가 생성될 거다.

```typescript
class SeedUser1643011552762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

  }

  public async down(queryRunner: QueryRunner): Promise<void> {

}
export default SeedUser1643011552762;
```

up은 migration을 run할때 동작하는 함수고
down은 migration을 revert할때 동작하는 함수다.

migration의 편리한 점은 database에 key값을 기록하여  
migration이 rollback됐는지, run됐는지를 확인할 수 있다.

seed뿐만 아니라, column명 변경 or 추가 등에 용이하다.

## 2.2. seed run 코드 작성

글 맨 상단에서 미국 유명 프로그래머 Aaron Swartz 어디감??...을  
문제삼았다.

이유는 이 사람이 많은 오픈소스를 오픈했다가 갑자기 어떤 이유에서인지  
소스가 전부 날렸기 때문이다.

이 사람이 만들어준 faker라는 npm module을 사용하려다 없어져서 놀랐다.  
faker는 자동으로 dummydata를 생성해주는 툴이다.

대안으로 casual을 사용하기로 했다.

```typescript
class SeedUser1643011552762 implements MigrationInterface {
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
}
```

npm가이드대로 casual.원하는값 을 해주면  
랜덤하게 값을 출력해준다.  
email,password,phone외에도 다양한 dummydata형식을 지원한다.

코드는 아주 간단하다.  
100개의 더미데이터를 User Entity에 넣어주는 것이다.

## 2.3. seed revert 코드 작성

롤백 코드도 작성해보자.

```typescript
class SeedUser1643011552762 implements MigrationInterface {
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`truncate table public.user cascade;`);
  }
}
```

psql을 사용하는데, truncate를 이용하여 row 데이터를 모두 날리는 쿼리다.

저장한 뒤

# 3. Seeding 하기

위에서 작성해준 스크립트를 실행해주면 된다.

# 4. 마치며

실제로 버전관리가 필요한 migration과  
local에서 test용으로 작성하는 dummy용 migration seeding은 폴더를 나눠  
관리할 필요가 있겠다.

package를 오픈소스로 풀어주는 사람들에게  
항상 감사함을 느낀다.
