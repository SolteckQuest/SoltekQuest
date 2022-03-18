const mysql = require('mysql')
//require('dotenv').config({ path:'./src/mysql_conector' })

//Crear conexion

const conection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
})

conection.connect(err => {
  if(err) throw err
  console.log('Conectado')
})


module.exports = conection