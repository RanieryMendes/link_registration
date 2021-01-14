const express = require('express')
const mongoose = require('mongoose')
const { title } = require('process')
const PORT = process.env.PORT || 3000;
const Link = require('./models/Link')
const router = require('./routes/routeLink')
const favicon = require('serve-favicon')

const path = require('path')

const app = express()

app.use('/', router)


app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'ejs')




app.listen(PORT, ()=>{
    console.log('Sever is running. Port ', PORT)
})


//connectiog to mongo database

//the way  I like to write the connection
/*
mongoose.connect('mongodb://localhost/links', { useNewUrlParser: true , useUnifiedTopology: true})
.then(db=>{
    console.log(db)
}).catch(err=>{

    console.log(err)

})
 
*/

//
//first you create a schema then a model based on that schema



mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection


db.on('error', (err)=>{ console.log(err)})

db.once('open', ()=>{
    console.log('Connected to Mongo')

})





/*
let link = new Link (
    {title : "RanyHunter Plays",

    url: 'https://youtube.com/user/ranyhuntr',
    
    description: 'The best channel in the world'
}
) */

/*
//creating and adding a new document to the 
let link = new Link (
    {title : "Gordinho Gostoso",

    url: 'https://youtube.com/user/gg',
    
    description: 'The best funk channel in the world'
}
)

link.save().then(res=>{
    console.log(res)
})
*/

