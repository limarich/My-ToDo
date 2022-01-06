const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const conn = require('./db/conn')
const Task = require('./models/Task')

const tasksRotes = require('./routes/tasksRotes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())
app.use(express.static('public'))

app.use('/tasks', tasksRotes)
conn.sync()
.then(()=> {
    app.listen(3000)
    console.log('rodando')
} )
.catch(err => console.log(err))