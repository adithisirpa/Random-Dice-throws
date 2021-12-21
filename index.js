var randomNumber1 = Math.floor(Math.random()*6)+1;

var imagesource = "images/dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src", imagesource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var imagesource = "images/dice"+randomNumber2+".png";

image2.setAttribute("src", imagesource);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player 1 Wins"
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent="Player 2 Wins"
}
else
{
  document.querySelector("h1").textContent="Draw"
}
