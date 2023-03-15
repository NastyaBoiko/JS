Math.getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Задача 1
// Временной масштаб симуляции: 1200мс:1ч.
//1200мс:60мин => 20мс:1мин


const stops = [
    {
        name: 'Конная',
        time: 0,
        stop: 10
    },
    {
        name: 'Понтонная',
        time: 62,
        stop: 12
    },
    {
        name: '25 километр',
        time: 63, 
        stop: 15
    },
    {
        name: '70 километр',
        time: 121, 
        stop: 14
    },
    {
        name: '170 километр',
        time: 45, 
        stop: 7
    }
];

const stops2 = [
    {
        name: 'Лавинная',
        time: 0, 
        stop: 15
    },
    {
        name: 'Лавандовая',
        time: 80, 
        stop: 15
    },
    {
        name: 'Креативная',
        time: 47, 
        stop: 15
    },
    {
        name: 'Хижина 25',
        time: 28, 
        stop: 15
    },
    {
        name: 'Наличная',
        time: 67, 
        stop: 15
    },
    {
        name: 'Боровая',
        time: 260, 
        stop: 15
    }
];

function Train(name, stops, date) {
    this.name = name;
    this.stops = stops
    this.date = new Date(...date);
    this.schedule = new Date(...date);
    this.i = 0;
    this.charecter;
    this.timeVagon = 0;
    this.res = ``;

    this.go = () => {

        this.charecter = (this.i == 0) ? 0 : Math.getRandom(0, 5);

        this.changeTime();

        let step = `${this.name} прибыл на станцию ${this.stops[this.i].name}, расписание: ${this.schedule.toLocaleTimeString()}, текущее время: ${this.date.toLocaleTimeString()}, характер: ${this.defineCharecter(this.schedule, this.date)}`;

        this.res += `${step}\n`;
        console.log(step);

        if(this.i != 0 && this.i != this.stops.length - 1) {
            setTimeout(this.stop, this.stops[this.i].stop * 20)
        }

        if(this.i != 0 && this.i != this.stops.length - 1) {
            setTimeout(this.vagon, (this.stops[this.i].stop + this.timeVagon) * 20)
        }

        this.i++;
        if (this.i < this.stops.length) {
            setTimeout(this.go, (this.stops[this.i].time + this.charecter) * 20)
        } else {
            alert(this.res);
        }
    }

    this.stop = () => {
        this.schedule.setMinutes(this.schedule.getMinutes() + this.stops[this.i].stop);
        this.date.setMinutes(this.date.getMinutes() + this.stops[this.i].stop);
        console.log(`${this.name} стоянка до ${this.date.toLocaleTimeString()} (${this.stops[this.i].stop} мин.)`)
    }

    this.curTimeMinsSec = () => {
        return `${(new Date).getMinutes()}:${(new Date).getSeconds()}:${(new Date).getMilliseconds()}`;
    }

    this.changeTime = () => {
        this.schedule.setMinutes(this.schedule.getMinutes() + this.stops[this.i].time + this.stops[this.i].stop);

        this.date.setMinutes(this.date.getMinutes() + this.stops[this.i].time + this.charecter + this.timeVagon + this.stops[this.i].stop);
    }

    this.defineCharecter = (dataSc, dataCur) => {
        let char = dataSc - dataCur;
        let itog;
        let diff = Math.abs(char / (1000 * 60));
        if (char > 0) {
            itog = `пришел заранее на ${diff} мин.`
        } else if (char == 0) {
            itog = "по расписанию"
        } else {
            itog = `с опозданием на ${diff} мин.`
        }
        return itog;
    }

    this.vagon = () => {
        this.timeVagon = (this.i == 0) ? 0 : Math.getRandom(0, 5);
        if (this.timeVagon != 0) {
            console.log(`${this.name} задерживается из-за смены локомотива: ${this.timeVagon} мин.`);
        } else {
            console.log(`${this.name} не задерживается из-за смены локомотива`);
        }
    }

    this.run = () => {
        setTimeout(this.go, (this.stops[this.i].time + this.charecter) * 20 )
    }

}

let tinny = new Train("Поезд 1", stops, [2023, 1, 17, 15]);
// tinny.run()
let tinny2 = new Train("Поезд 2", stops2, [2023, 1, 17, 5]);
// tinny2.run()

//Задача 2
// Временной масштаб симуляции: 320мс:1ч.
// 320мс:1ч => 80мс:15мин

function Turtle(name) {
    this.name = name;
    this.distance = 40000;
    this.distanceItog = 40000;
    this.velocity = 2000;
    this.dayDistance = 8000;
    this.extraDistance = 250;
    this.start = new Date(2023, 1, 17, 6)
    this.date = new Date(2023, 1, 17, 6);
    this.prevDate = new Date(2023, 1, 17, 6);
    this.res;
    this.allTime;

    this.run = () => {
        //краевые условия
        if (this.distance < this.dayDistance) {
            this.dayDistance = this.distance;
        }
        let time15Mins = this.dayDistance / this.extraDistance;

        this.distance -= this.dayDistance;
        
        this.newDate(this.date, time15Mins);

        console.log(`Черепаха ${this.name} преодолевает ${this.dayDistance / 1000} км за ${this.differ(this.date, this.prevDate)} ч., время: ${this.date.toLocaleTimeString()}, осталось: ${this.distance / 1000} км\n`)

        this.newDate(this.prevDate, time15Mins);

        if (this.distance > 0) {
            setTimeout(this.rest, time15Mins * 80)
        } 
        else {
            console.log(this.finish());
            results()
        } 
    }

    this.newDate = (date, times) => {
        date.setMinutes(date.getMinutes() + times * 15);
    }

    this.differ = (dataSc, dataCur) => {
        let char = (dataSc - dataCur) / (1000 * 60 * 60);

        this.defineDist(char);

        let res = char % 1 == 0 ? char : `${Math.floor(char/1)}:${char % 1 * 60}`
        
        return res;
    }

    this.defineDist = (time) => {
        this.dayDistance = time > 4 ? 8000 + (time - 4) * 1000 : 8000;
    }

    this.rest = () => {

        let time15Mins = 12 + Math.getRandom(0, 8);
        this.newDate(this.date, time15Mins);

        console.log(`Черепаха ${this.name} устала и спит ${this.differ(this.date, this.prevDate)} ч. до ${this.date.toLocaleTimeString()} ч.\n`)

        this.newDate(this.prevDate, time15Mins);

        this.distance > 0 ? setTimeout(this.run, time15Mins * 80) : ``;
    }

    this.winner = (dataSc, dataCur) => {
        return (dataSc - dataCur) / (1000 * 60 * 60);
    }

    this.finish = () => {
        this.allTime = this.winner(this.date, this.start);
        return this.res = `Черепаха ${this.name}, время забега: ${this.differ(this.date, this.start)} ч.\n`;
    }

    this.itog = (second) => {
        alert (`Дистанция ${this.distanceItog / 1000} км результаты:\n` + this.res + second.res + `\n***************\nПобедитель : ${this.finish()}`)
    }

}


let paha = new Turtle('Paha')
let paha2 = new Turtle('Paha2')
paha.run();
paha2.run();

function results() {
    if (paha.res && paha2.res) {
        if (paha.allTime < paha2.allTime) {
            paha.itog(paha2)
        } else {
            paha2.itog(paha)
        }
    }
}