
let body = document.querySelector('body')

let divForgotPassword = document.querySelector('.forgotPassword')

let buttonForgot = document.createElement('button')
    buttonForgot.classList.add('buttonForgot')
    buttonForgot.innerText = 'Recuperar senha'

let spanRecover = document.createElement('span')
    spanRecover.innerHTML = `Esqueceu a sua senha? `

//APENDS FORGOT PASSWORD
    spanRecover.append(buttonForgot)

divForgotPassword.append(spanRecover)

buttonForgot.addEventListener('click', () => {
//MODAL CONTAINER
let modalContainer = document.createElement('section')
    modalContainer.classList.add('modalContainer')

//RECOVER PASSWORD
let recoverPassword = document.createElement('section')
    recoverPassword.classList.add('recoverPassword')

//DIVS RECOVER SECTION
let divExitBut = document.createElement('div')
    divExitBut.classList.add('exitBut')

    let exitButton = document.createElement('button')
        exitButton.classList.add('exitButton')
        exitButton.innerText = 'X'

let divRecoverTitle = document.createElement('div')
    divRecoverTitle.classList.add('recoverTitle')

    let titleH2 = document.createElement('h2')
        titleH2.innerText = 'Recuperar senha'

let divRecoverDescrip = document.createElement('div')
    divRecoverDescrip.classList.add('recoverDescription')
    
    let descripH3 = document.createElement('h3')
        descripH3.innerText = 'Vamos enviar um email com os passos a serem seguidos pelo usuário.'

let divRecoverEmail = document.createElement('div')
    divRecoverEmail.classList.add('recoverEmail')

    let emailLabel = document.createElement('label')
        emailLabel.for = 'recovEmail'
        emailLabel.innerText = 'Email'

    let emailInput = document.createElement('input')
        emailInput.type = 'email'
        emailInput.name = 'recovEmail'
        emailInput.id = 'recovEmail'
        emailInput.placeholder = 'Digite o seu email aqui...'

let divRecoverButton = document.createElement('div')
    divRecoverButton.classList.add('recoverButton')

    let recovButton = document.createElement('button')
        recovButton.classList.add('recovButton')
        recovButton.innerText = 'Enviar email'


//EXIT BUTTON EVENT LISTENER
exitButton.addEventListener('click', () => {
    modalContainer.remove()
})

//APENDS
divRecoverButton.append(recovButton)
divRecoverEmail.append(emailLabel, emailInput)
divRecoverDescrip.append(descripH3)
divRecoverTitle.append(titleH2)
divExitBut.append(exitButton)

recoverPassword.append(divExitBut, divRecoverTitle, divRecoverDescrip, divRecoverEmail, divRecoverButton)

modalContainer.append(recoverPassword)

body.append(modalContainer)
})


