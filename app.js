import express from 'express';
import db from './db';
// Set up the express app
const app = express();
// get all todos
app.get('/api/games/:title/:publisher', (req, res) => {    
    if (!req.query.username || !req.query.password) return res.status(404).send({"status":400, "message": "username or password is missing"});
    else res.send([req.params, req.query]);
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});