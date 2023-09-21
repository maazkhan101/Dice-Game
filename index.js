var randomnumber1 = Math.floor(Math.random() * 6)+1; //Number generate between 0 and 6 [ math.floor for whole number]



var randomdiceimage="dice" + randomnumber1 + ".png";



var randomimagesource="images/" + randomdiceimage;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimagesource);


var randomnumber2=Math.floor(Math.random() * 6) +1;


var randomimagesource2="images/dice"+ randomnumber2 + ".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomimagesource2);




if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (randomnumber1==randomnumber2)
{
    document.querySelector("h1").innerHTML=" 🙌 It's a Draw"
}
else{
    document.querySelector("h1").innerHTML="🏴󠁧󠁢󠁥󠁮󠁧󠁿 Player 2 Wins";
}

