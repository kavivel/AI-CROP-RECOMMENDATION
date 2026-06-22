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

}
