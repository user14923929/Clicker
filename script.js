let score = 0
console.warn("Don't use 'score = any_number' or 'for (let index = 0; i < any_number; i++) { addToScore() }', PLASE DONT'T USE IT!!!!!!!!!!")

function addToScore() {
    if (score >= 5200) {
        showScore()
    }
    else {
        score++
    }
}

function showScore() {
    alert("Score: " + score + "/5200")
}