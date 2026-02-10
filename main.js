setInterval(ShowTime, 1000)
function ShowTime()
{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = AM;
}
hour = hour < 1 ? "0" + hour : hour;
min = min < 1 ? "0" + min : min;
sec = sec < 1 ? "0" + sec : sec;
let currentTime = hour + ":" + min + "" + sec + am_pm
document.getElementById("clock").innerHTML = currentTime
