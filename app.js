var express = require('express');
var cors = require('cors')
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var app = express();

// parse application/json
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/satyam', { useNewUrlParser: true, useUnifiedTopology: true });


// actual work starts here
const StudentModel = require("./models/student") // model import
const HouseModel = require("./models/house") // model import


app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/student', async function (req, res) {
    console.log(req.body) // only to print

    const student = new StudentModel(req.body)
    const doc = await student.save()
    return res.status(200).send(doc)
})

app.get('/students', async function (req, res) {
    const docs = await StudentModel.find()
    return res.status(200).send(docs)
})

app.get('/student/:id', async function (req, res){
    const id = req.params.id
    const doc = await StudentModel.findById(mongoose.Types.ObjectId(id))
    return res.status(200).send(doc)
})



app.post('/house', async function (req, res) {
    console.log(req.body) // only to print

    const house = new HouseModel(req.body)
    const doc = await house.save()
    return res.status(200).send(doc)
})

app.get('/houses', async function (req, res) {
    const docs = await HouseModel.find()
    return res.status(200).send(docs)
})

app.get('/house/:id', async function (req, res){
    const id = req.params.id
    const doc = await HouseModel.findById(mongoose.Types.ObjectId(id))
    return res.status(200).send(doc)
})



// ends here

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://localhost:8081")
})
