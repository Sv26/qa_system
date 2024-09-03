const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'qa_system'

});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting:', err);
        return;

    }
    console.log('conntect to database')
});
module.exports = connection;