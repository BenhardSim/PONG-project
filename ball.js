class Ball{

    constructor(){
        this.pos = createVector(width/2,height/2);
        this.speed = createVector(-10,9);
        this.r = 30;
    }

    show(){
        fill(255);
        noStroke()
        circle(this.pos.x,this.pos.y,this.r)
    }

    update(){
        if(this.pos.y - 15<=0 || this.pos.y + 15 > height){
            this.speed.y = this.speed.y * -1;
        }
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
        
    }

    score(){
        if(this.pos.x > width){
            this.pos = createVector(width/2,random(height));
            scoreright++
        }else if(this.pos.x < 0){
            this.pos = createVector(width/2,random(height));
            scoreleft++
        }
    }


}