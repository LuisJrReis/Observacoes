const express = require('express');
const app = express();
app.use(express.json());
const { v4: uuidv4 } = require('uuid');
const observacoesPorLembreteId = {};

//#region *** Busca todos observacoes *** 
//:id é um placeholder
// Exemplo: /lembretes/123456/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});
//#endregion

//#region *** Cadastra e atualiza observacoes *** 
app.put('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4();
    const { texto } = req.body;
    //req.params dá acesso à lista de parâmetros da URL
    const observacoesDoLembrete =
    observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({ id: idObs, texto });
    observacoesPorLembreteId[req.params.id] =
    observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
});
//#endregion

//#region *** Coloca porta para rodar o servidor *** 
app.listen(5000, () => {
    console.log('observacoes. Porta 5000')
})
//#endregion    