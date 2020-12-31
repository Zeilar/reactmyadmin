const { Sequelize } = require('sequelize');

let database;
async function connect(name = '', user = 'root', password = null, driver = 'mysql', host = 'localhost', error = () => {}) {
    database = new Sequelize(name, user, password, {
        host: host,
        dialect: driver,
    });
    try {
        await database.authenticate();
    } catch (err) {
        error(err);
    }
}

async function getTables(error = () => {}) {
    try {
        const response = await database.showAllSchemas() ?? [];
        return response.map(table => table[Object.keys(table)[0]]);
    } catch (err) {
        error(err);
        return [];
    }
}

async function getColumns(table, error = () => {}) {
    try {
        return await database.getQueryInterface().describeTable(table);
    } catch (err) {
        error(err);
        return [];
    }
}

async function getRows(table = '', page = 1, perPage = 25, error = () => {}) {
    page = parseInt(page) || 1;
    try {
        const rows = await database.query(
            `SELECT * FROM ${table} LIMIT ${perPage} OFFSET ${(page - 1) * perPage}`,
            { type: database.QueryTypes.SELECT }
        );
        return rows.map((row, i) => ({ ...row, _id: i }));
    } catch (err) {
        error(err);
        return [];
    }
}

async function getDatabase(error = () => {}) {
    try {
        const tables = await getTables();
        return await Promise.all(
            tables.map(async table => {
                return {
                    columns: await getColumns(table),
                    table: table,
                };
            }
        ));
    } catch (err) {
        error(err);
        return [];
    }
}

module.exports = {
    getDatabase,
    getColumns,
    getTables,
    getRows,
    connect,
};
