$("document").ready(function () {
    let timer;
    let timeLeft = 25 * 60;// converted to seconds

    //   define a function wich displays the timer
    function displayTimer() {
        let hours = Math.floor(timeLeft / 3600);// calculate hours
        let minutes = Math.floor(timeLeft/60)- hours * 60; //calculate minutes
        let seconds = timeLeft - (hours * 3600) - (minutes * 60);//calculate seconds

        $(".hours").text(hours < 10 ? "0" + hours : hours);
        $(".minutes").text(minutes < 10 ? "0" + minutes : minutes);
        $(".seconds").text(seconds < 10 ? "0" + seconds : seconds);
    }

    // By clicking the start button
    $(".start-btn").on("click", function () {
        clearInterval(timer);
        timer = setInterval(function () {
            timeLeft--;// decrease the time by 1s
            displayTimer();
            if (timeLeft <= 0) {
                clearInterval(timer);
                $("#alarm-sound")[0].play();
            }
        }, 1000)
    });

   //  By clicking the reset buttton
    $(".reset-btn").on("click", function () {
        clearInterval(timer);// stop the timer 
        timeLeft = 25 * 60;
        displayTimer();//update the display
        $("#alarm-sound")[0].pause();// stop the alarm
    })

    // By clicking the chosen time button
    $(".choose-timer-btn").on("click", function () {
        let chosenTime= prompt("Choose time in minutes, please!")
        if (chosenTime !== null && chosenTime.trim() !== "" && chosenTime > 0) {
            timeLeft = parseInt(chosenTime)*60;// converts the time to the number and to the seconds
            displayTimer();//Update the display with the new chosen time
        } else {
             alert("Please fill in with correct data!")// show a message if the input is not valid
        }
    })

})