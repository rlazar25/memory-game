let container = document.querySelector('.container');
createGrid();
let cards =document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', flip));

function flip(e){
    alert(1)
}
function createGrid(){
    let text = '';
    for (let i = 0; i < 4; i++) {
        text +=`
        <div class="card">
            <div class="back"></div>
            <div class="front">${i}</div>
        </div>
        `.trim();
    }
    container.innerHTML = text
}