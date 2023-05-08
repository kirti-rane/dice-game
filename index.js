var randomnum1 = Math.floor(Math.random()*6)+1;          //1-6 random number

var randomDiceImg = "images/dice"+ randomnum1 +".png";      // craeting a link for src

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImg);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice"+randomnum2 +".png";

var randomImgSrc2 = "images/"+ randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);

//if player 1 wins
if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = " 😃 play 1 wins";
}
else if(randomnum1 < randomnum2){
    document.querySelector("h1").innerHTML = " 😃 play 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}