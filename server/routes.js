const { connect, getRows, getDatabase, getColumns } = require('./sequelize');
const express = require('express');
const path = require('path');
const app = express();

app.get('/databases/:name/:table/columns', async (req, res) => {
    await connect(req.params.name);
    const { data, error } = await getColumns(req.params.table);
    res.status(error ? 500 : 200).send(data);
});

app.get('/databases/:name/:table/:page?', async (req, res) => {
    await connect(req.params.name);
    const { data, error } = await getRows(req.params.table);
    res.status(error ? 500 : 200).send(data);
});

app.get('/databases/:name', async (req, res) => {
    connect(req.params.name);
    const { data, error } = await getDatabase();
    res.status(error ? 500 : 200).send(data);
});

app.use(express.static('build'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

console.log('Node running on 3000');
app.listen(3000);
