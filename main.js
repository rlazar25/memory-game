let container = document.querySelector('.container');
createGrid();
let cards =document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flip));
let flipped = [];

function flip(e){
    this.removeEventListener('click', flip)
    flipped.push(this);
    this.classList.add('active');
    if (flipped.length === 2){
        removeAllClicks();
        checkCards();
    }
}

function removeAllClicks(){
    cards.forEach(card => card.removeEventListener('click', flip));
}

function checkCards(){
    let back1 = flipped[0].querySelector('.back');
    let back2 = flipped[1].querySelector('.back');

    console.log('flipped')
    if(back1.innerHTML === back2.innerHTML){
        flipped = [];
        returnClicks();
    } else {
        setTimeout(()=>{
            flipped.forEach(card => card.classList.remove('active'));
            flipped = []
            returnClicks();
        },700)
    }
}

function returnClicks(){
    let notActive = document.querySelectorAll('.card:not(.active)');
    notActive.forEach(card => card.addEventListener('click', flip))
}

function createGrid(){
    let text = '';
    for (let i = 0; i < 4; i++) {
        let rand = Math.floor(Math.random()*icons.length)
        text +=`
        <div class="card">
            <div class="back">${icons[rand]}</div>
            <div class="front"></div>
        </div>
        `.trim();
        icons.splice(rand, 1)
    }
    container.innerHTML = text
}