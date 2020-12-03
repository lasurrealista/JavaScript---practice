'use script';

/* 1 */

(msCounter = () =>{
    
    const dateNewYear = Date.UTC(2020, 0, 1, 0, 0, 0);
    const dateNow = Date.now();

    const msElapsed = dateNow - dateNewYear;
    console.log(msElapsed);

})();

/* 2 */

(workDayCounter = () => {
    
    const dateNewYear = Date.UTC(2020, 0, 1, 0, 0, 0);
    const dateNow = Date.now();

    const startDate = new Date('January 1, 2020');
    const endDate = new Date('November 30, 2020');

    const msElapsed = dateNow - dateNewYear;

    let days = msElapsed / 1000 / 60 / 60 /24;

    let weeks = days / 7;
    days = days - (weeks * 2);

    let startDay = startDate.getDay();
    let endDay = endDate.getDay();

    if (startDay - endDay > 0) {
        days = days - 2;
    }
    
    if (startDay == 0 && endDay != 6) {
    days = days - 1;
    };
        
    if (endDay == 6 && startDay != 0) {
    days = days - 1;
    };
    console.log(days);
})();

/*

function countOfWorkingDays(from, to) {
    let counter = 0;
    for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
        if (day.getDay() > 0 && day.getDay() < 6) {
            counter += 1;
        }
    }
    return counter;
}

const from = new Date(2020, 0, 1);
const to = new Date();
console.log(countOfWorkingDays(from, to));

*/

/* 3 */

const date3 = new Date(Date.UTC(2020, 11, 1, 9, 45, 00));

function dateFormats(date) {
    const short = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour:'2-digit', 
            minute: '2-digit',
            };
    const long = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour:'2-digit', 
            minute: '2-digit',
            second: '2-digit',
            };
     return {
        short: date.toLocaleDateString('hu-HU', short),
        long: date.toLocaleDateString('hu-HU', long)
        };
}

console.log(dateFormats(date3));




