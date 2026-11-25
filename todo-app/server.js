'use strict';
const { openDb } = require('./src/db');
const { createApp } = require('./src/app');
const port = process.env.PORT || 3000;
createApp(openDb()).listen(port, () => console.log(`Todo App đang chạy: http://localhost:${port}`));
