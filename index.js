const express = require ('express');
const app = express();
app.use(express.json());

var lista = [{
    id:'1', 
    nombre:'Milton'

},{
    id:'2',
    nombre:'David'
}];
//uso de app web service de tipo web

app.get('/nombre',(req,res)=>{
    res.json(lista);
});

app.listen(3001,()=>{
    console.log ('Correcto');
});

