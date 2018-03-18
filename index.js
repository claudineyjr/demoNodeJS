var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var alunos = require('./alunos');


app.listen(3000, (req,res) => {
    console.log('server working');
});

app.get('/aluno/:id', (req, res) => {
    let resposta = alunos.filter((aluno) => {
        return aluno.id == req.params.id;
    })
    if(resposta.length < 1) {
        res.statusCode = 204;
        res.send();
    }
    res.send(resposta[0]);
});

app.get('/aluno', (req, res) => {
    res.send(alunos);
});

app.post('/aluno', (req, res) => {
    const body = req.body || {};
    const newStudent = {
        id: alunos.length + 1,
        name: body.name,
        course: body.course,
        institution: body.institution
    };
    alunos.push(newStudent);
    res.send('Aluno inserido com sucesso!');
});

app.delete('/aluno/:id', (req, res) => {
    const id = req.params.id;
    if(id > alunos.length) {
        res.statusCode = 204;
        res.send();
        return;
    }
    alunos.splice(id-1, 1);
    res.send('Aluno removido com sucesso!');
});

