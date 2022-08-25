import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// mysql connection
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'employeesystem',
});

app.post('/create', (req, res) => {
    const { name, age, country, position, wage } = req.body;

    db.query(
        'INSERT INTO employees (name, age, country, position, wage) VALUES(?, ?, ?, ?, ?)', 
        [name, age, country, position, wage],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
})

// app.get('/', (req, res) => {
//     res.json({ status: 'Server is running!' });
// })

app.listen(port, () => {
    console.log('Your server is running on port ' + port + '...');
});