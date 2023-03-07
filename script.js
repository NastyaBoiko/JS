function getRandomInt(min, max) {
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
    
    charecter = (i == 0) ? 0 : getRandomInt(-15, 15);

    schedule.setHours(schedule.getHours() + stops[i].time);
    
    date.setHours(date.getHours() + stops[i].time);

    date.setMinutes(date.getMinutes() + charecter);

    console.log(`${charecter} : ${stops[i].name}, время: ${date.toLocaleTimeString()}, ожидаемое время: ${schedule.toLocaleTimeString()}, характер: ${defineCharecter(schedule, date)}; ${(new Date).getMinutes()}:${(new Date).getSeconds()}:${(new Date).getMilliseconds()}`);
    i++;
    if (i < stops.length) {
        setTimeout(go, stops[i].time * 1200 + charecter * 1200 / 60)
    }
}, stops[i].time * 1200 + charecter * 1200 / 60)

//Задача 2
// Временной масштаб симуляции: 320мс:1ч.

distance = 40

velocity = 2

timeLim = 4

rest = 4 //3-5



