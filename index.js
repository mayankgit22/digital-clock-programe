function setTime(){
    const date=new Date();
    let hours=date.getHours();
    const merideum=(hours>=12?"PM":"AM");
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0)
    const minutes=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0);
    const timer=`${hours}:${minutes}:${seconds} ${merideum}`;
    document.getElementById("clock").textContent=timer;

}
setTime();
setInterval(setTime,1000);