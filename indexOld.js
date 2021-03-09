const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); 
const favicon = require('serve-favicon');
const db = require('./midlewares/db')
const cors = require('cors');

app.use(cors())
app.use(express.json);
// importing routes
const appRoutes = require('./routes/rutes');
// settings
app.set('port', process.env.PORT || 3001);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// middlewares
// app.use(morgan('dev'));

app.use(db);

// componentes de lecturas
// sube fotos  https://www.npmjs.com/package/vue-upload-multiple-image
// carrousel https://silentbox.silencesys.com/
// otro carrucel con zoom https://www.yoohooworld.com/#/
// otro mas https://www.yoohooworld.com/#/ con Zoom


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', appRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// starting the server
app.listen(app.get('port'), () =>{
  console.log('Server on port', app.get('port'));
});
