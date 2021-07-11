---
title: '철거 서비스'
date: '2021-07-11 14:52:39'
tags: ['REACT', 'REDUX']
category: 'PROJECT'
subtitle: '철거해줘 프로젝트'
featuredImgUrl: https://i.postimg.cc/SNNVPg8h/PROJECT2.png
featuredImgAlt: 'PROJECT'
---

# 🔨 철거해줘

---

**✔ 제작기간** : 21.05.01 ~ 21.06.20

**✔ 팀구성** : 백엔드 SPRING(1명), 프론트엔드(1명), 기획자(1명)

**✔ 담당업무** : 프론트 100%

**✔ 프로젝트 한 줄 설명** : 철거를 원하는 사업장과 철거전문업체를 매칭해주는 서비스

**✔ 사용스택**: REACT, TYPESCRIPT, CHAKRA-UI, STYLED-COMPONENT, REDUX-TOOLKIT, SPRINGBOOT

**✔ 상세업무** : 퍼블리싱, 로그인, 로그아웃, 프로필수정, 권한별 페이지 접근 금지, 견적서 작성, 삭제

**✔ 저장소링크**: 비공개

**✔ 사이트 주소** : https://beardfriend.github.io/video (영상으로 대체)

---

# ⚡ 디렉터리 구조

---

## ◾ 흐름

