/* 
а) реализовать класс, вычисляющий факториал числа. Вызов метода класса
произвести в блоке try…catch. Обработку ошибок каждого типа производить в
своем классе, наследованным от Error.
*/

// let args = '1,2. ';
// console.log(/^[\d\,\.\-\s]+$/.test(args))

class ErrorNotNumber extends Error 
{ 
    #message;

    constructor(message = 'не является числом!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorNotNumber: ${this.#message}`
    }
}

class ErrorValuesZero extends Error 
{ 
    #message;

    constructor(message = 'значения не могут быть равны 0!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorValuesZero: ${this.#message}`
    }
}

class ErrorIntegerMinus extends Error 
{ 
    #message;

    constructor(message = 'число меньше 0!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorIntegerMinus: ${this.#message}`
    }
}

class ErrorType extends Error 
{ 
    #message;

    constructor(message = 'неверный формат!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorType: ${this.#message}`
    }
}
class ErrorInteger extends Error 
{ 
    #message;

    constructor(message = 'не введено целочисленное значение!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorInteger: ${this.#message}`
    }
}

class ErrorNumArguments extends Error 
{ 
    #message;

    constructor(message = 'неверное число аргументов!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorNumArguments: ${this.#message}`
    }
}

class ErrorEmptyArguments extends Error 
{ 
    #message;

    constructor(message = 'пустые аргументы!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorEmptyArguments: ${this.#message}`
    }
}
class ErrorPoints extends Error 
{ 
    #message;

    constructor(message = 'должен быть 1 разделительный знак!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorPoints: ${this.#message}`
    }
}
class ErrorUndefinedArguments extends Error 
{ 
    #message;

    constructor(message = 'неверное число аргументов!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorUndefinedArguments: ${this.#message}`
    }
}
class ErrorLetSymbArguments extends Error 
{ 
    #message;

    constructor(message = 'аргументы - символы и буквы!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorLetSymbArguments: ${this.#message}`
    }
}

class ErrorEmptyString extends Error 
{ 
    #message;

    constructor(message = 'неверное число аргументов!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorEmptyString: ${this.#message}`
    }
}
/* 
б) реализовать класс, находящий корни квадратного уравнения. Вызов метода
класса произвести в блоке try…catch. Обработку ошибок каждого типа
производить в своем классе, наследованным от Error.
*/

// Квадратное уравнение

class Square 
{
    #a;
    #b;
    #c;

    constructor(mas) {
        this.#a = mas[0];
        this.#b = mas[1];
        this.#c = mas[2];
        if (mas.length > 3) {
            throw new ErrorNumArguments('Слишком много аргументов!')
        }
    }

