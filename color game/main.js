
var colors=generateRandomColors(6);
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn"); 
var hardBtn=document.querySelector("#hardBtn");
var numSquares=6;
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    numSquares=3;
    for(var i=0;i<squares.length;i++){ 
        if (colors[i]){
            squares[i].style.backgroundColor=colors[i];
        } else{
            squares[i].style.display="none";
        }
        }

})
hardBtn.addEventListener("click",function(){
     easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    numSquares=6;
    for(var i=0;i<squares.length;i++){ 
        if (colors[i]){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
    }
})



for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent="correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again";

        }else{
            this.style.background="steelblue";
            messageDisplay.textContent="wrong";
        }
    })
}
colorDisplay.textContent=pickedColor;
function changeColors(color){
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];

}
function generateRandomColors(num){
    var arr=[];
    for(var i=0; i<num;i++){
        arr.push(randomColor());

    }

    return arr;

}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g + ", " + b +")";


}
resetButton.addEventListener("click",function(){  
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    messageDisplay.textContent="";
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colors";
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];

    }
    h1.style.backgroundColor="steelBlue";

})
