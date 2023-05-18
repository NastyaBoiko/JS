//1. Разработать функцию формирующую массив (армию) юнитов.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function masUnit(num) {
    const mas = []
    mas.push(() => 'not a unit')

    for (let i = 0; i < num + 1; i++) {

        let unit = {
            n: i + 1,
            hp: getRandomInt(1, 100),
            armor: getRandomInt(1, 100),
            attack: getRandomInt(1, 100)
        }

        mas.push(() => `Порядковый номер: ${unit.n}\nЭнергия: ${unit.hp}\nЗащита: ${unit.armor}\nАтака: ${unit.attack}`)
    }

    return mas
}

// const getUnit = masUnit(5)

// console.log(getUnit[1]())

// 2. Разработать функцию, возвращающую массив с функционалом планировщика задач (ToDо list).

function toDoList() {

    const task = [];

    const getInfo = () => {
        if (task.length == 0) {
            return `Нет задач`
        } else {
            return task
        }
    }
    
    const create = (taskText) => {
        task.push({
            n: task.length,
            text: taskText,
            status: 'active'})
        return `Задача ${task.length} создана`
    }

    const done = (n) => {
        if (task[n]) {
            if (task[n].status == 'active') {
                task[n].status = 'done'
                res = `Задача ${n + 1} завершена`
            } else {
                res = `Нельзя завершить задачу ${n + 1}, так как она уже завершена или удалена`
            }
        } else {
            res = 'Такой задачи нет';
        }
        return res
    }

    const del = (n) => {
        let res
        if (task[n]) {
            if (task[n].status == 'done') {
                task[n].status = 'deleted'
                res = `Задача ${n + 1} удалена`
            } else {
                res = `Нельзя удалить задачу ${n + 1}`
            }
        } else {
            res = 'Такой задачи нет';
        }
        return res;
    }

    const getActive = () => {
        let res = `Активные задачи:`;
        let active = task.filter(val => val.status == 'active')
        if (active.length == 0) {
            res = `Нет активных задач!`
        } else {
            active.forEach(el => res += `\nЗадача ${el.n + 1}: ${el.text}`)
        }
        return res
    }

    const getDone = () => {
        let res = `Завершенные задачи:`
        let done = task.filter(val => val.status == 'done')
        if (done.length == 0) {
            res = `Нет завершенных задач!`
        } else {
            done.forEach(el => res += `\nЗадача ${el.n + 1}: ${el.text}`)
        }
        return res
    }

    const getDel = () => {
        let res = `Удаленные задачи:`
        task.forEach((el, index) => {
            if (el.status == 'deleted') {
                res += `\nЗадача ${index + 1}: ${el.text}`
            }
        })
        if (res == `Удаленные задачи:`) {
            res = `Нет удаленных задач!`
        }
        return res
    }


    return [getInfo, create, done, del, getActive, getDone, getDel];

}

let f = toDoList()

while (true) {

    let num = prompt(`Введите номер задания:\n 1. 1 задача\n 2. 2 задача\n E - Выход`) 

    if (num == null || num == 'E') {
        break;
    }

    if (num == 1) {
        let army = prompt("Введите количество юнитов в армии:\n E - Выход")

        if (army == null || army == 'E') {
            continue;
        } else {
            army = Number(army);
            let check = false;
            let getUnit = masUnit(army)
            while (true) {
                if (army > 0) {
                    let i = prompt("Введите номер юнита, которого хотите вывести:\n E - Выход")
                    if (i == null || i == 'E') {
                        check = true;
                        break;
                    } 
                    i = Number(i);
                    if (i < army + 1 && i > 0) {
                        console.log(getUnit[i]())
                    } else if (i < 0 || i > army) {
                        console.log(`Юнита ${i} нет в армии! В армии ${army} юнитов`)
                    } 
                } else {
                    alert('Введите положительное число')
                    army = prompt("Введите количество юнитов в армии:\n E - Выход")
                    if (army == null || army == 'E') {
                        check = true;
                        break;
                    } 
                    army = Number(army);
                    getUnit = masUnit(army);
                }
            }
            if (check) {
                check = false;
                continue;
            }

        }

    } else if (num == 2) {

        let doon = 1;

        while (doon != 'E') {
            doon = prompt('Что будем делать? 0 - Получить список всех задач, 1 - создать задачу, 2 - завершить задачу, 3 - удалить завершенную задачу, 4 - получить список активных задач, 5 - получить список завершенных, 6 - список удаленных, E - выход') 
            if (doon == null || doon == 'E') {
                break;
            } 

            doon = Number(doon)

            switch (doon) {
                case 0:
                    console.log(f[0]());
                    break;
                case 1:
                    let text = prompt('Введите текст задачи,\nE - выход');
                    if (text == null) {
                        break;
                    } else if (text == 'E') {
                        doon = "E";
                    } else if (text == '') {
                        alert('Задача не может быть пустая')
                    } else {
                        console.log(f[1](text));
                    }
                    break;
                case 2:
                    let doneIt = prompt('Введите номер задачи для завершения,\nE - выход');
                    if (doneIt == null) {
                        break;
                    } else if (doneIt == 'E') {
                        doon = "E";
                        break;
                    } else {
                        console.log(f[2](doneIt - 1));
                    }
                    break;
                case 3:
                    let delIt = prompt('Введите номер задачи для удаления,\nE - выход');
                    if (delIt == null) {
                        break;
                    } else if (delIt == 'E') {
                        doon = "E";
                        break;
                    } else {
                        console.log(f[3](delIt - 1));
                    }
                    break;
                case 4:
                    console.log(f[4]());
                    break;
                case 5:
                    console.log(f[5]());
                    break;
                case 6:
                    console.log(f[6]());
                    break;

                default:
                    alert('Нет таких значений, попробуйте снова');

            }
        }
    } else {
        alert('Некорректный ввод');
    }
}
