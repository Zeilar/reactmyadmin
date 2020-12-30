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
    try {
        const response = await database.showAllSchemas() ?? [];
        return response.map(table => table[Object.keys(table)[0]]);
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getColumns(table) {
    try {
        return await database.getQueryInterface().describeTable(table);
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getRows(table) {
    try {
        return await database.query(`SELECT * FROM ${table}`, { type: database.QueryTypes.SELECT });
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getDatabase() {
    try {
        const tables = await getTables();
        return await Promise.all(
            tables.map(async table => {
                const columns = await getColumns(table);
                return {
                    columns: columns,
                    table: table,
                };
            }
        ));
    } catch (error) {
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
