//Challenge 1 - age in days

function ageInDays(){
    var birthYear= prompt("When were you born...awesome friend? ");
    var countAgeDays= (2021-birthYear)*365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are "+countAgeDays+" days old!");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
    
}

function reset(){
    document.getElementById("ageInDays").remove();
}

//Challenge 2 - Cat generator
function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "images/tenor.gif";
    div.appendChild(image);
}
