/*
	does a thing	
*/
function getShopStatus(time, day){
    if(day === "Sunday" || day === "Saturday") {
        return checkWeekendTimes(time)
    } else {
        return checkWeekdayTimes(time)
    } 
}


//    function some_Time(Time, d) {
//     if (d === "Sunday") {
//     if (Time > 8 && Time < 18) {
//     return "shop is open"
//     } else {
//     return "shop is closed"
//     }
//     } else if (d === "Saturday") {
//     if (Time > 8 && Time < 18) {
//     return "shop is open"
//     } else {
//     return "shop is closed"
//     }
//     } else if (Time > 6 && Time < 20) {
//     return "shop is open"
//     } else {
//     return "shop is closed"
//     }
//     }
    
    
//     console.log(some_Time(14, "Sunday"));
   


    
    
 