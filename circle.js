class circle extends figure {
    constructor(px, py, tam, vel) {
        super(px, py, tam, vel)
    }



    move() {
        this.px+=this.vel;
        if(this.px>1150){
            this.vel=-this.vel;
        }
        if(this.px<0){
            this.vel=-this.vel;
        }

    }

    paint() {
        fill(0);
        ellipse(this.px, this.py, this.tam,this.tam);
    }

}