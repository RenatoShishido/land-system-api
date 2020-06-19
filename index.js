const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())



require('./config/db')
require('./controller/terrenoController')(app)
require('./controller/filterController')(app)




app.listen(process.env.PORT || 3000)