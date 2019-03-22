let day = "Monday";
let alarm  = "none";

let blackaddAlarm = {
    weekendAlarm: 'No alarm needed so do one',
    weekDayAlarm: 'get up at 7am, or 11am if you`re called Adam'
}; 
console.log(day)
if (day == "Saturday" || day == "Sunday"){ //very important - make sure to use variable.
alarm = blackaddAlarm.weekendAlarm;
console.log(alarm)

} else if (day !== "Saturday" || day !== "Sunday"){
    alarm = blackaddAlarm.weekDayAlarm;
    console.log(alarm)
}
