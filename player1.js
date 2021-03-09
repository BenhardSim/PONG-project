class player1{
    // left player
    constructor(){
        this.w = 15;
        this.h = 90;
        this.x = 0;
        this.y = constrain(height/2 - this.h/2,0,height);
        this.yspeed = 1;
        this.direction = 0;
    }

    show(){
        fill(255);
        noStroke();
        rect(this.x + 2*this.w,this.y,this.w,this.h);
    }

    update(){
        this.y += this.yspeed*this.direction;
    }s

    dir(num){
        this.direction = num
    }

    stop(){
        this.direction = 0;
    }
    
    hits(ball){
        if(ball.pos.y < this.y + this.h && ball.pos.y > this.y && ball.pos.x - ball.r == this.x + 2*this.w){
            ball.speed.x *= -1;
        }
    }


}