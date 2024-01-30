//находим элементы по селектору класса
let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

//пустой массив для хранения сообщений
let todoList = [];

//пишем скрипт чтоб возращать данные из Локал Сторедж и выводим на страницу
if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

//добавляем функцию обработчик событий
//addEventListener - отслеживает клик и запискает следующую функцию
//для сообщений создаем массив newTodo и на выходе он отдаст объект
addButton.addEventListener('click', function(){
    if(!addMessage.value) return;

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    }

    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
});

//функция для вывода дел на страницу
//перебираем объекты в массиве todoList выводит в качестве тега списка li
// forEach - метод перебора. Принимает параметр колбек функцию (3 элемента или сколько объектов в массиве)
function displayMessages(){
    let displayMessage = "";

    if(todoList.length === 0) todo.innerHTML = '';
    todoList.forEach(function(item, i){
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}' class='${item.important ? 'important' : ''}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    })
}

//навешиваем события на весь список li
todo.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id');

    let forLabel = todo.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;

    todoList.forEach(function(item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

// будем отключать дефолтное меню при клике правой кнопкой мыши на список
// при клике пкм будет перебираться весь массив. Когда будет находить совпадение, то меняет значение important
todo.addEventListener('contextmenu', function(event){
    event.preventDefault();
    todoList.forEach(function(item, i){
        if(item.todo === event.target.innerHTML){
            if(event.ctrlKey || event.metaKey){
                todoList.splice(i, 1);
            }else{
                item.important = !item.important;
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        };

    });
});