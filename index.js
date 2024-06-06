let homeScoreEl = document.querySelector("#homeScore");
let awayScoreEl = document.querySelector("#awayScore");
let homeScorePts = 0;
let awayScorePts = 0;
let scoreOneEl = document.querySelector(".score1");
let scoreTwoEl = document.querySelector(".score2");

function restart() {
    homeScorePts = 0;
    awayScorePts = 0;
    homeScoreEl.textContent = 0;
    awayScoreEl.textContent = 0;
}

function increaseOne() {
    homeScorePts++;
    homeScoreEl.textContent = homeScorePts;
}

function increaseTwo() {
    homeScorePts += 2;
    homeScoreEl.textContent = homeScorePts;
}

function increaseThree() {
    homeScorePts += 3;
    homeScoreEl.textContent = homeScorePts;
}

function increaseAwayOne() {
    awayScorePts++;
    awayScoreEl.textContent = awayScorePts;
}

function increaseAwayTwo() {
    awayScorePts += 2;
    awayScoreEl.textContent = awayScorePts;
}

function increaseAwayThree() {
    awayScorePts += 3;
    awayScoreEl.textContent = awayScorePts;
}

function highlightLeader() {
    if (homeScorePts > awayScorePts) {
        scoreTwoEl.classList.remove("leaderHighlight");
        scoreOneEl.classList.add("leaderHighlight");
    } else if (homeScorePts === awayScorePts) {
        scoreTwoEl.classList.remove("leaderHighlight");
        scoreOneEl.classList.remove("leaderHighlight");
    }

    else {
        scoreOneEl.classList.remove("leaderHighlight");
        scoreTwoEl.classList.add("leaderHighlight")

    }
}