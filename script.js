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
        q: "Future lo kuda ilane friends ga untama? 🤝",
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

    let buttons = document.querySelectorAll("#quizBox button");

    buttons.forEach(btn => btn.disabled = true);


    let box = document.getElementById("quizBox");

    box.style.opacity="0";


    setTimeout(function(){

        current++;


        if(current < questions.length){

            showQuestion();

            box.style.opacity="1";

        }
        else{

            document.getElementById("quizBox").style.display="none";

            document.getElementById("messageBox").style.display="block";

        }


        buttons.forEach(btn => btn.disabled=false);


    },2500);

}




// Photos

let photoIndex = 0;


let photos = [
    "1773888361623.jpg"
];


let captions = [
    "Beautiful memories ❤️"
];



function showPhotos(){

    document.getElementById("messageBox").style.display="none";

    document.getElementById("photoBox").style.display="block";

    photoIndex=0;

    changePhoto();

}



function changePhoto(){

    let img=document.getElementById("photo");

    let text=document.getElementById("caption");


    img.src = photos[photoIndex];

    text.innerHTML = captions[photoIndex];


}
