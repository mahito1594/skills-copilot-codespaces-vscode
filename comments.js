// Create web server
// 1. Create a web server
// 2. Create a new route for GET /comments
// 3. Create a new route for POST /comments
// 4. Create a new route for DELETE /comments
// 5. Create a new route for PUT /comments

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;
// 2. Create a new route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});
// 3. Create a new route for POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});
// 4. Create a new route for DELETE /comments
app.delete('/comments', (req, res) => {
    res.send('DELETE /comments');
});
// 5. Create a new route for PUT /comments
app.put('/comments', (req, res) => {
    res.send('PUT /comments');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});