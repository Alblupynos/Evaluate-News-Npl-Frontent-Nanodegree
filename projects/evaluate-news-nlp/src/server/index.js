const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';

const app = express()
app.use(express.static('dist'))
app.use(express.json())
app.use(cors({origin: true, credentials: true}));

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/api', async(req, res)=> {
    const url = `${baseUrl}?key=${apiKey}&url=${req.body.url}&lang=en`;
    let response;
    try {
        response = await fetch(url)
    } catch (error) {
        console.log("error", error);
    }
    try {
        const Data = await response.json();
        let agreement = Data.agreement;
        let subjectivity = Data.subjectivity;

        let data = {
            "agreement": agreement,
            "subjectivity": subjectivity
        }
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }

})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
