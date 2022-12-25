let cont1 = document.getElementById("data")
let cont2 = document.getElementById("hor")
let cont3 = document.getElementById("min")
let cont4 = document.getElementById("sec")
let cont5 = document.getElementById("year")

function montha(mon) {
    switch (mon) {
        case 1:
            return ("JANUARY")
            break;
        case 2:
            return ("FEBRUARY")
            break;
        case 3:
            return ("MARCH")
            break;
        case 4:
            return ("APRIL")
            break;
        case 5:
            return ("MAY")
            break;
        case 6:
            return ("JUNE")
            break;
        case 7:
            return ("JULY")
            break;
        case 8:
            return ("AUGUEST")
            break;
        case 9:
            return ("SEPTEMBER")
            break;
        case 10:
            return ("OCTOBER")
            break;
        case 11:
            return ("NOVEMBER")
            break;
        case 12:
            return ("DECEMBER")
            break;
    }
}

function daye(daya) {
    switch (daya) {
        case 0:
            return ("SUNDAY")
            break;
        case 1:
            return ("MONDAY")
            break;
        case 2:
            return ("TOUSDAY")
            break;
        case 3:
            return ("WEDNESDAY")
            break;
        case 4:
            return ("THURSDAY")
            break;
        case 5:
            return ("FRIDAY")
            break;
        case 6:
            return ("SATERDAY")
            break;
    }
}

function datea(){
    let date = new Date();
    cont1.innerHTML =  montha(date.getMonth())+" "+date.getDate()+" "+daye(date.getDay());
    cont2.innerHTML= (date.getHours()<10) ? "0" + date.getHours() : date.getHours();
    cont3.innerHTML= (date.getMinutes()<10) ? "0" + date.getMinutes() : date.getMinutes();
    cont4.innerHTML= (date.getSeconds()<10) ? "0" + date.getSeconds() : date.getSeconds();
    cont5.innerHTML= date.getFullYear();
}
setInterval(datea, 1000)

