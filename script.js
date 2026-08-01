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
        q: "Naa gurinchi neeku baaga telisina vishayam enti? 😊",
        options: ["Naa habits ❤️", "Naa expressions 😂"]
    },
    {
        q: "Mana friendship ki rating entha? ⭐",
        options: ["10/10 ❤️", "Infinity ♾️"]
    },
    {
        q: "Mana memories lo best enti? 📸",
        options: ["Funny moments 😂", "Anni special ❤️"]
    },
    {
        q: "Future lo kuda ilane friends ga untama? 🤝",
        options: ["Always ❤️", "Forever ♾️"]
    },
    {
        q: "Last question... nenu special friend aa? 😊",
        options: ["Yes ❤️", "Of course 😄"]
    }
];


let current = 0;


function startQuestions(){

    document.getElementById("questionBox").style.display="none";

    document.getElementById("quizBox").style.display="block";

    showQuestion();

}


function noAnswer(){

    alert("Wrong person 😄 Try again!");

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

    current++;


    if(current < questions.length){

        showQuestion();

    }

    else{

        document.getElementById("quizBox").style.display="none";

        document.getElementById("messageBox").style.display="block";

    }

}



function showPhotos(){

    document.getElementById("messageBox").style.display="none";

    document.getElementById("photoBox").style.display="block";

}
