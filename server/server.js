const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
}); 