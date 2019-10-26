const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const vegetableRouter = require('./routes/vegetableRouter');

app.get('/', (req, res) => {
    res.json({
        response: 'Working'
    })
})


app.use('/vegetable', vegetableRouter);





const port = 5000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})
