
function graduateAlarm(gTime) {
    let leftTime = new Date(gTime).getTime() - new Date().getTime();
    let timeNMap = [24*60*60*1000, 60*60*1000, 60*1000, 1000];
    let timeLMap = ["天", "时", "分", "秒"];
    let n = 0, alarmStr = "";
    if (leftTime <= 0) {
        return "0天0时0分0秒";
    }
    for (let i = 0; i < timeNMap.length; i++) {
        if (leftTime / timeNMap[i] >= 1) {
            n = Math.floor(leftTime / timeNMap[i]);
            alarmStr += n + timeLMap[i];
            leftTime -= n * timeNMap[i];
        }
    }
    return alarmStr;
}

console.log(graduateAlarm("2018-5-18"))