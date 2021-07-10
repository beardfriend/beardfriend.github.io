---
title: 'CMS HeadLess는 무엇일까?'
date: '2021-07-10 11:27:49'
tags: ['CMS']
category: 'REVIEW'
subtitle: 'hello'
featuredImgUrl: https://i.postimg.cc/MG2ng7Cp/ghost-logo.png
featuredImgAlt: 'Mountains with a starry sky'
---

# 🚀 CMS HEADLESS 머리가 없다?

머리가 없다는 말은 무엇일까? 그전에, CMS가 뭔지 알아야 한다.
**CMS란 (Contents Management System)의 약자로** 콘텐츠 관리 시스템이라고 부른다.
CMS는 콘텐츠(글,사진,동영상 등)를 관리해주는 서비스(?) 정도로 생각하면 되겠다. 예를 들어보면 네이버 블로그 티스토리 정도.

네이버 블로그를 잘 사용하면 되는데 왜 CMS HeadLess라는 것이 인기를 끌고있을까?

## ⚡ 컨텐츠 관리가 유연하다.

네이버 블로그를 예로 들자면, 네이버 블로그에서 글을 쓰고, 네이버 블로그에서만 작성한 글을 볼 수 있다.(View)
CMS Headless를 이용한다면, 글 작성, 수정, 삭제는 CMS Headless를 통해 하고, 컨텐츠는 자기가 원하는 곳 어디에서나 보여줄 수 있다.

![1.png](https://i.postimg.cc/x80nKVjD/1.png)
1번 플랫폼 =CMS에서는 VIEW가 1번에서만 가능했지만,

CMS Headless를 이용한다면, VIEW를 어디서든 가능하게 할 수 있다.

## ⚡ 컨텐츠 관리자와 개발자를 확실하게 분리해준다.

컨텐츠 관리자는 CMS Headless 플랫폼에서
익숙한 UI를 통해 글쓰기가 가능하고,

개발자는 RESTFUL API를 통해 컨텐츠를 받아와 화면을 구성하면 된다.

## ⚡ SSG와의 연동이 쉽다.

### ▪ SSG란?

SSG는 또 무엇일까? SSG는 ( Static Site Generator )다.
정적인 사이트 생성기다.
정적인 사이트는 또 무엇일까? 정적의 반댓말은 동적이다.
여기서 말하는 정적과 동적의 차이는,
데이터베이스에서 뭔가를 불러오냐 아니냐의 차이다.
정적인 사이트는 데이터베이스에서 불러오지 않는다.
HTML에 직접 하드코딩된 상태라고 생각하면 된다.

HTML, css, javascript, 마크다운을 작성하면 Generator(생성기)가
하나의 HTML파일로 만들어준다.

데이터를 불러올 일이 없기 때문에,

1. 사용자가 많이 들어오더라도 같은 속도를 유지할 수 있다.
2. 데이터를 불러오는 시간이 없으니 빠르다.

### SSG의 단점

위에서 SSG는 하나의 HTML로 만들어 준다고 했다.
그말은, 글을 쓸 때마다, Generator(생성기)를 이용해서
HTML파일로 Build를 해줘야 하고, 서버에 HTML파일을 다시 업로드를 해야 한다는 뜻이다. 글을 쓰는 것 뿐만 아니라, 수정사항이 생기거나 글을 지울 때에도 매번 빌드를 해줘야 한다.

또한 콘텐츠 양이 많아질수록 빌드하는 시간이 길어진다.

대신, 사용자 입장에서는 엄청난 속도를 경험할 수 있지만..

## - SSG의 단점을 보완하는 Headless

### CMS Headless란?

위의 문제를 보완하기 위해 CMS Headless라는 녀석이 인기를 끌지 않았을까 한다. CMS HeadLess 중에서 데이터베이스에 저장하는 서비스도 있지만, 가장 기본 형태는 Markdown형태로 파일을 저장시켜주는 서비스다.

### #CMS HeadLess의 핵심

SSG의 단점을 보완하기 위해 CMS Headless가 나왔다고 했다.
그렇다면, SSG의 단점을 보완하고 속도를 살리기 위해서는 무엇이 필요할까? 글을 쓰거나, 수정하거나, 삭제하면 자동으로 배포하는 시스템이 필요하다. 물론 SSG 자체적으로 자동배포하는 시스템을 갖출 수는 있지만, 개발자와 콘텐츠 생성자의 분리 측면에서 CMS HeadLess가 더 수월하다.

## - CMS HeadLess 종류

### Netlify CMS HEADLESS

![](https://images.velog.io/images/beardfriend/post/82b0fd91-871e-4767-a83b-8f860e988fbf/image.png)
기본 형태의 가장 대표적인 예로, netlify가 있다.
![](https://images.velog.io/images/beardfriend/post/a6ab0883-6425-4be1-a783-59b5f2c11eb4/image.png)
다양한 SSG를 지원한다. 그 중에서 가장 맘에 드는 녀석은 Gatsby, React 프래임워크다. Netlify의 장점은 귀찮은 세팅을 얘는 다 해준다.

![](https://images.velog.io/images/beardfriend/post/305e67c3-7202-4b73-8f4a-b75ad7561aa1/image.png)
글을 쓰는 걸 관찰하는 WEBHOOK을 세팅해야 하며,
람다 or action 등 자동 빌드를 해주는 녀석이
수정사항이 생겼을 때
자동으로 빌드, 배포를 해주는 시스템을 모두 구축해야 한다.

즉 SSG세팅, CMS세팅 설치, WebHook연결, 자동빌드 시스템 구축
이렇게 4가지를 Netlify는 한 번의 클릭만으로 모든 걸 해결해준다.
심지어 Github에 push까지 완료해준다..
엄청난 녀석이지만 UI가 너무 좋지 않다.

링크 : https://www.netlifycms.org/

### Ghost

![](https://images.velog.io/images/beardfriend/post/c3851ea1-919d-4849-9b8b-4220a50f724c/image.png)
가장 인기가 많은 Ghost다.
UI가 예쁘고, 에디터가 너무 좋다.

무료로 사용하기 위해서는 자신이 직접 세팅해야 한다.
Ghost와 블로그를 연동하는 것까지는 쉽지만,
자동배포, WebHook 세팅을 하는 데 조금은 곤혹스러울 수 있다.

귀찮다면, 돈을 지불하는 것도 하나의 방법이다.
서버비용이나 그게 그걸수도.
다만 지불하면 멈출 수 없다.

다음 글은 Ghost 세팅하는 방법이 될 예정이다.

링크 : https://ghost.org/

### Strapi

깃허브에서 Ghost다음으로 Star가 많은 녀석이다.
사용해보지는 않았지만 다른 분들의 글을 읽어보면
세팅하는 게 Ghost보다는 좀 쉬워보인다.

얘도 마찬가지로 직접 세팅은 무료이지만,
돈을 내면 세팅을 해준다.

링크 : https://strapi.io/

## 마무리

CMS Headless에 대해 알아봤다.
velog를 이용하면 간편하게 글을 쓸 수 있어서 너무 만족스럽지만,
나만의 UI를 만들고싶거나 콘텐츠가 많아진다면,
SSG + headless CMS 이용을 고려할 수도 있겠다.
