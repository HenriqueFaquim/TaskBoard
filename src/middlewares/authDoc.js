async function authDocProducao(req, res, next){
    const { senha } = req.body;

    if(req.headers.host.includes('localhost') || req.originalUrl !== '/doc/'){
        //usuario em localhost
        return next();
    }

    if(senha === process.env.SWAGGER_SENHA_DOC){
        //usuario acertou a senha
        return next();
    }

    if(senha){
        //usuario errou a senha
        res.status(401).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <form method='post'>
            <p style="color:red;"> Senha Errada!</p>
            <label for="senha">Senha da documentação:</label>
            <input type="password" name="senha" id="senha" />
            <button type="submit">Entrar</button>
        </form>
        `))
    }else{
        //usuario ainda n digitou a senha e esta em produção
        res.status(200).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <form method='post'>
            <label for="senha">Senha da documentação:</label>
            <input type="password" name="senha" id="senha" />
            <button type="submit">Entrar</button>
        </form>
        `))
    }

}

module.exports = authDocProducao;