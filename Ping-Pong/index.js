document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("ping-pong-table");
    const paddle = document.getElementById("paddle");
    const ball = document.getElementById("ball");

    // Initial ball position
    let ballX = 50; // distance from left of table
    let ballY = 50; // distance from top of table

    // Ball velocity
    let dx = 8; // horizontal speed
    let dy = 8; // vertical speed

    // Set initial ball position
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // ==== BALL MOVEMENT LOOP ====
    setInterval(() => {
        // Move the ball
        ballX += dx;
        ballY += dy;

        // Apply position to ball element
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        // ==== BALL ↔ PADDLE COLLISION ====
        const ballLeft = ballX;
        const ballRight = ballX + ball.offsetWidth;
        const ballTop = ballY;
        const ballBottom = ballY + ball.offsetHeight;

        const paddleLeft = paddle.offsetLeft;
        const paddleRight = paddle.offsetLeft + paddle.offsetWidth;
        const paddleTop = paddle.offsetTop;
        const paddleBottom = paddle.offsetTop + paddle.offsetHeight;

        if (
            ballRight > paddleLeft &&
            ballLeft < paddleRight &&
            ballBottom > paddleTop &&
            ballTop < paddleBottom
        ) {
            // Calculate overlap on each side
            const overlapLeft = ballRight - paddleLeft;
            const overlapRight = paddleRight - ballLeft;
            const overlapTop = ballBottom - paddleTop;
            const overlapBottom = paddleBottom - ballTop;

            const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

            // Decide bounce direction based on smallest overlap
            if (minOverlap === overlapLeft || minOverlap === overlapRight) {
                dx *= -1; // bounce horizontally
            } else {
                dy *= -1; // bounce vertically
            }
        }

        // ==== BALL ↔ TABLE COLLISION ====
        if (ballX > table.offsetWidth - ball.offsetWidth - 4 || ballX <= 0) {
            dx *= -1;
        }
        if (ballY > table.offsetHeight - ball.offsetHeight - 4 || ballY <= 0) {
            dy *= -1;
        }

    }, 20);

    // ==== PADDLE MOVEMENT ====
    let paddleY = 0;
    const dPy = 10;

    document.addEventListener("keydown", (event) => {
        event.preventDefault(); // stop page scrolling with arrow keys

        if (event.keyCode === 38 && paddleY > 0) { 
            // UP arrow
            paddleY -= dPy;
        } else if (
            event.keyCode === 40 &&
            paddleY < table.offsetHeight - paddle.offsetHeight - 5
        ) {
            // DOWN arrow
            paddleY += dPy;
        }

        paddle.style.top = `${paddleY}px`;
    });
});
