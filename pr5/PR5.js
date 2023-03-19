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

class ErrorValues extends Error 
{ 
    #message;

    constructor(message = 'значения не могут быть равны 0!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `ErrorValues: ${this.#message}`
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
        return `ErrorType: ${this.#message}`
    }
}

class Fact {

    fact(num) {
        let res
        try {
            if (typeof num == 'number') {
                if (num > 1) {
                    res = num * this.fact(num - 1)
                } else if (num < 0) { 
                    throw new ErrorMinus(`${num} меньше 0!`)
                } else {
                    res = 1
                }
            } else {
                throw new ErrorLetter(`${num} не является числом!`)
            }
            
        } catch (err) {
            res = err.myMessage
        }
        
        return res
    }
}

facty = new Fact();

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

    constructor(...mas) {
        this.#a = mas[0];
        this.#b = mas[1];
        this.#c = mas[2];
        if (mas.length > 3) {
            throw new ErrorType('Слишком много аргументов!')
        }
    }

    sqrt(...mas) {
        this.#a = mas[0];
        this.#b = mas[1];
        this.#c = mas[2];
        try {
            let res;
            let D;
            let x;
            let x1;
            let x2;
    
            if (mas.length > 3) {
                throw new ErrorType('Слишком много аргументов!')
            } else if (mas.length == 0) {
                throw new ErrorType('Слишком мало аргументов!')
            }

            if (this.checkZero){
                throw new ErrorValues('введены все 0!')
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
                throw new ErrorLetter('в параметрах не все числа!')
            }
        } catch (err) {
            return err.myMessage
        }
    }

    get check() {
        return typeof this.#a == 'number' && typeof this.#b == 'number' && typeof this.#c == 'number';
    }
    
    get checkZero() {
        return this.#a == 0 && this.#b == 0 && this.#c == 0;
    }
}

const squar = new Square(1, 0, -4)





