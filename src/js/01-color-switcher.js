const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor () {
    const a = getRandomHexColor(); 
    bodyColor.style.backgroundColor = a;
}


btnStart.addEventListener('click', () => {
    btnStart.setAttribute("disabled", "disabled");
    const intervalId = setInterval(() => {
    changeColor();
    }, 1000)
    
    btnStop.addEventListener('click', () => {
        clearInterval(intervalId);
        btnStart.removeAttribute("disabled");
    })

})


