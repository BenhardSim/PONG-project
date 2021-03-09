class player2 {
    // right player
    constructor(ball) {
        this.w = 15;
        this.h = 90;
        this.x = width;
        // this.y = height / 2 - this.h / 2;
        this.y = ball.pos.y - this.h / 2;
        this.yspeed = 1;
        this.direction = 0;
    }

    show() {
        fill(255);
        noStroke();
        let y = constrain(this.y,0,height)
        rect(this.x - 3 * this.w, y, this.w, this.h);
    }

    update() {
        this.y += this.yspeed * this.direction;
    }

    dir(num) {
        this.direction = num
    }

    stop() {
        this.direction = 0;
    }

    hits(ball){
        if(ball.pos.y < this.y + this.h && ball.pos.y > this.y && ball.pos.x + ball.r == this.x - 2*this.w){
            ball.speed.x *= -1;
        }
    }

}