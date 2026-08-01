let questions = [
{
q:"Mana friendship lo ekkuva drama evaru chestharu? 😂",
options:["Nenu 🤭","Nuvvu 😂"]
},
{
q:"Nuvvu nannu emani pilusthav? 😄",
options:["Golduu ❤️","Bestie 😊"]
},
{
q:"Nannu first time chusinappudu em anukunnav? 😊",
options:["Manchi person ❤️","Chala crazy 😂"]
},
{
q:"Mana friendship lo funniest memory enti? 😂",
options:["Crazy moments 😜","Navvina moments ❤️"]
},
{
q:"Naa lo neeku nachina quality enti? ✨",
options:["Caring ❤️","Funny 😂"]
},
{
q:"Mana friendship ki rating entha? ⭐",
options:["10/10 ❤️","Infinity ♾️"]
},
{
q:"Future lo kuda ilane friends ga untama? 🤝",
options:["Always ❤️","Forever ♾️"]
},
{
q:"Last question... nenu special friend aa? 🥹",
options:["Yes ❤️","Of course 😍"]
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

let box = document.getElementById("quizBox");

box.style.opacity="0";


setTimeout(()=>{

document.getElementById("questionText").innerHTML =
questions[current].q;


document.getElementById("option1").innerHTML =
questions[current].options[0];


document.getElementById("option2").innerHTML =
questions[current].options[1];


box.style.opacity="1";


},400);

}


function nextQuestion(){

current++;


if(current < questions.length){

showQuestion();

}

else{

document.getElementById("quizBox").style.display="none";

document.getElementById("messageBox").style.display="block";

}

}
let photoIndex = 0;


let photos = [
"1773888361623.jpg",
"ChatGPT Image Jun 22, 2026 at 08_58_15 PM.png",
"IMG-20260314-WA0001.jpg",
"IMG-20260314-WA0003.jpg",
"IMG-20260314-WA0004.jpg",
"IMG20250328143807.jpg",
"IMG_1442.JPG",
"IMG_1608.JPEG",
"IMG_1609.JPEG",
"IMG_1610.JPEG",
"IMG_20250328_143737.jpg",
"IMG_20250328_152814.jpg",
"IMG_9919.JPG",
"Snapchat-181886413.jpg"
];


let captions = [
"Beautiful memories ❤️",
"Every moment was special ✨",
"Crazy friendship days 😂",
"Always remember these smiles 😊",
"Friendship forever 🤝",
"Never forget these moments ❤️",
"Forever memories 📸",
"Best days together 💕",
"Always stay happy 😊",
"Special moments ✨",
"Memories that stay forever ❤️",
"Friends forever 🤍",
"Thank you for everything 🥰",
"Happy Friendship Day ❤️"
];


function showPhotos(){

document.getElementById("messageBox").style.display="none";

document.getElementById("photoBox").style.display="block";


photoIndex = 0;

changePhoto();

}


function changePhoto(){

    let img = document.getElementById("photo");
    let text = document.getElementById("caption");

    img.onload = function(){

        text.innerHTML = captions[photoIndex];

        setTimeout(function(){

            photoIndex++;

            if(photoIndex >= photos.length){
                photoIndex = 0;
            }

            changePhoto();

        },4000);

    };

    img.src = photos[photoIndex];

}
// Optional: stop slideshow when page is closed
window.addEventListener("beforeunload", function(){
    photoIndex = 0;
});
