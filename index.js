const express = require('express')
const app = express()
const port =  process.env.PORT || 3000
const arithmatic = require('./api/arithmatic/arithmatic')
const arrayUtils = require('./api/array_utils/array_utils')


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/arithmatic',arithmatic)
app.use('/arrayUtils',arrayUtils)

app.listen(port, () => console.log(`App listening on port ${port}!`))