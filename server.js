const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

app.post('/json', function(req, res) {
	res.json(req.body);
});

app.listen(3000);