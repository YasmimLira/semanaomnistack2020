const express = require('express'); //contém as funcionalidades do express
const cors = require('cors')
const routes = require('./routes');

const app = express(); //variável para gurdar a aplicação

app.use(cors());
app.use(express.json());//antes de todas as requisições o express irá no corpo da requisição e converter o que está escrito lá em algo entendível para aplicação  
app.use(routes);

app.listen(3333);