/**
 * 빌드 하고 배포하는 방법
 * 1. 현재 경로에서 npm i
 * 2. 현재 경로에서 npm run build
 * 3. node react_serve.js로 실행 또는 npm i -g pm2 하고 pm2 start react_serve.js
 */

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const port = 80

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('*', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
});

http.listen(port, () => {
    console.log("Listening on 8080");
});