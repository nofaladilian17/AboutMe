const words = ['Be Strong Never Surrender','Trust Yourself','Keep Moving And Focus'];
let currentIndex = 0;

function displayWord(){
    document.getElementById('hashtag').textContent = words[currentIndex];
    currentIndex = (currentIndex +1) % words.length;

}

setInterval(displayWord,3000);
