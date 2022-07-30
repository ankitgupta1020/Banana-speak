var btnTranslate = document.querySelector("btn-translate");
var textInput = document.quarySelector("#txt-input");

console.log(txtInput)

function clickHandler(){
    console.log("clicked!");
    console.log("input", textInput.value);

};

 btnTranslate.addEventListener("click", clickHandler)