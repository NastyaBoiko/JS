/* 
а) реализовать класс, вычисляющий факториал числа. Вызов метода класса
произвести в блоке try…catch. Обработку ошибок каждого типа производить в
своем классе, наследованным от Error.
*/

class ErrorLetter extends Error 
{ 
    #message;

    constructor(message = 'не является числом!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorLetter: ${this.#message}`
    }
}

class ErrorMinus extends Error 
{ 
    #message;

    constructor(message = 'число меньше 0!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorMinus: ${this.#message}`
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
        return `ErrorMinus: ${this.#message}`
    }
}

function fact (num) {
    let res
    if (typeof num == 'number') {
        if (num > 1) {
            res = num * fact(num - 1)
        } else if (num < 0) { 
            throw new ErrorMinus(`${num} меньше 0!`)
        } else {
            res = 1
        }
    } else {
        throw new ErrorLetter(`${num} не является числом!`)
    }
    return res
}

try {
    // fact(-1)
    // fact('a12')
} catch (err) {
    console.log(err.myMessage)
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

    constructor(a, b, c) {
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    sqrt() {
        let res;
        let D;
        let x;
        let x1;
        let x2;

        if (this.check) {
            if (this.#a != 0) {
                if(this.#b == 0 && this.#c == 0) {
                    res = "0"
                } else if (this.#b == 0 && this.#a / this.#c < 0) {
                    x1 = (-this.#c / this.#a) ** 0.5
                    x2 = -((-this.#c / this.#a) ** 0.5)
                    res = `${x1}; ${x2}`
                } else if (this.#b == 0 && this.#a / this.#c > 0) {
                    res = "нет"
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
                        res = 'нет'
                    }
                }
            } else if (this.#b == 0 && this.#c != 0) {
                res = "нет"
            } else {
                x = -(this.#c / this.#b)
                res = `${x}`
                throw ErrorType('Введено не квадратное уравнение, а линейное!')
            }
            return `Ответ: ${res}`;
        } else {
            throw ErrorLetter('в параметрах не все числа!')
        }
    }

    get check() {
        return typeof this.#a == 'number' && typeof this.#b == 'number' && typeof this.#c == 'number';
    }
}

try {
    const squar = new Square(0, 1, -30)
    console.log(squar.sqrt())
} catch (err) {
    console.log(err.myMessage)
}





