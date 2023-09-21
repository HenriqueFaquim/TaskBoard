const mongooseToSwagger = require('mongoose-to-swagger');
const swaggerAutogen = require('Swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR',
});

const outputFile = './swagger_output.json';
const endpointsFiles = ['../index.js'];

let doc ={
    info:{
        version: '1.0.0',
        title: 'API do taskboard',
        description: 'documentação da API'
    },
    servers: [
        {
            url: 'http://localhost:4000/',
            description: 'servidor local'
        },
        {
            url: 'vercel.com',
            description: 'servidor vercel'
        }
    ],
    consumes:['application/json'],
    produces:['application/json'],
    components: {
        schemas: {
         /*   Usuario: mongooseToSwagger(EsquemaUsuario),
            Tarefa: mongooseToSwagger(EsquemaTarefa),*/
        }
    }
}

swaggerAutogen(outputFile,endpointsFiles, doc).then(()=> {
    console.log('Documentação do swagger gerada encontra-se no arquivo em: ' + outputFile);
    if(process.env.NODE_ENV !== 'production'){
        require('../index.js');
    }
})