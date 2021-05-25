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
const LoanModel = require("./models/loan") // model import



app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/loan', async function (req, res) {
    console.log(req.body) // only to print

    const loan = new LoanModel(req.body)
    const doc = await loan.save()
    return res.status(200).send(doc)
})

app.put("/loan/:account_no", async function (req, res) {
    const account_no = req.params.account_no
    const updateObject = req.body
    const n = await LoanModel.updateOne({
        account_no: account_no
    }, updateObject)
    console.log("n=>", n)
    return res.status(200).send()
})

app.get('/loans', async function (req, res) {
    const docs = await LoanModel.find()
    return res.status(200).send(docs)
})

app.get('/loan/:id', async function (req, res) {
    const id = req.params.id
    const doc = await LoanModel.findById(mongoose.Types.ObjectId(id))
    return res.status(200).send(doc)
})




// ends here

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://localhost:8081")
})
