const startVideoTitle = ""   //Your value
const endVideoTitle = ""

const nameArr = []
document.querySelectorAll(".lecture-name").forEach((ele) => nameArr.push(ele.innerText))

let i = 0;
for(i; i < nameArr.length; i++){
    if(nameArr[i] != startVideoTitle){
        continue;
    } else{
        console.log(nameArr[i])
        break;
    }
}

for(i; i < nameArr.length; i++){
    if(nameArr[i] != endVideoTitle){
        console.log(nameArr[i])
    } else{
        console.log(nameArr[i])
        break;
    }
}