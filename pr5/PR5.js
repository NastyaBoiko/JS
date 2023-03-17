class ErrorLetter extends Error 
{ 
    #message;

    constructor(message = 'не введено число!') {
        super(message);
        this.#message = message
    }

    get myMessage() {
        return `MyError: ${this.#message}`
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
        return `MyError: ${this.#message}`
    }
}

function fact (num) {
    let res
    if (typeof num == 'number') {
        if (num > 1) {
            res = num * fact(num - 1)
        } else if (num < 0) { 
            throw new ErrorMinus()
        } else {
            res = 1
        }
    } else {
        throw new ErrorLetter()
    }
    return res
}

try {
    fact(-1)
    fact('a')
} catch (err) {
    console.log(err.myMessage)
}




