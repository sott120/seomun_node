const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'notice',
    dateStrings: 'date'
}); //보안상 다른 파일로 빼야됨

//리스트 전체 불러오는 함수
function getAllMemos(callback) {
    connection.query('SELECT * FROM notice ORDER BY id DESC', (err, rows, fields) => {
        if (err) throw err;
        callback(rows);
    });
}

//리스트 갯수를 카운트하는 함수
function countAll(callback){
    connection.query('SELECT COUNT(*) FROM notice',(err, result) => {
        let count = Object.values(result[0])[0];
        if (err) throw err;
        callback(count);
    });
}

//리스트에 새로운 내용을 추가하는 함수
function insertMemo(title, name, pw, content, callback) {
    connection.query(`INSERT INTO notice(title, name, pw, date, content) VALUES ('${title}','${name}','${pw}', NOW(), '${content}' )`, (err, result) => {
        if (err) throw err;
        callback();
    });
}

//리스트 중 id값이 일치하는 row만 불러오는 함수
function getMemoById(id, callback) {
    connection.query(`SELECT * FROM notice Where ID = ${id}`, (err, row, fields) => {
        if (err) throw err;
        callback(row);
    });
}

//게시글을 클릭할 때마다 조회수가 올라가는 함수
function countViews(id){
    connection.query(`UPDATE notice SET views = views+ 1 WHERE ID = ${id}`);
}

//리스트를 수정하고 싶을 때 id값이 일치하는 부분을 수정하는 함수
function updateMemoById(id, title, name, pw, content, callback) {
    connection.query(`UPDATE notice set title = '${title}', name = '${name}', pw = '${pw}', content = '${content}' WHERE id = ${id} `, (err, result) => {
        if (err) throw err;
        callback();
    });
}

//리스트 중 id값이 일치하는 부분을 삭제하는 함수
function deleteMemoById(id, callback) {
    connection.query(`DELETE FROM notice Where ID = ${id}`, (err, result) => {
        if (err) throw err;
        callback();
    });
}

module.exports = {
    getAllMemos,
    countAll,
    insertMemo,
    getMemoById,
    countViews,
    updateMemoById,
    deleteMemoById,
};
