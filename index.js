

const score_div = document.querySelector("#score");
const start_button = document.querySelector("#start");

const question_div = document.querySelector("#question");
const alt1_btn = document.querySelector("#alt1");
const alt2_btn = document.querySelector("#alt2");
const alt3_btn = document.querySelector("#alt3");
const alt4_btn = document.querySelector("#alt4");

score_div.style.display = 'none';
question_div.style.display = 'none';
alt1_btn.style.display = 'none';
alt2_btn.style.display = 'none';
alt3_btn.style.display = 'none';
alt4_btn.style.display = 'none';


let points = 0;
let question_index = 0;

let questions = new Array();

questions.push(create_question("Hur många invånare har Umeå?", 4, 
                               "40000", "100000", "76000", "89000"));

questions.push(create_question("Vilket år grundades umeå?", 3, 
                               "1846", "1571", "1622", "1732"));

questions.push(create_question("Vilket år bränndes Umeå ner av Ryssarna?", 3,
                               "1814", "1798", "1714", "1692"));

questions.push(create_question("Vilket år grundades Umeå universitet?", 3,
                               "1867", "1785", "1965", "1943"));

questions.push(create_question("Ungefär många studenter har Umeå universitet?", 1,
                               "38000", "49000", "28000", "43000"));

questions.push(create_question("Vilket år invigdes Umeå flygplats?", 2,
                               "1982", "1962", "1953", "1978"));

questions.push(create_question("Hur lång är Umeälven?", 2,
                               "330km", "470km", "720km", "670km"));

questions.push(create_question("Vilken av artisterna kommer från Umeå?", 1,
                               "Fricky", "Veronica Maggio", "Magnus Uggla", "Håkan Hellström"));

questions.push(create_question("Hur många år har Umeå vunnit sveriges bästa idrottsstad?", 3,
                               "5", "2", "3", "4"));


alt1_btn.addEventListener('click', choice_selected);
alt2_btn.addEventListener('click', choice_selected);
alt3_btn.addEventListener('click', choice_selected);
alt4_btn.addEventListener('click', choice_selected);



function choice_selected(e) {

    let choice;

    switch(this.id) {
        case "alt1":
            choice = 1;
            break;
        case "alt2":
            choice = 2;
            break;
        case "alt3":
            choice = 3;
            break;
        case "alt4":
            choice = 4;
            break;
        default:
            console.log("Error: Id doesn't match!");
    }

    if(questions[question_index].answer_index == choice) {
        points++;
    }

    if(question_index >= questions.length - 1) {
        show_score();
    }
    else {
        question_index++;
        set_question(questions[question_index]);
    
    }
}

start_button.addEventListener('click', () => {
    start_button.style.display = 'none';
    question_div.style.display = 'block';
    alt1_btn.style.display = 'inline-block';
    alt2_btn.style.display = 'inline-block';
    alt3_btn.style.display = 'inline-block';
    alt4_btn.style.display = 'inline-block';

    set_question(questions[0]);

});

function show_score() {

    question_div.style.display = 'none';
    alt1.style.display = 'none';
    alt2.style.display = 'none';
    alt3.style.display = 'none';
    alt4.style.display = 'none';

    score_div.innerHTML = "Du svarade rätt på  " + points + " av " + questions.length + " frågor!";
    score_div.style.display = 'block';
}

function create_question(question, answer_index, alt1, alt2, alt3, alt4) {
    let q = {
        question: question,
        answer_index: answer_index,
        alt1: alt1,
        alt2: alt2,
        alt3: alt3,
        alt4: alt4
    };

    return q;
}

function set_question(question) {
    question_div.innerHTML = question.question;
    alt1.innerHTML = question.alt1;
    alt2.innerHTML = question.alt2;
    alt3.innerHTML = question.alt3;
    alt4.innerHTML = question.alt4;
}