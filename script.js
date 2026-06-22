function recommendCrop() {

let n = Number(document.getElementById("n").value);
let p = Number(document.getElementById("p").value);
let k = Number(document.getElementById("k").value);

let crop = "";

if(n > 100){
    crop = "Paddy";
}
else if(p > 100){
    crop = "Groundnut";
}
else{
    crop = "Maize";
}

document.getElementById("result").innerHTML =
"Recommended Crop: " + crop;
    function chatBot() {

let question =
document.getElementById("question").value.toLowerCase();

let answer = "";

if(question.includes("paddy")){
    answer = "Paddy grows well in high nitrogen soil.";
}
else if(question.includes("water")){
    answer = "Paddy requires regular watering.";
}
else if(question.includes("fertilizer")){
    answer = "Use NPK fertilizer based on soil condition.";
}
else{
    answer = "Please ask about crops, water or fertilizer.";
}

document.getElementById("answer").innerHTML = answer;
}

}
