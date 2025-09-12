document.addEventListener("DOMContentLoaded", () => {

    let table = document.getElementById("ping-pong-table");
    let paddle = document.getElementById("paddle");
    let ball = document.getElementById("ball");


    // ballX and ballY will help us to position the ball at the start of the game w.r.t table.
    let ballX = 50; //distance of the top of the ball with.respect.to table 
    let ballY = 50; //distance of the left of the ball w.r.t table

    let dx = 8; //make ball move in x direction by 2px if positive and -x direction if negative
    let dy = 8;//make ball move in y direction by 2px if positive and -y direction if negative

    ball.style.left = `${ballX}px`  //ball -> element, style -> property, top -> position. changing the position of the ball from top as the ballX value changes
    ball.style.top = `${ballY}px` //ball -> element, style -> property, top -> position. changing the position of the ball from left as the ballY value changes


    setInterval(() => {

        ballX += dx;
        ball.style.left = `${ballX}px`;
        if(ballX > table.offsetWidth - ball.offsetWidth-4 || ballX <= 0){
            dx *= -1;
        }

        ballY += dy;
        ball.style.top = `${ballY}px`;
        if(ballY > table.offsetHeight - ball.offsetHeight-4 || ballY <= 0){
            dy *= -1;
        }

    },20);

    let paddleY = 0;
    let dPy = 10;
    document.addEventListener("keydown", (event)=> {
        event.preventDefault() // to prevent the default behaviour execution.
        if(event.keyCode == 38 && paddleY > 0){
            paddleY += (-1)*dPy;
        }
        else if (event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight - 5){
            paddleY += dPy;
        }
        paddle.style.top = `${paddleY}px`
    });









            














})