Math.randomName = (len) => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let name = "";
    while (name.length < 6) {
        name += abc[Math.floor(Math.random() * abc.length)];
    }
    name = name[0].toUpperCase() + name.slice(1);
    return name;
}

Math.getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Unit {
    #health = 100
    #status = 'active'
    #damage = Math.getRandom(5, 40)
    
    get health() {
        return this.#health;
    }
    get status() {
        return this.#status;
    }
    get damage() {
        return this.#damage;
    }
    set health(val) {
        this.#health = val;
    }
    set status(val) {
        this.#status = val;
    }

    changeStatus = () => {
        this.#status = 'destroy'
        return this.#status
    }

    /* get changeStatus() {
        return this.#changeStatus();
    } */

    attackedBy = (player) => {
        this.#health -= player.damage
        if (this.#health <= 0) {
            this.#health = 0;
            this.changeStatus()
        } 
    }

    /* set attackedBy(player) {
        return this.#attackedBy(player);
    } */
}

un1 = new Unit()
un2 = new Unit()

class Army {
    #army = [];
    #num;
    #name;

    constructor(num, name) {
        this.#num = num;
        this.#name = name;
        for (let i = 0; i < this.num; i++) {
            this.#army.push(new Unit());
        }
    }

    get num() {
        return this.#num;
    }

    get name() {
        return this.#name;
    }
    get army() {
        return this.#army;
    }

    canPlay = () => {
        return Boolean(this.#army.filter(unit => unit.status == 'active').length); 
    }

    countDestroy = () => {
        return this.#army.filter(unit => unit.status == 'destroy').length;
    }

    findActive = () => {
        return this.#army.filter(unit => unit.status == 'active')
    } 

}

ar1 = new Army(5, 'fff')

class Game {
    #armies = []
    #Winners = []

    constructor (number) {
        for (let i = 0; i < number; i++) {
            this.#armies.push(new Army(4, Math.randomName(6)));
        }
    }

    attack = function(point, attacker) {
        
        const key1 = Math.getRandom(0, point.length - 1)
        const key2 = Math.getRandom(0, attacker.length - 1)
        point[key1].attackedBy(attacker[key2])

        return `${key1 + 1} атакован ${key2 + 1} на ${attacker[key2].damage} оставшееся здоровье: ${point[key1].health}`
    }

    round = () => {
        const randomArmy = this.activeArmies()
        let team1 = randomArmy[0]
        let team2 = randomArmy[1]

        let res = ``;
        while ( this.check() ) {
            
            res += `${team1.name} атакует ${team2.name}: ${this.attack(team2.findActive(), team1.findActive())}\n`

            if (team2.canPlay()) {
                res += `${team2.name} атакует ${team1.name}: ${this.attack(team1.findActive(), team2.findActive())}\n`
            }
            // Война нескольких:
            if (this.check()) {

                const randomArmy = this.activeArmies()
                team1 = randomArmy[0]
                team2 = randomArmy[1]
            }
        }
        return res;
    }

    activeArmies = () => {
        this.#armies.sort(() => Math.random() - 0.5)
        return this.#armies.filter(army => army.canPlay())
    }

    check = () => {
        return this.activeArmies().length > 1;
    }

    findWinner = () => {
        let res
        this.#armies.forEach((army) => {
            if (army.canPlay()) {
                res = `\nВыиграла команда ${army.name}\nКоличество выживших юнитов: ${army.findActive().length}\nКоличество погибших юнитов: ${army.countDestroy()}\n\n`;
                this.#Winners.push(army.name)
            }
        })
        return res
    }

    new = () => {
        this.#armies.forEach((army) => {
            army.army.forEach((unit) => {
                unit.health = 100;
                unit.status = "active";
            })
        })
        return this.#armies
    }

    run = (num) => {
        let res = ``
        for (let i = 1; i < num + 1; i++) {
            res += `Раунд ${i} \n`
            res += this.round();
            let win = this.findWinner()
            alert(`Раунд ${i}\n ${win}`)
            res += win;
            this.new()
        }
        let result = this.stats() + this.result()
        alert(result);
        return res
    }

    stats = () => {
        let res = '';
        for (let i = 0; i < this.#armies.length; i++) {
            res += `Кол-во побед ${this.#armies[i].name}: ${this.#Winners.filter(item => item === this.#armies[i].name).length}\n`;
        }
        return res

    }

    result = () => {
        const winner = {};
        let res = ``;
        let proverka = true;
        this.#Winners.forEach(name => {
            winner[name] = (winner[name] || 0) + 1
            if (winner[name] > 1) {
                res = `Победитель: ${name}, число побед: ${winner[name]}`;
                proverka = false
            }
        })
        if (proverka) {
            res = 'Борьба закончилось ничьей'
        }
        return res
    }
}

const game = new Game(3)

console.log(game.run(3))
