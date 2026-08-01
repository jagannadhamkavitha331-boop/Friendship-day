let questions = [

{
q: "Mana friendship lo ekkuva drama evaru chestharu? 😂",
options: ["Nenu 🤭", "Nuvvu 😂"]
},

{
q: "Nuvvu nannu emani pilusthav? 😄",
options: ["Golduu ❤️", "Bestie 😊"]
},

{
q: "Nannu first time chusinappudu em anukunnav? 😊",
options: ["Manchi person ❤️", "Chala crazy 😂"]
},

{
q: "Mana friendship lo funniest memory enti? 😂",
options: ["Crazy moments 😜", "Navvina moments ❤️"]
},

{
q: "Naa lo neeku nachina quality enti? ✨",
options: ["Caring ❤️", "Funny 😂"]
},

{
q: "Mana friendship ki rating entha? ⭐",
options: ["10/10 ❤️", "Infinity ♾️"]
},

{
q: "Nenu sad ga unte em chesthav? 🤝",
options: ["Comfort chestha ❤️", "Navvistha 😄"]
},

{
q: "Future lo kuda ilane friends ga untama? 😊",
options: ["Always ❤️", "Forever ♾️"]
},

{
q: "Last question... nenu special friend aa? 🥹",
options: ["Yes ❤️", "Of course 😍"]
}

];


let current = 0;


function startQuestions(){

document.getElementById("questionBox").style.display="none";

document.getElementById("quizBox").style.display="block";

showQuestion();

}



function noAnswer(){

alert("Try again 😄");

}



function showQuestion(){

document.getElementById("questionText").innerHTML =
questions[current].q;


document.getElementById("option1").innerHTML =
questions[current].options[0];


document.getElementById("option2").innerHTML =
questions[current].options[1];

}



function nextQuestion(){

document.getElementById("option1").disabled = true;
document.getElementById("option2").disabled = true;


setTimeout(function(){


current++;


if(current < questions.length){

showQuestion();

}

else{

document.getElementById("quizBox").style.display="none";

document.getElementById("messageBox").style.display="block";

}


document.getElementById("option1").disabled = false;
document.getElementById("option2").disabled = false;


},2000);


}



function showPhotos(){

document.getElementById("messageBox").style.display="none";

document.getElementById("photoBox").style.display="block";

}
