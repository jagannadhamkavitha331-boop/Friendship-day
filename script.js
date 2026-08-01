let questions = [
    {
        q: "Mana friendship lo ekkuva drama evaru chestharu? 😂",
        options: ["Nenu 🤭", "Nuvvu 😂"]
    },
    {
        q: "Mana friendship ki rating entha? ⭐",
        options: ["10/10 ❤️", "Infinity ♾️"]
    },
    {
        q: "Years change aina mana friendship change avuthunda? 🤝",
        options: ["Never ❤️", "Asalu kaadu 😄"]
    }
];

let current = 0;

function startQuestions(){
    document.getElementById("questionBox").style.display="none";
    document.getElementById("quizBox").style.display="block";
    showQuestion();
}

function noAnswer(){
    alert("Wrong answer 😄 Try again!");
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
