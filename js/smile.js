
let numberOfFaces = 5;
let score = 0;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide')

function generateFaces() {
    for (i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.src = 'images/smile.png';

        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 400) + 1;

        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    score += 1;
    generateFaces();
}

function gameOver() {
    alert(`Game Over! \n\nYour final score was ${score}`);
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
    
    restart = confirm('Click OK to play again')
    if (restart == true){
        document.location.reload()
    } else {
        alert('Goodbye!')
    }  
}

