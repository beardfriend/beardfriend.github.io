---
title: '마케팅 프로젝트'
date: '2022-03-25 11:07:33'
category: 'Project'
tags: ['Backend', 'Database']
subtitle: '사람인 크롤링 && 메일 보내기 && 디자인'
featuredImgUrl: https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMZd4E%2FbtrrF6NXR2o%2F5zhUCnuxHWCpmLwo4ar1y0%2Fimg.png
featuredImgAlt: 'PROJECT'
---

**💡 목표**

**디자인**

**사람인 크롤링**

- 회사명, 홈페이지 주소 수집
- 중복이 있을 경우 저장하지 않기
- DB에 저장된 데이터를 엑셀에 저장.

**FORM 페이지**

- FORM 받고 DB에 저장.
- 사용자가 Form 제출 시 나에게 Mail 발송하는 Trigger 설치.

**메일보내기**

- DB에 있는 메일주소로 광고메세지 발송.
- 발송한 메일주소 체크

---

**⚡ 개요**

**✔️ 제작기간** : 2021.11.27 ~ 2021.11.30

**✔️ 기여도** : 본인 100%

**✔️ 사용스택** : python, mariadb, mongoose, nodejs, heroku

**✔️ 저장소**: https://github.com/beardfriend/saraimcrawl

**✔️ 프로젝트 한 줄 설명** : "사무실에 찾아가는 요가 서비스"를 광고하기 위함.

**✔️ 환경** : Crawling,Mail APP = 로컬, Form 페이지 = 배포

---

![108](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxkCKO%2Fbtrxc2SXoJW%2FikDMFMcMcNkStYInahBYA1%2Fimg.jpg)

앱 설계도입니다.
앱은 Cli로 돌아가며,
숫자 1,2,3,4 입력에 따라
크롤링, 데이터베이스 조회, 엑셀로 저장, 메일 보내기 기능이 실행됩니다.

프로그램 설계 시 메일 무단수집에 관해 생각했습니다.
프로그램으로 수집할 경우에 법적인 문제가 생길 것 같아  
홈페이지 주소를 프로그램으로 수집하고  
수동으로 접속해 문제가 없을 것 같은 회사 메일만 수집하기로  
결정했습니다.

위 설계도는 크롤링이 이뤄지는 과정을 간단하게 보여줍니다.  
자세한 내용은 밑에서 설명하도록 하겠습니다.

# 1. 사람인 크롤링

코드를 짜며 겪었던 문제점과, 아쉬웠던 점 위주로 말씀드리겠습니다.

## 1.1. 채용공고 상세 페이지 접속 시 URL이 변하는 문제.

채용공고 리스트 페이지에 가보면, 공고가 50개씩,
클릭 시 각 채용공고 상세 페이지로 이동합니다.

채용공고 리스트가 있는 페이지에서
class명이 str_tit인 a태그의 href의 속성값을 50개를 수집합니다.

수집한 주소에 접속을 시도했는데,  
URL이 리다이렉션되면서,  
상세 페이지의 정보를 긁어올 수가 없었습니다.

해결책이 필요했습니다.  
삽질을 하다가 🪓🪓🪓🪓....
request 라이브러리를 이용하여
새로운 URL에 접속을 하니,  
정보를 수집할 수 있었습니다.

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

## 1.2. DB에 INSERT 할 때, Commit을 한 번에 할지 말지.

커밋 한 번에 모든 데이터를 저장하려고 할 경우,  
중간에 프로그램이 꺼지면, 지금껏 수집했던 데이터가 모두 증발하기 때문에,  
"안정적 > 속도" 를 택했습니다.

## 1.3. 가독성 높은 코드

로버트 C마틴의 책 클린 코드에서  
"함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다."
라고 합니다.

제가 짠 코드를 보면서 반성을 많이 합니다.  
코드에 쓰인 모든 변수명은 최악입니다.  
누구나 알아볼 수 있게 만들어도 모자랄 판에,  
누구도 알아볼 수 없게 되어 있습니다.

"이 프로젝트는 다신 쓰이지 않을 거야"  
"속도가 중요하니 대충 짜도 돼"  
"변수 이름을 짓는 데 시간을 소비하는 건 아까워" 등
다양한 핑계를 대며 코드를 엉망으로 짰습니다.

때문에 본인이 짠 코드임에도 불구하고  
다시 크롤링할 일이 생긴다면
이 코드는 재사용 할 수 없다고 느꼈습니다.

