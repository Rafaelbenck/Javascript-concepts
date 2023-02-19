// Nullish Coalescing Operator

// const idade = 23;

//para o Js o valor 0, '', [], false, undefined, null => são chamados de falsy ou seja são valores nao validos quando o operador é 'OU' ( || )
//Porém alguns valores como 0 é um numero primitivo nesse caso usaremos o Nullish que é mais restritivo com a sintaxe de ( ?? ), nesse caso null e undefined são valores nullos

//document.body.innerText = "Minha idade é: " + (idade ?? "não informado");

//Objetos
//objetos no js é basicamente uma estrutura de dados aonde podemos armazenar conjuntos de chave e valor como:

// const user = {
//   name: "Rafael",
//   idade: "23",
//   address: {
//     street: "Ramiro barcelos",
//     numer: 1561,
//   },
// };

//metodos de manipulação de objetos:

//---------- IN verifica se existe uma informação dentro do objeto como:
//document.body.innerText = "nome" in user; //retorno booleano

//Object key retorna um vetor com todas as chaves do nosso objeto:
//document.body.innerText = Object.keys(user); //retorno de nome idade e endereço

//Object values retorna os valores dos objetos
//document.body.innerText = Object.values(user); // retona o valor de nome e objeto mas não consegue printar o objeto endereço dentro do nosso objeto
//para poder ter uma melhor opção de print de valores de objeto e ate mesmo de valores de objeto dentro do objeto melhor usar um Json
//document.body.innerText = JSON.stringify(Object.values(user)); //retorna todos os valores das chaves como json

//Object entries retorna um vetor com varios vetores dentro e cada um deles um subvetor tem duas informações uma delas sendo a chave e a segunda sendo o valor
//document.body.innerText = JSON.stringify(Object.entries(user));

//Desestruturar o objeto para buscar informações especificas como:

//const address = user.addres; //retorna o objeto com seus valores
//podendo usar essa sintaxe como:
//const { address, idade: age, nickname = "benck" } = user; // em age setamos um nome para a variavel idade do objeto e em nickname setamos um novo valor dentro do objeto porem se ele já existe no objeto
//ele seguira o valor dentro do objeto
//document.body.innerText = JSON.stringify({ address, age, nickname });

//A desestruturação pode ser usada dentro de funções
// function mostrarIdade({ idade }) {
//   return idade;
// }

//--------- Rest Operator serve para que você possa pegar o dado do objeto que quer e com a pegue o resto dos dados para uma unica variavel é só usar o ...rest

// const { name, ...rest } = user;
//ou seja se eu dar um log no rest ele me retornara toda a propriedade do objeto menos o nome que foi desestruturado

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //definindo um array

//const [first, second, ...rest] = array; // indice 0 e 1 da array sera armazenado na variavel first e second, rest cuidara dos resto dos dados

//Short Syntax em objetos
// const name = "Rafael";
// const age = 23;

// const user = {
//   name,
//   age,
// };

//-------------Optional Chaining

// const user = {
//   name: "rafael",
//   age: 23,
//   address: {
//     street: "ramiro barcelos",
//     number: 1561,
//     zip: {
//       code: "94945220",
//       city: "Rs",
//     },
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };

//tratar erros com optional chaining pode ser susinto para fazer isso basta concatenar aonde pode não existir o dado por exeplo
//document.body.innerText = user?.address?.zip.code ?? "Não informado";
//veja que o (?.) segue aonde pode não existir o dado no objeto

//document.body.innerText = user.address?.showFullAddress?.() ?? "Não informado";

// const key = "street";
// document.body.innerText = user.address?.[key] ?? "não informado";

//-----------Métodos de array

// const array = [1, 2, 3, 4, 5];

//métodos para percorer array

// for (const i of array) {
//   document.body.innerText += i;
// }

// array.forEach((item) => {
//   document.body.innerText += item;
// });

//map pode nos trazer um retorno de dentro do array, podendo definir valores para dentro de um novo array ex valores da array x2
// const novoArray = array.map((item) => {
//   return item * 2;
// });

//map sempre vai retornar um novo vetor(array) com o tamanho do original aonde está sendo mapeado
//pode ser feitos condicionais dentro do array map

// const novoArray = array.map((item) => {
//   if (item % 2 === 0) {
//     return item * 10;
//   }
//   return item;
// });

