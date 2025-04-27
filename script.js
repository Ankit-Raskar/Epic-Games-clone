const buyButtons = document.querySelectorAll('.buy1');

buyButtons.forEach((button) => {
    button.addEventListener('click', function () {
        let gameTitle = this.parentElement.parentElement.querySelector('h2').innerText;
        alert(`Thank you for buying ${gameTitle}! 🎮`);
    });
});
