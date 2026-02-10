setInterval(ShowTime, 1000)
function ShowTime()
{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
}
document.getElementById("clock").innerHTML = currentTime