//metodos mais importantes para manuseio de array são: map, filter, every, some, find, findIndex, reduce

//filter filtra um array, busca uma seleção de campos de um array, ele não pode alterar apenas cortar, filtra
//   const novoArray = array
//juntando os metodos filter e mapeando
//   .filter((item) => item % 2 !== 0)
//   .map((item) => item * 10);

//every vai retornar um booleano se todos os itens satisfazem a uma condição condição
// const todosItensSaoNumeros = array.every((item) => typeof item === "number ");
//document.body.innerText = JSON.stringify( todosItensSaoNumeros);

//some vai verificar se apenas um item vai satisfazer aquela condição e retorna um booleano (true ou false)
// const peloMenosUmItemNaoEUmNumero = array.some((item) => {
//   return typeof item !== "number";
// });
// document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero);

//find serve para encontrar 1 item do array
// const par = array.find((item) => item % 2 === 0);
//ele vai encontrar o primeiro item que satisfaz a condição
//caso não tenha a condição ele vai retornar undefined (valor indefinido)

//findIndex tem o mesmo contexto que o find porém ao invés de retornar o valor do item que encontrou ele retorna o indice do valor no array
// const par = array.findIndex((item) => item % 2 === 0);
// document.body.innerText = JSON.stringify(par);

//Reduce é muito usado quando eu quero pegar um array e criar uma nova estrutura de dados dentro de um novo array ou seja reduzir o meu array a algo
//Reduce recebe dois parametros o segundo valor é qual o valor inicial dessa nova estrutura de dados que eu quero criar a partir do array
//a primeira função sempre recebe dois parametros, normalmente o objeto que esta criando (costuma-se a chamar accumulator ) e cada informação do array
// const soma = array.reduce((acc, item) => {
//mostrando a iteração do reduce com o array
//document.body.innerText += acc + "," + item + "-----";

// return acc + item;
// }, 0);
//retornarei o novo objeto com a somatoria que criei no reduce
// document.body.innerText = JSON.stringify(soma);

//----Template literals
//quando precisamos incluir uma variavel dentro de outra

// const name = "Rafael";
//pode-se fazer com a acentução de crase e interpolação com dolar sign
// const message = `Bem vindo, ${name ? name : "visitante"}  `;
//posso manipular como se acaso não existir com um valor padrão ?? ou passar condicionais dentro de
// document.body.innerText = message;

//-------Promises
//retorna uma promessa de uma função assincronoma
// são metodos que podemos ouvir resultados atraves de pontos .then/ .cath

// const somaDoisNumero = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// somaDoisNumero(1, 3)
//then deu tudo certo é o retorno positivo da função esperada
// .then((soma) => {
//   document.body.innerText = soma;
// })
// catch é o metodo que é chamado quando eu tenho algum reject(erro)
//retorna o arquivo que ocorreu o erro
// .cath((err) => {
//   console.log(err);
// });

// exemplo 2 preciso buscar um requisição em outro servidor e pra isso vou usar o fetch
//usarei a requisição pra buscar informações da api do github
// fetch("https://api.github.com/users/rafaelbenck")
// .then((res) => {
//   res.json().then((body) => {
//     console.log(body);
//   });
// })
//para promises alinhadas é melhor usar esse tipo de sintaxe
// .then((res) => {
//   return res.json();
// })
// .then((body) => {
//   return body.body();
// })
// posso converter essa resposta em um melhor formato para conseguir ler de uma melhor forma
// .catch((err) => {
//   console.log(err);
// })

//outro metodo de uma promisse é o finally é algo que vai ser executado idependente se der certo ou errado porem vai sempre ser executado no final da promises
// .finally(() => {
//   console.log("deu");
// });

//pode ser trabalhada da seguinte maneira como função também
// com uma sintaxe de async await será assincrona tera um codigo que dera pra executar
// async function buscaDadosNoGithub() {
//   try {
//     const res = await fetch("https://api.github.com/users/rafaelbenck");
//     const body = await res.json();

//     console.log(body);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("deu");
//   }

// fetch("https://api.github.com/users/rafaelbenck")
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     return body.body();
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("deu");
//   });
// }
//por padrão toda função que eu uso async ela vira automaticamente uma promise
// buscaDadosNoGithub();
