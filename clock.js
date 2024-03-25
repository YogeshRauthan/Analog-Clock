setInterval(() => {
    let d1 = new Date();
    let htime = d1.getHours();
    let mtime = d1.getMinutes();
    let stime = d1.getSeconds();
    console.log("Time : ", htime,mtime,stime);

    let h_rotation = 30*htime + (mtime/2);
    let m_rotation = 6*mtime;
    let s_rotation = 6*stime;
    console.log("Rot : ", h_rotation,m_rotation,s_rotation);

    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    hour.style.transform = `rotate(${h_rotation}deg)`;
    minute.style.transform = `rotate(${m_rotation}deg)`;
    second.style.transform = `rotate(${s_rotation}deg)`;
}, 1000);