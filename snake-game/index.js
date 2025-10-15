document.addEventListener("DOMContentLoaded", ()=>{

    const gameArena = document.getElementById("game-arena");
    const arenaSize = 500;
    const cellSize = 20;
    let gameStarted = false;
    let score = 0;
    let food = {x:300 , y:200};
    let snake =[{x:160, y:200},{x:140, y:200},{x:120, y:200}];
    let dx = cellSize;
    let dy = 0;


    function initializeGame (){
        const scoreBoard = document.getElementById("score-board");
        scoreBoard.textContent = 5;

    }
    initializeGame()





})