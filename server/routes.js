const { connect, getRows, getDatabase, getColumns } = require('./sequelize');
const express = require('express');
const path = require('path');
const app = express();

app.get('/databases/:name/:table/columns', async (req, res) => {
    try {
        await connect(req.params.name);
        const data = await getColumns(req.params.table);
        res.status(200).send(data);
    } catch (e) {
        res.sendStatus(500);
    }
});

app.get('/databases/:name/:table/:page?', async (req, res) => {
    try {
        await connect(req.params.name);
        const data = await getRows(req.params.table, req.params.page);
        res.status(200).send(data);
    } catch (e) {
        res.sendStatus(500);
    }
});

app.get('/databases/:name', async (req, res) => {
    try {
        await connect(req.params.name);
        const data = await getDatabase();
        res.status(200).send(data);
    } catch (e) {
        res.sendStatus(500);
    }
});

app.use(express.static('build'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

console.log('Node running on 3000');
app.listen(3000);
