import {
    buttonRain,
    buttonNature,
    buttonCoffeShop,
    buttonFirePlace,
    firePlaceAudio,
    rainAudio,
    natureAudio,
    coffeShopAudio
} from "./elements.js"

export default function Cards(){
    function toggleSelect(option){
        if (option == buttonRain){
            buttonRain.classList.toggle('select')
            buttonNature.classList.remove('select')
            buttonCoffeShop.classList.remove('select')
            buttonFirePlace.classList.remove('select')
        }
        if (option == buttonCoffeShop){
            buttonCoffeShop.classList.toggle('select')
            buttonRain.classList.remove('select')
            buttonNature.classList.remove('select')
            buttonFirePlace.classList.remove('select')
        }
        if (option == buttonNature){
            buttonNature.classList.toggle('select')
            buttonRain.classList.remove('select')
            buttonCoffeShop.classList.remove('select')
            buttonFirePlace.classList.remove('select')
        }
        if (option == buttonFirePlace){
            buttonFirePlace.classList.toggle('select')
            buttonRain.classList.remove('select')
            buttonNature.classList.remove('select')
            buttonCoffeShop.classList.remove('select')
        } 
        if (option == 'resetCard') {
            buttonFirePlace.classList.remove('select')
            buttonRain.classList.remove('select')
            buttonNature.classList.remove('select')
            buttonCoffeShop.classList.remove('select')
        }
    }
    
    function bgAudio(option){
        if (option == 'buttonRain'){
            if (rainAudio.paused){
                // rainAudio.loop = true    
                rainAudio.play()
            } else {
                rainAudio.pause()
            }
            natureAudio.pause()
            firePlaceAudio.pause()
            coffeShopAudio.pause()
        } 
        if (option == 'buttonCoffeShop'){
            if (coffeShopAudio.paused){
                coffeShopAudio.play()    
            } else {
                coffeShopAudio.pause()
            }
            natureAudio.pause()
            firePlaceAudio.pause()
            rainAudio.pause()
        } 
        if (option == 'buttonNature'){
            if (natureAudio.paused){
                natureAudio.play()    
            } else {
                natureAudio.pause()
            }
            coffeShopAudio.pause()
            firePlaceAudio.pause()
            rainAudio.pause()
        } 
        if (option == 'buttonFirePlace'){
            if (firePlaceAudio.paused){
                firePlaceAudio.play()    
            } else {
                firePlaceAudio.pause()
            }
            coffeShopAudio.pause()
            rainAudio.pause()
            natureAudio.pause()
        }
        if (option == 'stop'){
            firePlaceAudio.pause()
            coffeShopAudio.pause()
            rainAudio.pause()
            natureAudio.pause()
        }
        firePlaceAudio.loop = true
        coffeShopAudio.loop = true
        rainAudio.loop = true
        natureAudio.loop = true
    }
    return {
        bgAudio, 
        toggleSelect
    }
}
