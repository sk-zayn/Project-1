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




    function drawScoreBoard(){
        const scoreBoard = document.getElementById("score-board");
        scoreBoard.textContent = `Score ${score}`;
    }

    function drawDiv(x, y, classname){
        const div = document.createElement("div");
        div.classList.add(classname);
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        return div

    }

    function drawSnakeAndFood(){
        gameArena.innerHTML = ''; //To make the game arena empty before drawing anything on it.

        snake.forEach((snakeCell)=>{
            const element = drawDiv(snakeCell.x , snakeCell.y, "snake");
            gameArena.appendChild(element)
        })

        const foodElement = drawDiv(food.x , food.y , "food");
        gameArena.appendChild(foodElement);


    }

    function gameLoop(){
        setInterval(() => {
            drawScoreBoard();
            drawSnakeAndFood();
        }, 1000);
    }

    function runGame(){
        gameStarted = true;
        gameLoop();

    }

    function initializeGame (){
        const scoreBoard = document.getElementById("score-board");

        const startButton = document.getElementById("start-button")
        startButton.addEventListener("click", ()=> {
            startButton.style.display = "none";
            runGame();
        })

    }
    initializeGame()





})