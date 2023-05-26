const db = require('./db')

const cadastros = {
    Cadastro: db.sequelize.define("usuarios", {
        email: {
            type: db.Sequelize.STRING
        },
        nome: {
            type: db.Sequelize.STRING
        },
        password: {
            type: db.Sequelize.STRING
        }
    }, {
        tableName: 'usuarios'
    }),

    CadastroAnimal: db.sequelize.define("animais", {
        idade: {
            type: db.Sequelize.INTEGER
        },
        nome: {
            type: db.Sequelize.STRING
        },
        raca: {
            type: db.Sequelize.STRING
        }
    }, {
        tableName: 'animais'
    }),

    CadastroNatan: db.sequelize.define("natan", {
        apelido: {
            type: db.Sequelize.STRING,
            acceptNull: false,
            primarykey: true
        },
        blusa: {
            type: db.Sequelize.STRING,
            acceptNull: false,
        },
        maternidade: {
            type: db.Sequelize.STRING,
            acceptNull: false,
        }
    }, {
        tableName: 'natan'
    })
}

// cadastros.Cadastro.sync({force: true})
// cadastros.CadastroAnimal.sync({force: true})
// cadastros.CadastroNatan.sync({force: true})


// module.exports = { Cadastro: Cadastro, CadastroAnimal: CadastroAnimal }
module.exports = cadastros