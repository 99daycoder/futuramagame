const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');
const gameOver = document.getElementById('gameOver');

const jump = ()=>{
    dino.classList.add('jump-animation');
    // we need to REMOVE the jump-animation, once it's added, so it's ready for the next jump
    setTimeout(
        // first function is another function, e.g what is going to happen etc
    ()=>{dino.classList.remove('jump-animation')}
    ,
     // second argument is in miliseconds
    1000
    );
}

document.addEventListener('keypress', ()=>{
    
    if (!dino.classList.contains('jump-animation')){
        jump();
    }
});

// every 50 ms update the status of the game. Rock position on the left, dino position on the top needed for collision 
let refreshID = setInterval(
// function
()=>{
    // get the top position value of the dino
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
    const topScore = parseInt(window.get)
    // hide the rock
    if (rockLeft<0) {rock.style.display="none"}
    else {rock.style.display = ""}
    // if (rockLeft>150) {rock.style.display="none"}
    // else {rock.style.display = ""}
if (rockLeft <50  && dinoTop >130 ) {
gameOver.textContent = "GAME OVER - Try Again!"
clearInterval (refreshID);
    // console.log('crash')
    // alert("Game Over Fry! Your score was: " + score.innerText + "\n\n Play Again?");
    // location.reload();
}

}
    // 50 ms intervals 
, 50)