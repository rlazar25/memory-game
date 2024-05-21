let container = document.querySelector('.container');
createGrid();
let cards =document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flip));
let flipped = [];

function flip(e){
    flipped.push(this);
    this.classList.add('active');
    if (flipped.length === 2){
        checkCards();
    }
}

function checkCards(){
    let back1 = flipped[0].querySelector('.back');
    let back2 = flipped[1].querySelector('.back');

    console.log('flipped')
    if(back1.innerHTML === back2.innerHTML){

    } else {
        setTimeout(()=>{
            flipped.forEach(card => card.classList.remove('active'));
            flipped = []
        },700)
    }
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