// JS to get lecture names that need to be completed to reach the completion target.

let regPattern = /\d{1,2}\.\d{1,2}/ //Regex for taking the time from the string.


let startLec = 173, endLec, duration = 0, currentProgress = 0, goalProgress = currentProgress + 13;  //Current lecture and last lecture number

// Based on start lec, calculate lectures that need to finished to reach 5% mark.
document.querySelectorAll(".lecture-name").forEach((ele, count) => {
    let dumFunc = (time) => Math.trunc(time) + ((time % 1) / .6);
    if(!ele.innerText.includes("Quiz") && count >= startLec &&  currentProgress <= goalProgress){
        let temp = dumFunc(ele.innerText.replace(':', '.').match(/\d{1,2}\.\d{1,2}/));
        duration += temp
        currentProgress += temp/50;
        endLec = count;
    }
}); console.log(endLec);

// Print Lecture Names starting from the start lecture and ending at the end lecture for 5% mark.
let lecNameArr = []; document.querySelectorAll(".lecture-name").forEach((ele, count) => (count >= startLec && count <= endLec) ? lecNameArr.push(count + " " + ele.innerText) : undefined); console.log(lecNameArr);

// Calculate Total Duration of Lectures between start and end lecture.
duration = 0; document.querySelectorAll(".lecture-name").forEach((ele, count) => {
    let dumFunc = (time) => Math.trunc(time) + ((time % 1) / .6);
    (count >= startLec && count <= endLec) ? duration += dumFunc(ele.innerText.replace(':', '.').match(/\d{1,2}\.\d{1,2}/)) : undefined;
    return true;
}); console.log(duration, duration/50+"%")


