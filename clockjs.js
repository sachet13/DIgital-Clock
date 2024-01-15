function displaytime(){
    let dateTime=new Date()
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    let d=dateTime.getDate();
    let mon=dateTime.getMonth();
    let y=dateTime.getFullYear();
    let day=dateTime.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    if(hr<12){
        ampm.innerHTML='AM'
    }else{
        hr=hr-12
        ampm.innerHTML='PM'
    }
    document.getElementById('hour').innerHTML=zero(hr)
    document.getElementById('minute').innerHTML=zero(min)
    document.getElementById('second').innerHTML=zero(sec)
    document.getElementById('day').innerHTML=zero(d)
    document.getElementById('month').innerHTML=zero(mon+1)
    document.getElementById('year').innerHTML=y
    document.getElementById('weekday').innerHTML=days[day]
}
function zero(num){
    return num<10?"0"+num:num
}
setInterval(displaytime,1000)
