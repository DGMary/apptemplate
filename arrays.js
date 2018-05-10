var actors = [
    {firstName: "Tom", lastName: "Cruise", year: 1962 },
    {firstName: "Jackie", lastName: "Chan", year: 1954 },
    {firstName: "Brad", lastName: "Pitt", year: 1963 },
    {firstName: "Jean-Claude", lastName: "Van Damme", year: 1960 },
    {firstName: "Bruce", lastName: "Willis", year: 1955 },
    {firstName: "Arnold", lastName: "Schwarzenegger", year: 1946 },
    {firstName: "Silvester", lastName: "Stallone", year: 1947 },
]

//1. Получить массив который будет содержать всех актеров родившихся до 1950го года

function getActorsBeforeYear(year) {
    return actors.filter(function(actor){
        return actor.year < year;
    });

    actors.forEach(function (actor) {
        if (actor.year < year) {
            //change html
        } else {
            //do nothing
        }
    })
}
var lessThen = getActorsBeforeYear(1950);

//2. Получить массив который будет содержать полное имя каждого актера

var names = actors.map(function(actor){
    return `${actor.firstName} ${actor.lastName}` 
    //return actor.firstName + ' ' + actor.lastName; 
});


//3. Отсортировать массив по возрасту актеров - от старшего

actors.sort(function(a, b){
    return a.year - b.year
});

//4. Какой общий возраст всех актеров (предположим что ворзраст актера равен 2018-actor.year)

var sum = actors.reduce(function(res, actor){
    return res + (2018 - actor.year);
}, 0);









var people = ['John, Lock', 'Colin, Hull', 'Jane, Fox', 'Nick, Milner', 'Sarah, Connor', 'David, Smith', 'Hannah, Rose',
'Peter, Todd', 'Frank, Sample', 'Luke, Pope', 'Alissa, Moss', 'Sam, Washington', 'Eddie, Cope', 'Lucy, Bower', 'Andre, Cox',
'Monica, Bell', 'Richard, Nowell', 'Chris, Paxton', 'John, Cho', 'Tom, Price', 'Kate, Ritter', 'Mike, Lee', 'Kristin, Spawn',]




//5. Отсортировать в алфовитном порядке по фамилии
people.sort(function (a, b) {
    //var aLastName = a.split(', ')[1];//a.split(', '); ['John', 'Lock']
    var bLastName = b.split(', ')[1];
    var [aFirstName, aLastName] = a.split(', ');
    return aLastName < bLastName ? -1 : 1

});



var data = ['apple', 'banana', 'apple', 'pineapple', 'apple', 'apple', 'orange', 'banana', 'orange', 'apple', 'lemon', 'pear', 'pear', 'banana']
//6*. посчитать количество каждого фрукта в массиве - вывести объект например - fruitsCount = {apple: 4, banana: 5, ...}
var fruits = data.reduce(function (obj, fruit){
        //obj[fruit]
        //fruit in obj
    if (obj.hasOwnProperty(fruit) === true) {
        obj[fruit]++;
    } else {
        obj[fruit] = 1;
    }
    return obj;
}, {});


