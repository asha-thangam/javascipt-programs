const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")

//seconds.innerHTML="asha"

function getTime(){
    currentYear=new Date().getFullYear();
    const newYear=new Date(`January 1 ${currentYear+1} 00:00:00 `);
    const currentDate=new Date();
    const diff=newYear-currentDate;
    //1000ms=1s
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
}

//setIneraval(funName, time in ms);
setInterval(getTime,1000);




