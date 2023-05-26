const Sequelize = require('sequelize')

const sequelize = new Sequelize('testebanco', 'root', 'FA6JSGsm859300!?*', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!")
}).catch((erro) => {
    console.log("Falha ao se conectar "+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}