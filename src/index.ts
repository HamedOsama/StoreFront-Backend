import express from 'express';
const port = 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('hello world!');
});
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

export default app;
