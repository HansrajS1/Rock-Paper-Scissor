let compscore = 0;
let userscore = 0;

let choices = document.querySelectorAll(".choices");
const result = document.querySelector(".result");
const sc = document.querySelector(".comp-score");
const sc2 = document.querySelector(".user-score");
const comp = document.querySelector(".comp");
const display = document.querySelector(".display");
const user = document.querySelector(".user");
const RESET = document.querySelector(".RESET");



choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        display.classList.remove("hide")
        playgames(userchoice);

    })
});

const compchoices = () => {
    let pos1 = Math.floor(Math.random() * 3)
    let option = ["ROCK", "PAPER", "SCISSOR"]
    return option[pos1];
}


const playgames = (userchoice) => {
    let compchoice = compchoices()
    main(compchoice, userchoice);
    if (compchoice == userchoice) {
        draw()
    }
    else {
        let userwin = true;
        if (userchoice === "PAPER") {
            userwin = compchoice === "SCISSOR" ? false : true;
        }
        else if (userchoice === "ROCK") {
            userwin = compchoice === "SCISSOR" ? true : false;
        }
        else {
            userwin = compchoice === "PAPER" ? true : false;
        }
        showwin(userwin)
    }
}
const draw = () => {
    result.innerText = "Draw";
    result.style.backgroundColor = "black"
}

const showwin = (userwin) => {
    if (userwin) {
        userscore++
        sc2.innerText = userscore;
        result.innerText = "You Win!";
        result.style.backgroundColor = "green"

    }
    else {
        compscore++
        sc.innerText = compscore;
        result.innerText = "You Loss!";
        result.style.backgroundColor = "red"
    }
}

const main = (compchoice, userchoice) => {
    if (compchoice === "SCISSOR") {
        comp.innerText = "✌";
    }
    else if (compchoice === "ROCK") {
        comp.innerText = "✊";
    }
    else {
        comp.innerText = "🖐️";
    }

    if (userchoice === "SCISSOR") {
        user.innerText = "✌";
    }
    else if (userchoice === "ROCK") {
        user.innerText = "✊";
    }
    else {
        user.innerText = "🖐️";
    }
}

RESET.addEventListener("click", () => {
    sc.innerText="0"
    sc2.innerText="0"
})