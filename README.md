# Шпаргалка markdown

## Выделение текста

Вы можете выделять текст в markdown с помощью символов `_` или `*`. Например:

Пример _курсива_ и **жирного** текста.

## Заголовки

Заголовки можно создавать с помощью символа `#`. Чем больше `#`, тем меньше заголовок. Например:

# Заголовок первого уровня
## Заголовок второго уровня
### Заголовок третьего уровня

## Выделение кода

Чтобы выделить текст как код, поместите его в тройные кавычки `````. 

```
mkdir my_project
cd my_project
git init
```
Это лишь некоторые функции markdown. 


тут моэно найти полную инструкцию на гите:
https://gist.github.com/fomvasss/8dd8cd7f88c67a4e3727f9d39224a84c



## HEAD в хешах
HEAD - служебный файл и служит как указатель последнего коммита. 
Если ввести HEAD - покажет последний коммит.
Хеш - индивидуальный номер коммита


## GIT LOG
Через команду git log --oneline  - можно получить список сокращенных хешей коммита.
Через него мы можем искать коммит или прыгать по веткам