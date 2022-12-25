let cont1 = document.getElementById("data")
let cont2 = document.getElementById("hor")
let cont3 = document.getElementById("min")
let cont4 = document.getElementById("sec")
let cont5 = document.getElementById("year")

function montha(mon) {
    switch (mon) {
        case 0:
            return ("JANUARY")
            break;
        case 1:
            return ("FEBRUARY")
            break;
        case 2:
            return ("MARCH")
            break;
        case 3:
            return ("APRIL")
            break;
        case 4:
            return ("MAY")
            break;
        case 5:
            return ("JUNE")
            break;
        case 6:
            return ("JULY")
            break;
        case 7:
            return ("AUGUEST")
            break;
        case 8:
            return ("SEPTEMBER")
            break;
        case 9:
            return ("OCTOBER")
            break;
        case 10:
            return ("NOVEMBER")
            break;
        case 11:
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

