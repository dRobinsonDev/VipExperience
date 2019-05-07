export default function TimeUtility(time = "19:30") {
    if (time) {
        time = time.split(':'); 
        var hours = Number(time[0]);
        var minutes = Number(time[1]);
        var timeValue;
        if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
        } else if (hours > 12) {
            timeValue= "" + (hours - 12);
        } else if (hours === 0) {
        timeValue= "12";
        }
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  
        timeValue += (hours >= 12) ? " P.M." : " A.M.";  
        return timeValue;
    }
}