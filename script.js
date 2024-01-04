const words = ['Be Strong Never Surrender','Trust Yourself','Keep Moving And Focus'];
let currentIndex = 0;

function displayWord(){
    document.getElementById('hashtag').textContent = words[currentIndex];
    currentIndex = (currentIndex +1) % words.length;

}

setInterval(displayWord,3000);

// Fungsi untuk meningkatkan jumlah view
function increasePageViews() {
    // Cek apakah sudah ada data views di local storage
    if (localStorage.getItem('pageViews')) {
        // Jika sudah ada, tingkatkan nilainya
        let views = parseInt(localStorage.getItem('pageViews'));
        views++;
        localStorage.setItem('pageViews', views);
    } else {
        // Jika belum ada, buat data views dan set nilainya menjadi 1
        localStorage.setItem('pageViews', 1);
    }

    // Tampilkan jumlah views di HTML
    document.getElementById('viewCount').innerText = localStorage.getItem('pageViews');
}
