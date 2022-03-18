//Invocacion de dependencias
const express = require('express')
require('dotenv').config({ path:'./env/.env' })
const bcryptjs = require('bcryptjs')
const session = require('express-session')
const conection = require('./src/mysql_conector')

//Inicializacion del servidor con express
const app = express();

// Para capturar datos de los formularios
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

//Configuracion de direcciones a los archivos de front
app.use(express.static('/views'))
app.use(express.static(__dirname + '/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

//Configuracion de express-session
app.use(session ({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

//Ruta de inicio hacia el index


// Registro
app.post('/', async (req, res) => {
  const userName = req.body.userName;
  const userApps = req.body.userApps;
  const userEmail = req.body.userEmail;
  const user = req.body.user;
  const userPass = req.body.userPass;
  const userPassConf = req.body.userPassConf;
  let passwordHash = await bcryptjs.hash(userPass, 8);
  
  conection.query('SELECT * FROM usuarios WHERE correoUsuario = ?', [userEmail], async (error, results) => {
    if (results.length == 0) {
      conection.query('INSERT INTO usuarios SET ?', {
      NombreUsuario:userName,
      ApellidosUsuario:userApps,
      CorreoUsuario:userEmail,
      AliasUsuario:user,
      PasswordUsuario: passwordHash
    }, async(error, results) => {
      if (error){
        console.log(error)
      }
      else{
        res.send('Usuario registrado correctamente.')
      }
    })
    }
    else {
      res.send('El correo que intenta registrar ya existe. Intente con uno nuevo.')
    }
  })
})

//Autentificacion
app.post('/login', async (req, res) => {
  const emailLg = req.body.emailLg;
  const passLg = req.body.passLg;
  let passLgHash = await bcryptjs.hash(passLg, 8);
  
  if (emailLg && passLg) {
    conection.query('SELECT * FROM usuarios WHERE CorreoUsuario = ?', [emailLg], async (error, results) => {
      if (results.length == 0 || !(await bcryptjs.compare(passLg, results[0].PasswordUsuario))) {
        res.send('Usuario y/o constraseña incorrecta.')
      }
      else {
        //res.send('Login correcto.')
        req.session.loggedin = true
        req.session.name = results[0].AliasUsuario
        res.render('sesion')
      }
    })
  }
})

// autenticacion en otras paginas
app.get('/', (req, res) => {
  if(req.session.loggedin){
    res.render('index', {
      login:true,
      name: req.session.name
    })
  }
  else{
    res.render('index', {
      login: false,
      name:'Debe iniciar sesion.'
    })
  }
})

//Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

app.get('/', (req, res) => { 
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

//Habilitando el puerto del servidor
app.listen('8000', () => { //Cambiar al puerto 8080 para correr en el servidor.
  console.log('App iniciada en el puerto 8000')
})

