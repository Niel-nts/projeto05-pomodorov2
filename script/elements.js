const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonAdd = document.querySelector('.increment')
const buttonRemove = document.querySelector('.decrement')
const buttonFirePlace = document.querySelector('.fireplace')
const buttonCoffeShop = document.querySelector('.coffeShop')
const buttonRain = document.querySelector('.rain')
const buttonNature = document.querySelector('.nature')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const firePlaceAudio = new Audio("./audio/fireplace.wav")
const rainAudio = new Audio("./audio/rain.wav")
const natureAudio = new Audio("./audio/nature.wav")
const coffeShopAudio = new Audio("./audio/coffeShop.wav")

export {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonAdd,
    buttonRemove,
    buttonFirePlace,
    buttonCoffeShop,
    buttonRain,
    buttonNature,
    displayMinutes,
    displaySeconds,
    buttonPressAudio,
    kitchenTimer,
    firePlaceAudio,
    rainAudio,
    natureAudio,
    coffeShopAudio
}