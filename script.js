const buyButtons = document.querySelectorAll('.buy1');

buyButtons.forEach((button) => {
    button.addEventListener('click', function () {
        let gameTitle = this.parentElement.parentElement.querySelector('h2').innerText;
        alert(`Thank you for buying ${gameTitle}! 🎮`);
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
