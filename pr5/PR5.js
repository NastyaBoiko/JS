/* 
а) реализовать класс, вычисляющий факториал числа. Вызов метода класса
произвести в блоке try…catch. Обработку ошибок каждого типа производить в
своем классе, наследованным от Error.
*/

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
class Fact {

    fact(num) {
        let res
        try {
            if (Number.isInteger(num)) {
                if (num > 1) {
                    res = num * this.fact(num - 1)
                } else if (num < 0) { 
                    throw new ErrorIntegerMinus(`${num} меньше 0!`)
                } else {
                    res = 1
                }
            } else {
                throw new ErrorInteger(`${num} не является целым числом!`)
            }
            
        } catch (err) {
            res = err.myMessage
        }
        
        return res
    }
}

const facty = new Fact();

/* try {
    console.log(facty.fact(0))
    // console.log(facty.fact('a'))
} catch (err) {
    console.log(err.myMessage)
} */

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
            this.#a = Number.parseFloat(mas[0].trim());
            this.#b = Number.parseFloat(mas[1].trim());
            this.#c = Number.parseFloat(mas[2].trim());

            let res;
            let D;
            let x;
            let x1;
            let x2;
    
            if (mas.filter(val => val === '').length > 0) {
                throw new ErrorNumArguments('Не хватает аргументов!')
            } else if (mas.length > 3) {
                throw new ErrorNumArguments('Слишком много аргументов!')
            } /* else if (mas.length < 3) {
                throw new ErrorNumArguments('Не хватает аргументов!')
            } */

            if (this.checkZero){
                throw new ErrorValuesZero('введены все 0!')
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
                } else if (this.#b == 0 && this.#c != 0) {
                    res = "корней нет"
                } else {
                    // x = -(this.#c / this.#b)
                    // res = `${x}`
                    throw new ErrorType('Введено не квадратное уравнение, а линейное!')
                }
                return `Ответ: ${res}`;
            } else {
                throw new ErrorNotNumber('В параметрах не все числа!')
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

const squar = new Square(1, 0, -4)

// console.log(squar.sqrt(['-4', '2', '0']))

while (true) {
    let inp = prompt(`Введите номер задания:\n1. Вычислить факториал\n2. Решить квадратное уравнение\nQ - выход`)
    if (inp == null || inp == 'Q') {
        break;
    } else if (inp == 1) {
        while (true) {
            let str = prompt('Введите число для нахождения его факторила:\nQ - выход')
            if (str == null || str == 'Q') {
                break;
            } else {
                let num = Number(str)
                if (!isNaN(num)) {
                    // alert(Number(num));
                    alert(`Факториал ${num}: ${facty.fact(num)}`)
                } else {
                    alert('Введите целое положительное число!')
                }
            }
        }
    } else if (inp == 2) {
        while (true) {
            let args = prompt('Введите коэффициенты уравнения a, b, c через запятую\nQ - выход');
            if (args == null || args == 'Q') {
                break;
            } else {
                args = args.split(','); 
                if (args.filter(val => Number.parseFloat(val)).length != 0) {
                    alert(squar.sqrt(args))
                } else if (args.filter(val => val === '').length == 3) {
                    alert('Не переданы аргументы!')
                } else if (args.filter(val => Number.parseFloat(val)).length > 0){
                    alert(squar.sqrt(args))
                } else {
                    alert('Аргументы должны быть числами!')
                } 

            }
        }
    } else {
        alert('Некорректный ввод!')
    }
}




