const sql = require('mysql');

const con=sql.createConnection({
    host:   'localhost',
    user:   'root',
    password:'password',
    database:'meditations'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('database connected!');
});

module.exports=con;