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

app.get('/milton',(req, res)=>{
    res.send('Hola mi nombre es Milton Ramos tengo 22 años, soy de la ciudad de Quito');
});

app.get('/suma',(req, resp)=>{
    let n1=2;
    let n2=2;
    let suma = n1+n2;
    resp.send(suma+'');
});

app.get('/suma/:n1',(req, resp)=>{
    let num1 = parseInt(req.params.n1);
    let num2 = 9;
    let suma = num1 + num2;
    resp.send('el resultado de la suma es: '+suma);
});

app.listen(3001,()=>{
    console.log ('Correcto');
});



