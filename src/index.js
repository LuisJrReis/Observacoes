const express = require('express');
const app = express();
app.use(express.json());
const observacoes = {};
count = 0;

//#region *** Busca todos observacoes *** 
//:id é um placeholder
// Exemplo: /lembretes/123456/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoes);
});
//#endregion

//#region *** Cadastra e atualiza observacoes *** 
app.put('/lembretes/:id/observacoes', (req, res) => {
    count++;
    const { texto } = req.body;
    observacoes[count] = {count,texto};
    res.status(201).send(observacoes[count]);
});
//#endregion

//#region *** Coloca porta para rodar o servidor *** 
app.listen(5000, () => {
    console.log('observacoes. Porta 5000')
})
//#endregion    