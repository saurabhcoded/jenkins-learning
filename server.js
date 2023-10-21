require('dotenv').config();
const app = require('express')();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send('<h2>Api are working fine...</h2>');
})
app.get("/test", (req, res) => {
    res.send('<h2>Test Page</h2>');
})
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:"+PORT)
})