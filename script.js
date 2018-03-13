var seconds = 0
var countPost = document.getElementById('secondCounter')

function incrementSeconds() {
    seconds += 1
    countPost.innerText = seconds;
}

var interval = setInterval(incrementSeconds, 1000)