const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())



require('./config/db')
require('./controller/terrenoController')(app)
require('./controller/filterController')(app)








app.listen(3000, () => console.log("Servidor rodando na porta 3000"))