$(document).ready(function() {
    let countdownInterval;
    let isCountingDown = false;
    const audio = new Audio('./music/enjoyit.mp3');

    function setClock(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        $('#hh').text(hours.toString().padStart(2, '0'));
        $('#mm').text(minutes.toString().padStart(2, '0'));
        $('#ss').text(remainingSeconds.toString().padStart(2, '0'));
    }

    function startCountdown(seconds) {
        if (isCountingDown) return;

        isCountingDown = true;
        setClock(seconds);

        countdownInterval = setInterval(() => {
            if (seconds === 0) {
                clearInterval(countdownInterval);
                isCountingDown = false;
                playEndSound();
            } else {
                seconds--;
                setClock(seconds);
            }
        }, 1000);
    }

    function playEndSound() {
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 15000);
    }

    $('#start').click(function() {
        startCountdown(25 * 60);
    });

    $('#reset').click(function() {
        clearInterval(countdownInterval);
        setClock(0);
        isCountingDown = false;
    });

    $('#edit').click(function() {
        clearInterval(countdownInterval);
        isCountingDown = false;
        setClock(0);

        let userInput = prompt("Enter time in minutes (max 1440 minutes, decimal allowed) enter 0.1 and enjoy the music :):");
        let minutes = parseFloat(userInput);

        if (!isNaN(minutes) && minutes >= 0 && minutes <= 1440) {
            minutes = Math.floor(minutes * 10) / 10;
            startCountdown(minutes * 60);
        } else {
            alert("Please enter a valid number between 0 and 1440.");
        }
    });

    setClock(0);
});
