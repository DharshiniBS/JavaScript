function displayTime(){
    let dttm = new Date()
    document.getElementById('full').innerHTML = dttm.getDate() + '-' + (dttm.getMonth()+1) + '-' + dttm.getFullYear()
    let h = dttm.getHours() //gives 24hrs format. Code for am/pm. Since we are cheching condition. we are not calling function here, becoz it converts to string
    let m = padZero(dttm.getMinutes())
    let s = padZero(dttm.getSeconds())
    if(h>12){
        h -= 12 
        document.getElementById('ampm').innerHTML = 'PM'
    }
    document.getElementById('hrs').innerHTML = padZero(h)
    document.getElementById('mins').innerHTML = m
    document.getElementById('sec').innerHTML = s
}

function padZero(num){
    return num<10 ? '0'+num : num
}
setInterval(displayTime,500)