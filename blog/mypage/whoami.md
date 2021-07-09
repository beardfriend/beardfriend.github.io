---
title: '자기소개'
date: '2021-06-28 17:40:00'
tags: ['HTML', 'JAVASCRIPT']
category: 'ff'
featuredImage: '../../src/images/port/second/1.jpg'
---

##하이
hello

## 마크다운 테스트

안녕하세요 저는 박세훈입니다.

```
code highlight

```

> hello

![screen](https://pds.joins.com/news/component/htmlphoto_mmdata/202010/29/14580d85-de56-4846-bad6-d3444e2fcebe.jpg)

![fet]('../../src/images/port/second/1.jpg')

```js
function constant(value) {
  return () => value; // highlight-line
}

// highlight-next-line
const alwaysFour = constant(4);

// highlight-start
const zero = [0, 1, 2, 3, 4, 5].map(alwaysFour).filter((x) => x !== 4).length;
// highlight-end
```

```js {numberLines}
import * as React from 'react';

React.createElement('span', {});
```

```js {numberLines: 21}
return 'blah';
```

Now you can highlight inline code: `js•Array.prototype.concat.apply([], array)`.
