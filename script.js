Math.getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Задача 1
// Временной масштаб симуляции: 1200мс:1ч.

const stops = [
    {
        name: 'Конная',
        time: 0
    },
    {
        name: 'Понтонная',
        time: 2
    },
    {
        name: '25 километр',
        time: 2
    },
    {
        name: '70 километр',
        time: 3
    },
    {
        name: '170 километр',
        time: 4
    }
];

// new Date(year, month, date, hours, minutes, seconds, ms)
let date = new Date(2023, 0, 17, 15);
let schedule = new Date(2023, 0, 17, 15);

function defineCharecter(dataSc, dataCur) {
    let char = dataSc - dataCur;
    let itog;

    if (char > 0) {
        itog = 'пришел заранее'
    } else if (char == 0) {
        itog = "по расписанию"
    } else {
        itog = "с опозданием"
    }
    return itog;
}

let i = 0;
let charecter;

let timer = setTimeout(go = () => {
    
    charecter = (i == 0) ? 0 : Math.getRandom(-15, 15);

    schedule.setHours(schedule.getHours() + stops[i].time);
    
    date.setHours(date.getHours() + stops[i].time);

    date.setMinutes(date.getMinutes() + charecter);

    // console.log(`${charecter} : ${stops[i].name}, время: ${date.toLocaleTimeString()}, ожидаемое время: ${schedule.toLocaleTimeString()}, характер: ${defineCharecter(schedule, date)}; ${(new Date).getMinutes()}:${(new Date).getSeconds()}:${(new Date).getMilliseconds()}`);
    i++;
    if (i < stops.length) {
        setTimeout(go, stops[i].time * 1200 + charecter * 1200 / 60)
    }
}, stops[i].time * 1200 + charecter * 1200 / 60)

//Задача 2
// Временной масштаб симуляции: 320мс:1ч.

function Turtle(name) {
    this.name = name;
    this.distance = 40;
    this.velocity = 2;
    this.timeAll = 0;
    this.timeLim = 4;
    this.sleep = Math.getRandom(3, 5);

    this.changeSleep = () => {
        this.sleep = Math.getRandom(3, 5);
    }

    this.run = () => {
        let length = this.velocity * this.timeLim
        this.timeAll += this.timeLim
        this.distance -= length
        console.log(`Черепаха ${this.name} преодолевает ${length} км за ${this.timeLim} часа, осталось: ${this.distance} км\n`)
        Boolean(this.distance)? setTimeout(this.rest, this.timeLim * 320) : ``;
    }

    this.rest = () => {
        this.changeSleep()
        this.timeAll += this.sleep;
        console.log(`Черепаха ${this.name} устала и спит ${this.sleep} часа\n`)
        Boolean(this.distance)? setTimeout(this.run, this.sleep * 320) : ``;
    }

    this.zabeg = () => {
        setTimeout(this.run, this.timeLim * 320);
    }


    this.timeAllF = () => this.timeAll



}

let paha = new Turtle('Paha')
let paha2 = new Turtle('Paha2')
paha.zabeg();
paha2.zabeg();


rest = 4 //3-5



