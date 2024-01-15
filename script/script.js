//находим элементы по селектору класса
let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

//пустой массив для хранения сообщений
let todoList = [];

//добавляем функцию обработчик событий
//addEventListener - отслеживает клик и запискает следующую функцию
//для сообщений создаем массив newTodo и на выходе он отдаст объект
addButton.addEventListener('click', function(){

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    }

    todoList.push(newTodo);
    displayMessages();
});

//функция для вывода дел на страницу
//перебираем наш массив todoList и каждый объект выводим в качестве тега списка li
// forEach - метод перебора. Принимает параметр колбек функцию (3 элемента или сколько объектов в массиве)
function displayMessages(){
    todoList.forEach(function(item, index){
        console.log(item);
    })
}