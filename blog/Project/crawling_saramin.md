---
title: 'YOGO 마케팅 프로젝트_1차'
date: '2022-01-12 23:45:17'
category: 'Project'
tags: ['Backend', 'Database']
subtitle: '사람인 크롤링 && 메일 보내기 && 디자인'
featuredImgUrl: https://i.postimg.cc/bYDzTnkW/project.png
featuredImgAlt: 'PROJECT'
---

**💡목표**

- **디자인**
- **Contact 페이지 배포**

  - express, ejs로 간단하게
  - 사용자가 Form Submit 시 나에게 Mail 발송

- **사람인 크롤링**

  - 회사명, 홈페이지주소
  - DB에 중복 체크 후 저장
  - 회사명, 홈페이지주소 엑셀로 저장.

- **메일보내기**
  - DB에 있는 메일
  - 보낸 메일 체크

---

# 1. 디자인

![107](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc1M6pP%2FbtrqvApAsMx%2FBGJZu8Z51WRHYnV5N2PiI0%2Fimg.jpg)

주로 사용한 색상 : #777fd4, #92bcec, #1d2e3e  
제작 툴 : Figma

# 2. Contact 페이지 배포

제작 : express-generator  
언어 : js  
배포 : Heroku  
데이터베이스 : Mongodb

Mongoose를 사용했고, 배포는 MongoDB Cloud를 사용하였다.

아주 간단하다.  
User스키마를 만들어주고  
폼을 통해 요청을 받는다.  
받은 요청을 내용을 디비에 저장한다.  
저장이 잘 되면 나에게 메일을 보낸다.

```javascript
var user = await new User();
user.companyname = req.body.company;
user.email = req.body.email;
user.tel = req.body.tel;
await user.save().then(() => console.log('success'));
```

메일 보내는 건, nodemailer를 사용하였고, 워낙 예제가 많기 떄문에 생략

# 3. 사람인 크롤링

크롤링은 언제나 긴장된다.  
자칫하면 영업방해가 될 수 있기도, 무단수집이 될 수도 있다.  
소규모의 데이터만 수집하기 때문에 문제가 없을거라 판단해 진행했다.

## 3.1. 회사명, 홈페이지 주소 수집

언어 : python

BeautifulSoup와 requests, pymysql이 주된 라이브러리다.  
빠른 코딩이 목적이라 코드는 대충짰다.

처음 크롤러를 실행할 때, 테이블이 없으면 테이블을 생성하게끔 해놨다.  
그리고 숫자 입력을 받아 필요에 맞게 프로그램을 실행할 수 있도록 분기처리를 해놨다.

---

사람인 채용페이지에 들어가서 각 채용공고페이지 주소를 수집한다.  
하나하나 들어가서 회사 이름과, 홈페이지 주소를 긁어 오는데,  
회사명이 DB에 없으면 INSERT를 하고 아니면 그냥 넘긴다.

```python
def crawling(maxPage, cursor, db):
    for pagenumber in range(0, maxPage):
        if pagenumber == 0:
            url = (
                mainUrl
                + f"/zf_user/jobs/list/domestic?page=1&loc_mcd=101000&cat_mcls=21&isAjaxRequest=0&page_count=50&sort=RL&type=domestic&is_param=1&isSearchResultEmpty=1&isSectionHome=0&searchParamCount=1#searchTitle"
            )
        url = (
            mainUrl
            + f"/zf_user/jobs/list/domestic?page={pagenumber + 1}&loc_mcd=101000&cat_mcls=21&isAjaxRequest=0&page_count=50&sort=RL&type=domestic&is_param=1&isSearchResultEmpty=1&isSectionHome=0&searchParamCount=1#searchTitle"
        )
        response = requests.get(url)
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html, "html.parser")
            homepage = soup.find_all("a", {"class": "str_tit"})
            indexing = 0
            for idxx, val in enumerate(homepage):
                if idxx % 2 == 0:
                    continue
                openUrl = urllib.request.urlopen(mainUrl + homepage[idxx]["href"])
                newUrl = openUrl.geturl()
                newResponse = requests.get(newUrl)
                newHtml = newResponse.text
                newsoup = BeautifulSoup(newHtml, "html.parser")
                splitList = newsoup.find_all(attrs={"name": "description"})[0][
                    "content"
                ].split(",")

                index = 0
                indexing += 1
                for idx, val in enumerate(splitList):
                    if idx == 0:
                        checksql = "SELECT * FROM company WHERE name = %s"
                        res = cursor.execute(checksql, val)
                        name = val
                        cursor.fetchall()

                    if res == 1:
                        break
                    if val.find(":") == -1:
                        continue
                    else:
                        if "홈페이지" in val:
                            tt = val.split(":", 1)
                            cursor.execute(
                                "INSERT INTO company(name, homepage) VALUES (%s, %s)",
                                (name, tt[1]),
                            )
                            cursor.fetchall()
                            db.commit()
                            print(f"수집했습니다. {name} {tt[1]}")
                        index += 1

    else:
        print(response.status_code)
```

## 3.2.엑셀로 저장

아주 간단하다. DB에 저장된 것들 불러와서  
엑셀에 기록하고 저장 끝.

```python
        cursor.execute("SELECT * from company")
        result = cursor.fetchall()
        write_wb = Workbook()
        write_st = write_wb.active

        for idx, data in enumerate(result):
            write_st.cell(row=1 + idx, column=1).value = data[1]
            write_st.cell(row=1 + idx, column=2).value = data[2]
            write_wb.save("test.xlsx")
```

## 3.3. 메일보내기

홈페이지에 들어가서 메일을 직접 수집했다.  
크롤링을 통해 할 수 있었지만,

무분별한 메일 수집을 원치 않는 회사들도 있기 때문에  
Contact Us에 적어놓은 메일만 수집했다.

메일에 html로 Contact Us 버튼을 삽입하여,  
클릭 시 FORM 입력 페이지로 넘어가게끔 해놨다.  
그리고 사용자가 FORM을 제출하면 나에게 메일이 오게끔 하여,  
폼을 입력했을 때 즉각 반응할 수 있게 시스템을 구성했다.

# 4. 마치며

일부 코드는 공개하지 않았음을 알리고,  
목적에 맞게 가벼운 코드를 짰기 때문에,  
코드 품질과 속도는 신경쓰지 않았다.

파이썬을 처음 사용해봤는데, 간단하고 직관적이라 좋았다.

또한 시스템 에러가 났을 때  
먼저 알 수 있도록 메일이나 문자를 보낼 수 있도록 코드를 짜놓는 것에 대해 생각했다.  
결함일 때 과연 메일이나 문자를 전송하는 코드가 실행이 될까라는 의문을 해결하기 위해서는  
외부 모니터링 시스템에 시스템을 구축해놓는 게 좋을 듯하다.