위 프로젝트 이후로는
변수명을 짓는 데에 시간을 많이 들이고 있으며,  
재사용이 가능하게끔 코드를 작성합니다.

물론, 사용성과 비용을 따진다면, 코드 분리가 손해일 수도 있겠지만요.

다음 프로젝트 엿보기 : https://github.com/beardfriend/relax

## 1.4. 엑셀에 데이터 저장

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

(A열,B열)에 회사명, 홈페이지 주소를 기입했습니다.

엑셀에 저장한 데이터를 DB에 반영할 수 있게 프로그램을 설계하는 방안을  
고려했지만, MysqlWorkBench에서도 쉽게 수정삭제가 가능하기 때문에  
필요하지 않은 기능이라고 판단했습니다.

# 2. FORM 페이지

EJS(Views)를 사용하여 FORM페이지를 만들었습니다.  
인터넷에 돌아다니는 예제를 활용하여 시간을 단축했습니다.

사용자가 버튼을 클릭했을 때, 불러오는 API입니다.
폼에 있는 내용을 저장하고 메일을 보내는 아주 간단한 기능입니다.

## 2.1 나에게 메일 보내는 시간을 유저에게 기다리게 할 지.

폼 기능을 구현하면서 고민했던 부분은  
nodemailer를 Success 페이지에 배치할 것인지에 대한 고민이었습니다.

코드를 분리하면, 사용자 입장에서 FORM 제출하는 시간이 확연히 줄겠지만,  
Success페이지에서 Reload를 하는 사람들이 있다면,

설레임에 부풀어 메일을 확인했으나, 실망하는 경우가 생길 것 같아  
개인의 편의를 더 고려했습니다.

물론 Success페이지나 다른 방식으로도 구현할 수 있었겠지만,  
(POST에서 Cookie를 던지고 Success에서 메일을 보내면서 Coookie를 제거하는 방식)
(비동기로 보내는 방식)

페이지 사용률이 저조할 것으로 예상해 자원낭비라고 판단했습니다.

```javascript
router.post('/post', async (req, res) => {
  console.log(req.body);
  var user = new User();
  user.companyname = req.body.company;
  user.email = req.body.email;
  user.tel = req.body.tel;
  user.save().then(() => console.log('success'));

  const mailConfig = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
      user: '',
      pass: '',
    },
  };
  const message = {
    from: {
      name: '폼 받았으!',
      address: 'contact@yogo.com',
    },
    to: `aa@gmail.com, aa@gmail.com`,
    subject: '폼 받았으!_version1.0',
    html: `
        확인하기
        `,
  };

  try {
    const transporter = await nodemailer.createTransport(mailConfig);
    await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
  res.redirect('/success');
});
```

# 3. 메일보내기

데이터베이스에서 보낸 흔적이 없는 메일주소에  
편지를 보내는 방식으로 코드를 작성했습니다.

메일보내기에 실패할 경우 메일주소를 텍스트 파일에 로깅을 했습니다.  
실패한 메일이 많이 나온다면 코드수정을 하기 위함입니다.

메일 본문에 이미지와 A태그를 넣어
A태그를 클릭할 경우, FORM제출 페이지로 이동하게끔 설계했습니다.

```python
def sendMail(cursor):

    cursor.execute(
        "SELECT id, mail, isSend FROM company WHERE mail != 'None' AND isSend = 0;"
    )
    row = cursor.fetchall()
    for i in row:
        print(i)
        email = i[1]
        testmail(email)
        query = "UPDATE company SET isSend = 1 WHERE id = %s"
        cursor.execute(query, i[0])
        cursor.fetchone()
```

# 4. 디자인

![107](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc1M6pP%2FbtrqvApAsMx%2FBGJZu8Z51WRHYnV5N2PiI0%2Fimg.jpg)

**✔️메인 색상** : #777fd4, #92bcec, #1d2e3e  
**✔️제작 툴** : Figma

요가가 직장인의 불편함을 어떻게 해결할 수 있는지를,
이미 많은 기업에서 요가를 채택했음을,
찾아가는 서비스임을 강조했습니다.

# 5. 마치며

파이썬을 처음 사용해봤습니다.  
Typescript의 깐깐한 컴파일링으로부터 해방되니,  
정말 빠르게 코드를 작성할 수 있었습니다.

이 프로젝트를 떠올리면 설렙니다.
기획하고 실제로 눈 앞에서 동작하니 너무 좋았습니다.

다음 프로젝트에서 힘든 상황을 이겨낼 수 있는  
든든한 설렘버팀목이 될 것 같습니다.
