const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const result = document.getElementById("result-color");

const debug = document.getElementById("debug");


red.addEventListener("input", (evt)=> {
    const color = "rgb(" + evt.target.value + "," + green.value + "," + blue.value + ")";
    result.style.backgroundColor = color;
    console.log(color);
})

blue.addEventListener("input", (evt)=> {
    const color = "rgb(" + red.value + "," + green.value + "," + evt.target.value + ")";
    result.style.backgroundColor = color;
    console.log(color);
    
})

green.addEventListener("input", (evt)=> {
    const color = "rgb(" + red.value + "," + evt.target.value + "," + blue.value + ")";
    result.style.backgroundColor = color;
    console.log(color);
})