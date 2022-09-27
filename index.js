let awayclub = "DRAKE FC"
let homeclub = "RANGERS"
document.getElementById("home-club-el").textContent = homeclub
document.getElementById("away-club-el").textContent = awayclub
let HomescoreboardEL = document.getElementById("Home-score-board-el")
let AwayscoreboardEL = document.getElementById("Away-score-board-el")
let btniiEL = document.getElementById("btn-ii-el")
let btniiiel = document.getElementById("btn-iii-el")
scores = 0
scores2 = 0



function Home1() {
    scores = scores + 1
    HomescoreboardEL.textContent = scores
}

function Home2() {
    scores = scores + 2
    HomescoreboardEL.textContent = scores
}

function Home3() {
    scores = scores + 3
    HomescoreboardEL.textContent = scores
}

function Away1() {
    scores2 = scores2 + 1
    AwayscoreboardEL.textContent = scores2
}

function Away2() {
    scores2 = scores2 + 2
    AwayscoreboardEL.textContent = scores2
}

function Away3() {
    scores2 = scores2 + 3
    AwayscoreboardEL.textContent = scores2
}

function reset() {
    let Allreset = scores
    let Allreset2 = scores2
    HomescoreboardEL.textContent += Allreset
    AwayscoreboardEL.textContent += Allreset2
    HomescoreboardEL.textContent = 0
    AwayscoreboardEL.textContent = 0
    scores = 0
    scores2 = 0
}

function remove1() {
    scores = scores - 1
    HomescoreboardEL.textContent = scores
}

function remove2() {
    scores2 = scores2 - 1
    AwayscoreboardEL.textContent = scores2
}