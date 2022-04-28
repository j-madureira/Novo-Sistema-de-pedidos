//Funções
function bemVindo(){
    return alert("Seja bem vindo ao sistema de pedidos Joca ^^");
}

function nomeOff(){
    return alert("Você ainda não digitou seu nome");
}

function nomeUsuario(){
    return alert("Você ainda não criou seu nome de usuário");
}

function senhaUsuario(){
    return alert("Você ainda não criou sua senha!");
}

function erroNome(){
    return alert("Nome de usuário incorreto ou não informado!");
}

function erroSenha(){
    return alert(`Senha incorreta ou não informada!`);
}

//Início

bemVindo();

var nome;
if(nome = prompt(`Informe seu nome:`)){
    alert(`${nome}, faça cadastro para continuar!`);
}

while(nome == ""){
    nomeOff();
    if(nome = prompt(`Informe seu nome para continuar:`)){
    break;
    }
}

//Cadastro

var nomeDeUsuario = prompt(`Crie seu nome de de usuário:`);
while(nomeDeUsuario == ""){
    nomeUsuario();
    if(nomeDeUsuario = prompt(`Crie seu nome de usuário para continuar:`)){
    break;
    }
}

var senhaDeUsuario = prompt(`Crie sua senha:`);
while(senhaDeUsuario == ""){
    senhaUsuario();
    if(senhaDeUsuario = prompt(`Crie sua senha para continuar:`)){
    break;
    }
}

//Login
alert(`Você já pode fazer Login`)
var nomeUsuarioLogin = prompt(`Nome de usuário:`);
if(nomeUsuarioLogin == nomeDeUsuario){
}
else{
    while(nomeUsuarioLogin != nomeDeUsuario){
    erroNome();
    nomeUsuarioLogin = prompt(`Informe seu nome de usuário:`);
    if(nomeUsuarioLogin == nomeDeUsuario){
    break;
    }
    }
}

var senhaLogin = prompt(`Senha:`);
if(senhaLogin == senhaDeUsuario){
   alert(`Seja bem vindo ${nome}!`);
   console.log(`O cliente ${nome} está conectado.`);
}

else{
    while(senhaLogin != senhaDeUsuario){
    erroSenha();
    senhaLogin = prompt(`Digite sua senha para continuar:`);
    if(senhaLogin == senhaDeUsuario){
    alert(`Seja bem vindo ${nome}!`);
    console.log(`O cliente ${nome}, está conectado.`);
    }
    }
}

//Cardápios e Pedidos

alert(`Cardápio - Lanches:\n
       Lanche: Big Bacon\n
       Lanche: Alfa Lanche\n
       Lanche: Salf Big Bacon`);

var lanches = ["Big Bacon","Alfa Lanche","Salf Big Bacon"];
var pedidoLanche = prompt(`Peça seu lanche:`);

var index_lanche = lanches.indexOf(pedidoLanche);
if(index_lanche != -1){
}

else{
    while(index_lanche == -1){
    alert(`Não temos esse lanche aqui.`);
    pedidoLanche = prompt(`Peça algum lache do cardápio:`);
    index_lanche = lanches.indexOf(pedidoLanche);
    if(index_lanche != -1){
    break;
    }
    }
}

alert(`Cardápio - Bebidas\n
       Bebida: Coca\n
       Bebida: Kuat\n
       Bebida: Morango Refri`);

var bebidas = ["Coca","Kuat","Morango Refri"];
var pedidoBebida = prompt(`Peça sua bebida:`);

var index_bebida = bebidas.indexOf(pedidoBebida);
if(index_bebida != -1){
}

else{
    while(index_bebida == -1){
    alert(`Não temos essa bebida aqui!`);
    pedidoBebida = prompt(`Peça alguma bebida do cardápio:`);
    index_bebida = bebidas.indexOf(pedidoBebida);
    if(index_bebida != -1){
    break;
    }
    }
}
alert(`Cardápio - Sobremesas\n
       Sobremesa: Chocolate\n
       Sobremesa: Sorvete Menta\n
       Sobremesa: Sorvete Flocos`)
var sobremesas = ["Chocolate","Sorvete Menta","Sorvete Flocos"];
var pedidoSobremesa = prompt(`Peça sua sobremesa:`);

var index_sobremesa = sobremesas.indexOf(pedidoBebida);
if(index_sobremesa != -1){
}

else{
    while(index_sobremesa == -1){
        alert(`Não temos essa sobremesa aqui!`);
        pedidoSobremesa = prompt(`Peça alguma sobremesa do cardápio:`);
        index_sobremesa = sobremesas.indexOf(pedidoSobremesa);
        if(index_sobremesa != -1){
        break;
        }
    }
}

alert(`${nome} seu pedido foi feito, agora precisamos saber onde entregar\n
Informe pra gente :)`);

var cidade = prompt(`Cidade:`);
while(cidade == ""){
    alert(`Você ainda não informou a cidade para a entrega!`);
    if(cidade = prompt(`Informe sua cidade:`)){
    break;
    }
}

var bairro = prompt(`Bairro:`);
while(bairro == ""){
    alert(`Você ainda não informou seu bairro!`);
    if(bairro = prompt(`Informe seu bairro:`)){
    break;
    }
}

var ruaCliente = prompt(`Rua:`);
while(ruaCliente == ""){
    alert(`Você ainda não informou sua rua!`);
    if(ruaCliente = prompt(`Informe sua rua:`)){
    break;
    }
}

var numeroCasa = prompt(`Número da casa:`);
while(numeroCasa == ""){
    alert(`Você ainda não informou o número da sua casa!`);
    if(numeroCasa = prompt(`Informe o número da casa:`)){
    break;
    }
}

//Onde entregar

alert(`O pedido está a caminho ${nome}!`);
console.log(`O cliente ${nome} fez um pedido!\n
             Um Lanche: ${pedidoLanche}\n
             Um Refrigerante: ${pedidoBebida}\n
             Uma sobremesa: ${pedidoSobremesa}\n
             Entregar em!\n
             Cidade: ${cidade}\n
             Bairro: ${bairro}\n
             Rua: ${ruaCliente}\n
             Número: ${numeroCasa}`);
