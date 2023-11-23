// Modularizing the application using IIFE
let stopWatch = (function () {
    // variables to declare the units of the time.
    let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

    // variable to bind the HTML with JS.
    let timerRef = document.querySelector('.timerDisplay');
    let int = null;

    // function to display the time in the timer.
    function displayTimer() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        // We may use the below variable to make the stopwatch app more precise, by adding hours and milliseconds as well
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

        timerRef.innerHTML = `${m} : ${s}`;
    }

    // Implementing even deligation:
    // function to handle the button clicks
    function handleButtonClicks(e) {
        const target = e.target;
        if (target.className == 'startTimer') {
            if (int !== null) {
                clearInterval(int);
            }
            // use setInterval() : because it will call the specific function in the specified interval
            int = setInterval(displayTimer, 10);
            return;

        } else if (target.className == 'stopTimer') {
            clearInterval(int);
            return;
        } else if (target.className == 'resetTimer') {
            clearInterval(int);
            [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
            timerRef.innerHTML = '00 : 00';
            return;
        }
    }
    // Event deligation
    document.addEventListener('click', handleButtonClicks)



})();
