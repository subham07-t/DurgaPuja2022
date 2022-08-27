const days_el = document.getElementById("days");
const hour_el = document.getElementById("hours");
const min_el = document.getElementById("mins");
const sec_el = document.getElementById("seconds");

const newyear = "2 oct 2022";

const newYear = () => {
    
    const newYearDate = new Date(newyear);
    const currentYear = new Date();

    const Totalseconds  =  (newYearDate - currentYear) / 1000;
    const days = Math.floor(Totalseconds / (3600*24));
    const hours = Math.floor(Totalseconds % (3600*24) / 3600);
    const mins = Math.floor(Totalseconds % 3600 / 60);
    const seconds = Math.floor(Totalseconds % 60);

    // console.log(days,hour,minutes,sec);


     days_el.innerHTML = days;
     hour_el.innerHTML = timee(hours);
     min_el.innerHTML = timee(mins);
     sec_el.innerHTML = timee(seconds);

     function timee(time){
        return time < 10 ? `0${time}` : time
     }
}

newYear();
setInterval(newYear,1000)