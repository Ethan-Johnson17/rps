function rock() {
    console.log("rock")
    document.getElementById('message').innerText = 'You tied!'
}

function paper() {
    console.log("paper")
}

function scissors() {
    console.log("scissors")
}



// function result() {
//     if () { document.getElementById('message').innerText = 'You tied!' }
//     if () { document.getElementById('message').innerText = 'You are decent.' }
//     if () { document.getElementById('message').innerText = 'You disappointment...' }
// }

let rpsArr = [
    {
        name: 'rock',
        imgUrl: 'http://media.gq.com/photos/5965abe1ae316b79758765c4/16:9/pass/the-rock-skin.jpg',
    },
    {
        name: 'paper',
        imgUrl: 'https://www.boothbayregister.com/sites/default/files/2016/01/field/image/us-constitution.jpg',
    },
    {
        name: 'scissors',
        imgUrl: 'https://www.thegreenhead.com/imgs/japanese-samurai-katana-sword-scissors-9.jpg'
    }
]

function rps(playerChoice) {
    const compChoice = randomRPS()
    let hid = document.getElementById('message').removeAttribute('hidden')
    console.log('player picked:', playerChoice, 'computer picked: ', compChoice)
    if (playerChoice == 'paper' && compChoice.name == "paper") {
        document.getElementById('message').innerText = 'You tied!'
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.boothbayregister.com/sites/default/files/2016/01/field/image/us-constitution.jpg" alt="Paper">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.boothbayregister.com/sites/default/files/2016/01/field/image/us-constitution.jpg" alt="Paper">`
    }
    if (playerChoice == 'scissors' && compChoice.name == "scissors") {
        document.getElementById('message').innerText = 'You tied!'
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.thegreenhead.com/imgs/japanese-samurai-katana-sword-scissors-9.jpg" alt="Scissors">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.thegreenhead.com/imgs/japanese-samurai-katana-sword-scissors-9.jpg" alt="Scissors">`
    }
    if (playerChoice == 'rock' && compChoice.name == "rock") {
        document.getElementById('message').innerText = 'You tied!'
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="http://media.gq.com/photos/5965abe1ae316b79758765c4/16:9/pass/the-rock-skin.jpg" alt="Rock">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="http://media.gq.com/photos/5965abe1ae316b79758765c4/16:9/pass/the-rock-skin.jpg" alt="Rock">`
    }


    if (playerChoice == 'paper' && compChoice.name == "rock") {
        document.getElementById('message').innerText = 'You Win!'
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.boothbayregister.com/sites/default/files/2016/01/field/image/us-constitution.jpg" alt="Paper">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="http://media.gq.com/photos/5965abe1ae316b79758765c4/16:9/pass/the-rock-skin.jpg" alt="Rock">`
    }
    if (playerChoice == 'rock' && compChoice.name == "scissors") {
        document.getElementById('message').innerText = 'You Win!'
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="http://media.gq.com/photos/5965abe1ae316b79758765c4/16:9/pass/the-rock-skin.jpg" alt="Rock">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.thegreenhead.com/imgs/japanese-samurai-katana-sword-scissors-9.jpg" alt="Scissors">`
    }
    if (playerChoice == 'scissors' && compChoice.name == "paper") {
        document.getElementById('message').innerText = 'You Win!'
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.thegreenhead.com/imgs/japanese-samurai-katana-sword-scissors-9.jpg" alt="Scissors">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.boothbayregister.com/sites/default/files/2016/01/field/image/us-constitution.jpg" alt="Paper">`
    }


    if (playerChoice == 'scissors' && compChoice.name == "rock") {
        document.getElementById('message').innerText = "You lose..."
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.thegreenhead.com/imgs/japanese-samurai-katana-sword-scissors-9.jpg" alt="Scissors">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="http://media.gq.com/photos/5965abe1ae316b79758765c4/16:9/pass/the-rock-skin.jpg" alt="Rock">`
    }
    if (playerChoice == 'rock' && compChoice.name == "paper") {
        document.getElementById('message').innerText = "You lose..."
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="http://media.gq.com/photos/5965abe1ae316b79758765c4/16:9/pass/the-rock-skin.jpg" alt="Rock">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.boothbayregister.com/sites/default/files/2016/01/field/image/us-constitution.jpg" alt="Paper">`
    }
    if (playerChoice == 'paper' && compChoice.name == "scissors") {
        document.getElementById('message').innerText = "You lose..."
        document.getElementById('Pimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.boothbayregister.com/sites/default/files/2016/01/field/image/us-constitution.jpg" alt="Paper">`
        document.getElementById('Cimg').innerHTML = `<img class="img-fluid rounded imgsz" src="https://www.thegreenhead.com/imgs/japanese-samurai-katana-sword-scissors-9.jpg" alt="Scissors">`
    }
}

function randomRPS() {
    // pick random elem within array
    // given animals
    // get random index between 0 length of array
    let randIndex = Math.floor(Math.random() * rpsArr.length)
    let compChoice = rpsArr[randIndex]

    return compChoice
    // document.getElementById('img').classList.add('spin')
    // document.getElementById('random').disabled = true
    // setTimeout(() => {
    //     document.getElementById('img').classList.remove('spin')
    //     document.getElementById('random').disabled = false
    //     animalSay(animal.name)
    // }, 2000)
}

// let select = RockPaperScissors.find(s => s.name === name)
// if (select == )


// if(playerChoice == 'rock' && compChoice == "paper")