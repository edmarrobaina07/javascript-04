const myArray = [1, 2, 3] // push: Adiciona um item no array. O item adicionado sempre será colocado na última posição do array.

myArray.push(4)

console.log(myArray)


// length: Mostra o tamanho do array. A quantidade de itens dentro do array.

let array = [1, 2, 4]
console.log(array.length)
// 3

let array2 = ["abacate", "salada-mista", "mamão", 33, 44]
console.log(array2.length)
// 5


// sort: Organiza o array

let arrayS = ["mamão", "abacate", "laranja"]
arrayS.sort()
// ["abacate", "laranja", "mamão"]

// delete: Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined.

let arrayD = ["mamão", "abacate", "laranja"]
delete arrayD[1]
// ["abacate", undefined, "mamão"]

console.log(arrayD.length)
// 3


// every:  Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every( (value) => value < 200 ));
//true

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

console.log(users.every((user) => user.credit < 1000))
//true

console.log(users.every(user => user.credit < 500))
//false


// some: faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.

/*const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every( (value) => value < 20 ));
//true

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

console.log(usersList.every((user) => user.credit < 100))
//false

console.log(usersList.every(user => user.credit < 500))
//true*/


// fill: Preenche posições do array como desejarmos

/*
	fill(1, 2, 3) 
	1) O que vai ser colocado no array
	2) A posição inicial 
	3) Posição final
*/


// Preenche com 0 da posição 2 do array até a posição 4
console.log(array1.fill(0, 2, 4));
// [1, 2, 0, 0]

// Preenche com 5 a partir da posição 1 
console.log(array1.fill(5, 1));
// [1, 5, 5, 5]

console.log(array1.fill(6));
// [6, 6, 6, 6]

// find: Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.

/*const users = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findUser = users.find((user) => user.name === 'Maria');
// 	{name: 'Maria', credit: 900}

const findUser = users.find((user) => user.credit === 300);
// 	{name: 'Carlos', credit: 300}*/


// findIndex: Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.

/*const users = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findUser = users.findIndex((user) => user.name === 'Maria');
// 1

const findUser = users.findIndex((user) => user.credit === 300);
// 2*/


/*

concat - Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// ['a', 'b', 'c', 'd', 'e', 'f']

​
includes - Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// true

console.log(pets.includes('at'));
// false
​
join - O método join() junta todos os elementos de um array.
//join(separator)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// "Fire,Air,Water"

console.log(elements.join(''));
// "FireAirWater"

console.log(elements.join(' '));
// "Fire Air Water"

console.log(elements.join('-'));
// "Fire-Air-Water"
​
slice - O método slice() retorna um novo array, apenas com as informações escolhidas
/* 1) Posição do array da qual vamos começar a pegar as informações 
		  para criar o novo array
	 2) Posição final do array que vamos pegar os dados
*/

/*
const users = ["João", "Maria", "Pedro", "Michele", "Fernando"];

console.log(users.slice(2));
// ["Pedro", "Michele", "Fernando"];

console.log(users.slice(2, 4));
// [ "Pedro", "Michele" ];

console.log(users.slice(1, 6));
// ["Maria", "Pedro", "Michele", "Fernando"];


console.log(users.slice());
// ["João", "Maria", "Pedro", "Michele", "Fernando"];
​
splice - Esse metódo remove ou adiciona elementos em um array em uma posição específica.
/* 1) Posição do array da qual vamos começar a tirar as informações 
	 2) Quantos elementos eu quero retirar a partir da posição inicial 
	 3) Item que você quer adicionar
*/

/*

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];

months.splice(1, 0, 'Feb');
// [ 'Jan', 'Feb', 'Fev', 'Mar', 'Abr', 'Mai' ];


months.splice(1, 4, 'May');
// [ 'Jan', 'May' ]


​
pop - Remove o último elemento de um array.
const array1 = [1, 2, 3];

const lastElement = array1.pop();

console.log(array1);
// [1, 2]

console.log(lastElement);
// 3
​
shift - Remove o primeiro elemento de um array.
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// [2, 3]

console.log(firstElement);
// 1


*/


