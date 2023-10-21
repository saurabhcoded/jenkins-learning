require('dotenv').config();
const app = require('express')();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send('<h2>Webhook Implemented</h2>');
})
app.get("/test", (req, res) => {
    res.send('<h2>I am testing declarative pipeline</h2>');
})
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:"+PORT)
})