    sqrt(mas) {
        try {
            if (typeof mas == 'undefined') {
                throw new ErrorUndefinedArguments('Не введены аргументы a, b, c')
            }

            if (mas.length < 3) {
                throw new ErrorNumArguments('Не хватает аргументов!')
            } else if (mas.length > 3) {
                throw new ErrorNumArguments('Слишком много аргументов!')
            } 

            if (mas.filter(val => val.trim() === '').length > 0) {
                throw new ErrorEmptyArguments('Введите все коэффициенты, если коэффициента нет, введите 0!')
            } else if (mas.filter(val => val.split('.').length > 2).length > 0) {
                throw new ErrorPoints('Число может иметь только 1 разделительный знак!')
            }

            if (mas.filter(val => /^[a-zA-Z]+$/.test(val)).length > 0) {
                throw new ErrorLetSymbArguments('Коэффициенты должны быть числами, а не буквами!')
            } else if (mas.filter(val => /^[\d\,\.\-\s]+$/.test(val)).length != 3) {
                throw new ErrorLetSymbArguments('Посторонние символы недопустимы!')
            }

            this.#a = Number.parseFloat(mas[0].trim());
            console.log(this.#a);
            this.#b = Number.parseFloat(mas[1].trim());
            console.log(this.#b);
            this.#c = Number.parseFloat(mas[2].trim());
            console.log(this.#c);

            let res;
            let D;
            let x;
            let x1;
            let x2;

            if (this.checkZero){
                throw new ErrorValuesZero('нельзя вводить все 0!')
            } else if (this.check) {
                if (this.#a != 0) {
                    if(this.#b == 0 && this.#c == 0) {
                        res = "0"
                    } else if (this.#b == 0 && this.#a / this.#c < 0) {
                        x1 = (-this.#c / this.#a) ** 0.5
                        x2 = -((-this.#c / this.#a) ** 0.5)
                        res = `${x1}; ${x2}`
                    } else if (this.#b == 0 && this.#a / this.#c > 0) {
                        res = "корней нет"
                    } else if (this.#c == 0) {
                        x1 = 0
                        x2 = -(this.#b / this.#a)
                        res = `${x1}; ${x2}`
                    } else if (this.#b != 0 && this.#c != 0) {
                        D = this.#b ** 2 - 4 * this.#a * this.#c
                        if (D > 0) {
                            x1 = (-this.#b + D ** 0.5) / (2 * this.#a)
                            x2 = (-this.#b - D ** 0.5) / (2 * this.#a)
                            res = `${x1}; ${x2}`
                        } else if (D == 0) {
                            x = (-this.#b + D ** 0.5) / (2 * this.#a)
                            res = `${x}`
                        } else {
                            res = 'корней нет'
                        }
                    }
                } else if (this.#a != 0 && this.#b == 0 && this.#c != 0) {
                    res = "корней нет"
                } else {
                    // x = -(this.#c / this.#b)
                    // res = `${x}`
                    throw new ErrorType('Коэффициент а не должен быть равен 0!')
                }
                return `Ответ: ${res}`;
            } else {
                throw new ErrorNotNumber('Коэффициенты должны быть числами!')
            }
        } catch (err) {
            return err.myMessage
        }
    }

    get check() {
        return !isNaN(this.#a) && !isNaN(this.#b) && !isNaN(this.#c);
    }
    
    get checkZero() {
        return this.#a == 0 && this.#b == 0 && this.#c == 0;
    }
}

const masCheck = [
    ['1', '-5', '6'],
    ['1', '-5', '7'],
    ['1', '-10', '25'],
    ['1', '-3', '0'],
    ['1', '0', '-9'],
    ['1', '0', '9'],
    ['5', '0', '0'],
    ['0', '1', '1'],
    ['0', '0', '1'],
    ['0', '1', '0'],
    ['0', '0', '0'],
    ['1.1', '-5.5', '6.5'],
    ['', '-10', '25'],
    ['-10', '', '25'],
    ['-10', '25', ''],
    ['', '', '25'],
    ['', '25', ''],
    ['25', '', ''],
    ['', '', ''],
    ['a', 'b', 'c'],
    ['1', 'b', 'c'],
    ['a', '1', 'c'],
    ['a', 'b', '1'],
    ['a', '1', '1'],
    ['1', 'b', '1'],
    ['1', '1', 'c'],
    ['1.1.2', '1.9.8', '9.8.9'],
    ['1^2', '5*8', '9'],
    ['1', '-5', '6', '7'],
]

const squar = new Square(1, 0, -4)

// console.log(squar.sqrt(['1', '2', '3']));

for (let i = 0; i < masCheck.length; i++) {
    console.log(`Тест ${i + 1}: ${squar.sqrt(masCheck[i])}`);
}

class SringCheck 
{
    stringCheck(str, needle) {
        let res = 0;
        try {
            if (str.trim() == '') {
                throw new ErrorEmptyString('Не введена строка!');
            } else if (needle.trim() == '') {
                throw new ErrorEmptyString('Не введена подстрока!');
            } else {
                if (str.includes(needle)) {
                    let cur = str.indexOf(needle)
                
                    while (cur != -1) {
                        res++;
                        cur = str.indexOf(needle, cur + needle.length)
                    }
                } 
            }
            return res;
        } catch (err) {
            return err.myMessage;
        }
    }
}

let strObj = new SringCheck();

// console.log(strObj.stringCheck(str, needle))

// console.log(squar.sqrt(['-4', '2', '0']))
/* 
while (true) {
    let inp = prompt(`Введите номер задания:\n1. Найти количество вхождений строки в подстроку\n2. Решить квадратное уравнение\nQ - выход`)
    if (inp == null || inp == 'Q') {
        break;
    } else if (inp == 1) {
        while (true) {
            let str = prompt('Введите строку:\nQ - выход')
            // console.log(str);
            
            if (str == null || str == 'Q') {
                break;
            } else if (str == '') {
                alert('Строка не может быть пустой!')
            } else {
                let needle = prompt(`Строка ${str}\nВведите подстроку:\nQ - выход`)
                // console.log(needle);

                if (needle == null || needle == 'Q') {
                    break;
                } else if (needle == '') {
                    alert('Строка не может быть пустой!')
                
                } else {
                    alert(`Количество раз подстрока ${needle} входит в строку ${str}: ${strObj.stringCheck(str, needle)}`);
                    // console.log(strObj.stringCheck(str, needle))
                }
            }
        }
    } else if (inp == 2) {
        while (true) {
            let args = prompt('Введите коэффициенты уравнения a, b, c через запятую\nQ - выход');
            if (args == null || args == 'Q' || args == 'q') {
                break;
            } else {

                // Проверяем на наличие только чисел , . -
                if (/^[\d\,\.\-\s]+$/.test(args)) {

                    args = args.split(',');
                    if (args.filter(val => val === '').length > 0) {
                        alert('Передайте 3 числовых аргумента через запятую!')
                    } else if (args.filter(val => val.split('.').length > 2).length > 0) {
                        alert('Числа не могут иметь больше одного разделительного знака')
                    } else if (args.filter(val => Number.parseFloat(val)).length != 0) {
                        alert(squar.sqrt(args))
                    } else if (args.filter(val => val == 0).length == 3) {
                        alert(squar.sqrt(args))
                    } else {
                        alert('Аргументы должны быть числами!')
                    }

                } else {
                    alert('Аргументы должны быть целыми и десятичными числами (разделительный знак - точка), переданными через запятую!')
                }
            }
        }
    } else {
        alert('Некорректный ввод!')
    }
} */