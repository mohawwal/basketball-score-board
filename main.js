let homeScoresEL = document.querySelector(".homeScoresheet")
let awayScoresEL = document.querySelector(".awayScoresheet")

scores = 0
scores2 = 0

function Home1() {
    scores = scores + 1
    homeScoresEL.textContent = scores
}
function Home2() {
    scores += 2
    homeScoresEL.textContent = scores
}
function Home3() {
    scores += 3
    homeScoresEL.textContent = scores
}

function removeHome() {
    scores -= 1
    homeScoresEL.textContent = scores
}


function Away1() {
    scores2 = scores2 + 1
    awayScoresEL.textContent = scores2
}
function Away2() {
    scores2 += 2
    awayScoresEL.textContent = scores2
}
function Away3() {
    scores2 += 3
    awayScoresEL.textContent = scores2
}

function removeAway() {
    scores2 -= 1
    awayScoresEL.textContent = scores2
}

function reset() {
    scores = scores-scores
    homeScoresEL.textContent = scores
    scores2 = scores2-scores2
    awayScoresEL.textContent = scores2
}