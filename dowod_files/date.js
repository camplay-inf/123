function updateDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let monthNames = [
        "stycznia",
        "lutego",
        "marca",
        "kwietnia",
        "maja",
        "czerwca",
        "lipca",
        "sierpnia",
        "września",
        "października",
        "listopada",
        "grudnia"
    ];
    let dateElement = document.getElementById('date');
    dateElement.innerHTML = day + " " + monthNames[month] + " " + year + " (" + hours + ":" + minutes + ":" + seconds + ")";
}
setInterval(updateDate, 1000);