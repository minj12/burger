var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConncection({
        host: "localhost",
        port:3306,
        user: "root",
        password: "min95595",
        database: "burgers_db"
    })
}