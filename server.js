const express = require('express');
const path = require('path');
const fs = require('fs');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const app = express();

app.get('/api/books', (req, res) => {
  res.json(['hello', 'world']);
});

// static 파일을 요청했는데 있으면 그걸 준다.
// use는 미들웨어 같은걸 실행해줌
// 이거만 하면 새로고침이 되지 않음! (2)를 작성해야해
app.use(express.static(path.join(__dirname, 'build'))); // 현재 폴더 경로 얻어오는 것, build와 연결

// 그 외 어떤 요청이 와도 index.html을 준다.(2) - 새로고침해도 됨
app.get('*', (req, res) => {
  const string = ReactDOMServer.renderToString(
    React.createElement('div', null, 'Hello World'),
  );
  // 리액트 컴포넌트를 렌더링해서 얻은 문자열 덩어리를, id가 root인 div안에 넣어야 한다.

  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
  const indexPath = path.join(__dirname, 'build', 'index.html');
  const indexString = fs.readFileSync(indexPath).toString();

  const responseData = indexString.replace(
    '<div id="root"></div>',
    `<div id="root">${string}</div>`,
  ); // index.html에 있는 xxx를 대체할 것

  console.log(responseData);

  res.sendFile(responseData);
});

app.listen(9000, () => {
  console.log('server 9000 start...');
});
