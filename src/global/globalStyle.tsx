import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');


*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding:0;
}


body {
  min-height:100vh;
  font-size: 10px;
  font-family: 'Noto Sans KR', sans-serif;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyle;
