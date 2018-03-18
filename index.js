var express = require('express');
var app = express();
var alunos = require('./alunos');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3003, function(req, res) {
    console.log('servidor funcionando');
});


app.get('/aluno', (req, res) => {
    res.send(alunos);
});

app.get('/aluno/:id', (req, res) => {
    const resposta = alunos.filter((aluno) => {
        return aluno.id == req.params.id;
    });
    if(resposta.length < 1) {
        res.statusCode = 204;
        res.send();
        return;
    }
    res.send(resposta[0]);
});

app.delete('/aluno/:id', (req, res) => {
    const id = req.params.id;
    const aluno = alunos.filter((aluno, indice) => {
        if(aluno.id == id) {
            alunos.splice(indice, 1);
        }
        return true;
    });
    if(aluno.length < 1) {
        res.statusCode = 204;
        res.send();
        return;
    }
    res.send('Aluno excluído com sucesso!');
});

app.post('/aluno', (req, res) => {
    const body = req.body;
    let newStudent = {
        id: alunos.length + 1,
        name: body.name,
        course: body.course,
        institution: body.institution
    };
    alunos.push(newStudent);
    res.send('Aluno cadastrado com sucesso!');
})
