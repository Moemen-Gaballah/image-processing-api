import express from 'express';

const PORT = 3000;
const app = express();

app.get('/ok', (req, res) => {
    res.send('ok').status(200);
});

app.get('/images', (req, res) => {
   res.send('bla bla');
});

app.listen(PORT, () => {
   console.log(`server running on port: ${PORT}`);
});
