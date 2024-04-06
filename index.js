setInterval(() => {
    d = new Date();
    t_hour = d.getHours();
    t_minute = d.getMinutes();
    t_second = d.getSeconds();

    h_rotation = 30*t_hour + t_minute/2;
    m_rotation = 6*t_minute;
    s_rotation = 6*t_second;

    hour_hand.style.transform = `rotate(${h_rotation}deg)`;
    minute_hand.style.transform = `rotate(${m_rotation}deg)`;
    second_hand.style.transform = `rotate(${s_rotation}deg)`;

},1000);



