'use strict'

let deferredInstallPrompt = null
const installButton = document.getElementById('butInstall')
installButton.addEventListener('click', installPWA)

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent)

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden')
}

function installPWA(evt){
    deferredInstallPrompt.prompt()
    evt.srcElement.setAttibute('hidden', true)
    deferredInstallPrompt.userChoise.then((choice) =>{
        if(choice.outcome === "accepted") {
            console.log("aceptado")
        } else {
            console.log("no aceptado")
        }
        deferredInstallPrompt = null
    })
}

window.addEventListener("appinstalled", logAppInstalled)

function appinstalled(evt){
    console.log("Juego instalado app")
}