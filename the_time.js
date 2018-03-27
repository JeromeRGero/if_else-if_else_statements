var HOUR = 12;
var MINUTE = 30;
var PERIOD = "PM";
var saying = "just after ";
var daytime = " in the morning"

if(MINUTE < 30) {
    
}
else if(MINUTE == 30) {
    saying = "30 minutes after ";
}
else{
    if(HOUR == 12 && PERIOD == "AM"){
        PERIOD = "PM";
    }
    else if(HOUR == 12){
        PERIOD = "AM";
    }
    saying = "almost ";
}

if(saying == "almost "){
    if(HOUR == 12){
        HOUR = 1;
    }
    else{
        HOUR++;
    }
}

if(PERIOD == "AM"){

}
else{
    daytime = " in the evening"
}

console.log("It's " + saying + HOUR + daytime);