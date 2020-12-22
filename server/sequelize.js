const { Sequelize } = require('sequelize');

let database;
async function connect(name = '', user = 'root', password = null, driver = 'mysql', host = 'localhost') {
    database = new Sequelize(name, user, password, {
        host: host,
        dialect: driver,
    });
    try {
        await database.authenticate();
        console.log(`Connection to database ${name} has been established successfully.`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function getTables() {
    const response = await database.showAllSchemas() ?? [];
    return response.map(table => table.Tables_in_tph);
}

async function getColumns(table) {
    return await database.getQueryInterface().describeTable(table);
}

async function getRows(table) {
    return await database.query(`SELECT * FROM ${table}`, { type: database.QueryTypes.SELECT });
}

async function getDatabase() {
    const tables = await getTables();
    return await Promise.all(
        tables.map(async table => {
        const columns = await getColumns(table);
        const rows = await getRows(table);
        return {
            columns: columns,
            table: table,
            rows: rows,
        };
    }));
}

module.exports = {
    getDatabase,
    connect,
};
