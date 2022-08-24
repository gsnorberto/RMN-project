const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({ status: 'Server is running!' });
})

app.listen(port, () => {
    console.log('Your server is running on port ' + port + '...');
});