![100.png](https://i.postimg.cc/8PZHhL7z/100.png)

### Components → Containers → Pages → App.tsx → Index.tsx

**▪ Components** : 재사용이 가능한 요소들올 담았습니다.<br>
순수 props를 사용하기 때문에, 다양한 Container에서 재사용을 하게 됩니다.

**▪ Containers** : 컴포넌트들과 비즈니스 로직을 담았습니다.

**▪ Pages** : 컨테이너들을 모아 페이지에 담았습니다.

**▪ Global** : 자주 사용하는 css in js를 담았습니다.

**▪ Features** : REDUX TOOLKIT 로직을 담았습니다.

---

### ◾ REDUX-TOOLKIT을 선택한 이유

![103.png](https://i.postimg.cc/rm2C8JPQ/103.png)

1. actions, constants, reducer 세가지를 한 폴더에 통합할 수 있습니다.

2. 비즈니스 로직을 추가/수정/삭제 시 한 폴더에서 처리합니다.

3. 리덕스 공홈에서 권장하는 방법입니다.

---

# ⚡ 퍼블리싱

---

기획자 분께서 작성한 Wire Frame을 토대로,<br>
화면을 구성했습니다.

모바일은 기획에 포함되지 않았기에,<br>
반응형 홈페이지는 제공하지 않습니다.

---

### ◾ 메인페이지

![104.png](https://i.postimg.cc/V6995ty1/104.png)

![105.png](https://i.postimg.cc/fR3xmp48/105.png)

**react-page-scroller**을 사용하여 스크롤 시 한 페이지씩 넘어가게 구현했습니다.

---

### ◾ 레이아웃

Styled-Component를 사용하여 레이아웃을 만들었습니다.<br/>
Props를 전달하여, 다양한 레이아웃을 한 Component에서 사용할 수 있도록<br/>
신경을 썼습니다.

레이아웃을 여러 개 만드는 것보다,<br/>
유지보수 면에서 수월할 거라 판단했습니다.

---

### ◾ INPUT

![106](https://i.postimg.cc/BvKB9yMj/106.png)

![107](https://i.postimg.cc/cLjBzZMq/107.png)

본 프로젝트에서 Input을 가장 많이 사용했습니다.

재사용성을 높히기 위해<br>
하나의 컴포넌트 내에서 Props로 통제할 수 있도록<br/>
만들었습니다.

에러메세지, 필수항목여부, Check, 비밀번호 숨기기, 스켈레톤 등<br>
다양한 기능을 지원합니다.

```tsx
  <InputChange
        name='title'
        isButtonhide
        title='파트너명'
        value={title}
        onChange={handleChange}
        maxLength={20}
      />
      <SelectRegion
        title='제공 서비스'
        onChange={handleClick}
        data={data.default.service}
        isChecked={data.other.serviceBol}
      />
      <InputChange
        name='partnerName'
        isButtonhide
        title='파트너명'
        value={partnerName}
        onChange={handleChange}
        maxLength={20}
      />
      <InputChange
        name='partnerPhoneNum'
        isButtonhide
        title='전화번호'
        value={partnerPhoneNum}
        onChange={handleChange}
        maxLength={20}
      />
      <InputChange
        name='estimateEmail'
        isButtonhide
        title='이메일'
        type='email'
        value={estimateEmail}
        onChange={handleChange}
        maxLength={20}
      />
```

Input을 컴포넌트화 하였기에,<br/>
코드의 가독성이 높아졌습니다.

---

### ◾ SKELETON

![skel](https://i.postimg.cc/0jHgWsDB/skel.gif)

로딩 시 스켈레톤을 지원합니다.

---

# ⚡ 기능구현

---

### ◾ 이메일형식체크, 비밀번호체크

```tsx
export const ErrorCheck = () => {
  const [passwordState, setPassword] = useState({ msg: '', bol: false });
  const [emailState, setEmail] = useState({ msg: '', bol: false });
  const [nameState, setName] = useState({ msg: '', bol: false });
  const [repasswordState, setRepasswordState] = useState({ msg: '', bol: false });
  const handleEmailCheck = (email, msg) => {
    if (email.length === 0) {
      return;
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmail({ ...emailState, msg: msg, bol: true });
    }
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmail({ ...emailState, msg: msg, bol: false });
    }
  };

  const handlePasswordCheck = (password, msg) => {
    if (password.length === 0) {
      return;
    }
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)) {
      setPassword({ ...passwordState, msg: msg, bol: true });
    } else {
      setPassword({ ...passwordState, msg: msg, bol: false });
    }
  };
  const handleRepasswordCheck = (repassword, msg) => {
    if (repassword.length === 0) {
      return;
    }
    if (!repassword.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)) {
      setRepasswordState({ ...repasswordState, msg: msg, bol: true });
    } else {
      setRepasswordState({ ...repasswordState, msg: msg, bol: false });
    }
  };

  const handleNameCheck = (name, msg) => {
    if (name.length === 0) return;
    if (name.length >= 2) {
      setName({ ...nameState, msg: msg, bol: false });
    } else {
      setName({ ...nameState, msg: msg, bol: true });
    }
  };

  return {
    emailState,
    passwordState,
    nameState,
    repasswordState,
    handleEmailCheck,
    handlePasswordCheck,
    handleNameCheck,
    handleRepasswordCheck
  };
};
```

```tsx
useEffect(() => {
  handleEmailCheck(data.signUpPost.email, '이메일 형식을 확인해주세요.');
  handlePasswordCheck(data.signUpPost.password, '특수문자, 숫자, 영문을 포함 8자리 이상 입력해주세요.');
  handleNameCheck(data.signUpPost.name, '3글자 이상 입력해주세요.');
  handleRepasswordCheck(data.signUpPost.repassword, '비밀번호가 일치하지 않습니다.');
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [data.signUpPost.email, data.signUpPost.password, data.signUpPost.name, data.signUpPost.repassword]);
```

공통으로 사용되는 handler를 Hooks에 담아,<br>
필요 시, 어느 Containers에서나 사용할 수 있도록<br>
만들었습니다.

비즈니스 로직을 수정하든, 문구를 수정하든<br/>
코드가 분리되어 있기 때문에 직관적입니다.

---

### ◾ 버튼 Disable

![108](https://i.postimg.cc/Pr5brNSs/111.png)

위 요청서를 보시면,

제목에 빨간색 **\*** 이 붙어있는 칸과,<br>
그렇지 않은 입력란이 섞여있습니다.

**문제 :** **\***이 붙어있는 칸이 다 채워지면, 버튼 Disable -> Able

**\***이 붙어있는 칸 === A

else === B

A의 state값 === undefined<br>
B의 state값 === null

A를 모두 긁어모아서, A의 state가 undefined가 없으면,
버튼 Disable -> Able

```js
const filterUndefinedData = () => {
  return Object.keys(data.requestForm)
    .filter((datas) => data.requestForm[datas] === undefined)
    .reduce((obj: any, key) => {
      return {
        ...obj,
        [key]: false
      };
    }, {});
};

useEffect(() => {
  const undeFinedDataKey = Object.entries(undeFinedData).map((datas) => {
    const key = datas[0] as any;
    console.log(key);
    return key;
  });

  const BolInArray = undeFinedDataKey.map((datas) => {
    if (data.requestForm[datas] !== undefined) {
      if (data.requestForm[datas] !== '') {
        return true;
      }
      return false;
    }
  }) as any;

  if (
    BolInArray.length === BolInArray.filter((datas) => datas === true).length &&
    data.requestForm.requisitionRequestServiceList.length > 0
  ) {
    setOpen(true);
  } else {
    setOpen(false);
  }
}, [data.requestForm]);

useEffect(() => {
  setOpen(false);
  filterUndefinedData();
  setUndeFinedData(filterUndefinedData);
}, []);
```

---

### ◾ 카카오지도

UI는 DAUMPOST를 사용했습니다. <br>
지도에, 사용자 위치를 표시할 경우를 대비해<br>
카카오 LOCAL을 이용해 좌표값도 미리 받아놨습니다.

## ![113](https://i.postimg.cc/NfC6yYny/113.png)

---

### ◾ 권한별 접근금지

1. 로그인 시, signup, login 페이지 접근 금지
2. 사용자 -> 파트너 페이지 접근 금지
3. 파트너 -> 사용자 페이지 접근 금지

histor.push를 통해 구현했습니다.

```jsx
useEffect(() => {
  if (userData.user.email !== null) {
    history.push('/');
  }
}, [history, userData.user.email]);
```

---

# ⚡데이터 연결

---

```tsx
/**************************  USER   **********************/

//GET UserData
export const UserData_GET = () => API.get('/api/user');

//SET ROLE
export const RolePartner_PUT = (email) => API.put('/api/role-partner', email);
export const RoleClient_PUT = (email) => API.put('/api/role-client', email);

//SIGNIN, SIGNUP, SIGNOUT
export const SignIn_POST = (formData) => API.post('/api/login', formData);
export const SignUP_POST = (formDataName) => API.post('/api/signup/user', formDataName);
export const LogOut_POST = () => API.post('/api/logout');

/* **************************************************************** */

/* *************************   MYPAGE   ********************** */

//Profile
export const MyPage_GET = () => API.get('/api/mypage');
export const MyPage_POST = (formData) => API.put('/api/mypage', formData);

//partner profile
export const PartnerProfile_GET = () => API.get('/api/partner/profile');
export const PartnerProfile_PUT = (formData) => API.put('/api/partner/profile', formData);

/* ****************************************************************** */
// 요청서

export const ClientRequest_GET = () => API.get('/api/client/requisition/list');
export const ClientRequest_POST = (formData) => API.post('/api/client/requisition', formData);
export const ClientRequest_DELETE = (sr) => API.delete(`/api/client/requisition/${sr}`);

//파트너 요청서

export const PartnerRequest_GET = () => API.get('/api/partner/requisition/list');
export const PartnerRequsetView_GET = (sr) => API.get(`/api/partner/requisition/${sr}`);

// 파트너 견적서

export const Estimate_POST = (formData) => API.post('/api/partner/estimate', formData);
export const Estimate_GET = () => API.get('/api/partner/estimate/list');
export const EstimateView_GET = (sn) => API.get(`/api/client/estimate/list/${sn}`);
export const EstimateView_DELETE = (sn) => API.delete(`/api/partner/estimate/${sn}`);
export const EstimateView_PUT = ({ form, sn }) => API.put(`/api/partner/estimate/${sn}`);
```

### ◾ 원하는 데이터만 받기

Backend로부터 데이터가 한 번에 넘어와도,

State에 담을 필요가 없는 데이터가 분명존재합니다.

```tsx
export const ObjectOnlyStateItem = (Payload: { [key: string]: any }, Data: { [key: string]: any }): any => {
  const value = Object.keys(Data)
    .filter((key) => Object.keys(Payload).includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: Payload[key]
      };
    }, []);

  return { value };
};
```

```tsx
state.user = ObjectOnlyStateItem(user, state.user);
state.role = ObjectOnlyStateItem(role, state.role);
```

initialState에 정의해놓은 값들만 저장하고<br>
정의하지 않은 action.payload는 모두 버립니다.

마찬가지로, 재사용을 할 수 있기 때문에<br>
유지보수에 탁월합니다.

---

### ◾ 로그인, 회원가입, 유저타입

![select](https://i.postimg.cc/x8TmCFyy/118.jpg)

1. 흐름에 문제가 있는지 파악할 때, 매우 용이합니다.
2. 시각적인 데이터이기에, 회의할 때 유용합니다.

---

# ⚡ 마무리

---

클론코딩을 제외하고 첫 프로젝트입니다.
redux를 걷어내는 추세라는 얘기를 접한 뒤, swr이나 graphql도 고민했습니다.

redux를 없애는 이유를 느끼지 못한 채, 흐름을 따르기 보다는<br>
직접경험해보고 불편한 점을 체험해보자는 생각으로, redux-toolkit을 사용했습니다.

redux를 사용하면서 아쉬웠던 점은, reducer내에서 외부 reducer를 dispatch할 수 없었다는 점이 다소 아쉬웠습니다.

기간이 짧아, Form입력 속도향상, 데이터 처리 속도 향상 등을
고려하지 못해, 다소 아쉬움이 남지만, 협업하면서 백엔드와 소통하고 기획
명세서대로 코딩을 해보는 값진 경험이었습니다.
