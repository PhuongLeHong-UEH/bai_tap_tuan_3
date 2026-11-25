'use strict';
const fs = require('fs');
const path = require('path');
const Database = require('./sqlite');
const { seed } = require('../db/seed');

function openDb(file = process.env.DB_FILE || path.join(__dirname, '..', 'data', 'todo.db')) {
  if (file !== ':memory:') fs.mkdirSync(path.dirname(file), { recursive: true });
  const db = new Database(file);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  db.exec(fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8'));
  // Chỉ nạp dữ liệu mock khi CSDL còn trống
  if (db.prepare('SELECT COUNT(*) c FROM tasks').get().c === 0 &&
      db.prepare('SELECT COUNT(*) c FROM categories').get().c === 0) seed(db);
  return db;
}
module.exports = { openDb };
