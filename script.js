//here logic goes

// 1. вывести в браузер каждого актера асинхронно используя setTimeout и appendChild
// 2. вывести в браузер каждого актера в обратном порядке  используя setTimeout и appendChild - использование цикла for - запрещено

const actorsContainer = document.querySelector('#actors-list');

actors.forEach(function (actor, index) {

    setTimeout(function(){
        let actorHtmlElement = document.createElement('div');
        actorHtmlElement.classList.add('colored');
        actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`;
        actorsContainer.appendChild(actorHtmlElement);
    }, 1000 * index)
});

setTimeout(function(){
    
    actors.forEach(function (actor, index) {
        setTimeout(function(){
            let actorHtmlElement = document.createElement('p');
            actorHtmlElement.classList.add('colored-green');
            actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`;
            actorsContainer.appendChild(actorHtmlElement);
            console.log(index + "before");
        }, 1000 * (actors.length - index));
        console.log(index + "after");
    });
}, 8000);


//получаем html элемент куда мы выводим результат
// const actorsListContainer = document.querySelector('#actors-list');


// innerHTML solution

// //формируем массив html элементов представленных строкой
// //cоединяем массив в одну строку
// let resultedHTML = '<ul>' + actors.map(function (actor) {
//     return `<li>${actor.firstName} ${actor.lastName}</li>`
// }).join('') + '</ul>';

//изменяем содержимое html элемента 
//actorsListContainer.innerHTML = resultedHTML;

//appendChild soulution
// const actorsListContainer = document.querySelector('#actors-list');

// actors.forEach(function (actor) {
//     let actorHtmlElement = document.createElement('div');
//     actorHtmlElement.classList.add('colored');
//     actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`;
//     actorsListContainer.appendChild(actorHtmlElement);
// });

//documentFragment solution
// let documentFragment = document.createDocumentFragment();

// actors.forEach(function (actor) {
//     let actorHtmlElement = document.createElement('div');
//     if (actor.year < 1950) {
//         actorHtmlElement.classList.add('colored');
//     } 
   
//     actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`;
//     documentFragment.appendChild(actorHtmlElement);
// });

//actorsListContainer.appendChild(documentFragment);



// function main () {
//     var result = []; // 1
//     // ждем когда сервер вернет данные - потом вызываем функцию которая ниже - asyncfunc
//     /* 2 */ getDataFromServer().then(function asyncfunc (res) {
//        /* 4 */ result = res;
//     });
//     /* 3 */result.push(5);
//     console.log('sync')
// }

// function main() {
//     var c = 10;
//     setTimeout(function () {
//         c = 40; console.log('first');
//     }, 4000);
//     setTimeout(function () {
//         c = 40; console.log('second');
//     }, 3000);
    
// }
// // console.log('main');

// function main2() {
//     setTimeout(function () {
//         c = 40; console.log('main2');
//     }, 1000);
// }
//  main();
//  main2();
// console.log('end main - stack clear check queue')

















