let cont1 = document.getElementById("data")
let cont2 = document.getElementById("hor")
let cont3 = document.getElementById("min")
let cont4 = document.getElementById("sec")

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
setInterval(() => {
    let date = new Date();
    cont1.innerHTML = montha(date.getMonth())+" "+date.getDate()+" "+date.getFullYear();
    cont2.innerHTML=date.getHours()
    cont3.innerHTML=date.getMinutes()
    cont4.innerHTML=date.getSeconds()
    // cont.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}, 1000)

