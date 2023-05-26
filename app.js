const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cadastros = require('./models/cadastro')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/animal', (req, res) => {
    res.render('animal')
})

app.get('/natan', (req, res) => {
    res.render('natan')
})

app.post('/cadastro', (req, res) => {
    if (req.body.senha1 != req.body.senha2) {
        res.send('Senha incorreta')
    } else {
        cadastros.Cadastro.create({
            email: req.body.email,
            nome: req.body.nome,
            password: req.body.senha1
        }).then(() => {
            res.send("Cadastro concluído")
        }).catch((err) => {
            console.log('Erro ao cadastrar' + err)
        })
    }
})

app.post('/animal', (req, res) => {
    cadastros.CadastroAnimal.create({
            idade: req.body.idade,
            nome: req.body.nomeAnimal,
            raca: req.body.raca
        }).then(() => {
            res.send("Cadastro concluído")
        }).catch((err) => {
            console.log('Erro ao cadastrar' + err)
        })
})

app.post('/natan', (req, res) => {
    cadastros.CadastroNatan.create({
            apelido: req.body.apelido,
            blusa: req.body.blusa,
            maternidade: req.body.maternidade
        }).then(() => {
            res.send("Cadastro concluído")
        }).catch((err) => {
            console.log('Erro ao cadastrar' + err)
        })
})


const PORT = 3000
app.listen(PORT, (req, res) => {
    console.log('Server running')
})

